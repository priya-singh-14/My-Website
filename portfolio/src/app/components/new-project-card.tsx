"use client";
import Link from "next/link";
import Image from "next/image";
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
      <div className="w-full flex flex-col border border-greyLight p-3 md:flex-row md:p0 md:border-opacity-100">
        <Image
          className="w-full md:w-1/2 object-cover" 
          src={"/" + project.coverImage}
          alt={project.title}
        />
        <div className="w-full h-auto md:w-1/2 md:px-4 md:py-0 py-4">
          <h3 className="font-mono text-lg px-2 text-blackPrimary uppercase md:text-h3 md:px-5 md:pb-2">
            {project.title}
          </h3>
          <p className="font-mono font-light px-2 pb-4 md:px-5 md:pb-0 text-sm md:text-base text-greyPrimary uppercase">
            {project.subtitle}
          </p>
          <p className="font-sans text-sm p-2 pb-4 md:text-p2 md:p-5 text-blackPrimary">
            {project.description}
          </p>
          <div className="mx-2 md:mx-5 md:mb-5 flex flex-wrap gap-2">
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