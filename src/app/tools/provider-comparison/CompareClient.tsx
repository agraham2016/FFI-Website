"use client";

import { useEffect, useState } from "react";
import { Printer, RotateCcw } from "lucide-react";
import { compareGroups, interviewQuestions } from "@/content/providerCompare";

const STORAGE_KEY = "ffi.provider-compare.v1";
const COL_KEYS = ["a", "b", "c"] as const;
type ColKey = (typeof COL_KEYS)[number];

type Values = Record<string, Record<ColKey, string>>;

export function CompareClient() {
  const [values, setValues] = useState<Values>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") setValues(parsed);
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    } catch {
      /* ignore */
    }
  }, [values, hydrated]);

  const set = (rowId: string, col: ColKey, v: string) =>
    setValues((s) => ({
      ...s,
      [rowId]: { ...(s[rowId] ?? { a: "", b: "", c: "" }), [col]: v },
    }));

  const reset = () => {
    if (window.confirm("Clear all provider notes? This can't be undone.")) {
      setValues({});
    }
  };

  return (
    <div className="space-y-12">
      <div className="rounded-2xl border border-brand-200 bg-brand-50/40 p-5 text-sm text-ink-muted print:hidden">
        Compare up to <strong className="text-ink">three providers side by side</strong>.
        Notes save automatically on this device.
      </div>

      <div className="overflow-x-auto rounded-2xl border border-brand-100 bg-white shadow-soft">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <thead className="bg-brand-50/50 text-xs uppercase tracking-[0.14em] text-brand-800">
            <tr>
              <th className="w-1/4 px-4 py-3 font-semibold">Field</th>
              {COL_KEYS.map((c, i) => (
                <th key={c} className="w-1/4 px-4 py-3 font-semibold">
                  Provider {String.fromCharCode(65 + i)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compareGroups.map((group) => (
              <FragmentGroup
                key={group.id}
                title={group.title}
                description={group.description}
                rows={group.rows}
                values={values}
                onChange={set}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:p-8 print:break-inside-avoid">
        <h2 className="font-display text-xl font-semibold text-ink">
          Questions worth asking every provider
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          Pick the ones that matter most for your situation. The answers tell
          you a lot.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {interviewQuestions.map((bucket) => (
            <div key={bucket.theme}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                {bucket.theme}
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-muted">
                {bucket.questions.map((q) => (
                  <li key={q}>“{q}”</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
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

function FragmentGroup({
  title,
  description,
  rows,
  values,
  onChange,
}: {
  title: string;
  description?: string;
  rows: { id: string; label: string; rows?: number; hint?: string }[];
  values: Values;
  onChange: (rowId: string, col: ColKey, v: string) => void;
}) {
  return (
    <>
      <tr className="border-t border-brand-100 bg-brand-50/30">
        <th
          colSpan={4}
          scope="colgroup"
          className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.14em] text-brand-800"
        >
          <span>{title}</span>
          {description ? (
            <span className="ml-2 font-normal normal-case text-ink-muted">
              — {description}
            </span>
          ) : null}
        </th>
      </tr>
      {rows.map((row) => (
        <tr key={row.id} className="border-t border-brand-100 align-top">
          <th scope="row" className="px-4 py-3 text-sm font-medium text-ink">
            {row.label}
            {row.hint ? (
              <div className="mt-1 text-xs font-normal text-ink-subtle">
                {row.hint}
              </div>
            ) : null}
          </th>
          {COL_KEYS.map((c) => {
            const v = values[row.id]?.[c] ?? "";
            const id = `${row.id}-${c}`;
            return (
              <td key={c} className="px-4 py-3">
                {row.rows && row.rows > 1 ? (
                  <textarea
                    id={id}
                    rows={row.rows}
                    value={v}
                    onChange={(e) => onChange(row.id, c, e.target.value)}
                    className="block w-full rounded-lg border border-brand-200 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  />
                ) : (
                  <input
                    id={id}
                    type="text"
                    value={v}
                    onChange={(e) => onChange(row.id, c, e.target.value)}
                    className="block w-full rounded-lg border border-brand-200 bg-white px-3 py-2 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                  />
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </>
  );
}
