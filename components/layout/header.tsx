"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Logo, Wordmark } from "@/components/brand/logo";

const nav = [
  { href: "/formations", label: "Formations" },
  { href: "/conseil", label: "Conseil" },
  { href: "/blog", label: "Articles" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-ink/8"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" aria-label="Clementi IA" className="flex items-center gap-2.5">
          <Logo />
          <Wordmark />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[14px] transition-colors relative",
                  active ? "text-ink" : "text-[var(--color-muted)] hover:text-ink",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-ink" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center">
          <ButtonLink href="/contact" variant="primary" size="sm">
            Réserver un échange
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex size-10 items-center justify-center rounded-full text-ink hover:bg-white/40"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[rgb(10_10_10/0.06)] bg-bg">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 py-3 text-base text-ink-2"
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink
              href="/contact"
              variant="primary"
              size="md"
              className="mt-3"
            >
              Réserver un échange
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
