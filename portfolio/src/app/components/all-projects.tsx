"use client"

import { useState } from "react";
import NewProjectCard from "../components/new-project-card";
import { NewProject } from "../utils/types";

interface AllProjectsProps {
  title: string;
  description: string;
  projects: NewProject[];
}

export default function AllProjects(props: AllProjectsProps) {
    const [viewedProjects, setViewedProjects] = useState();

  return (
    <div className="w-full pb-10">
      <h2 className="mx-10 md:mx-10 font-mono text-h2 pt-12 pb-5 text-blackPrimary">
        {props.title}
      </h2>
      <hr className="mx-10"></hr>
      {/* <h4 className="mx-5 md:mx-10 justify-left font-mono text-b text-blackPrimary">
        {props.description}
      </h4> */}
      <div className="m-auto w-4/5 pt-20 gap-y-10 grid grid-cols-1">
        {props.projects.map((project, index) => (
          <NewProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
