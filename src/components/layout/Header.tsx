"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { primaryNav, site } from "@/lib/site";
import { Container } from "./Container";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";
import { AuthNav } from "./AuthNav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-white/80 backdrop-blur-md transition-colors",
        scrolled && "border-brand-100/70 bg-white/95 shadow-soft"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6 sm:h-20">
          <Link
            href="/"
            className="flex items-center gap-2.5 rounded-md py-1"
            aria-label={`${site.name} home`}
          >
            <Logo className="h-9 w-9 text-brand-600" />
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="font-display text-base font-semibold text-ink">
                Foundation for Independence
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand-700">
                Arizona
              </span>
            </div>
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex lg:items-center lg:gap-1">
            {primaryNav.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              if (item.children) {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition hover:bg-brand-50 hover:text-brand-800",
                        active && "text-brand-800"
                      )}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" aria-hidden />
                    </Link>
                    <div className="invisible absolute left-0 top-full z-40 w-72 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="rounded-2xl border border-brand-100 bg-white p-2 shadow-lift">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-3 py-2.5 hover:bg-brand-50"
                          >
                            <div className="text-sm font-semibold text-ink">{child.label}</div>
                            {child.description ? (
                              <div className="mt-0.5 text-xs text-ink-muted">{child.description}</div>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium text-ink-soft transition hover:bg-brand-50 hover:text-brand-800",
                    active && "text-brand-800"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-1 lg:flex">
            <AuthNav />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-800"
            >
              Get in touch
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-soft hover:bg-brand-50 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-16 z-40 origin-top overflow-hidden border-t border-brand-100 bg-white transition-all duration-200 sm:top-20 lg:hidden",
          open ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container>
          <nav aria-label="Mobile" className="flex flex-col py-4">
            {primaryNav.map((item) => (
              <div key={item.href} className="border-b border-brand-50 last:border-0">
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-3 text-base font-medium text-ink-soft hover:text-brand-800"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mb-2 ml-3 flex flex-col gap-1 border-l-2 border-brand-100 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1.5 text-sm text-ink-muted hover:text-brand-700"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <AuthNav className="flex items-center gap-1.5 py-3 text-base font-medium text-ink-soft hover:text-brand-800" />
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-700 px-4 py-3 text-sm font-semibold text-white"
            >
              Get in touch
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
