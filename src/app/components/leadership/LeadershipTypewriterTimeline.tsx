"use client";

import { useState, useEffect } from "react";
import { leadershipEntries } from "../../data/leadershipData";
import { useInViewOnce } from "../../hooks/useInViewOnce";
import TypewriterHeader from "./TypewriterHeader";
import TypedEntry from "./TypedEntry";
import PolaroidCard from "./PolaroidCard";
import type { LeadershipEntry } from "../../data/leadershipData";

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

interface EntryRowProps {
  entry: LeadershipEntry;
  skipTyping: boolean;
  reducedMotion: boolean;
  isFirst: boolean;
  onHeaderTypingChange: (typing: boolean) => void;
}

function EntryRow({
  entry,
  skipTyping,
  reducedMotion,
  isFirst,
  onHeaderTypingChange,
}: EntryRowProps) {
  const [ref, inView] = useInViewOnce({ threshold: 0.45 });

  return (
    <div ref={ref} className="leadership-entry-row">
      <div className="leadership-entry-paper-col">
        <TypedEntry
          entry={entry}
          inView={inView}
          skipTyping={skipTyping}
          reducedMotion={reducedMotion}
          onTypingChange={
            isFirst
              ? (typing) => onHeaderTypingChange(typing && !skipTyping && !reducedMotion)
              : undefined
          }
        />
      </div>
      <div className="leadership-entry-polaroid-col">
        <PolaroidCard entry={entry} visible={inView} />
      </div>
    </div>
  );
}

export default function LeadershipTypewriterTimeline() {
  const [skipTyping, setSkipTyping] = useState(false);
  const [headerTyping, setHeaderTyping] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <section className="leadership-timeline" aria-label="Leadership and involvement">
      <div className="leadership-timeline-bg" aria-hidden />

      <div className="leadership-timeline-inner">
        <div className="leadership-timeline-header-wrap">
          <TypewriterHeader isTyping={headerTyping} />
          <div className="leadership-timeline-title-row">
            <h1 className="leadership-timeline-title">
              Leadership &amp; Involvement!
            </h1>
            <label className="leadership-skip-toggle">
              <input
                type="checkbox"
                checked={skipTyping}
                onChange={(e) => setSkipTyping(e.target.checked)}
                className="leadership-skip-checkbox"
              />
              <span className="leadership-skip-label">Skip typing</span>
            </label>
          </div>
        </div>

        <p className="leadership-timeline-intro">
          I&apos;m currently honing my leadership skills through design, service, faith, and music.
          Whether it&apos;s guiding creative projects or helping build welcoming communities, I&apos;m{" "}
          <span className="font-bold">passionate about connection, collaboration, and impact.</span>
        </p>

        <div className="leadership-entries">
          {leadershipEntries.map((entry, index) => (
            <EntryRow
              key={entry.org + entry.dates}
              entry={entry}
              skipTyping={skipTyping}
              reducedMotion={reducedMotion}
              isFirst={index === 0}
              onHeaderTypingChange={setHeaderTyping}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
