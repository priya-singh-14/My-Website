// Per-item wrapping drag/pan engine for the infinite grid. One rAF loop, one
// transform write per item per frame, no layout reads inside the loop.

export const defaultConfig = {
  friction: 0.92,
  ease: 1,
  dragThresholdPx: 6,
  wheelSensitivity: 1,
  velocityEpsilon: 0.02,
  // Lean toward the hovered cell. Overdamped -- glides in, no rebound.
  nudgeStrength: 0.06,
  nudgeMax: 18,
  nudgeStiffness: 0.14,
  nudgeDamping: 0.55,
  // Fade band at each viewport edge, so the wrap teleport is never visible.
  edgeFadeBand: 120,
};

export type EngineConfig = typeof defaultConfig;

export interface EngineItemHandle {
  el: HTMLElement;
  baseX: number;
  baseY: number;
}

export interface EngineOptions {
  viewport: HTMLElement;
  items: EngineItemHandle[];
  tileW: number;
  tileH: number;
  itemW: number;
  itemH: number;
  reducedMotion: boolean;
  config?: Partial<EngineConfig>;
}

export interface EngineHandle {
  destroy: () => void;
  setFocus: (el: HTMLElement | null) => void;
}

const mod = (v: number, size: number) => ((v % size) + size) % size;

function wrapAxis(base: number, off: number, size: number, viewport: number) {
  let p = mod(base + off, size);
  if (p > viewport) p -= size;
  return p;
}

// 0 while the item is outside the viewport, ramping to 1 once `band` px inside.
function edgeAlpha(pos: number, size: number, viewportSize: number, band: number) {
  if (band <= 0) return 1;
  const inset = Math.min(pos + size, viewportSize - pos);
  if (inset <= 0) return 0;
  if (inset >= band) return 1;
  const t = inset / band;
  return t * t * (3 - 2 * t);
}

