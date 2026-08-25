"use client";
import { NoteSection } from "../utils/types";

interface NoteSectionProps {
  sectionDetails: NoteSection;
}

export default function NoteSection({ sectionDetails }: NoteSectionProps) {
  const { body, variant = "caption" } = sectionDetails;

  if (variant === "disclaimer") {
    return (
      <div className="w-full px-5 md:px-[8.33%] py-3">
        <p className="font-manrope text-[12px] text-greyAccent text-center max-w-3xl mx-auto leading-relaxed">
          {body}
        </p>
      </div>
    );
  }

  return (
    <div className="w-full px-5 md:px-[8.33%] py-4">
      <p className="font-manrope text-[13px] text-greyAccent italic border-l-2 border-greyPrimary border-opacity-25 pl-4 max-w-3xl leading-relaxed">
        {body}
      </p>
    </div>
  );
}
