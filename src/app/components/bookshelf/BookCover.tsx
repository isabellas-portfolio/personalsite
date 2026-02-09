"use client";

import { useMemo } from "react";

export type LibraryBook = {
  id: string;
  title: string;
  dates?: string;
  icon?: string;
  /** Used for gradient; warm neutral or purple accent */
  toneColor: string;
  isFeatured?: boolean;
};

interface BookCardProps {
  book: LibraryBook;
  onClick: () => void;
}

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return Math.abs(h);
}

/** Deterministic rotation between -2 and +2 deg for wrapper */
function useCoverRotation(id: string): number {
  return useMemo(() => {
    const h = hash(id);
    return ((h % 41) / 41) * 4 - 2;
  }, [id]);
}

/** Gradient for front cover */
function getGradient(toneColor: string, id: string): string {
  const usePurple = hash(id + "accent") % 3 === 0;
  if (usePurple) {
    return `linear-gradient(145deg, ${toneColor} 0%, #6B3B6B 50%, #531A53 100%)`;
  }
  const light = `color-mix(in srgb, ${toneColor} 70%, white)`;
  const dark = `color-mix(in srgb, ${toneColor} 85%, black)`;
  return `linear-gradient(145deg, ${light} 0%, ${toneColor} 40%, ${dark} 100%)`;
}

/** Darker tone for spine and back */
function getSpineGradient(toneColor: string): string {
  return `linear-gradient(90deg, color-mix(in srgb, ${toneColor} 50%, black) 0%, color-mix(in srgb, ${toneColor} 70%, black) 100%)`;
}

export default function BookCard({ book, onClick }: BookCardProps) {
  const rotation = useCoverRotation(book.id);
  const gradient = getGradient(book.toneColor, book.id);
  const spineGradient = getSpineGradient(book.toneColor);

  return (
    <div
      className="book-card-outer"
      style={{ "--cover-rotation": `${rotation}deg` } as React.CSSProperties}
    >
      {/* Wrapper: perspective + contact + ambient shadows */}
      <div className="book-card-shadow-wrap">
        {/* Back-cover offset layer (behind the book) */}
        <div
          className="book-card-back"
          style={{
            background: spineGradient,
          }}
          aria-hidden
        />

        {/* The 3D book: perspective + rotateY, hover lift + rotate */}
        <button
          type="button"
          onClick={onClick}
          className="book-card-button group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#531A53] focus-visible:ring-offset-2"
          aria-label={`Open ${book.title} — Click to explore`}
        >
          {/* Front cover layer (main gradient) */}
          <div
            className="book-card-cover"
            style={{ background: gradient }}
            aria-hidden
          />

          {/* Spine layer (left): darker band + bevel highlight */}
          <div
            className="book-card-spine"
            style={{ background: spineGradient }}
            aria-hidden
          >
            <div className="book-card-spine-bevel" aria-hidden />
          </div>

          {/* Page stack layer (right): light strip + horizontal lines */}
          <div className="book-card-pages" aria-hidden />

          {/* Cloth texture overlay */}
          <div className="book-card-texture" aria-hidden />

          {/* Optional ribbon */}
          {book.isFeatured && (
            <div className="book-card-ribbon" aria-hidden>
              <span className="book-card-ribbon-pin" />
            </div>
          )}

          {/* Content */}
          <div className="book-card-content">
            {book.icon && (
              <div className="book-card-icon" aria-hidden>
                {book.icon}
              </div>
            )}
            <h3 className="book-card-title">{book.title}</h3>
            {book.dates && (
              <p className="book-card-dates">{book.dates}</p>
            )}
          </div>

          <span className="book-card-tooltip" role="tooltip">
            Click to explore
          </span>
        </button>
      </div>
    </div>
  );
}
