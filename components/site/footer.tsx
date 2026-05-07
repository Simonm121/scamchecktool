import Link from "next/link";
import { ArrowUpRight, Shield } from "lucide-react";

import { footerNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/92">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.3fr_0.8fr_1fr]">
        <div className="space-y-4">
          <div>
            <div className="text-xl font-extrabold tracking-tight text-slate-950">
              {siteConfig.name}
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              {siteConfig.brandLine}
            </div>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600">
            Practical scam guidance for suspicious messages, risky links, and misleading images.
            Built to help people pause, check warning signs, and make safer decisions online.
          </p>
        </div>

        <div className="space-y-4">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Site
          </div>

          <div className="flex flex-col gap-3 text-sm text-slate-600">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium transition hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Privacy Toolbox
          </div>

          <p className="text-sm leading-7 text-slate-600">
            ScamCheckTool is part of a wider group of simple, trust-focused web tools.
          </p>

          <a
            href={siteConfig.sisterSiteUrl}
            target="_blank"
            rel="noreferrer"
            className="flex w-full max-w-sm items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-slate-300 hover:bg-white"
          >
            <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Shield size={18} />
            </span>

            <span className="min-w-0">
              <span className="flex items-center gap-2 text-sm font-extrabold text-slate-950">
                {siteConfig.sisterSiteLabel}
                <ArrowUpRight size={14} />
              </span>
              <span className="mt-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                by Privacy Toolbox
              </span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}