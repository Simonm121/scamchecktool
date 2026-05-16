import Link from "next/link";
import { ArrowRight, Link as LinkIcon, MessageSquare, Sparkles } from "lucide-react";

import { PageHero } from "@/components/content/page-hero";
import { SectionCard } from "@/components/content/section-card";

const toolCards = [
  {
    href: "/scam-checker",
    title: "Message Scam Checker",
    description:
      "Review suspicious texts, emails, and marketplace messages for urgency, impersonation, and risky asks.",
    icon: MessageSquare,
  },
  {
    href: "/link-checker",
    title: "Suspicious Link Checker",
    description:
      "Look for warning signs in URLs before you click, log in, or submit personal details.",
    icon: LinkIcon,
  },
  {
    href: "/deepfake-checker",
    title: "Image & Deepfake Checker",
    description:
      "Learn what to inspect in images before trusting screenshots, social posts, or viral content.",
    icon: Sparkles,
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Scam awareness tools"
        title="Check suspicious messages, links, and images with clear safety guidance."
        description="ScamCheckTool helps people pause, review warning signs, and make safer decisions before they reply, click, pay, or share personal information."
      >
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/scam-checker"
            className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-emerald-800"
          >
            Open Message Checker
          </Link>
          <Link
            href="/guides"
            className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
          >
            Browse Safety Guides
          </Link>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 pt-6 pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          {toolCards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.href}
                href={card.href}
                className="group rounded-lg border border-slate-300 bg-[#d9d9d9] p-6 shadow-sm shadow-slate-300/60 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#e5e7eb] text-emerald-700">
                  <Icon size={20} />
                </div>
                <h2 className="mt-4 text-2xl font-black leading-snug text-slate-950">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                  Open tool <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50/70 px-6 py-8 shadow-sm shadow-emerald-900/5">
          <div className="grid gap-5 md:grid-cols-[1.5fr_0.9fr] md:items-end">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-800">
                Recovery guide
              </p>
              <h2 className="text-3xl font-black tracking-tight text-slate-950">
                Clicked a phishing link already?
              </h2>
              <p className="max-w-2xl text-sm leading-7 text-slate-700">
                Start with calm, practical next steps. This guide covers what to do if you opened
                a suspicious page, entered a password, or are worried about account abuse.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link
                href="/clicked-phishing-link"
                className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-emerald-800"
              >
                Open Recovery Guide
              </Link>
              <Link
                href="/guides"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
              >
                More Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 md:grid-cols-3">
        <SectionCard title="Trust-first positioning">
          <p className="text-sm leading-7">
            The site should sound careful and realistic. It can guide people through warning signs,
            but it should never pretend to be a magic detector.
          </p>
        </SectionCard>

        <SectionCard title="SEO-ready growth">
          <p className="text-sm leading-7">
            The rebuild is designed to support tool pages, FAQ pages, scam education articles, and
            keyword-targeted landing pages without turning the codebase into a mess.
          </p>
        </SectionCard>

        <SectionCard title="Recovery-focused monetisation">
          <p className="text-sm leading-7">
            Helpful next-step protection offers should appear after the user has understood what to
            do, not before the check itself.
          </p>
        </SectionCard>
      </section>

      <section className="border-y border-slate-200/70 bg-white/70">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
              How this rebuild is organized
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
              Separate tools, shared design, and room for real content.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The homepage now acts as a clean front door. Each checker will become its own proper
              page, and the site will grow with FAQs, guides, and trust content instead of piling
              everything into one file.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
