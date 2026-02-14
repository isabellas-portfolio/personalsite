import { projects } from "../data/projectsData";
import ProjectTile from "./ProjectTile";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mt-24 md:mt-32 bg-white py-20 px-6 md:px-10 lg:px-16 font-jost text-black"
    >
      <h2 className="text-3xl lg:text-4xl font-semibold text-center text-black mb-16">
        Projects: In and Out of the Classroom
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16">
        {projects.map((project) => (
          <ProjectTile
            key={project.slug}
            title={project.title}
            subtitle={project.role}
            tags={project.tags}
            slug={project.slug}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}
