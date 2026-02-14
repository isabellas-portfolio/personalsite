"use client";

import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

type ProjectTileProps = {
  title: string;
  subtitle: string;
  tags: string[];
  slug: string;
  image: StaticImageData;
};

export default function ProjectTile({ title, subtitle, tags, slug, image }: ProjectTileProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group block text-left"
    >
      {/* 16:9 image wrapper with overflow for zoom */}
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
        {image && (
          <Image
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        )}
      </div>

      <div className="mt-4 transition-transform duration-300 ease-out group-hover:-translate-y-1">
        <h3 className="text-2xl font-semibold text-black border-b border-transparent group-hover:border-current transition-colors pb-0.5">
          {title}
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          {subtitle}
        </p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full border border-neutral-300 px-2.5 py-0.5 text-xs text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
