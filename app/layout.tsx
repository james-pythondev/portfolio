import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: {
    default: "James Andrew S — Fullstack Engineer & Python Developer",
    template: "%s | James Andrew S",
  },
  description: "Portfolio of James Andrew S — Fullstack Developer at Codewild Tech, Ex-IAF Flight Simulation Engineer, Python Developer, FM Console Operator & Rider. Based in Kodaikanal.",
  keywords: ["James Andrew", "Python Developer", "Full Stack", "React", "Next.js", "Kodaikanal", "Freelancer", "IAF", "Goldifii", "Codewild Tech"],
  authors: [{ name: "James Andrew S" }],
  creator: "James Andrew S",
  openGraph: {
    title: "James Andrew S — Portfolio",
    description: "Fullstack Developer · Ex-IAF Engineer · FM Operator · Rider",
    url: "/",
    siteName: "James Andrew S Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Andrew S — Portfolio",
    description: "Fullstack Developer · Ex-IAF Engineer · FM Operator · Rider",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>{children}</body>
    </html>
  );
}
