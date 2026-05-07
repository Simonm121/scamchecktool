"use client";

import { useState } from "react";

import { ResultPanel, type CheckerResult } from "@/components/tools/result-panel";

function buildResult(imageName: string): CheckerResult {
  if (!imageName) {
    return {
      label: "Choose an image first",
      tone: "neutral",
      summary: "Select an image so the checker can return a careful review checklist.",
      reasons: ["No image has been selected yet."],
      nextSteps: ["Upload a screenshot or image without including sensitive private information."],
    };
  }

  return {
    label: "Needs manual review",
    tone: "warning",
    summary: "This tool does not claim to prove whether an image is fake. It gives a careful checklist to help you inspect suspicious visual content.",
    reasons: [
      `Selected image: ${imageName}`,
      "Hands, teeth, text, and jewellery are common places where fake details show up.",
      "Reflections, shadows, and background blur can reveal image manipulation.",
      "Source checking and reverse image search are still important.",
    ],
    nextSteps: [
      "Zoom in and inspect small details like fingers, earrings, and text.",
      "Look for distorted backgrounds, strange reflections, or inconsistent lighting.",
      "Reverse image search the picture and compare it with trusted sources before sharing it.",
    ],
  };
}

export function ImageCheckerTool() {
  const [imageName, setImageName] = useState("");
  const [result, setResult] = useState<CheckerResult | null>(null);

  return (
    <section className="rounded-[2rem] border border-slate-300 bg-[#d9d9d9] p-6 shadow-sm shadow-slate-300/60">
      <div className="space-y-2">
        <h2 className="text-2xl font-black tracking-tight text-slate-950">Choose a suspicious image</h2>
        <p className="text-sm leading-7 text-slate-600">
          This version provides an honest visual review checklist rather than pretending to offer full AI detection.
        </p>
      </div>

      <label className="mt-6 block text-sm font-bold text-slate-800" htmlFor="image-input">
        Suspicious image
      </label>
      <input
        id="image-input"
        type="file"
        accept="image/*"
        onChange={(event) => {
          setImageName(event.target.files?.[0]?.name || "");
          setResult(null);
        }}
        className="mt-2 h-40 w-full rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500"
      />

      {imageName ? <p className="mt-3 text-sm text-slate-600">Selected image: {imageName}</p> : null}

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setResult(buildResult(imageName))}
          className="rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-emerald-800"
        >
          Review Image
        </button>
        <button
          type="button"
          onClick={() => {
            setImageName("");
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
