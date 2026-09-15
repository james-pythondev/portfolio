"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";
import { V } from "@/lib/variants";
import { SKILLS, TECHSTACK } from "@/lib/data";

export default function Skills() {
  /* Duplicate items so the marquee loops seamlessly */
  const marquee = [...TECHSTACK, ...TECHSTACK];
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.section
      id="skills"
      variants={V.fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="py-12 sm:py-28 md:py-36 px-5 sm:px-8 md:px-16 border-b border-black"
    >
      <div className="max-w-[1340px] mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10 mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-accent">
            {"// Expertises"}
          </span>
          <h2
            className="font-black text-[8vw] md:text-[5vw] tracking-tighter leading-none text-black uppercase"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Systems &amp; Interfaces
          </h2>
        </div>

        {/* Skills grid with authentic brand glow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SKILLS.map((s) => {
            const isHovered = hoveredSkill === s.name;
            return (
              <TiltCard key={s.name}>
                <div
                  onMouseEnter={() => setHoveredSkill(s.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="bg-[#E6E6E6] border border-black p-4 sm:p-8 md:p-10 flex flex-col items-center justify-center gap-3 sm:gap-4 group hover:bg-black transition-all duration-300 cursor-default h-full relative overflow-hidden"
                >
                  {/* Subtle ambient backdrop aura on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: s.brandColor }}
                  />

                  <s.icon
                    className="text-[26px] sm:text-[32px] transition-all duration-300 group-hover:scale-125"
                    style={{
                      color: isHovered ? (s.brandColor === "#000000" ? "#ffffff" : s.brandColor) : "rgba(0,0,0,0.35)",
                      filter: isHovered && s.brandColor !== "#000000" ? `drop-shadow(0 0 10px ${s.brandColor}80)` : undefined,
                    }}
                  />
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-black group-hover:text-white transition-colors text-center relative z-10">
                    {s.name}
                  </p>
                  <p className="text-[8px] font-semibold uppercase tracking-widest text-black/25 group-hover:text-white/40 transition-all sm:opacity-0 sm:group-hover:opacity-100 text-center relative z-10">
                    {s.cat}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* ── Tech stack marquee with vibrant brand logos ── */}
        <div className="mt-12 sm:mt-16 border-t border-black pt-10 overflow-hidden">
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-black/35 mb-8 text-center">
            Tech Stack
          </p>
          <div className="relative flex">
            {/* Gradient mask for smooth edge fade-out */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#E8E8E8] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#E8E8E8] to-transparent z-10 pointer-events-none" />

            <motion.div
              className="flex gap-14 items-center shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 24, ease: "linear", repeat: Infinity }}
            >
              {marquee.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2.5 shrink-0 group cursor-default transition-transform hover:scale-110"
                >
                  <t.icon
                    className="text-[30px] transition-all duration-300 drop-shadow-sm opacity-80 group-hover:opacity-100"
                    style={{
                      color: t.brandColor === "#000000" ? "currentColor" : t.brandColor,
                      filter: `drop-shadow(0 2px 6px ${t.brandColor}30)`,
                    }}
                  />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-black/40 group-hover:text-black transition-colors whitespace-nowrap">
                    {t.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
