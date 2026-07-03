"use client";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function AIBackground() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Convert to percentages
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      {/* 1. Faint structural grid */}
      <div className="absolute inset-0 subtle-grid-mask opacity-40"></div>

      {/* 2. Aurora gradient blobs — the site's primary ambient color */}
      {!shouldReduceMotion && (
        <>
          <div className="absolute top-[-15%] left-[-10%] w-[65vw] h-[65vh] rounded-full bg-cyan-500/20 blur-[140px] floating-orb" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-[-15%] right-[-10%] w-[65vw] h-[65vh] rounded-full bg-violet-500/20 blur-[140px] floating-orb" style={{ animationDelay: '-5s' }} />
          <div className="absolute top-[30%] right-[10%] w-[45vw] h-[45vh] rounded-full bg-fuchsia-500/10 blur-[140px] floating-orb" style={{ animationDelay: '-9s' }} />
        </>
      )}

      {/* 3. Mouse-following soft spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 700px at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.06), transparent 80%)`
        }}
      />

      {/* 4. Subtle Neural/Circuit lines (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 100 Q 200 150 400 100 T 800 100 T 1200 100" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M 0 300 Q 300 200 600 300 T 1200 300" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M 0 500 Q 400 600 800 500 T 1600 500" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="125" r="2" fill="currentColor" />
        <circle cx="600" cy="250" r="2" fill="currentColor" />
        <circle cx="800" cy="550" r="2" fill="currentColor" />
      </svg>

      {/* 5. Vignette to keep edges rich and center readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_0%,rgba(7,6,15,0.5)_100%)]" />
    </div>
  );
}
