export type LeadershipEntry = {
  title: string;
  org: string;
  dates: string;
  skills: string[];
  bullets: string[];
  logoSrc: string;
  caption?: string;
};

export const leadershipEntries: LeadershipEntry[] = [
  {
    title: "Developer + Journalist",
    org: "Scout",
    dates: "Sept 2024 — Present",
    skills: ["Collaboration", "Decision Making", "Communication", "Service Design", "User Research"],
    bullets: [
      "Conducted extensive user research and interviews with first-time homebuyers in Boston to gain insights into their needs and challenges.",
      "Collaborated with the City of Boston's Housing & Innovation Lab to develop strategies for streamlining the homebuying process and improving accessibility.",
      "Utilized service design and spatial design principles to create user-centric solutions that enhance the homebuying experience for individuals in the community.",
      "Generated empathy maps and interview maps to synthesize data and identify key themes for informed decision-making.",
    ],
    logoSrc: "/homebuyerguide (1).png",
    caption: "Scout",
  },
  {
    title: "Community Leader",
    org: "InterVarsity",
    dates: "Sept 2023 — Present",
    skills: ["Leadership", "Facilitation", "Community Building", "Faith"],
    bullets: [
      "Lead a weekly Bible study group of 5+ students, facilitating discussions that encouraged spiritual growth, vulnerability, and community.",
      "Plan and coordinate community-building events such as worship nights, game nights, and fellowship gatherings to foster deeper relationships.",
      "Create a welcoming and inclusive environment that supports both new and returning members in their faith journeys.",
      "Collaborate with other student leaders to align group activities with broader campus ministry goals.",
    ],
    logoSrc: "/saiv1.png",
    caption: "InterVarsity",
  },
  {
    title: "Social Media Manager",
    org: "South Asian InterVarsity",
    dates: "Sept 2023 — Present",
    skills: ["Creativity", "Design", "Writing"],
    bullets: [
      "Grew Instagram to 100+ followers and gained 10+ new members.",
      "Curated thoughtful content that reflected faith and community.",
    ],
    logoSrc: "/saiv1.png",
    caption: "South Asian InterVarsity",
  },
  {
    title: "Member",
    org: "Alpha Phi Omega",
    dates: "Jan 2024 — Present",
    skills: ["Service", "Leadership", "Fellowship"],
    bullets: [
      "Engaging in community service projects and leadership training.",
      "Building lasting connections through acts of service.",
    ],
    logoSrc: "/apo.png",
    caption: "Alpha Phi Omega",
  },
  {
    title: "Member",
    org: "NU Choral Society",
    dates: "Sept 2023 — Present",
    skills: ["Music", "Performance", "Teamwork"],
    bullets: [
      "Performing with a university choir and collaborating with fellow vocalists.",
      "Growing as a musician and teammate.",
    ],
    logoSrc: "/choir.png",
    caption: "NU Choral Society",
  },
];
