import { CheckCircle2, Lightbulb } from "lucide-react";
import type { ArticleSection } from "@/content/articles";

export function ArticleBody({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="space-y-14">
      {sections.map((section) => (
        <section key={section.heading} className="scroll-mt-24">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-[28px]">
            {section.heading}
          </h2>

          {section.paragraphs?.length ? (
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft">
              {section.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : null}

          {section.bullets?.length ? (
            <ul className="mt-6 space-y-4">
              {section.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                  />
                  <p className="text-base leading-relaxed text-ink-soft">
                    {bullet.label ? (
                      <strong className="font-semibold text-ink">
                        {bullet.label}{" "}
                      </strong>
                    ) : null}
                    {bullet.body}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}

          {section.checklist?.length ? (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {section.checklist.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-brand-100 bg-white p-4 shadow-soft"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-700"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed text-ink-soft">{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {section.callout ? (
            <aside className="mt-8 overflow-hidden rounded-2xl border border-accent-200 bg-accent-50/60 p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-accent-100 p-2 text-accent-700">
                  <Lightbulb className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {section.callout.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {section.callout.body}
                  </p>
                </div>
              </div>
            </aside>
          ) : null}
        </section>
      ))}
    </div>
  );
}
