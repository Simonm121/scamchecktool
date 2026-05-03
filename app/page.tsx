"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const analyze = () => {
    if (!message) return;

    const lower = message.toLowerCase();

    if (
      lower.includes("urgent") ||
      lower.includes("bank") ||
      lower.includes("password") ||
      lower.includes("send money")
    ) {
      setResult("high");
    } else {
      setResult("low");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b bg-white">
        <div>
          <h1 className="font-bold text-lg">ScamCheckTool</h1>
          <p className="text-sm text-gray-500">
            AI Scam & Deepfake Checker by Privacy Toolbox
          </p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
          Start Check
        </button>
      </header>

      {/* Hero */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">
          Check if something is a scam in seconds
        </h2>
        <p className="text-gray-600">
          Paste a message, link, or image and get a simple safety check.
        </p>
      </section>

      {/* Tool */}
      <section className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow border">
        <h3 className="font-semibold mb-2">Paste suspicious message</h3>

        <textarea
          className="w-full border rounded-lg p-3 mb-4"
          placeholder="Paste message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={analyze}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg"
        >
          Analyze Message
        </button>

        {result === "high" && (
          <div className="mt-4 border border-red-300 bg-red-50 p-4 rounded-lg text-red-700">
            <strong>High Risk</strong>
            <ul className="list-disc ml-5 mt-2 text-sm">
              <li>Urgency / pressure language</li>
              <li>Requests sensitive info</li>
              <li>Possible impersonation</li>
            </ul>
          </div>
        )}

        {result === "low" && (
          <div className="mt-4 border border-green-300 bg-green-50 p-4 rounded-lg text-green-700">
            <strong>Low Risk</strong>
            <p className="text-sm mt-2">
              No obvious scam signals detected, but stay cautious.
            </p>
          </div>
        )}
      </section>

      {/* Ad Space (clean, no text) */}
      <div className="max-w-3xl mx-auto mt-10 border border-dashed rounded-xl p-6"></div>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-16 pb-10">
        © {new Date().getFullYear()} Privacy Toolbox
      </footer>
    </main>
  );
}