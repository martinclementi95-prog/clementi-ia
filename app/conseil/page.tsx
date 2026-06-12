import type { Metadata } from "next";
import { ArrowUpRight, Briefcase, Cpu, Workflow, Sparkles, ShieldCheck, GitBranch } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { CTA } from "@/components/sections/cta";
import { siteConfig } from "@/lib/config/site";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Conseil & Accompagnement IA pour PME — Pays de Gex",
  description:
    "Accompagnement IA sur-mesure pour PME : du cadrage au déploiement d'outils concrets. Chantiers, accompagnement mensuel, projets sur-mesure — automatisations, agents IA, RGPD.",
  alternates: { canonical: `${siteConfig.url}/conseil` },
  openGraph: {
    title: "Conseil & Accompagnement IA pour PME — Pays de Gex",
    description:
      "Du cadrage au déploiement d'outils concrets dans votre PME, construits avec vos équipes — avec un interlocuteur unique.",
    url: `${siteConfig.url}/conseil`,
  },
};

const services = [
  {
    icon: Briefcase,
    title: "Cadrage & stratégie IA",
    text: "On identifie ensemble vos cas d’usage à plus fort impact, et le premier outil concret à construire.",
  },
  {
    icon: Workflow,
    title: "Déploiement d’automatisations",
    text: "Conception et mise en production d’automatisations IA (Make, n8n, Zapier connectés à une IA). De la documentation client à la qualification des prospects.",
  },
  {
    icon: Cpu,
    title: "Agents IA sur-mesure",
    text: "Création d’assistants IA spécialisés à votre métier : un chatbot interne, un agent qui épaule vos commerciaux, un assistant pour vos équipes au quotidien.",
  },
  {
    icon: Sparkles,
    title: "Conduite du changement",
    text: "Formation des équipes, accompagnement des managers, mesure de l’impact. Pour que vos équipes s’approprient vraiment les outils, au lieu de les contourner.",
  },
  {
    icon: ShieldCheck,
    title: "Gouvernance & RGPD",
    text: "Politique d’usage IA, sécurisation des données, choix souverains (modèles européens, hébergement français).",
  },
  {
    icon: GitBranch,
    title: "Intégration métier",
    text: "Connexion de l’IA à vos outils existants : CRM, ERP, suite Microsoft / Google, outils sectoriels.",
  },
];

const packs = [
  {
    name: "Le Chantier",
    duration: "À partir d’1 journée",
    price: "À partir de 1 500 €",
    description:
      "On choisit un problème concret et on construit ensemble l’outil qui le résout — déployé, à votre nom. Vous repartez avec l’outil et le savoir-faire.",
    features: [
      "Conception de l’outil avec vous",
      "Vous aux commandes, je vous coache",
      "Mise en ligne et hébergement inclus",
      "Outil livré dans vos comptes",
    ],
    highlighted: false,
  },
  {
    name: "L’Accompagnement IA",
    duration: "6 mois, renouvelable",
    price: "800 € / mois",
    description:
      "Le format de référence pour intégrer l’IA durablement : un nouvel outil construit chaque mois, vos équipes autonomes, un accès direct au quotidien.",
    features: [
      "1 outil construit et mesuré par mois",
      "Montée en autonomie de l’équipe",
      "Accès direct WhatsApp (< 24 h ouvrées)",
      "Revue stratégique trimestrielle",
      "Vos outils à votre nom, sans dépendance",
    ],
    highlighted: true,
  },
  {
    name: "Sur-mesure",
    duration: "Variable",
    price: "Sur devis",
    description:
      "Pour un projet d’ampleur : back-office complet, base de données, plateforme IA propriétaire. On cadre, on construit, on déploie ensemble.",
    features: [
      "Cadrage approfondi",
      "Développement et déploiement complets",
      "Base de données & hébergement",
      "Prise en main par vos équipes",
    ],
    highlighted: false,
  },
];

