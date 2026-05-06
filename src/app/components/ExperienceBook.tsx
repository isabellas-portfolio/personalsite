"use client";

import { useEffect, useMemo, useState } from "react";
import DarkAcademiaShelf from "./bookshelf/DarkAcademiaShelf";
import type { BookData } from "./bookshelf/DarkAcademiaBookSpine";
import { notebookPages, type NotebookPage } from "../data/notebookPages";

type ExperienceItem = {
  id: string;
  icon: string;
  title: string;
  role: string;
  dates: string;
  location: string;
  description: string;
  highlights: string[];
  impact: {
    problem: string;
    built: string;
    outcome: string;
  };
  note: string;
};

function toBookData(page: NotebookPage): BookData | null {
  if (page.isCover || !page.id) return null;
  const title = page.company ?? page.label ?? "Experience";
  const toneMap: Record<string, string> = {
    "scout-labs": "#4A3728",
    wayfair: "#5C4033",
    boces: "#3D2E24",
    litclub: "#5C4A3D",
    nusci: "#4A3728",
    "scout-labs-labs-director": "#5C4033",
    "burnes-center-genai-pm": "#3D2E24",
  };
  return {
    id: page.id,
    title,
    dates: page.dates,
    icon: page.icon,
    toneColor: toneMap[page.id] ?? "#4A3728",
    spineWidth: Math.max(48, Math.min(78, 44 + Math.min(title.length * 2, 34))),
  };
}

function toExperienceItem(page: NotebookPage): ExperienceItem {
  const notes = page.stickyNotes ?? [];
  const pick = (rx: RegExp, fallback: string) =>
    notes.find((n) => rx.test(n.title))?.body ?? fallback;

  const base: ExperienceItem = {
    id: page.id,
    icon: page.icon ?? "✦",
    title: page.company ?? page.label ?? "Experience",
    role: page.role ?? "Contributor",
    dates: page.dates ?? "Dates unavailable",
    location: page.location ?? "Location unavailable",
    description:
      page.summary ??
      "Worked on cross-functional initiatives blending product thinking, design, and execution.",
    highlights: page.bullets ?? [],
    impact: {
      problem: pick(
        /problem|pain|challenge|theme|scope/i,
        notes[0]?.body ?? "The process had fragmented information and unclear pathways."
      ),
      built: pick(
        /built|role|tools|stack|focus|leadership/i,
        notes[1]?.body ?? "Built practical systems and workflows to make outcomes clearer."
      ),
      outcome: pick(
        /impact|result|mission|wins|scale/i,
        notes[2]?.body ?? "Improved clarity, collaboration, and user-facing outcomes."
      ),
    },
    note: notes[0]?.body ?? "one of my favorite chapters so far",
  };

  if (page.id === "litclub") {
    return {
      ...base,
      icon: "📚",
      title: "Literature Club",
      role: "Founder · Web Dev · Socials",
      dates: "Jun. 2020 — Jan. 2022",
      location: "Melville, NY",
      description:
        "Created a community-centered book club that combined literacy, creativity, and service.",
      highlights: [
        "Raised $1K+ to donate 300+ children’s books.",
        "Designed an interactive website and led social media.",
        "Organized meetings that blended creativity and service.",
      ],
      impact: {
        problem: "Access to books and literacy-centered programming was limited.",
        built: "A student-led club, website, donation campaign, and community events.",
        outcome: "300+ books donated and a creative community built around reading.",
      },
      note: "my first self-starter project — still has my heart",
    };
  }

  if (page.id === "burnes-center-genai-pm") {
    return {
      ...base,
      icon: "🤖",
      title: "Burnes Center & City of Boston",
      role: "Generative AI Product Developer",
      dates: "Sept. 2025 — Dec. 2025",
      location: "Boston, MA",
      description:
        "Built Green Tape, a generative-AI feedback platform helping Boston simplify permits and respond to residents more effectively.",
      highlights: [
        "Led discovery with 15+ city staff, small business owners, and residents.",
        "Designed a resident feedback form and staff dashboard.",
        "Implemented AI classification for category, sentiment, and urgency.",
        "Defined success metrics and a pilot roadmap with city partners.",
      ],
      impact: {
        problem:
          "Permit feedback was scattered across 311, email, and web forms, making it hard to act on.",
        built:
          "An AI-assisted intake and dashboard system for grouping feedback into actionable themes.",
        outcome:
          "Helped agencies see where rules, communication, and processes need to change.",
      },
      note: "solidified my love for PM, civic tech, and building useful AI",
    };
  }

  return base;
}

