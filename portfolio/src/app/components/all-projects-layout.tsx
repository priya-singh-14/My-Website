"use client";

import { useState } from "react";
import NewProjectCard from "./new-project-card";
import { NewProject } from "../utils/types";

interface AllProjectsProps {
  title: string;
  description: string;
  projects: NewProject[];
}

export default function AllProjectsLayout(props: AllProjectsProps) {
  const [viewedProjects, setViewedProjects] = useState("All");

  function filterProjects(): NewProject[] {
    let filteredProjects : NewProject[] = []
    
    props.projects.forEach((project) => {
        if (project.subtitle.includes(viewedProjects) || viewedProjects == "All") {
            filteredProjects.push(project);
        }
    });

    return filteredProjects;
}

  return (
    <div className="w-full pb-10">
      <h2 className="text-h3 mx-5 md:mx-10 md:mx-10 font-mono font-light md:text-h2 pt-7 pb-5 text-blackPrimary">
        {props.title}
      </h2>
      <h4 className="mx-5 md:mx-10 justify-left font-mono text-b text-blackPrimary">
        {props.description}
      </h4>
      <hr className="mx-5 md:mx-10"></hr>
      <div className="flex flex-wrap gap-2 mx-5 md:mx-10 mt-5 font-sans">
        <button
          onClick={() => setViewedProjects("All")}
          className={`text-greyPrimary ${
            viewedProjects == "All" ? "font-semibold" : "font-light"
          }`}
        >
          ALL |
        </button>
        <button
          onClick={() => setViewedProjects("Dev")}
          className={`text-greyPrimary ${
            viewedProjects == "Dev" ? "font-semibold" : "font-light"
          }`}
        >
          DEV |
        </button>
        <button
          onClick={() => setViewedProjects("Design")}
          className={`text-greyPrimary ${
            viewedProjects == "Design" ? "font-semibold" : "font-light"
          }`}
        >
          DESIGN
        </button>
      </div>
      <div className="m-auto w-full px-5 pt-10 gap-y-10 grid grid-cols-1 md:px-10">
        {filterProjects().map((project, index) => (
          <NewProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
