import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Check,
  Clock,
  MapPin,
  Users,
  Award,
  Target,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import {
  formations,
  getFormation,
  formationPriceLabel,
} from "@/lib/config/formations";
import { siteConfig } from "@/lib/config/site";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, courseSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return formations.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const f = getFormation(slug);
  if (!f) return {};
  const canonical = `${siteConfig.url}/formations/${f.slug}`;
  return {
    title: f.title,
    description: f.tagline,
    alternates: { canonical },
    openGraph: {
      title: f.title,
      description: f.tagline,
      url: canonical,
      type: "article",
    },
  };
}

export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const f = getFormation(slug);
  if (!f) notFound();

  return (
    <>
      <JsonLd
        data={[
          courseSchema(f),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Formations", url: "/formations" },
            { name: f.title, url: `/formations/${f.slug}` },
          ]),
        ]}
      />
      {/* Header */}
      <section className="pt-12 md:pt-16 pb-12">
        <div className="container-page">
          <Link
            href="/formations"
            className="inline-flex items-center gap-2 text-[13px] text-muted hover:text-ink transition-colors mb-10"
          >
            <ArrowLeft className="size-3.5" />
            Toutes les formations
          </Link>

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span
                  className={
                    f.audience === "b2b"
                      ? "text-[11px] font-medium px-2 py-0.5 rounded-sm bg-ink text-bg"
                      : "text-[11px] font-medium px-2 py-0.5 rounded-sm border border-ink/20 text-ink"
                  }
                >
                  {f.audience === "b2b" ? "Entreprise" : "Particulier"}
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-sm bg-ink/5 text-muted">
                  {f.level}
                </span>
              </div>

              <h1 className="text-[2.25rem] sm:text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-[1.02] tracking-[-0.035em] text-balance">
                {f.title}
              </h1>
              <p className="text-[17px] md:text-[19px] text-muted text-pretty leading-[1.55] max-w-2xl">
                {f.tagline}
              </p>

              <div className="mt-2 flex flex-wrap gap-x-7 gap-y-3 text-[14px] text-ink-2">
                <MetaItem icon={Clock} label={f.duration} />
                <MetaItem icon={MapPin} label={f.format} />
                <MetaItem icon={Users} label={f.groupSize} />
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 border border-terra/20 bg-terra-soft/40 rounded-sm p-7">
                <p className="text-[11px] uppercase tracking-wider text-muted-2 mb-2">
                  Tarif
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[2rem] font-bold tracking-[-0.03em] text-ink leading-none">
                    {formationPriceLabel(f)}
                  </span>
                </div>
                <p className="text-[13px] text-muted mt-1">{f.priceUnit}</p>
                <p className="mt-2 text-[12px] text-muted-2">
                  {siteConfig.legal.qualiopi}
                </p>

                <hr className="rule my-6" />

                <ButtonLink
                  href={`/contact?formation=${f.slug}`}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Demander un devis
                  <ArrowUpRight className="size-4" />
                </ButtonLink>
                <ButtonLink
                  href={siteConfig.contact.calendly}
                  variant="outline"
                  size="lg"
                  className="w-full mt-3"
                >
                  <Calendar className="size-4" />
                  Réserver un échange
                </ButtonLink>

                <p className="mt-5 text-[12px] text-muted-2 text-center">
                  Réponse sous 24 h ouvrées
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Detail */}
      <section className="pb-24 md:pb-32">
        <div className="container-page">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-8 flex flex-col gap-16">
              <Block title="Présentation">
                <p className="text-[16px] md:text-[17px] text-ink-2 leading-[1.65] text-pretty">
                  {f.description}
                </p>
              </Block>

              <Block title="Objectifs pédagogiques" icon={Target}>
                <ul className="grid gap-3">
                  {f.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 items-start">
                      <span className="mt-1 shrink-0 inline-flex size-5 items-center justify-center rounded-full bg-terra-soft">
                        <Check className="size-3 text-ink" strokeWidth={2.5} />
                      </span>
                      <span className="text-[15px] md:text-[16px] text-ink-2 leading-[1.6]">
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Programme">
                <ol className="flex flex-col gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10">
                  {f.programme.map((step, i) => (
                    <li key={i} className="bg-bg p-6 lg:p-7">
                      <div className="flex items-baseline gap-3 mb-4">
                        <span className="tabular text-[12px] text-muted-2 font-medium">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h4 className="text-[16px] font-bold text-ink">
                          {step.title}
                        </h4>
                      </div>
                      <ul className="grid gap-2.5 pl-8">
                        {step.points.map((p) => (
                          <li
                            key={p}
                            className="flex gap-3 items-start text-[14px] text-muted leading-[1.55]"
                          >
                            <span className="size-1 rounded-full bg-ink mt-2 shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </Block>
            </div>

            <aside className="lg:col-span-4 flex flex-col gap-10">
              <Block title="Pour qui ?" small>
                <ul className="flex flex-col gap-2.5">
                  {f.forWhom.map((p) => (
                    <li
                      key={p}
                      className="text-[14px] text-ink-2 leading-[1.55] flex gap-2"
                    >
                      <span className="text-muted-2">·</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Prérequis" small>
                <p className="text-[14px] text-ink-2 leading-[1.55]">
                  {f.prerequisites}
                </p>
              </Block>

              <Block title="Certification" small icon={Award}>
                <p className="text-[14px] text-ink-2 leading-[1.55]">
                  Attestation de formation remise à l’issue du programme. La
                  prise en charge OPCO ou CPF dépend de la certification
                  Qualiopi, que je n’ai pas encore obtenue : les formations se
                  règlent donc directement pour l’instant.
                </p>
              </Block>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function MetaItem({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <Icon className="size-4 text-muted-2" strokeWidth={1.75} />
      {label}
    </span>
  );
}

function Block({
  title,
  icon: Icon,
  small,
  children,
}: {
  title: string;
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  small?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3
        className={
          small
            ? "text-[11px] uppercase tracking-wider text-muted font-medium mb-3 flex items-center gap-2"
            : "text-[1.5rem] md:text-[1.75rem] font-bold tracking-[-0.02em] text-ink mb-6 flex items-center gap-3"
        }
      >
        {Icon && (
          <Icon
            className={small ? "size-3.5" : "size-5 text-ink"}
            strokeWidth={1.75}
          />
        )}
        {title}
      </h3>
      {children}
    </div>
  );
}
