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
      <div className="w-full m-auto border border-[#E3E3E3] rounded-lg">
        <video
          className="overflow-hidden object-cover rounded-lg w-full"
          src={video}
          autoPlay
          muted
          loop
          playsInline
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
      </div>
    </div>
  );
}
