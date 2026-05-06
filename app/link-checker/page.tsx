import Link from "next/link";

import { PageHero } from "@/components/content/page-hero";
import { SectionCard } from "@/components/content/section-card";
import { LinkCheckerTool } from "@/components/tools/link-checker";

export const metadata = {
  title: "Suspicious Link Checker",
  description: "Check suspicious links for common phishing and scam warning signs.",
};

export default function LinkCheckerPage() {
  return (
    <>
      <PageHero
        eyebrow="Link Checker"
        title="Check risky URLs before you click."
        description="Paste a suspicious URL and review common phishing signals before you visit the page or enter any details."
      >
        <Link
          href="/"
          className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
        >
          Back to Homepage
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-3 md:py-4">
        <LinkCheckerTool />
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-14 md:grid-cols-2">
        <SectionCard title="What this page will do">
          <ul className="space-y-3 text-sm leading-7">
            <li>• Review suspicious URLs and shortened links</li>
            <li>• Highlight login, verification, and account-risk language</li>
            <li>• Encourage users to verify sites before entering details</li>
          </ul>
        </SectionCard>

        <SectionCard title="Use it carefully">
          <p className="text-sm leading-7">
            A clean-looking link is not always a safe one. Use the checker as a first review step,
            then confirm the site independently before logging in or downloading anything.
          </p>
        </SectionCard>
      </section>
    </>
  );
}
