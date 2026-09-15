"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { V } from "@/lib/variants";
import { SOCIALS } from "@/lib/data";

export default function Contact() {
  const [showSocials, setShowSocials] = useState(false);

  /* Formspree React hook — form ID: mvkoejkb */
  const [state, handleSubmit] = useForm("mvkoejkb");

  return (
    <motion.section
      id="contact"
      variants={V.fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="bg-black text-white py-14 sm:py-36 md:py-48 px-5 sm:px-8 md:px-16"
    >
      <div className="max-w-[1340px] mx-auto">
        <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#F05033] mb-10">
          {"// Next Step"}
        </p>

        {/* Large headline */}
        <motion.div variants={V.stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div className="overflow-hidden py-2">
            <motion.h2
              variants={V.rise}
              className="font-black text-[13vw] md:text-[11vw] tracking-tighter leading-[0.82] uppercase"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              Ready to
            </motion.h2>
          </div>
          <div className="overflow-hidden py-2 mb-6 sm:mb-16">
            <motion.h2
              variants={V.rise}
              className="font-black text-[13vw] md:text-[11vw] tracking-tighter leading-[0.82] uppercase italic text-white/30"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              scale big?
            </motion.h2>
          </div>
        </motion.div>

        {/* CTA + social bubbles */}
        <div className="flex flex-col items-start gap-8">
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <motion.button
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setShowSocials(!showSocials)}
              className="relative z-10 inline-flex items-center gap-3 bg-[#F05033] text-white text-[12px] sm:text-[13px] font-black uppercase tracking-[0.25em] px-7 sm:px-10 py-4 sm:py-5 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
              style={{ fontFamily: "var(--font-display, sans-serif)" }}
            >
              {showSocials ? "Close" : "Send A Message"}
            </motion.button>

            <AnimatePresence>
              {showSocials && (
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {SOCIALS.map((s, i) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      initial={{ opacity: 0, scale: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                          delay: i * 0.08,
                        },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0,
                        y: 20,
                        transition: {
                          duration: 0.2,
                          delay: (SOCIALS.length - 1 - i) * 0.05,
                        },
                      }}
                      whileHover={{ scale: 1.2, y: -4 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm flex items-center justify-center transition-colors duration-200 hover:bg-white/15"
                      title={s.label}
                    >
                      <s.icon
                        className="text-[19px] sm:text-[22px] transition-colors duration-200"
                        style={{ color: s.color }}
                      />
                    </motion.a>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Email + phone */}
          <div className="flex flex-col gap-1.5">
            <a
              href="mailto:jamesandrew2705@gmail.com"
              className="text-[11px] font-semibold text-white/40 tracking-widest hover:text-white/70 transition-colors"
            >
              jamesandrew2705@gmail.com
            </a>
            <span className="text-[11px] font-semibold text-white/25 tracking-widest">
              +91 73393 92562
            </span>
          </div>
        </div>

        {/* ══ Contact Form (Formspree) ══ */}
        <div className="mt-16 sm:mt-24 border-t border-white/10 pt-12 sm:pt-16">
          <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/25 mb-10">
            {"// Or drop a direct message"}
          </p>

          {state.succeeded ? (
            /* Success state */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border border-[#F05033]/30 bg-[#F05033]/5 p-8 sm:p-12 max-w-xl"
            >
              <p
                className="font-black text-2xl sm:text-3xl tracking-tight text-white mb-2"
                style={{ fontFamily: "var(--font-display, sans-serif)" }}
              >
                Message sent. ✓
              </p>
              <p className="text-white/40 text-[14px]">
                I&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-xl" noValidate>
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-5 py-4 text-[14px] focus:outline-none focus:border-[#F05033]/60 transition-colors"
                />
                <ValidationError
                  field="name"
                  prefix="Name"
                  errors={state.errors}
                  className="text-[#F05033] text-[11px] tracking-wide"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-5 py-4 text-[14px] focus:outline-none focus:border-[#F05033]/60 transition-colors"
                />
                <ValidationError
                  field="email"
                  prefix="Email"
                  errors={state.errors}
                  className="text-[#F05033] text-[11px] tracking-wide"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-white/5 border border-white/10 text-white placeholder:text-white/20 px-5 py-4 text-[14px] focus:outline-none focus:border-[#F05033]/60 transition-colors resize-none"
                />
                <ValidationError
                  field="message"
                  prefix="Message"
                  errors={state.errors}
                  className="text-[#F05033] text-[11px] tracking-wide"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className="self-start inline-flex items-center gap-3 bg-[#F05033] text-white text-[11px] font-black uppercase tracking-[0.3em] px-8 py-4 hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "var(--font-display, sans-serif)" }}
              >
                {state.submitting ? "Sending…" : "Send Message →"}
              </button>

              {/* General form-level errors */}
              <ValidationError
                errors={state.errors}
                className="text-[#F05033] text-[11px] tracking-wide"
              />
            </form>
          )}
        </div>
      </div>
    </motion.section>
  );
}
