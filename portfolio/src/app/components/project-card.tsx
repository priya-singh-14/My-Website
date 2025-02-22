"use client";

import Link from "next/link";
import { Project } from "../utils/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const colorOptions: string[] = [
    "bg-cardBlue",
    "bg-cardGrey",
    "bg-cardWhite",
    "bg-cardDarkGrey",
  ];
  const color = colorOptions[index % colorOptions.length];

  return (
    <Link
      href={`/project-details/${encodeURIComponent("" + project.id)}`}
      passHref
    >
      <div className="relative cursor-pointer">
        <img
          src={"/" + project.cardImage}
          className="mt-10 ml-10 w-5/6 absolute"
        ></img>
        <div className={` aspect-square ${color}`}></div>
        <h4 className="font-mono text-h4 pt-3">{project.title}</h4>
      </div>
    </Link>
  );
}
