import { ReactNode } from "react";

type CaseSectionProps = {
  heading: string;
  children: ReactNode;
  id?: string;
};

export default function CaseSection({ heading, children, id }: CaseSectionProps) {
  return (
    <section id={id} className="pt-10 md:pt-14 border-t border-neutral-200 first:border-t-0 first:pt-0">
      <h2 className="text-xl md:text-2xl font-semibold text-anjana mb-6">
        {heading}
      </h2>
      <div className="text-[#2c2c2c] leading-relaxed max-w-prose">
        {children}
      </div>
    </section>
  );
}
