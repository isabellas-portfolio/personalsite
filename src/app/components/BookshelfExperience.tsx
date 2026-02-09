"use client";

import { useState, useEffect } from "react";
import { notebookPages, type NotebookPage } from "../data/notebookPages";
import LibraryShelf from "./bookshelf/LibraryShelf";
import BookModal from "./bookshelf/BookModal";
import { type LibraryBook } from "./bookshelf/BookCover";

/** Split experiences into 2–3 shelves (roughly even). */
function distributeExperiences<T>(items: T[], shelfCount: 2 | 3): T[][] {
  const n = items.length;
  if (n === 0) return [];
  const count = Math.min(shelfCount, Math.max(1, n));
  const baseSize = Math.floor(n / count);
  const remainder = n % count;
  const shelves: T[][] = [];
  let i = 0;
  for (let s = 0; s < count; s++) {
    const size = baseSize + (s < remainder ? 1 : 0);
    shelves.push(items.slice(i, i + size));
    i += size;
  }
  return shelves;
}

function pageToLibraryBook(page: NotebookPage): LibraryBook | null {
  if (!page.company && !page.label) return null;

  const colorMap: Record<string, string> = {
    "scout-labs": "#6B4E3D",
    wayfair: "#7A5A4A",
    boces: "#8B6F5F",
    litclub: "#9B7F6F",
    nusci: "#6B4E3D",
    "scout-labs-labs-director": "#7A5A4A",
    "burnes-center-genai-pm": "#8B6F5F",
  };

  const featuredIds = ["burnes-center-genai-pm", "scout-labs-labs-director"];
  const toneColor = colorMap[page.id] ?? "#6B4E3D";

  return {
    id: page.id,
    title: page.label ?? page.company ?? "",
    dates: page.dates,
    icon: page.icon,
    toneColor,
    isFeatured: featuredIds.includes(page.id),
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

  const allBooks: LibraryBook[] = notebookPages
    .map((page) => pageToLibraryBook(page))
    .filter((b): b is LibraryBook => b !== null)
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

  const shelves = distributeExperiences(sorted, 3);

  const handleBookClick = (book: LibraryBook) => {
    const experience = notebookPages.find((p) => p.id === book.id);
    if (experience) setSelectedExperience(experience);
  };

  return (
    <main className="library-section min-h-screen py-8 pb-40">
      <div className="library-container">
        <header className="mb-10 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-[#531A53] mb-2">
            My Experience
          </h1>
          <p className="text-[#8B6F6F] text-sm">Click a book to explore</p>
        </header>

        {shelves.map((books, index) => (
          <LibraryShelf
            key={index}
            books={books}
            onBookClick={handleBookClick}
          />
        ))}
      </div>

      {selectedExperience && (
        <BookModal
          experience={selectedExperience}
          isOpen
          onClose={() => setSelectedExperience(null)}
          isMobile={isMobile}
        />
      )}
    </main>
  );
}
