import ProjectLayout from "@/app/components/project-layout";
import { allProjects } from "@/app/utils/projects";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = allProjects.find((p) => p.id === decodeURIComponent(id));

  if (!project) {
    return notFound();
  }

  return <ProjectLayout project={project} />;
}