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
  isMobile = false,
}: BookshelfProps) {
  return (
    <div className="mx-auto max-w-[1100px] overflow-visible">
      {/* Top shelf */}
      <div className="relative mb-10">
        <div className="h-4 rounded-full bg-gradient-to-b from-[#9B7A55] to-[#6E533A] shadow-lg" />
        <div className="h-[2px] w-full bg-white/25 -mt-3 rounded-full" />
      </div>
      
      {/* Books - wrapping row, all on same baseline */}
      <div className="relative flex flex-wrap items-end justify-center gap-8 overflow-visible">
        {books.map((book) => (
          <BookSpine
            key={book.id}
            book={book}
            onClick={() => onBookClick(book)}
          />
        ))}
      </div>

      {/* Bottom shelf (the one the books sit on) */}
      <div className="relative mt-8">
        {/* shelf plank */}
        <div className="h-5 rounded-full bg-gradient-to-b from-[#9B7A55] to-[#6E533A] shadow-[0_10px_18px_rgba(0,0,0,0.18)]" />
        {/* shelf lip highlight */}
        <div className="absolute left-2 right-2 top-1 h-[2px] rounded-full bg-white/35" />

        {/* brackets (cute detail) */}
        <div className="absolute -bottom-5 left-20 h-5 w-12 rounded-b-lg bg-gradient-to-b from-[#7B5E43] to-[#5E4632] opacity-80" />
        <div className="absolute -bottom-5 right-20 h-5 w-12 rounded-b-lg bg-gradient-to-b from-[#7B5E43] to-[#5E4632] opacity-80" />
      </div>
    </div>
  );
}

