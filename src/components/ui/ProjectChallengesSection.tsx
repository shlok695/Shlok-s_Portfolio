"use client";

import { motion } from "framer-motion";
import { Target, CheckCircle2, Zap } from "lucide-react";
import { GlowCard } from "./GlowCard";

export interface ProjectChallengesSectionProps {
  challenges: string[];
  solutions: string[];
  highlight: string;
}

export function ProjectChallengesSection({ challenges, solutions, highlight }: ProjectChallengesSectionProps) {
  return (
    <section className="mt-16 w-full max-w-6xl mx-auto px-4 md:px-0">
      <div className="mb-10 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">Challenges Faced &amp; Solutions Delivered</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Challenges Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlowCard className="p-6 h-full flex flex-col justify-start gap-4" icon={{ Icon: Target, tone: "violet" }}>
            <h3 className="text-xl font-semibold text-white">Challenges Faced</h3>
            <ul className="space-y-4">
              {challenges.map((challenge, idx) => (
                <li key={idx} className="flex gap-3 text-sm md:text-base text-gray-300 leading-relaxed items-start">
                  <span className="text-gray-500 mt-1 flex-shrink-0">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </GlowCard>
        </motion.div>

        {/* Solutions Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <GlowCard className="p-6 h-full flex flex-col justify-start gap-4" icon={{ Icon: CheckCircle2, tone: "emerald" }}>
            <h3 className="text-xl font-semibold text-white">Solutions Delivered</h3>
            <ul className="space-y-4">
              {solutions.map((solution, idx) => (
                <li key={idx} className="flex gap-3 text-sm md:text-base text-gray-300 leading-relaxed items-start">
                  <span className="text-cyan-400/70 mt-1 flex-shrink-0">✓</span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </GlowCard>
        </motion.div>
      </div>

      {/* Highlight Box — the one deliberate gradient-border exception, reserved for a single quote per case study */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="mt-12"
      >
        <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/30 via-white/10 to-cyan-500/30">
          <div className="relative p-6 bg-card rounded-2xl h-full flex items-start gap-4 hover:bg-white/5 transition-colors">
            <div className="flex-shrink-0 p-3 rounded-full bg-cyan-500/10 text-cyan-400">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <p className="text-lg md:text-xl font-medium text-white italic leading-relaxed">
                &quot;{highlight}&quot;
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
