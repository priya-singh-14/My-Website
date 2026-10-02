"use client";
import { useId, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ProcessSection } from "../utils/types";
import MediaSkeleton from "./media-skeleton";

interface ProcessSectionProps {
  sectionDetails: ProcessSection;
}

const fadeIn = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
};

function DecisionMedia({ src, alt }: { src?: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  // No media yet: leave the grey frame in place as a static placeholder.
  if (!src) {
    return <div className="absolute inset-0 bg-greyLight/40" aria-hidden="true" />;
  }

  return (
    <>
      <MediaSkeleton loaded={loaded} />
      {/\.(mp4|webm|mov)$/i.test(src) ? (
        <video
          className="w-full h-full object-cover"
          aria-label={alt}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setLoaded(true)}
        />
      ) : (
        <Image
          src={src}
          fill
          quality={90}
          sizes="(max-width: 768px) calc(100vw - 40px), 50vw"
          className="object-cover"
          alt={alt}
          onLoad={() => setLoaded(true)}
        />
      )}
    </>
  );
}

export default function ProcessSection({ sectionDetails }: ProcessSectionProps) {
  const { heading = "Key Design Decisions", items } = sectionDetails;
  const [active, setActive] = useState(0);
  const id = useId();
  const item = items[active];

  return (
    <div className="w-full px-5 md:px-[8.33%] py-10">
      <h4 className="font-manrope font-semibold text-[14px] text-[#444] mb-8">
        {heading}
      </h4>
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">
        <div className="w-full md:w-5/12">
          <div role="tablist" aria-label={heading} className="flex gap-1 mb-8">
            {items.map((decision, i) => (
              <button
                key={i}
                role="tab"
                id={`${id}-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`${id}-panel`}
                aria-label={decision.title}
                onClick={() => setActive(i)}
                className={`font-manrope text-[14px] text-[#444] leading-none px-1.5 py-1 rounded-[4px] transition-colors ${
                  i === active ? "bg-[#E3E3E3]" : "hover:bg-[#F0F0F0]"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <div
            role="tabpanel"
            id={`${id}-panel`}
            aria-labelledby={`${id}-tab-${active}`}
          >
            {/* Keyed on the active tab so each switch remounts and replays
                the same fade-up the outcomes summary uses. */}
            <motion.h3
              key={`title-${active}`}
              className="font-manrope font-light text-[20px] leading-relaxed mb-3"
              {...fadeIn}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {item.title}
            </motion.h3>
            <motion.p
              key={`body-${active}`}
              className="font-manrope text-[14px] text-[#444] leading-relaxed"
              {...fadeIn}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            >
              {item.body}
            </motion.p>
          </div>
        </div>
        <motion.div
          key={`media-${active}`}
          className="relative w-full md:w-7/12 aspect-[16/10] overflow-hidden rounded-[8px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <DecisionMedia src={item.media} alt={`${item.title} mockup`} />
        </motion.div>
      </div>
    </div>
  );
}
