import Link from "next/link";
import { TriangleAlert } from "lucide-react";

import { PageHero } from "@/components/content/page-hero";
import { RecoveryCTA } from "@/components/content/recovery-cta";
import { SectionCard } from "@/components/content/section-card";

export const metadata = {
  title: "What To Do After Clicking a Phishing Link",
  description:
    "Calm, practical next steps to take after clicking a phishing link, with recovery guidance and trust-first protection options.",
};

const immediateSteps = [
  "Close the suspicious page and do not enter any more information.",
  "Disconnect from the page rather than interacting with popups, downloads, or warning messages on it.",
  "Think back to what happened: did you only open the page, or did you also type a password, payment details, or a code?",
  "Use the official website or app directly if you need to check a real account alert.",
];

const ifYouEnteredDetails = [
  "Change the affected password straight away from the real website or app, not from the suspicious link.",
  "If you reuse that password elsewhere, change those accounts as well.",
  "Turn on two-factor authentication where available.",
  "Contact your bank or card provider quickly if payment details were entered.",
];

const followUpChecks = [
  "Check recent sign-ins, password reset emails, and account notifications for unusual activity.",
  "Run a security scan if the page tried to download software, open files, or push browser notifications.",
  "Watch for follow-up scam calls, texts, or emails that reuse the same story.",
  "Keep screenshots or notes in case you need to report the incident.",
];

const faqs = [
  {
    question: "Is clicking a phishing link always enough to compromise a device?",
    answer:
      "Not always. In many cases, the bigger risk starts when someone enters a password, payment details, or downloads something. It is still sensible to review the device and the account involved.",
  },
  {
    question: "What if I only opened the page and closed it straight away?",
    answer:
      "That may reduce the risk, but it does not remove the need for a quick check. Look at the account the message referred to, confirm there were no downloads, and stay alert for follow-up phishing attempts.",
  },
  {
    question: "Should I call the number shown on the suspicious page?",
    answer:
      "No. Use contact details from the official company website, your bank card, or the app you already trust instead.",
  },
];

export default function ClickedPhishingLinkPage() {
  return (
    <>
      <PageHero
        eyebrow="Recovery guide"
        title="What to do after clicking a phishing link"
        description="If you clicked a suspicious link, the next steps depend on what happened after that click. Start with calm checks, secure any affected accounts, and only then consider extra protection."
      >
        <Link
          href="/guides"
          className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
        >
          Back to Guides
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 pt-6 pb-8">
        <div className="rounded-[2rem] border border-amber-200 bg-amber-50/80 p-6 shadow-sm shadow-amber-900/5">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <TriangleAlert size={20} />
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-black tracking-tight text-slate-950">
                Start with the simplest question
              </h2>
              <p className="text-sm leading-7 text-slate-700">
                Did you only open the page, or did you also type anything into it? That answer
                changes the level of urgency more than the click by itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-8 md:grid-cols-3">
        <SectionCard title="1. Immediate steps">
          <ul className="space-y-3 text-sm leading-7">
            {immediateSteps.map((step) => (
              <li key={step}>• {step}</li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="2. If you entered details">
          <ul className="space-y-3 text-sm leading-7">
            {ifYouEnteredDetails.map((step) => (
              <li key={step}>• {step}</li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="3. Follow-up checks">
          <ul className="space-y-3 text-sm leading-7">
            {followUpChecks.map((step) => (
              <li key={step}>• {step}</li>
            ))}
          </ul>
        </SectionCard>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <SectionCard title="How to think about the risk">
          <div className="space-y-4 text-sm leading-7">
            <p>
              A phishing page may be trying to do one of several things: steal a password, collect
              payment details, trick you into calling a fake support number, or persuade you to
              install software. The useful response is to match your next step to the likely risk.
            </p>
            <p>
              If a password was involved, account security comes first. If card details were
              entered, payment protection comes first. If the page pushed a download or browser
              notification, device checks come first. This page is designed to help you make that
              distinction without overreacting.
            </p>
          </div>
        </SectionCard>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <RecoveryCTA
            title="Run a trusted device and phishing protection check"
            description="If the page pushed a download, fake warning, or suspicious browser prompt, a security suite can help you review the device and tighten protection after the incident."
            affiliateUrl="https://example.com/bitdefender-phishing-recovery"
            disclosureText="This is a placeholder affiliate link for a security suite. If real affiliate links are added later, the page should keep this disclosure visible near the CTA."
            ctaText="Review Security Option"
            icon="shield-check"
            productType="Security suite"
            trackingLabel="clicked-phishing-link_bitdefender_cta"
          />

          <RecoveryCTA
            title="Monitor identity and account misuse after a phishing scare"
            description="If you shared personal information or are worried about follow-up fraud, identity monitoring may help you spot unusual account activity sooner."
            affiliateUrl="https://example.com/experian-identity-monitoring"
            disclosureText="This is a placeholder affiliate link for identity monitoring. Keep the disclosure visible if a real partner offer is added."
            ctaText="Review Identity Monitoring"
            icon="credit-card"
            productType="Identity monitoring"
            trackingLabel="clicked-phishing-link_experian_cta"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <SectionCard title="Practical account recovery checklist">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3 text-sm leading-7">
              <h3 className="text-lg font-black text-slate-950">Account security</h3>
              <ul className="space-y-3">
                <li>• Change passwords from the official site.</li>
                <li>• Sign out of other sessions if the service allows it.</li>
                <li>• Review account recovery email addresses and phone numbers.</li>
                <li>• Turn on two-factor authentication where possible.</li>
              </ul>
            </div>

            <div className="space-y-3 text-sm leading-7">
              <h3 className="text-lg font-black text-slate-950">Payment and identity checks</h3>
              <ul className="space-y-3">
                <li>• Review bank and card activity for anything unfamiliar.</li>
                <li>• Be cautious with replacement-card or refund calls you did not expect.</li>
                <li>• Check credit-related accounts if sensitive personal details were entered.</li>
                <li>• Keep notes in case you need to report the incident later.</li>
              </ul>
            </div>
          </div>
        </SectionCard>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14">
        <div className="grid gap-6 md:grid-cols-3">
          {faqs.map((faq) => (
            <SectionCard key={faq.question} title={faq.question}>
              <p className="text-sm leading-7">{faq.answer}</p>
            </SectionCard>
          ))}
        </div>
      </section>
    </>
  );
}
