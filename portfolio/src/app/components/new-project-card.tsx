"use client";
import Link from "next/link";
import { NewProject } from "../utils/types";

interface ProjectCardProps {
  project: NewProject;
}

export default function NewProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/project-details/${encodeURIComponent("" + project.id)}`}
      passHref
    >
      <div className="w-full flex flex-col md:flex-row border border-greyLight p-5 md:p-0 md:border-opacity-0">
        <img 
          className="w-full md:w-1/2 object-cover" 
          src={"/" + project.coverImage}
          alt={project.title}
        />
        <div className="w-full h-auto md:w-1/2 md:px-4 md:py-0 py-4">
          <h3 className="font-mono text-lg md:text-h3 px-2 md:px-5 text-blackPrimary uppercase">
            {project.title}
          </h3>
          <p className="font-mono font-light px-2 pb-4 md:px-5 md:pb-0 text-sm md:text-base text-greyPrimary uppercase">
            {project.subtitle}
          </p>
          <p className="font-sans text-sm md:text-p2 p-2 pb-4 md:p-5 text-blackPrimary">
            {project.description}
          </p>
          <div className="mx-2 md:mx-5 mb-2 md:mb-5 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => {
              return (
                <div key={i} className="border border-greyPrimary rounded-md">
                  <p className="text-xs md:text-sm text-nowrap px-2 py-1 font-mono uppercase text-greyPrimary">
                    {tag}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}