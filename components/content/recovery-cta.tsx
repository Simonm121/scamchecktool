"use client";

import Link from "next/link";
import { CreditCard, type LucideIcon, ShieldCheck } from "lucide-react";

import { AffiliateDisclosure } from "@/components/content/affiliate-disclosure";

type RecoveryCTAProps = {
  title: string;
  description: string;
  affiliateUrl: string;
  disclosureText?: string;
  ctaText: string;
  icon: "shield-check" | "credit-card";
  productType: string;
  trackingLabel: string;
};

const iconMap: Record<RecoveryCTAProps["icon"], LucideIcon> = {
  "credit-card": CreditCard,
  "shield-check": ShieldCheck,
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function RecoveryCTA({
  title,
  description,
  affiliateUrl,
  disclosureText,
  ctaText,
  icon,
  productType,
  trackingLabel,
}: RecoveryCTAProps) {
  const Icon = iconMap[icon];

  const handleClick = () => {
    window.gtag?.("event", "affiliate_cta_click", {
      event_category: "affiliate_cta",
      event_label: trackingLabel,
      product_type: productType,
    });
  };

  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_22px_45px_-30px_rgba(15,23,42,0.32)]">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          <Icon size={22} />
        </div>

        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Recommended next step
          </p>
          <h2 className="text-2xl font-black leading-tight text-slate-950">{title}</h2>
          <p className="text-sm leading-7 text-slate-600">{description}</p>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {productType}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={affiliateUrl}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          onClick={handleClick}
          className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-emerald-800"
        >
          {ctaText}
        </Link>
      </div>

      <div className="mt-5">
        <AffiliateDisclosure text={disclosureText} />
      </div>
    </section>
  );
}
