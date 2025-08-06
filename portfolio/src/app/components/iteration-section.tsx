"use client";
import { IterationSection } from "../utils/types";

interface IterationSectionProps {
  sectionDetails: IterationSection;
}

export default function IterationSection({
  sectionDetails,
}: IterationSectionProps) {
  return (
    <div className="w-full h-full p-5 md:p-10">
      <h4 className="text-h4 font-mono uppercase px-5 mr-20 text-blackPrimary">
        Iteration
      </h4>
      <div className="md:hidden flex flex-wrap p-5 gap-y-2">
      <img
          className="w-full object-contain"
          src={sectionDetails.wireframes}
        ></img>
        <img
          className="w-full object-contain"
          src={sectionDetails.system}
        ></img>
        <img
          className="w-full object-cover"
          src={sectionDetails.microint}
        ></img>
        <img
          className="w-full object-cover"
          src={sectionDetails.colortype}
        ></img>
      </div>
      <div className="hidden md:block md:flex md:gap-x-4 md:mt-5 md:mx-5">
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
        className="hidden md:block md:w-full md:mt-5 md:px-5 md:object-contain"
        src={sectionDetails.colortype}
      ></img>
    </div>
  );
}
