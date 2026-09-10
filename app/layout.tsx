import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: {
    default: "James Andrew S — Full Stack Developer",
    template: "%s | James Andrew S",
  },
  description: "Portfolio of James Andrew S — a full stack developer specializing in performant web applications, React, Next.js, and Python.",
  keywords: [
    "James Andrew S",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "Web Developer India",
    "Portfolio",
  ],
  authors: [{ name: "James Andrew S" }],
  creator: "James Andrew S",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "James Andrew S — Full Stack Developer",
    description: "Portfolio of James Andrew S. Building performant web applications with React, Next.js, and Python.",
    url: "/",
    siteName: "James Andrew S",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "James Andrew S — Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Andrew S — Full Stack Developer",
    description: "Full stack developer building performant web applications with React, Next.js, and Python.",
    images: ["/og-image.png"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "James Andrew S — Full Stack Developer",
  "image": "https://jamesandrew.in/hero_cutout.png",
  "url": "https://jamesandrew.in",
  "telephone": "+917339392562",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kodaikanal",
    "addressLocality": "Kodaikanal",
    "addressRegion": "Tamil Nadu",
    "postalCode": "624101",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.2381,
    "longitude": 77.4892
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "21:00"
  },
  "sameAs": [
    "https://github.com/james-pythondev",
    "https://linkedin.com/in/jamessahayaraj",
    "https://instagram.com/jamezandrew_"
  ],
  "description": "Full stack developer specializing in high-performance web applications with React, Next.js, and Python.",
  "priceRange": "$$"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="cursor-none">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
