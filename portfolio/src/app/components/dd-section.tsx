"use client";
import { DDSection } from "../utils/types";

interface DDSectionProps {
  sectionDetails: DDSection;
}

export default function DDSection({ sectionDetails }: DDSectionProps) {
  return (
    <div className="w-full h-full p-5 md:p-10">
      <h4 className="text-h4 font-mono uppercase px-5 text-blackPrimary md:mr-20">Key Design Decisions</h4>
      <div className="flex flex-wrap md:flex-nowrap gap-4 px-4 pt-10">
        {sectionDetails.decisions.map((decision, index) => (
          <div key={index} className="rounded-xl w-full p-4 md:p-8 border border-greyPrimary border-opacity-25">
            <h4 className="font-mono text-p text-blackPrimary uppercase mb-4 md:mb-5 md:text-h4">
            0{index + 1}. {decision.split("/")[0]}
            </h4>
            <p className="font-sans text-p2 text-sm md:text-p text-blackPrimary md:mb-5">{decision.split("/")[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
