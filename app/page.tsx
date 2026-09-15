"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, MotionConfig } from "framer-motion";
import Nav        from "@/app/sections/Nav";
import Hero       from "@/app/sections/Hero";
import About      from "@/app/sections/About";
import Skills     from "@/app/sections/Skills";
import Experience from "@/app/sections/Experience";
import Projects   from "@/app/sections/Projects";
import Contact    from "@/app/sections/Contact";
import Footer     from "@/app/sections/Footer";

const SECTION_IDS = ["home", "about", "skills", "experience", "projects", "contact"];

export default function Portfolio() {
  /* Active nav section — driven by IntersectionObserver */
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.target.id) setActive(e.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-20% 0px -60% 0px" }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  /* Scroll progress bar driven by full-page scroll */
  const { scrollYProgress } = useScroll();

  return (
    /* MotionConfig reducedMotion="user" → Framer Motion automatically
       disables all animations for users who have
       prefers-reduced-motion: reduce set in their OS/browser. */
    <MotionConfig reducedMotion="user">
      {/* ── Scroll progress bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-accent origin-left z-[10000] pointer-events-none shadow-sm"
        style={{ scaleX: scrollYProgress }}
      />

      <Nav active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
