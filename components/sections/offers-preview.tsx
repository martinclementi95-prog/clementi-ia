"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Users } from "lucide-react";
import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { getFeaturedFormations } from "@/lib/config/formations";
import { formatPrice } from "@/lib/utils";

export function OffersPreview() {
  const featured = getFeaturedFormations();

  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            label="Pour les entreprises"
            title="Trois façons de faire de l'IA un avantage concurrentiel."
            description="Du diagnostic ponctuel à l'accompagnement dans la durée, des formats pensés pour les dirigeants de PME."
          />
          <ButtonLink href="/formations" variant="ghost" size="md" className="self-start md:self-end">
            Toutes les formations
            <ArrowUpRight className="size-4" />
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((f, i) => (
            <motion.div
              key={f.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/formations/${f.slug}`}
                className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 transition-all hover:border-white/20 hover:bg-white/[0.03]"
              >
                <div className="absolute top-6 right-6 size-8 rounded-full border border-white/10 flex items-center justify-center text-ink-400 group-hover:text-white group-hover:border-white/30 transition-colors">
                  <ArrowUpRight className="size-4" />
                </div>
                <Badge variant="default" className="self-start">
                  B2B
                </Badge>
                <h3 className="mt-5 text-xl font-semibold text-white text-balance">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm text-ink-400 leading-relaxed text-pretty">
                  {f.tagline}
                </p>

                <div className="mt-auto pt-8 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-ink-400">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-3.5" />
                      {f.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="size-3.5" />
                      {f.groupSize.split("—")[0]}
                    </span>
                  </div>
                  <div className="hairline" />
                  <div className="flex items-baseline justify-between">
                    <span className="font-bold text-2xl text-white">
                      {formatPrice(f.price)}
                    </span>
                    <span className="text-xs text-ink-500">{f.priceUnit}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
