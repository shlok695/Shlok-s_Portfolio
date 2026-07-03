"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Apple's signature easing curve for an organic, super-smooth feel
export const appleEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function BlurReveal({ children, delay = 0, className = "" }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: appleEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AppleFade({ children, delay = 0, className = "" }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: appleEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollParallaxHero({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { scrollY } = useScroll();
  
  // Transform values based on scroll position
  // From 0 to 400px of scroll, scale from 1 to 0.9, and fade opacity from 1 to 0
  const scale = useTransform(scrollY, [0, 400], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <motion.div
      style={{ scale, opacity, y }}
      className={cn("origin-center", className)}
    >
      {children}
    </motion.div>
  );
}

// Staggered lists with Apple easing
export function AppleStaggerContainer({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15
          }
        },
        hidden: {}
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AppleStaggerItem({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      variants={{
        visible: { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          transition: { duration: 1.2, ease: appleEase } 
        },
        hidden: { 
          opacity: 0, 
          y: 40,
          filter: "blur(5px)"
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AppleScale({ children, delay = 0, className = "" }: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: appleEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AppleSlide({ children, delay = 0, className = "", direction = "left" }: AnimationProps & { direction?: "left" | "right" | "up" | "down" }) {
  const directionOffset = {
    left: { x: -40, y: 0 },
    right: { x: 40, y: 0 },
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, ease: appleEase, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FloatingElement({ children, className = "", delay = 0, yOffset = 10, duration = 6 }: AnimationProps & { yOffset?: number, duration?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -yOffset, 0] }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroWordReveal({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) {
  const words = text.split(" ");
  
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
        hidden: {}
      }}
      className={cn("inline-block", className)}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            variants={{
              visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: appleEase } },
              hidden: { y: "100%", opacity: 0 }
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

import { useState, useRef } from "react";

export function MagneticButton({ children, className = "", onClick }: { children: ReactNode, className?: string, onClick?: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn("inline-block", className)}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
