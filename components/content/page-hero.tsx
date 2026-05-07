import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(14,165,233,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.94))]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-6 md:pt-16 md:pb-8">
        <div className="max-w-4xl space-y-5">
          {eyebrow ? (
            <p className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-800">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="max-w-3xl text-3xl font-black leading-tight text-slate-950 md:text-[2.9rem]">
            {title}
          </h1>

          <p className="max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
            {description}
          </p>

          {children ? <div className="flex flex-wrap gap-3 pt-2">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}