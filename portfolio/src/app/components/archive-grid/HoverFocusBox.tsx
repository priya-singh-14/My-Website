"use client";

import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring } from "motion/react";

interface HoverFocusBoxProps {
  viewportRef: RefObject<HTMLElement | null>;
  // Fired every measured frame while hovering (itemRect is viewport-relative,
  // matching getBoundingClientRect); null when hover ends.
  onHoverRectChange?: (itemRect: DOMRect | null) => void;
}

const spring = { stiffness: 350, damping: 26, mass: 0.6 };

// Gap between the bracket corners and the actual media edges, and how long
// each bracket's arms are.
const padding = 6;
const arm = 12;
const border = "border-primary/80";

export function useHoverCapable() {
  const [capable, setCapable] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    setCapable(query.matches);
    const listener = () => setCapable(query.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);
  return capable;
}

// A camera-viewfinder-style focus indicator (four corner brackets, not a
// full outline) that morphs to whatever grid item is under the cursor,
// tracking it continuously (via rAF) rather than snapping once on hover --
// so it keeps chasing an item that's still moving from drag momentum, and
// the spring gives it a slight bounce as it catches up.
export default function HoverFocusBox({ viewportRef, onHoverRectChange }: HoverFocusBoxProps) {
  const hoverCapable = useHoverCapable();
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const w = useMotionValue(0);
  const h = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);
  const springW = useSpring(w, spring);
  const springH = useSpring(h, spring);

  const hoveredEl = useRef<HTMLElement | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!hoverCapable) return;
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const el = hoveredEl.current;
      if (!el) return;
      // Viewport-relative (getBoundingClientRect), matching position:fixed --
      // this renders in a portal so it's never clipped by the grid's own
      // overflow:hidden, which the wrap-around effect requires.
      const itemRect = el.getBoundingClientRect();
      x.set(itemRect.left - padding);
      y.set(itemRect.top - padding);
      w.set(itemRect.width + padding * 2);
      h.set(itemRect.height + padding * 2);
      onHoverRectChange?.(itemRect);
      rafId.current = requestAnimationFrame(measure);
    };

    const startTracking = (el: HTMLElement) => {
      const alreadyTracking = hoveredEl.current !== null;
      hoveredEl.current = el;
      setVisible(true);
      if (!alreadyTracking) rafId.current = requestAnimationFrame(measure);
    };

    const stopTracking = () => {
      hoveredEl.current = null;
      setVisible(false);
      onHoverRectChange?.(null);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>("[data-grid-item]");
      if (target) startTracking(target);
    };
    const onMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      if (related?.closest("[data-grid-item]")) return; // moving straight to another item
      stopTracking();
    };

    viewport.addEventListener("mouseover", onMouseOver);
    viewport.addEventListener("mouseout", onMouseOut);

    return () => {
      viewport.removeEventListener("mouseover", onMouseOver);
      viewport.removeEventListener("mouseout", onMouseOut);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [hoverCapable, viewportRef, x, y, w, h, onHoverRectChange]);

  if (!hoverCapable) return null;

  return createPortal(
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{
        x: springX,
        y: springY,
        width: springW,
        height: springH,
        opacity: visible ? 1 : 0,
      }}
    >
      <span
        className={`absolute left-0 top-0 border-l border-t ${border}`}
        style={{ width: arm, height: arm }}
      />
      <span
        className={`absolute right-0 top-0 border-r border-t ${border}`}
        style={{ width: arm, height: arm }}
      />
      <span
        className={`absolute bottom-0 left-0 border-b border-l ${border}`}
        style={{ width: arm, height: arm }}
      />
      <span
        className={`absolute bottom-0 right-0 border-b border-r ${border}`}
        style={{ width: arm, height: arm }}
      />
    </motion.div>,
    document.body
  );
}
