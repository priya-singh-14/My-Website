"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import GlassOverlay from "./glass-overlay";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

// Ref-counted so the lock survives one modal opening while another is still
// unmounting -- the closing modal's cleanup must not release the body while
// the newly opened one still needs it held.
let lockCount = 0;
let restoreBody: (() => void) | null = null;

function lockBodyScroll() {
  lockCount += 1;
  if (lockCount > 1) return;

  const { body } = document;
  const previousOverflow = body.style.overflow;
  const previousPaddingRight = body.style.paddingRight;
  // Replace the scrollbar's width with padding so hiding it doesn't shift
  // the page underneath. No-op on overlay-scrollbar platforms, where the
  // scrollbar takes up no layout width to begin with.
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  body.style.overflow = "hidden";
  if (scrollbarWidth > 0) {
    const current = parseFloat(getComputedStyle(body).paddingRight) || 0;
    body.style.paddingRight = `${current + scrollbarWidth}px`;
  }

  restoreBody = () => {
    body.style.overflow = previousOverflow;
    body.style.paddingRight = previousPaddingRight;
  };
}

function unlockBodyScroll() {
  lockCount = Math.max(0, lockCount - 1);
  if (lockCount > 0) return;
  restoreBody?.();
  restoreBody = null;
}

// Asymmetric, staggered fades so the outgoing and incoming layers are never
// both near 50% opacity at once (that's what reads as a double-exposure).
// Opening: the scrim commits to fully dark first, content only starts
// appearing once the background is already suppressed. Closing: content
// clears first, background only reappears after it's gone.
const scrimFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.18, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.22, ease: "easeIn", delay: 0.15 } },
};

const contentFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, ease: "easeOut", delay: 0.15 } },
  exit: { opacity: 0, transition: { duration: 0.15, ease: "easeIn" } },
};

export default function Modal(props: ModalProps) {
  useEffect(() => {
    if (!props.isOpen) return;
    lockBodyScroll();
    return unlockBodyScroll;
  }, [props.isOpen]);

  return (
    <AnimatePresence>
      {props.isOpen && (
        <motion.div
          className="fixed inset-0 z-40 overflow-y-auto pointer-events-auto"
          onClick={props.onClose}
        >
          {/* Own motion.div, kept out from under GlassOverlay's backdrop-filter --
              animating opacity on an ancestor of a backdrop-filter element makes
              some browsers render it as solid black mid-transition. */}
          <motion.div className="absolute inset-0 bg-black/75" {...scrimFade} />
          <motion.div className="absolute inset-0" {...scrimFade}>
            <GlassOverlay />
          </motion.div>
          <motion.div
            className="relative flex h-full min-h-full w-full flex-col px-5 pt-5 pb-6 md:pb-[26px] font-manrope"
            onClick={(e) => e.stopPropagation()}
            {...contentFade}
          >
            {/* pt-5 + text-li mirror the navbar's own py-5/text-li, so Close
                lands on the same baseline as the About/Archive buttons it
                visually replaces. */}
            <div className="flex shrink-0 justify-end">
              <button
                className="text-li text-primary hover:text-greyLight"
                onClick={props.onClose}
              >
                Close
              </button>
            </div>
            {props.children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
