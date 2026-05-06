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
    default: "James Andrew S — Web Design & Development in Kodaikanal",
    template: "%s | James Andrew S — Web Developer Kodaikanal",
  },
  description: "Expert Web Design and Development services in Kodaikanal. James Andrew S is a freelance fullstack developer creating premium, high-performance websites for businesses in Kodaikanal and beyond. Elevate your local business with a professional digital presence.",
  keywords: [
    "Web Design Kodaikanal", 
    "Web Development Kodaikanal", 
    "Freelance Web Developer Kodaikanal", 
    "Best Web Designer Kodaikanal", 
    "Website Creator Kodaikanal",
    "Kodaikanal Digital Services",
    "James Andrew S", 
    "Fullstack Engineer", 
    "Python Developer", 
    "React Developer", 
    "Next.js Developer India", 
    "Kodaikanal Freelancer", 
    "Software Engineer India"
  ],
  authors: [{ name: "James Andrew S" }],
  creator: "James Andrew S",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "James Andrew S — Premium Web Design & Development in Kodaikanal",
    description: "Professional freelance web development and design services based in Kodaikanal. Creating high-end digital experiences for local and global clients.",
    url: "/",
    siteName: "James Andrew S — Kodaikanal Web Developer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "James Andrew S — Web Design & Development Kodaikanal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Andrew S — Web Design & Development Kodaikanal",
    description: "Expert freelance web developer in Kodaikanal. Building premium websites that rank and convert.",
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
  "name": "James Andrew S — Web Design & Development",
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
  "description": "Premium web design and development services in Kodaikanal by James Andrew S. Specializing in high-performance Next.js websites and custom digital solutions for local businesses.",
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
