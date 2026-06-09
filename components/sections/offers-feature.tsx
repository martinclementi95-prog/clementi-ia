"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Users } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { Label } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { getFeaturedFormations, formationPriceLabel } from "@/lib/config/formations";

export function OffersFeature() {
  const featured = getFeaturedFormations();
  const [main, ...others] = featured;

  if (!main) return null;

  return (
    <Section className="border-t border-[rgb(10_10_10/0.08)]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-ink" />
            <Label>Catalogue — entreprises</Label>
          </div>
          <Link
            href="/formations"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-ink transition-colors w-fit"
          >
            Toutes les formations
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Formation principale — feature article */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Link
              href={`/formations/${main.slug}`}
              className="group block"
            >
              <div className="aspect-[16/10] bg-bg-2 border border-[rgb(10_10_10/0.08)] mb-7 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-[9rem] text-terra-soft leading-none">
                    01
                  </span>
                </div>
                <div className="absolute top-5 left-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-[11px] font-medium text-ink-2">
                    Formation phare
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[12px] uppercase tracking-[0.14em] text-[var(--color-muted)] mb-3">
                <span>Entreprise</span>
                <span className="opacity-40">·</span>
                <span>Tous niveaux</span>
              </div>

              <h3 className="font-bold text-[2rem] md:text-[2.5rem] leading-[1.05] tracking-[-0.015em] text-balance group-hover:text-ink transition-colors">
                {main.title}
              </h3>

              <p className="mt-5 text-base md:text-lg text-[var(--color-muted)] leading-relaxed text-pretty max-w-xl">
                {main.tagline}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-ink-2">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4 text-[var(--color-muted)]" strokeWidth={1.5} />
                  {main.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Users className="size-4 text-[var(--color-muted)]" strokeWidth={1.5} />
                  {main.groupSize.split("—")[0]}
                </span>
                <span className="opacity-30">·</span>
                <span className="stat-num text-lg">
                  {formationPriceLabel(main)}
                </span>
                <span className="text-[var(--color-muted)] text-[13px]">
                  {main.priceUnit}
                </span>
              </div>
            </Link>
          </motion.article>

          {/* Autres formations — liste éditoriale */}
          <div className="lg:col-span-5 flex flex-col gap-px bg-[rgb(10_10_10/0.08)]">
            {others.map((f, i) => (
              <motion.div
                key={f.slug}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-bg"
              >
                <Link
                  href={`/formations/${f.slug}`}
                  className="group flex flex-col gap-3 py-7 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-bold text-ink text-2xl">
                      0{i + 2}
                    </span>
                    <ArrowUpRight className="size-4 text-[var(--color-muted)] group-hover:text-ink transition-colors" />
                  </div>
                  <h4 className="font-bold text-xl md:text-2xl leading-tight group-hover:text-ink transition-colors text-balance">
                    {f.title}
                  </h4>
                  <p className="text-sm text-[var(--color-muted)] leading-relaxed text-pretty">
                    {f.tagline}
                  </p>
                  <div className="flex items-center gap-3 text-[12px] text-[var(--color-muted)] mt-1">
                    <span>{f.duration}</span>
                    <span className="opacity-40">·</span>
                    <span className="stat-num text-ink text-[15px]">
                      {formationPriceLabel(f)}
                    </span>
                    <span>{f.priceUnit}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <ButtonLink href="/formations" variant="outline" size="md">
            Découvrir le catalogue complet
            <ArrowUpRight className="size-4" />
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
