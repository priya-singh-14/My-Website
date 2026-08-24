"use client";
import { DemoSection } from "../utils/types";
import Link from "next/link";

interface DemoSectionProps {
  sectionDetails: DemoSection;
}

export default function DemoSection({ sectionDetails }: DemoSectionProps) {
  const Video = () => {
    const video = sectionDetails.demo;

    return (
      <div className="mt-4 w-full md:mt-0 md:w-3/4 m-auto">
        <video
          className="overflow-hidden object-cover rounded-lg"
          src={video}
          playsInline
          controls
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
      <h4 className="font-manrope font-semibold text-[14px] text-[#444] mb-3">
        Final Solution
      </h4>
      <LinkItem></LinkItem>
      <div className="mt-8">
        <Video></Video>
      </div>
    </div>
  );
}
