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
          className="overflow-hidden object-cover"
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
      <div >
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase underline font-mono font-light px-5 text-greyPrimary opacity-70 hover:text-bluePrimary"
        >
          Explore the Prototype Here
        </Link>
      </div>
    );
  };

  return (
    <div id="final-solution" className="w-full h-full p-5 md:p-10">
      <h4 className="text-h4 font-mono uppercase px-5 md:mr-20 md:pb-3 text-blackPrimary">
        Final Solution
      </h4>
      <LinkItem></LinkItem>
      <div className="p-5 mt-10 md:p-0">
        <Video></Video>
      </div>
    </div>
  );
}
