export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      <p className="mb-6">
        If you have questions, feedback, or business inquiries, feel free to get in touch.
      </p>

      <div className="space-y-4">
        <p>
          📧 Email: <a href="mailto:contact@scamchecktool.com" className="text-blue-600 underline">contact@scamchecktool.com</a>
        </p>

        <p>
          We aim to respond as soon as possible.
        </p>
      </div>
    </main>
  );
}