export function createInfiniteGridEngine(options: EngineOptions): EngineHandle {
  const { viewport, items, tileW, tileH, itemW, itemH, reducedMotion } = options;
  const config: EngineConfig = { ...defaultConfig, ...options.config };
  const count = items.length;

  let viewportW = viewport.clientWidth;
  let viewportH = viewport.clientHeight;

  // The tile must clear the viewport by a whole cell, or wrapped items land
  // part-way inside the near edge and appear out of nowhere.
  function checkTileSize() {
    if (viewportW + itemW > tileW || viewportH + itemH > tileH) {
      console.warn(
        "[InfiniteGrid] tile is not at least one cell larger than the viewport -- " +
          "wrapped items will pop in at the edges. Add a layout column/row."
      );
    }
  }
  checkTileSize();

  let targetX = 0;
  let targetY = 0;
  let renderX = 0;
  let renderY = 0;
  let velocityX = 0;
  let velocityY = 0;

  let nudgeTargetX = 0;
  let nudgeTargetY = 0;
  let nudgeX = 0;
  let nudgeY = 0;
  let nudgeVX = 0;
  let nudgeVY = 0;

  let focusIndex = -1;

  let pointerId: number | null = null;
  let isPointerDown = false;
  let isDragging = false;
  let downX = 0;
  let downY = 0;
  let lastX = 0;
  let lastY = 0;
  let dragHappened = false;

  const samples: { t: number; x: number; y: number }[] = [];
  function pushSample(x: number, y: number) {
    samples.push({ t: performance.now(), x, y });
    if (samples.length > 5) samples.shift();
  }
  function releaseVelocity() {
    if (samples.length < 2) return { vx: 0, vy: 0 };
    const first = samples[0];
    const last = samples[samples.length - 1];
    const dt = Math.max(1, last.t - first.t);
    return {
      vx: ((last.x - first.x) / dt) * 16.67,
      vy: ((last.y - first.y) / dt) * 16.67,
    };
  }

  let rafId: number | null = null;
  let running = false;

  const lastAlpha = new Float32Array(count).fill(-1);

  function writeTransforms() {
    const offX = renderX + nudgeX;
    const offY = renderY + nudgeY;
    for (let i = 0; i < count; i++) {
      const item = items[i];
      const x = wrapAxis(item.baseX, offX, tileW, viewportW);
      const y = wrapAxis(item.baseY, offY, tileH, viewportH);
      item.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      const alpha =
        edgeAlpha(x, itemW, viewportW, config.edgeFadeBand) *
        edgeAlpha(y, itemH, viewportH, config.edgeFadeBand);
      if (Math.abs(alpha - lastAlpha[i]) > 0.004) {
        // Opacity alone doesn't stop hit-testing, so drop faded items out too.
        const firstWrite = lastAlpha[i] < 0;
        const wasInteractive = lastAlpha[i] >= 0.35;
        const isInteractive = alpha >= 0.35;
        if (firstWrite || isInteractive !== wasInteractive) {
          item.el.style.pointerEvents = isInteractive ? "" : "none";
        }
        item.el.style.opacity = alpha.toFixed(3);
        lastAlpha[i] = alpha;
      }
    }
  }

  function tick() {
    // Derived from engine state, not measured off the DOM: reading the item's
    // live rect would feed the applied nudge back into its own input.
    if (focusIndex >= 0 && !reducedMotion) {
      const clamp = (v: number) =>
        Math.max(-config.nudgeMax, Math.min(config.nudgeMax, v * config.nudgeStrength));
      const ux = wrapAxis(items[focusIndex].baseX, renderX, tileW, viewportW);
      const uy = wrapAxis(items[focusIndex].baseY, renderY, tileH, viewportH);
      nudgeTargetX = clamp(ux + itemW / 2 - viewportW / 2);
      nudgeTargetY = clamp(uy + itemH / 2 - viewportH / 2);
    } else {
      nudgeTargetX = 0;
      nudgeTargetY = 0;
    }

    if (!isPointerDown) {
      targetX += velocityX;
      targetY += velocityY;
      velocityX *= config.friction;
      velocityY *= config.friction;
      if (Math.abs(velocityX) < config.velocityEpsilon) velocityX = 0;
      if (Math.abs(velocityY) < config.velocityEpsilon) velocityY = 0;
    }

    renderX += (targetX - renderX) * config.ease;
    renderY += (targetY - renderY) * config.ease;

    nudgeVX = (nudgeVX + (nudgeTargetX - nudgeX) * config.nudgeStiffness) * config.nudgeDamping;
    nudgeVY = (nudgeVY + (nudgeTargetY - nudgeY) * config.nudgeStiffness) * config.nudgeDamping;
    nudgeX += nudgeVX;
    nudgeY += nudgeVY;

    writeTransforms();

    const settled =
      Math.abs(targetX - renderX) < 0.01 && Math.abs(targetY - renderY) < 0.01;
    // Not gated on "is something focused" -- the focused item is re-evaluated
    // every frame during a hover, which would pin the loop at 60fps.
    const nudgeSettled =
      Math.abs(nudgeTargetX - nudgeX) < 0.05 &&
      Math.abs(nudgeTargetY - nudgeY) < 0.05 &&
      Math.abs(nudgeVX) < 0.05 &&
      Math.abs(nudgeVY) < 0.05;

    if (!isPointerDown && velocityX === 0 && velocityY === 0 && settled && nudgeSettled) {
      running = false;
      rafId = null;
      return;
    }
    rafId = requestAnimationFrame(tick);
  }

  function wake() {
    if (!running) {
      running = true;
      rafId = requestAnimationFrame(tick);
    }
  }

  function setFocus(el: HTMLElement | null) {
    let next = -1;
    if (el) {
      for (let i = 0; i < count; i++) {
        if (items[i].el === el) {
          next = i;
          break;
        }
      }
    }
    if (next === focusIndex) return;
    focusIndex = next;
    wake();
  }

  function onPointerDown(e: PointerEvent) {
    isPointerDown = true;
    isDragging = false;
    dragHappened = false;
    pointerId = e.pointerId;
    downX = lastX = e.clientX;
    downY = lastY = e.clientY;
    velocityX = 0;
    velocityY = 0;
    samples.length = 0;
    pushSample(e.clientX, e.clientY);
    wake();
  }

  function onPointerMove(e: PointerEvent) {
    if (!isPointerDown || e.pointerId !== pointerId) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;

    if (!isDragging) {
      if (Math.hypot(e.clientX - downX, e.clientY - downY) > config.dragThresholdPx) {
        isDragging = true;
        dragHappened = true;
        // Captured only now. Taking it on pointerdown would retarget the
        // trailing click to the viewport, so links inside a cell never fire.
        viewport.setPointerCapture(e.pointerId);
      }
    }

    if (isDragging) {
      targetX += dx;
      targetY += dy;
      renderX += dx;
      renderY += dy;
      pushSample(e.clientX, e.clientY);
      wake();
    }
  }

  function onPointerUp(e: PointerEvent) {
    if (e.pointerId !== pointerId) return;
    isPointerDown = false;

    if (isDragging && !reducedMotion) {
      const v = releaseVelocity();
      velocityX = v.vx;
      velocityY = v.vy;
    }

    isDragging = false;
    wake();
  }

  // Suppress the click a pan ends in, so dragging across a cell can't open it.
  function onClickCapture(e: MouseEvent) {
    if (dragHappened) {
      e.stopPropagation();
      e.preventDefault();
      dragHappened = false;
    }
  }

  function onWheel(e: WheelEvent) {
    e.preventDefault();
    targetX -= e.deltaX * config.wheelSensitivity;
    targetY -= e.deltaY * config.wheelSensitivity;
    if (config.ease >= 1) {
      renderX = targetX;
      renderY = targetY;
    }
    wake();
  }

  let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
  function onResize() {
    if (resizeTimeout) clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      viewportW = viewport.clientWidth;
      viewportH = viewport.clientHeight;
      checkTileSize();
      writeTransforms();
    }, 150);
  }

  viewport.addEventListener("pointerdown", onPointerDown);
  viewport.addEventListener("pointermove", onPointerMove);
  viewport.addEventListener("pointerup", onPointerUp);
  viewport.addEventListener("pointercancel", onPointerUp);
  viewport.addEventListener("click", onClickCapture, { capture: true });
  viewport.addEventListener("wheel", onWheel, { passive: false });
  window.addEventListener("resize", onResize);

  writeTransforms();

  return {
    setFocus,
    destroy() {
      if (rafId !== null) cancelAnimationFrame(rafId);
      if (resizeTimeout) clearTimeout(resizeTimeout);
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", onPointerUp);
      viewport.removeEventListener("pointercancel", onPointerUp);
      viewport.removeEventListener("click", onClickCapture, { capture: true });
      viewport.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", onResize);
    },
  };
}
