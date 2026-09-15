"use client";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";
import { V } from "@/lib/variants";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <motion.section
      id="experience"
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
            {"// History"}
          </span>
          <h2
            className="font-black text-[8vw] md:text-[5vw] tracking-tighter leading-none text-black uppercase"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Professional Journey
          </h2>
        </div>

        <div className="border-t border-black pt-4 flex flex-col gap-6">
          {EXPERIENCE.map((exp) => (
            <TiltCard key={exp.role}>
              <div className="group bg-[#E6E6E6] border border-black p-6 sm:p-12 md:p-14 grid grid-cols-1 md:grid-cols-[180px_1fr_120px] gap-4 sm:gap-6 md:gap-10 items-start cursor-default hover:bg-white transition-colors">
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
                      <li
                        key={i}
                        className="text-[13px] sm:text-[14px] text-black/50 leading-relaxed flex gap-3"
                      >
                        <span className="text-accent mt-[3px] shrink-0">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Badge */}
                <div className="md:text-right">
                  <span className="inline-block text-[9px] font-bold uppercase tracking-[0.3em] text-accent border border-accent/40 px-3 py-1.5 bg-white shadow-sm">
                    {exp.badge}
                  </span>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
