import { PageHero } from "@/components/content/page-hero";
import { SectionCard } from "@/components/content/section-card";

export const metadata = {
  title: "About",
  description:
    "Learn what ScamCheckTool is, who it is for, and how Privacy Toolbox approaches scam awareness guidance.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ScamCheckTool"
        title="A safer, clearer way to review suspicious online content."
        description="ScamCheckTool is being rebuilt to help everyday users make calmer decisions when a message, link, or image feels off."
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-2">
        <SectionCard title="What the site does">
          <p className="text-sm leading-7">
            It gives plain-language guidance for common scam warning signs, including urgency,
            impersonation, fake login links, and suspicious visual content.
          </p>
        </SectionCard>

        <SectionCard title="What the site does not do">
          <p className="text-sm leading-7">
            It does not promise perfect detection or guaranteed safety. The goal is to help users
            slow down, spot warning signs, and make better choices.
          </p>
        </SectionCard>
      </section>
    </>
  );
}
