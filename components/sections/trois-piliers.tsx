"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Former",
    text: "Vos équipes montent en compétence sur des cas réels. Elles repartent capables de faire, pas juste au courant.",
    href: "/formations",
  },
  {
    title: "Construire",
    text: "On construit ensemble l’outil qui résout votre problème — automatisation, assistant, back-office. Vous repartez avec.",
    href: "/formations/chantier-ia",
  },
  {
    title: "Accompagner",
    text: "Un partenaire dans la durée. Un nouvel outil par mois, vos équipes autonomes, accès direct.",
    href: "/conseil",
  },
];

export function TroisPiliers() {
  return (
    <section className="py-24 md:py-28 border-t border-ink/10">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <div className="lg:col-span-4">
            <div className="eyebrow mb-6">Ce que je fais</div>
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold tracking-[-0.03em] leading-[1.05] text-balance">
              Trois manières de travailler ensemble.
            </h2>
            <p className="mt-5 text-[15px] text-muted leading-[1.55] max-w-sm">
              Selon votre maturité IA, votre temps et vos enjeux — il y a un
              format adapté.
            </p>
          </div>

          <div className="lg:col-span-8 grid gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group bg-bg p-7 md:p-9 flex flex-col gap-3 hover:bg-terra-soft transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[1.5rem] md:text-[1.75rem] font-bold tracking-[-0.02em] leading-none">
                    {s.title}
                  </h3>
                  <ArrowUpRight className="size-5 text-muted group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-[15px] text-muted leading-[1.5] max-w-md">
                  {s.text}
                </p>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
