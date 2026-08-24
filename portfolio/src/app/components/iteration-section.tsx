"use client";
import { IterationSection } from "../utils/types";

interface IterationSectionProps {
  sectionDetails: IterationSection;
}

export default function IterationSection({
  sectionDetails,
}: IterationSectionProps) {
  return (
    <div className="w-full px-5 md:px-[8.33%] py-10">
      <h4 className="font-manrope font-semibold text-[14px] text-[#444] mb-8">
        Iteration
      </h4>
      <div className="md:hidden flex flex-wrap gap-y-2">
        <img
          className="w-full object-contain"
          src={sectionDetails.wireframes}
        ></img>
        <img className="w-full object-contain" src={sectionDetails.system}></img>
        <img className="w-full object-cover" src={sectionDetails.microint}></img>
        <img
          className="w-full object-cover"
          src={sectionDetails.colortype}
        ></img>
      </div>
      <div className="hidden md:flex md:gap-x-4">
        <img className="w-2/3 object-cover" src={sectionDetails.wireframes}></img>
        <div className="w-1/3 flex flex-wrap gap-y-4">
          <img className="w-full object-cover" src={sectionDetails.system}></img>
          <img
            className="w-full object-cover"
            src={sectionDetails.microint}
          ></img>
        </div>
      </div>
      <img
        className="hidden md:block md:w-full md:mt-5 md:object-contain"
        src={sectionDetails.colortype}
      ></img>
    </div>
  );
}
