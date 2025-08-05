import ProjectLayout from "@/app/components/project-layout";
import { allProjects } from "@/app/utils/projects";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find((p) => p.id === decodeURIComponent(params.id));

  if (!project) {
    return notFound();
  }

  return <ProjectLayout project={project} />;
}