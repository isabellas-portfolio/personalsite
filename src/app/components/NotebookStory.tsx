"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { notebookPages, type NotebookPage } from "../data/notebookPages";
import { SquiggleUnderline } from "./doodles/SquiggleUnderline";
import { SketchStar } from "./doodles/SketchStar";
import { PageArrow } from "./doodles/PageArrow";
import CoverPageContent from "./CoverPageContent";

export default function NotebookStory() {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Derive ordered pages: cover first, then sorted by startDate
  const coverPage = notebookPages.find((p) => p.isCover);
  const experiencePages = notebookPages.filter((p) => !p.isCover);

  const sortedExperiencePages = [...experiencePages].sort((a, b) => {
    if (!a.startDate || !b.startDate) return 0;
    return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
  });

  const orderedPages = coverPage
    ? [coverPage, ...sortedExperiencePages]
    : sortedExperiencePages;

  const currentPage = orderedPages[pageIndex];
  const isCover = currentPage.isCover ?? false;

  const goToNext = () => {
    setDirection(1);
    setPageIndex((prev) => (prev + 1) % orderedPages.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setPageIndex((prev) => (prev - 1 + orderedPages.length) % orderedPages.length);
  };

  const goToPage = (index: number) => {
    if (index === pageIndex) return;
    const dir = index > pageIndex ? 1 : -1;
    setDirection(dir);
    setPageIndex(index);
  };

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

  const maxRotation = isMobile ? 45 : 90;

  const pageVariants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? maxRotation : -maxRotation,
      x: direction > 0 ? 40 : -40,
      opacity: 0,
      boxShadow: "0 0 0 rgba(15, 23, 42, 0.0)",
    }),
    center: {
      rotateY: 0,
      x: 0,
      opacity: 1,
      boxShadow: "0 18px 30px rgba(15, 23, 42, 0.18)",
      transition: {
        duration: 0.55,
        ease: [0.33, 1.0, 0.68, 1.0],
      },
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -maxRotation : maxRotation,
      x: direction > 0 ? -40 : 40,
      opacity: 0,
      boxShadow: "0 0 0 rgba(15, 23, 42, 0.0)",
      transition: {
        duration: 0.45,
        ease: [0.4, 0.0, 0.6, 1.0],
      },
    }),
  };

  return (
    <main className="min-h-screen bg-[#F7F3EE] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl md:max-w-2xl">
        {/* Story Header */}
        <div className="mb-6 text-center">
          <p className="font-hand text-[#4B164B] text-sm">
            {isCover
              ? "Cover — My journey"
              : `Page ${pageIndex} of ${orderedPages.length - 1} — ${currentPage.company || currentPage.label}`}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {orderedPages
            .filter((p) => !p.isCover)
            .map((page) => {
              const pageIndexForThisTab = orderedPages.findIndex((p) => p.id === page.id);
              return (
                <button
                  key={page.id}
                  onClick={() => goToPage(pageIndexForThisTab)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    pageIndex === pageIndexForThisTab
                      ? "bg-[#531A53] text-white shadow-md"
                      : "bg-white text-[#531A53] border border-[#E4D7CF] hover:bg-[#F5EDE8]"
                  }`}
                >
                  {page.icon} {page.label || page.company}
                </button>
              );
            })}
        </div>

        {/* Hardcover Book Card */}
        <div className="relative w-full max-w-3xl md:max-w-2xl md:aspect-[3/4] rounded-[28px] bg-gradient-to-br from-[#CBB3A5] via-[#DCC9BC] to-[#C2AA9C] shadow-[0_18px_45px_rgba(0,0,0,0.25)] border border-black/15 overflow-hidden">
          <div className="flex h-full">
            {/* Spine */}
            <div className="relative w-16 md:w-20 bg-gradient-to-b from-[#B9A192] to-[#A38776] border-r border-black/15 flex flex-col justify-between items-center py-8 flex-shrink-0">
              {/* Top: Hole Punches */}
              <div className="flex flex-col gap-4 items-center">
                {[1, 2, 3, 4].map((hole) => (
                  <div
                    key={hole}
                    className="w-3 h-3 rounded-full bg-[#D4C4B8]"
                  />
                ))}
              </div>

              {/* Bottom: Doodle Group */}
              <div className="flex flex-col items-center gap-2 pb-4">
                <p className="font-hand text-base text-[#4B164B] [writing-mode:vertical-rl] whitespace-nowrap">
                  user research is the backbone
                </p>
                <SquiggleUnderline className="text-[#4B164B]/70 h-4" />
                <SketchStar className="text-[#4B164B]/70 w-4 h-4" />
              </div>
            </div>

            {/* Optional: Subtle Page Edge */}
            <div className="w-4 bg-[repeating-linear-gradient(to-bottom,#F7EFE5_0,#F7EFE5_3px,#E4D6CA_3px,#E4D6CA_6px)] border-r border-white/60" />

            {/* Inner Page */}
            <div className="relative flex-1 bg-[#FFF9F3] rounded-r-[24px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] overflow-hidden p-6 md:p-8">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={currentPage.id}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{
                    transformOrigin: direction > 0 ? "left center" : "right center",
                    transformStyle: "preserve-3d",
                  }}
                  className="h-full"
                >
                  {isCover ? (
                    <CoverPageContent />
                  ) : (
                    <ExperiencePageContent
                      page={currentPage}
                      stickyNoteColors={stickyNoteColors}
                    />
                  )}

                  {/* Page Turn Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <button
                      onClick={goToPrev}
                      aria-label={isCover ? "Go to last page" : "Previous experience"}
                      className="flex items-center gap-1 text-xs text-slate-600/80 hover:text-slate-900 hover:translate-x-[-2px] transition-transform z-20"
                    >
                      <PageArrow direction="left" />
                      <span className="font-hand">
                        {isCover ? "back" : "prev"}
                      </span>
                    </button>
                    <button
                      onClick={goToNext}
                      aria-label={
                        pageIndex === orderedPages.length - 1
                          ? "Go to cover"
                          : "Next experience"
                      }
                      className="flex items-center gap-1 text-xs text-slate-600/80 hover:text-slate-900 hover:translate-x-[2px] transition-transform z-20"
                    >
                      <span className="font-hand">
                        {pageIndex === orderedPages.length - 1
                          ? "close"
                          : isCover
                          ? "open"
                          : "next"}
                      </span>
                      <PageArrow direction="right" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Experience Page Content Component
function ExperiencePageContent({
  page,
  stickyNoteColors,
}: {
  page: NotebookPage;
  stickyNoteColors: any;
}) {
  if (!page.company || !page.role || !page.bullets || !page.stickyNotes) {
    return null;
  }

  return (
    <>
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="font-serif text-3xl md:text-4xl text-[#531A53] flex items-center gap-3 mb-2">
          {page.icon && <span>{page.icon}</span>}
          <span>{page.company}</span>
        </h1>
        <p className="text-[#531A53] font-semibold text-lg">
          {page.role}
          {page.location && ` — ${page.location}`}
        </p>
        {page.dates && (
          <p className="text-[#8B6F6F] text-sm mt-1">{page.dates}</p>
        )}
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
            {page.summary && (
              <p className="text-black font-medium mb-4 text-base md:text-lg">
                {page.summary}
              </p>
            )}
            <ul className="list-disc list-inside text-black space-y-2 text-sm md:text-base">
              {page.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Sticky Notes Cluster */}
        <div className="lg:col-span-1 space-y-4 order-1 lg:order-2">
          {page.stickyNotes.map((note, index) => {
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
    </>
  );
}
