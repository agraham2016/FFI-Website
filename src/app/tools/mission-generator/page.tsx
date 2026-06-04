import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { getTool } from "@/content/tools";
import { GeneratorClient } from "./GeneratorClient";

const tool = getTool("mission-generator")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function MissionGeneratorPage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto max-w-6xl">
            <GeneratorClient />
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="Share something true"
        title="If a quote helps a family, share it."
        description="The cards are free to use. Feel free to share them anywhere — and tag us if you do."
        primary={{ label: "Read FFI guides", href: "/resources" }}
        secondary={{ label: "About FFI", href: "/about" }}
      />
    </>
  );
}
