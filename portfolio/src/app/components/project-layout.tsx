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
      all: {
        breakpoint: { max: 3000, min: 0 },
        items: 1,
      },
    };

    return (
      <div className="w-full">
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
              className="w-full h-auto max-h-[800px] object-contain"
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
          <li key={index} className="text-p font-helvetica ml-2 mb-2">
            {str}
          </li>
        ))}
      </ul>
    );
  };

  const Video = () => {
    const video = project.video;

    return (
      <div className="w-3/4 m-auto">
        <video
          className="overflow-hidden bject-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    )
  }

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
        <h4 className="flex text-h4 font-mono mt-16 ml-10 uppercase">
          {project.title}
        </h4>
        <h4 className="flex text-h4 font-mono mt-6 ml-10 uppercase">
          {project.description}
        </h4>
        <div className="w-full flex">
          <h4 className="w-full text-h4 font-mono mt-6 ml-10 uppercase text-cardDarkGrey">
            {project.techstack}
          </h4>
          <Link></Link>
        </div>
        <div className="z-0 flex h-full pb-10 mt-10 bg-blueSecondaryLight text-left">
          <img
            src={"/" + project.mockup}
            className="flex mx-10 pt-5 z-10 w-2/5 min-w-[1/5]"
          />
          <div className="w-3/5 justify-end text-primary">
            <h4 className="w-2/3 text-h4 font-mono top-0 pt-8 ml-10">
              PURPOSE + PLANNING
            </h4>
            <p className="w-4/5 right-0 text-p font-helvetica ml-10 mt-6">
              {project.purpose}
            </p>
            <p className="w-4/5 right-0 text-p font-helvetica ml-10 mt-6">
              {project.details}
            </p>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-1/2">
            <h4 className="text-h4 font-mono mt-16 ml-10">
              PROCESS + LEARNING GOALS
            </h4>
            <p className="w-full text-p font-helvetica ml-10 mt-6">
              {project.process}
            </p>
            <div className="ml-12 mt-10 mb-20">
              <Bullets></Bullets>
            </div>
          </div>
          <div className="w-1/2">
            <div className="mt-20 mx-auto mb-20 h-96 w-3/4">
              <ImageCarousel></ImageCarousel>{" "}
            </div>
          </div>
        </div>
      </div>
      <Video></Video>
    </div>
  );
}
