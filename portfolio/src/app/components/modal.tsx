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
        className="relative flex h-full min-h-full w-full flex-col px-5 py-6 md:py-[26px] font-manrope"
        onClick={(e) => e.stopPropagation()}
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
      </div>
    </div>
  );
}
