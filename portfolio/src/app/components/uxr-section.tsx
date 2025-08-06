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
    <div className="w-full h-full p-5 md:p-10">
      <h4 className="text-h4 font-mono uppercase px-5 pb-10 mr-20 text-blackPrimary">
        User Research
      </h4>
      <div className="px-5 md:px-0">
      <ImageCarousel></ImageCarousel></div>
    </div>
  );
}
