"use client";

import { useEffect, useState } from "react";
import { Printer, RotateCcw } from "lucide-react";
import { ispSections } from "@/content/ispPrep";

const STORAGE_KEY = "ffi.isp-prep.v1";

export function IspClient() {
  const [values, setValues] = useState<Record<string, string>>({});
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

  const set = (id: string, v: string) =>
    setValues((s) => ({ ...s, [id]: v }));

  const reset = () => {
    if (window.confirm("Clear all answers? This can't be undone.")) {
      setValues({});
    }
  };

  return (
    <div className="space-y-12">
      <div className="rounded-2xl border border-brand-200 bg-brand-50/40 p-5 text-sm text-ink-muted print:hidden">
        <strong className="text-ink">Saved on this device.</strong> Your
        answers stay in your browser — nothing is sent to a server. When you
        print or save as PDF, only the filled fields appear.
      </div>

      {ispSections.map((section) => (
        <section
          key={section.id}
          aria-labelledby={`${section.id}-heading`}
          className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:p-8 print:break-inside-avoid"
        >
          <h2
            id={`${section.id}-heading`}
            className="font-display text-xl font-semibold text-ink sm:text-2xl"
          >
            {section.title}
          </h2>
          <p className="mt-2 text-sm text-ink-muted">{section.intro}</p>

          <div className="mt-6 space-y-6">
            {section.fields.map((field) => {
              const value = values[field.id] ?? "";
              return (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-ink"
                  >
                    {field.label}
                  </label>
                  <p className="mt-1 text-xs text-ink-subtle">{field.prompt}</p>
                  {field.rows === 1 ? (
                    <input
                      id={field.id}
                      type="text"
                      value={value}
                      onChange={(e) => set(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      className="mt-2 block w-full rounded-xl border border-brand-200 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40 print:border-b print:border-l-0 print:border-r-0 print:border-t-0 print:rounded-none print:px-0"
                    />
                  ) : (
                    <textarea
                      id={field.id}
                      rows={field.rows}
                      value={value}
                      onChange={(e) => set(field.id, e.target.value)}
                      placeholder={field.placeholder}
                      className="mt-2 block w-full rounded-xl border border-brand-200 bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-subtle focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}

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
