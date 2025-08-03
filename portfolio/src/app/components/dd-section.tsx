"use client";
import { DDSection } from "../utils/types";

interface DDSectionProps {
  sectionDetails: DDSection;
}

export default function DDSection({ sectionDetails }: DDSectionProps) {
  return (
    <div className="w-full h-full p-10">
      <h4 className="text-h4 font-mono uppercase px-5 mr-20 text-blackPrimary">Key Design Decisions</h4>
      <div className="flex pt-10">
        {sectionDetails.decisions.map((decision, index) => (
          <div key={index} className="w-1/3 px-5">
            <h4 className="font-mono text-h4 text-blackPrimary uppercase mb-5">
              0{index + 1}. {decision.split("/")[0]}
            </h4>
            <p className="text-p2">{decision.split("/")[1]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
