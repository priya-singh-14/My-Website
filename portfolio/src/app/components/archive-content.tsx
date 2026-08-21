"use client";

import { useState } from "react";
import Link from "next/link";
import { allProjects } from "../utils/projects";

export default function ArchiveContent() {
  const [viewedProjects, setViewedProjects] = useState("All");

  const filteredProjects = allProjects.filter(
    (project) =>
      viewedProjects === "All" || project.subtitle.includes(viewedProjects)
  );

  return (
    <div className="mt-10 md:mt-2">
      <div className="flex gap-2 text-p2 mb-8">
        {["All", "Dev", "Design"].map((filter) => (
          <button
            key={filter}
            onClick={() => setViewedProjects(filter)}
            className={
              viewedProjects === filter
                ? "font-semibold text-primary"
                : "font-light text-primary/60"
            }
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="flex flex-col divide-y divide-primary/10">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/project-details/${encodeURIComponent(project.id)}`}
            className="flex flex-col md:flex-row md:items-center justify-between py-5 gap-1 group"
          >
            <span className="text-p font-light uppercase text-primary/90 group-hover:text-primary">
              {project.title}
            </span>
            <span className="text-p2 font-light text-primary/50">
              {project.subtitle}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
