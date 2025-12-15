import { SketchStar } from "./doodles/SketchStar";
import { NotebookSketch } from "./doodles/NotebookSketch";

export default function CoverPageContent() {
  return (
    <div className="h-full flex flex-col items-center justify-center py-16 md:py-20 px-8 text-center">
      <div className="flex flex-col items-center justify-center">
        <p className="font-hand text-4xl md:text-5xl text-[#531A53]">
          Isabella's Experience
        </p>

        <p className="font-hand text-lg text-slate-600 mt-3">
          CS · English · Civic Tech
        </p>

        <div className="flex items-center gap-4 mt-8 opacity-60 text-[#531A53]">
          <SketchStar className="w-4 h-4" />
          <NotebookSketch className="w-6 h-6" />
          <SketchStar className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

