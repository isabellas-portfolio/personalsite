
import MotionWrapper from "./components/MotionWrapper";
import Link from "next/link";
import Image from "next/image";
import scoutpic from "/public/homebuyerguide (1).png";
import digitalwpic from "/public/digitalwriting.png";
import NowPlaying from "./components/NowPlaying";

export default function HomePage() {
  return (
    <main className="bg-white font-serif">
      {/* Animated Hero Section */}
      <MotionWrapper />

      <div className="mt-10 flex justify-center">
        <NowPlaying />
      </div>

      {/* Scroll to Projects Button */}
      <div className="text-center text-md mt-16">
        <Link href="#projects" className="text-my-gray underline hover:text-my-pink transition">
          ↓ my projects ↓
        </Link>
      </div>

      {/* Projects Section */}
      <section id="projects" className="text-my-gray mt-32 px-8 lg:px-24">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">
          Projects: In and Out of the Classroom
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Project 1 */}
          <div className="space-y-4">
            <Image src={scoutpic} alt="Scout project" width={500} height={300} className="rounded-lg" />
            <h3 className="text-xl font-bold">Scout Labs 2024</h3>
            <p className="text-my-pink font-semibold text-sm">User Research, Academic Writing, User Interviewing</p>
            <p className="text-sm font-light">
              Scout Labs is an interdisciplinary team that uses a human-centered design thinking process 
              to research pressing civic issues and prototype creative solutions. 
              I led research and narrative development for a homebuying support site with Boston’s Home Center.
            </p>
            <Link
              href="/experience"
              className="inline-block bg-my-gray hover:bg-my-pink text-white font-bold py-2 px-4 border-b-4 border-neutral-800 hover:border-pink-700 rounded transition"
            >
              View Full Description
            </Link>
          </div>

          {/* Project 2 */}
          <div className="space-y-4">
            <Image src={digitalwpic} alt="Digital Writing Portfolio" width={500} height={300} className="rounded-lg" />
            <h3 className="text-xl font-bold">Digital Writing Portfolio</h3>
            <p className="text-my-pink font-semibold text-sm">Website Development, Website Design, UI/UX</p>
            <p className="text-sm font-light">
              Final project for ENGL 2730. Designed and developed a personal site from scratch with HTML/CSS 
              and GitHub/Brackets. Got an A on the project (and in the class)!
            </p>
            <Link
              href="/experience"
              className="inline-block bg-my-gray hover:bg-my-pink text-white font-bold py-2 px-4 border-b-4 border-neutral-800 hover:border-pink-700 rounded transition"
            >
              View Full Description
            </Link>
          </div>
        </div>
      </section>

      {/* Explore More Button */}
      <div className="mt-20 text-center">
        <Link
          href="/experience"
          className="bg-my-gray hover:bg-my-pink text-white font-bold py-2 px-6 rounded-full border-b-4 border-neutral-800 hover:border-pink-700 transition"
        >
          Explore More Projects!
        </Link>
      </div>

      {/* Back to Top */}
      <div className="mt-20 text-center">
        <Link href="#top" className="text-my-gray underline hover:text-my-pink transition">
          ↑ back to top ↑
        </Link>
      </div>
    </main>
  );
}
