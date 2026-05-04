export default function LinkCheckerPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <a href="/" className="text-sm text-blue-600 hover:underline">
          ← Back to ScamCheckTool
        </a>

        <div className="mt-8 rounded-3xl border bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-black tracking-tight">
            Suspicious Link Checker – Is this link safe?
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Use our free link checker to identify suspicious URLs, phishing links,
            and fake websites before you click.
          </p>

          <a
            href="/"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Open Link Checker Tool
          </a>
        </div>

        <div className="min-h-[90px] opacity-0 pointer-events-none select-none"></div>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">How to check if a link is safe</h2>

            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Check whether it starts with https://</li>
              <li>• Look carefully at the real domain name</li>
              <li>• Be cautious with login, verify, or secure wording</li>
              <li>• Be careful with shortened links such as bit.ly or tinyurl</li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Common phishing link tricks</h2>

            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Fake banking login pages</li>
              <li>• Delivery tracking scam links</li>
              <li>• Account verification scams</li>
              <li>• Brand impersonation for PayPal, Amazon, Apple, or banks</li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}