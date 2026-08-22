// Per-item wrapping drag/pan engine for the infinite grid.
// One rAF loop, one transform write per item per frame, no layout reads
// inside the loop.

// ---- Feel knobs -----------------------------------------------------------
export const defaultConfig = {
  friction: 0.92,
  ease: 1, // 1 = rendered position snaps straight to target (no extra lag)
  dragThresholdPx: 6,
  wheelSensitivity: 1,
  velocityEpsilon: 0.02,
  // Hover "nudge" -- the whole viewport leans slightly toward whatever's
  // hovered. Spring-integrated (not eased) so it has a slight bounce/settle
  // rather than a dead stop. strength is the fraction of the raw
  // center-to-center distance used as the spring's target displacement.
  nudgeStrength: 0.06,
  nudgeMax: 18,
  nudgeStiffness: 0.08,
  nudgeDamping: 0.72,
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
  reducedMotion: boolean;
  config?: Partial<EngineConfig>;
}

export interface EngineHandle {
  destroy: () => void;
  // Called with the hovered item's center offset from the viewport's center
  // (in px) to lean the viewport toward it; null to clear (return to center).
  setNudgeTarget: (dx: number | null, dy: number | null) => void;
}

const mod = (v: number, size: number) => ((v % size) + size) % size;

// Requires tileW/tileH >= the viewport in their axis (enforced by the
// console.warn below) -- otherwise wrapped copies leave gaps.
function wrapAxis(base: number, off: number, size: number, viewport: number) {
  let p = mod(base + off, size);
  if (p > viewport) p -= size;
  return p;
}

export function createInfiniteGridEngine(options: EngineOptions): EngineHandle {
  const { viewport, items, tileW, tileH, reducedMotion } = options;
  const config: EngineConfig = { ...defaultConfig, ...options.config };

  let viewportW = viewport.clientWidth;
  let viewportH = viewport.clientHeight;

  function checkTileSize() {
    if (viewportW > tileW || viewportH > tileH) {
      console.warn(
        "[InfiniteGrid] viewport exceeds tile size -- wrapped tiling may show gaps. " +
          "Increase columns/cell size or shrink the grid container."
      );
    }
  }
  checkTileSize();

  // Unbounded accumulated offset, driven by input. `render` is the (optionally
  // eased) value actually painted each frame.
  let targetX = 0;
  let targetY = 0;
  let renderX = 0;
  let renderY = 0;
  let velocityX = 0;
  let velocityY = 0;

  // Hover nudge: a small spring-integrated offset layered on top of the pan
  // position, independent of drag/momentum.
  let nudgeTargetX = 0;
  let nudgeTargetY = 0;
  let nudgeX = 0;
  let nudgeY = 0;
  let nudgeVX = 0;
  let nudgeVY = 0;
  let nudging = false;

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
    // px per ~frame (16.67ms), so it composes directly with friction below.
    return {
      vx: ((last.x - first.x) / dt) * 16.67,
      vy: ((last.y - first.y) / dt) * 16.67,
    };
  }

  let rafId: number | null = null;
  let running = false;

  function writeTransforms() {
    const offX = renderX + nudgeX;
    const offY = renderY + nudgeY;
    for (const item of items) {
      const x = wrapAxis(item.baseX, offX, tileW, viewportW);
      const y = wrapAxis(item.baseY, offY, tileH, viewportH);
      item.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
  }

  function tick() {
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

    // Simple spring-damper integrator (position + velocity), not just an
    // ease, so it can slightly overshoot the nudge target before settling.
    const ax = (nudgeTargetX - nudgeX) * config.nudgeStiffness;
    const ay = (nudgeTargetY - nudgeY) * config.nudgeStiffness;
    nudgeVX = (nudgeVX + ax) * config.nudgeDamping;
    nudgeVY = (nudgeVY + ay) * config.nudgeDamping;
    nudgeX += nudgeVX;
    nudgeY += nudgeVY;

    writeTransforms();

    const settled =
      Math.abs(targetX - renderX) < 0.01 && Math.abs(targetY - renderY) < 0.01;
    const nudgeSettled =
      !nudging &&
      Math.abs(nudgeTargetX - nudgeX) < 0.05 &&
      Math.abs(nudgeTargetY - nudgeY) < 0.05 &&
      Math.abs(nudgeVX) < 0.05 &&
      Math.abs(nudgeVY) < 0.05;
    const idle =
      !isPointerDown && velocityX === 0 && velocityY === 0 && settled && nudgeSettled;

    if (idle) {
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

  function setNudgeTarget(dx: number | null, dy: number | null) {
    if (reducedMotion) return;
    if (dx === null || dy === null) {
      nudging = false;
      nudgeTargetX = 0;
      nudgeTargetY = 0;
    } else {
      nudging = true;
      const clamp = (v: number) =>
        Math.max(-config.nudgeMax, Math.min(config.nudgeMax, v * config.nudgeStrength));
      nudgeTargetX = clamp(dx);
      nudgeTargetY = clamp(dy);
    }
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
    viewport.setPointerCapture(e.pointerId);
    wake();
  }

  function onPointerMove(e: PointerEvent) {
    if (!isPointerDown || e.pointerId !== pointerId) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;

    if (!isDragging) {
      const moved = Math.hypot(e.clientX - downX, e.clientY - downY);
      if (moved > config.dragThresholdPx) {
        isDragging = true;
        dragHappened = true;
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

  // Tap-vs-drag: suppress the click on whatever item is under the pointer if
  // this gesture crossed the drag threshold. Capture phase runs before the
  // item's own (bubble-phase) onClick, so this cleanly blocks it without the
  // engine needing to know about individual items as click targets.
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
    setNudgeTarget,
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
