import type { Metadata } from "next";
import Image from "next/image";
import { Building2, GraduationCap, Rocket, Compass } from "lucide-react";
import { siteConfig } from "@/lib/config/site";
import { CTA } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "À propos — Martin Clementi, fondateur de Clementi IA",
  description:
    "Martin Clementi, fondateur de Clementi IA. Entrepreneur multi-sociétés (France & Suisse), master en finance, partenaire IA des PME et particuliers du Pays de Gex.",
  alternates: { canonical: `${siteConfig.url}/a-propos` },
  openGraph: {
    title: "À propos — Martin Clementi, fondateur de Clementi IA",
    description:
      "Entrepreneur installé dans le Pays de Gex, je conçois et déploie des projets IA pour des entreprises de toutes tailles.",
    url: `${siteConfig.url}/a-propos`,
    type: "profile",
  },
};

const timeline = [
  {
    icon: GraduationCap,
    year: "Formation",
    title: "Trois cursus complémentaires",
    text: "Licence en management, Bachelor en commerce international, Master en finance. Une base solide pour comprendre les enjeux stratégiques, opérationnels et financiers d’une entreprise.",
  },
  {
    icon: Rocket,
    year: "Premiers pas",
    title: "Startups suisses",
    text: "Expériences opérationnelles au sein de plusieurs startups en Suisse. Apprentissage du rythme produit, de la culture du résultat et des standards d’exigence du tissu économique helvétique.",
  },
  {
    icon: Building2,
    year: "Entrepreneuriat",
    title: "Plusieurs sociétés créées",
    text: "Fondation et développement de plusieurs sociétés en France et en Suisse. Chaque création m’a appris à piloter une activité de bout en bout : du lancement commercial à la finance, en passant par le recrutement et la technique.",
  },
  {
    icon: Compass,
    year: "Aujourd’hui",
    title: "Partenaire IA du Pays de Gex",
    text: "Je transmets cette expérience aux PME et aux particuliers du Pays de Gex. Mon objectif : rendre l’IA vraiment utilisable par le tissu économique local, sans qu’on ait besoin d’être technicien pour s’en servir.",
  },
];

export default function AProposPage() {
  return (
    <>
      <JsonLd
        data={[
          personSchema(),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "À propos", url: "/a-propos" },
          ]),
        ]}
      />
      {/* Header */}
      <section className="pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="eyebrow">Fondateur</div>
              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1] tracking-[-0.035em] text-balance">
                Je m’appelle Martin Clementi.
              </h1>
              <p className="text-[17px] md:text-[19px] text-ink-2 text-pretty leading-[1.55] max-w-xl">
                {siteConfig.founder.bio}
              </p>
              <p className="text-[15px] md:text-[16px] text-muted text-pretty leading-[1.6] max-w-xl">
                J’ai créé Clementi IA pour mettre cette expérience au service
                des entreprises et des particuliers du Pays de Gex. L’idée :
                faire de notre territoire l’un des mieux outillés de France sur
                l’usage quotidien de l’IA.
              </p>
            </div>

            <div className="lg:col-span-5">
              <figure className="flex flex-col gap-4">
                <div className="aspect-[4/5] w-full overflow-hidden relative rounded-lg bg-terra-soft">
                  <Image
                    src="/images/DSC07120_Edited.JPG"
                    alt="Portrait de Martin Clementi, fondateur de Clementi IA"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="text-[12px] text-muted">
                  Martin Clementi · Pays de Gex
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24 border-t border-ink/10">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-5">Parcours</div>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-[-0.03em] leading-[1.05]">
              Un parcours conçu pour comprendre les PME de l’intérieur.
            </h2>
          </div>

          <ol className="flex flex-col">
            {timeline.map((t, i) => (
              <li
                key={t.year}
                className="grid gap-6 lg:grid-cols-12 items-start py-8 border-t border-ink/10 first:border-t-0"
              >
                <div className="lg:col-span-3 flex items-center gap-4">
                  <div className="inline-flex size-10 items-center justify-center rounded-sm bg-terra-soft text-ink shrink-0">
                    <t.icon className="size-4" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="tabular text-[11px] text-muted-2 font-medium block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[14px] font-semibold text-ink">
                      {t.year}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-9 lg:pl-6">
                  <h3 className="text-[1.25rem] md:text-[1.375rem] font-bold text-ink mb-2 tracking-[-0.015em]">
                    {t.title}
                  </h3>
                  <p className="text-[15px] md:text-[16px] text-muted leading-[1.6] text-pretty max-w-2xl">
                    {t.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Passion */}
      <section className="py-20 md:py-24 border-t border-ink/10">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="eyebrow">Ce qui me passionne</div>
            </div>
            <div className="lg:col-span-8 max-w-2xl">
              <p className="text-[1.5rem] md:text-[1.875rem] font-bold tracking-[-0.025em] leading-[1.2] text-ink text-balance">
                Pour la première fois, plus aucune{" "}
                <span className="mark-terra">barrière technique</span>.
              </p>
              <p className="mt-7 text-[16px] md:text-[17px] text-muted leading-[1.6] text-pretty">
                Je trouve ça fascinant. Avec quelques bases solides et les bons
                réflexes, on construit aujourd’hui en quelques jours des outils
                qui demandaient une équipe entière et des mois de travail il y a
                deux ans : un assistant qui répond aux clients, un tableau de
                bord qui se met à jour seul, un devis prêt en deux minutes.
              </p>
              <p className="mt-5 text-[16px] md:text-[17px] text-muted leading-[1.6] text-pretty">
                C’est cette explosion de possibilités qui me passionne, bien
                plus que l’effet de mode. Un dirigeant de PME, un indépendant,
                un étudiant, un simple curieux : chacun peut désormais accomplir
                des choses qui paraissaient hors de portée, à condition de
                savoir s’y prendre.{" "}
                <span className="text-ink">
                  C’est exactement pour ça que je transmets.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conviction */}
      <section className="py-20 md:py-24 border-t border-ink/10">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="eyebrow">Ma conviction</div>
            </div>
            <div className="lg:col-span-8 max-w-2xl">
              <p className="text-[1.5rem] md:text-[1.875rem] font-bold tracking-[-0.025em] leading-[1.2] text-ink text-balance">
                Bientôt, savoir se servir de l’IA sera un{" "}
                <span className="mark-terra">standard d’exigence</span>.
              </p>
              <p className="mt-7 text-[16px] md:text-[17px] text-muted leading-[1.6] text-pretty">
                Les entreprises qui s’y mettent ces deux prochaines années ne
                prendront pas juste un peu d’avance : elles fixeront le niveau
                attendu sur leur marché. Mon métier, c’est de m’assurer que les
                PME du Pays de Gex en fassent partie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
