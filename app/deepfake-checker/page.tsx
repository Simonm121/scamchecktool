import Link from "next/link";

import { PageHero } from "@/components/content/page-hero";
import { SectionCard } from "@/components/content/section-card";
import { ImageCheckerTool } from "@/components/tools/image-checker";

export const metadata = {
  title: "Image and Deepfake Checker",
  description: "Review suspicious images and deepfake warning signs.",
};

export default function DeepfakeCheckerPage() {
  return (
    <>
      <PageHero
        eyebrow="Image Checker"
        title="Review suspicious images before you trust what you see."
        description="Choose an image and get a careful checklist for common fake-image warning signs, without exaggerated detection claims."
      >
        <Link
          href="/"
          className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
        >
          Back to Homepage
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-3 md:py-4">
        <ImageCheckerTool />
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-14 md:grid-cols-2">
        <SectionCard title="What this page will do">
          <ul className="space-y-3 text-sm leading-7">
            <li>• Explain what to inspect in suspicious images</li>
            <li>• Help users spot fake details, warped text, and strange lighting</li>
            <li>• Suggest safer verification steps like reverse image search</li>
          </ul>
        </SectionCard>

        <SectionCard title="Use it carefully">
          <p className="text-sm leading-7">
            This tool is intentionally honest about its limits. It helps users review visual clues,
            but it does not claim to prove whether an image is real or fake by itself.
          </p>
        </SectionCard>
      </section>
    </>
  );
}
