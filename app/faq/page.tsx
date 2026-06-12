import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { faqItems, type FaqItem } from "@/lib/config/faq";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Questions fréquentes — Formations & accompagnement IA",
  description:
    "Toutes les réponses sur les formations IA Clementi IA : public visé, tarifs, Qualiopi, CPF, OPCO, ancrage Pays de Gex, RGPD. Sans détour.",
  alternates: { canonical: `${siteConfig.url}/faq` },
  openGraph: {
    title: "Questions fréquentes — Formations & accompagnement IA",
    description:
      "Tarifs, public, prise en charge, ancrage local, RGPD : les réponses claires sur l'offre Clementi IA.",
    url: `${siteConfig.url}/faq`,
  },
};

const categoryLabels: Record<FaqItem["category"], string> = {
  formation: "Les formations",
  tarifs: "Tarifs & financement",
  local: "Ancrage local",
  qualiopi: "Qualiopi & certifications",
  approche: "L'approche",
};

const categoryOrder: FaqItem["category"][] = [
  "approche",
  "formation",
  "tarifs",
  "qualiopi",
  "local",
];

export default function FaqPage() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    items: faqItems.filter((f) => f.category === cat),
  }));

  return (
    <>
      <JsonLd
        data={[
          faqSchema(
            faqItems.map((f) => ({ question: f.question, answer: f.answer })),
          ),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Questions fréquentes", url: "/faq" },
          ]),
        ]}
      />

      <section className="pt-12 md:pt-20 pb-12 md:pb-16">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="eyebrow">Questions fréquentes</div>
              <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1] tracking-[-0.035em] text-balance">
                Toutes les{" "}
                <span className="mark-terra">réponses claires</span>, sans
                détour.
              </h1>
            </div>
            <p className="lg:col-span-4 text-[16px] md:text-[17px] text-muted leading-[1.55] max-w-md">
              Public visé, tarifs, financement OPCO/CPF, RGPD, ancrage local :
              tout ce qu'on me demande le plus souvent.
            </p>
          </div>
        </div>
      </section>

      {grouped.map((group) => (
        <section
          key={group.category}
          className="py-16 md:py-20 border-t border-ink/10"
        >
          <div className="container-page">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <div className="eyebrow mb-5">{group.label}</div>
                <h2 className="text-[1.5rem] md:text-[1.875rem] font-bold tracking-[-0.025em] leading-[1.1] text-balance">
                  {group.items.length} question
                  {group.items.length > 1 ? "s" : ""} sur ce sujet.
                </h2>
              </div>

              <div className="lg:col-span-8 flex flex-col">
                {group.items.map((f, i) => (
                  <details
                    key={f.question}
                    className={
                      "group border-t border-ink/10 py-6" +
                      (i === group.items.length - 1
                        ? " border-b border-ink/10"
                        : "")
                    }
                  >
                    <summary className="flex items-baseline justify-between gap-6 cursor-pointer list-none">
                      <h3 className="text-[17px] md:text-[19px] font-semibold text-ink leading-[1.35] text-pretty">
                        {f.question}
                      </h3>
                      <span
                        aria-hidden
                        className="shrink-0 text-muted text-[24px] leading-none transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <div className="mt-4 text-[15px] md:text-[16px] text-muted leading-[1.65] text-pretty max-w-3xl">
                      {f.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 md:py-24 border-t border-ink/10">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-[-0.03em] leading-[1.1] text-balance">
                Une question qui n'a pas sa réponse ici ?
              </h2>
              <p className="mt-4 text-[16px] text-muted leading-[1.6] max-w-xl">
                Le plus simple : 30 minutes en visio ou un café dans le Pays de
                Gex. Pas de pitch commercial, pas d'engagement.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Poser ma question
                <ArrowUpRight className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
