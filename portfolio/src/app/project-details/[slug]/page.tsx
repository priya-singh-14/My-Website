import ProjectLayout from "@/app/components/project-layout";
import { allProjects } from "@/app/utils/projects";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Every project is known at build time, so the five slug routes can be
// prerendered instead of resolved on demand.
export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = allProjects.find(
    (p) => p.slug === decodeURIComponent(slug).toLowerCase()
  );

  if (!project) {
    return notFound();
  }

  return <ProjectLayout project={project} />;
}
