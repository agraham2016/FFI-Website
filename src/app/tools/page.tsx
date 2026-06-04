import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";
import { ToolCard } from "@/components/tools/ToolCard";
import { CTA } from "@/components/sections/CTA";
import { tools, toolCategories, featuredTools } from "@/content/tools";

export const metadata: Metadata = {
  title: "Free FFI Tools",
  description:
    "Free, plain-language tools from Foundation for Independence to help families navigate transition, DDD, ISP planning, and life in adult services.",
};

export default function ToolsIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-100 bg-gradient-to-b from-brand-50/70 via-white to-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-grid-soft mask-fade-b opacity-60"
        />
        <Container className="relative">
          <div className="max-w-3xl py-16 sm:py-20 lg:py-24">
            <Badge>
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              FFI Tools
            </Badge>
            <h1 className="mt-5 text-display-xl font-semibold text-ink">
              Tools we built for{" "}
              <span className="text-brand-700">your family</span>.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Free, no-account-required tools to help you plan, decide, and
              learn the system — whether or not you ever become an FFI client.
              Every tool is plain-language, mobile-friendly, and built to be
              used in the time you actually have.
            </p>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="flex items-center gap-3">
            <span className="eyebrow">Most-used</span>
            <span className="h-px flex-1 bg-brand-100" />
          </div>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold text-ink sm:text-3xl">
            Start here
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      {toolCategories.map((category) => {
        const items = tools.filter((tool) => tool.category === category.id);
        if (items.length === 0) return null;
        const Icon = category.icon;
        return (
          <section key={category.id} className="border-t border-brand-100 py-16 sm:py-20">
            <Container>
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <div className="inline-flex items-center justify-center rounded-2xl bg-brand-50 p-3 text-brand-700">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-ink-muted">
                    {category.description}
                  </p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
                  {items.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} />
                  ))}
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <CTA
        eyebrow="Have an idea?"
        title="What tool would help your family next?"
        description="If there's a question you keep getting asked or a worksheet you wish existed, tell us. The most-requested ideas become the next free FFI tool."
        primary={{ label: "Suggest a tool", href: "/contact" }}
        secondary={{ label: "Browse resource guides", href: "/resources" }}
      />
    </>
  );
}
