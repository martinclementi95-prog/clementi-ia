import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/config/site";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact — Réservez 30 min avec Martin Clementi",
  description:
    "Discutons de votre projet IA. Réponse sous 24 h ouvrées. Visio ou présentiel dans le Pays de Gex. Sans engagement.",
  alternates: { canonical: `${siteConfig.url}/contact` },
  openGraph: {
    title: "Contact — Réservez 30 min avec Martin Clementi",
    description:
      "Visio ou présentiel dans le Pays de Gex. Pas de pitch commercial, pas d'engagement.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <section className="pt-12 md:pt-20 pb-24 md:pb-32">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Contact", url: "/contact" },
        ])}
      />
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left col — pitch + contact direct + calendly */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="eyebrow">Réponse sous 24 h ouvrées</div>
              <h1 className="text-[2.25rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.02] tracking-[-0.035em] text-balance">
                Parlons de votre projet.
              </h1>
              <p className="text-[16px] md:text-[17px] text-muted text-pretty leading-[1.55]">
                Une idée précise, des questions, ou simplement envie d’explorer
                ce que l’IA peut apporter à votre activité — un premier échange
                est toujours utile, sans engagement.
              </p>
            </div>

            {/* Calendly card */}
            <div className="rounded-sm border border-ink/15 bg-bg-2/50 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="size-4 text-ink" strokeWidth={1.75} />
                <span className="text-[11px] uppercase tracking-wider text-muted font-medium">
                  Plus rapide
                </span>
              </div>
              <h3 className="text-[1.125rem] font-bold tracking-[-0.015em] text-ink mb-2">
                Réservez 30 min directement
              </h3>
              <p className="text-[14px] text-muted mb-5 leading-[1.55]">
                Choisissez un créneau qui vous convient — visio ou présentiel
                dans le Pays de Gex.
              </p>
              <ButtonLink
                href={siteConfig.contact.calendly}
                variant="primary"
                size="md"
                className="w-full"
              >
                Voir mes disponibilités
              </ButtonLink>
            </div>

            {/* Contact lines */}
            <div className="flex flex-col gap-px bg-ink/10 rounded-sm overflow-hidden border border-ink/10">
              <ContactRow icon={Mail} href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </ContactRow>
              <ContactRow
                icon={Phone}
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              >
                {siteConfig.contact.phone}
              </ContactRow>
              <ContactRow icon={MapPin}>
                {siteConfig.contact.city} — {siteConfig.contact.region}
              </ContactRow>
            </div>
          </div>

          {/* Right col — form */}
          <div className="lg:col-span-7">
            <div className="rounded-sm border border-ink/10 bg-bg-2/30 p-7 lg:p-10">
              <Suspense
                fallback={
                  <div className="h-96 animate-pulse rounded-sm bg-ink/5" />
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  href,
  children,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  href?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <>
      <Icon className="size-4 text-muted-2 shrink-0" strokeWidth={1.75} />
      <span>{children}</span>
    </>
  );
  const cls =
    "flex items-center gap-3 px-4 py-3.5 bg-bg text-[14px] text-ink-2";
  return href ? (
    <a href={href} className={cls + " hover:bg-bg-2 transition-colors"}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}
