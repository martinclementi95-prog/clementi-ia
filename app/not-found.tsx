import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="pt-12 md:pt-20 pb-24 md:pb-32 min-h-[60vh] flex items-center">
      <div className="container-page">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
          <span className="text-[5rem] md:text-[7rem] font-bold tracking-[-0.04em] leading-none text-ink/15">
            404
          </span>
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold tracking-[-0.03em] leading-[1.05] text-ink">
            Cette page n’existe pas.
          </h1>
          <p className="text-[15px] md:text-[16px] text-muted leading-[1.55] max-w-md">
            La page que vous cherchez a peut-être été déplacée ou n’a jamais
            existé. Revenons à l’essentiel.
          </p>
          <ButtonLink href="/" variant="primary" size="lg" className="mt-2">
            <ArrowLeft className="size-4" />
            Retour à l’accueil
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
