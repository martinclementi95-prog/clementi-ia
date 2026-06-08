"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const chapitres = [
  {
    n: "I",
    title: "Diagnostic",
    text:
      "Une demi-journée ou une journée pour comprendre votre activité, vos processus, vos données, vos contraintes. Sans jargon, sans pitch.",
  },
  {
    n: "II",
    title: "Priorisation",
    text:
      "Identification des cas d'usage à plus fort ROI. Estimation du gain par poste, faisabilité technique et humaine, données nécessaires.",
  },
  {
    n: "III",
    title: "Déploiement",
    text:
      "Mise en place opérationnelle : outils, workflows, automatisations. Formation des équipes en parallèle, pour ancrer la pratique au quotidien.",
  },
  {
    n: "IV",
    title: "Mesure",
    text:
      "Suivi des KPI définis en amont, ajustement continu. Vous savez précisément ce que l'IA vous fait gagner — ou ce qui ne fonctionne pas.",
  },
];

export function Methode() {
  return (
    <Section className="bg-bg-2/40 border-y border-[rgb(10_10_10/0.06)]">
      <Container>
        <SectionHeading
          label="La méthode — en quatre temps"
          title="Une approche éprouvée, pensée pour les PME."
          description="Aucune transformation IA ne se fait par magie. Notre méthode garantit que chaque jour passé à vos côtés se traduit par un résultat concret et mesurable."
        />

        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {chapitres.map((c, i) => (
            <motion.article
              key={c.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-4 relative"
            >
              <div className="flex items-baseline justify-between border-b border-[rgb(10_10_10/0.18)] pb-3">
                <span className="font-bold text-[2rem] leading-none text-ink">
                  {c.n}
                </span>
                <span className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  Chapitre {c.n}
                </span>
              </div>
              <h3 className="font-bold text-2xl leading-tight">{c.title}</h3>
              <p className="text-[15px] text-[var(--color-muted)] leading-relaxed text-pretty">
                {c.text}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
