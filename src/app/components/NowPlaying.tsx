"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaSpotify, FaPause, FaPlay } from "react-icons/fa";

export default function NowPlaying() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#ffe6f2] border border-anjana p-4 rounded-xl shadow-lg max-w-[270px] text-black font-serif"
    >
      <div className="flex items-center gap-4">
        {/* Spinning Record */}
        <motion.div
          animate={isPlaying ? { rotate: 360 } : false}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="text-3xl"
        >
          💿
        </motion.div>

        <div className="flex flex-col text-sm">
          <span className="text-anjana font-semibold">Now Playing</span>
          <span className="font-bold">“Maine” by Noah Kahan</span>
        </div>
      </div>

      {/* Equalizer + Toggle */}
      <div className="flex justify-between items-center mt-4">
        {/* Equalizer animation */}
        <div className="flex gap-[2px]">
          {[1, 2, 3].map((bar) => (
            <motion.div
              key={bar}
              className="w-1 bg-anjana rounded-full"
              animate={
                isPlaying
                  ? { height: ["0.5rem", "1.5rem", "0.75rem"] }
                  : { height: "0.75rem" }
              }
              transition={
                isPlaying
                  ? {
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: bar * 0.1,
                    }
                  : { duration: 0 }
              }
            />
          ))}
        </div>

        {/* Play/Pause toggle */}
        <button
          className="text-black hover:text-anjana transition"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        {/* Spotify Link */}
        <a
          href="https://open.spotify.com/track/3Z2anmIVG8b1GelyeFQdnP?si=ac98e244c07346c3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-anjana hover:underline flex items-center gap-1"
        >
          <FaSpotify />
          <span className="text-xs">Listen</span>
        </a>
      </div>
    </motion.div>
  );
}
