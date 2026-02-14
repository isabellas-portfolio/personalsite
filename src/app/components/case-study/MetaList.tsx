type MetaItem = { label: string; value: string };

type MetaListProps = {
  items: MetaItem[];
  className?: string;
};

export default function MetaList({ items, className = "" }: MetaListProps) {
  if (items.length === 0) return null;
  return (
    <dl className={`space-y-4 ${className}`}>
      {items.map(({ label, value }) => (
        <div key={label}>
          <dt className="text-xs font-medium uppercase tracking-wider text-neutral-500">
            {label}
          </dt>
          <dd className="mt-1 text-[#2c2c2c]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
