"use client";
import { NoteSection } from "../utils/types";

interface NoteSectionProps {
  sectionDetails: NoteSection;
}

export const noteTextClass =
  "font-manrope text-[12px] text-greyAccent text-center max-w-3xl mx-auto leading-relaxed";

export default function NoteSection({ sectionDetails }: NoteSectionProps) {
  return (
    <div className="w-full px-5 md:px-[8.33%] py-3">
      <p className={noteTextClass}>{sectionDetails.body}</p>
    </div>
  );
}
