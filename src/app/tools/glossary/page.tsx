import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { getTool } from "@/content/tools";
import { GlossaryClient } from "./GlossaryClient";

const tool = getTool("glossary")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function GlossaryPage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl">
            <GlossaryClient />
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Still have questions?"
        title="A real person can walk you through any of these terms."
        description="Send us a question through the contact form and we'll point you to the right resource — or set up a quick call."
        primary={{ label: "Contact our team", href: "/contact" }}
        secondary={{ label: "Read FFI guides", href: "/resources" }}
      />
    </>
  );
}
