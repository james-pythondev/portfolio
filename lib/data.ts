import {
  SiPython, SiReact, SiNextdotjs, SiShopify,
  SiMongodb, SiFigma, SiGithubactions, SiTailwindcss,
  SiJavascript, SiTypescript, SiNodedotjs, SiPostgresql,
  SiGithub, SiInstagram, SiWhatsapp, SiAndroid,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { HiSparkles, HiScissors } from "react-icons/hi2";
import type { IconType } from "react-icons";

/* ─── TYPES ─── */
export interface AccentTheme {
  id: string;
  name: string;
  color: string;
  glow: string;
}

export interface Skill {
  name: string;
  icon: IconType;
  cat: string;
  brandColor: string;
}

export interface TechItem {
  name: string;
  icon: IconType;
  brandColor: string;
}

export interface ExperienceItem {
  role: string;
  org: string;
  loc: string;
  period: string;
  badge: string;
  bullets: string[];
}

export interface ProjectBadgeTheme {
  bg: string;
  text: string;
  border: string;
}

export interface ProjectItem {
  name: string;
  label: string;
  org: string;
  desc: string;
  tags: string[];
  status: string;
  url: string | null;
  github: string | null;
  accent: string;
  badgeTheme: ProjectBadgeTheme;
}

export interface Social {
  icon: IconType;
  label: string;
  href: string;
  color: string;
}

/* ─── THEME ACCENTS ─── */
export const ACCENT_THEMES: AccentTheme[] = [
  { id: "orange",  name: "Safety Orange", color: "#F05033", glow: "rgba(240, 80, 51, 0.35)" },
  { id: "emerald", name: "Cyber Emerald", color: "#10B981", glow: "rgba(16, 185, 129, 0.35)" },
  { id: "violet",  name: "Hyper Violet",  color: "#8B5CF6", glow: "rgba(139, 92, 246, 0.35)" },
  { id: "blue",    name: "Electric Blue", color: "#3B82F6", glow: "rgba(59, 130, 246, 0.35)" },
];

/* ─── NAV ─── */
export const NAV = ["home", "about", "skills", "experience", "projects", "contact"] as const;
export type NavItem = (typeof NAV)[number];

/* ─── SKILLS WITH AUTHENTIC BRAND COLORS ─── */
export const SKILLS: Skill[] = [
  { name: "Web Design",       icon: SiFigma,         cat: "Creative",    brandColor: "#F24E1E" },
  { name: "Development",      icon: SiNextdotjs,     cat: "Fullstack",   brandColor: "#000000" },
  { name: "SEO Optimization", icon: HiSparkles,      cat: "Performance", brandColor: "#F59E0B" },
  { name: "Python",           icon: SiPython,        cat: "Backend",     brandColor: "#3776AB" },
  { name: "React / Next.js",  icon: SiReact,         cat: "Frontend",    brandColor: "#61DAFB" },
  { name: "Mobile Apps",      icon: SiAndroid,       cat: "Hybrid",      brandColor: "#3DDC84" },
  { name: "E-commerce",       icon: SiShopify,       cat: "Solutions",   brandColor: "#96BF48" },
  { name: "Cloud & DevOps",   icon: SiGithubactions, cat: "Deployment",  brandColor: "#2088FF" },
  { name: "Maintenance",      icon: HiScissors,      cat: "Support",     brandColor: "#EC4899" },
  { name: "Consulting",       icon: HiSparkles,      cat: "Strategy",    brandColor: "#A855F7" },
];

/* ─── TECH STACK WITH VIBRANT LOGO COLORS ─── */
export const TECHSTACK: TechItem[] = [
  { name: "JavaScript", icon: SiJavascript,    brandColor: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript,    brandColor: "#3178C6" },
  { name: "React",      icon: SiReact,         brandColor: "#61DAFB" },
  { name: "Next.js",    icon: SiNextdotjs,     brandColor: "#000000" },
  { name: "Node.js",    icon: SiNodedotjs,     brandColor: "#5FA04E" },
  { name: "Python",     icon: SiPython,        brandColor: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql,    brandColor: "#4169E1" },
  { name: "MongoDB",    icon: SiMongodb,       brandColor: "#47A248" },
  { name: "Tailwind",   icon: SiTailwindcss,   brandColor: "#06B6D4" },
  { name: "CI/CD",      icon: SiGithubactions, brandColor: "#2088FF" },
];

/* ─── EXPERIENCE ─── */
export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    org: "Codewild Tech",
    loc: "Thiruvananthapuram",
    period: "Oct 2025 – Present",
    badge: "Full-time",
    bullets: [
      "Built core modules of Goldifii web app using React & REST APIs — reusable components, state management, responsive UI.",
      "Contributed to Goldifii mobile app (React Native): API integration, authentication & performance optimization.",
      "Developed codewildlearn website from scratch — SEO-friendly pages, contact forms, analytics.",
      "Deployed via cloud hosting (VPS/PaaS), managed DNS, SSL & CI/CD pipelines.",
    ],
  },
  {
    role: "Flight Simulation Engineer",
    org: "SRK Aviacom — Indian Air Force",
    loc: "Chennai & Hyderabad",
    period: "Feb 2022 – Mar 2024",
    badge: "Full-time",
    bullets: [
      "Designed & maintained Pilatus PC-7 MkII simulator systems for IAF pilot training.",
      "Integrated avionics, hydraulics & flight controls for realistic training scenarios.",
      "Tested software models replicating real-world flight behaviour using Python.",
      "Collaborated with IAF flight instructors to validate simulator performance.",
    ],
  },
  {
    role: "Freelance Web Designer & Developer",
    org: "Independent",
    loc: "Kodaikanal",
    period: "2024 – Present",
    badge: "Active",
    bullets: [
      "Delivering end-to-end web design and development services for local businesses.",
      "Building high-performance, SEO-optimized tourism and booking websites.",
      "Helping entrepreneurs establish a strong digital presence with modern UI/UX.",
      "End-to-end: Custom Design → Next.js Build → SEO → Maintenance.",
    ],
  },
  {
    role: "Console Operator",
    org: "Kodaikanal FM 100.5 MHz",
    loc: "Kodaikanal",
    period: "Present",
    badge: "Part-time",
    bullets: [
      "Operating broadcast console for live FM transmission across Kodaikanal district.",
      "Managing audio levels, cue timing & live show coordination.",
    ],
  },
];

