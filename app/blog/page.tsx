import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/config/site";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Articles — IA pratique pour les professionnels du Pays de Gex",
  description:
    "Guides pratiques, cas d'usage et réflexions sur l'IA pour les PME, artisans, indépendants et commerces du Pays de Gex. Par Martin Clementi.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Articles — IA pratique pour les professionnels du Pays de Gex",
    description:
      "Guides concrets sur ChatGPT, les outils IA gratuits, l'automatisation pour artisans, commerçants et PME locales.",
    url: `${siteConfig.url}/blog`,
  },
};

const categoryLabel: Record<string, string> = {
  pratique: "Guide pratique",
  stratégie: "Stratégie",
  outils: "Outils",
  formation: "Formation",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured || p !== featured);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Articles", url: "/blog" },
        ])}
      />

      <section className="pt-12 md:pt-20 pb-12 md:pb-16">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="eyebrow">Articles · {posts.length} publiés</div>
              <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4rem] font-bold leading-[1] tracking-[-0.035em] text-balance">
                L'IA pratique, pas théorique.
              </h1>
            </div>
            <p className="lg:col-span-4 text-[16px] md:text-[17px] text-muted leading-[1.55] max-w-md">
              Guides concrets pour les professionnels du Pays de Gex qui veulent
              des résultats, pas des buzzwords.
            </p>
          </div>
        </div>
      </section>

      {featured && (
        <section className="py-12 md:py-16 border-t border-ink/10">
          <div className="container-page">
            <div className="eyebrow mb-8">À la une</div>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-8 lg:grid-cols-12 items-start"
            >
              <div className="lg:col-span-8">
                <div className="text-[11px] uppercase tracking-wider text-muted-2 mb-3">
                  {categoryLabel[featured.category] ?? featured.category}
                </div>
                <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-[-0.03em] leading-[1.1] text-ink text-balance group-hover:text-terra transition-colors mb-4">
                  {featured.title}
                </h2>
                <p className="text-[16px] text-muted leading-[1.6] text-pretty max-w-2xl">
                  {featured.description}
                </p>
              </div>
              <div className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-ink/10 flex flex-col gap-4 justify-between">
                <div className="text-[13px] text-muted-2">
                  {new Date(featured.publishedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  · {featured.readingTime} min de lecture
                </div>
                <div className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink group-hover:text-terra transition-colors">
                  Lire l'article
                  <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="py-16 md:py-20 border-t border-ink/10">
          <div className="container-page">
            <ul className="grid gap-px bg-ink/10 border border-ink/10 rounded-sm overflow-hidden md:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <li key={post.slug} className="bg-bg">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col gap-4 p-7 lg:p-8 hover:bg-terra-soft transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wider text-muted-2">
                        {categoryLabel[post.category] ?? post.category}
                      </span>
                      <ArrowUpRight className="size-4 text-muted group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <h2 className="text-[1.0625rem] md:text-[1.125rem] font-bold text-ink leading-[1.3] text-balance flex-1">
                      {post.title}
                    </h2>
                    <p className="text-[13px] text-muted leading-[1.55] text-pretty line-clamp-3">
                      {post.description}
                    </p>
                    <div className="mt-auto pt-3 border-t border-ink/8 text-[12px] text-muted-2">
                      {new Date(post.publishedAt).toLocaleDateString("fr-FR", {
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      · {post.readingTime} min
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
