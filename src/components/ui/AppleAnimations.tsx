"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Apple's signature easing curve for organic, spring-like feel without the actual bounce
export const appleEase: [number, number, number, number] = [0.32, 0.72, 0, 1];

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
