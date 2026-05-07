import type { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  children: ReactNode;
};

export function SectionCard({ title, children }: SectionCardProps) {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200/90 bg-white/92 p-6 shadow-[0_22px_45px_-30px_rgba(15,23,42,0.42)]">
      <div aria-hidden="true" className="mb-5 h-1 w-14 rounded-full bg-emerald-600" />
      <h2 className="text-[1.65rem] font-black leading-snug text-slate-950 md:text-[2rem]">
        {title}
      </h2>
      <div className="mt-4 text-slate-600">{children}</div>
    </section>
  );
}