/* ─── PROJECTS (Tailored color palettes) ─── */
export const PROJECTS: ProjectItem[] = [
  {
    name: "Goldifii",
    label: "SaaS Platform",
    org: "Codewild Tech",
    desc: "Multi-tenant gold loan lender SaaS — web + mobile. Built core React modules, integrated REST APIs, managed CI/CD pipeline. Live in production.",
    tags: ["React", "React Native", "REST API", "CI/CD", "Cloud Deploy"],
    status: "Live",
    url: "https://goldifii.com",
    github: null,
    accent: "#3B82F6",
    badgeTheme: {
      bg: "bg-blue-500/10",
      text: "text-blue-600",
      border: "border-blue-500/25",
    },
  },
  {
    name: "codewildlearn",
    label: "Company Website",
    org: "Codewild Tech",
    desc: "Company learning platform — partnered for deployment, build error resolution, and SEO optimizations.",
    tags: ["Next.js", "SEO", "Analytics", "VPS", "Tailwind"],
    status: "Live",
    url: "https://codewildlearn.com",
    github: null,
    accent: "#10B981",
    badgeTheme: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-600",
      border: "border-emerald-500/25",
    },
  },
  {
    name: "Tourism Platform",
    label: "Web Design · Development",
    org: "Local Business",
    desc: "A comprehensive travel & tourism platform — packages, booking flow, and SEO optimization. Mobile-first and high-conversion design.",
    tags: ["Next.js", "SEO", "Booking", "Tailwind"],
    status: "Live",
    url: null,
    github: null,
    accent: "#F59E0B",
    badgeTheme: {
      bg: "bg-amber-500/10",
      text: "text-amber-600",
      border: "border-amber-500/25",
    },
  },
  {
    name: "Cinematic Portfolio",
    label: "Creative · Web",
    org: "Local Artist",
    desc: "High-end photography portfolio — masonry gallery, optimized assets, and smooth transitions.",
    tags: ["React", "Framer Motion", "SEO", "CSS"],
    status: "Live",
    url: null,
    github: null,
    accent: "#A855F7",
    badgeTheme: {
      bg: "bg-purple-500/10",
      text: "text-purple-600",
      border: "border-purple-500/25",
    },
  },
];

/* ─── SOCIALS ─── */
export const SOCIALS: Social[] = [
  { icon: SiWhatsapp,    label: "WhatsApp",  href: "https://wa.me/917339392562",            color: "#25D366" },
  { icon: SiInstagram,   label: "Instagram", href: "https://instagram.com/jamezandrew_",     color: "#E1306C" },
  { icon: SiGithub,      label: "GitHub",    href: "https://github.com/james-pythondev",     color: "#ffffff" },
  { icon: FaLinkedinIn,  label: "LinkedIn",  href: "https://linkedin.com/in/jamessahayaraj", color: "#0A66C2" },
];
