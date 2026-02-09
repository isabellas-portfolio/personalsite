"use client";

import BookSpine, { type BookData } from "./BookSpine";

interface BookshelfProps {
  books: BookData[];
  onBookClick: (book: BookData) => void;
  isMobile?: boolean;
}

export default function Bookshelf({
  books,
  onBookClick,
}: BookshelfProps) {
  return (
    <div className="bookshelf-container">
      {/* Back panel / wallpaper behind books */}
      <div className="bookshelf-back" aria-hidden>
        <div className="bookshelf-back-pattern" />
      </div>

      {/* Top shelf (visual only - shadow) */}
      <div className="bookshelf-top-shadow" aria-hidden />

      {/* Books row - same baseline */}
      <div className="bookshelf-books">
        {books.map((book) => (
          <BookSpine
            key={book.id}
            book={book}
            onClick={() => onBookClick(book)}
          />
        ))}
      </div>

      {/* Bottom shelf: the actual plank books sit on */}
      <div className="bookshelf-bottom">
        <div className="bookshelf-plank" aria-hidden>
          <div className="bookshelf-plank-noise" />
          <div className="bookshelf-plank-lip" aria-hidden />
        </div>
      </div>
    </div>
  );
}
