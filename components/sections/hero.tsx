"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-12 md:pt-20 lg:pt-24 pb-24 md:pb-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center"
        >
          {/* Colonne texte */}
          <div className="lg:col-span-7 flex flex-col gap-7">
            <div className="eyebrow">Martin Clementi · Pays de Gex</div>

            <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.75rem] font-bold leading-[1] tracking-[-0.035em] text-balance">
              J’apprends à <span className="mark-terra">utiliser</span> l’IA.
              <span className="block text-muted mt-3 lg:mt-4">
                Concrètement, sans buzzwords, à votre rythme.
              </span>
            </h1>

            <p className="text-[17px] md:text-[19px] text-muted leading-[1.55] max-w-[36rem] text-pretty">
              Formation, chantiers concrets et accompagnement pour les PME,
              équipes, indépendants et particuliers curieux du Pays de Gex.
              <span className="text-ink"> Des cas d’usage qui tournent dès la semaine d’après.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-7 pt-2">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Réserver un échange
                <ArrowUpRight className="size-4" />
              </ButtonLink>
              <ButtonLink href="/formations" variant="link" size="link">
                Voir les formations
              </ButtonLink>
            </div>
          </div>

          {/* Colonne photo */}
          <div className="lg:col-span-5">
            <figure className="flex flex-col gap-4">
              <div className="aspect-[4/5] w-full overflow-hidden relative rounded-lg bg-terra-soft">
                <Image
                  src="/images/DSC07281_Edited.JPG"
                  alt="Martin Clementi, fondateur de Clementi IA, dans le Pays de Gex"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="flex items-baseline justify-between gap-3 text-[12px] text-muted">
                <span>Martin Clementi, fondateur</span>
                <span className="flex items-center gap-1.5">
                  <span className="inline-block size-1.5 rounded-full bg-terra" />
                  Sessions Q3 2026 ouvertes
                </span>
              </figcaption>
            </figure>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
