"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { Label } from "@/components/ui/badge";
import { getFormationsByAudience, formationPriceLabel } from "@/lib/config/formations";

export function B2CStrip() {
  const formations = getFormationsByAudience("b2c");

  return (
    <Section className="border-t border-[rgb(10_10_10/0.08)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <Label>Pour les particuliers</Label>
            <h2 className="mt-5 font-bold text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.05] tracking-[-0.015em] text-balance">
              L'IA n'est pas réservée{" "}
              <span className="italic text-ink">aux entreprises.</span>
            </h2>
            <p className="mt-6 text-[15px] text-[var(--color-muted)] leading-relaxed text-pretty">
              Étudiants, jeunes pros, indépendants, retraités curieux : des
              formats accessibles, en petit comité, dans le Pays de Gex — pour
              intégrer l'IA dans votre quotidien et votre carrière.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-px bg-[rgb(10_10_10/0.08)]">
            {formations.map((f, i) => (
              <motion.div
                key={f.slug}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-bg"
              >
                <Link
                  href={`/formations/${f.slug}`}
                  className="group grid grid-cols-12 gap-4 py-8 items-start"
                >
                  <div className="col-span-2 lg:col-span-1">
                    <span className="font-bold text-ink text-2xl">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="col-span-10 lg:col-span-8 flex flex-col gap-2">
                    <h3 className="font-bold text-xl md:text-2xl leading-tight group-hover:text-ink transition-colors text-balance">
                      {f.title}
                    </h3>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed text-pretty">
                      {f.tagline}
                    </p>
                    <div className="flex items-center gap-3 text-[12px] text-[var(--color-muted)] mt-1">
                      <span>{f.duration}</span>
                      <span className="opacity-40">·</span>
                      <span>{f.format.split("—")[0]}</span>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-3 flex items-center justify-between lg:justify-end gap-3 lg:flex-col lg:items-end pl-12 lg:pl-0">
                    <span className="stat-num text-2xl text-ink">
                      {formationPriceLabel(f)}
                    </span>
                    <span className="text-[12px] text-[var(--color-muted)]">
                      {f.priceUnit}
                    </span>
                    <ArrowUpRight className="size-4 text-ink group-hover:text-ink transition-colors hidden lg:block mt-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
