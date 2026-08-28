"use client";
import { IterationSection } from "../utils/types";

interface IterationSectionProps {
  sectionDetails: IterationSection;
}

// Each slot always holds the same kind of artefact, so the alt text can be
// described once here rather than repeated across the three responsive layouts
// that render the same four images.
const ALT = {
  wireframes: "Wireframes",
  system: "Design system",
  microint: "Micro-interactions",
  colortype: "Color and typography styles",
};

export default function IterationSection({
  sectionDetails,
}: IterationSectionProps) {
  const { wireframes, system, microint, colortype } = sectionDetails;
  const providedCount = [wireframes, system, microint, colortype].filter(
    Boolean
  ).length;
  const isFullGrid = providedCount === 4;

  return (
    <div className="w-full px-5 md:px-[8.33%] py-10">
      <h4 className="font-manrope font-semibold text-[14px] text-[#444] mb-8">
        Iteration
      </h4>
      <div className="md:hidden flex flex-wrap gap-y-2">
        {wireframes && (
          <img className="w-full object-contain" src={wireframes} alt={ALT.wireframes}></img>
        )}
        {system && <img className="w-full object-contain" src={system} alt={ALT.system}></img>}
        {microint && <img className="w-full object-cover" src={microint} alt={ALT.microint}></img>}
        {colortype && (
          <img className="w-full object-cover" src={colortype} alt={ALT.colortype}></img>
        )}
      </div>
      {isFullGrid ? (
        <>
          <div className="hidden md:flex md:gap-x-4">
            {wireframes && (
              <img className="flex-1 min-w-0 object-cover" src={wireframes} alt={ALT.wireframes}></img>
            )}
            {(system || microint) && (
              <div className="w-1/3 shrink-0 flex flex-col gap-y-4">
                {system && (
                  <img className="w-full object-cover" src={system} alt={ALT.system}></img>
                )}
                {microint && (
                  <img className="w-full object-cover" src={microint} alt={ALT.microint}></img>
                )}
              </div>
            )}
          </div>
          {colortype && (
            <img
              className="hidden md:block md:w-full md:mt-5 md:object-contain"
              src={colortype}
              alt={ALT.colortype}
            ></img>
          )}
        </>
      ) : (
        <div className="hidden md:flex md:flex-col md:gap-y-4">
          {wireframes && (
            <img className="w-full object-cover" src={wireframes} alt={ALT.wireframes}></img>
          )}
          {system && <img className="w-full object-cover" src={system} alt={ALT.system}></img>}
          {microint && (
            <img className="w-full object-cover" src={microint} alt={ALT.microint}></img>
          )}
          {colortype && (
            <img className="w-full object-contain" src={colortype} alt={ALT.colortype}></img>
          )}
        </div>
      )}
    </div>
  );
}
