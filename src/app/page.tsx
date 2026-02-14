import MotionWrapper from "./components/MotionWrapper";
import Link from "next/link";
import ProjectsSection from "./components/ProjectsSection";

export default function HomePage() {
  return (
    <main className="bg-white font-jost">
      {/* Animated Hero Section */}
      <MotionWrapper />

      {/* Scroll to Projects Button */}
      <div className="text-center text-md mt-16">
        <Link href="#projects" className="text-black underline hover:text-anjana transition">
          ↓ my projects ↓
        </Link>
      </div>

      {/* Projects Section - editorial portfolio layout */}
      <ProjectsSection />



      {/* Explore More Button */}
      <div className="mt-20 text-center">
        <Link
          href="/experience"
          className="bg-black hover:bg-anjana text-white font-bold py-2 px-6 rounded-full border-b-4 border-neutral-800 hover:border-pink-700 transition"
        >
          Explore More Projects!
        </Link>
      </div>

      {/* Back to Top */}
      <div className="mt-20 text-center">
        <Link href="#top" className="text-black underline hover:text-anjana transition">
          ↑ back to top ↑
        </Link>
      </div>
    </main>
  );
}
