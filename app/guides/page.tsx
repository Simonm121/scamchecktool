import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageHero } from "@/components/content/page-hero";

export const metadata = {
  title: "Guides",
  description: "Scam awareness guides and educational content from ScamCheckTool.",
};

const guideCards = [
  {
    href: "/clicked-phishing-link",
    title: "What to do after clicking a phishing link",
    description:
      "Immediate steps to take if you opened a suspicious page, entered a password, or are worried about account misuse.",
  },
  {
    href: "/guides/how-to-tell-if-a-message-is-a-scam",
    title: "How to tell if a message is a scam",
    description:
      "A starter guide for urgency, impersonation, payment requests, and fake authority.",
  },
  {
    href: "/guides/how-to-check-if-a-link-is-safe",
    title: "How to check if a link is safe",
    description: "A practical guide to domains, shorteners, login pages, and phishing tricks.",
  },
  {
    href: "/guides/how-to-spot-a-fake-image-or-deepfake",
    title: "How to spot a fake image or deepfake",
    description: "What to inspect in hands, text, reflections, backgrounds, and original sources.",
  },
];

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Safety Guides"
        title="Educational and recovery content that can grow with the site."
        description="These guide pages are the start of the SEO, trust, and next-step recovery foundation for ScamCheckTool."
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {guideCards.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="text-xl font-black tracking-tight text-slate-950">{guide.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{guide.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                Read guide <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
