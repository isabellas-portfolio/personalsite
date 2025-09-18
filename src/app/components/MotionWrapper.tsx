"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilepic from "/public/profile.png";
import NowPlaying from "./NowPlaying"; 


export default function MotionWrapper() {
  return (
    <section className="min-h-screen px-8 lg:px-24 py-20 bg-white flex flex-col-reverse lg:flex-row items-center justify-between gap-12 font-jost">
      {/* Left Column */}
      <motion.div
        className="max-w-xl space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-anjana text-3xl sm:text-5xl lg:text-6xl leading-tight whitespace-normal md:whitespace-nowrap">
          Hi, I’m Isabella Iype!
        </h1>
        <p className="text-black max-w-[22rem] text-base"> <span className="" >Motivated </span> 
            by technology and the humanities <span className="">to find tech solutions </span> 
            that combine the analytical power of <span className="">Computer Science </span> 
            with the narratives of  <span className="">Language and Literature</span>. </p>

        <div className="space-y-1 text-black">
          <p>📍 Based in Boston, MA</p>
          <p className="text-sm">
            <span className="inline-block animate-spin-slow text-anjana">❀</span> Computer Science & English @ <a href="https://northeastern.edu" className="underline text-anjana">Northeastern University</a>
          </p>
          <p className="text-sm">
            <span className="inline-block animate-spin-slow text-anjana">❀</span> Gen AI Product Developer @ <a href="https://burnes.northeastern.edu" className="underline text-anjana">The Burnes Center</a>
          </p>
          <p className="text-sm">
            <span className="inline-block animate-spin-slow text-anjana">❀</span> Labs Director @ <a href="https://scout.camd.northeastern.edu" className="underline text-anjana">Scout</a>
          </p>
        </div>

        <div className="pt-4">
          <a href="/aboutme" className="bg-black hover:bg-anjana text-white font-bold py-2 px-6 rounded-full shadow-md transition hover:scale-105 border-b-4 border-neutral-800 hover:border-pink-700">
            More About Me
          </a>
        </div>
      </motion.div>
      <div className="pt-6">
  <NowPlaying />
</div>

      {/* Right Column */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <Image
          src={profilepic}
          alt="Isabella Iype profile"
          width={350}
          height={350}
          className="rounded-xl shadow-xl hover:rotate-1 hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute -top-4 -left-4 text-4xl animate-spin-slow">❀</div>
        <div className="absolute -bottom-4 -right-4 text-3xl animate-spin-slow">✼</div>
      </motion.div>
    </section>
  );
}
