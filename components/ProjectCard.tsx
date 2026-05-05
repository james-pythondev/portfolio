"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const ProjectCard = ({ p }: { p: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1500 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ backgroundColor: "#ffffff" }}
        transition={{ duration: 0.3 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group bg-[#E6E6E6] p-5 sm:p-10 md:p-14 min-h-[280px] sm:min-h-[440px] flex flex-col justify-between cursor-pointer hover-target h-full"
      >
        <div className="flex items-start justify-between mb-10" style={{ transform: "translateZ(30px)" }}>
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-black/40">
            {p.label}
          </span>
          <div className="w-10 h-10 border border-black flex items-center justify-center text-sm group-hover:bg-[#F05033] group-hover:border-[#F05033] group-hover:text-white transition-all duration-300">
            ↗
          </div>
        </div>

        <div style={{ transform: "translateZ(50px)" }}>
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
            {p.tags.slice(0, 3).map((t: string) => (
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
    </div>
  );
};
