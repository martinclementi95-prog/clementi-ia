import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Users, Building2, User } from "lucide-react";
import {
  formations,
  getFormationsByAudience,
} from "@/lib/config/formations";
import { formatPrice } from "@/lib/utils";
import { siteConfig } from "@/lib/config/site";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Formations IA — Catalogue B2B & B2C",
  description:
    "Catalogue de formations IA dans le Pays de Gex : audit IA, formation IA pour dirigeants, agents IA sur-mesure, déploiement en équipe. Programmes B2B et B2C.",
  alternates: { canonical: `${siteConfig.url}/formations` },
  openGraph: {
    title: "Formations IA — Catalogue B2B & B2C",
    description:
      "Programmes de formation IA pour PME, équipes, indépendants, étudiants et particuliers du Pays de Gex.",
    url: `${siteConfig.url}/formations`,
  },
};

export default function FormationsPage() {
  const b2b = getFormationsByAudience("b2b");
  const b2c = getFormationsByAudience("b2c");
  const base = siteConfig.url.replace(/\/$/, "");

  const formationListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Catalogue de formations IA — Clementi IA",
    url: `${base}/formations`,
    numberOfItems: formations.length,
    itemListElement: formations.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        "@id": `${base}/formations/${f.slug}`,
        name: f.title,
        url: `${base}/formations/${f.slug}`,
        description: f.tagline,
        provider: {
          "@type": "Organization",
          name: "Clementi IA",
          url: base,
        },
        offers: {
          "@type": "Offer",
          price: f.price,
          priceCurrency: "EUR",
        },
      },
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Formations", url: "/formations" },
          ]),
          formationListSchema,
        ]}
      />
      {/* Header */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-20">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="eyebrow">
                Formations · {formations.length} programmes
              </div>
              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1] tracking-[-0.035em] text-balance">
                Des formations IA conçues pour passer à{" "}
                <span className="mark-terra">l’action</span>.
              </h1>
            </div>
            <p className="lg:col-span-4 text-[16px] md:text-[17px] text-muted leading-[1.55] max-w-md">
              Que vous soyez dirigeant, indépendant, étudiant ou simplement
              curieux — chaque programme inclut un suivi personnalisé.
            </p>
          </div>
        </div>
      </section>

      <FormationsBlock
        icon={Building2}
        title="Pour les entreprises"
        subtitle="Décideurs & équipes"
        items={b2b}
      />

      <FormationsBlock
        icon={User}
        title="Pour les particuliers"
        subtitle="Sans jargon, à votre rythme — indépendants, curieux, seniors"
        items={b2c}
      />
    </>
  );
}

function FormationsBlock({
  icon: Icon,
  title,
  subtitle,
  items,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  subtitle: string;
  items: typeof formations;
}) {
  const lgCols =
    items.length >= 3 ? "lg:grid-cols-3" : items.length === 2 ? "lg:grid-cols-2" : "lg:grid-cols-1";
  const mdCols = items.length >= 2 ? "md:grid-cols-2" : "md:grid-cols-1";
  // Une offre seule ne doit pas s'étirer en bannière : on la garde à une largeur de carte.
  const widthCap = items.length === 1 ? "max-w-sm" : "";
  return (
    <section className="py-16 md:py-20 border-t border-ink/10">
      <div className="container-page">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-[12px] text-muted font-medium mb-3">
              <Icon className="size-3.5" strokeWidth={1.75} />
              {subtitle}
            </div>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-[-0.03em] leading-none">
              {title}
            </h2>
          </div>
        </div>

        <div
          className={`grid gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden ${mdCols} ${lgCols} ${widthCap}`}
        >
          {items.map((f) => (
            <Link
              key={f.slug}
              href={`/formations/${f.slug}`}
              className="group relative flex h-full flex-col bg-bg p-7 lg:p-8 transition-colors hover:bg-terra-soft"
            >
              <div className="absolute top-6 right-6 text-muted group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                <ArrowUpRight className="size-5" />
              </div>

              <div className="flex items-center gap-2 mb-5">
                <span
                  className={
                    f.audience === "b2b"
                      ? "text-[11px] font-medium px-2 py-0.5 rounded-sm bg-ink text-bg"
                      : "text-[11px] font-medium px-2 py-0.5 rounded-sm border border-ink/20 text-ink"
                  }
                >
                  {f.audience === "b2b" ? "Entreprise" : "Particulier"}
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-sm bg-ink/5 text-muted">
                  {f.level}
                </span>
              </div>

              <h3 className="text-[18px] font-bold text-ink mb-2 text-balance pr-8 leading-[1.25]">
                {f.title}
              </h3>
              <p className="text-[14px] text-muted leading-[1.55] mb-7 text-pretty flex-1">
                {f.tagline}
              </p>

              <div className="space-y-3 mt-auto">
                <div className="flex items-center gap-4 text-[12px] text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {f.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="size-3.5" />
                    {f.groupSize.split("—")[0]}
                  </span>
                </div>
                <hr className="rule" />
                <div className="flex items-baseline justify-between">
                  <span className="text-[1.25rem] font-bold tracking-[-0.02em] text-ink">
                    {formatPrice(f.price)}
                  </span>
                  <span className="text-[12px] text-muted-2">{f.priceUnit}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
