"use client";

import { useEffect, useMemo, useState } from "react";
import { Printer, RotateCcw } from "lucide-react";
import {
  skillCategories,
  skillStatusLabels,
  type SkillStatus,
} from "@/content/skillsInventory";
import { cn } from "@/lib/cn";

type SkillState = Record<string, SkillStatus>;

const STORAGE_KEY = "ffi.skills-inventory.v1";

export function InventoryClient() {
  const [state, setState] = useState<SkillState>({});
  const [name, setName] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") {
          setState(parsed.state ?? {});
          setName(parsed.name ?? "");
        }
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ state, name })
      );
    } catch {
      /* ignore */
    }
  }, [state, name, hydrated]);

  const setStatus = (skillId: string, status: SkillStatus) => {
    setState((s) => ({ ...s, [skillId]: status }));
  };

  const counts = useMemo(() => {
    let independent = 0;
    let withPrompts = 0;
    let notYet = 0;
    let answered = 0;
    let total = 0;
    skillCategories.forEach((cat) => {
      cat.skills.forEach((sk) => {
        total += 1;
        const v = state[sk.id];
        if (!v) return;
        answered += 1;
        if (v === "independent") independent += 1;
        else if (v === "with-prompts") withPrompts += 1;
        else notYet += 1;
      });
    });
    return { total, answered, independent, withPrompts, notYet };
  }, [state]);

  const reset = () => {
    if (
      typeof window !== "undefined" &&
      window.confirm("Clear all answers? This can't be undone.")
    ) {
      setState({});
      setName("");
    }
  };

  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-brand-100 bg-white p-5 shadow-soft sm:p-6 print:hidden">
        <div className="grid items-end gap-4 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <label
              htmlFor="inventory-name"
              className="block text-sm font-medium text-ink"
            >
              Who is this inventory for?
            </label>
            <input
              id="inventory-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name (optional)"
              className="mt-2 block w-full rounded-xl border border-brand-200 bg-white px-3.5 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
            />
          </div>
          <div className="rounded-xl border border-brand-100 bg-brand-50/40 p-3 text-xs text-ink-muted">
            Saved automatically on this device. Nothing is sent to a server.
          </div>
        </div>
      </div>

      {/* Sticky-ish summary */}
      <SummaryBar counts={counts} name={name} />

      <div className="space-y-12">
        {skillCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-title`}
            className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:p-8"
          >
            <h2
              id={`${category.id}-title`}
              className="font-display text-xl font-semibold text-ink"
            >
              {category.title}
            </h2>
            <p className="mt-1 text-sm text-ink-muted">{category.description}</p>

            <ul className="mt-6 divide-y divide-brand-100">
              {category.skills.map((skill) => {
                const v = state[skill.id];
                return (
                  <li
                    key={skill.id}
                    className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-sm text-ink">{skill.label}</span>
                    <fieldset
                      className="flex flex-wrap gap-1.5"
                      aria-label={skill.label}
                    >
                      {(Object.keys(skillStatusLabels) as SkillStatus[]).map(
                        (status) => {
                          const isActive = v === status;
                          const id = `${skill.id}-${status}`;
                          return (
                            <label
                              key={status}
                              htmlFor={id}
                              className={cn(
                                "cursor-pointer rounded-full border px-3 py-1.5 text-xs font-medium transition",
                                isActive
                                  ? statusActiveClasses(status)
                                  : "border-brand-200 bg-white text-ink-muted hover:border-brand-300 hover:text-brand-800"
                              )}
                            >
                              <input
                                id={id}
                                type="radio"
                                name={skill.id}
                                value={status}
                                checked={isActive}
                                onChange={() => setStatus(skill.id, status)}
                                className="sr-only"
                              />
                              {skillStatusLabels[status].short}
                            </label>
                          );
                        }
                      )}
                    </fieldset>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink-muted transition hover:border-brand-300 hover:text-brand-800"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          Reset
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800"
        >
          <Printer className="h-4 w-4" aria-hidden />
          Print or save as PDF
        </button>
      </div>
    </div>
  );
}

function statusActiveClasses(status: SkillStatus) {
  if (status === "independent")
    return "border-brand-700 bg-brand-700 text-white";
  if (status === "with-prompts")
    return "border-accent-600 bg-accent-500 text-white";
  return "border-brand-300 bg-brand-100 text-brand-900";
}

function SummaryBar({
  counts,
  name,
}: {
  counts: {
    total: number;
    answered: number;
    independent: number;
    withPrompts: number;
    notYet: number;
  };
  name: string;
}) {
  const pct = counts.total ? Math.round((counts.answered / counts.total) * 100) : 0;
  return (
    <div className="rounded-2xl border border-brand-200 bg-brand-50/40 p-5 shadow-soft sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <h2 className="font-display text-lg font-semibold text-ink">
            {name ? `${name}'s snapshot` : "Your snapshot"}
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            {counts.answered} of {counts.total} skills tagged ({pct}%)
          </p>
        </div>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white">
        <div
          className="h-full bg-brand-700 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <dl className="mt-5 grid gap-3 sm:grid-cols-3">
        <SummaryStat
          label="Independent"
          value={counts.independent}
          tone="brand"
        />
        <SummaryStat
          label="With prompts"
          value={counts.withPrompts}
          tone="accent"
        />
        <SummaryStat label="Not yet" value={counts.notYet} tone="neutral" />
      </dl>
    </div>
  );
}

function SummaryStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "brand" | "accent" | "neutral";
}) {
  const toneClass =
    tone === "brand"
      ? "border-brand-200 bg-white text-brand-800"
      : tone === "accent"
        ? "border-accent-200 bg-white text-accent-700"
        : "border-brand-100 bg-white text-ink-muted";
  return (
    <div className={cn("rounded-xl border p-3", toneClass)}>
      <dt className="text-[10px] font-semibold uppercase tracking-[0.16em]">
        {label}
      </dt>
      <dd className="mt-1 font-display text-2xl font-semibold text-ink">
        {value}
      </dd>
    </div>
  );
}
