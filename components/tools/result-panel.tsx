"use client";

import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

type ResultTone = "high" | "warning" | "low" | "neutral";

export type CheckerResult = {
  label: string;
  tone: ResultTone;
  summary: string;
  reasons: string[];
  nextSteps?: string[];
};

const toneClasses: Record<ResultTone, string> = {
  high: "border-red-200 bg-red-50 text-red-900",
  warning: "border-amber-200 bg-amber-50 text-amber-900",
  low: "border-emerald-200 bg-emerald-50 text-emerald-900",
  neutral: "border-slate-200 bg-slate-50 text-slate-900",
};

function ResultIcon({ tone }: { tone: ResultTone }) {
  if (tone === "low") {
    return <CheckCircle2 size={18} />;
  }

  if (tone === "neutral") {
    return <Info size={18} />;
  }

  return <AlertTriangle size={18} />;
}

export function ResultPanel({ result }: { result: CheckerResult | null }) {
  if (!result) {
    return null;
  }

  return (
    <section className={`rounded-3xl border p-5 ${toneClasses[result.tone]}`}>
      <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em]">
        <ResultIcon tone={result.tone} />
        {result.label}
      </div>

      <p className="mt-3 text-base font-medium leading-7">{result.summary}</p>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.18em]">Warning signs found</h3>
          <ul className="mt-3 space-y-2 text-sm leading-7">
            {result.reasons.map((reason) => (
              <li key={reason}>• {reason}</li>
            ))}
          </ul>
        </div>

        {result.nextSteps?.length ? (
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em]">Safer next steps</h3>
            <ul className="mt-3 space-y-2 text-sm leading-7">
              {result.nextSteps.map((step) => (
                <li key={step}>• {step}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
