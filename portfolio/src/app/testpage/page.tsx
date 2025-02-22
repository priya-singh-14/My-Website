import ProjectLayout from "@/app/components/project-layout";
import { devProjects } from "@/app/utils/projects";

export default function testpage() {
    return (
      <ProjectLayout project={devProjects[0]}></ProjectLayout>
    );
  }
  
  