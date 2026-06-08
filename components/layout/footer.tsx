import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { Logo, Wordmark } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/badge";

export function Footer() {
  return (
    <footer className="mt-32 pt-20 pb-12 border-t border-[rgb(10_10_10/0.08)]">
      <Container>
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <Logo />
              <Wordmark />
            </Link>
            <p className="text-[15px] text-[var(--color-muted)] leading-relaxed max-w-sm">
              Formation, audit et accompagnement IA pour les entreprises et
              habitants du Pays de Gex. Un partenaire de confiance, ancré
              localement.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                aria-label="LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded-full border border-ink/15 text-ink-2 hover:bg-terra-soft hover:border-terra hover:text-ink transition-colors"
              >
                <Linkedin className="size-4" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <Label className="mb-5 block">Le site</Label>
            <ul className="space-y-3 text-[15px]">
              <FooterLink href="/formations">Formations</FooterLink>
              <FooterLink href="/conseil">Conseil & accompagnement</FooterLink>
              <FooterLink href="/a-propos">À propos</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div className="md:col-span-4">
            <Label className="mb-5 block">L'atelier</Label>
            <ul className="space-y-3 text-[15px] text-ink-2">
              <li className="flex items-start gap-2.5">
                <Mail className="size-4 mt-1 text-[var(--color-muted)] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-ink transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="size-4 mt-1 text-[var(--color-muted)] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="hover:text-ink transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 mt-1 text-[var(--color-muted)] shrink-0" />
                <span>
                  {siteConfig.contact.city}
                  <br />
                  <span className="text-[var(--color-muted)]">
                    {siteConfig.contact.region}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="rule my-12" />

        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-3 text-xs text-[var(--color-muted)]">
          <p>
            © {new Date().getFullYear()} {siteConfig.legal.company}.
          </p>
          <div className="flex items-center gap-4">
            <span>{siteConfig.legal.qualiopi}</span>
            <span className="hidden md:inline opacity-40">·</span>
            <Link href="/mentions-legales" className="hover:text-ink">
              Mentions légales
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-ink-2 hover:text-ink transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
