import { Shield } from "lucide-react";
import Link from "next/link";

import { footerNav, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:justify-between">
        <div className="max-w-md space-y-3">
          <div>
            <div className="text-lg font-extrabold text-slate-950">{siteConfig.name}</div>
            <div className="text-sm text-slate-500">{siteConfig.brandLine}</div>
          </div>

          <p className="text-sm leading-6 text-slate-600">
            Clear, plain-language scam guidance for suspicious messages, risky links, and fake
            images.
          </p>

          <p className="text-sm text-slate-500">
            Sister site:{" "}
            <a
              className="font-medium text-slate-700 underline underline-offset-4"
              href={siteConfig.sisterSiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              {siteConfig.sisterSiteLabel}
            </a>
          </p>

          <a
            href={siteConfig.sisterSiteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-3 rounded-2xl border border-slate-200 bg-[#e8f0ff] px-3 py-2 shadow-sm shadow-slate-200/50 transition hover:bg-[#dce8ff]"
          >
            <span className="rounded-xl bg-[#2563eb] p-2 text-white shadow-sm">
              <Shield size={16} />
            </span>
            <span>
              <span className="block text-sm font-extrabold leading-5 text-[#0f172a]">
                Quick Privacy Tools
              </span>
              <span className="block text-xs font-medium leading-4 text-[#334155]">
                by Privacy Toolbox
              </span>
            </span>
          </a>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
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
    </footer>
  );
}
