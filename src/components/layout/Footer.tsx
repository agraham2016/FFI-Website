import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { footerNav, site } from "@/lib/site";
import { Mail, Phone, MapPin } from "lucide-react";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-100 bg-surface-alt">
      <Container>
        <div className="grid gap-12 py-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Logo className="h-12 w-12" />
              <div className="leading-tight">
                <div className="font-display text-base font-semibold text-ink">
                  Foundation for Independence
                </div>
                <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand-700">
                  Arizona
                </div>
              </div>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">
              Person-centered Supported Living and Employment Services that help individuals
              with developmental disabilities build life skills and live with greater
              independence.
            </p>

            <div className="mt-6 space-y-2 text-sm text-ink-muted">
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-start gap-2 break-all hover:text-brand-700"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>{site.contact.email}</span>
              </a>
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="flex items-center gap-2 hover:text-brand-700"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {site.contact.phone}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span>
                  {site.contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-4">
            {Object.entries(footerNav).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-sm font-semibold text-ink">{heading}</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-ink-muted transition hover:text-brand-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-ink">Stay connected</h3>
            <p className="mt-2 text-sm text-ink-muted">
              Updates as services and community supports expand.
            </p>
            <div className="mt-4">
              <NewsletterForm compact />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-brand-100 py-6 text-xs text-ink-subtle sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-brand-700">
              Privacy
            </Link>
            <Link href="/accessibility" className="hover:text-brand-700">
              Accessibility
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
