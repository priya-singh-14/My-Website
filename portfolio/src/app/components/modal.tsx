"use client";

import { AnimatePresence, motion } from "motion/react";
import GlassOverlay from "./glass-overlay";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
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
            className="relative flex h-full min-h-full w-full flex-col px-5 py-6 md:py-[26px] font-manrope"
            onClick={(e) => e.stopPropagation()}
            {...contentFade}
          >
            <div className="flex justify-end">
              <button
                className="text-p2 text-primary hover:text-greyLight"
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
