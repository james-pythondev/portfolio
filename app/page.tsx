"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
  SiPython, SiReact, SiNextdotjs, SiPostman,
  SiMongodb, SiFigma, SiGithubactions, SiTailwindcss,
  SiJavascript, SiTypescript, SiNodedotjs, SiPostgresql,
  SiGithub, SiInstagram, SiWhatsapp
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { HiSparkles, HiScissors } from "react-icons/hi2";

/* ─── DATA ─── */
const SKILLS = [
  { name: "Python",         icon: SiPython,        cat: "Core Language" },
  { name: "React JS",       icon: SiReact,         cat: "Frontend"      },
  { name: "React Native",   icon: SiReact,         cat: "Mobile"        },
  { name: "Next.js",        icon: SiNextdotjs,     cat: "Fullstack"     },
  { name: "REST APIs",      icon: SiPostman,       cat: "Backend"       },
  { name: "MongoDB / SQL",  icon: SiMongodb,       cat: "Databases"     },
  { name: "Figma",          icon: SiFigma,         cat: "Design"        },
  { name: "CI/CD & Deploy", icon: SiGithubactions, cat: "DevOps"        },
  { name: "Vibe Coding",    icon: HiSparkles,      cat: "Signature"     },
  { name: "Stitch Design",  icon: HiScissors,      cat: "Design"        },
];

