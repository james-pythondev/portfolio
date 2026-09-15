"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible,  setIsVisible]  = useState(false);

  /*
   * FIX: isVisible is stored in a ref so the event listeners registered
   * in useEffect are not stale and do not need to be re-registered on
   * every visibility state change. The dep array is now [] (empty).
   */
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hovering =
        target.tagName === "A"      ||
        target.tagName === "BUTTON" ||
        Boolean(target.closest("a"))      ||
        Boolean(target.closest("button")) ||
        target.classList.contains("hover-target");
      setIsHovering(hovering);
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    window.addEventListener("mousemove",  updateMousePosition);
    window.addEventListener("mouseover",  handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove",  updateMousePosition);
      window.removeEventListener("mouseover",  handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []); // ← empty dep array — listeners registered exactly once

  /* Don't render on touch devices */
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 4 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 28, mass: 0.5 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : isVisible ? 0.5 : 0,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
      />
    </>
  );
};
