"use client";
import Image from "next/image";
import { HeaderSection } from "../utils/types";

interface HeaderSectionProps {
  sectionDetails: HeaderSection;
}

export default function HeaderSection({ sectionDetails }: HeaderSectionProps) {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 md:px-[8.33%]">
      <div className="relative w-full h-[400px] sm:h-[360px] md:h-[450px] overflow-hidden mb-6 rounded-2xl md:rounded-[8px]">
        <Image
          src={sectionDetails.mockups}
          fill
          className="object-cover"
          alt={`${sectionDetails.title} mockup`}
        />
      </div>
      <h1 className="font-manrope font-light text-[28px] text-greyPrimary">
        {sectionDetails.title}
      </h1>
      <p className="font-manrope text-[16px] my-4 max-w-4xl">
        {sectionDetails.description}
      </p>
    </div>
  );
}
