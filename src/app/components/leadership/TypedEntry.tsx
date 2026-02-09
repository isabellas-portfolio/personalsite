"use client";

import { useEffect, useMemo } from "react";
import { useTypewriterLines } from "../../hooks/useTypewriterLines";
import type { LeadershipEntry } from "../../data/leadershipData";

interface TypedEntryProps {
  entry: LeadershipEntry;
  inView: boolean;
  skipTyping: boolean;
  reducedMotion: boolean;
  onTypingChange?: (typing: boolean) => void;
}

function buildLines(entry: LeadershipEntry): string[] {
  const titleLine = `${entry.title} @ ${entry.org}`;
  const skillsLine = entry.skills.join(", ");
  const datesLine = entry.dates;
  const bulletLines = entry.bullets.map((b) => `- ${b}`);
  return [titleLine, skillsLine, datesLine, ...bulletLines];
}

export default function TypedEntry({
  entry,
  inView,
  skipTyping,
  reducedMotion,
  onTypingChange,
}: TypedEntryProps) {
  const lines = useMemo(() => buildLines(entry), [entry]);
  const { currentLines, isComplete } = useTypewriterLines(lines, {
    enabled: inView,
    skipTyping,
    reducedMotion,
  });

  useEffect(() => {
    if (onTypingChange && inView) onTypingChange(!isComplete);
  }, [inView, isComplete, onTypingChange]);

  const activeLineIndex = currentLines.findIndex(
    (c, i) => (lines[i]?.length ?? 0) > c.length
  );
  const showCursorOnLine = !reducedMotion && !isComplete && activeLineIndex >= 0;

  return (
    <div className="typed-entry">
      <div className="typed-entry-paper">
        {currentLines.map((text, i) => {
          const showCursor = showCursorOnLine && i === activeLineIndex;
          return (
            <div key={i} className="typed-entry-line-wrap">
              {i === 0 ? (
                <span className="typed-entry-line typed-entry-title">
                  {text}
                  <span
                    className="typed-entry-cursor"
                    aria-hidden
                    data-visible={showCursor ? "true" : "false"}
                  />
                </span>
              ) : i === 1 ? (
                <span className="typed-entry-line typed-entry-skills">
                  {text}
                  <span
                    className="typed-entry-cursor"
                    aria-hidden
                    data-visible={showCursor ? "true" : "false"}
                  />
                </span>
              ) : i === 2 ? (
                <span className="typed-entry-line typed-entry-dates">
                  {text}
                  <span
                    className="typed-entry-cursor"
                    aria-hidden
                    data-visible={showCursor ? "true" : "false"}
                  />
                </span>
              ) : (
                <span className="typed-entry-line typed-entry-bullet">
                  {text}
                  <span
                    className="typed-entry-cursor"
                    aria-hidden
                    data-visible={showCursor ? "true" : "false"}
                  />
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
