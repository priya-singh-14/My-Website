"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { HeaderSection } from "../utils/types";
import MediaSkeleton from "./media-skeleton";

interface HeaderSectionProps {
  sectionDetails: HeaderSection;
}

export default function HeaderSection({ sectionDetails }: HeaderSectionProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 md:px-[8.33%]">
      <motion.div
        className="relative w-full h-[400px] sm:h-[360px] md:h-[450px] overflow-hidden mb-6 rounded-2xl md:rounded-[8px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <MediaSkeleton loaded={loaded} />
        <Image
          src={sectionDetails.mockups}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 83vw"
          className="object-cover"
          alt={`${sectionDetails.title} mockup`}
          onLoad={() => setLoaded(true)}
        />
      </motion.div>
      <motion.h1
        className="font-manrope font-light text-[28px] text-greyPrimary"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
      >
        {sectionDetails.title}
      </motion.h1>
      <motion.p
        className="font-manrope text-[16px] my-4 max-w-4xl"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
      >
        {sectionDetails.description}
      </motion.p>
    </div>
  );
}
