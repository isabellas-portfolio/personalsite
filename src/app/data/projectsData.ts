import homebuyerImg from "/public/homebuyerguide (1).png";
import homesharerImg from "/public/homesharer.png";

export const projects = [
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
      "Built the final website on Drupal hosted by the city.",
    ],
    links: [],
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
