import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/main/Providers";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import LensCursor from "@/components/sub/LensCursor";
import { SpeedInsights } from "@vercel/speed-insights/next";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  // Bricolage has no metrics for next/font's auto fallback; skip it to
  // avoid the "Failed to find font override values" build warning.
  adjustFontFallback: false,
  fallback: ["system-ui", "sans-serif"],
});
const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// NOTE: update to the real deployed origin if it differs.
const siteUrl = "https://saurabhgoyal.vercel.app";
const description =
  "Full-stack software engineer with 2+ years building production AI applications — RAG pipelines, LLM workflows, and scalable APIs with Python, FastAPI, React, TypeScript, and AWS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Saurabh Goyal — Full-Stack Software Engineer",
  description,
  keywords: [
    "Saurabh Goyal",
    "Full-Stack Software Engineer",
    "AI Engineer",
    "Python",
    "FastAPI",
    "React",
    "Next.js",
    "TypeScript",
    "LangChain",
    "RAG",
    "AWS",
  ],
  authors: [{ name: "Saurabh Goyal" }],
  creator: "Saurabh Goyal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Saurabh Goyal — Full-Stack Software Engineer",
    description,
    siteName: "Saurabh Goyal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saurabh Goyal — Full-Stack Software Engineer",
    description,
    creator: "@SgxZoro",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBF6EF" },
    { media: "(prefers-color-scheme: dark)", color: "#161311" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} font-sans bg-bg text-ink antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <LensCursor />
        <SpeedInsights />
      </body>
    </html>
  );
}
