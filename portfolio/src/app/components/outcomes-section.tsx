"use client";
import { OutcomesSection } from "../utils/types";

interface OutcomesSectionProps {
  sectionDetails: OutcomesSection;
}

export default function OutcomesSection({
  sectionDetails,
}: OutcomesSectionProps) {
  return (
    <div className="w-full px-5 md:px-[8.33%] py-10">
      <h4 className="font-manrope font-semibold text-[14px] mb-4">
        Outcomes
      </h4>
      <p className="font-generalSans font-light text-[20px] max-w-2xl leading-relaxed mb-12">
        {sectionDetails.summary}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
        <div>
          <h4 className="font-manrope text-[14px] text-[#444] mb-4">
            Takeaways
          </h4>
          <div className="flex flex-col gap-3">
            {sectionDetails.takeaways.map((item, i) => (
              <p
                key={i}
                className="font-manrope text-[14px] text-[#444] leading-relaxed"
              >
                → {item}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-manrope text-[14px] text-[#444] mb-4">
            Retrospective
          </h4>
          <div className="flex flex-col gap-3">
            {sectionDetails.retrospective.map((item, i) => (
              <p
                key={i}
                className="font-manrope text-[14px] text-[#444] leading-relaxed"
              >
                → {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
