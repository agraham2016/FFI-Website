import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import type { Tool } from "@/content/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  return (
    <Link
      href={tool.href}
      className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="inline-flex items-center justify-center rounded-xl bg-brand-50 p-2.5 text-brand-700">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-700/80">
          {tool.category}
        </span>
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">
        {tool.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
        {tool.blurb}
      </p>
      <div className="mt-5 flex items-center justify-between border-t border-brand-100 pt-4 text-xs text-ink-subtle">
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" aria-hidden />
          {tool.minutes}
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-700 transition group-hover:gap-1.5">
          Open
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}
