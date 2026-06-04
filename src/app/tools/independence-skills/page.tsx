import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { getTool } from "@/content/tools";
import { skillCategories } from "@/content/skillsInventory";
import { InventoryClient } from "./InventoryClient";

const tool = getTool("independence-skills")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function SkillsInventoryPage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
            <aside className="lg:col-span-3 print:hidden">
              <nav
                aria-label="Skill categories"
                className="lg:sticky lg:top-24 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  Jump to section
                </div>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {skillCategories.map((c) => (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        className="block rounded-lg px-2 py-1.5 text-ink-muted hover:bg-brand-50 hover:text-brand-800"
                      >
                        {c.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
            <div className="lg:col-span-9">
              <InventoryClient />
            </div>
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="What now?"
        title="Bring your snapshot to your next ISP meeting."
        description="The skills you tagged 'with prompts' or 'not yet' are exactly the kind of goals an ISP can target. Want help building a plan around them? We can walk through it together."
        primary={{ label: "Talk with our team", href: "/contact" }}
        secondary={{ label: "Open the ISP Prep Worksheet", href: "/tools/isp-prep" }}
      />
    </>
  );
}
