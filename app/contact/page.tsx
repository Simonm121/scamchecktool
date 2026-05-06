import { PageHero } from "@/components/content/page-hero";
import { SectionCard } from "@/components/content/section-card";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Contact ScamCheckTool for feedback, business enquiries, or support questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with ScamCheckTool."
        description="Use this page for questions, feedback, partnerships, or general business enquiries."
      />

      <section className="mx-auto max-w-4xl px-5 py-14">
        <SectionCard title="Email">
          <p className="text-sm leading-7">
            Contact us at{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="font-semibold text-emerald-700 underline underline-offset-4"
            >
              {siteConfig.supportEmail}
            </a>
            .
          </p>
        </SectionCard>
      </section>
    </>
  );
}