export default function ExperienceBook() {
  const experiences = useMemo(() => {
    const pages = notebookPages
      .filter((p) => !p.isCover)
      .sort((a, b) => {
        if (!a.startDate || !b.startDate) return 0;
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
      });
    return pages.map(toExperienceItem);
  }, []);

  const books = useMemo(
    () =>
      notebookPages
        .filter((p) => !p.isCover)
        .sort((a, b) => {
          if (!a.startDate || !b.startDate) return 0;
          return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
        })
        .map(toBookData)
        .filter((b): b is BookData => b !== null),
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex === null ? null : experiences[openIndex];

  const openBook = (book: BookData) => {
    const idx = experiences.findIndex((item) => item.id === book.id);
    if (idx >= 0) setOpenIndex(idx);
  };

  const closeBook = () => setOpenIndex(null);
  const next = () =>
    setOpenIndex((prev) => (prev === null ? 0 : (prev + 1) % experiences.length));
  const prev = () =>
    setOpenIndex((prev) =>
      prev === null ? 0 : (prev - 1 + experiences.length) % experiences.length
    );

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBook();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex, experiences.length]);

  return (
    <section className="min-h-screen bg-white px-4 py-12 md:py-20 text-[#2f2230]">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <p className="mb-2 text-xs uppercase tracking-[0.34em] text-[#c6a76d]">
            Portfolio Archive
          </p>
          <h2 className="font-serif text-4xl text-anjana md:text-6xl">My Experience</h2>
          <p className="mt-3 text-sm text-anjana">Select a book to open the spread</p>
        </header>

        <DarkAcademiaShelf books={books} onBookClick={openBook} />
      </div>

      {active && openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeBook();
          }}
        >
          <div className="absolute inset-0 bg-black/45 backdrop-blur-[1.5px]" />

          <div className="relative w-full max-w-6xl">
            <button
              type="button"
              onClick={closeBook}
              className="absolute right-1 top-[-2.5rem] rounded-md px-2 py-1 text-sm font-semibold text-white/90 hover:text-white"
            >
              back to shelf ✕
            </button>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8c7b8] bg-[#fbf4ea] text-2xl shadow-lg transition hover:scale-105 md:flex"
              aria-label="Previous experience"
              type="button"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8c7b8] bg-[#fbf4ea] text-2xl shadow-lg transition hover:scale-105 md:flex"
              aria-label="Next experience"
              type="button"
            >
              ›
            </button>

            <div className="rounded-[2rem] bg-[#c3ae9f] p-4 shadow-2xl md:p-6">
              <div className="relative grid h-[78vh] max-h-[700px] min-h-[560px] overflow-hidden rounded-[1.5rem] bg-[#fbf4ea] md:grid-cols-2">
                <div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(#8a6f5f_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
                <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-16 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d9cfc3] to-transparent opacity-70 md:block" />

                <article className="relative h-full overflow-y-auto px-7 py-10 md:px-14 md:py-12">
                  <div className="mb-6 flex items-start gap-4">
                    <span className="text-3xl">{active.icon}</span>
                    <div>
                      <h3 className="font-serif text-3xl leading-tight text-[#4a174d] md:text-5xl">
                        {active.title}
                      </h3>
                      <p className="mt-3 font-semibold text-[#744875]">{active.role}</p>
                      <p className="mt-1 text-sm text-[#8b756f]">
                        {active.dates} · {active.location}
                      </p>
                    </div>
                  </div>

                  <p className="max-w-xl text-base leading-7 text-[#302632] md:text-lg md:leading-8">
                    {active.description}
                  </p>

                  <div className="mt-8">
                    <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#5a1f5f]">
                      Highlights
                    </h4>
                    <ul className="space-y-2.5 text-sm leading-7 md:text-base">
                      {active.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span className="text-[#b28a45]">✦</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>

                <aside className="relative h-full overflow-y-auto border-t border-[#e2d5c6] px-7 py-10 md:border-l md:border-t-0 md:px-14 md:py-12">
                  <p className="mb-6 font-serif text-2xl font-bold text-[#4a174d]">Impact</p>
                  <div className="rounded-2xl border border-[#dfd0c3] bg-[#fff9f1]/85 p-6 shadow-sm md:p-7">
                    <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-[#8a5a89]">
                      Structured Summary
                    </h4>
                    <div className="space-y-5 text-sm leading-7 md:text-base">
                      <div>
                        <p className="font-semibold text-[#4a174d]">Problem</p>
                        <p>{active.impact.problem}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#4a174d]">What I Built</p>
                        <p>{active.impact.built}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-[#4a174d]">Outcome</p>
                        <p>{active.impact.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 self-end rotate-[-6deg] border-b-2 border-[#b895ad] pb-2 text-right font-hand text-2xl italic leading-6 text-[#8a5a89] opacity-80">
                    {active.note}
                  </div>
                </aside>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-3 md:hidden">
              <button
                onClick={prev}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c7b8] bg-[#fbf4ea] text-xl text-[#4a174d]"
                aria-label="Previous experience"
                type="button"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8c7b8] bg-[#fbf4ea] text-xl text-[#4a174d]"
                aria-label="Next experience"
                type="button"
              >
                ›
              </button>
            </div>

            <p className="mt-5 text-center text-sm tracking-[0.2em] text-[#c6a76d]">
              {openIndex + 1} / {experiences.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
