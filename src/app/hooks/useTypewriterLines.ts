"use client";

import { useCallback, useEffect, useState } from "react";

const DEFAULT_MS_PER_CHAR = 28;
const MS_VARIATION = 8;

function randomDelay(): number {
  return DEFAULT_MS_PER_CHAR + (Math.random() * 2 - 1) * MS_VARIATION;
}

/**
 * Types an array of lines one character at a time.
 * Returns { currentLines, isComplete } where currentLines[i] is the visible portion of line i.
 * If skipTyping or prefers-reduced-motion, completes instantly.
 */
export function useTypewriterLines(
  lines: string[],
  options: {
    enabled: boolean;
    skipTyping: boolean;
    reducedMotion: boolean;
    msPerChar?: number;
  }
): { currentLines: string[]; isComplete: boolean } {
  const { enabled, skipTyping, reducedMotion, msPerChar } = options;
  const instant = skipTyping || reducedMotion || !enabled;

  const [currentLines, setCurrentLines] = useState<string[]>(() =>
    instant ? lines : lines.map(() => "")
  );
  const [isComplete, setIsComplete] = useState(instant);

  const runTyping = useCallback(() => {
    if (lines.length === 0) {
      setIsComplete(true);
      return;
    }
    if (instant) {
      setCurrentLines([...lines]);
      setIsComplete(true);
      return;
    }

    setCurrentLines(lines.map(() => ""));
    setIsComplete(false);

    let lineIndex = 0;
    let charIndex = 0;
    const delays: ReturnType<typeof setTimeout>[] = [];

    function typeNext() {
      if (lineIndex >= lines.length) {
        setIsComplete(true);
        return;
      }
      const line = lines[lineIndex];
      if (charIndex >= line.length) {
        lineIndex += 1;
        charIndex = 0;
        typeNext();
        return;
      }
      setCurrentLines((prev) => {
        const next = [...prev];
        next[lineIndex] = line.slice(0, charIndex + 1);
        return next;
      });
      charIndex += 1;
      const t = setTimeout(typeNext, msPerChar ?? randomDelay());
      delays.push(t);
    }

    typeNext();
    return () => delays.forEach(clearTimeout);
  }, [lines.join("\n"), instant, msPerChar]);

  useEffect(() => {
    if (!enabled) return;
    return runTyping();
  }, [enabled, runTyping]);

  return { currentLines, isComplete };
}
