"use client";

import { useState } from "react";

import { ResultPanel, type CheckerResult } from "@/components/tools/result-panel";

function buildResult(message: string): CheckerResult {
  const text = message.toLowerCase();
  const reasons: string[] = [];

  if (!text.trim()) {
    return {
      label: "Add a message first",
      tone: "neutral",
      summary: "Paste the suspicious message so the checker can review common scam warning signs.",
      reasons: ["No message has been entered yet."],
      nextSteps: ["Paste the full message text without including passwords or bank details."],
    };
  }

  if (text.includes("urgent") || text.includes("immediately") || text.includes("today") || text.includes("now")) {
    reasons.push("The message uses urgency or time pressure.");
  }

  if (
    text.includes("bank") ||
    text.includes("transfer") ||
    text.includes("payment") ||
    text.includes("send money") ||
    text.includes("account")
  ) {
    reasons.push("It mentions money, banking, payments, or account access.");
  }

  if (text.includes("mum") || text.includes("dad") || text.includes("new number") || text.includes("friend")) {
    reasons.push("It may be trying to impersonate someone you know.");
  }

  if (text.includes("click") || text.includes("verify") || text.includes("password") || text.includes("login")) {
    reasons.push("It asks you to click, verify something, or log in.");
  }

  if (text.includes("gift card") || text.includes("crypto") || text.includes("bitcoin")) {
    reasons.push("It uses payment methods often seen in scam requests.");
  }

  if (reasons.length >= 3) {
    return {
      label: "High risk",
      tone: "high",
      summary: "This message shows several warning signs that are common in online scams.",
      reasons,
      nextSteps: [
        "Do not send money or share codes, passwords, or personal details.",
        "Contact the person or company through a trusted phone number or website.",
        "Take a screenshot and report the message if it appears fraudulent.",
      ],
    };
  }

  if (reasons.length >= 1) {
    return {
      label: "Suspicious",
      tone: "warning",
      summary: "This message contains some warning signs, so it should be checked carefully before you act.",
      reasons,
      nextSteps: [
        "Pause before replying or clicking anything in the message.",
        "Verify the claim through an official website or known contact method.",
        "Ask someone you trust for a second opinion if money or identity details are involved.",
      ],
    };
  }

  return {
    label: "No obvious warning signs found",
    tone: "low",
    summary: "No common text-based scam signals stood out, but you should still verify important requests independently.",
    reasons: ["The message does not contain the most obvious pressure, payment, or login cues."],
    nextSteps: [
      "Still confirm requests for money, passwords, or personal details independently.",
      "Be extra careful if the sender is unknown or the request feels unusual.",
    ],
  };
}

export function MessageChecker() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<CheckerResult | null>(null);

  return (
    <section className="rounded-[2rem] border border-slate-300 bg-[#d9d9d9] p-6 shadow-sm shadow-slate-300/60">
      <div className="space-y-2">
        <h2 className="text-2xl font-black tracking-tight text-slate-950">Paste a suspicious message</h2>
        <p className="text-sm leading-7 text-slate-600">
          Check for pressure tactics, impersonation, and risky requests. Do not paste passwords,
          bank details, or private identity numbers.
        </p>
      </div>

      <label className="mt-6 block text-sm font-bold text-slate-800" htmlFor="message-input">
        Suspicious message
      </label>
      <textarea
        id="message-input"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="mt-2 h-40 w-full rounded-3xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500"
        placeholder="Example: Hi mum, I need you to urgently send money to this new account..."
      />

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setResult(buildResult(message))}
          className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-emerald-800"
        >
          Check Message
        </button>
        <button
          type="button"
          onClick={() => {
            setMessage("");
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
