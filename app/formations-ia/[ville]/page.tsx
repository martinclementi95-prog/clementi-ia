import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  cityServiceSchema,
  courseSchema,
} from "@/lib/schema";
import { getCityProfile, getCityProfiles } from "@/lib/config/cities";
import { getFormation, formationPriceLabel } from "@/lib/config/formations";
import { siteConfig } from "@/lib/config/site";

export async function generateStaticParams() {
  return getCityProfiles().map((c) => ({ ville: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ville: string }>;
}): Promise<Metadata> {
  const { ville } = await params;
  const city = getCityProfile(ville);
  if (!city) return {};

  const canonical = `${siteConfig.url}/formations-ia/${city.slug}`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url: canonical,
      type: "article",
    },
    other: {
      "geo.placename": city.name,
      "geo.region": "FR-01",
      "geo.position": `${city.lat};${city.lng}`,
      ICBM: `${city.lat}, ${city.lng}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ ville: string }>;
}) {
  const { ville } = await params;
  const city = getCityProfile(ville);
  if (!city) notFound();

  const formation = getFormation(city.recommendedFormationSlug);
  const otherCities = getCityProfiles()
    .filter((c) => c.slug !== city.slug)
    .slice(0, 6);

  return (
    <>
      <JsonLd
        data={[
          cityServiceSchema(city.name, { lat: city.lat, lng: city.lng }),
          ...(formation ? [courseSchema(formation)] : []),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Formations par ville", url: "/formations-ia" },
            {
              name: `Formation IA à ${city.name}`,
              url: `/formations-ia/${city.slug}`,
            },
          ]),
        ]}
      />

      {/* Header */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-20">
        <div className="container-page">
          <Link
            href="/formations-ia"
            className="inline-flex items-center gap-2 text-[13px] text-muted hover:text-ink transition-colors mb-10"
          >
            <MapPin className="size-3.5" />
            Toutes les villes du Pays de Gex
          </Link>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="eyebrow">
                {city.name} · {city.postalCode} · {city.population}
              </div>
              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.02] tracking-[-0.035em] text-balance">
                {city.h1}
              </h1>
              <p className="text-[17px] md:text-[19px] text-muted leading-[1.55] max-w-xl text-pretty">
                {city.heroLead}
              </p>
            </div>
            <div className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-ink/10">
              <p className="eyebrow mb-3">Repères locaux</p>
              <p className="text-[14px] text-muted leading-[1.65] text-pretty">
                {city.localProof}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Identité + Économie */}
      <section className="py-16 md:py-20 border-t border-ink/10">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-5">L'identité de {city.name}</div>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-[-0.03em] leading-[1.1] text-balance">
                Qui travaille à {city.name}.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col gap-6 max-w-2xl">
              <p className="text-[1rem] md:text-[1.0625rem] leading-[1.65] text-ink-2 text-pretty">
                {city.identity}
              </p>
              <p className="text-[1rem] md:text-[1.0625rem] leading-[1.65] text-muted text-pretty">
                {city.economicReality}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi l'IA ici */}
      <section className="py-16 md:py-20 border-t border-ink/10">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="eyebrow">Pourquoi l'IA ici</div>
            </div>
            <div className="lg:col-span-8 max-w-2xl">
              <p className="text-[1.5rem] md:text-[1.75rem] font-bold tracking-[-0.025em] leading-[1.2] text-ink text-balance">
                {city.whyAiHere}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage spécifiques */}
      <section className="py-20 md:py-24 border-t border-ink/10">
        <div className="container-page">
          <div className="max-w-3xl mb-14">
            <div className="eyebrow mb-5">
              Cas d'usage IA pour {city.name}
            </div>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-[-0.03em] leading-[1.1] text-balance">
              Ce qui peut concrètement tourner chez vous dès le mois prochain.
            </h2>
          </div>

          <ol className="grid gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden md:grid-cols-2">
            {city.useCases.map((uc, i) => (
              <li key={uc.title} className="bg-bg p-7 lg:p-8">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="tabular text-[12px] text-muted-2 font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[17px] md:text-[18px] font-bold text-ink leading-tight">
                    {uc.title}
                  </h3>
                </div>
                <p className="pl-8 text-[14px] md:text-[15px] text-muted leading-[1.6] text-pretty">
                  {uc.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Formation recommandée */}
      {formation && (
        <section className="py-20 md:py-24 border-t border-ink/10 bg-bg-2/40">
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <div className="eyebrow mb-5">
                  Formation recommandée pour {city.name}
                </div>
                <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-[-0.03em] leading-[1.05] text-balance mb-6">
                  {formation.title}
                </h2>
                <p className="text-[15px] md:text-[16px] text-muted leading-[1.65] text-pretty">
                  {city.recommendedFormationRationale}
                </p>
              </div>

              <div className="lg:col-span-7 lg:pl-6 lg:border-l lg:border-ink/10">
                <p className="text-[15px] md:text-[16px] text-ink-2 leading-[1.6] text-pretty mb-6 max-w-xl">
                  {formation.tagline}
                </p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8 text-[13px]">
                  <div>
                    <dt className="text-muted mb-1">Format</dt>
                    <dd className="font-semibold text-ink">
                      {formation.format}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted mb-1">Durée</dt>
                    <dd className="font-semibold text-ink">
                      {formation.duration}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted mb-1">Groupe</dt>
                    <dd className="font-semibold text-ink">
                      {formation.groupSize}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted mb-1">Tarif</dt>
                    <dd className="font-semibold text-ink">
                      {formationPriceLabel(formation)}{" "}
                      <span className="text-muted-2 font-normal text-[11px]">
                        {formation.priceUnit}
                      </span>
                    </dd>
                  </div>
                </dl>
                <div className="flex flex-col sm:flex-row gap-3">
                  <ButtonLink
                    href={`/formations/${formation.slug}`}
                    variant="primary"
                    size="md"
                  >
                    Voir la fiche complète
                    <ArrowUpRight className="size-4" />
                  </ButtonLink>
                  <ButtonLink
                    href={`/contact?formation=${formation.slug}&ville=${city.slug}`}
                    variant="outline"
                    size="md"
                  >
                    Demander un devis pour {city.name}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Closing angle + CTA */}
      <section className="py-20 md:py-24 border-t border-ink/10">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8 max-w-2xl">
              <div className="eyebrow mb-5">{city.name} · prochaine étape</div>
              <p className="text-[1.5rem] md:text-[1.875rem] font-bold tracking-[-0.025em] leading-[1.2] text-ink text-balance">
                {city.closingAngle}
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Échanger 30 min
                <ArrowUpRight className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Maillage interne — autres villes */}
      <section className="py-20 md:py-24 border-t border-ink/10">
        <div className="container-page">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div>
              <div className="eyebrow mb-4">Autres communes du Pays de Gex</div>
              <h2 className="text-[1.5rem] md:text-[1.875rem] font-bold tracking-[-0.025em] leading-[1.1]">
                Formations IA disponibles aussi à...
              </h2>
            </div>
          </div>

          <ul className="grid gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden md:grid-cols-2 lg:grid-cols-3">
            {otherCities.map((c) => (
              <li key={c.slug} className="bg-bg">
                <Link
                  href={`/formations-ia/${c.slug}`}
                  className="group flex items-baseline justify-between gap-4 p-6 hover:bg-terra-soft transition-colors"
                >
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-2 mb-1">
                      {c.postalCode}
                    </div>
                    <h3 className="text-[1rem] font-bold text-ink leading-tight">
                      Formation IA à {c.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="size-4 text-muted group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
