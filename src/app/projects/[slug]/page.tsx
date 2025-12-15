"use client";

import { projects } from "../../data/projectsData"; 
import { notFound } from "next/navigation";
import Image from "next/image";
import empathyMap1 from "/public/empathymap1.png";
import empathyMap2 from "/public/empathymap2.png";
import interviewMap1 from "/public/interviewmap1.png";
import journeyMap from "/public/journeymap.png";
import serviceBlueprint from "/public/serviceblueprint.png";
import userPersona1 from "/public/userpersona1.png";
import userPersona2 from "/public/userpersona2.png";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white font-serif px-6 lg:px-24 py-20 min-h-screen">
      
      {/* Project Title and Tags */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-anjana">{project.title}</h1>
        <div className="flex flex-wrap justify-center gap-2 text-black text-sm">
          {project.tags.map((tag) => (
            <span key={tag} className="border border-black px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Project Image */}
      <div className="flex justify-center mt-12">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Project Overview */}
      <section className="mt-20 space-y-6 max-w-4xl mx-auto">
        <h2 className="text-3xl text-anjana font-bold">Project Overview</h2>
        <p className="text-black">{project.overview}</p>
      </section>

      {/* My Role */}
      <section className="mt-16 space-y-4 max-w-4xl mx-auto">
        <h2 className="text-3xl text-anjana font-bold">My Role</h2>
        <p className="text-black font-bold">{project.role}</p>
        <ul className="list-disc list-inside text-black space-y-2">
          {project.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Research Process */}
      {project.researchProcess && (
        <section className="mt-16 space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl text-anjana font-bold">Research Process</h2>

          {project.researchProcessItems && (
            <div className="space-y-2">
              <ul className="list-disc list-inside text-black space-y-2">
                {project.researchProcessItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.userInterviews && (
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-black">User Interviews</h3>
              <p className="text-black">{project.userInterviews}</p>
            </div>
          )}

          {project.keyFindings && (
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-black">Key Findings</h3>
              <ul className="list-disc list-inside text-black space-y-2">
                {project.keyFindings.map((finding, index) => (
                  <li key={index}>{finding}</li>
                ))}
              </ul>
            </div>
          )}

{project.maps && (
  <div className="space-y-8">
    <h3 className="text-2xl font-semibold text-black">Maps and Diagrams</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[ 
        { src: empathyMap1, label: "Empathy Map #1" },
        { src: empathyMap2, label: "Empathy Map #2" },
        { src: interviewMap1, label: "Interview Synthesis Map" },
        { src: journeyMap, label: "Journey Map" },
        { src: serviceBlueprint, label: "Service Blueprint" },
        { src: userPersona1, label: "User Persona #1" },
        { src: userPersona2, label: "User Persona #2" }
      ].map(({ src, label }, index) => (
        <div key={index} className="space-y-2">
          <Image
            src={src}
            alt={label}
            width={600}
            height={400}
            className="rounded-md shadow-md object-contain"
          />
          <p className="text-sm text-center text-black">{label}</p>
        </div>
      ))}
    </div>
  </div>
)}

{project.projectImages && project.projectImages.length > 0 && (
  <div className="space-y-8">
    <h3 className="text-2xl font-semibold text-black">Project Images</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {project.projectImages.map(({ src, label }, index) => (
        <div key={index} className="space-y-2">
          <Image
            src={src as any}
            alt={label}
            width={600}
            height={400}
            className="rounded-md shadow-md object-contain"
            unoptimized
          />
          <p className="text-sm text-center text-black">{label}</p>
        </div>
      ))}
    </div>
  </div>
)}

        </section>
      )}

      {/* Development Process */}
      {project.developmentProcess && (
        <section className="mt-16 space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl text-anjana font-bold">Development Process</h2>
          <ul className="list-disc list-inside text-black space-y-2">
            {project.developmentProcess.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Outcome */}
      {project.outcome && (
        <section className="mt-16 space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl text-anjana font-bold">Outcome</h2>
          <p className="text-black">{project.outcome}</p>
        </section>
      )}

      {/* Back to Projects Button */}
      <div className="mt-20 text-center">
        <a
          href="/#projects"
          className="bg-black hover:bg-anjana text-white font-bold py-2 px-6 rounded-full border-b-4 border-neutral-800 hover:border-pink-700 transition"
        >
          ← Back to Projects
        </a>
      </div>
    </main>
  );
}
