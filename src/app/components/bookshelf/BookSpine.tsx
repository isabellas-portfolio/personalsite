"use client";
import { motion } from "framer-motion";

export type BookData = {
  id: string;
  title: string;
  dates?: string;
  icon?: string;
  toneColor: string;
  spineWidth: number; // 52-84
  isFeatured?: boolean;
};

interface BookSpineProps {
  book: BookData;
  onClick: () => void;
}

export default function BookSpine({ book, onClick }: BookSpineProps) {
  const featured = book.isFeatured || false;
  // Random rotation for ribbon (14deg or 16deg)
  const ribbonRotation = book.id?.charCodeAt(0) % 2 === 0 ? "14deg" : "16deg";
  
  const base = "relative cursor-pointer rounded-lg transition-all duration-300 hover:-translate-y-1";
  const normal = "bg-gradient-to-b from-[#B8A092] to-[#8D7667] border border-black/15 shadow-[0_10px_18px_rgba(0,0,0,0.18)]";
  const featuredStyle = "bg-gradient-to-b from-[#D7C1B3] to-[#9B7B58] border border-black/15 ring-2 ring-[#E7C97A]/70 shadow-[0_18px_30px_rgba(0,0,0,0.22)] translate-y-[-2px]";

  return (
    <motion.button
      onClick={onClick}
      className="group focus:outline-none focus:ring-2 focus:ring-[#531A53] focus:ring-offset-2 relative mb-[-6px] overflow-visible"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        width: 110,
        height: featured ? 320 : 280,
      }}
    >
      <div className={`${base} ${featured ? featuredStyle : normal} w-full h-full rounded-lg overflow-visible relative`}>
        {/* Featured bestseller ribbon - slanted and pinned to top-right */}
        {featured && (
          <div 
            className="absolute -top-3 -right-6 z-30 pointer-events-none"
            style={{ transform: `rotate(${ribbonRotation})` }}
          >
            <div className="relative bg-[#531A53] text-white text-[10px] font-bold tracking-widest px-8 py-1 shadow-[0_10px_18px_rgba(0,0,0,0.25)]">
              BEST SELLER

              {/* pin head + shadow */}
              <span className="absolute -left-2 -top-2 h-3 w-3 rounded-full bg-[#F7EFE5] shadow" />
              <span className="absolute -left-[6px] -top-[6px] h-[6px] w-[6px] rounded-full bg-[#D9C7BE]" />

              {/* little fold */}
              <span className="absolute right-0 top-full w-0 h-0 border-l-[10px] border-l-[#3E113E] border-t-[10px] border-t-transparent" />
            </div>
          </div>
        )}

        {/* Inner container for overflow-hidden content */}
        <div className="absolute inset-0 rounded-lg overflow-hidden">

          {/* Top page edge strip */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-black/20" />
          
          {/* Spine edge highlight */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/30" />
          
          {/* Right edge shadow */}
          <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-black/15" />

          {/* Icon in top corner */}
          {book.icon && (
            <div className="absolute top-3 right-3 text-lg opacity-70">
              {book.icon}
            </div>
          )}

          {/* Vertical text - reads top to bottom like real spine */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">
            <div className="[writing-mode:vertical-rl] rotate-180">
              <div className="text-white font-serif font-semibold text-xl tracking-wide">
                {book.title}
              </div>
              {book.dates && (
                <div className="text-white/70 text-sm mt-3">
                  {book.dates}
                </div>
              )}
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors rounded-lg" />
        </div>
      </div>
    </motion.button>
  );
}

