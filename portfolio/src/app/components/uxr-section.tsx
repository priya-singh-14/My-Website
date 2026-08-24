"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { UXRSection } from "../utils/types";

interface UXRSectionProps {
  sectionDetails: UXRSection;
}

export default function UXRSection({ sectionDetails }: UXRSectionProps) {
  const ImageCarousel = () => {
    const images = sectionDetails.carousel;

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 40,
      },
      tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 1,
        partialVisibilityGutter: 30,
      },
      mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
        partialVisibilityGutter: 20,
      },
    };

    return (
      <div className="w-full carousel-wrapper">
        <Carousel
          responsive={responsive}
          arrows={true}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                className="pb-5 w-full h-auto object-contain max-h-[800px] md:max-h-[600px] sm:max-h-[400px]"
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  };

  return (
    <div className="w-full px-5 md:px-[8.33%] py-10">
      <h4 className="font-manrope font-semibold text-[14px] text-[#444] mb-8">
        User Research
      </h4>
      <ImageCarousel></ImageCarousel>
    </div>
  );
}
