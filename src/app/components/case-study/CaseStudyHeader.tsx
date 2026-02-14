type CaseStudyHeaderProps = {
  title: string;
  subtitle: string;
};

export default function CaseStudyHeader({ title, subtitle }: CaseStudyHeaderProps) {
  return (
    <header className="mb-14 md:mb-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-anjana tracking-tight">
        {title}
      </h1>
      <p className="mt-3 text-lg text-neutral-600">
        {subtitle}
      </p>
    </header>
  );
}
