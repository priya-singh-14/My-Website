"use client";
import { motion } from "motion/react";
import type { AiProcessPart, AiProcessSection } from "../utils/types";

interface AiProcessSectionProps {
  sectionDetails: AiProcessSection;
}

function Part({ part }: { part: AiProcessPart }) {
  return (
    <div>
      <h3 className="font-manrope font-light text-[20px] leading-relaxed mb-3">
        {part.title}
      </h3>
      <div className="flex flex-col gap-3">
        {part.body.map((item, i) => (
          <p
            key={i}
            className="font-manrope text-[14px] text-[#444] leading-relaxed"
          >
            → {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function AiProcessSection({ sectionDetails }: AiProcessSectionProps) {
  return (
    <section
      id="ai-process"
      aria-labelledby="ai-process-heading"
      className="w-full px-5 md:px-[8.33%] py-10"
    >
      <h2
        id="ai-process-heading"
        className="font-manrope font-semibold text-[14px] text-[#444] mb-8"
      >
        {sectionDetails.heading}
      </h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {sectionDetails.parts.map((part) => (
          <Part key={part.title} part={part} />
        ))}
      </motion.div>
    </section>
  );
}
