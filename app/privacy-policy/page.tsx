import { PageHero } from "@/components/content/page-hero";
import { SectionCard } from "@/components/content/section-card";

export const metadata = {
  title: "Privacy Policy",
  description: "Read the ScamCheckTool privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy information for ScamCheckTool visitors."
        description="This page is the rebuilt placeholder for a fuller privacy policy and gives the site a proper trust-page route."
      />

      <section className="mx-auto max-w-4xl space-y-6 px-5 py-14">
        <SectionCard title="Current position">
          <p className="text-sm leading-7">
            The site is being rebuilt to avoid unnecessary data collection and to keep scam
            guidance simple and privacy-conscious.
          </p>
        </SectionCard>

        <SectionCard title="Next policy upgrade">
          <p className="text-sm leading-7">
            In a later step, this page should be expanded to cover analytics, cookies, third-party
            tools, retention, and contact details in more detail.
          </p>
        </SectionCard>
      </section>
    </>
  );
}
