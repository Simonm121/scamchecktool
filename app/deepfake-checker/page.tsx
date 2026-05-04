export default function DeepfakeCheckerPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <a href="/" className="text-sm text-blue-600 hover:underline">
          ← Back to ScamCheckTool
        </a>

        <div className="mt-8 rounded-3xl border bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-black tracking-tight">
            AI Image & Deepfake Checker
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Learn how to spot fake images, AI-generated content, and deepfakes
            using simple visual checks before you trust what you see online.
          </p>

          <a
            href="/"
            className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Open Image Checker Tool
          </a>
        </div>

        {/* HIDDEN AD SPACE (kept but invisible) */}
        <div className="min-h-[90px] opacity-0 pointer-events-none select-none"></div>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">Signs an image may be fake</h2>

            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Unnatural hands, fingers, or facial features</li>
              <li>• Blurry or distorted backgrounds</li>
              <li>• Strange shadows or reflections</li>
              <li>• Text that looks warped or unreadable</li>
            </ul>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black">How to verify images</h2>

            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• Reverse image search using Google or TinEye</li>
              <li>• Check the original source of the image</li>
              <li>• Compare with trusted news or official websites</li>
              <li>• Be cautious of viral or emotionally charged images</li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}