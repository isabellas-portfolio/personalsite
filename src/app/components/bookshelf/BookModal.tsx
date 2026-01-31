"use client";
import { motion, AnimatePresence } from "framer-motion";
import { type NotebookPage } from "../../data/notebookPages";

interface BookModalProps {
  experience: NotebookPage | null;
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
}

// Experience-specific margin notes
const marginNotes: Record<string, string> = {
  "litclub": "my first self-starter project. holds a very special place in my heart ❤️",
  "boces": "my very first work experience right out of high school before starting college! grateful to the team for everything i learned about IT and tech",
  "nusci": "where i fell in love with front-end development!",
  "scout-labs": "grown so much professionally and personally through my roles here @ Scout",
  "wayfair": "my first co-op, diving hands into new technologies and getting out of my comfort zone",
  "scout-labs-labs-director": "my favorite on campus role to date!! makes me realize how much i love leading teams and providing guidance",
  "burnes-center-genai-pm": "solidified my love for product management and building tech 4 good 😊",
};

// Hash function for deterministic placement
function hashToIndex(str: string, mod: number) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % mod;
}

// Preset positions for doodle notes
const DOODLE_PRESETS = [
  { side: "right", top: "78%", left: "56%", rotate: "-8deg", align: "left" },
  { side: "right", top: "82%", left: "62%", rotate: "6deg", align: "left" },
  { side: "right", top: "70%", left: "60%", rotate: "-14deg", align: "left" },
  { side: "left", top: "80%", left: "10%", rotate: "10deg", align: "left" },
  { side: "left", top: "72%", left: "14%", rotate: "-6deg", align: "left" },
  { side: "right", top: "18%", left: "58%", rotate: "-5deg", align: "left" },
  { side: "left", top: "75%", left: "8%", rotate: "8deg", align: "left" },
  { side: "right", top: "85%", left: "64%", rotate: "-10deg", align: "left" },
];

function getDoodleStyle(pageId: string) {
  const idx = hashToIndex(pageId, DOODLE_PRESETS.length);
  return DOODLE_PRESETS[idx];
}

// DoodleNote component
function DoodleNote({ pageId, text }: { pageId: string; text: string }) {
  const p = getDoodleStyle(pageId);
  
  // Vary font size and opacity based on hash
  const sizeHash = hashToIndex(pageId + "size", 3);
  const fontSize = sizeHash === 0 ? "text-xs" : sizeHash === 1 ? "text-sm" : "text-base";
  
  const opacityHash = hashToIndex(pageId + "opacity", 3);
  const opacityValue = opacityHash === 0 ? 0.6 : opacityHash === 1 ? 0.7 : 0.8;

  return (
    <div
      className="pointer-events-none absolute"
      style={{
        top: p.top,
        left: p.left,
        transform: `rotate(${p.rotate})`,
        maxWidth: 240,
      }}
    >
      <p
        className={`font-hand ${fontSize} leading-snug`}
        style={{
          color: `rgba(107, 59, 107, ${opacityValue})`,
        }}
      >
        {text}
      </p>
      {/* tiny underline / flourish */}
      <div className="mt-1 h-[2px] w-24 bg-[#6B3B6B]/25 rounded-full" />
    </div>
  );
}

