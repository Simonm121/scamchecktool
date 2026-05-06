import Link from "next/link";
import { ShieldCheck } from "lucide-react";

import { primaryNav, siteConfig } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-emerald-700 p-2.5 text-white shadow-sm">
            <ShieldCheck size={22} />
          </div>

          <div>
            <div className="text-lg font-extrabold tracking-tight text-slate-950">
              {siteConfig.name}
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {siteConfig.brandLine}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/scam-checker"
          className="rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold !text-white shadow-sm transition hover:bg-emerald-800"
        >
          Start Check
        </Link>
      </div>
    </header>
  );
}
