import Link from "next/link";

import { PageHero } from "@/components/content/page-hero";
import { SectionCard } from "@/components/content/section-card";
import { MessageChecker } from "@/components/tools/message-checker";

export const metadata = {
  title: "Message Scam Checker",
  description: "Check suspicious messages for common scam warning signs.",
};

export default function ScamCheckerPage() {
  return (
    <>
      <PageHero
        eyebrow="Message Checker"
        title="Review suspicious messages before you reply, pay, or share details."
        description="Paste a text, email, or direct message and check for common scam signals like urgency, impersonation, and risky requests."
      >
        <Link
          href="/"
          className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
        >
          Back to Homepage
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-3 md:py-4">
        <MessageChecker />
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-14 md:grid-cols-2">
        <SectionCard title="What this page will do">
          <ul className="space-y-3 text-sm leading-7">
            <li>• Review suspicious texts, emails, and direct messages</li>
            <li>• Highlight pressure tactics, impersonation, and risky asks</li>
            <li>• Give calmer next-step advice instead of dramatic claims</li>
          </ul>
        </SectionCard>

        <SectionCard title="Use it carefully">
          <p className="text-sm leading-7">
            This tool looks for common warning signs, but it cannot prove a message is safe.
            Always verify money requests, account issues, and identity claims independently.
          </p>
        </SectionCard>
      </section>
    </>
  );
}
