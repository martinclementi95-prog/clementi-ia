"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/badge";

const principles = [
  {
    n: "I",
    title: "On part du métier, pas des outils.",
    text: "L'IA est un moyen. Si vos processus sont flous, aucune techno ne les sauvera. Je commence toujours par comprendre votre activité dans le détail.",
  },
  {
    n: "II",
    title: "Tout livrable est déployable.",
    text: "Pas de slides théoriques rangés dans un tiroir. Chaque intervention produit quelque chose que vos équipes utiliseront dès la semaine suivante.",
  },
  {
    n: "III",
    title: "Vos données restent les vôtres.",
    text: "RGPD strict. Souveraineté des modèles quand c'est pertinent (Mistral, hébergement français). Aucune donnée client ne sort de chez vous sans accord écrit.",
  },
  {
    n: "IV",
    title: "Je suis joignable.",
    text: "Pas d'agence intermédiaire, pas de junior à former. Vous parlez directement à la personne qui conçoit et qui livre. Réponse sous 24 h ouvrées.",
  },
];

export function Principles() {
  return (
    <section className="py-20 md:py-28 border-t border-[rgb(10_10_10/0.08)]">
      <Container>
        <div className="flex items-center gap-3 mb-12">
          <span className="h-px w-8 bg-ink" />
          <Label>Les principes de l'atelier</Label>
        </div>

        <h2 className="font-bold text-[2rem] md:text-[2.75rem] leading-[1.05] max-w-3xl text-balance mb-16">
          Quatre engagements qui guident chaque mission.
        </h2>

        <ol className="flex flex-col">
          {principles.map((p, i) => (
            <motion.li
              key={p.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid gap-6 lg:gap-12 lg:grid-cols-12 py-10 md:py-12 border-t border-[rgb(10_10_10/0.08)] last:border-b"
            >
              <div className="lg:col-span-2 flex lg:justify-start">
                <span className="font-bold text-5xl md:text-6xl text-ink leading-none">
                  {p.n}.
                </span>
              </div>
              <div className="lg:col-span-10 lg:grid lg:grid-cols-12 lg:gap-12">
                <h3 className="lg:col-span-5 font-bold text-[1.5rem] md:text-[1.75rem] leading-[1.15] text-ink text-balance">
                  {p.title}
                </h3>
                <p className="lg:col-span-7 mt-3 lg:mt-1.5 text-[15px] md:text-base text-[var(--color-muted)] leading-relaxed text-pretty">
                  {p.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
