import { CheckCircle2 } from "lucide-react";

export function Takeaways({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <aside className="mt-16 rounded-3xl border border-brand-100 bg-surface-alt/60 p-7 sm:p-9">
      <h2 className="font-display text-xl font-semibold text-ink">Key takeaways</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-brand-700"
              aria-hidden
            />
            <span className="text-base leading-relaxed text-ink-soft">{item}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
