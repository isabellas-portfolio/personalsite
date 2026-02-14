"use client";

import { useState, useEffect } from "react";
import { notebookPages, type NotebookPage } from "../data/notebookPages";
import DarkAcademiaShelf from "./bookshelf/DarkAcademiaShelf";
import BookModal from "./bookshelf/BookModal";
import type { BookData } from "./bookshelf/DarkAcademiaBookSpine";

function pageToBookData(page: NotebookPage): BookData | null {
  if (!page.company && !page.label) return null;

  const colorMap: Record<string, string> = {
    "scout-labs": "#4A3728",
    wayfair: "#5C4033",
    boces: "#3D2E24",
    litclub: "#5C4A3D",
    nusci: "#4A3728",
    "scout-labs-labs-director": "#5C4033",
    "burnes-center-genai-pm": "#3D2E24",
  };

  const title = page.label ?? page.company ?? "";
  const spineWidth = Math.max(48, Math.min(78, 44 + Math.min(title.length * 2, 34)));
  const toneColor = colorMap[page.id] ?? "#4A3728";

  return {
    id: page.id,
    title,
    dates: page.dates,
    icon: page.icon,
    toneColor,
    spineWidth,
    isFeatured: ["burnes-center-genai-pm", "scout-labs-labs-director"].includes(page.id),
  };
}

export default function BookshelfExperience() {
  const [selectedExperience, setSelectedExperience] = useState<NotebookPage | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedExperience(null);
    };
    if (selectedExperience) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedExperience]);

  const allBooks: BookData[] = notebookPages
    .map((page) => pageToBookData(page))
    .filter((b): b is BookData => b !== null)
    .filter((book) => {
      const page = notebookPages.find((p) => p.id === book.id);
      return page != null && !page.isCover && page.startDate;
    });

  const sorted = [...allBooks].sort((a, b) => {
    const pageA = notebookPages.find((p) => p.id === a.id);
    const pageB = notebookPages.find((p) => p.id === b.id);
    if (!pageA?.startDate || !pageB?.startDate) return 0;
    return new Date(pageA.startDate).getTime() - new Date(pageB.startDate).getTime();
  });

  const handleBookClick = (book: BookData) => {
    const experience = notebookPages.find((p) => p.id === book.id);
    if (experience) setSelectedExperience(experience);
  };

  // Same order as shelf (by start date) for prev/next paging
  const experienceList = sorted
    .map((book) => notebookPages.find((p) => p.id === book.id))
    .filter((p): p is NotebookPage => p != null);
  const currentIndex = selectedExperience
    ? experienceList.findIndex((p) => p.id === selectedExperience.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) setSelectedExperience(experienceList[currentIndex - 1]);
  };
  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < experienceList.length - 1)
      setSelectedExperience(experienceList[currentIndex + 1]);
  };

  return (
    <main className="da-section min-h-screen py-8 pb-40">
      <div className="da-container">
        <header className="da-header">
          <h1 className="da-title">My Experience</h1>
          <p className="da-subtitle">Click a book to explore</p>
        </header>

        <DarkAcademiaShelf books={sorted} onBookClick={handleBookClick} />
      </div>

      {selectedExperience && (
        <BookModal
          experience={selectedExperience}
          isOpen
          onClose={() => setSelectedExperience(null)}
          isMobile={isMobile}
          allExperiences={experienceList}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </main>
  );
}
