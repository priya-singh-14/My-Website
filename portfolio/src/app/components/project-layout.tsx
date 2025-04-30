"use client";
import { Project } from "../utils/types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ProjectLayoutProps {
  project: Project;
}

export default function ProjectLayout({ project }: ProjectLayoutProps) {

  const ImageCarousel = () => {
    const images = project.carousel;

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 40
      },
      tablet: {
        breakpoint: { max: 1024, min: 640 },
        items: 1,
        partialVisibilityGutter: 30
      },
      mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
        partialVisibilityGutter: 20
      }
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
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-contain max-h-[800px] md:max-h-[600px] sm:max-h-[400px]"
            />
          ))}
        </Carousel>
      </div>
    );
  };

  const Bullets = () => {
    const bullets = project.bullets;

    return (
      <ul className="list-disc">
        {bullets.map((str, index) => (
          <li
            key={index}
            className="text-sm md:text-p font-helvetica ml-2 mb-2"
          >
            {str}
          </li>
        ))}
      </ul>
    );
  };

  const Video = () => {
    const video = project.video;

    return (
      <div className="mt-4 w-full md:mt-0 md:w-3/4 m-auto">
        <video
          className="overflow-hidden object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    );
  };

  const Link = () => {
    const link = project.link;

    if (link !== "")
      return (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <h4
            className="mr-12 mt-6 text-h4 font-mono text-bluePrimary hover:text-black"
            href={project.link}
          >
            LINK
          </h4>
        </a>
      );
  };

  return (
    <div className="w-full">
      <div className="w-full text-blackPrimary">
        <h4 className="text-lg flex md:text-h4 font-mono mt-16 mx-5 md:mx-10 uppercase">
          {project.title}
        </h4>
        <h4 className="text-lg flex md:text-h4 font-mono mt-6 mx-5 md:mx-10 uppercase">
          {project.description}
        </h4>
        <div className="w-full flex">
          <h4 className="text-lg w-full md:text-h4 font-mono mt-6 mx-5 md:mx-10 uppercase text-cardDarkGrey">
            {project.techstack}
          </h4>
          <Link></Link>
        </div>
        <div className="z-0 flex h-full pb-10 mt-10 bg-blueSecondaryLight text-left">
          <img
            src={"/" + project.mockup}
            className="hidden md:block flex mx-10 pt-5 z-10 w-2/5 min-w-[1/5]"
          />
          <div className="w-full mr-10 md:w-3/5 md:justify-end text-primary">
            <h4 className="w-full md:w-2/3 text-h4 font-mono top-0 pt-8 mx-5 md:mx-10">
              PURPOSE + PLANNING
            </h4>
            <p className="text-md w-full right-0 md:text-p font-helvetica mx-5 md:mx-10 md:pr-10 pr-4 mt-6">
              {project.purpose}
            </p>
            <p className="text-md w-full right-0 md:text-p font-helvetica mx-5 md:mx-10 md:pr-10 pr-4 mt-6">
              {project.details}
            </p>
            <img
              src={"/" + project.mockup}
              className="md:hidden flex pt-5 ml-2"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/2">
            <h4 className="text-lg md:text-h4 font-mono mt-16 mx-4 md:mx-10">
              PROCESS + LEARNING GOALS
            </h4>
            <p className="text-md md:text-p font-helvetica mx-4 pr-2 md:mx-10 mt-6">
              {project.process}
            </p>
            <div className="mx-6 md:mx-12 mt-10 mb-10 md:mb-20">
              <Bullets></Bullets>
            </div>
            <div className="block md:hidden mx-4 md:mx-10">
              <ImageCarousel />
            </div>
          </div>
          <div className="hidden md:block md:w-1/2">
            <div className="mt-20 mx-auto mb-20 w-3/4">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </div>
      <Video></Video>
      <div className="md:hidden bottom-0 h-10 mt-10 bg-blueSecondary"></div>
    </div>
  );
}
