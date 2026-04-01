import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "James Andrew S — Python Developer & Fullstack Engineer",
  description: "Portfolio of James Andrew S — Fullstack Developer at Codewild Tech, Ex-IAF Flight Simulation Engineer, Python Developer, FM Console Operator & Rider. Based in Kodaikanal.",
  keywords: ["James Andrew","Python Developer","Full Stack","React","Next.js","Kodaikanal","Freelancer","IAF","Goldifii","Codewild Tech"],
  authors:[{name:"James Andrew S"}],
  openGraph:{title:"James Andrew S — Portfolio",description:"Fullstack Developer · Ex-IAF Engineer · FM Operator · Rider",type:"website"},
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
