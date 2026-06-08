import { Hero } from "@/components/sections/hero";
import { TroisPiliers } from "@/components/sections/trois-piliers";
import { FounderCard } from "@/components/sections/founder-card";
import { CTA } from "@/components/sections/cta";
import { JsonLd } from "@/components/seo/json-ld";
import { personSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <Hero />
      <TroisPiliers />
      <FounderCard />
      <CTA />
    </>
  );
}
