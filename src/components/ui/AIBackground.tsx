"use client";
import { motion } from "framer-motion";

export function AIBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div
        className="absolute top-0 left-0 w-[50%] h-[50%] rounded-full bg-orange-600/10 blur-[100px] animate-pulse-glow"
        style={{ animationDuration: '8s' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[50%] h-[50%] rounded-full bg-rose-600/10 blur-[100px] animate-pulse-glow"
        style={{ animationDuration: '10s' }}
      />
    </div>
  );
}
