"use client";

import React, { useEffect } from "react";

type Props = {
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
};

export default function BookPager({ index, total, onPrev, onNext, className }: Props) {
  const hasPrev = index > 0;
  const hasNext = index < total - 1;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName?.toLowerCase();
      const isTyping =
        tag === "input" || tag === "textarea" || (target as HTMLElement & { isContentEditable?: boolean })?.isContentEditable;
      if (isTyping) return;

      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [hasPrev, hasNext, onPrev, onNext]);

  return (
    <div className={`pointer-events-none ${className ?? ""}`} aria-label="Book navigation">
      {/* Left */}
      <button
        style={{ pointerEvents: "auto" }}
        type="button"
        onClick={onPrev}
        disabled={!hasPrev}
        aria-label="Previous book"
        className={[
          "group absolute left-3 top-1/2 -translate-y-1/2 z-20",
          "h-12 w-12 rounded-full border border-[#D6DDE8] bg-white/80 shadow-sm backdrop-blur",
          "flex items-center justify-center",
          "transition hover:bg-white",
          !hasPrev ? "opacity-40 cursor-not-allowed" : "opacity-100",
        ].join(" ")}
      >
        <span className="text-[#2A3D66] text-xl leading-none select-none">‹</span>
      </button>

      {/* Right */}
      <button
        style={{ pointerEvents: "auto" }}
        type="button"
        onClick={onNext}
        disabled={!hasNext}
        aria-label="Next book"
        className={[
          "group absolute right-3 top-1/2 -translate-y-1/2 z-20",
          "h-12 w-12 rounded-full border border-[#D6DDE8] bg-white/80 shadow-sm backdrop-blur",
          "flex items-center justify-center",
          "transition hover:bg-white",
          !hasNext ? "opacity-40 cursor-not-allowed" : "opacity-100",
        ].join(" ")}
      >
        <span className="text-[#2A3D66] text-xl leading-none select-none">›</span>
      </button>

      {/* Counter */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 text-xs text-[#2A3D66]/60">
        {index + 1} / {total}
      </div>
    </div>
  );
}
