"use client";

import GlassOverlay from "./glass-overlay";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  if (!props.isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 overflow-y-auto bg-black/75 pointer-events-auto"
      onClick={props.onClose}
    >
      <GlassOverlay />
      <div
        className="relative min-h-full w-full px-6 py-6 md:px-[51px] md:py-[26px] font-manrope"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-6 right-6 md:top-[26px] md:right-[51px] text-p2 text-primary hover:text-greyLight"
          onClick={props.onClose}
        >
          Close
        </button>
        {props.children}
      </div>
    </div>
  );
}
