"use client";
import { OverviewSection } from "../utils/types";

interface OverviewSectionProps {
  sectionDetails: OverviewSection;
}

export default function OverviewSection({
  sectionDetails,
}: OverviewSectionProps) {
  return (
    <div className="w-full h-full flex flex-wrap p-5 mt-10 md:flex-nowrap md:p-10">
      <div className="w-full p-4 mb-8 md:w-1/2 md:px-5 md:mr-20">
        <h4 className="font-mono text-h4 text-blackPrimary uppercase">
          The Problem
        </h4>
        <div className="pt-5 font-sans text-p2 text-blackPrimary md:pb-0 md:text-p">
          {sectionDetails.problem.split("/").map((section, index) => (
            <p key={index} className="pb-4">
              {section}{" "}
            </p>
          ))}
        </div>
      </div>
      <div className="w-full p-4 mb-8 md:w-1/2 md:px-5 md:mr-20">
        <h4 className="font-mono text-h4 text-blackPrimary uppercase">
          The Solution
        </h4>
        <div className="pt-5 font-sans text-p2 md:text-p text-blackPrimary">
          {sectionDetails.uxr.split("/").map((section, index) => (
            <p key={index} className="pb-4">
              {section}{" "}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
