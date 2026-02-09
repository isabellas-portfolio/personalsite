"use client";

import { useMemo } from "react";

export type BookData = {
  id: string;
  title: string;
  dates?: string;
  icon?: string;
  toneColor: string;
  spineWidth: number; // 52-84
  isFeatured?: boolean;
  /** Optional: show a bookmark ribbon or label sticker */
  showRibbon?: boolean;
};

interface BookSpineProps {
  book: BookData;
  onClick: () => void;
}

// Deterministic "random" from string id for rotation, height, etc.
function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return Math.abs(h);
}

function useBookVariation(id: string) {
  return useMemo(() => {
    const h = hash(id);
    // Rotation +/- 1.5deg
    const rotation = ((h % 31) / 31) * 3 - 1.5;
    // Height variation: base 260, range ~230–290
    const heightVariation = 260 + (h % 61) - 30;
    return { rotation, height: Math.max(200, Math.min(320, heightVariation)) };
  }, [id]);
}

export default function BookSpine({ book, onClick }: BookSpineProps) {
  const { rotation, height } = useBookVariation(book.id);
  const showRibbon = book.showRibbon ?? book.isFeatured ?? false;
  const ribbonRotation = (hash(book.id + "r") % 5) - 2 + 14; // ~12–16deg

  return (
    <div
      className="book-spine-wrapper"
      style={
        {
          "--spine-rotation": `${rotation}deg`,
          "--spine-height": `${height}px`,
          "--spine-width": `${book.spineWidth}px`,
          "--spine-color": book.toneColor,
          "--ribbon-rotation": `${ribbonRotation}deg`,
        } as React.CSSProperties
      }
    >
      <button
        type="button"
        onClick={onClick}
        className="book-spine group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#531A53] focus-visible:ring-offset-2 rounded-[6px] overflow-visible border-0 cursor-pointer"
        aria-label={`Open ${book.title} — Click to explore`}
      >
        {/* Cast shadow onto shelf (behind the book) */}
        <div
          className="book-spine-shadow"
          aria-hidden
        />

        {/* Spine face with 3D-ish effect */}
        <div className="book-spine-face">
          {/* Cloth/paper texture overlay */}
          <div className="book-spine-texture" aria-hidden />

          {/* Left edge highlight (cover edge) */}
          <div className="book-spine-edge-highlight" aria-hidden />

          {/* Right: narrow page edge strip (lighter) */}
          <div className="book-spine-page-edge" aria-hidden />

          {/* Icon - small, top area */}
          {book.icon && (
            <div className="book-spine-icon" aria-hidden>
              {book.icon}
            </div>
          )}

          {/* Vertical spine text */}
          <div className="book-spine-text">
            <div className="book-spine-title">{book.title}</div>
            {book.dates && (
              <div className="book-spine-dates">{book.dates}</div>
            )}
            <div className="book-spine-author">Isabella Iype</div>
          </div>
        </div>

        {/* Bookmark ribbon (outside face so not clipped) */}
        {showRibbon && (
          <div
            className="book-spine-ribbon"
            style={{ transform: `rotate(${ribbonRotation}deg)` }}
            aria-hidden
          >
            <span className="book-spine-ribbon-pin" />
            <span className="sr-only">Featured</span>
          </div>
        )}

        {/* Tooltip on hover */}
        <span className="book-spine-tooltip" role="tooltip">
          Click to explore
        </span>
      </button>
    </div>
  );
}
