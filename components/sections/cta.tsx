"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/config/site";

const steps = [
  { n: "01", t: "On parle de votre activité, vos contraintes, vos enjeux." },
  { n: "02", t: "Je vous montre deux ou trois cas d’usage applicables chez vous." },
  { n: "03", t: "On voit si je peux vous aider — sinon, on en reste là." },
];

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-ink text-bg rounded-md px-7 py-14 md:px-14 md:py-20"
        >
          {/* Filigrane M géant en arrière-plan */}
          <span
            aria-hidden
            className="absolute -right-12 -bottom-32 text-bg/[0.04] font-bold leading-none select-none pointer-events-none"
            style={{ fontSize: "min(40rem, 70vw)" }}
          >
            M
          </span>

          <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Bloc gauche — accroche + steps */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center gap-2 text-[12px] text-bg/55 mb-6">
                <span className="inline-block w-6 h-px bg-bg/40" />
                Un café, trente minutes
              </div>

              <h2 className="text-[2rem] md:text-[2.75rem] lg:text-[3.25rem] font-bold tracking-[-0.035em] leading-[1.02] text-balance">
                Je regarde si je peux vous être utile.
                <br />
                <span className="text-bg/55">Sinon, on en reste là.</span>
              </h2>

              <p className="mt-6 text-[16px] md:text-[17px] text-bg/70 max-w-xl leading-[1.55]">
                Visio ou autour d’un café dans le Pays de Gex. Pas de pitch
                commercial, pas d’engagement. Vous repartez avec deux ou trois
                pistes concrètes pour votre activité.
              </p>

              <ol className="mt-10 flex flex-col divide-y divide-bg/10 border-y border-bg/10">
                {steps.map((s) => (
                  <li
                    key={s.n}
                    className="grid grid-cols-[auto_1fr] gap-5 items-baseline py-4"
                  >
                    <span className="tabular text-[13px] text-bg/40 font-medium">
                      {s.n}
                    </span>
                    <span className="text-[15px] md:text-[16px] text-bg/90 leading-[1.5]">
                      {s.t}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Bloc droit — bouton + contact direct */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:pl-10 lg:border-l lg:border-bg/10">
              <div className="flex flex-col gap-3">
                <ButtonLink
                  href="/contact"
                  variant="terra"
                  size="lg"
                  className="w-full justify-between"
                >
                  Réserver un échange
                  <ArrowUpRight className="size-4" />
                </ButtonLink>
                <p className="text-[12px] text-bg/50 leading-[1.5]">
                  Je réponds en général sous 24 h ouvrées. Disponibilités
                  visibles directement sur la page contact.
                </p>
              </div>

              <div className="flex flex-col gap-px bg-bg/10 rounded-sm overflow-hidden">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group bg-ink hover:bg-ink-2 transition-colors px-4 py-3.5 flex items-center gap-3 text-[14px]"
                >
                  <Mail className="size-4 text-bg/50 group-hover:text-terra transition-colors shrink-0" />
                  <span className="text-bg/90">{siteConfig.contact.email}</span>
                </a>
                <div className="bg-ink px-4 py-3.5 flex items-center gap-3 text-[14px]">
                  <MapPin className="size-4 text-bg/50 shrink-0" />
                  <span className="text-bg/90">
                    Pays de Gex ·{" "}
                    <span className="text-bg/55">Ain (01)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
