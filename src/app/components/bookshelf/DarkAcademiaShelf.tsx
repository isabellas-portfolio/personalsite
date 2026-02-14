"use client";

import DarkAcademiaBookSpine, { type BookData } from "./DarkAcademiaBookSpine";

interface DarkAcademiaShelfProps {
  books: BookData[];
  onBookClick: (book: BookData) => void;
}

export default function DarkAcademiaShelf({ books, onBookClick }: DarkAcademiaShelfProps) {
  return (
    <div className="da-shelf">
      <div className="da-shelf-backboard" aria-hidden>
        <div className="da-shelf-vignette" aria-hidden />
      </div>

      <div className="da-shelf-books-row">
        <div className="da-shelf-flower" aria-hidden>
          <svg viewBox="0 0 48 64" fill="none" className="da-flower-svg">
            <path d="M24 8v48" stroke="#5C4033" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="24" cy="12" rx="10" ry="6" fill="#3D5C2E" opacity="0.9" />
            <ellipse cx="20" cy="10" rx="4" ry="5" fill="#4A7C3B" />
            <ellipse cx="28" cy="10" rx="4" ry="5" fill="#4A7C3B" />
            <circle cx="24" cy="8" r="3" fill="#5A9C45" />
            <path d="M12 56 Q24 52 36 56" stroke="#5C4033" strokeWidth="1.5" fill="none" />
            <rect x="18" y="52" width="12" height="12" rx="2" fill="#6B5344" />
            <rect x="20" y="54" width="8" height="8" rx="1" fill="#8B7355" />
          </svg>
        </div>

        {books.map((book) => (
          <DarkAcademiaBookSpine
            key={book.id}
            book={book}
            onClick={() => onBookClick(book)}
          />
        ))}

        <div className="da-shelf-prop da-shelf-candle" aria-hidden>
          <div className="da-candle-base" />
          <div className="da-candle-body" />
          <div className="da-candle-flame" />
        </div>
      </div>

      <div className="da-shelf-plank-wrap">
        <div className="da-shelf-plank-shadow" aria-hidden />
        <div className="da-shelf-plank" aria-hidden>
          <div className="da-shelf-plank-grain" aria-hidden />
          <div className="da-shelf-plank-lip" aria-hidden />
        </div>
      </div>
    </div>
  );
}
