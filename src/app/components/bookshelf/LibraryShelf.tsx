"use client";

import BookCard, { type LibraryBook } from "./BookCover";

interface LibraryShelfProps {
  books: LibraryBook[];
  onBookClick: (book: LibraryBook) => void;
}

export default function LibraryShelf({ books, onBookClick }: LibraryShelfProps) {
  return (
    <div className="library-shelf">
      {/* Wall panel behind this shelf */}
      <div className="library-shelf-wall" aria-hidden />

      {/* Books row: sit on baseline above the plank */}
      <div className="library-shelf-books">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onClick={() => onBookClick(book)}
          />
        ))}
      </div>

      {/* Wood plank: shadow cast onto wall, then plank with highlight + lip */}
      <div className="library-shelf-plank-wrap">
        <div className="library-shelf-plank-shadow" aria-hidden />
        <div className="library-shelf-plank" aria-hidden>
          <div className="library-shelf-plank-highlight" aria-hidden />
          <div className="library-shelf-plank-lip" aria-hidden />
        </div>
      </div>
    </div>
  );
}
