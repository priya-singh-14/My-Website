"use client";
import { ProcessSection } from "../utils/types";

interface ProcessSectionProps {
  sectionDetails: ProcessSection;
}

export default function ProcessSection({ sectionDetails }: ProcessSectionProps) {
  const { heading = "Key Design Decisions", items } = sectionDetails;
  const midpoint = Math.ceil(items.length / 2);
  const columns = [items.slice(0, midpoint), items.slice(midpoint)];

  return (
    <div className="w-full px-5 md:px-[8.33%] py-10">
      <h4 className="font-manrope font-semibold text-[14px] text-[#444] mb-8">
        {heading}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
        {columns.map((column, i) => (
          <div key={i} className="flex flex-col gap-4">
            {column.map((item, j) => (
              <p
                key={j}
                className="font-manrope text-[14px] text-[#444] leading-relaxed"
              >
                <span className="font-bold">→ {item.title}. </span>
                {item.body}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
