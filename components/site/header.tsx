import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import { primaryNav, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-700 text-white shadow-sm shadow-emerald-900/20">
              <ShieldCheck size={22} />
            </div>

            <div className="min-w-0">
              <div className="truncate text-lg font-extrabold tracking-tight text-slate-950">
                {siteConfig.name}
              </div>
              <div className="truncate text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                {siteConfig.brandLine}
              </div>
            </div>
          </Link>

          <Link
            href="/scam-checker"
            className="shrink-0 rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-semibold !text-white transition hover:bg-emerald-800"
          >
            Start Check
          </Link>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-600 md:justify-end">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}