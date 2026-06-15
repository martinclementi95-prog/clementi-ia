import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <section className="pt-12 md:pt-20 pb-24 md:pb-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <div className="eyebrow mb-6">Informations légales</div>
          <h1 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-[-0.035em] leading-[1] mb-12">
            Mentions légales
          </h1>

          <div className="flex flex-col gap-10 text-[15px] md:text-[16px] text-ink-2 leading-[1.65]">
            <LegalBlock title="Éditeur">
              {siteConfig.legal.company}
              <br />
              {siteConfig.legal.address}
              <br />
              SIRET : {siteConfig.legal.siret}
              <br />
              Contact :{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
              >
                {siteConfig.contact.email}
              </a>
            </LegalBlock>

            <LegalBlock title="Directeur de la publication">
              {siteConfig.founder.name}
            </LegalBlock>

            <LegalBlock title="Hébergement">
              Vercel Inc.
              <br />
              340 S Lemon Ave #4133
              <br />
              Walnut, CA 91789, USA
            </LegalBlock>

            <LegalBlock title="Données personnelles">
              Les données collectées via le formulaire de contact sont
              utilisées uniquement pour répondre à votre demande. Elles ne
              sont jamais cédées à des tiers. Conformément au RGPD, vous
              disposez d’un droit d’accès, de rectification et de suppression
              de vos données — il vous suffit d’envoyer un email à{" "}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
              >
                {siteConfig.contact.email}
              </a>
              .
            </LegalBlock>
          </div>
        </div>
      </div>
    </section>
  );
}

function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-ink font-bold text-[1.0625rem] mb-2 tracking-[-0.01em]">
        {title}
      </h2>
      <p className="text-muted">{children}</p>
    </section>
  );
}
