import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ToolHeader } from "@/components/tools/ToolHeader";
import { CTA } from "@/components/sections/CTA";
import { getTool } from "@/content/tools";
import { CompareClient } from "./CompareClient";

const tool = getTool("provider-comparison")!;

export const metadata: Metadata = {
  title: tool.title,
  description: tool.longBlurb,
};

export default function ProviderComparePage() {
  return (
    <>
      <ToolHeader tool={tool} />

      <section className="section">
        <Container>
          <div className="mx-auto max-w-6xl">
            <CompareClient />
          </div>
        </Container>
      </section>

      <CTA
        eyebrow="One of the providers you're considering?"
        title="Ask us anything — even if you go with someone else."
        description="A good provider should welcome the comparison. We'd rather you choose the right fit, period."
        primary={{ label: "Schedule a conversation", href: "/contact" }}
        secondary={{ label: "Read FFI's approach", href: "/about" }}
      />
    </>
  );
}
