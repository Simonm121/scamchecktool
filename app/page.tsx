"use client";

import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle,
  Link as LinkIcon,
  MessageSquare,
  Image as ImageIcon,
  ShieldCheck,
  Search,
  Lock,
  ExternalLink,
} from "lucide-react";

type Result = {
  risk: string;
  reasons: string[];
};

export default function Home() {
  const [activeTool, setActiveTool] = useState<"message" | "link" | "image">(
    "message"
  );
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [imageName, setImageName] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const analyzeMessage = () => {
    const text = message.toLowerCase();
    const reasons: string[] = [];

    if (!text.trim()) {
      setResult({
        risk: "No message entered",
        reasons: ["Paste a suspicious message first."],
      });
      return;
    }

    if (
      text.includes("urgent") ||
      text.includes("immediately") ||
      text.includes("today") ||
      text.includes("now") ||
      text.includes("before")
    ) {
      reasons.push("Creates urgency or pressure");
    }

    if (
      text.includes("bank") ||
      text.includes("transfer") ||
      text.includes("send money") ||
      text.includes("payment") ||
      text.includes("account") ||
      text.includes("crypto") ||
      text.includes("gift card")
    ) {
      reasons.push("Mentions money, banking, payment, crypto, or gift cards");
    }

    if (
      text.includes("mum") ||
      text.includes("dad") ||
      text.includes("son") ||
      text.includes("daughter") ||
      text.includes("i am your") ||
      text.includes("this is your") ||
      text.includes("new number")
    ) {
      reasons.push("Possible impersonation attempt");
    }

    if (
      text.includes("click this") ||
      text.includes("verify") ||
      text.includes("password") ||
      text.includes("login") ||
      text.includes("confirm your details")
    ) {
      reasons.push("Asks you to click, verify, log in, or share details");
    }

    if (
      text.includes("prize") ||
      text.includes("winner") ||
      text.includes("refund") ||
      text.includes("parcel") ||
      text.includes("delivery failed")
    ) {
      reasons.push("Uses common scam wording such as prize, refund, or delivery issue");
    }

    const risk =
      reasons.length >= 3
        ? "High Risk"
        : reasons.length >= 1
        ? "Suspicious"
        : "Low Risk";

    setResult({
      risk,
      reasons: reasons.length
        ? reasons
        : ["No obvious scam warning signs found."],
    });
  };

  const analyzeLink = () => {
    const url = link.toLowerCase();
    const reasons: string[] = [];

    if (!url.trim()) {
      setResult({
        risk: "No link entered",
        reasons: ["Paste a suspicious link first."],
      });
      return;
    }

    if (!url.startsWith("https://")) {
      reasons.push("The link does not start with https://");
    }

    if (url.includes("@")) {
      reasons.push("The link contains an @ symbol, which can hide the real destination");
    }

    if (
      url.includes("login") ||
      url.includes("verify") ||
      url.includes("account") ||
      url.includes("update-payment") ||
      url.includes("secure")
    ) {
      reasons.push("The link uses login, verify, account, or secure wording");
    }

    if (
      url.includes("bit.ly") ||
      url.includes("tinyurl") ||
      url.includes("t.co") ||
      url.includes("shorturl") ||
      url.includes("ow.ly")
    ) {
      reasons.push("The link appears to use a URL shortener");
    }

    if (
      (url.includes("paypal") && !url.includes("paypal.com")) ||
      (url.includes("amazon") && !url.includes("amazon.")) ||
      (url.includes("apple") && !url.includes("apple.com")) ||
      url.includes("secure-login") ||
      url.includes("bank")
    ) {
      reasons.push("The link may be pretending to be a trusted brand");
    }

    const risk =
      reasons.length >= 3
        ? "High Risk"
        : reasons.length >= 1
        ? "Suspicious"
        : "Low Risk";

    setResult({
      risk,
      reasons: reasons.length
        ? reasons
        : ["No obvious link warning signs found."],
    });
  };

  const analyzeImage = () => {
    if (!imageName) {
      setResult({
        risk: "No image selected",
        reasons: ["Choose an image first."],
      });
      return;
    }

    setResult({
      risk: "Needs Review",
      reasons: [
        "Check whether the image comes from a trusted source.",
        "Look for unusual hands, teeth, text, logos, shadows, reflections, or blurry backgrounds.",
        "Reverse image search the picture if it seems suspicious.",
        "This first version checks warning signs only, not full AI detection yet.",
      ],
    });
  };

  const runCheck = () => {
    if (activeTool === "message") analyzeMessage();
    if (activeTool === "link") analyzeLink();
    if (activeTool === "image") analyzeImage();
  };

  const resultColor =
    result?.risk === "High Risk"
      ? "border-red-300 bg-red-50 text-red-800"
      : result?.risk === "Suspicious" || result?.risk === "Needs Review"
      ? "border-yellow-300 bg-yellow-50 text-yellow-800"
      : result?.risk === "Low Risk"
      ? "border-green-300 bg-green-50 text-green-800"
      : "border-gray-300 bg-gray-50 text-gray-800";

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-2">
              <ShieldCheck className="text-blue-600" size={24} />
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight">ScamCheckTool</div>
              <div className="text-xs text-gray-500">
                AI Scam & Deepfake Checker by Privacy Toolbox
              </div>
            </div>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 210, behavior: "smooth" })}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Start check
          </button>
        </div>
      </header>

      <main>
        <section className="border-b bg-gradient-to-b from-blue-50 to-white">
          <div className="mx-auto max-w-6xl px-5 py-12 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full border bg-white px-4 py-2 text-sm text-gray-600 shadow-sm">
              Free scam, phishing link and deepfake warning-sign checker
            </div>

            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Check if a message, link, or image looks like a scam
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Paste suspicious content and get a simple risk result with clear warning signs.
              No account needed.
            </p>

            <div className="mx-auto mt-8 max-w-3xl rounded-2xl border bg-white p-5 text-left shadow-sm">
              <div className="mb-4 grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setActiveTool("message");
                    setResult(null);
                  }}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                    activeTool === "message"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <MessageSquare size={16} />
                    Message
                  </span>
                </button>

                <button
                  onClick={() => {
                    setActiveTool("link");
                    setResult(null);
                  }}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                    activeTool === "link"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <LinkIcon size={16} />
                    Link
                  </span>
                </button>

                <button
                  onClick={() => {
                    setActiveTool("image");
                    setResult(null);
                  }}
                  className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                    activeTool === "image"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <ImageIcon size={16} />
                    Image
                  </span>
                </button>
              </div>

              {activeTool === "message" && (
                <>
                  <label className="font-semibold text-sm">
                    Paste suspicious message
                  </label>

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 h-32 w-full rounded-xl border p-3 text-sm outline-blue-500"
                    placeholder="Example: Hi mum, I need you to urgently send money..."
                  />
                </>
              )}

              {activeTool === "link" && (
                <>
                  <label className="font-semibold text-sm">
                    Paste suspicious link
                  </label>

                  <input
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    className="mt-2 w-full rounded-xl border p-3 text-sm outline-blue-500"
                    placeholder="Example: https://secure-login-example.com"
                  />
                </>
              )}

              {activeTool === "image" && (
                <>
                  <label className="font-semibold text-sm">
                    Choose suspicious image
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      setImageName(e.target.files?.[0]?.name || "");
                      setResult(null);
                    }}
                    className="mt-2 w-full rounded-xl border p-3 text-sm"
                  />

                  {imageName && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected: {imageName}
                    </p>
                  )}
                </>
              )}

              <button
                onClick={runCheck}
                className="mt-4 w-full rounded-xl bg-blue-600 py-3 font-bold text-white"
              >
                Analyze{" "}
                {activeTool === "message"
                  ? "Message"
                  : activeTool === "link"
                  ? "Link"
                  : "Image"}
              </button>

              <p className="mt-3 text-center text-xs text-gray-500">
                Guidance only. Do not enter passwords, bank details, or private personal information.
              </p>

              {result && (
                <div className={`mt-5 rounded-xl border p-4 ${resultColor}`}>
                  <div className="flex items-center gap-2 font-bold">
                    {result.risk === "Low Risk" ? (
                      <CheckCircle size={18} />
                    ) : (
                      <AlertTriangle size={18} />
                    )}
                    {result.risk}
                  </div>

                  <ul className="mt-2 space-y-1 text-sm">
                    {result.reasons.map((reason, index) => (
                      <li key={index}>• {reason}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-6">
          <div className="rounded-xl border border-dashed bg-gray-50 p-5 text-center text-sm text-gray-500">
            Advertisement space — keep ads separate from tool buttons and results
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            Free online safety checks
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
            Quick checks for common scam warning signs before you click, reply, pay, or share information.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <MessageSquare className="text-blue-600" />
              <h3 className="mt-4 text-lg font-bold">Scam Message Checker</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Check suspicious texts, emails, DMs and marketplace messages for pressure tactics.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <LinkIcon className="text-blue-600" />
              <h3 className="mt-4 text-lg font-bold">Suspicious Link Checker</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Look for risky URL patterns, fake login pages, short links and brand impersonation.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <ImageIcon className="text-blue-600" />
              <h3 className="mt-4 text-lg font-bold">AI Image & Deepfake Checker</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Review image warning signs and learn what to inspect before trusting visual content.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 py-12 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <Search className="text-blue-600" />
              <h3 className="mt-3 font-bold">Built for search traffic</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                The site is structured around common searches like scam checker, suspicious link checker and deepfake checker.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <Lock className="text-blue-600" />
              <h3 className="mt-3 font-bold">Privacy-first guidance</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Users are warned not to enter passwords, banking details or private personal information.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <ShieldCheck className="text-blue-600" />
              <h3 className="mt-3 font-bold">Designed for trust</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Clean design, simple results and clear disclaimers help the site feel safe and credible.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-10">
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-2xl font-extrabold">Important disclaimer</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              ScamCheckTool gives general warning-sign guidance only. It cannot guarantee that a message,
              link, image, website, or person is safe or unsafe. If something involves money, passwords,
              bank details, identity documents or urgent pressure, verify it directly through an official source.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t px-5 py-8 text-sm text-gray-600">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-bold text-gray-900">ScamCheckTool</div>
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
            <a className="underline" href="#">
              Privacy Policy
            </a>
            <a className="underline" href="#">
              Terms
            </a>
            <a className="underline" href="#">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}