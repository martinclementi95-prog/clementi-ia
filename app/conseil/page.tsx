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
    "Accompagnement IA sur-mesure pour PME : audit, déploiement d'agents IA, automatisations, RGPD, conduite du changement. Sprint, partenariat 6 mois ou sur-mesure.",
  alternates: { canonical: `${siteConfig.url}/conseil` },
  openGraph: {
    title: "Conseil & Accompagnement IA pour PME — Pays de Gex",
    description:
      "Du diagnostic IA au déploiement d'agents et d'automatisations dans votre PME, avec un interlocuteur unique.",
    url: `${siteConfig.url}/conseil`,
  },
};

const services = [
  {
    icon: Briefcase,
    title: "Stratégie & Audit IA",
    text: "Diagnostic approfondi de votre activité. Identification des cas d’usage à plus fort ROI. Feuille de route 12 mois priorisée.",
  },
  {
    icon: Workflow,
    title: "Déploiement d’automatisations",
    text: "Conception et mise en production de workflows IA (Make, n8n, Zapier + LLM). De la documentation client à la qualification de leads.",
  },
  {
    icon: Cpu,
    title: "Agents IA sur-mesure",
    text: "Création d’assistants IA spécialisés à votre métier : chatbot interne, agent commercial, copilote opérationnel.",
  },
  {
    icon: Sparkles,
    title: "Conduite du changement",
    text: "Formation des équipes, accompagnement managérial, mesure d’impact. Pour que l’IA soit adoptée, pas subie.",
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
    name: "Sprint",
    duration: "1 à 2 semaines",
    price: "À partir de 3 500 €",
    description:
      "Un cas d’usage IA livré en mode commando. Idéal pour démontrer la valeur sans engager une transformation complète.",
    features: [
      "Atelier de cadrage",
      "Développement d’un POC fonctionnel",
      "Formation utilisateurs (2 h)",
      "Documentation complète",
    ],
    highlighted: false,
  },
  {
    name: "Partenariat",
    duration: "6 mois — renouvelable",
    price: "À partir de 2 500 € / mois",
    description:
      "Le format de référence pour une PME qui veut intégrer l’IA durablement. 4 cas d’usage déployés, équipes formées, ROI mesuré.",
    features: [
      "Audit initial inclus",
      "1 cas d’usage par trimestre",
      "Coaching dirigeant mensuel",
      "Support WhatsApp prioritaire",
      "Revue stratégique trimestrielle",
    ],
    highlighted: true,
  },
  {
    name: "Sur-mesure",
    duration: "Variable",
    price: "Sur devis",
    description:
      "Pour des projets de transformation d’ampleur : conception d’une plateforme IA propriétaire, refonte de processus métier critiques.",
    features: [
      "Cadrage approfondi",
      "Équipe dédiée mobilisable",
      "Engagement de résultats",
      "Reporting hebdomadaire",
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
              Mes interventions ne s’arrêtent pas à un slide deck. Du diagnostic
              au déploiement, je conçois, code et déploie moi-même les
              solutions — avec vos équipes.
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
              Trois manières de travailler ensemble.
            </h2>
            <p className="text-[15px] md:text-[16px] text-muted leading-[1.6]">
              Du sprint ponctuel à l’accompagnement long terme — je m’adapte à
              votre maturité IA et à vos contraintes.
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
