"use client";
import { HeaderSection } from "../utils/types";

interface HeaderSectionProps {
  sectionDetails: HeaderSection;
}

export default function HeaderSection({ sectionDetails }: HeaderSectionProps) {
  return (
    <div className="flex w-full h-full border border-blackPrimary border-opacity-25 p-10">
      <div className="w-1/2 pr-20">
        <h3 className="font-mono text-h3 px-5 text-blackPrimary uppercase">
          {sectionDetails.title}
        </h3>
        <p className="font-mono font-light px-5 text-greyPrimary uppercase">
          {sectionDetails.subtitle}
        </p>
        <p className="font-sans text-p2 p-5 text-blackPrimary">
          {sectionDetails.description}
        </p>
        <div className="w-1/2 m-5 w-full flex flex-wrap gap-2">
          {sectionDetails.tags.map((tag, i) => {
            return (
              <div key={i} className="bottom-0 border border-greyPrimary">
                <p className="text-sm text-nowrap px-2 py-1 font-mono uppercase text-greyPrimary">
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
                <p className="text-sm text-nowrap px-2 py-1 font-mono uppercase text-greyPrimary">
                  {tag}
                </p>
              </div>
            );
          })}{" "}
        </div>
        <p className="uppercase font-mono text-md pt-5 px-5 text-blueAccent">
          {sectionDetails.link}
        </p>
      </div>
      <div className="w-1/2 mr-20">
        <img src={sectionDetails.mockups} className="object-cover"></img>
      </div>
    </div>
  );
}
