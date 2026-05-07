import Link from "next/link";

import { PageHero } from "@/components/content/page-hero";
import { SectionCard } from "@/components/content/section-card";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about ScamCheckTool and how to use it safely.",
};

const faqs = [
  {
    title: "Can ScamCheckTool guarantee whether something is safe?",
    body: "No. It should be used as guidance only. It can help highlight warning signs, but users should still use common sense and verify important claims independently.",
  },
  {
    title: "Should I paste passwords or bank details into the checker?",
    body: "No. Users should never paste passwords, card numbers, or sensitive personal information into any public tool.",
  },
  {
    title: "Who is this for?",
    body: "It is designed for everyday users who want a simple first check before they reply, click, pay, or share details.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="FAQ"
        description="This page gives clear expectations for what ScamCheckTool can and cannot do."
      >
        <Link
          href="/"
          className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
        >
          Back to Homepage
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 pt-8 pb-14">
        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <SectionCard key={faq.title} title={faq.title}>
              <p className="text-sm leading-7">{faq.body}</p>
            </SectionCard>
          ))}
        </div>
      </section>
    </>
  );
}