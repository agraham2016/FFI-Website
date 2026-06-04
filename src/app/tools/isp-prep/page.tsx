import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { getTool } from "@/content/tools";
import { ispSections } from "@/content/ispPrep";
import { IspClient } from "./IspClient";

const tool = getTool("isp-prep")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function IspPrepPage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-3 print:hidden">
              <nav
                aria-label="Worksheet sections"
                className="lg:sticky lg:top-24 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  Worksheet sections
                </div>
                <ol className="mt-3 space-y-1.5 text-sm">
                  {ispSections.map((s, i) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}-heading`}
                        className="flex items-baseline gap-2 rounded-lg px-2 py-1.5 text-ink-muted hover:bg-brand-50 hover:text-brand-800"
                      >
                        <span className="font-mono text-[10px] text-brand-700">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
            <div className="lg:col-span-9">
              <IspClient />
            </div>
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Want a real person to walk through it with you?"
        title="We've sat through a lot of ISPs."
        description="If you'd like a quick prep call before your meeting, our team is happy to help — even if FFI isn't your provider yet."
        primary={{ label: "Reach out", href: "/contact" }}
        secondary={{ label: "Open the Skills Inventory", href: "/tools/independence-skills" }}
      />
    </>
  );
}
