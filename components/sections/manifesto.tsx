"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Label } from "@/components/ui/badge";

export function Manifesto() {
  return (
    <section className="py-20 md:py-28 border-t border-[rgb(10_10_10/0.08)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Label>Le mot du fondateur</Label>
            <p className="mt-3 text-sm text-[var(--color-muted)] italic">
              Martin Clementi
              <br />
              Mai 2026
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-9"
          >
            <p className="font-bold text-[1.625rem] md:text-[2rem] leading-[1.25] text-ink text-pretty">
              Je vis dans le Pays de Gex. J'y ai fondé des entreprises, vu naître
              des projets, accompagné des dirigeants qui font tourner notre
              territoire. Depuis trois ans, l'IA transforme tout ce que je touche
              — du marketing à la production, du recrutement à la gestion.
              Aujourd'hui, je veux mettre cette expérience au service du tissu
              économique local, avant qu'il ne se fasse distancer par des acteurs
              plus rapides.
            </p>
            <p className="mt-6 text-base md:text-lg text-[var(--color-muted)] leading-relaxed">
              Clementi IA n'est pas un cabinet anonyme. C'est mon atelier. Je
              conçois, je code, je forme, je suis joignable. Et je ne facture
              jamais le temps que je ne passe pas avec vous.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
