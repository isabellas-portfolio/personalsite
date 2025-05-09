import homebuyerImg from "/public/homebuyerguide (1).png";
import homesharerImg from "/public/homesharer.png";

import type { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  title: string;
  tags: string[];
  image: StaticImageData;
  role: string;
  timeline: string;
  partner: string;
  overview: string;
  responsibilities: string[];
  links?: string[];

  // Optional extended fields
  researchProcess?: boolean;
  userInterviews?: string;
  keyFindings?: string[];
  maps?: string[];
  developmentProcess?: string[];
  outcome?: string;
}

export const projects: Project[] = [
    {
      slug: "homebuyers-guide",
      title: "First-Time Homebuyers Guide",
      tags: ["UX Research", "Interviewing", "Web Dev"],
      image: homebuyerImg,
      role: "Developer & Journalist",
      timeline: "Jan 2024 – Apr 2024",
      partner: "The Housing Innovation Lab at the City of Boston",
      overview:
        "Interviewed first-time homebuyers to identify pain points, then built a Drupal site hosted on the City of Boston’s platform.",
      responsibilities: [
        "Conducted user interviews with first-time homebuyers.",
        "Synthesized findings into user needs and goals.",
        "Built the final website on Drupal hosted by the city."
      ],
      researchProcess: true,
      userInterviews: "Interviewed first-time homebuyers to understand their needs, concerns, and challenges.",
      keyFindings: [
        "Confusing paperwork processes",
        "Affordability concerns",
        "Lack of trustworthy resources",
        "Unclear eligibility criteria for first-time programs"
      ],
      maps: ["Stakeholder Map", "Empathy Map", "Journey Map"],
      developmentProcess: [
        "Created a streamlined navigation structure based on user research.",
        "Wrote and structured content for maximum accessibility and clarity.",
        "Implemented mobile-responsive, WCAG-compliant pages."
      ],
      outcome:
        "The Homebuyers Guide successfully launched on the City of Boston’s official site, improving information access for hundreds of first-time buyers and being featured as a resource by the Boston Housing Authority."
    },
  {
    slug: "homesharing-research",
    title: "Boston Homesharing Research",
    tags: ["Project Management", "UX Research", "Process Design"],
    image: homesharerImg,
    role: "Project Lead",
    timeline: "Sept 2024 – Present",
    partner: "The Housing Innovation Lab at the City of Boston",
    overview:
      "Led a cross-functional team to research home sharing practices in Boston and propose accessible housing solutions.",
    responsibilities: [
      "Designed and distributed surveys to understand homeowner interest in homesharing.",
      "Created stakeholder maps, journey maps, and a comprehensive literature review.",
      "Managed agile workflows and communicated biweekly with city stakeholders.",
      "Developed a detailed process book documenting research and findings.",
    ],
    links: [],
  },
];
