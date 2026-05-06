import { PageHero } from "@/components/content/page-hero";
import { SectionCard } from "@/components/content/section-card";

export const metadata = {
  title: "Terms and Conditions",
  description: "Read the ScamCheckTool terms and conditions.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms and conditions for using ScamCheckTool."
        description="This page sets clear expectations while the site is being rebuilt into a more complete public tool."
      />

      <section className="mx-auto max-w-4xl space-y-6 px-5 py-14">
        <SectionCard title="Guidance only">
          <p className="text-sm leading-7">
            ScamCheckTool should be treated as educational guidance only. Users should independently
            verify important claims before acting.
          </p>
        </SectionCard>

        <SectionCard title="Next legal upgrade">
          <p className="text-sm leading-7">
            In a later step, this page should be expanded into a fuller terms document with
            acceptable use, limitations, and update details.
          </p>
        </SectionCard>
      </section>
    </>
  );
}
