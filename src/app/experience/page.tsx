"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Experience() {
  // Smooth scroll for sidebar links
  useEffect(() => {
    const links = document.querySelectorAll(".sidebar-link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target as HTMLAnchorElement;
    const id = target.getAttribute("href")?.replace("#", "");
    const section = document.getElementById(id ?? "");
    section?.scrollIntoView({ behavior: "smooth" });
  });
});

  }, []);

  // Experience data
  const experiences = [
    {
      id: "scout",
      title: "Scout Labs",
      location: "Boston, MA",
      role: "UX Project Lead",
      dates: "Apr. 2024 – Present",
      icon: "🔍",
      bullets: [
        "Conducted extensive research with stakeholder and system maps.",
        "Led project lifecycle and ensured deliverables aligned with client needs.",
        "Produced a literature review for home-sharing implementation.",
      ],
      summary:
        "Leading a creative research & design team to shape home sharing in Boston.",
    },
    {
      id: "wayfair",
      title: "Wayfair",
      location: "Boston, MA",
      role: "IT Engineer Co-op",
      dates: "Jul. 2024 – Dec. 2024",
      icon: "🧠",
      bullets: [
        "Automated shipping label creation, improving efficiency by 50%.",
        "Managed laptop setups for remote and in-person onboarding.",
        "Led onboarding sessions for over 100 new hires weekly.",
      ],
      summary: "Optimizing tech workflows and onboarding at scale.",
    },
    {
      id: "litclub",
      title: "Literature Club",
      location: "Melville, NY",
      role: "Founder | Web Dev | Socials",
      dates: "Jun. 2020 – Jan. 2022",
      icon: "📚",
      bullets: [
        "Raised over $1K to donate 300+ children’s books.",
        "Designed an interactive website and led social media.",
        "Organized meetings that blended creativity and service.",
      ],
      summary: "Spreading literacy and joy through community-driven impact.",
    },
    {
      id: "boces",
      title: "Nassau BOCES",
      location: "Westbury, NY",
      role: "Information Technologist Intern",
      dates: "Jun. 2022 – Aug. 2023",
      icon: "💻",
      bullets: [
        "Installed over 700 printers and computers remotely.",
        "Used Excel to manage wireless access point inventories.",
      ],
      summary: "Bringing tech solutions to school districts on Long Island.",
    },
    {
      id: "nusci",
      title: "NU Science Magazine",
      location: "Boston, MA",
      role: "Website Developer",
      dates: "Sept. 2023 – Present",
      icon: "🧬",
      bullets: [
        "Revamped the site using HTML, CSS, and JavaScript.",
        "Boosted site performance and UX with clean visuals.",
      ],
      summary: "Modernizing digital publishing with clean code and design.",
    },
    {
      id: "portfolio",
      title: "Personal Portfolio Website",
      location: "",
      role: "Designer & Dev",
      dates: "Jan. 2023 – Apr. 2023",
      icon: "🌐",
      bullets: [
        "Built from scratch using HTML and CSS.",
        "Designed a navigable showcase for projects and writing.",
      ],
      summary: "My digital playground — bright, personal, and professional.",
    },
    {
      id: "saiv",
      title: "South Asian InterVarsity",
      location: "Boston, MA",
      role: "Community Group Leader",
      dates: "Aug. 2024 – Present",
      icon: "🌸",
      bullets: [
        "Lead Bible studies that intersect culture, identity, and faith.",
        "Host community events like worship nights and chai chats.",
      ],
      summary: "Fostering space for South Asian students to grow in faith.",
    },
  ];

  // Framer Motion animation variants
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="font-serif bg-white text-black flex flex-col lg:flex-row px-6 lg:px-24 py-12">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:block sticky top-24 w-1/4 pr-8">
        <nav className="flex flex-col gap-3 border-l-2 border-anjana pl-4">
          <p className="mb-3 text-black font-bold text-xl">🔗 Navigate:</p>
          {experiences.map((exp) => (
            <a
              key={exp.id}
              href={`#${exp.id}`}
              className="sidebar-link text-anjana hover:text-black hover:translate-x-1 transition-all duration-150 text-sm font-semibold"
            >
              {exp.icon} {exp.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Experience Cards with staggered animation */}
      <motion.section
        className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            id={exp.id}
            variants={cardVariants}
            className="max-w-[500px] bg-[#fff0f5] rounded-xl border border-anjana p-4 sm:p-5 shadow-sm hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl lg:text-2xl font-bold text-black">
              {exp.icon} {exp.title}
            </h2>
            <p className="text-sm font-medium text-black">{exp.location}</p>
            <p className="text-anjana font-semibold text-sm">{exp.role}</p>
            <p className="text-sm mb-2">{exp.dates}</p>
            <p className="text-sm font-light mb-3">{exp.summary}</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              {exp.bullets.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
