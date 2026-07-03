"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

import { useRef } from "react";

export function GlowCard({ children, className, delay = 0 }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Update CSS variables for the spotlight
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
      whileTap={{ scale: 0.99, transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] } }}
      onMouseMove={handleMouseMove}
      className={cn("glass-card spotlight-card cyber-border relative rounded-2xl overflow-hidden group border border-white/5", className)}
    >
      <div ref={cardRef} className="absolute inset-0 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}
