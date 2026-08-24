"use client";
import { MetaSection } from "../utils/types";

interface MetaSectionProps {
  sectionDetails: MetaSection;
}

export default function MetaSection({ sectionDetails }: MetaSectionProps) {
  const items: Array<[string, string | undefined]> = [
    ["Year", sectionDetails.duration],
    ["Role", sectionDetails.role],
    ["Skills", sectionDetails.skills],
    ["Team", sectionDetails.team],
  ];

  return (
    <div className="w-full max-w-[1440px]  mx-auto">
      <div className="px-5 md:px-[8.33%] pt-10 pb-6 grid grid-cols-2 gap-x-10 gap-y-4 lg:flex lg:flex-nowrap lg:justify-between font-manrope text-[14px]">
        {items
          .filter(([, value]) => Boolean(value))
          .map(([label, value]) => (
            <div key={label} className="flex flex-col gap-2">
              <span className="w-fit rounded-[4px] bg-tag px-3 py-1 text-[11px] font-semibold uppercase">
                {label}
              </span>
              <p>{value}</p>
            </div>
          ))}
      </div>
      <div className="px-5 md:px-[8.33%] flex items-center gap-4 py-4">
        <hr className="flex-1 border-t bg-greyAccent" />
      </div>
    </div>
  );
}
