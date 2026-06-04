import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section">
      <Container size="md">
        <div className="rounded-3xl border border-brand-100 bg-surface-alt/60 p-10 text-center sm:p-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            404
          </p>
          <h1 className="mt-4 text-display-lg font-semibold">
            We couldn&apos;t find that page.
          </h1>
          <p className="mt-4 text-base text-ink-muted">
            The link may be broken or the page may have moved. Let&apos;s get you back
            on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" size="lg">
              Back to home
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href="/contact" size="lg" variant="outline">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
