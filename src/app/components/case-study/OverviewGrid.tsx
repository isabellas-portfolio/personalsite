import { ReactNode } from "react";
import MetaList from "./MetaList";

type MetaItem = { label: string; value: string };

type OverviewGridProps = {
  overview: ReactNode;
  metaItems: MetaItem[];
};

export default function OverviewGrid({ overview, metaItems }: OverviewGridProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 mb-16 md:mb-24">
      <div className="min-w-0">
        <h2 className="text-xs font-medium uppercase tracking-wider text-anjana mb-4">
          Overview
        </h2>
        <div className="text-[#2c2c2c] leading-relaxed max-w-prose">
          {overview}
        </div>
      </div>
      <div className="lg:pl-4 lg:border-l border-neutral-200">
        <MetaList items={metaItems} />
      </div>
    </section>
  );
}
