"use client";
import { IterationSection } from "../utils/types";

interface IterationSectionProps {
  sectionDetails: IterationSection;
}

export default function IterationSection({
  sectionDetails,
}: IterationSectionProps) {
  return (
    <div className="w-full h-full p-10">
      <h4 className="text-h4 font-mono uppercase px-5 mr-20 text-blackPrimary">
        Iteration
      </h4>
      <div className="flex gap-x-4 mt-5 mx-5">
        <img
          className="w-2/3 object-cover"
          src={sectionDetails.wireframes}
        ></img>
        <div className="w-1/3 flex flex-wrap gap-y-4">
          <img
            className="w-full object-cover"
            src={sectionDetails.system}
          ></img>
          <img
            className="w-full object-cover"
            src={sectionDetails.microint}
          ></img>
        </div>
      </div>
      <img
        className="w-full mt-5 mx-5 object-cover"
        src={sectionDetails.colortype}
      ></img>
    </div>
  );
}
