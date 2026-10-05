"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
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
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress across the hero's own height, not fixed pixel offsets.
  // Fixed offsets (e.g. "fade out over 300px") complete almost instantly on mobile,
  // where wrapped headings/tags/stacked buttons make the hero much taller than on
  // desktop, leaving a long dead-scroll gap before the next section appears.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  // Scroll-linked styles aren't covered by MotionConfig's reducedMotion, so opt out explicitly.
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { scale, opacity, y }}
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

export function MagneticButton({ children, className = "", onClick }: { children: ReactNode, className?: string, onClick?: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  // Motion values, not React state: the pointer moves every frame and must not re-render the tree.
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(rawY, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - (left + width / 2)) * 0.1);
    rawY.set((e.clientY - (top + height / 2)) * 0.1);
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x, y }}
      className={cn("inline-block", className)}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
