"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";
import { V } from "@/lib/variants";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <motion.section
      id="projects"
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
            {"// Folio"}
          </span>
          <h2
            className="font-black text-[8vw] md:text-[5vw] tracking-tighter leading-none text-black uppercase"
            style={{ fontFamily: "var(--font-display, sans-serif)" }}
          >
            Selected Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((p) => {
            const hasLink = Boolean(p.url);

            /* Wrap card in <a> when a URL is available, <div> otherwise */
            const Wrapper = ({ children }: { children: ReactNode }) =>
              hasLink ? (
                <a
                  href={p.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                  aria-label={`View ${p.name}`}
                >
                  {children}
                </a>
              ) : (
                <div className="h-full">{children}</div>
              );

            return (
              <TiltCard key={p.name}>
                <Wrapper>
                  <div
                    className={`group bg-[#E6E6E6] border border-black p-5 sm:p-10 md:p-14 min-h-[280px] sm:min-h-[440px] flex flex-col justify-between transition-colors h-full ${
                      hasLink
                        ? "cursor-pointer hover-target hover:bg-white"
                        : "cursor-default hover:bg-white"
                    }`}
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-10">
                      <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40">
                        {p.label}
                      </span>
                      {/* ↗ arrow — only interactive when a URL is set */}
                      <div
                        className={`w-10 h-10 border border-black flex items-center justify-center text-sm transition-all duration-300 ${
                          hasLink
                            ? "group-hover:bg-[#F05033] group-hover:border-[#F05033] group-hover:text-white"
                            : "opacity-25"
                        }`}
                      >
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
                        {/* "Private" badge shown when no public URL */}
                        {!hasLink && (
                          <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 border border-black/20 text-black/30">
                            Private
                          </span>
                        )}
                      </div>

                      <h3
                        className={`font-black text-3xl sm:text-4xl md:text-5xl text-black tracking-tighter leading-none mb-3 sm:mb-4 transition-colors ${
                          hasLink ? "group-hover:text-[#F05033]" : ""
                        }`}
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
                  </div>
                </Wrapper>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
