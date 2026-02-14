"use client";

import { useMemo } from "react";

export type BookData = {
  id: string;
  title: string;
  dates?: string;
  icon?: string;
  toneColor: string;
  spineWidth: number;
  isFeatured?: boolean;
};

interface DarkAcademiaBookSpineProps {
  book: BookData;
  onClick: () => void;
}

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return Math.abs(h);
}

function useSpineVariation(id: string, title: string) {
  return useMemo(() => {
    const h = hash(id);
    const rotation = ((h % 31) / 31) * 3 - 1.5;
    const baseHeight = 260;
    const heightDelta = (h % 21) - 10;
    const height = Math.max(220, Math.min(300, baseHeight + heightDelta));
    const width = Math.max(48, Math.min(78, 44 + Math.min(title.length * 2, 34)));
    return { rotation, height, width };
  }, [id, title.length]);
}

export default function DarkAcademiaBookSpine({ book, onClick }: DarkAcademiaBookSpineProps) {
  const { rotation, height, width } = useSpineVariation(book.id, book.title);

  return (
    <div
      className="da-spine-wrapper"
      style={
        {
          "--da-rotation": `${rotation}deg`,
          "--da-height": `${height}px`,
          "--da-width": `${width}px`,
          "--da-cover": book.toneColor,
        } as React.CSSProperties
      }
    >
      <button
        type="button"
        onClick={onClick}
        className="da-spine group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
        aria-label={`Open ${book.title} — Click to explore`}
      >
        <div className="da-spine-contact-shadow" aria-hidden />
        <div className="da-spine-ambient-shadow" aria-hidden />

        <div className="da-spine-cover">
          <div className="da-spine-band" aria-hidden />
          <div className="da-spine-pages" aria-hidden />
          <div className="da-spine-texture" aria-hidden />
          <div className="da-spine-ribs" aria-hidden />

          {book.icon && (
            <div className="da-spine-icon" aria-hidden>
              {book.icon}
            </div>
          )}

          <div className="da-spine-text">
            <div className="da-spine-title">{book.title}</div>
          </div>
        </div>

        <span className="da-spine-tooltip" role="tooltip">
          Click to explore
        </span>
      </button>
    </div>
  );
}
