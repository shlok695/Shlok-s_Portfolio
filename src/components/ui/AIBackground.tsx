"use client";
import { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";

export function AIBackground() {
  const shouldReduceMotion = useReducedMotion();
  // Pointer position lives in motion values so moving the mouse never re-renders React.
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(circle 500px at ${x}% ${y}%, rgba(34, 211, 238, 0.035), transparent 80%)`;

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      x.set((e.clientX / window.innerWidth) * 100);
      y.set((e.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion, x, y]);

  return (
    <div aria-hidden="true" className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* 1. Faint structural grid */}
      <div className="absolute inset-0 subtle-grid-mask opacity-40"></div>

      {/* 2. A single restrained ambient glow: one accent, not a bank of colored blobs */}
      {!shouldReduceMotion && (
        <div className="absolute top-[-15%] left-[-10%] w-[70vw] h-[70vh] rounded-full bg-cyan-500/8 blur-[180px] floating-orb" />
      )}

      {/* 3. Mouse-following soft spotlight */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ background: spotlight }} />

      {/* 4. Vignette to keep edges rich and center readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_0%,rgba(7,6,15,0.5)_100%)]" />
    </div>
  );
}
