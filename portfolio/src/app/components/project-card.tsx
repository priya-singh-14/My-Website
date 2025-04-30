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
      <div className={`hover:shadow-md transform transition ${color}`}>
        <div className="relative cursor-pointer">
          <img
            src={"/" + project.cardImage}
            className="m-auto p-4 overflow-hidden object-contain"
          ></img>
        </div>
      </div>
      <h4 className="font-mono text-h4 pt-3 text-blackPrimary">{project.title}</h4>
    </Link>
  );
}
