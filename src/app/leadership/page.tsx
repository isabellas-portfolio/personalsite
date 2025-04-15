"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import scoutpic from "/public/homebuyerguide (1).png";
import ivpic from "/public/saiv1.png";
import apopic from "/public/apo.png";
import choirpic from "/public/choir.png";

const leadershipRoles = [
  {
    title: "Developer + Journalist @ Scout",
    timeframe: "Sept 2024 — PRESENT",
    skills: "Collaboration, Decision Making, Communication",
    description:
      "Conducted interviews with first-time homebuyers in Boston and redesigned a website to streamline the homebuying process. Focused on accessibility and strategy.",
    image: scoutpic,
    alt: "Project Lead @ Scout",
  },
  {
    title: "Social Media Manager @ South Asian InterVarsity",
    timeframe: "Sept 2023 — PRESENT",
    skills: "Creativity, Design, Writing",
    description:
      "Grew Instagram to 100+ followers, gained 10+ new members, and curated thoughtful content that reflected faith and community.",
    image: ivpic,
    alt: "Social Media Manager @ SAIV",
  },
  {
    title: "Member @ Alpha Phi Omega",
    timeframe: "Jan 2024 — PRESENT",
    skills: "Service, Leadership, Fellowship",
    description:
      "Engaging in community service projects, leadership training, and building lasting connections through acts of service.",
    image: apopic,
    alt: "Member @ Alpha Phi Omega",
  },
  {
    title: "Member @ NU Choral Society",
    timeframe: "Sept 2023 — PRESENT",
    skills: "Music, Performance, Teamwork",
    description:
      "Performing with a university choir, collaborating with fellow vocalists, and growing as a musician and teammate.",
    image: choirpic,
    alt: "Member @ NU Choral Society",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Leadership() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="font-serif text-3xl lg:text-5xl text-my-pink font-bold text-center">
        Leadership & Involvement!
      </h1>
      <p className="font-serif text-center text-my-gray max-w-4xl mx-auto mt-5 text-base lg:text-lg">
        I'm currently honing my leadership skills through design, service, faith, and music. Whether it's guiding creative projects or helping build welcoming communities, I'm <span className="font-bold">passionate about connection, collaboration, and impact.</span>
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {leadershipRoles.map((role, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-[#fff0f5] border border-my-pink rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-bold text-my-gray font-serif">
                  {role.title}
                </h2>
                <p className="text-sm text-my-pink font-bold font-serif">
                  {role.skills}
                </p>
              </div>
              <Image
                src={role.image}
                alt={role.alt}
                className="w-[5.5rem] h-auto object-cover rounded"
              />
            </div>
            <p className="text-sm font-medium text-my-gray font-serif">
              {role.timeframe}
            </p>
            <p className="text-sm font-light text-my-gray font-serif">
              {role.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
