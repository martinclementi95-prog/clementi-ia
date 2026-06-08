"use client";

import { motion } from "framer-motion";
import { Compass, Target, HandHeart, ShieldCheck } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const items = [
  {
    icon: Compass,
    title: "Stratégique",
    text: "Nous partons toujours de vos objectifs business, pas des outils. L'IA est un moyen, jamais une fin.",
  },
  {
    icon: Target,
    title: "Opérationnel",
    text: "Pas de slides théoriques : chaque intervention se traduit par un livrable concret et déployable.",
  },
  {
    icon: HandHeart,
    title: "Local",
    text: "Ancré dans le Pays de Gex. Disponible en présentiel, dans vos locaux ou les nôtres.",
  },
  {
    icon: ShieldCheck,
    title: "De confiance",
    text: "RGPD, souveraineté des données, choix d'outils responsables. Vos données restent les vôtres.",
  },
];

export function ValueProps() {
  return (
    <Section>
      <Container>
        <SectionHeading
          label="Notre approche"
          title="Une expertise IA conçue pour le terrain."
          description="Quatre engagements qui font la différence entre une formation théorique et une transformation réelle de votre activité."
        />

        <div className="mt-16 grid gap-px bg-white/[0.04] rounded-3xl overflow-hidden border border-white/[0.06] md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-ink-950 p-8 group hover:bg-ink-900 transition-colors"
            >
              <div className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-800/30 border border-brand-700/30 text-brand-300 mb-5 group-hover:border-brand-600/50 transition-colors">
                <item.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-ink-400 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
