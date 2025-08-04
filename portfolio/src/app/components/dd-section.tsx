"use client";
import { DDSection } from "../utils/types";

interface DDSectionProps {
  sectionDetails: DDSection;
}

export default function DDSection({ sectionDetails }: DDSectionProps) {
  return (
    <div className="w-full h-full p-10">
      <h4 className="text-h4 font-mono uppercase px-5 mr-20 text-blackPrimary">Key Design Decisions</h4>
      <div className="flex gap-4 px-4 pt-10">
        {sectionDetails.decisions.map((decision, index) => (
          <div key={index} className="rounded-xl w-1/3 p-8 border border-greyPrimary border-opacity-25">
            <h4 className="font-mono text-h4 text-blackPrimary uppercase mb-5">
            0{index + 1}. {decision.split("/")[0]}
            </h4>
            <p className="font-sans text-p text-blackPrimary mb-5">{decision.split("/")[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
