"use client";
import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "cyan" | "violet" | "emerald";

// One accent (Live Cyan). "violet" and "emerald" are kept as names for existing callers but render
// neutral, so color only ever means "active" (cyan) or "live" (emerald status dots, elsewhere).
const toneClasses: Record<Tone, string> = {
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  violet: "bg-white/5 border-white/10 text-gray-300",
  emerald: "bg-white/5 border-white/10 text-gray-300",
};

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "flat" (default) is a solid card surface; "glass" is reserved for literal console/status readouts per DESIGN.md. */
  variant?: "glass" | "flat";
  /** Icon-badge lead-in — the standard replacement for colored border-t-2 stripe accents. */
  icon?: { Icon: LucideIcon; tone: Tone };
  /** Lift on hover. Only for cards that are themselves a link; static cards stay put so they don't look clickable. */
  interactive?: boolean;
}

export function GlowCard({ children, className, delay = 0, variant = "flat", icon, interactive = false }: GlowCardProps) {
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
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={interactive ? { y: -4, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } } : undefined}
      whileTap={interactive ? { scale: 0.99, transition: { duration: 0.15, ease: [0.16, 1, 0.3, 1] } } : undefined}
      onMouseMove={handleMouseMove}
      className={cn(
        "spotlight-card cyber-border relative rounded-2xl overflow-hidden group transition-colors duration-300",
        interactive && "hover:border-cyan-500/30",
        variant === "glass" ? "glass-card" : "bg-card border border-border",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
      <div className="relative z-10 h-full flex flex-col">
        {icon && (
          <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center border mb-4 shrink-0", toneClasses[icon.tone])}>
            <icon.Icon className="w-5 h-5" />
          </div>
        )}
        {children}
      </div>
    </motion.div>
  );
}
