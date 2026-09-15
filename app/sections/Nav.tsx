"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, SOCIALS, ACCENT_THEMES } from "@/lib/data";

interface NavProps {
  active: string;
}

export default function Nav({ active }: NavProps) {
  const [menu, setMenu]             = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [activeTheme, setActiveTheme] = useState("orange");

  // Load saved accent theme or default to orange
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-accent");
    if (saved) {
      const match = ACCENT_THEMES.find((t) => t.id === saved);
      if (match) {
        setActiveTheme(match.id);
        document.documentElement.style.setProperty("--acc", match.color);
        document.documentElement.style.setProperty("--acc-glow", match.glow);
      }
    }
  }, []);

  const handleThemeChange = (id: string) => {
    const match = ACCENT_THEMES.find((t) => t.id === id);
    if (!match) return;
    setActiveTheme(match.id);
    localStorage.setItem("portfolio-accent", match.id);
    document.documentElement.style.setProperty("--acc", match.color);
    document.documentElement.style.setProperty("--acc-glow", match.glow);
  };

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
          scrolled ? "bg-[#e8e8e8]/85" : "bg-transparent"
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
                className={`text-[11px] uppercase tracking-[0.35em] font-semibold transition-all duration-300 hover:text-accent ${
                  active === l ? "text-accent" : "text-black/40"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Right controls: Theme Switcher + Socials + Resume CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Color Accent Switcher */}
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-black/10 bg-black/[0.03] backdrop-blur-sm">
              {ACCENT_THEMES.map((theme) => {
                const isSelected = activeTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeChange(theme.id)}
                    aria-label={`Select ${theme.name} theme`}
                    title={`Theme: ${theme.name}`}
                    className="relative w-4 h-4 rounded-full flex items-center justify-center transition-transform hover:scale-125 focus:outline-none"
                    style={{ backgroundColor: theme.color }}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="activeThemeDot"
                        className="absolute inset-[-3px] rounded-full border-2 border-black/60 pointer-events-none"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Social icons — desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-px h-5 bg-black/15 mx-1" />
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
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] bg-black text-white px-5 py-2.5 hover:bg-accent transition-colors duration-300"
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
                className="font-black text-4xl sm:text-5xl md:text-7xl tracking-tighter uppercase text-black hover:italic hover:text-accent transition-all"
                style={{ fontFamily: "var(--font-display, sans-serif)" }}
              >
                {l}
              </motion.button>
            ))}

            {/* Color Accent Switcher in mobile menu */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-black/10 bg-black/5">
              <span className="text-[9px] font-bold uppercase tracking-widest text-black/40">Theme:</span>
              {ACCENT_THEMES.map((theme) => {
                const isSelected = activeTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeChange(theme.id)}
                    aria-label={`Select ${theme.name} theme`}
                    className="relative w-5 h-5 rounded-full flex items-center justify-center transition-transform hover:scale-125"
                    style={{ backgroundColor: theme.color }}
                  >
                    {isSelected && (
                      <span className="absolute inset-[-3px] rounded-full border-2 border-black/60 pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>

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
