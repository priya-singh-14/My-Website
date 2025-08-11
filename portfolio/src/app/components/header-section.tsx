"use client";
import Image from "next/image";
import { HeaderSection } from "../utils/types";

interface HeaderSectionProps {
  sectionDetails: HeaderSection;
}

export default function HeaderSection({ sectionDetails }: HeaderSectionProps) {
  const scrollToTarget = () => {
    const element = document.getElementById("final-solution");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="p-5 py-10 md:py-20 flex flex-wrap w-full h-full border border-blackPrimary border-opacity-25">
      <div className="md:hidden w-full h-auto mb-10">
        <Image
          src={sectionDetails.mockups}
          width={1000}
          height={1000}
          className="object-cover"
          alt="project mockup"
        ></Image>
      </div>
      <div className="w-full md:w-1/2 md:pr-20">
        <h3 className="font-mono text-h3 px-5 pb-3 text-blackPrimary uppercase">
          {sectionDetails.title}
        </h3>
        <p className="font-mono font-light px-5 text-greyPrimary uppercase">
          {sectionDetails.subtitle}
        </p>
        <p className="font-sans text-p2 p-5 md:pb-10 text-blackPrimary">
          {sectionDetails.description}
        </p>
        <div className="w-1/2 m-5 w-full flex flex-wrap gap-2">
          {sectionDetails.tags.map((tag, i) => {
            return (
              <div key={i} className="bottom-0 border border-greyPrimary">
                <p className="text-xs md:text-sm text-nowrap px-3 py-1 font-mono uppercase text-greyPrimary">
                  {tag}
                </p>
              </div>
            );
          })}{" "}
        </div>
        <div className="w-1/2 m-5 w-full flex flex-wrap gap-2">
          {sectionDetails.detailedTags.map((tag, i) => {
            return (
              <div
                key={i}
                className="bottom-0 bg-greyLight bg-opacity-25 border border-greyLight"
              >
                <p className="text-xs md:text-sm text-nowrap px-3 py-1 font-mono uppercase text-greyPrimary">
                  {tag}
                </p>
              </div>
            );
          })}{" "}
        </div>
        <button onClick={scrollToTarget}>
          <p className="uppercase underline font-mono font-light pt-10 md:pt-20 px-5 hover:text-bluePrimary">
            View final solution
          </p>
        </button>
      </div>
      <div className="hidden md:block md:w-1/2">
        <Image
          width={1000}
          height={1000}
          src={sectionDetails.mockups}
          className="object-cover"
          alt="project mockup"
        ></Image>
      </div>
    </div>
  );
}
