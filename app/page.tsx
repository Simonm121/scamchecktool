import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/content/page-hero";
import { SectionCard } from "@/components/content/section-card";

const guides = {
  "how-to-tell-if-a-message-is-a-scam": {
    title: "How to tell if a message is a scam",
    description:
      "Check for pressure, impersonation, emotional manipulation, and requests for payment or account access.",
    bullets: [
      "Be cautious with urgent time pressure.",
      "Watch for family, bank, or delivery impersonation.",
      "Treat payment requests and login prompts as high risk.",
      "Verify through a trusted contact method before acting.",
    ],
  },
  "how-to-check-if-a-link-is-safe": {
    title: "How to check if a link is safe",
    description:
      "Look closely at the full domain, not just the brand wording or the start of the link.",
    bullets: [
      "Check the real domain carefully.",
      "Be suspicious of shortened links.",
      "Treat fake login pages and urgent verification requests carefully.",
      "Avoid clicking links sent out of context.",
    ],
  },
  "how-to-spot-a-fake-image-or-deepfake": {
    title: "How to spot a fake image or deepfake",
    description:
      "Check hands, text, lighting, reflections, and whether the image comes from a trusted original source.",
    bullets: [
      "Inspect small details like fingers, teeth, and earrings.",
      "Look for warped text and odd reflections.",
      "Check whether the background looks unnaturally soft or distorted.",
      "Reverse image search the picture before trusting it.",
    ],
  },
} as const;

type GuideSlug = keyof typeof guides;

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }));
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = guides[slug as GuideSlug];

  if (!guide) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Guide" title={guide.title} description={guide.description}>
        <Link
          href="/guides"
          className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
        >
          Back to Guides
        </Link>
      </PageHero>

      <section className="mx-auto max-w-4xl px-5 py-14">
        <SectionCard title="Key checks">
          <ul className="space-y-3 text-sm leading-7">
            {guide.bullets.map((bullet) => (
              <li key={bullet}>• {bullet}</li>
            ))}
          </ul>
        </SectionCard>
      </section>
    </>
  );
}
