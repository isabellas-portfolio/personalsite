"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import type { LeadershipEntry } from "../../data/leadershipData";

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return Math.abs(h);
}

interface PolaroidCardProps {
  entry: LeadershipEntry;
  /** When true, animate in (slide from right + fade). */
  visible: boolean;
}

export default function PolaroidCard({ entry, visible }: PolaroidCardProps) {
  const [imgError, setImgError] = useState(false);
  const tilt = useMemo(
    () => (hash(entry.org) % 41) / 41 * 4 - 2,
    [entry.org]
  );
  const caption = entry.caption ?? entry.org;

  return (
    <div
      className="polaroid-card"
      style={
        {
          "--polaroid-tilt": `${tilt}deg`,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(24px)",
        } as React.CSSProperties
      }
    >
      <div className="polaroid-card-inner">
        {imgError ? (
          <div className="polaroid-card-fallback">
            <span className="polaroid-card-fallback-icon" aria-hidden>
              ✦
            </span>
            <span className="sr-only">Logo for {entry.org}</span>
          </div>
        ) : (
          <Image
            src={entry.logoSrc}
            alt=""
            width={200}
            height={160}
            className="polaroid-card-img"
            onError={() => setImgError(true)}
            unoptimized={entry.logoSrc.startsWith("/") && !entry.logoSrc.endsWith(".svg")}
          />
        )}
        <p className="polaroid-card-caption">{caption}</p>
      </div>
    </div>
  );
}
