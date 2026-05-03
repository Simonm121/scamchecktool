export default function ScamCheckerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Free Scam Checker – Is this a scam?
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Use our free scam checker to quickly identify suspicious messages, links, and online scams.
          Learn the most common warning signs before you reply, click, or send money.
        </p>

        <div className="mt-8 rounded-xl border bg-gray-50 p-6">
          <h2 className="text-2xl font-bold">How to check if something is a scam</h2>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Urgent requests for money or action</li>
            <li>• Messages pretending to be family, banks, or companies</li>
            <li>• Links asking you to log in or verify details</li>
            <li>• Offers that sound too good to be true</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Use the Scam Checker Tool</h2>

          <p className="mt-3 text-gray-600">
            Go back to the main tool to check a message, link, or image instantly:
          </p>

          <a
            href="/"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Open Scam Checker Tool
          </a>
        </div>

        <div className="mt-10 border border-dashed p-6 text-center text-sm text-gray-500">
          Advertisement space
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Common scam types</h2>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• “Hi mum” or impersonation scams</li>
            <li>• Fake delivery and parcel scams</li>
            <li>• Bank and payment phishing scams</li>
            <li>• Fake prize or refund scams</li>
            <li>• Investment and crypto scams</li>
          </ul>
        </div>
      </main>
    </div>
  );
}