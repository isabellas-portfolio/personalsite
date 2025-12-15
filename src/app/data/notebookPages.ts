export type NotebookPage = {
  id: string;
  label?: string;
  company?: string;
  role?: string;
  location?: string;
  dates?: string;
  icon?: string;
  summary?: string;
  bullets?: string[];
  stickyNotes?: {
    title: string;
    body: string;
    color: "yellow" | "pink" | "blue";
  }[];
  isCover?: boolean;
  startDate?: string; // "YYYY-MM-DD" used for timeline ordering
};

export const notebookPages: NotebookPage[] = [
  {
    id: "cover",
    label: "Cover",
    isCover: true,
  },
  {
    id: "scout-labs",
    label: "Scout Labs",
    company: "Scout Labs",
    location: "Boston, MA",
    role: "UX Project Lead",
    dates: "Apr. 2024 – Apr. 2025",
    icon: "🔍",
    startDate: "2024-04-01",
    bullets: [
      "Conducted extensive research with stakeholder and system maps.",
      "Led project lifecycle and ensured deliverables aligned with client needs.",
      "Produced a literature review for home-sharing implementation.",
    ],
    summary:
      "Leading a creative research & design team to shape home sharing in Boston.",
    stickyNotes: [
      {
        title: "Stakeholders",
        body: "City staff, home-sharing hosts, tenant advocates.",
        color: "yellow",
      },
      {
        title: "Key Theme",
        body: "Unclear rules create inconsistent experiences.",
        color: "pink",
      },
      {
        title: "My Role",
        body: "PM + Research Lead: scoped deliverables, ran workshops, aligned eng + design.",
        color: "blue",
      },
    ],
  },
  {
    id: "wayfair",
    label: "Wayfair",
    company: "Wayfair",
    location: "Boston, MA",
    role: "IT Engineer Co-op",
    dates: "Jul. 2024 – Dec. 2024",
    icon: "🧠",
    startDate: "2024-07-01",
    bullets: [
      "Automated shipping label creation, improving efficiency by 50%.",
      "Managed laptop setups for remote and in-person onboarding.",
      "Led onboarding sessions for over 100 new hires weekly.",
    ],
    summary: "Optimizing tech workflows and onboarding at scale.",
    stickyNotes: [
      {
        title: "Impact",
        body: "50% efficiency gain through automation.",
        color: "yellow",
      },
      {
        title: "Scale",
        body: "100+ new hires onboarded weekly.",
        color: "blue",
      },
      {
        title: "Skills",
        body: "Automation, IT infrastructure, process optimization.",
        color: "pink",
      },
    ],
  },
  {
    id: "boces",
    label: "Nassau BOCES",
    company: "Nassau BOCES",
    location: "Westbury, NY",
    role: "Information Technologist Intern",
    dates: "Jun. 2022 – Aug. 2023",
    icon: "💻",
    startDate: "2022-06-01",
    bullets: [
      "Installed over 700 printers and computers remotely.",
      "Used Excel to manage wireless access point inventories.",
    ],
    summary: "Bringing tech solutions to school districts on Long Island.",
    stickyNotes: [
      {
        title: "Scale",
        body: "700+ devices installed remotely.",
        color: "blue",
      },
      {
        title: "Tools",
        body: "Excel, remote installation tools, inventory management.",
        color: "yellow",
      },
      {
        title: "Impact",
        body: "Supporting education through reliable tech infrastructure.",
        color: "pink",
      },
    ],
  },
  {
    id: "litclub",
    label: "Literature Club",
    company: "Literature Club",
    location: "Melville, NY",
    role: "Founder | Web Dev | Socials",
    dates: "Jun. 2020 – Jan. 2022",
    icon: "📚",
    startDate: "2020-06-01",
    bullets: [
      "Raised over $1K to donate 300+ children's books.",
      "Designed an interactive website and led social media.",
      "Organized meetings that blended creativity and service.",
    ],
    summary: "Spreading literacy and joy through community-driven impact.",
    stickyNotes: [
      {
        title: "Impact",
        body: "300+ books donated, $1K+ raised.",
        color: "pink",
      },
      {
        title: "Role",
        body: "Founder, web developer, and social media manager.",
        color: "yellow",
      },
      {
        title: "Mission",
        body: "Blending creativity with community service.",
        color: "blue",
      },
    ],
  },
  {
    id: "nusci",
    label: "NU Science Magazine",
    company: "NU Science Magazine",
    location: "Boston, MA",
    role: "Website Developer",
    dates: "Sept. 2023 – Dec. 2023",
    icon: "🧬",
    startDate: "2023-09-01",
    bullets: [
      "Revamped the site using HTML, CSS, and JavaScript.",
      "Boosted site performance and UX with clean visuals.",
    ],
    summary: "Modernizing digital publishing with clean code and design.",
    stickyNotes: [
      {
        title: "Tech Stack",
        body: "HTML, CSS, JavaScript for modern web experience.",
        color: "blue",
      },
      {
        title: "Focus",
        body: "Performance optimization and clean UX design.",
        color: "yellow",
      },
      {
        title: "Impact",
        body: "Improved site performance and user experience.",
        color: "pink",
      },
    ],
  },
  {
    id: "scout-labs-labs-director",
    label: "Labs Director",
    company: "Scout Labs",
    role: "Labs Team Director",
    location: "Boston, MA",
    dates: "May. 2025 – Present",
    icon: "🧪",
    summary:
      "Directing Scout Labs' studio of cross-functional student teams to deliver civic-tech and design projects for community partners.",
    bullets: [
      "Oversee multiple concurrent projects each semester for partners like the City of Boston and local nonprofits.",
      "Recruit, onboard, and mentor designers, researchers, and engineers, ensuring teams have clear scope and support.",
      "Run weekly stand-ups and milestone reviews to keep projects aligned with partner goals and timelines.",
      "Codify processes through playbooks, templates, and feedback loops so future Labs teams can ship work more smoothly.",
    ],
    stickyNotes: [
      {
        title: "Scope",
        body: "3–4 active projects per semester across civic tech, health, and community design.",
        color: "yellow",
      },
      {
        title: "Leadership",
        body: "Coaching teammates, unblocking teams, and translating partner needs into clear briefs.",
        color: "pink",
      },
      {
        title: "Favorite Wins",
        body: "Knox wellness van redesign, OpenPermit/Green Tape explorations, and new partner pipelines.",
        color: "blue",
      },
    ],
    startDate: "2024-09-01",
  },
  {
    id: "burnes-center-genai-pm",
    label: "Gen AI Product PM",
    company: "Burnes Center & City of Boston",
    role: "Generative AI Product Developer",
    location: "Boston, MA",
    dates: "Sept. 2025 – Dec 2025",
    icon: "🤖",
    summary:
      "Building Green Tape, a generative-AI powered feedback platform that helps Boston simplify permits and respond to residents more effectively.",
    bullets: [
      "Led discovery with 15+ city staff, small business owners, and residents to map pain points in the permitting feedback process.",
      "Designed a constituent-facing feedback form and a staff dashboard that surface patterns, pain points, and root causes.",
      "Implemented an OpenAI-based classification pipeline to tag feedback by category, sentiment, and urgency and group similar issues.",
      "Defined success metrics with city partners—complaint reduction, time to response, and clarity of communication—and built a roadmap for pilots.",
    ],
    stickyNotes: [
      {
        title: "Problem",
        body: "Feedback on permits is scattered across 311, email, and web forms—hard to act on, easy to ignore.",
        color: "yellow",
      },
      {
        title: "AI Bits",
        body: "LLM-powered classification, clustering, and suggested follow-ups for city staff.",
        color: "pink",
      },
      {
        title: "Impact",
        body: "Make residents feel heard and give agencies a clear, actionable view of where rules and comms need to change.",
        color: "blue",
      },
    ],
    startDate: "2025-09-01",
  },
];

