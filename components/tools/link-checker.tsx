"use client";

import { useState } from "react";

import { ResultPanel, type CheckerResult } from "@/components/tools/result-panel";

function buildResult(link: string): CheckerResult {
  const url = link.trim().toLowerCase();
  const reasons: string[] = [];

  if (!url) {
    return {
      label: "Add a link first",
      tone: "neutral",
      summary: "Paste the suspicious link so the checker can review common phishing and scam patterns.",
      reasons: ["No link has been entered yet."],
      nextSteps: ["Paste the full URL without visiting it first if possible."],
    };
  }

  if (!url.startsWith("https://")) {
    reasons.push("The link does not start with https://.");
  }

  if (url.includes("@")) {
    reasons.push("The link contains an @ symbol, which can hide the real destination.");
  }

  if (url.includes("login") || url.includes("verify") || url.includes("account") || url.includes("secure")) {
    reasons.push("The wording suggests a login, verification, or account-related page.");
  }

  if (url.includes("bit.ly") || url.includes("tinyurl") || url.includes("t.co")) {
    reasons.push("The link appears to use a URL shortener.");
  }

  if (url.includes("free") || url.includes("bonus") || url.includes("gift")) {
    reasons.push("The link uses promotional language often seen in bait-style scams.");
  }

  if (reasons.length >= 3) {
    return {
      label: "High risk",
      tone: "high",
      summary: "This link contains several warning signs that are commonly associated with phishing or scam pages.",
      reasons,
      nextSteps: [
        "Do not open the link on a device where you are signed into important accounts.",
        "Visit the company or service by typing the official website address yourself.",
        "If you already clicked it, change important passwords and monitor sensitive accounts.",
      ],
    };
  }

  if (reasons.length >= 1) {
    return {
      label: "Suspicious",
      tone: "warning",
      summary: "This link deserves a closer look before you trust it or enter any information.",
      reasons,
      nextSteps: [
        "Check the full domain name carefully.",
        "Compare the link with the official website address from a trusted source.",
        "Avoid logging in or downloading files until you have verified it.",
      ],
    };
  }

  return {
    label: "No obvious warning signs found",
    tone: "low",
    summary: "No obvious text-based URL tricks stood out, but that does not guarantee the destination is safe.",
    reasons: ["The URL does not include the most common visible phishing patterns checked here."],
    nextSteps: [
      "Still verify the site before entering passwords, payment details, or personal data.",
      "Be cautious if the link arrived unexpectedly or under pressure.",
    ],
  };
}

export function LinkCheckerTool() {
  const [link, setLink] = useState("");
  const [result, setResult] = useState<CheckerResult | null>(null);

  return (
    <section className="rounded-[2rem] border border-slate-300 bg-[#d9d9d9] p-6 shadow-sm shadow-slate-300/60">
      <div className="space-y-2">
        <h2 className="text-2xl font-black tracking-tight text-slate-950">Paste a suspicious link</h2>
        <p className="text-sm leading-7 text-slate-600">
          Review common warning signs in a URL before you click, sign in, or enter personal details.
        </p>
      </div>

      <label className="mt-6 block text-sm font-bold text-slate-800" htmlFor="link-input">
        Suspicious link
      </label>
      <input
  id="link-input"
  value={link}
  onChange={(event) => setLink(event.target.value)}
  className="mt-2 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500"
  placeholder="Example: https://secure-login-example.com"
/>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setResult(buildResult(link))}
          className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-emerald-800"
        >
          Check Link
        </button>
        <button
          type="button"
          onClick={() => {
            setLink("");
            setResult(null);
          }}
          className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
        >
          Clear
        </button>
      </div>

      <div className="mt-6">
        <ResultPanel result={result} />
      </div>
    </section>
  );
}
