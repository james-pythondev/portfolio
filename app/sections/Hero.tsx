"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { TiltCard } from "@/components/TiltCard";
import { V } from "@/lib/variants";

export default function Hero() {
  /* ── Tab title trick: changes tab title when user switches away ── */
  useEffect(() => {
    const defaultTitle = document.title;
    const awayTitle    = "👋 Come back! — James Andrew";
    const handle = () => {
      document.title = document.hidden ? awayTitle : defaultTitle;
    };
    document.addEventListener("visibilitychange", handle);
    return () => document.removeEventListener("visibilitychange", handle);
  }, []);

  /* ── Parallax scroll transforms ── */
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const portraitY   = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY       = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textXLeft   = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const textXRight  = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const gridY       = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    /* Page-entry fade-in wraps the whole hero */
    <motion.section
      id="home"
      ref={heroRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-fit lg:min-h-screen pt-[64px] sm:pt-[72px] border-b border-black overflow-hidden"
    >
      <div className="max-w-[1340px] mx-auto px-5 sm:px-8 md:px-16 h-full grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_500px] min-h-fit lg:min-h-[calc(100vh-72px)]">

        {/* Right — Portrait (ordered first on mobile) */}
        <div className="relative order-first lg:order-last flex items-end justify-center bg-black/[0.03] overflow-visible lg:min-h-0 min-h-[300px] sm:min-h-[400px]">
          {/* Grid texture */}
          <motion.div
            className="absolute inset-[-50%] opacity-[0.04] pointer-events-none"
            style={{
              y: gridY,
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Ambient radial lighting glow behind portrait */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[300px] sm:w-[460px] h-[300px] sm:h-[460px] rounded-full blur-[90px] opacity-45 pointer-events-none transition-all duration-700"
            style={{ background: "radial-gradient(circle, var(--acc-glow) 0%, transparent 75%)" }}
          />

          {/* Available badge */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20 flex items-center gap-2 border border-black bg-[#E6E6E6] px-3 py-1.5 sm:px-4 sm:py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.4em]">Available</span>
          </div>

          {/* Portrait with parallax */}
          <motion.div
            style={{ y: portraitY }}
            className="relative z-10 w-[90%] sm:w-[100%] lg:w-[110%] h-auto mix-blend-multiply sm:-ml-[15%] mb-[-2%]"
          >
            <TiltCard>
              <Image
                src="/hero_cutout.png"
                alt="James Andrew"
                width={800}
                height={1000}
                className="w-full h-auto object-contain"
                priority
              />
            </TiltCard>
          </motion.div>
        </div>

        {/* Left — Text with parallax */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="flex flex-col justify-center gap-6 sm:gap-12 py-8 sm:py-12 md:py-14 lg:border-r border-black order-last lg:order-first"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[11px] font-bold uppercase tracking-[0.5em] text-accent mb-5"
            >
              {"// Full Stack Developer"}
            </motion.p>

            <motion.div variants={V.stagger} initial="hidden" animate="show">
              <div className="overflow-hidden py-1">
                <motion.h1
                  variants={V.blurRise}
                  className="font-black text-[16vw] sm:text-[14vw] lg:text-[10vw] leading-[0.82] text-black tracking-tighter uppercase"
                  style={{
                    x: textXLeft,
                    transformOrigin: "bottom",
                    fontFamily: "var(--font-display, sans-serif)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  JAMES
                </motion.h1>
              </div>
              <div className="overflow-hidden py-1">
                <motion.h1
                  variants={V.blurRise}
                  className="font-black text-[16vw] sm:text-[14vw] lg:text-[10vw] leading-[0.82] text-black tracking-tighter uppercase"
                  style={{
                    x: textXRight,
                    transformOrigin: "bottom",
                    fontFamily: "var(--font-display, sans-serif)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  ANDREW
                </motion.h1>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <div className="w-10 h-px bg-black mb-6" />
            <p className="text-black/55 text-base sm:text-lg font-normal leading-relaxed max-w-md">
              I design and build high-performance websites and applications that help businesses scale and succeed.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mt-6 sm:mt-8">
              <a
                href="https://wa.me/917339392562"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-target group flex items-center gap-3 bg-black text-white px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.35em] hover:bg-[#25D366] hover:text-black transition-colors duration-300 rounded-sm"
              >
                <SiWhatsapp className="text-[14px] group-hover:scale-110 transition-transform" />
                Get in touch →
              </a>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/30">
                Based in TN, India
              </span>
            </div>
          </motion.div>
        </motion.div>
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
    </motion.section>
  );
}
