"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

// reducedMotion="user" makes every Motion animation on the site honor prefers-reduced-motion:
// transforms are skipped and elements appear in their final state.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
