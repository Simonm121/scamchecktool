export default function DeepfakeCheckerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-4xl font-extrabold tracking-tight">
          AI Image & Deepfake Checker – Is this image fake?
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Use our free deepfake checker to spot signs of AI-generated images,
          manipulated photos, and fake visual content before you trust or share it.
        </p>

        <div className="mt-8 rounded-xl border bg-gray-50 p-6">
          <h2 className="text-2xl font-bold">How to spot a fake image</h2>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Look for distorted hands, fingers, or faces</li>
            <li>• Check for strange shadows or lighting</li>
            <li>• Look for blurry or warped text in the image</li>
            <li>• Check backgrounds for unnatural details</li>
            <li>• Reverse search the image online</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold">Use the Deepfake Checker Tool</h2>

          <p className="mt-3 text-gray-600">
            Go back to the main tool to check an image instantly:
          </p>

          <a
            href="/"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
          >
            Open Deepfake Checker Tool
          </a>
        </div>

        <div className="mt-10 border border-dashed p-6 text-center text-sm text-gray-500">
          Advertisement space
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Common deepfake uses</h2>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Fake celebrity images</li>
            <li>• AI-generated faces and people</li>
            <li>• Fake news and misinformation images</li>
            <li>• Scams using fake profile pictures</li>
            <li>• Edited screenshots and documents</li>
          </ul>
        </div>
      </main>
    </div>
  );
}