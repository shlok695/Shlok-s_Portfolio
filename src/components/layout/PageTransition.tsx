"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { appleEase } from "@/components/ui/AppleAnimations";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
        transition={{ duration: 0.55, ease: appleEase }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
