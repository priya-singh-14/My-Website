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
      <div className="w-full flex">
        <img className="w-1/2 object-cover" src={"/" + project.coverImage}></img>
        <div className="w-1/2">
          <h3 className="font-mono text-h3 px-5 text-blackPrimary uppercase">
            {project.title}
          </h3>
          <p className="font-mono font-light px-5 text-greyPrimary uppercase">
            {project.subtitle}
          </p>
          <p className="font-sans text-p2 p-5 text-blackPrimary">
            {project.description}
          </p>
          <div className="w-1/2 m-5 w-full flex flex-wrap gap-2">
            {project.tags.map((tag, i) => {
              return (
                <div key={i} className="bottom-0 border border-greyPrimary rounded-[6]">
                  <p className="text-sm text-nowrap px-2 py-1 font-mono uppercase text-greyPrimary">{tag}</p>
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>
    </Link>
  );
}
