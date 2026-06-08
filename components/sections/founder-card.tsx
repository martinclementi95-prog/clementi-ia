"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { siteConfig } from "@/lib/config/site";

export function FounderCard() {
  return (
    <section className="py-24 md:py-32 border-t border-ink/10">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start"
        >
          <div className="lg:col-span-4">
            <div className="eyebrow mb-6">Pourquoi moi</div>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold tracking-[-0.03em] leading-[1.05] text-balance">
              Un interlocuteur unique. Pas un cabinet.
            </h2>
            <figure className="mt-8 max-w-xs flex flex-col gap-3">
              <div className="aspect-[4/5] w-full overflow-hidden relative rounded-lg bg-terra-soft">
                <Image
                  src="/images/DSC07258_Edited.JPG"
                  alt="Martin Clementi en échange lors d'un accompagnement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="text-[12px] italic text-muted leading-[1.5]">
                Moi qui m’apprête à déléguer 50h de travail à l’IA.
              </figcaption>
            </figure>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-7 max-w-2xl">
            <p className="text-[1.125rem] md:text-[1.25rem] leading-[1.55] text-ink text-pretty">
              Je m’appelle Martin Clementi. Entrepreneur installé dans le
              Pays de Gex, j’ai fondé plusieurs sociétés en France et en
              Suisse avant de me consacrer à la formation IA.
            </p>
            <p className="text-[16px] leading-[1.6] text-muted text-pretty">
              Quand vous travaillez avec moi, vous travaillez{" "}
              <span className="text-ink">directement avec moi.</span> Pas de
              junior placé sur votre projet, pas de pitch commercial recyclé.
              Juste quelqu’un qui forme, qui code, et qui mesure les résultats
              à vos côtés.
            </p>

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 pt-4 border-t border-ink/10 text-[13px]">
              <div>
                <dt className="text-muted mb-1">Basé à</dt>
                <dd className="font-semibold text-ink">Pays de Gex</dd>
              </div>
              <div>
                <dt className="text-muted mb-1">Couverture</dt>
                <dd className="font-semibold text-ink">Pays de Gex</dd>
              </div>
              <div>
                <dt className="text-muted mb-1">Formé en</dt>
                <dd className="font-semibold text-ink">Finance & commerce</dd>
              </div>
              <div>
                <dt className="text-muted mb-1">Référence</dt>
                <dd className="font-semibold text-ink">Plusieurs sociétés FR/CH</dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-6 pt-3">
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-ink border-b border-ink/30 pb-0.5 hover:border-ink transition-colors"
              >
                Lire le parcours complet
                <ArrowUpRight className="size-3.5" />
              </Link>
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-[14px] text-muted hover:text-ink transition-colors"
              >
                <Linkedin className="size-4" />
                LinkedIn
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
