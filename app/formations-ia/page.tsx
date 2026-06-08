import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { getCityProfiles } from "@/lib/config/cities";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Formation IA dans le Pays de Gex — toutes les communes",
  description:
    "Formation IA, audit et accompagnement dans chaque commune du Pays de Gex : Gex, Saint-Genis-Pouilly, Divonne-les-Bains, Prévessin-Moëns, Ornex, Thoiry, Sergy, Cessy, Versonnex.",
  alternates: { canonical: `${siteConfig.url}/formations-ia` },
  openGraph: {
    title: "Formation IA dans le Pays de Gex — toutes les communes",
    description:
      "Une page dédiée par commune avec cas d'usage, formation recommandée et contexte économique local.",
    url: `${siteConfig.url}/formations-ia`,
  },
};

export default function CitiesIndexPage() {
  const cities = getCityProfiles();

  const cityListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Formation IA dans le Pays de Gex — toutes les communes",
    url: `${siteConfig.url}/formations-ia`,
    numberOfItems: cities.length,
    itemListElement: cities.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/formations-ia/${c.slug}`,
        name: `Formation IA à ${c.name}`,
        url: `${siteConfig.url}/formations-ia/${c.slug}`,
        description: c.heroLead,
        areaServed: { "@type": "City", name: c.name },
      },
    })),
  };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Formations par ville", url: "/formations-ia" },
          ]),
          cityListSchema,
        ]}
      />

      <section className="pt-12 md:pt-20 pb-12 md:pb-16">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="eyebrow">
                Couverture · {cities.length} communes
              </div>
              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1] tracking-[-0.035em] text-balance">
                Formation IA dans tout le{" "}
                <span className="mark-terra">Pays de Gex</span>.
              </h1>
            </div>
            <p className="lg:col-span-4 text-[16px] md:text-[17px] text-muted leading-[1.55] max-w-md">
              Chaque commune a son tissu économique, sa réalité, ses cas
              d'usage IA évidents. Une page par ville, pensée pour ce qui s'y
              passe vraiment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-ink/10">
        <div className="container-page">
          <ul className="grid gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden md:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <li key={c.slug} className="bg-bg">
                <Link
                  href={`/formations-ia/${c.slug}`}
                  className="group flex h-full flex-col gap-3 p-7 lg:p-8 hover:bg-terra-soft transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="flex items-center gap-2 text-[12px] text-muted-2">
                      <MapPin className="size-3.5" strokeWidth={1.75} />
                      {c.postalCode}
                    </div>
                    <ArrowUpRight className="size-4 text-muted group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h2 className="text-[1.25rem] md:text-[1.375rem] font-bold text-ink leading-tight">
                    Formation IA à {c.name}
                  </h2>
                  <p className="text-[14px] text-muted leading-[1.55] text-pretty">
                    {c.heroLead}
                  </p>
                  <div className="mt-auto pt-3 text-[12px] text-muted-2">
                    {c.population}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
