"use client";
import { motion } from "framer-motion";
import { V } from "@/lib/variants";

export default function About() {
  return (
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
          <span className="text-[11px] font-bold uppercase tracking-[0.45em] text-accent">{"// Bio"}</span>
          <h2
            className="font-black text-[8vw] md:text-[5vw] tracking-tighter leading-none text-black uppercase"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            About <em className="opacity-20">Me</em>
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
              I BUILD WEBSITES &amp; APPS THAT DRIVE GROWTH.
            </p>
            <div className="space-y-4">
              <p className="text-black/55 text-[15px] sm:text-[17px] leading-relaxed max-w-2xl">
                I&apos;m James Andrew S — a full stack developer with a background in flight simulation engineering. I specialize in creating performant, well-crafted web experiences and applications.
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
              { l: "Status",           v: "Open for iconic products", accent: true  },
              { l: "Heritage",         v: "IAF Simulation Engineer",  accent: false },
              { l: "Based In",         v: "Kodaikanal, TN, India",    accent: false },
              { l: "Currently Coding", v: "React · Next.js · Python", accent: false },
            ].map((s) => (
              <div
                key={s.l}
                className="p-4 sm:p-8 group hover:bg-black transition-all duration-300 cursor-default"
              >
                <p
                  className={`text-[9px] font-bold uppercase tracking-[0.45em] mb-3 ${
                    s.accent
                      ? "text-accent"
                      : "text-black/35 group-hover:text-white/35"
                  }`}
                >
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
  );
}
