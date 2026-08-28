"use client";
import { useState } from "react";
import Image from "next/image";
import { ProcessSection } from "../utils/types";
import MediaSkeleton from "./media-skeleton";

interface ProcessSectionProps {
  sectionDetails: ProcessSection;
}

export default function ProcessSection({ sectionDetails }: ProcessSectionProps) {
  const { heading = "Key Design Decisions", items, mockup } = sectionDetails;
  const [loaded, setLoaded] = useState(false);
  const singleColumn = Boolean(mockup);
  const midpoint = singleColumn ? items.length : Math.ceil(items.length / 2);
  const columns = singleColumn
    ? [items]
    : [items.slice(0, midpoint), items.slice(midpoint)];
  const isVideo = Boolean(mockup && /\.(mp4|webm|mov)$/i.test(mockup));

  return (
    <div className="relative w-full px-5 md:px-[8.33%] py-10">
      {mockup && (
        <div className="hidden md:block absolute right-[2%] top-10 w-[240px] h-[467px] pointer-events-none">
          <MediaSkeleton loaded={loaded} className="rounded-lg" />
          {isVideo ? (
            <video
              className="overflow-hidden object-cover object-top rounded-lg w-full h-full border border-[#E3E3E3]"
              aria-label={`${heading} mockup`}
              src={mockup}
              autoPlay
              muted
              loop
              playsInline
              onLoadedData={() => setLoaded(true)}
            />
          ) : (
            <Image
              src={mockup}
              fill
              className="object-contain object-top"
              alt={`${heading} mockup`}
              onLoad={() => setLoaded(true)}
            />
          )}
        </div>
      )}
      <h4 className="font-manrope font-semibold text-[14px] text-[#444] mb-8">
        {heading}
      </h4>
      <div
        className={`grid grid-cols-1 gap-y-8 ${
          singleColumn ? "md:max-w-[520px]" : "md:grid-cols-2 gap-x-20"
        }`}
      >
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
