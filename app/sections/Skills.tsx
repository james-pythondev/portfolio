"use client";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";
import { V } from "@/lib/variants";
import { SKILLS, TECHSTACK } from "@/lib/data";

export default function Skills() {
  /* Duplicate items so the marquee loops seamlessly */
  const marquee = [...TECHSTACK, ...TECHSTACK];

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
          <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-[#F05033]">
            {"// Expertises"}
          </span>
          <h2
            className="font-black text-[8vw] md:text-[5vw] tracking-tighter leading-none text-black uppercase"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Systems &amp; Interfaces
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SKILLS.map((s) => (
            <TiltCard key={s.name}>
              <div className="bg-[#E6E6E6] border border-black p-4 sm:p-8 md:p-10 flex flex-col items-center justify-center gap-3 sm:gap-4 group hover:bg-black transition-all duration-300 cursor-default h-full">
                <s.icon className="text-[26px] sm:text-[32px] text-black/25 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-black group-hover:text-white transition-colors text-center">
                  {s.name}
                </p>
                <p className="text-[8px] font-semibold uppercase tracking-widest text-black/25 group-hover:text-white/40 transition-all sm:opacity-0 sm:group-hover:opacity-100 text-center">
                  {s.cat}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* ── Tech stack marquee ── */}
        <div className="mt-12 sm:mt-16 border-t border-black pt-10 overflow-hidden">
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-black/30 mb-8 text-center">
            Tech Stack
          </p>
          <div className="relative flex">
            <motion.div
              className="flex gap-12 items-center shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 22, ease: "linear", repeat: Infinity }}
            >
              {marquee.map((t, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 shrink-0 group cursor-default"
                >
                  <t.icon className="text-[28px] text-black/20 group-hover:text-black/60 transition-colors duration-300" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-black/25 group-hover:text-black/50 transition-colors whitespace-nowrap">
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
