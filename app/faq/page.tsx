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
        title="Common questions about the tools and how to use them safely."
        description="This page gives clear expectations for what ScamCheckTool can and cannot do."
      />

      <section className="mx-auto max-w-4xl space-y-6 px-5 py-14">
        {faqs.map((faq) => (
          <SectionCard key={faq.title} title={faq.title}>
            <p className="text-sm leading-7">{faq.body}</p>
          </SectionCard>
        ))}
      </section>
    </>
  );
}
