"use client";

interface TypewriterHeaderProps {
  /** When true, show subtle key wiggle (only while typing). */
  isTyping?: boolean;
}

export default function TypewriterHeader({ isTyping = false }: TypewriterHeaderProps) {
  return (
    <div
      className="typewriter-header"
      aria-hidden
      data-typing={isTyping ? "true" : undefined}
    >
      <svg
        viewBox="0 0 120 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="typewriter-svg"
      >
        {/* Body */}
        <rect
          x="8"
          y="24"
          width="104"
          height="48"
          rx="4"
          fill="#8B7355"
          stroke="#6B5344"
          strokeWidth="1.5"
        />
        <rect
          x="12"
          y="28"
          width="96"
          height="40"
          rx="2"
          fill="#A08060"
          opacity="0.6"
        />
        {/* Paper slot */}
        <rect x="16" y="32" width="88" height="8" rx="1" fill="#E8DCC8" />
        {/* Keys */}
        <rect x="20" y="46" width="8" height="6" rx="1" fill="#5C4A3A" />
        <rect x="30" y="46" width="8" height="6" rx="1" fill="#5C4A3A" className="typewriter-key" />
        <rect x="40" y="46" width="8" height="6" rx="1" fill="#5C4A3A" className="typewriter-key" />
        <rect x="50" y="46" width="8" height="6" rx="1" fill="#5C4A3A" className="typewriter-key" />
        <rect x="60" y="46" width="8" height="6" rx="1" fill="#5C4A3A" className="typewriter-key" />
        <rect x="70" y="46" width="8" height="6" rx="1" fill="#5C4A3A" className="typewriter-key" />
        <rect x="80" y="46" width="8" height="6" rx="1" fill="#5C4A3A" className="typewriter-key" />
        <rect x="90" y="46" width="8" height="6" rx="1" fill="#5C4A3A" />
        {/* Roller */}
        <ellipse cx="60" cy="68" rx="44" ry="6" fill="#4A3C30" />
        <ellipse cx="60" cy="67" rx="42" ry="4" fill="#6B5344" />
        {/* Accent */}
        <circle cx="96" cy="40" r="4" fill="#531A53" opacity="0.9" />
      </svg>
    </div>
  );
}
