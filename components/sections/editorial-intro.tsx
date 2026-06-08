"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function EditorialIntro() {
  return (
    <section className="py-24 md:py-32 border-t border-ink/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-3">
            <div className="eyebrow">Note du fondateur</div>
          </div>

          <div className="lg:col-span-9 max-w-3xl">
            <p className="text-[1.5rem] md:text-[1.75rem] leading-[1.35] tracking-[-0.02em] text-ink text-pretty font-light">
              L’intelligence artificielle ne va pas attendre que nos PME locales
              soient prêtes. Genève déploie déjà ses premiers agents IA dans
              les cabinets de la finance, les laboratoires du CERN écrivent
              avec eux. De ce côté de la frontière, le retard se creuse
              silencieusement — et avec lui, l’écart de productivité.
            </p>
            <p className="mt-7 text-[1.125rem] md:text-[1.25rem] leading-[1.55] text-muted text-pretty font-light">
              Mon métier est simple : faire en sorte que le tissu économique
              du Pays de Gex ne reste pas spectateur. Pas par des discours,
              pas par des slides. Par des outils déployés, des équipes
              formées, et des résultats que vous pouvez mesurer dès le
              premier mois.
            </p>

            <div className="mt-10 flex items-center gap-3 text-[13px]">
              <span className="font-semibold text-ink">Martin Clementi</span>
              <span className="h-px w-6 bg-ink/30" />
              <span className="text-muted">Fondateur</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
