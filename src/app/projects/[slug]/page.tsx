"use client";

import { projects } from "../../data/projectsData";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CaseStudyHeader from "../../components/case-study/CaseStudyHeader";
import OverviewGrid from "../../components/case-study/OverviewGrid";
import CaseSection from "../../components/case-study/CaseSection";
import empathyMap1 from "/public/empathymap1.png";
import empathyMap2 from "/public/empathymap2.png";
import interviewMap1 from "/public/interviewmap1.png";
import journeyMap from "/public/journeymap.png";
import serviceBlueprint from "/public/serviceblueprint.png";
import userPersona1 from "/public/userpersona1.png";
import userPersona2 from "/public/userpersona2.png";

const HOMEBUYER_MAPS = [
  { src: empathyMap1, label: "Empathy Map #1" },
  { src: empathyMap2, label: "Empathy Map #2" },
  { src: interviewMap1, label: "Interview Synthesis Map" },
  { src: journeyMap, label: "Journey Map" },
  { src: serviceBlueprint, label: "Service Blueprint" },
  { src: userPersona1, label: "User Persona #1" },
  { src: userPersona2, label: "User Persona #2" },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const subtitle = project.subtitle ?? project.role;
  const metaItems = [
    { label: "Role", value: project.role },
    { label: "Timeline", value: project.timeline },
    ...(project.team ? [{ label: "Team", value: project.team }] : []),
    ...(project.tools ? [{ label: "Tools", value: project.tools }] : []),
  ].filter(Boolean) as { label: string; value: string }[];

  const hasResearch =
    project.userInterviews ||
    (project.keyFindings && project.keyFindings.length > 0) ||
    (project.researchProcessItems && project.researchProcessItems.length > 0);
  const hasProcess =
    (project.developmentProcess && project.developmentProcess.length > 0) ||
    (project.maps && project.maps.length > 0) ||
    (project.projectImages && project.projectImages.length > 0);

  return (
    <main className="min-h-screen bg-white font-jost text-black">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-14 md:py-20">
        <CaseStudyHeader title={project.title} subtitle={subtitle} />

        {/* Project header image */}
        {project.image && (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-neutral-100 mb-14 md:mb-20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1152px"
              priority
            />
          </div>
        )}

        {/* Overview: 2-col grid */}
        <OverviewGrid
          overview={<p>{project.overview}</p>}
          metaItems={metaItems}
        />

        {/* Responsibilities */}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <CaseSection heading="Responsibilities">
            <ul className="list-disc list-inside space-y-1.5 text-[#2c2c2c]">
              {project.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CaseSection>
        )}

        {/* Research Overview */}
        {hasResearch && (
          <CaseSection heading="Research Overview">
            <div className="space-y-8">
              {project.researchProcessItems && project.researchProcessItems.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-anjana mb-2">
                    Research activities
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 text-[#2c2c2c]">
                    {project.researchProcessItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.userInterviews && (
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-anjana mb-2">
                    User interviews
                  </h3>
                  <p>{project.userInterviews}</p>
                </div>
              )}
              {project.keyFindings && project.keyFindings.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-anjana mb-2">
                    Key findings
                  </h3>
                  <ul className="list-disc list-inside space-y-1.5 text-[#2c2c2c]">
                    {project.keyFindings.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </CaseSection>
        )}

        {/* Process */}
        {hasProcess && (
          <CaseSection heading="Process">
            <div className="space-y-8">
              {project.developmentProcess && project.developmentProcess.length > 0 && (
                <ul className="list-disc list-inside space-y-1.5 text-[#2c2c2c]">
                  {project.developmentProcess.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              )}
              {project.maps && project.slug === "homebuyers-guide" && (
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-anjana mb-4">
                    Maps and diagrams
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {HOMEBUYER_MAPS.map(({ src, label }, i) => (
                      <figure key={i} className="space-y-2">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-100">
                          <Image
                            src={src}
                            alt={label}
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                        <figcaption className="text-sm text-neutral-600">
                          {label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
              {project.projectImages && project.projectImages.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider text-anjana mb-4">
                    Project artifacts
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {project.projectImages.map(({ src, label }, i) => (
                      <figure key={i} className="space-y-2">
                        <div className="relative aspect-video rounded-lg overflow-hidden bg-neutral-100">
                          <Image
                            src={src}
                            alt={label}
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 100vw, 50vw"
                            unoptimized
                          />
                        </div>
                        <figcaption className="text-sm text-neutral-600">
                          {label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CaseSection>
        )}

        {/* Outcome */}
        {project.outcome && (
          <CaseSection heading="Outcome">
            <p>{project.outcome}</p>
          </CaseSection>
        )}

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <CaseSection heading="Links">
            <ul className="space-y-2">
              {project.links.map((url, i) => (
                <li key={i}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2c2c2c] underline underline-offset-2 hover:text-neutral-700"
                  >
                    {url}
                  </a>
                </li>
              ))}
            </ul>
          </CaseSection>
        )}

        {/* Back to Projects */}
        <div className="mt-16 md:mt-24 pt-10 border-t border-neutral-200">
          <Link
            href="/#projects"
            className="inline-block text-[#2c2c2c] font-medium underline underline-offset-2 hover:text-neutral-700"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
