"use client";
import { OverviewSection } from "../utils/types";

interface OverviewSectionProps {
  sectionDetails: OverviewSection;
}

export default function OverviewSection({
  sectionDetails,
}: OverviewSectionProps) {
  return (
    <div className="flex w-full h-full p-10">
      <div className="w-1/2 px-5 mr-20">
        <h4 className="font-mono text-h4 text-blackPrimary uppercase">
          The Problem
        </h4>
        <p className="pt-5 text-p2 text-blackPrimary">
          {sectionDetails.problem}
        </p>
      </div>
      <div className="w-1/2 px-5 mr-20">
        <h4 className="font-mono text-h4 text-blackPrimary uppercase">
          The Solution
        </h4>
        <p className="pt-5 text-p2 text-blackPrimary">
          {sectionDetails.uxr.split("/").map((section, index) => (
            <p key={index} className="pb-4">
              {section}{" "}
            </p>
          ))}
        </p>
      </div>
    </div>
  );
}
