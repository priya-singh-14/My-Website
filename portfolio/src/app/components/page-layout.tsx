import Pen from "../components/pen";
import ProjectCard from "../components/project-card";
import { Project } from "../utils/types";

interface PageLayoutProps {
  title: string;
  description: string;
  canvasImage: string;
  canvasCaption?: string;
  projects: Project[];
}

export default function PageLayout(props: PageLayoutProps) {
  return (
    <div className="w-full">
      <div className="pt-5 flex mb-5 w-full">
        <div className="w-1/3">
          <h3 className="font-mono text-h3 px-12 pt-12 pb-5 text-blackPrimary">
            {props.title}
          </h3>
          <h4 className="justify-left font-mono text-b px-12 text-blackPrimary">
            {props.description}
          </h4>
        </div>
        <div className="w-2/3 relative">
          <Pen canvasImage={props.canvasImage} />
        </div>
      </div>
      <div className="w-full">
        <h4 className="relative text-end pr-10 top-0 font-helvetica text-b text-cardDarkGrey">
          {props.canvasCaption || ""}
        </h4>
      </div>
      <div className="pt-20 p-10 gap-x-12 gap-y-10 items-center justify-center m-auto grid grid-cols-2">
        {props.projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
