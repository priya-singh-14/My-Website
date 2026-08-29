"use client";
import { useState } from "react";
import { DemoSection } from "../utils/types";
import Link from "next/link";
import MediaSkeleton from "./media-skeleton";
import { noteTextClass } from "./note-section";

interface DemoSectionProps {
  sectionDetails: DemoSection;
}

export default function DemoSection({ sectionDetails }: DemoSectionProps) {
  const [loaded, setLoaded] = useState(false);

  const Video = () => {
    const video = sectionDetails.demo;

    return (
      <div className="relative w-full aspect-video m-auto border border-[#E3E3E3] rounded-lg overflow-hidden">
        <MediaSkeleton loaded={loaded} />
        <video
          className="absolute inset-0 h-full w-full object-cover"
          aria-label={sectionDetails.caption ?? "Product demo"}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setLoaded(true)}
        />
      </div>
    );
  };

  const LinkItem = () => {
    const link = sectionDetails.link;

    if (!link) {
      return null;
    }

    return (
      <div>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-manrope text-[14px] underline text-greyPrimary hover:text-bluePrimary"
        >
          Explore the Prototype Here
        </Link>
      </div>
    );
  };

  return (
    <div id="final-solution" className="w-full px-5 md:px-[8.33%] py-10">
      <LinkItem></LinkItem>
      <div className="mt-8">
        <Video></Video>
        {/* mt-3 rather than a note section's own py-3 plus the gap between
            sections -- a caption belongs to the demo above it, so it sits
            tight against it. */}
        {sectionDetails.caption && (
          <p className={`mt-3 ${noteTextClass}`}>{sectionDetails.caption}</p>
        )}
      </div>
    </div>
  );
}
