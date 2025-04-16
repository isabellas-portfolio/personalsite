
import MotionWrapper from "./components/MotionWrapper";
import Link from "next/link";
import Image from "next/image";
import scoutpic from "/public/homebuyerguide (1).png";
import digitalwpic from "/public/digitalwriting.png";
import { projects } from "./data/projectsData";
import ProjectCard from "./components/ProjectCard";

export default function HomePage() {
  return (
    <main className="bg-white font-jost">
      {/* Animated Hero Section */}
      <MotionWrapper />

    
      {/* Scroll to Projects Button */}
      <div className="text-center text-md mt-16">
        <Link href="#projects" className="text-black underline hover:text-anjana transition">
          ↓ my projects ↓
        </Link>
      </div>

      {/* Projects Section */}
      <section id="projects" className="mt-32 px-6 font-jost text-black">
  <h2 className="text-3xl lg:text-5xl text-anjana font-bold text-center mb-12">
    Projects: In and Out of the Classroom
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-center">
    {projects.map((project) => (
      <ProjectCard
        key={project.slug}
        title={project.title}
        tags={project.tags}
        slug={project.slug}
        image={project.image}
      />
    ))}
  </div>
</section>



      {/* Explore More Button */}
      <div className="mt-20 text-center">
        <Link
          href="/experience"
          className="bg-black hover:bg-anjana text-white font-bold py-2 px-6 rounded-full border-b-4 border-neutral-800 hover:border-pink-700 transition"
        >
          Explore More Projects!
        </Link>
      </div>

      {/* Back to Top */}
      <div className="mt-20 text-center">
        <Link href="#top" className="text-black underline hover:text-anjana transition">
          ↑ back to top ↑
        </Link>
      </div>
    </main>
  );
}
