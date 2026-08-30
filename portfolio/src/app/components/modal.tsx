"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import GlassOverlay from "./glass-overlay";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

let lockCount = 0;
let restoreBody: (() => void) | null = null;

function lockBodyScroll() {
  lockCount += 1;
  if (lockCount > 1) return;

  const { body } = document;
  const previousOverflow = body.style.overflow;
  const previousPaddingRight = body.style.paddingRight;
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

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

const scrimFade = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.18, ease: "easeOut" } },
  exit: {
    opacity: 0,
    transition: { duration: 0.22, ease: "easeIn", delay: 0.15 },
  },
};

const contentFade = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut", delay: 0.15 },
  },
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
          className="fixed inset-0 z-40 pointer-events-auto"
          onClick={props.onClose}
        >
          <motion.div className="absolute inset-0 bg-black/75" {...scrimFade} />
          <motion.div className="absolute inset-0" {...scrimFade}>
            <GlassOverlay />
          </motion.div>
          <motion.div
            className="relative flex h-full w-full flex-col overflow-y-auto px-5 pt-5 pb-6 md:pb-[26px] font-manrope"
            onClick={(e) => e.stopPropagation()}
            {...contentFade}
          >
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