export default function ConseilPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Conseil & accompagnement", url: "/conseil" },
        ])}
      />
      {/* Header */}
      <section className="pt-12 md:pt-20 pb-20 md:pb-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="eyebrow">Conseil & accompagnement</div>
              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1] tracking-[-0.035em] text-balance">
                Plus qu’une formation,{" "}
                <span className="mark-terra">un partenaire</span> IA.
              </h1>
            </div>
            <p className="lg:col-span-4 text-[16px] md:text-[17px] text-muted leading-[1.55] max-w-md">
              Mes interventions ne s’arrêtent pas à une présentation
              PowerPoint. Du diagnostic à la mise en production, je construis
              moi-même les solutions, avec vos équipes.
            </p>
          </div>
          <div className="mt-10">
            <ButtonLink href="/contact" variant="primary" size="lg">
              Discuter de votre projet
              <ArrowUpRight className="size-4" />
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-24 border-t border-ink/10">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 mb-14">
            <div className="lg:col-span-4">
              <div className="eyebrow mb-5">Six domaines</div>
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-[-0.03em] leading-[1.05]">
                Une offre intégrée, de la stratégie au déploiement.
              </h2>
            </div>
            <p className="lg:col-span-7 lg:col-start-6 text-[15px] md:text-[16px] text-muted leading-[1.6] max-w-xl">
              Vous travaillez avec un seul interlocuteur, du début à la fin —
              moi.
            </p>
          </div>

          <div className="grid gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group bg-bg p-7 lg:p-8 hover:bg-terra-soft transition-colors">
                <s.icon className="size-5 text-ink mb-5" strokeWidth={1.5} />
                <h3 className="text-[16px] font-bold text-ink mb-2">
                  {s.title}
                </h3>
                <p className="text-[14px] text-muted leading-[1.55]">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packs */}
      <section className="py-20 md:py-24 border-t border-ink/10">
        <div className="container-page">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-5">Formats d’intervention</div>
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-[-0.03em] leading-[1.05] mb-5">
              Trois formats, selon votre besoin.
            </h2>
            <p className="text-[15px] md:text-[16px] text-muted leading-[1.6]">
              Du chantier ponctuel à l’accompagnement dans la durée : je
              m’adapte à votre situation et à vos contraintes.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {packs.map((p) => (
              <div
                key={p.name}
                className={
                  "relative flex flex-col rounded-sm border p-7 lg:p-8 " +
                  (p.highlighted
                    ? "border-ink bg-ink text-bg"
                    : "border-ink/15 bg-bg-2/40")
                }
              >
                {p.highlighted && (
                  <span className="self-start mb-5 text-[11px] font-medium px-2 py-0.5 rounded-sm bg-terra text-bg">
                    Recommandé
                  </span>
                )}
                <h3
                  className={
                    "text-[1.5rem] font-bold tracking-[-0.02em] mb-1 " +
                    (p.highlighted ? "text-bg" : "text-ink")
                  }
                >
                  {p.name}
                </h3>
                <p
                  className={
                    "text-[12px] mb-5 " +
                    (p.highlighted ? "text-bg/55" : "text-muted-2")
                  }
                >
                  {p.duration}
                </p>
                <p
                  className={
                    "text-[1.75rem] font-bold tracking-[-0.03em] mb-4 " +
                    (p.highlighted ? "text-bg" : "text-ink")
                  }
                >
                  {p.price}
                </p>
                <p
                  className={
                    "text-[14px] leading-[1.55] mb-6 " +
                    (p.highlighted ? "text-bg/70" : "text-muted")
                  }
                >
                  {p.description}
                </p>
                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={
                        "text-[14px] flex gap-2 items-start " +
                        (p.highlighted ? "text-bg/90" : "text-ink-2")
                      }
                    >
                      <span
                        className={
                          p.highlighted ? "text-terra-soft mt-0.5" : "text-muted mt-0.5"
                        }
                      >
                        →
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="/contact"
                  variant={p.highlighted ? "terra" : "outline"}
                  size="md"
                  className="w-full"
                >
                  Demander un devis
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
