"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useHoverCapable } from "./archive-grid/HoverFocusBox";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label';

export default function CursorDot() {
  const hoverCapable = useHoverCapable();
  const [isPointer, setIsPointer] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 1000, damping: 28, mass: 0.15 });
  const springY = useSpring(y, { stiffness: 1000, damping: 28, mass: 0.15 });

  useEffect(() => {
    if (!hoverCapable) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest?.("[data-cursor-ignore]")) {
        setIsPointer(false);
        return;
      }
      setIsPointer(!!target.closest?.(INTERACTIVE_SELECTOR));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [hoverCapable, x, y]);

  if (!hoverCapable) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] rounded-full bg-greyPrimary mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ width: isPointer ? 32 : 8, height: isPointer ? 32 : 8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    />
  );
}
