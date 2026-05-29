"use client";
import { motion } from "framer-motion";
import { Server, ArrowRight, Container, Globe, Shield } from "lucide-react";
import { GlowCard } from "./GlowCard";

export function ArchitectureFlow() {
  const steps = [
    { icon: Globe, label: "User", sub: "Public Web" },
    { icon: Shield, label: "Tailscale Funnel", sub: "DNS & HTTPS" },
    { icon: Server, label: "Reverse Proxy", sub: "Path Routing" },
    { icon: Container, label: "Docker Apps", sub: "Port 3003, etc." }
  ];

  return (
    <div className="py-10 w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
        {/* Connecting Line for Desktop */}
        <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-1/2 z-0" />
        
        {steps.map((step, index) => (
          <motion.div 
            key={step.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="z-10 flex flex-col items-center"
          >
            <GlowCard className="p-6 flex flex-col items-center justify-center w-40 h-40 border-white/20 bg-black/80">
              <step.icon className="w-10 h-10 text-white mb-3" />
              <span className="font-medium text-center text-sm">{step.label}</span>
              <span className="text-xs text-muted-foreground mt-1 text-center">{step.sub}</span>
            </GlowCard>
            {index < steps.length - 1 && (
              <div className="md:hidden my-4">
                <ArrowRight className="w-6 h-6 text-white/40 rotate-90" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="mt-12 p-6 rounded-xl border border-white/10 bg-white/5 font-mono text-sm max-w-2xl mx-auto"
      >
        <div className="text-gray-400 mb-4">{`// Path-based Route Mapping`}</div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-orange-400">/</span>
            <span className="text-gray-300">→ Project Hub (Port 3003)</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-orange-400">/home</span>
            <span className="text-gray-300">→ Portfolio (Port 3003)</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-orange-400">/report</span>
            <span className="text-gray-300">→ Reports (Port 3003)</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-2">
            <span className="text-green-400">/repopilot</span>
            <span className="text-gray-300">→ RepoPilot App</span>
          </div>
          <div className="flex justify-between">
            <span className="text-rose-400">/campuskart</span>
            <span className="text-gray-300">→ CampusKart App</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