export default function BookModal({
  experience,
  isOpen,
  onClose,
  isMobile,
}: BookModalProps) {
  if (!experience || !experience.company || !experience.role) return null;

  // Map sticky notes to impact items
  const impact = experience.stickyNotes?.map((note) => `${note.title}: ${note.body}`) || [];
  
  // Get the margin note for this experience
  const marginNote = marginNotes[experience.id] || "learned a lot here";

  return (
    <AnimatePresence>
      {isOpen && experience && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            // click outside to close
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

          {/* Book */}
          <motion.div
            className="relative w-full max-w-[1100px] mx-auto"
            initial={{ scale: 0.96, y: 10 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.98, y: 8 }}
            transition={{ duration: 0.22 }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-sm font-semibold text-white/90 hover:text-white transition-colors z-10"
            >
              close ✕
            </button>

            {/* Hardcover frame */}
            <div className="relative rounded-[28px] bg-[#C9B5A8] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
              {/* "opening" animation: covers swing outward */}
              <motion.div
                className="absolute inset-0 z-10 rounded-[28px] overflow-hidden"
                initial="closed"
                animate="open"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0, transition: { delay: 0.15 } },
                }}
              >
                {/* left cover */}
                <motion.div
                  className="absolute left-0 top-0 h-full w-1/2 origin-left bg-gradient-to-br from-[#9B7A55] to-[#6E533A] rounded-l-[28px]"
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -110 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                />
                {/* right cover */}
                <motion.div
                  className="absolute right-0 top-0 h-full w-1/2 origin-right bg-gradient-to-br from-[#9B7A55] to-[#6E533A] rounded-r-[28px]"
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 110 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                />
              </motion.div>

              {/* PAPER (open book) */}
              <div
                className="relative overflow-hidden rounded-[22px]"
                style={{
                  background: "linear-gradient(180deg, #FFF9F3 0%, #FFF4EC 100%)",
                }}
              >
                {/* paper grain */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(0,0,0,0.6) 0.6px, transparent 0.6px)",
                    backgroundSize: "10px 10px",
                    opacity: 0.02,
                  }}
                />

                {/* center gutter - fold effect */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 w-16 -translate-x-1/2">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(0,0,0,0.08), rgba(0,0,0,0.02), rgba(255,255,255,0.35), rgba(0,0,0,0.02), rgba(0,0,0,0.08))",
                      opacity: 0.55,
                    }}
                  />
                  {/* faint center gutter shadow */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.04) 48%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.04) 52%, transparent 100%)",
                    }}
                  />
                </div>

                {/* page edge shading */}
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-8"
                  style={{
                    background: "linear-gradient(to right, rgba(0,0,0,0.06), transparent)",
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 w-8"
                  style={{
                    background: "linear-gradient(to left, rgba(0,0,0,0.06), transparent)",
                  }}
                />

                {/* CONTENT */}
                <div className="grid grid-cols-2 gap-0">
                  {/* Left page */}
                  <div className="relative h-[70vh] overflow-auto py-10" style={{ paddingLeft: "48px", paddingRight: "64px" }}>
                    <h2 className="font-serif text-3xl text-[#531A53] flex items-center gap-3">
                      {experience.icon && <span>{experience.icon}</span>}
                      <span>{experience.company}</span>
                    </h2>
                    <p className="mt-2 text-[#531A53]/80 font-semibold">
                      {experience.role}
                    </p>
                    <p className="mt-1 text-sm text-[#8B6F6F]">
                      {experience.dates}
                      {experience.location ? ` • ${experience.location}` : ""}
                    </p>

                    {experience.summary && (
                      <p className="mt-6 text-[#2b1b2b] leading-relaxed">
                        {experience.summary}
                      </p>
                    )}

                    {experience.bullets && experience.bullets.length > 0 && (
                      <div className="mt-8">
                        <p className="text-sm font-semibold text-[#531A53] mb-3">
                          Highlights
                        </p>
                        <ul className="space-y-3 text-[#2b1b2b]">
                          {experience.bullets.slice(0, 3).map((b, i) => (
                            <li key={i} className="leading-relaxed">
                              • {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>

                  {/* Right page */}
                  <div className="relative h-[70vh] overflow-auto py-10" style={{ paddingLeft: "64px", paddingRight: "48px" }}>
                    <p className="text-sm font-semibold text-[#531A53] mb-3">More</p>

                    {impact.length > 0 ? (
                      <div className="mb-6 rounded-xl bg-white/35 border border-black/5 p-4">
                        <p className="text-xs font-semibold text-[#531A53]/70 uppercase tracking-widest mb-2">
                          Impact
                        </p>
                        <ul className="space-y-2 text-[#2b1b2b]">
                          {impact.map((x, i) => (
                            <li key={i}>• {x}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {experience.bullets && experience.bullets.length > 3 && (
                      <div>
                        <p className="text-xs font-semibold text-[#531A53]/70 uppercase tracking-widest mb-2">
                          Additional Highlights
                        </p>
                        <ul className="space-y-2 text-[#2b1b2b]">
                          {experience.bullets.slice(3).map((b, i) => (
                            <li key={i}>• {b}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {impact.length === 0 &&
                      (!experience.bullets || experience.bullets.length <= 3) && (
                        <p className="text-[#2b1b2b]/70">
                          Additional details and insights from this experience.
                        </p>
                      )}


                    {/* Dog-ear (page curl) */}
                    <div className="absolute bottom-5 right-5 w-14 h-14 pointer-events-none">
                      {/* shadow underneath the lifted corner */}
                      <div
                        className="absolute bottom-0 right-0 w-14 h-14"
                        style={{
                          clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                          background: "rgba(0,0,0,0.10)",
                          filter: "blur(6px)",
                          transform: "translate(6px, 6px)",
                          opacity: 0.25,
                        }}
                      />

                      {/* the folded paper */}
                      <div
                        className="absolute bottom-0 right-0 w-14 h-14"
                        style={{
                          clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                          background:
                            "linear-gradient(135deg, rgba(0,0,0,0.10), rgba(0,0,0,0.02) 55%, rgba(255,255,255,0.55))",
                          boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
                          borderRadius: "0 0 6px 0",
                        }}
                      />

                      {/* fold crease line (the "hinge") */}
                      <div
                        className="absolute bottom-0 right-0 w-14 h-14"
                        style={{
                          clipPath: "polygon(100% 0, 0 100%, 2% 100%, 100% 2%)",
                          background: "rgba(0,0,0,0.10)",
                          opacity: 0.25,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Doodle note - positioned relative to entire book spread */}
                <DoodleNote pageId={experience.id} text={marginNote} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
