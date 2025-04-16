import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  tags: string[];
  slug: string;
  image: any;
};

export default function ProjectCard({ title, tags, slug, image }: ProjectCardProps) {
  return (
    <div className="max-w-md mx-auto bg-[#fff0f5] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-4 space-y-3 border border-anjana">
      {image && (
        <Image
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
      )}
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="text-anjana text-sm font-semibold">{tags.join(", ")}</p>
      <Link
        href={`/projects/${slug}`}
        className="text-anjana underline font-medium hover:text-black"
      >
        View Full Description →
      </Link>
    </div>
  );
}
