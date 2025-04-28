"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutmepic from "/public/aboutme.png";

export default function AboutMe() {
  return (
    <section className="min-h-screen px-6 lg:px-24 py-20 bg-white font-serif">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"> {/* ✨ 2 column layout */}

        {/* Left Side: Text Content */}
        <motion.div
          className="prose prose-p:text-black prose-h1:text-anjana prose-h2:text-anjana prose-strong:text-anjana max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Me!</h1>

          <p>
            Hi, I'm Isabella! I'm a current third year at Northeastern University studying Computer Science and English
            with a focus in Natural Language Processing. I'm from Long Island, New York. From a young age, I've loved to
            explore technology and all its new advancements! Since coming to Northeastern, I've been able to explore
            technology through a humanities lens which has given me new perspectives on Artificial Intelligence and how it
            processes language.
          </p>

          <p>
            This has driven me to a passion for user-centered thinking and design. I always feel most like
            myself when in some sort of leadership role! Throughout high school and college, I've honed my leadership
            skills to improve the areas I'm passionate about. In whatever I do, I want to <strong>
              improve technologies in a more unique way, by keeping humans at the center.
            </strong> In my free time, you'll find me reading, writing, exploring cafes and bookstores, or baking!
          </p>

          <h2>Looking for any Project/Product Management, Technical Writing, or AI research roles!</h2>
        
         </motion.div>

{/* Right Side: Image */}
<motion.div
          className="flex justify-center lg:justify-end items-start"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <Image
            src={aboutmepic}
            width={400}
            height={500}
            alt="About Me Image"
            className="rounded-lg shadow-lg object-cover"
          />
        </motion.div>

      </div>
          {/* Skills and Strengths Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Skills Card */}
            <div className="bg-[#fff0f5] rounded-xl shadow-md p-8 hover:shadow-lg transition w-full max-w-[400px] mx-auto">
              <h2 className="text-2xl font-bold text-anjana mb-4">Skills</h2>
              <p className="text-black mb-2">
                <span className="underline underline-offset-4">Languages:</span> HTML | CSS | JavaScript | Java | Python | SQL | R
              </p>
              <p className="text-black mb-2">
                <span className="underline underline-offset-4">Software & Tools:</span> Node.js | VS Code | IntelliJ | Brackets
              </p>
              <p className="text-black">
                <span className="underline underline-offset-4">Other Relevant Skills:</span> Academic Writing | User Research | Desktop Imaging | Interviewing | Wireframing
              </p>
            </div>

            {/* Strengths Card */}
            <div className="bg-[#fff0f5] rounded-xl shadow-md p-8 hover:shadow-lg transition w-full max-w-[400px] mx-auto">
              <h2 className="text-2xl font-bold text-anjana mb-4">Strengths</h2>
              <p className="text-black">
                Leadership, Collaboration, Project Management, Communication, Editing, Problem Solving
              </p>
            </div>
          </div>

        
    </section>
  );
}
