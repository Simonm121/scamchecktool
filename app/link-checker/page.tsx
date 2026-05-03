export default function LinkCheckerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Suspicious Link Checker – Is this link safe?
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Use our free link checker to identify suspicious URLs, phishing links,
          and fake websites before you click. Learn the warning signs of unsafe links.
        </p>

        <div className="mt-8 rounded-xl border bg-gray-50 p-6">
          <h2 className="text-2xl font-bold">How to check if a link is safe</h2>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Does it start with https:// ?</li>
            <li>• Does the domain look correct (e.g. amazon.com vs amaz0n)?</li>
            <li>• Does it use login, verify, or secure wording?</li>
            <li>• Is it a shortened link (bit.ly, tinyurl, etc)?</li>
            <li>• Does it try to rush you to click?</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Use the Link Checker Tool</h2>

          <p className="mt-3 text-gray-600">
            Go back to the main tool to check a suspicious link instantly:
          </p>

          <a
            href="/"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Open Link Checker Tool
          </a>
        </div>

        <div className="mt-10 border border-dashed p-6 text-center text-sm text-gray-500">
          Advertisement space
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Common phishing link tricks</h2>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Fake banking login pages</li>
            <li>• Delivery tracking scam links</li>
            <li>• Account verification scams</li>
            <li>• Brand impersonation (PayPal, Amazon, Apple)</li>
            <li>• Shortened links hiding real destinations</li>
          </ul>
        </div>
      </main>
    </div>
  );
}