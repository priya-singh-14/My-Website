"use client";
import { DemoSection } from "../utils/types";

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

  return (
    <div id="final-solution" className="w-full h-full p-5 md:p-10">
      <h4 className="text-h4 font-mono uppercase px-5 md:mr-20 md:pb-10 text-blackPrimary">
        Final Solution
      </h4>
      <div className="p-5 md:p-0">
      <Video></Video></div>
    </div>
  );
}
