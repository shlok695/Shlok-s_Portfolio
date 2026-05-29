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
    <section className="mt-16 w-full max-w-6xl mx-auto px-4 md:px-0 relative">
      {/* Decorative background lines / AI circuit effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10 0 L 10 100 L 50 140 L 50 1000" stroke="#4B5563" fill="none" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M 0 50 L 30 50 L 60 80 L 1000 80" stroke="#4B5563" fill="none" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
        {/* Glowing node */}
        <div className="absolute top-[140px] left-[50px] w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_10px_2px_rgba(249,115,22,0.6)] animate-pulse" />
      </div>

      <div className="mb-10 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">Challenges Faced & Solutions Delivered</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Challenges Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-white">Challenges Faced</h3>
          </div>
          <GlowCard className="p-6 h-full flex flex-col justify-start bg-black/40 border-white/10">
            <ul className="space-y-4">
              {challenges.map((challenge, idx) => (
                <li key={idx} className="flex gap-3 text-sm md:text-base text-gray-300 leading-relaxed items-start">
                  <span className="text-red-400/70 mt-1 flex-shrink-0">•</span>
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
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-semibold text-white">Solutions Delivered</h3>
          </div>
          <GlowCard className="p-6 h-full flex flex-col justify-start bg-black/40 border-white/10">
            <ul className="space-y-4">
              {solutions.map((solution, idx) => (
                <li key={idx} className="flex gap-3 text-sm md:text-base text-gray-300 leading-relaxed items-start">
                  <span className="text-green-400/70 mt-1 flex-shrink-0">✓</span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </GlowCard>
        </motion.div>
      </div>

      {/* Highlight Box */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="mt-12 relative z-10"
      >
        <div className="relative p-[1px] rounded-2xl bg-gradient-to-r from-orange-500/30 via-rose-500/30 to-orange-500/30 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-rose-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
          <div className="relative p-6 bg-black/60 backdrop-blur-sm rounded-2xl h-full flex items-start gap-4 hover:bg-black/40 transition-colors">
            <div className="flex-shrink-0 p-3 rounded-full bg-orange-500/10 text-orange-400">
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
