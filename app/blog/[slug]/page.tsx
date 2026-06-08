import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllPosts, getPostWithHtml } from "@/lib/blog";
import { siteConfig } from "@/lib/config/site";
import { JsonLd } from "@/components/seo/json-ld";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { ButtonLink } from "@/components/ui/button";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await getPostWithHtml(slug);
  if (!result) return {};
  const { post } = result;
  const canonical = `${siteConfig.url}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [siteConfig.founder.name],
      tags: post.tags,
    },
  };
}

const categoryLabel: Record<string, string> = {
  pratique: "Guide pratique",
  stratégie: "Stratégie",
  outils: "Outils",
  formation: "Formation",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const result = await getPostWithHtml(slug);
  if (!result) notFound();
  const { post, html } = result;

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Articles", url: "/blog" },
            { name: post.title, url: `/blog/${slug}` },
          ]),
        ]}
      />

      {/* Header article */}
      <section className="pt-12 md:pt-20 pb-12 md:pb-16">
        <div className="container-prose">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] text-muted hover:text-ink transition-colors mb-10"
          >
            <ArrowLeft className="size-3.5" />
            Tous les articles
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-[11px] uppercase tracking-wider text-muted-2 font-medium">
              {categoryLabel[post.category] ?? post.category}
            </span>
            <span className="text-muted-2 text-[11px]">·</span>
            <span className="text-[11px] text-muted-2">
              {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="text-muted-2 text-[11px]">·</span>
            <span className="text-[11px] text-muted-2">
              {post.readingTime} min de lecture
            </span>
          </div>

          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold leading-[1.05] tracking-[-0.03em] text-balance mb-6">
            {post.title}
          </h1>

          <p className="text-[17px] md:text-[19px] text-muted leading-[1.5] text-pretty">
            {post.description}
          </p>
        </div>
      </section>

      {/* Corps de l'article */}
      <section className="pb-20 md:pb-24 border-t border-ink/10 pt-12">
        <div className="container-prose">
          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>

      {/* Signature auteur */}
      <section className="py-16 md:py-20 border-t border-ink/10">
        <div className="container-prose">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="shrink-0 size-14 rounded-sm bg-terra-soft flex items-center justify-center text-[1.5rem] font-bold text-terra select-none">
              M
            </div>
            <div>
              <p className="text-[14px] font-semibold text-ink mb-1">
                {siteConfig.founder.name}
              </p>
              <p className="text-[14px] text-muted leading-[1.55] max-w-lg">
                {siteConfig.founder.shortBio}
              </p>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-1 mt-2 text-[13px] text-muted hover:text-ink transition-colors"
              >
                Voir le profil complet
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-ink/10 bg-bg-2/40">
        <div className="container-prose">
          <div className="eyebrow mb-5">Passez à l'action</div>
          <h2 className="text-[1.5rem] md:text-[1.875rem] font-bold tracking-[-0.025em] leading-[1.2] text-balance mb-5">
            Une question sur l'IA pour votre activité dans le Pays de Gex ?
          </h2>
          <p className="text-[15px] text-muted leading-[1.6] mb-8 max-w-lg">
            Je suis basé localement et je réponds à toutes les questions — sans
            engagement, sans pitch commercial.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <ButtonLink href="/contact" variant="primary" size="md">
              Échanger 30 min
              <ArrowUpRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="/formations" variant="outline" size="md">
              Voir les formations
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
