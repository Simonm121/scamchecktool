"use client";

import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Image as ImageIcon,
  Link as LinkIcon,
  Lock,
  MessageSquare,
  Search,
  ShieldCheck,
  Zap,
} from "lucide-react";

type Result = {
  risk: string;
  score: number;
  summary: string;
  meaning: string;
  safeReply: string;
  reasons: string[];
  recommendations: string[];
  confidence: string;
};

export default function Home() {
  const [activeTool, setActiveTool] = useState<"message" | "link" | "image">("message");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [imageName, setImageName] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const getRiskLevel = (score: number) => {
    if (score >= 70) return "High Risk";
    if (score >= 35) return "Suspicious";
    return "Low Risk";
  };

  const analyzeMessage = () => {
    const text = message.toLowerCase();
    let score = 0;
    const reasons: string[] = [];
    const recommendations: string[] = [];

    if (!text.trim()) {
      setResult({
        risk: "No message entered",
        score: 0,
        summary: "Paste a suspicious message first so ScamCheckTool can review it.",
        meaning: "There is not enough information to analyse yet.",
        safeReply: "Paste a message above to get a safer reply suggestion.",
        reasons: ["No message was entered."],
        recommendations: ["Paste the full message you want to check."],
        confidence: "No analysis was performed.",
      });
      return;
    }

    if (
      text.includes("urgent") ||
      text.includes("immediately") ||
      text.includes("today") ||
      text.includes("now") ||
      text.includes("asap")
    ) {
      score += 25;
      reasons.push("Uses urgent or high-pressure language.");
    }

    if (
      text.includes("bank") ||
      text.includes("transfer") ||
      text.includes("send money") ||
      text.includes("payment") ||
      text.includes("account") ||
      text.includes("crypto")
    ) {
      score += 25;
      reasons.push("Mentions money, banking, payments, crypto, or account access.");
    }

    if (
      text.includes("mum") ||
      text.includes("dad") ||
      text.includes("new number") ||
      text.includes("lost my phone") ||
      text.includes("this is my new number")
    ) {
      score += 25;
      reasons.push("Could be impersonating a family member or trusted contact.");
    }

    if (
      text.includes("click") ||
      text.includes("verify") ||
      text.includes("password") ||
      text.includes("login") ||
      text.includes("code")
    ) {
      score += 25;
      reasons.push("Asks you to click, verify, log in, share a code, or provide sensitive details.");
    }

    const risk = getRiskLevel(score);

    if (risk === "High Risk") {
      recommendations.push("Do not click links, send money, or share personal information.");
      recommendations.push("Contact the person or company using a trusted phone number or official website.");
      recommendations.push("Report the message as spam or phishing if it came by text, email, or social media.");
    } else if (risk === "Suspicious") {
      recommendations.push("Be cautious before replying or clicking anything.");
      recommendations.push("Check the sender carefully and verify the request through another trusted channel.");
      recommendations.push("Do not share passwords, codes, banking details, or identity documents.");
    } else {
      recommendations.push("No major warning signs were found, but still stay cautious.");
      recommendations.push("Check the sender, links, spelling, and request before taking action.");
    }

    setResult({
      risk,
      score,
      summary:
        risk === "High Risk"
          ? "This message shows multiple scam warning signs. It may be trying to pressure you into acting quickly, sharing sensitive information, or sending money."
          : risk === "Suspicious"
          ? "This message contains some warning signs. It may not be a scam, but you should verify it carefully before responding."
          : "This message does not show obvious scam indicators based on this quick check. That does not guarantee it is safe.",
      meaning:
        risk === "High Risk"
          ? "This could be a scam attempt. The safest choice is to pause, avoid replying directly, and verify the request through a trusted method."
          : risk === "Suspicious"
          ? "This may be legitimate, but there are enough warning signs that you should slow down and confirm who sent it."
          : "This looks lower risk based on the warning signs checked, but scams can still be subtle.",
      safeReply:
        risk === "High Risk"
          ? "I cannot act on this request here. I will contact you or the company directly using details I already trust."
          : risk === "Suspicious"
          ? "Before I do anything, can you confirm this through another trusted method?"
          : "Thanks. I will still double-check the details before taking action.",
      reasons: reasons.length ? reasons : ["No obvious scam warning signs were detected."],
      recommendations,
      confidence:
        risk === "Low Risk"
          ? "Basic confidence: this is a rule-based check, not a full security scan."
          : "Medium confidence: several common scam patterns were found.",
    });
  };

  const analyzeLink = () => {
    const url = link.toLowerCase();
    let score = 0;
    const reasons: string[] = [];
    const recommendations: string[] = [];

    if (!url.trim()) {
      setResult({
        risk: "No link entered",
        score: 0,
        summary: "Paste a suspicious link first so ScamCheckTool can review it.",
        meaning: "There is no link to analyse yet.",
        safeReply: "Paste the full link above to check it.",
        reasons: ["No link was entered."],
        recommendations: ["Paste the full link you want to check."],
        confidence: "No analysis was performed.",
      });
      return;
    }

    if (!url.startsWith("https://")) {
      score += 25;
      reasons.push("The link does not start with https://.");
    }

    if (url.includes("@")) {
      score += 25;
      reasons.push("The link contains an @ symbol, which can hide the real destination.");
    }

    if (
      url.includes("login") ||
      url.includes("verify") ||
      url.includes("account") ||
      url.includes("secure")
    ) {
      score += 20;
      reasons.push("The link uses words commonly found in fake login or verification pages.");
    }

    if (url.includes("bit.ly") || url.includes("tinyurl") || url.includes("t.co")) {
      score += 25;
      reasons.push("The link appears to use a URL shortener, which can hide the final website.");
    }

    if (
      url.includes("-") &&
      (url.includes("paypal") ||
        url.includes("bank") ||
        url.includes("apple") ||
        url.includes("amazon"))
    ) {
      score += 25;
      reasons.push("The link may be using a brand name in a suspicious-looking domain.");
    }

    const risk = getRiskLevel(score);

    if (risk === "High Risk") {
      recommendations.push("Do not open the link or enter any information.");
      recommendations.push("Visit the company website directly by typing the official address yourself.");
      recommendations.push("If you already entered details, change your password and contact your bank or provider.");
    } else if (risk === "Suspicious") {
      recommendations.push("Do not log in through this link until you verify the website.");
      recommendations.push("Check the domain name carefully for misspellings or extra words.");
      recommendations.push("Search for the official company website separately.");
    } else {
      recommendations.push("No major link warning signs were found in this quick check.");
      recommendations.push("Still avoid entering passwords or payment details unless you fully trust the site.");
    }

    setResult({
      risk,
      score,
      summary:
        risk === "High Risk"
          ? "This link has several risky patterns. It may be designed to imitate a trusted website or trick you into entering sensitive information."
          : risk === "Suspicious"
          ? "This link has some suspicious features. You should verify the destination before opening it or entering details."
          : "This link does not show obvious warning signs from this quick check, but that does not guarantee it is safe.",
      meaning:
        risk === "High Risk"
          ? "This link may be part of a phishing attempt. Avoid using it and go directly to the official website instead."
          : risk === "Suspicious"
          ? "This link may still be legitimate, but it has patterns often seen in suspicious URLs."
          : "This link looks lower risk based on visible URL checks only.",
      safeReply:
        risk === "High Risk"
          ? "I will not use this link. I will visit the official website directly instead."
          : risk === "Suspicious"
          ? "Can you send the official website address instead of this link?"
          : "I will still check the website carefully before entering any information.",
      reasons: reasons.length ? reasons : ["No obvious link warning signs were detected."],
      recommendations,
      confidence:
        risk === "Low Risk"
          ? "Basic confidence: this checks visible URL patterns only."
          : "Medium confidence: suspicious URL patterns were detected.",
    });
  };

  const analyzeImage = () => {
    if (!imageName) {
      setResult({
        risk: "No image selected",
        score: 0,
        summary: "Choose an image first so ScamCheckTool can give review guidance.",
        meaning: "There is no image to review yet.",
        safeReply: "Upload an image above to get review guidance.",
        reasons: ["No image was selected."],
        recommendations: ["Upload the image you want to review."],
        confidence: "No analysis was performed.",
      });
      return;
    }

    setResult({
      risk: "Needs Review",
      score: 50,
      summary:
        "This version does not perform full AI image detection yet, but it can guide you through common deepfake and scam-image warning signs.",
      meaning:
        "Images can be edited, AI-generated, or reused from another source. The safest approach is to verify where the image came from before trusting it.",
      safeReply:
        "Before I trust this image, I want to verify the original source and check whether it appears elsewhere online.",
      reasons: [
        "AI-generated or edited images may contain distorted hands, teeth, text, shadows, reflections, or backgrounds.",
        "Scam images often appear with urgent messages, fake celebrity endorsements, investment claims, or emotional stories.",
        "The source of the image matters. Unknown senders, new accounts, and pressure to act quickly increase risk.",
      ],
      recommendations: [
        "Reverse image search the picture to see where else it appears online.",
        "Check whether the image came from an official or trusted source.",
        "Be cautious if the image is connected to money, prizes, romance, crypto, charity, or urgent requests.",
      ],
      confidence: "Guidance only: full image-forensics detection is not enabled yet.",
    });
  };

  const runCheck = () => {
    if (activeTool === "message") analyzeMessage();
    if (activeTool === "link") analyzeLink();
    if (activeTool === "image") analyzeImage();
  };

  const resultColor =
    result?.risk === "High Risk"
      ? "border-red-200 bg-red-50 text-red-900"
      : result?.risk === "Suspicious" || result?.risk === "Needs Review"
      ? "border-yellow-200 bg-yellow-50 text-yellow-900"
      : result?.risk === "Low Risk"
      ? "border-green-200 bg-green-50 text-green-900"
      : "border-slate-200 bg-slate-50 text-slate-800";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-blue-600 p-2 text-white shadow-sm">
              <ShieldCheck size={24} />
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight">ScamCheckTool</div>
              <div className="text-xs text-slate-500">
                AI Scam & Deepfake Checker by Privacy Toolbox
              </div>
            </div>
          </div>

          <a
            href="#checker"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-700"
          >
            Start check
          </a>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-b from-blue-50 via-white to-slate-50">
          <div className="mx-auto max-w-6xl px-5 py-12 text-center">
            <div className="mx-auto mb-5 inline-flex rounded-full border bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
              Free scam, phishing link and deepfake warning-sign checker
            </div>

            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Check if a message, link, or image looks like a scam
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Paste suspicious content and get a clear risk score, explanation, warning signs,
              safe reply suggestion, and recommended next steps. No account needed.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 text-sm text-slate-600">
              <span className="rounded-full border bg-white px-4 py-2 shadow-sm">No login</span>
              <span className="rounded-full border bg-white px-4 py-2 shadow-sm">Fast & free</span>
              <span className="rounded-full border bg-white px-4 py-2 shadow-sm">Privacy-focused</span>
            </div>

            <div
              id="checker"
              className="mx-auto mt-10 max-w-3xl rounded-3xl border bg-white p-5 text-left shadow-xl shadow-slate-200/70"
            >
              <div className="mb-4 grid grid-cols-3 gap-2">
                {["message", "link", "image"].map((tool) => (
                  <button
                    key={tool}
                    onClick={() => {
                      setActiveTool(tool as "message" | "link" | "image");
                      setResult(null);
                    }}
                    className={`rounded-xl px-3 py-3 text-sm font-bold ${
                      activeTool === tool ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {tool === "message" && <MessageSquare size={16} />}
                      {tool === "link" && <LinkIcon size={16} />}
                      {tool === "image" && <ImageIcon size={16} />}
                      {tool.charAt(0).toUpperCase() + tool.slice(1)}
                    </span>
                  </button>
                ))}
              </div>

              {activeTool === "message" && (
                <>
                  <label className="text-sm font-bold">Paste suspicious message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 h-32 w-full rounded-2xl border p-3 text-sm outline-blue-500"
                    placeholder="Example: Hi mum, this is my new number. I urgently need you to send money today..."
                  />
                </>
              )}

              {activeTool === "link" && (
                <>
                  <label className="text-sm font-bold">Paste suspicious link</label>
                  <input
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="mt-2 w-full rounded-2xl border p-3 text-sm outline-blue-500"
                    placeholder="Example: https://secure-login-example.com"
                  />
                </>
              )}

              {activeTool === "image" && (
                <>
                  <label className="text-sm font-bold">Choose suspicious image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      setImageName(e.target.files?.[0]?.name || "");
                      setResult(null);
                    }}
                    className="mt-2 w-full rounded-2xl border p-3 text-sm"
                  />
                  {imageName && <p className="mt-2 text-sm text-slate-600">Selected: {imageName}</p>}
                </>
              )}

              <button
                onClick={runCheck}
                className="mt-4 w-full rounded-2xl bg-blue-600 py-3 font-black text-white shadow-sm hover:bg-blue-700"
              >
                Analyze {activeTool === "message" ? "Message" : activeTool === "link" ? "Link" : "Image"}
              </button>

              <p className="mt-3 text-center text-xs text-slate-500">
                Guidance only. Do not enter passwords, bank details, or private personal information.
              </p>

              {result && (
                <div className={`mt-5 rounded-2xl border p-5 ${resultColor}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-lg font-black">
                      {result.risk === "Low Risk" ? <CheckCircle size={20} /> : <AlertTriangle size={20} />}
                      {result.risk}
                    </div>
                    <div className="rounded-full bg-white/70 px-3 py-1 text-sm font-black">
                      Score: {result.score}/100
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6">{result.summary}</p>

                  <div className="mt-4 rounded-2xl bg-white/70 p-4">
                    <h4 className="font-black">What this means</h4>
                    <p className="mt-2 text-sm leading-6">{result.meaning}</p>
                  </div>

                  <div className="mt-4 rounded-2xl bg-white/70 p-4">
                    <h4 className="font-black">Safe reply suggestion</h4>
                    <p className="mt-2 text-sm leading-6">“{result.safeReply}”</p>
                  </div>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-white/70 p-4">
                      <h4 className="font-black">Warning signs found</h4>
                      <ul className="mt-2 space-y-2 text-sm">
                        {result.reasons.map((reason, index) => (
                          <li key={index}>• {reason}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl bg-white/70 p-4">
                      <h4 className="font-black">Recommended next steps</h4>
                      <ul className="mt-2 space-y-2 text-sm">
                        {result.recommendations.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="mt-4 rounded-2xl bg-white/70 p-3 text-xs leading-5">
                    {result.confidence} ScamCheckTool provides guidance only and cannot guarantee whether
                    something is safe or unsafe.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-6">
          <div className="min-h-[90px] opacity-0 pointer-events-none select-none"></div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10">
          <h2 className="text-center text-3xl font-black tracking-tight">
            Free online safety tools
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Quick checks for common scam warning signs before you click, reply, pay, or share information.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <a href="/scam-checker" className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-md">
              <MessageSquare className="text-blue-600" />
              <h3 className="mt-4 text-lg font-black">Scam Message Checker</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Check suspicious texts, emails, DMs and marketplace messages for pressure tactics.
              </p>
            </a>

            <a href="/link-checker" className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-md">
              <LinkIcon className="text-blue-600" />
              <h3 className="mt-4 text-lg font-black">Suspicious Link Checker</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Look for risky URL patterns, fake login pages, short links and brand impersonation.
              </p>
            </a>

            <a href="/deepfake-checker" className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-md">
              <ImageIcon className="text-blue-600" />
              <h3 className="mt-4 text-lg font-black">AI Image & Deepfake Checker</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Review image warning signs and learn what to inspect before trusting visual content.
              </p>
            </a>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 py-12 md:grid-cols-3">
            <div className="rounded-3xl border bg-slate-50 p-6">
              <Search className="text-blue-600" />
              <h3 className="mt-3 font-black">Built for search traffic</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Structured around searches like scam checker, suspicious link checker and deepfake checker.
              </p>
            </div>

            <div className="rounded-3xl border bg-slate-50 p-6">
              <Lock className="text-blue-600" />
              <h3 className="mt-3 font-black">Privacy-first guidance</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Users are warned not to enter passwords, banking details or private personal information.
              </p>
            </div>

            <div className="rounded-3xl border bg-slate-50 p-6">
              <Zap className="text-blue-600" />
              <h3 className="mt-3 font-black">Fast and simple</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Clear results help users understand warning signs quickly without technical language.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white px-5 py-8 text-sm text-slate-600">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-black text-slate-900">ScamCheckTool</div>
            <div>AI Scam & Deepfake Checker by Privacy Toolbox</div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              className="inline-flex items-center gap-1 underline"
              href="https://quickprivacytools.com"
              target="_blank"
            >
              Quick Privacy Tools <ExternalLink size={12} />
            </a>
            <a className="underline" href="/privacy">Privacy Policy</a>
            <a className="underline" href="/terms">Terms</a>
            <a className="underline" href="/contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}