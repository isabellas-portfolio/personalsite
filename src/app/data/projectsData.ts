import homebuyerImg from "/public/homebuyerguide (1).png";
import homesharerImg from "/public/homesharer.png";
import openPermitImg from "/public/openpermit.png";
import seniorGuideImg from "/public/northeastern-senior-guide.png";
import digitizingArchiveImg from "/public/digitizing-archive.png";

import type { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  title: string;
  /** One-line roles/skills subtitle (e.g. "Developer & Journalist" or tags joined) */
  subtitle?: string;
  tags: string[];
  image: StaticImageData;
  role: string;
  timeline: string;
  partner: string;
  /** Team or client name for metadata */
  team?: string;
  /** Tools used (e.g. "Drupal, Figma") */
  tools?: string;
  overview: string;
  responsibilities: string[];
  links?: string[];

  // Optional extended fields
  researchProcess?: boolean;
  researchProcessItems?: string[];
  userInterviews?: string;
  keyFindings?: string[];
  maps?: string[];
  projectImages?: Array<{ src: string; label: string }>;
  developmentProcess?: string[];
  outcome?: string;
}

export const projects: Project[] = [
    {
      slug: "homebuyers-guide",
      title: "First-Time Homebuyers Guide",
      subtitle: "Developer & Journalist",
      tags: ["UX Research", "Interviewing", "Web Dev"],
      image: homebuyerImg,
      role: "Developer & Journalist",
      timeline: "Jan 2024 – Apr 2024",
      partner: "The Housing Innovation Lab at the City of Boston",
      team: "Housing Innovation Lab, City of Boston",
      tools: "Drupal, Figma",
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
    subtitle: "Project Lead",
    tags: ["Project Management", "UX Research", "Process Design"],
    image: homesharerImg,
    role: "Project Lead",
    timeline: "Sept 2024 – Apr 2025",
    partner: "The Housing Innovation Lab at the City of Boston",
    team: "Scout Labs × Housing Innovation Lab, City of Boston",
    tools: "Figma, Surveys, Miro",
    overview:
      "Led a cross-functional team to research home sharing practices in Boston and propose accessible housing solutions.",
    responsibilities: [
      "Designed and distributed surveys to understand homeowner interest in homesharing.",
      "Created stakeholder maps, journey maps, and a comprehensive literature review.",
      "Managed agile workflows and communicated biweekly with city stakeholders.",
      "Developed a detailed process book documenting research and findings.",
    ],
    links: [],
    researchProcess: true,
    researchProcessItems: [
      "Literature Review",
      "Preliminary Research",
      "Stakeholder Maps"
    ],
    projectImages: [
      { src: "/litreview.png", label: "Literature Review" },
      { src: "/prelimresearch.png", label: "Preliminary Research" },
      { src: "/summary.png", label: "Research Summary" }
    ],
    outcome:
      "My team presented this research at Scout Conference, Northeastern's RISE, and Scout's final showcase! After our initial research in the fall, we surveyed over 80 people across different areas and demographics in order to get a better understanding of homesharing interest in Boston specifically. We received positive feedback from this survey and handed this research to our partners at the city.",
  },
  {
    slug: "open-permit",
    title: "OpenPermit (Green Tape Initiative)",
    subtitle: "Generative AI Product Manager",
    tags: ["Product Management", "Generative AI", "Civic Tech", "UX Research"],
    image: openPermitImg,
    role: "Generative AI Product Manager",
    timeline: "Sep 2025 – Dec 2025",
    partner: "Burnes Center for Social Change × City of Boston",
    team: "Burnes Center Product Team × Boston Mayor's Office of Innovation & Technology",
    tools: "Figma, Neo4j, Python, OpenAI API, Notion, Miro",
    overview:
      "Led product strategy and development for OpenPermit, an AI-powered feedback and insights platform designed to improve Boston's permitting process through structured classification, public transparency, and data-informed policy recommendations.",
    responsibilities: [
      "Designed and scoped a citywide AI feedback classification system across five core categories (Economic & Equity, Communication & Service, Technology & Access, Process & Operations, Policy & Rules Clarity).",
      "Developed prompt architectures and evaluation workflows to improve multi-label classification accuracy.",
      "Collaborated with city stakeholders through weekly research sessions and iterative user testing.",
      "Built Figma prototypes and dashboard concepts for internal staff and public-facing transparency tools.",
      "Explored graph database integrations (Neo4j) to model relationships between feedback themes and policy areas.",
      "Prepared strategic presentations for senior city leadership and cross-agency stakeholders.",
    ],
    links: ["https://github.com/ShadowMasterAJ/OpenFeedback"],
    researchProcess: true,
    researchProcessItems: [
      "Stakeholder Interviews",
      "Feedback Taxonomy Design",
      "AI Prompt Engineering",
      "Dashboard Prototyping",
      "Policy Insight Mapping",
    ],
    projectImages: [
      { src: "/taxonomy.png", label: "Feedback Classification Taxonomy" },
      { src: "/feedback-graph.png", label: "Feedback Graph (Neo4j Visualization)" },
      { src: "/dashboard.png", label: "Internal Staff Dashboard — Feedback Database" },
      { src: "/publicview.png", label: "Public Transparency View" },
    ],
    outcome:
      "OpenPermit established a structured framework for analyzing resident and business feedback within Boston's permitting transformation initiative. The platform enabled categorization of complex qualitative input into actionable policy insights, supporting improved transparency, operational efficiency, and more equitable access to city services.",
  },
  {
    slug: "northeastern-senior-guide",
    title: "A Graduating Senior's Guide to Northeastern",
    subtitle: "Creator & Product Builder",
    tags: ["Vibe Coding", "Journalism", "Web Development", "Student Resources"],
    image: seniorGuideImg,
    role: "Creator & Product Builder",
    timeline: "Spring 2026",
    partner: "Northeastern University (Journalism)",
    team: "Solo project",
    tools: "Cursor, Next.js, Tailwind CSS",
    overview:
      "Vibe-coding project for a journalism class: a Northeastern senior guide. I developed the concept end to end in Cursor and entered all information and resources myself.",
    responsibilities: [
      "Defined the guide’s structure and narrative for first-year and transfer students.",
      "Built the site in Cursor with a clear, scannable layout.",
      "Researched and wrote every section, link, and checklist myself.",
    ],
    links: ["https://northeastern-guide.vercel.app/#top"],
    outcome:
      "Published a living campus guide that lowers the activation energy for navigating Northeastern—resources, food, study spots, co-op, and senior advice in one place.",
  },
  {
    slug: "digitizing-the-archive",
    title: "Digitizing the Archive",
    subtitle: "Digital Humanities Capstone",
    tags: ["Digital Humanities", "Literature", "English", "Web Design"],
    image: digitizingArchiveImg,
    role: "Researcher, Writer & Builder",
    timeline: "Spring 2026",
    partner: "ENGL 4710 Capstone · Northeastern University",
    team: "Solo project",
    tools: "Cursor, Next.js, Literary & archival research",
    overview:
      "Final capstone for my English degree—a digital project that pairs archival documents with literary texts in an interactive reading room, combining my passions for literature and thoughtful interface design.",
    responsibilities: [
      "Framed the scholarly argument and curated paired archive and literary materials.",
      "Designed and built the reading-room experience on the web.",
      "Wrote all interpretive and reflective copy for the archive, about, and reflection sections.",
    ],
    links: ["https://engl4710capstone.vercel.app"],
    outcome:
      "Shipped a capstone site that invites readers to move between material records and literary context without flattening either—clear metadata, humane pacing, and room for close reading.",
  },
];
