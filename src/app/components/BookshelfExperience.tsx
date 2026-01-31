"use client";
import { useState, useEffect } from "react";
import { notebookPages, type NotebookPage } from "../data/notebookPages";
import Bookshelf from "./bookshelf/Bookshelf";
import BookModal from "./bookshelf/BookModal";
import { type BookData } from "./bookshelf/BookSpine";

// Transform NotebookPage to BookData with consistent sizing
function transformToBookData(page: NotebookPage): BookData | null {
  if (!page.company && !page.label) return null;

  // Generate consistent tone color based on id
  const colorMap: Record<string, string> = {
    "scout-labs": "#6B4E3D",
    "wayfair": "#7A5A4A",
    "boces": "#8B6F5F",
    "litclub": "#9B7F6F",
    "nusci": "#6B4E3D",
    "scout-labs-labs-director": "#7A5A4A",
    "burnes-center-genai-pm": "#8B6F5F",
  };

  // Get base color or generate from id
  let toneColor = colorMap[page.id] || "#6B4E3D";
  
  // Generate consistent spine width based on id hash (52-84 range)
  const idHash = page.id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const spineWidth = 52 + (idHash % 33); // 52-84 range

  return {
    id: page.id,
    title: page.label || page.company || "",
    dates: page.dates,
    icon: page.icon,
    toneColor,
    spineWidth,
  };
}

export default function BookshelfExperience() {
  const [selectedExperience, setSelectedExperience] = useState<NotebookPage | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedExperience(null);
      }
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

  // Transform and filter data
  const featuredIds = ["burnes-center-genai-pm", "scout-labs-labs-director"];
  
  const allBooks = notebookPages
    .map((page) => {
      const book = transformToBookData(page);
      if (!book) return null;
      // Mark as featured
      book.isFeatured = featuredIds.includes(book.id);
      return book;
    })
    .filter((book): book is BookData => book !== null)
    .filter((book) => {
      const page = notebookPages.find((p) => p.id === book.id);
      return page && !page.isCover && page.startDate;
    });

  // Combine all books and sort by startDate
  const allBooksSorted = [...allBooks].sort((a, b) => {
    const pageA = notebookPages.find((p) => p.id === a.id);
    const pageB = notebookPages.find((p) => p.id === b.id);
    if (!pageA?.startDate || !pageB?.startDate) return 0;
    return new Date(pageA.startDate).getTime() - new Date(pageB.startDate).getTime();
  });

  const handleBookClick = (book: BookData) => {
    const experience = notebookPages.find((p) => p.id === book.id);
    if (experience) {
      setSelectedExperience(experience);
    }
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <main className="bg-white min-h-screen py-8 pb-32">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl text-[#531A53] mb-2">
            My Experience
          </h1>
          <p className="text-[#8B6F6F] text-sm">Click a book to explore</p>
        </div>

        {/* Single Shelf with All Books */}
        <Bookshelf
          books={allBooksSorted}
          onBookClick={handleBookClick}
          isMobile={isMobile}
        />
      </div>

      {/* Modal */}
      {selectedExperience && (
        <BookModal
          experience={selectedExperience}
          isOpen={!!selectedExperience}
          onClose={closeModal}
          isMobile={isMobile}
        />
      )}
    </main>
  );
}
