"use client";
import { OverviewSection } from "../utils/types";

interface OverviewSectionProps {
  sectionDetails: OverviewSection;
}

export default function OverviewSection({
  sectionDetails,
}: OverviewSectionProps) {
  return (
    <div className="w-full px-5 md:px-[8.33%] pt-10 flex flex-wrap md:flex-nowrap gap-10">
      <div className="w-full md:w-1/2">
        <h4 className="font-manrope font-semibold text-[14px] text-[#444] mb-4">
          The Problem
        </h4>
        <div className="font-manrope text-[14px] text-[#444] leading-relaxed">
          {sectionDetails.problem.split("/").map((section, index) => (
            <p key={index} className="pb-4">
              {section}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h4 className="font-manrope font-semibold text-[14px] text-[#444] mb-4">
          The Solution
        </h4>
        <div className="font-manrope text-[14px] text-[#444] leading-relaxed">
          {sectionDetails.uxr.split("/").map((section, index) => (
            <p key={index} className="pb-4">
              {section}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
