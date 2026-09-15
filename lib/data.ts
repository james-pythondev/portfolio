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
export interface Skill       { name: string; icon: IconType; cat: string }
export interface TechItem    { name: string; icon: IconType }
export interface ExperienceItem {
  role: string; org: string; loc: string;
  period: string; badge: string; bullets: string[];
}
export interface ProjectItem {
  name: string; label: string; org: string;
  desc: string; tags: string[]; status: string;
  url: string | null; github: string | null;
}
export interface Social { icon: IconType; label: string; href: string; color: string }

/* ─── NAV ─── */
export const NAV = ["home", "about", "skills", "experience", "projects", "contact"] as const;
export type NavItem = (typeof NAV)[number];

/* ─── SKILLS  (fixed: SiPostman→SiShopify for E-commerce, SiReact→SiAndroid for Mobile) ─── */
export const SKILLS: Skill[] = [
  { name: "Web Design",       icon: SiFigma,         cat: "Creative"    },
  { name: "Development",      icon: SiNextdotjs,     cat: "Fullstack"   },
  { name: "SEO Optimization", icon: HiSparkles,      cat: "Performance" },
  { name: "Python",           icon: SiPython,        cat: "Backend"     },
  { name: "React / Next.js",  icon: SiReact,         cat: "Frontend"    },
  { name: "Mobile Apps",      icon: SiAndroid,       cat: "Hybrid"      },
  { name: "E-commerce",       icon: SiShopify,       cat: "Solutions"   },
  { name: "Cloud & DevOps",   icon: SiGithubactions, cat: "Deployment"  },
  { name: "Maintenance",      icon: HiScissors,      cat: "Support"     },
  { name: "Consulting",       icon: HiSparkles,      cat: "Strategy"    },
];

/* ─── TECH STACK (previously imported but never displayed) ─── */
export const TECHSTACK: TechItem[] = [
  { name: "JavaScript", icon: SiJavascript   },
  { name: "TypeScript", icon: SiTypescript   },
  { name: "React",      icon: SiReact        },
  { name: "Next.js",    icon: SiNextdotjs    },
  { name: "Node.js",    icon: SiNodedotjs    },
  { name: "Python",     icon: SiPython       },
  { name: "PostgreSQL", icon: SiPostgresql   },
  { name: "MongoDB",    icon: SiMongodb      },
  { name: "Tailwind",   icon: SiTailwindcss  },
  { name: "CI/CD",      icon: SiGithubactions},
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

/* ─── PROJECTS (added url + github fields; ↗ arrow now clickable when url present) ─── */
export const PROJECTS: ProjectItem[] = [
  {
    name: "Goldifii",
    label: "SaaS Platform",
    org: "Codewild Tech",
    desc: "Multi-tenant gold loan lender SaaS — web + mobile. Built core React modules, integrated REST APIs, managed CI/CD pipeline. Live in production.",
    tags: ["React", "React Native", "REST API", "CI/CD", "Cloud Deploy"],
    status: "Live",
    url: "https://goldifii.com",      // ← update if the live URL differs
    github: null,
  },
  {
    name: "codewildlearn",
    label: "Company Website",
    org: "Codewild Tech",
    desc: "Company learning platform — partnered for deployment, build error resolution, and SEO optimizations.",
    tags: ["Next.js", "SEO", "Analytics", "VPS", "Tailwind"],
    status: "Live",
    url: "https://codewildlearn.com", // ← update if the live URL differs
    github: null,
  },
  {
    name: "Tourism Platform",
    label: "Web Design · Development",
    org: "Local Business",
    desc: "A comprehensive travel & tourism platform — packages, booking flow, and SEO optimization. Mobile-first and high-conversion design.",
    tags: ["Next.js", "SEO", "Booking", "Tailwind"],
    status: "Live",
    url: null,    // private client site — set a URL here if available
    github: null,
  },
  {
    name: "Cinematic Portfolio",
    label: "Creative · Web",
    org: "Local Artist",
    desc: "High-end photography portfolio — masonry gallery, optimized assets, and smooth transitions.",
    tags: ["React", "Framer Motion", "SEO", "CSS"],
    status: "Live",
    url: null,    // private client site — set a URL here if available
    github: null,
  },
];

/* ─── SOCIALS ─── */
export const SOCIALS: Social[] = [
  { icon: SiWhatsapp,    label: "WhatsApp",  href: "https://wa.me/917339392562",            color: "#25D366" },
  { icon: SiInstagram,   label: "Instagram", href: "https://instagram.com/jamezandrew_",     color: "#E1306C" },
  { icon: SiGithub,      label: "GitHub",    href: "https://github.com/james-pythondev",     color: "#ffffff" },
  { icon: FaLinkedinIn,  label: "LinkedIn",  href: "https://linkedin.com/in/jamessahayaraj", color: "#0A66C2" },
];
