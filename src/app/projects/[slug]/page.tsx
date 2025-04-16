import { projects } from "../../data/projectsData";
import ProjectLayout from "../../components/ProjectLayout";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return <ProjectLayout project={project} />;
}