const EXPERIENCE = [
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
    role: "Freelance Web Developer",
    org: "Self-Employed",
    loc: "Kodaikanal",
    period: "2024 – Present",
    badge: "Freelance",
    bullets: [
      "Built tourist package website for a Kodaikanal local business (ongoing).",
      "Developing cinematic photography portfolio with masonry gallery & lightbox.",
      "End-to-end: design in Figma → React/Next.js build → deployment.",
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

const PROJECTS = [
  {
    name: "Goldifii",
    label: "SaaS Platform",
    org: "Codewild Tech",
    desc: "Multi-tenant gold loan lender SaaS — web + mobile. Built core React modules, integrated REST APIs, managed CI/CD pipeline. Live in production.",
    tags: ["React", "React Native", "REST API", "CI/CD", "Cloud Deploy"],
    status: "Live",
  },
  {
    name: "codewildlearn",
    label: "Company Website",
    org: "Codewild Tech",
    desc: "Company learning platform — partnered for deployment, build error resolution, and SEO optimizations.",
    tags: ["Next.js", "SEO", "Analytics", "VPS", "Tailwind"],
    status: "Live",
  },
  {
    name: "Tourist Package Site",
    label: "Freelance · Web",
    org: "Local Business",
    desc: "Travel & tourism platform for a Kodaikanal local business — packages, booking flow, image gallery, mobile-first.",
    tags: ["Next.js", "React", "Figma", "Tailwind"],
    status: "Ongoing",
  },
  {
    name: "Photography Portfolio",
    label: "Freelance · Web",
    org: "Photographer Client",
    desc: "Cinematic dark photography portfolio — masonry gallery, lightbox viewer, smooth transitions, optimised image loading.",
    tags: ["React", "Figma", "Framer Motion", "CSS"],
    status: "Ongoing",
  },
];

/* ─── ANIMATION VARIANTS ─── */
const V = {
  stagger: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  },
  rise: {
    hidden: { y: "110%" },
    show: { y: "0%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 36 },
    show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
  },
};

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [menu, setMenu]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  const SOCIALS = [
    { icon: SiWhatsapp,  label: "WhatsApp",  href: "https://wa.me/917339392562",                   color: "#25D366" },
    { icon: SiInstagram, label: "Instagram", href: "https://instagram.com/jamezandrew_",            color: "#E1306C" },
    { icon: SiGithub,    label: "GitHub",    href: "https://github.com/james-pythondev",            color: "#ffffff" },
    { icon: FaLinkedinIn, label: "LinkedIn",  href: "https://linkedin.com/in/jamessahayaraj",        color: "#0A66C2" },
  ];
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const sid = e.target.id;
            if (sid) setActive(sid);
          }
        });
      },
      { threshold: 0.25, rootMargin: "-20% 0px -60% 0px" }
    );
    ["home", "about", "skills", "experience", "projects", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  const NAV = ["home", "about", "skills", "experience", "projects", "contact"];

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          NAVIGATION
      ══════════════════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#e8e8e8]/80"
            : "bg-transparent"
        }`}
        style={{ backdropFilter: scrolled ? "blur(24px)" : "none" }}
      >
        <div className="max-w-[1340px] mx-auto px-5 sm:px-8 md:px-16 flex items-center justify-between h-[64px] sm:h-[72px]">
          {/* Logo */}
          <button
            aria-label="Go to Home section"
            onClick={() => go("home")}
            className="group flex items-center gap-3 shrink-0"
          >
            <div className="w-9 h-9 border border-black flex items-center justify-center group-hover:bg-black transition-all duration-300">
              <span className="font-black text-[13px] tracking-tight text-black group-hover:text-white transition-colors" style={{ fontFamily: "var(--font-display, sans-serif)" }}>
                JA
              </span>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/35 hidden sm:block">
              James Andrew
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV.map((l) => (
              <button
                key={l}
                onClick={() => go(l)}
                className={`text-[11px] uppercase tracking-[0.35em] font-semibold transition-all duration-300 hover:text-[#F05033] ${
                  active === l ? "text-[#F05033]" : "text-black/40"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Social Icons + CTA */}
          <div className="flex items-center gap-4">
            {/* Social icons — desktop only */}
            <div className="hidden lg:flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center transition-all duration-300 hover:scale-125"
                  title={s.label}
                  style={{ color: s.label === "GitHub" ? "#000000" : s.color }}
                >
                  <s.icon className="text-[16px]" />
                </a>
              ))}
              {/* Divider */}
              <div className="w-px h-5 bg-black/15 ml-1" />
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] bg-black text-white px-5 py-2.5 hover:bg-[#F05033] transition-colors duration-300"
            >
              Resume
            </a>
            <button
              aria-label="Toggle mobile menu"
              onClick={() => setMenu(!menu)}
              className="lg:hidden flex flex-col gap-[5px] p-2"
            >
              <span className="w-6 h-[1.5px] bg-black block" />
              <span className="w-6 h-[1.5px] bg-black block" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-[#E6E6E6] flex flex-col items-center justify-center gap-7"
          >
            <div className="absolute top-0 left-0 right-0 h-[64px] sm:h-[72px] flex items-center justify-between px-5 sm:px-8 border-b border-black/20">
              <div className="w-9 h-9 border border-black flex items-center justify-center">
                <span className="font-black text-[13px] tracking-tight">JA</span>
              </div>
              <button
                aria-label="Close mobile menu"
                onClick={() => setMenu(false)}
                className="text-3xl text-black/30 hover:text-black transition-colors leading-none"
              >
                &times;
              </button>
            </div>
            {NAV.map((l, i) => (
              <motion.button
                key={l}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
                onClick={() => go(l)}
                className="font-black text-4xl sm:text-5xl md:text-7xl tracking-tighter uppercase text-black hover:italic hover:text-[#F05033] transition-all"
                style={{ fontFamily: "var(--font-display, sans-serif)" }}
              >
                {l}
              </motion.button>
            ))}

            {/* Mobile social icons + resume */}
            <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-5">
              <div className="flex items-center gap-5">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-black/10"
                    style={{ color: s.label === "GitHub" ? "#000000" : s.color }}
                  >
                    <s.icon className="text-[18px]" />
                  </a>
                ))}
              </div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-black uppercase tracking-[0.3em] bg-black text-white px-8 py-3"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-fit lg:min-h-screen pt-[64px] sm:pt-[72px] border-b border-black overflow-hidden"
      >
        <div className="max-w-[1340px] mx-auto px-5 sm:px-8 md:px-16 h-full grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_500px] min-h-fit lg:min-h-[calc(100vh-72px)]">
          
          {/* Right — Portrait (Ordered first on mobile) */}
          <div className="relative order-first lg:order-last flex items-end justify-center bg-black/[0.03] overflow-visible lg:min-h-0 min-h-[300px] sm:min-h-[400px]">
            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* Available badge */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 flex items-center gap-2 border border-black bg-[#E6E6E6] px-3 py-1.5 sm:px-4 sm:py-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F05033] animate-pulse" />
              <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.4em]">Available</span>
            </div>

            {/* Portrait — zoomed & shifted so laptop breaks out */}
            <motion.div
              style={{ y: portraitY }}
              className="relative z-10 w-[90%] sm:w-[100%] lg:w-[110%] h-auto mix-blend-multiply sm:-ml-[15%] mb-[-2%]"
            >
              <Image
                src="/hero_cutout.png"
                alt="James Andrew"
                width={800}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </div>

          {/* Left — Text */}
          <div className="flex flex-col justify-center gap-6 sm:gap-12 py-8 sm:py-12 md:py-14 lg:border-r border-black order-last lg:order-first">
            {/* Tag + Name */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#F05033] mb-5"
              >
                // Fullstack Engineer
              </motion.p>

              <motion.div variants={V.stagger} initial="hidden" animate="show">
                <div className="overflow-hidden py-1">
                  <motion.h1
                    variants={V.rise}
                    className="font-black text-[16vw] sm:text-[14vw] lg:text-[10vw] leading-[0.82] text-black tracking-tighter uppercase"
                    style={{ fontFamily: "var(--font-display, sans-serif)" }}
                  >
                    JAMES
                  </motion.h1>
                </div>
                <div className="overflow-hidden py-1">
                  <motion.h1
                    variants={V.rise}
                    className="font-black text-[16vw] sm:text-[14vw] lg:text-[10vw] leading-[0.82] text-black tracking-tighter uppercase"
                    style={{ fontFamily: "var(--font-display, sans-serif)" }}
                  >
                    ANDREW
                  </motion.h1>
                </div>
              </motion.div>
            </div>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-0"
            >
              <div className="w-10 h-px bg-black mb-6" />
              <p className="text-black/55 text-base sm:text-lg font-normal leading-relaxed max-w-md">
                Fullstack Engineer & Systems Builder. Turning complex problems into
                highly-structured, reliable digital environments.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mt-6 sm:mt-8">
                <a
                  href="mailto:jamesandrew2705@gmail.com"
                  className="text-[11px] font-bold uppercase tracking-[0.35em] text-black border-b border-black pb-0.5 hover:text-[#F05033] hover:border-[#F05033] transition-all"
                >
                  Get in touch →
                </a>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/30">
                  Based in TN, India
                </span>
              </div>
            </motion.div>
          </div>

          {/* Large portrait is now handled above for both mobile/desktop order */}
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-black/30">Scroll</span>
          <div className="w-px h-8 bg-black/20" />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════════════ */}
      <motion.section
        id="about"
        variants={V.fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="py-12 sm:py-28 md:py-36 px-5 sm:px-8 md:px-16 border-b border-black"
      >
        <div className="max-w-[1340px] mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10 mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-[#F05033]">// Bio</span>
            <h2
              className="font-black text-[8vw] md:text-[5vw] tracking-tighter leading-none text-black uppercase"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              Merging <em className="opacity-20">Precision</em> & Code.
            </h2>
          </div>

          {/* Content grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 border border-black">
            {/* Main bio */}
            <div className="md:col-span-8 p-5 sm:p-10 md:p-16 border-b md:border-b-0 md:border-r border-black flex flex-col gap-6 sm:gap-10">
              <p
                className="font-black text-2xl sm:text-3xl md:text-4xl tracking-tight leading-[1.0] text-black"
                style={{ fontFamily: "var(--font-display, sans-serif)" }}
              >
                FROM THE FLIGHT LINE TO THE COMMAND LINE — I BUILD SYSTEMS THAT NEVER FAIL.
              </p>
              <div className="space-y-4">
                <p className="text-black/55 text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
                  I&apos;m a Fullstack Developer and IAF Veteran based in Tamil Nadu. My background in high-fidelity flight
                  simulation for the Indian Air Force instilled a surgical attention to detail that I now apply to scalable
                  SaaS architecture.
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-10 h-px bg-black/30" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/50">
                    Currently scaling Goldifii @ Codewild Tech
                  </span>
                </div>
              </div>
            </div>

            {/* Stats sidebar */}
            <div className="md:col-span-4 divide-y divide-black">
              {[
                { l: "Status",           v: "Open for iconic products", accent: true },
                { l: "Heritage",         v: "IAF Simulation Engineer",  accent: false },
                { l: "Based In",         v: "Kodaikanal, TN, India",    accent: false },
                { l: "Currently Coding", v: "React · Next.js · Python", accent: false },
              ].map((s) => (
                <div key={s.l} className="p-4 sm:p-8 group hover:bg-black transition-all duration-300 cursor-default">
                  <p className={`text-[9px] font-bold uppercase tracking-[0.45em] mb-3 ${s.accent ? "text-[#F05033]" : "text-black/35 group-hover:text-white/35"}`}>
                    {s.l}
                  </p>
                  <p
                    className="font-black text-xl tracking-tight leading-tight uppercase text-black group-hover:text-white transition-colors"
                    style={{ fontFamily: "var(--font-display, sans-serif)" }}
                  >
                    {s.v}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════
          SKILLS
      ══════════════════════════════════════════════════════ */}
      <motion.section
        id="skills"
        variants={V.fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="py-12 sm:py-28 md:py-36 px-5 sm:px-8 md:px-16 border-b border-black"
      >
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10 mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-[#F05033]">// Expertises</span>
            <h2
              className="font-black text-[8vw] md:text-[5vw] tracking-tighter leading-none text-black uppercase"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              Systems & Interfaces
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border-l border-t border-black">
            {SKILLS.map((s) => (
              <div
                key={s.name}
                className="border-r border-b border-black p-4 sm:p-8 md:p-10 flex flex-col items-center justify-center gap-3 sm:gap-4 group hover:bg-black transition-all duration-300 cursor-default"
              >
                <s.icon className="text-[26px] sm:text-[32px] text-black/25 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-black group-hover:text-white transition-colors text-center">
                  {s.name}
                </p>
                <p className="text-[8px] font-semibold uppercase tracking-widest text-black/25 group-hover:text-white/40 transition-all sm:opacity-0 sm:group-hover:opacity-100 text-center">
                  {s.cat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════
          EXPERIENCE
      ══════════════════════════════════════════════════════ */}
      <motion.section
        id="experience"
        variants={V.fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="py-12 sm:py-28 md:py-36 px-5 sm:px-8 md:px-16 border-b border-black"
      >
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10 mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-[#F05033]">// History</span>
            <h2
              className="font-black text-[8vw] md:text-[5vw] tracking-tighter leading-none text-black uppercase"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              Professional Journey
            </h2>
          </div>

          <div className="border-t border-black divide-y divide-black">
            {EXPERIENCE.map((exp) => (
              <motion.div
                key={exp.role}
                whileHover={{ x: 8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group py-6 sm:py-12 md:py-14 grid grid-cols-1 md:grid-cols-[180px_1fr_120px] gap-4 sm:gap-6 md:gap-10 items-start cursor-default"
              >
                {/* Period */}
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 pt-1">
                  {exp.period}
                </p>

                {/* Role + Org */}
                <div>
                  <h3
                    className="font-black text-2xl sm:text-3xl md:text-4xl text-black tracking-tighter leading-none mb-2 group-hover:italic transition-all"
                    style={{ fontFamily: "var(--font-display, sans-serif)" }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 mb-5">
                    {exp.org} &nbsp;·&nbsp; {exp.loc}
                  </p>
                  <ul className="space-y-1.5">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="text-[13px] sm:text-[14px] text-black/50 leading-relaxed flex gap-3">
                        <span className="text-[#F05033] mt-[3px] shrink-0">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Badge */}
                <div className="md:text-right">
                  <span className="inline-block text-[9px] font-bold uppercase tracking-[0.3em] text-[#F05033] border border-[#F05033]/30 px-3 py-1.5">
                    {exp.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════
          PROJECTS
      ══════════════════════════════════════════════════════ */}
      <motion.section
        id="projects"
        variants={V.fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="py-12 sm:py-28 md:py-36 px-5 sm:px-8 md:px-16 border-b border-black"
      >
        <div className="max-w-[1340px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10 mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-[#F05033]">// Folio</span>
            <h2
              className="font-black text-[8vw] md:text-[5vw] tracking-tighter leading-none text-black uppercase"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              Selected Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black">
            {PROJECTS.map((p) => (
              <motion.div
                key={p.name}
                whileHover={{ backgroundColor: "#ffffff" }}
                transition={{ duration: 0.3 }}
                className="group bg-[#E6E6E6] p-5 sm:p-10 md:p-14 min-h-[280px] sm:min-h-[440px] flex flex-col justify-between cursor-pointer"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40">
                    {p.label}
                  </span>
                  <div className="w-10 h-10 border border-black flex items-center justify-center text-sm group-hover:bg-[#F05033] group-hover:border-[#F05033] group-hover:text-white transition-all duration-300">
                    ↗
                  </div>
                </div>

                {/* Bottom content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-[8px] font-bold uppercase tracking-widest px-2 py-1 ${
                        p.status === "Live"
                          ? "bg-black text-white"
                          : "border border-black/30 text-black/40"
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <h3
                    className="font-black text-3xl sm:text-4xl md:text-5xl text-black tracking-tighter leading-none mb-3 sm:mb-4"
                    style={{ fontFamily: "var(--font-display, sans-serif)" }}
                  >
                    {p.name}
                  </h3>
                  <p className="text-black/50 text-[14px] sm:text-[15px] leading-relaxed mb-5 sm:mb-8 line-clamp-3">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-semibold uppercase tracking-widest bg-black/6 px-3 py-1.5 text-black/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════════ */}
      <motion.section
        id="contact"
        variants={V.fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="bg-black text-white py-14 sm:py-36 md:py-48 px-5 sm:px-8 md:px-16"
      >
        <div className="max-w-[1340px] mx-auto">
          <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#F05033] mb-10">
            // Next Step
          </p>

          {/* Large headline */}
          <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="overflow-hidden py-2">
              <motion.h2
                variants={V.rise}
                className="font-black text-[13vw] md:text-[11vw] tracking-tighter leading-[0.82] uppercase"
                style={{ fontFamily: "var(--font-display, sans-serif)" }}
              >
                Ready to
              </motion.h2>
            </div>
            <div className="overflow-hidden py-2 mb-6 sm:mb-16">
              <motion.h2
                variants={V.rise}
                className="font-black text-[13vw] md:text-[11vw] tracking-tighter leading-[0.82] uppercase italic text-white/30"
                style={{ fontFamily: "var(--font-display, sans-serif)" }}
              >
                scale big?
              </motion.h2>
            </div>
          </motion.div>

          {/* CTA row */}
          <div className="flex flex-col items-start gap-8">
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <motion.button
                whileHover={{ scale: 0.97 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => setShowSocials(!showSocials)}
                className="relative z-10 inline-flex items-center gap-3 bg-[#F05033] text-white text-[12px] sm:text-[13px] font-black uppercase tracking-[0.25em] px-7 sm:px-10 py-4 sm:py-5 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: "var(--font-display, sans-serif)" }}
              >
                {showSocials ? "Close" : "Send A Message"}
              </motion.button>

              {/* Social Bubbles */}
              <AnimatePresence>
                {showSocials && (
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                    {SOCIALS.map((s, i) => (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 15,
                            delay: i * 0.08,
                          },
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0,
                          y: 20,
                          transition: {
                            duration: 0.2,
                            delay: (SOCIALS.length - 1 - i) * 0.05,
                          },
                        }}
                        whileHover={{ scale: 1.2, y: -4 }}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center group/bubble transition-colors duration-200 hover:bg-white/15"
                        title={s.label}
                      >
                        <s.icon
                          className="text-[19px] sm:text-[22px] transition-colors duration-200"
                          style={{ color: s.color }}
                        />
                      </motion.a>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col gap-1.5">
              <a
                href="mailto:jamesandrew2705@gmail.com"
                className="text-[11px] font-semibold text-white/40 tracking-widest hover:text-white/70 transition-colors"
              >
                jamesandrew2705@gmail.com
              </a>
              <span className="text-[11px] font-semibold text-white/25 tracking-widest">
                +91 73393 92562
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ══════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════ */}
      <footer className="bg-[#E6E6E6] border-t border-black px-5 sm:px-8 md:px-16 py-6 sm:py-12">
        <div className="max-w-[1340px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Left — Social links */}
          <div className="flex items-center gap-5 sm:gap-8">
            {[
              { l: "GitHub",   h: "https://github.com/james-pythondev" },
              { l: "LinkedIn", h: "https://linkedin.com/in/jamessahayaraj" },
              { l: "Instagram",h: "https://instagram.com/jamezandrew_" },
            ].map((s) => (
              <a
                key={s.l}
                href={s.h}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${s.l} profile`}
                className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/35 hover:text-[#F05033] transition-colors"
              >
                {s.l}
              </a>
            ))}
          </div>

          {/* Right — Credit */}
          <div className="flex flex-col items-start md:items-end gap-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/50">
              © {new Date().getFullYear()} James Andrew
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/25">
              Built by James Andrew | Framextech
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
