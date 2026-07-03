"use client";

import { Shield, Headset, ServerCog, FlaskConical, Workflow, type LucideIcon } from "lucide-react";
import { AppleStaggerContainer, AppleStaggerItem } from "./AppleAnimations";

interface Role {
  icon: LucideIcon;
  label: string;
  description: string;
  color: string;
  motionClass: string;
}

const roles: Role[] = [
  {
    icon: Shield,
    label: "Cybersecurity",
    description: "Intrusion prevention, access control, and secure-by-default thinking.",
    color: "cyan",
    motionClass: "animate-icon-pulse",
  },
  {
    icon: Headset,
    label: "Application Support",
    description: "Monitoring, troubleshooting, and keeping production systems reliable.",
    color: "violet",
    motionClass: "animate-icon-nod",
  },
  {
    icon: ServerCog,
    label: "IT Architecture",
    description: "Designing secure, scalable infrastructure across smart facilities.",
    color: "fuchsia",
    motionClass: "animate-icon-spin",
  },
  {
    icon: FlaskConical,
    label: "Software Testing",
    description: "User-flow testing, edge cases, and validating real-world behavior.",
    color: "emerald",
    motionClass: "animate-icon-bounce",
  },
  {
    icon: Workflow,
    label: "DevOps",
    description: "Docker, CI/CD pipelines, and self-hosted deployment automation.",
    color: "indigo",
    motionClass: "animate-icon-flow",
  },
];

const colorMap: Record<string, { text: string; border: string; bg: string; ring: string }> = {
  cyan: { text: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10", ring: "border-cyan-400/50" },
  violet: { text: "text-violet-400", border: "border-violet-500/30", bg: "bg-violet-500/10", ring: "border-violet-400/50" },
  fuchsia: { text: "text-fuchsia-400", border: "border-fuchsia-500/30", bg: "bg-fuchsia-500/10", ring: "border-fuchsia-400/50" },
  emerald: { text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10", ring: "border-emerald-400/50" },
  indigo: { text: "text-indigo-400", border: "border-indigo-500/30", bg: "bg-indigo-500/10", ring: "border-indigo-400/50" },
};

export function RoleShowcase() {
  return (
    <AppleStaggerContainer className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {roles.map((role, i) => {
        const c = colorMap[role.color];
        return (
          <AppleStaggerItem
            key={role.label}
            className={`premium-glass rounded-2xl p-5 flex flex-col items-center text-center gap-3 border ${c.border} hover:bg-white/5 transition-colors group`}
          >
            <div className="relative w-14 h-14 flex items-center justify-center">
              <span
                className={`absolute inset-0 rounded-full border ${c.ring} animate-ping-ring`}
                style={{ animationDelay: `${i * 0.3}s` }}
              />
              <div className={`relative w-14 h-14 rounded-full ${c.bg} border ${c.border} flex items-center justify-center`}>
                <div className={role.motionClass} style={{ animationDelay: `${i * 0.2}s` }}>
                  <role.icon className={`w-6 h-6 ${c.text}`} />
                </div>
              </div>
            </div>
            <h3 className="text-sm font-bold text-white">{role.label}</h3>
            <p className="text-xs text-gray-400 leading-relaxed">{role.description}</p>
          </AppleStaggerItem>
        );
      })}
    </AppleStaggerContainer>
  );
}
