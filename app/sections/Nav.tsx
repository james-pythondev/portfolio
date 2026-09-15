"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, SOCIALS } from "@/lib/data";

interface NavProps {
  active: string;
}

export default function Nav({ active }: NavProps) {
  const [menu, setMenu]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <>
      {/* ── Fixed top bar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "bg-[#e8e8e8]/80" : "bg-transparent"
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
              <span
                className="font-black text-[13px] tracking-tight text-black group-hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-display, sans-serif)" }}
              >
                JA
              </span>
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/35 hidden sm:block">
              James Andrew
            </span>
          </button>

          {/* Desktop nav links */}
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

          {/* Social icons + Resume CTA */}
          <div className="flex items-center gap-4">
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

            {/* Hamburger */}
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

      {/* ── Mobile fullscreen menu ── */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-[#E6E6E6] flex flex-col items-center justify-center gap-7"
          >
            {/* Top bar inside menu */}
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

            {/* Nav items */}
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

            {/* Bottom: socials + resume */}
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
    </>
  );
}
