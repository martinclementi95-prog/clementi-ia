"use client";

import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui/container";
import { Label } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config/site";

export function LocalTrust() {
  return (
    <Section className="border-t border-[rgb(10_10_10/0.08)]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-12 items-start"
        >
          <div className="lg:col-span-4">
            <Label>L'ancrage territorial</Label>
            <h2 className="mt-5 font-bold text-3xl md:text-4xl leading-[1.05] tracking-[-0.015em] text-balance">
              Présent partout, dans tout le{" "}
              <span className="italic text-ink">Pays de Gex.</span>
            </h2>
            <p className="mt-5 text-[15px] text-[var(--color-muted)] leading-relaxed text-pretty">
              Contrairement aux organismes parisiens ou genevois, je me déplace
              sur site, je connais les acteurs locaux, et je facture en euros.
              Aucun frais caché.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[rgb(10_10_10/0.08)]">
              {siteConfig.cities.map((city) => (
                <li
                  key={city}
                  className="bg-bg px-4 py-5 flex items-center gap-2.5 text-[14px] text-ink-2"
                >
                  <span className="size-1.5 rounded-full bg-ink" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
