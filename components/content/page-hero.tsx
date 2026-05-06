import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200/70 bg-white/70">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-12">
        <div className="max-w-3xl space-y-5">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            {title}
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-slate-600">{description}</p>

          {children ? <div className="pt-0">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}
