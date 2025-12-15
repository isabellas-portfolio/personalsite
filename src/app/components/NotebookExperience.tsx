"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SquiggleUnderline } from "./doodles/SquiggleUnderline";
import { SketchStar } from "./doodles/SketchStar";

interface StickyNote {
  title: string;
  body: string;
  color: "yellow" | "pink" | "blue";
}

interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  dates: string;
  icon: string;
  summary: string;
  bullets: string[];
  stickyNotes: StickyNote[];
}

interface NotebookExperienceProps {
  experiences: Experience[];
}

export default function NotebookExperience({ experiences }: NotebookExperienceProps) {
  const [activeExperience, setActiveExperience] = useState(0);

  const currentExp = experiences[activeExperience];

  const stickyNoteColors = {
    yellow: {
      bg: "#FFF3A3",
      border: "#E6D88F",
      rotation: "-rotate-2",
    },
    pink: {
      bg: "#FFD7E3",
      border: "#E6B8C8",
      rotation: "rotate-1",
    },
    blue: {
      bg: "#D7F2FF",
      border: "#B8D9E6",
      rotation: "-rotate-1",
    },
  };

  return (
    <main className="bg-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Tab Navigation */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {experiences.map((exp, index) => (
            <button
              key={exp.id}
              onClick={() => setActiveExperience(index)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeExperience === index
                  ? "bg-[#531A53] text-white shadow-md"
                  : "bg-white text-[#531A53] border border-[#E4D7CF] hover:bg-[#F5EDE8]"
              }`}
            >
              {exp.icon} {exp.company}
            </button>
          ))}
        </div>

        {/* Notebook Frame */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExperience}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative bg-[#FFFBF7] border border-[#E4D7CF] shadow-md rounded-lg overflow-hidden"
          >
            {/* Left Binding Strip */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-16 bg-[#E6D5CF] flex flex-col items-center pt-8 pb-4">
              {/* Hole Punches */}
              {[1, 2, 3, 4].map((hole) => (
                <div
                  key={hole}
                  className="w-3 h-3 rounded-full bg-[#D4C4B8] mb-6"
                />
              ))}
              {/* Margin Doodles */}
              <div className="mt-auto flex flex-col items-center pb-4">
                <div className="transform -rotate-90 whitespace-nowrap flex flex-col items-center gap-1">
                  <span className="font-hand text-[#4B164B] text-base tracking-tight inline-block transform rotate-3">
                    User research is the backbone
                  </span>
                  <div className="text-[#4B164B] transform rotate-3">
                    <SquiggleUnderline />
                  </div>
                  <div className="mt-4 text-[#4B164B]/70 rotate-3">
                    <SketchStar />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="md:ml-16 p-6 md:p-10">
              {/* Page Header */}
              <div className="mb-6">
                <h1 className="font-serif text-3xl md:text-4xl text-[#531A53] flex items-center gap-3 mb-2">
                  <span>{currentExp.icon}</span>
                  <span>{currentExp.company}</span>
                </h1>
                <p className="text-[#531A53] font-semibold text-lg">
                  {currentExp.role}
                  {currentExp.location && ` — ${currentExp.location}`}
                </p>
                <p className="text-[#8B6F6F] text-sm mt-1">{currentExp.dates}</p>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Torn Paper Card */}
                <div className="lg:col-span-2 relative order-2 lg:order-1">
                  {/* Tape Pieces */}
                  <div className="absolute -top-2 -left-2 w-12 h-6 bg-[#D6C4E6] opacity-80 rounded-sm transform rotate-12 z-10" />
                  <div className="absolute -top-2 -right-2 w-12 h-6 bg-[#F4D8D8] opacity-80 rounded-sm transform -rotate-12 z-10" />

                  {/* Main Card */}
                  <motion.div
                    initial={{ opacity: 0, rotate: -2 }}
                    animate={{ opacity: 1, rotate: -1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white border border-[#E0DAD3] shadow-sm p-5 md:p-6 -rotate-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <p className="text-black font-medium mb-4 text-base md:text-lg">
                      {currentExp.summary}
                    </p>
                    <ul className="list-disc list-inside text-black space-y-2 text-sm md:text-base">
                      {currentExp.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Sticky Notes Cluster */}
                <div className="lg:col-span-1 space-y-4 order-1 lg:order-2">
                  {currentExp.stickyNotes.map((note, index) => {
                    const colorStyle = stickyNoteColors[note.color];
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        style={{
                          backgroundColor: colorStyle.bg,
                          borderColor: colorStyle.border,
                        }}
                        className={`border-2 rounded-md shadow-md px-3 py-3 ${colorStyle.rotation} hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-default`}
                      >
                        <h3 className="font-bold text-sm text-[#531A53] mb-1">
                          {note.title}
                        </h3>
                        <p className="text-xs text-black leading-relaxed">
                          {note.body}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

