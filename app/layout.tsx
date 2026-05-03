import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScamCheckTool - AI Scam & Deepfake Checker by Privacy Toolbox",
  description:
    "Free scam checker for suspicious messages, links, and images. Check scam warning signs, phishing links, and deepfake clues instantly.",
  keywords: [
    "scam checker",
    "is this a scam",
    "AI scam checker",
    "deepfake checker",
    "phishing link checker",
    "suspicious link checker",
    "message scam checker",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}