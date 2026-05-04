export default function ScamCheckerPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <a href="/" className="text-sm text-blue-600 hover:underline">
          ← Back to ScamCheckTool
        </a>

        <div className="mt-8 rounded-3xl border bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-black tracking-tight">
            Free Scam Checker – Is this a scam?
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Use our free scam checker to quickly identify suspicious messages,
            links, and common online scam warning signs before you reply, click,
            or send money.
          </p>

          <a
            href="/"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Open Scam Checker Tool
          </a>
        </div>

        <div className="min-h-[90px] opacity-0 pointer-events-none select-none"></div>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Common scam warning signs</h2>

            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Urgent requests for money or action</li>
              <li>• Messages pretending to be family, banks, or companies</li>
              <li>• Links asking you to log in or verify details</li>
              <li>• Offers that sound too good to be true</li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Common scam types</h2>

            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• “Hi mum” or impersonation scams</li>
              <li>• Fake delivery and parcel scams</li>
              <li>• Bank and payment phishing scams</li>
              <li>• Fake prize, refund, investment, or crypto scams</li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}