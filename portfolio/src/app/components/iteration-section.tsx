"use client";
import Image from "next/image";
import { IterationSection } from "../utils/types";

interface IterationSectionProps {
  sectionDetails: IterationSection;
}

const ALT = {
  wireframes: "Wireframes",
  system: "Design system",
  microint: "Micro-interactions",
  colortype: "Color and typography styles",
};

const SIZES = {
  mobile: "100vw",
  wide: "(max-width: 768px) 100vw, 55vw",
  narrow: "(max-width: 768px) 100vw, 28vw",
  full: "(max-width: 768px) 100vw, 83vw",
};

const QUALITY = 90;

export default function IterationSection({
  sectionDetails,
}: IterationSectionProps) {
  const { wireframes, system, microint, colortype } = sectionDetails;
  const providedCount = [wireframes, system, microint, colortype].filter(
    Boolean
  ).length;
  const isFullGrid = providedCount === 4;

  return (
    <div className="w-full px-5 md:px-[8.33%] py-10">
      <h4 className="font-manrope font-semibold text-[14px] text-[#444] mb-8">
        Iteration
      </h4>
      <div className="md:hidden flex flex-wrap gap-y-2">
        {wireframes && (
          <Image
            src={wireframes}
            alt={ALT.wireframes}
            width={0}
            height={0}
            quality={QUALITY}
            sizes={SIZES.mobile}
            className="w-full h-auto"
          />
        )}
        {system && (
          <Image
            src={system}
            alt={ALT.system}
            width={0}
            height={0}
            quality={QUALITY}
            sizes={SIZES.mobile}
            className="w-full h-auto"
          />
        )}
        {microint && (
          <Image
            src={microint}
            alt={ALT.microint}
            width={0}
            height={0}
            quality={QUALITY}
            sizes={SIZES.mobile}
            className="w-full h-auto"
          />
        )}
        {colortype && (
          <Image
            src={colortype}
            alt={ALT.colortype}
            width={0}
            height={0}
            quality={QUALITY}
            sizes={SIZES.mobile}
            className="w-full h-auto"
          />
        )}
      </div>
      {isFullGrid ? (
        <>
          <div className="hidden md:flex md:gap-x-4">
            {wireframes && (
              <Image
                src={wireframes}
                alt={ALT.wireframes}
                width={0}
                height={0}
                quality={QUALITY}
                sizes={SIZES.wide}
                className="flex-1 min-w-0 w-full h-auto"
              />
            )}
            {(system || microint) && (
              <div className="w-1/3 shrink-0 flex flex-col gap-y-4">
                {system && (
                  <Image
                    src={system}
                    alt={ALT.system}
                    width={0}
                    height={0}
                    quality={QUALITY}
                    sizes={SIZES.narrow}
                    className="w-full h-auto"
                  />
                )}
                {microint && (
                  <Image
                    src={microint}
                    alt={ALT.microint}
                    width={0}
                    height={0}
                    quality={QUALITY}
                    sizes={SIZES.narrow}
                    className="w-full h-auto"
                  />
                )}
              </div>
            )}
          </div>
          {colortype && (
            <Image
              src={colortype}
              alt={ALT.colortype}
              width={0}
              height={0}
              quality={QUALITY}
              sizes={SIZES.full}
              className="hidden md:block md:mt-5 w-full h-auto"
            />
          )}
        </>
      ) : (
        <div className="hidden md:flex md:flex-col md:gap-y-4">
          {wireframes && (
            <Image
              src={wireframes}
              alt={ALT.wireframes}
              width={0}
              height={0}
              quality={QUALITY}
              sizes={SIZES.full}
              className="w-full h-auto"
            />
          )}
          {system && (
            <Image
              src={system}
              alt={ALT.system}
              width={0}
              height={0}
              quality={QUALITY}
              sizes={SIZES.full}
              className="w-full h-auto"
            />
          )}
          {microint && (
            <Image
              src={microint}
              alt={ALT.microint}
              width={0}
              height={0}
              quality={QUALITY}
              sizes={SIZES.full}
              className="w-full h-auto"
            />
          )}
          {colortype && (
            <Image
              src={colortype}
              alt={ALT.colortype}
              width={0}
              height={0}
              quality={QUALITY}
              sizes={SIZES.full}
              className="w-full h-auto"
            />
          )}
        </div>
      )}
    </div>
  );
}
