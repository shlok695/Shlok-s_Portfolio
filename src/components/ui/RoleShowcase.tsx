"use client";

import { Shield, Cloud, LayoutGrid, Workflow, Activity, type LucideIcon } from "lucide-react";
import { AppleStaggerContainer, AppleStaggerItem } from "./AppleAnimations";

interface Role {
  icon: LucideIcon;
  label: string;
  description: string;
}

// A still, scannable list: the roles are information, so they don't loop or pulse.
const roles: Role[] = [
  {
    icon: Cloud,
    label: "Cloud Infrastructure",
    description: "AWS environments built with Terraform, with OPA policy guardrails in front.",
  },
  {
    icon: LayoutGrid,
    label: "Platform Engineering",
    description: "Self-service golden paths and developer platforms on Kubernetes.",
  },
  {
    icon: Workflow,
    label: "GitOps & CI/CD",
    description: "GitHub Actions, Argo CD, and progressive rollouts that ship predictably.",
  },
  {
    icon: Shield,
    label: "DevSecOps",
    description: "Scanning, signing, and policy checks built into the pipeline.",
  },
  {
    icon: Activity,
    label: "SRE & Observability",
    description: "SLOs, tracing, dashboards, and runbooks for faster recovery.",
  },
];

export function RoleShowcase() {
  return (
    <AppleStaggerContainer className="flex flex-col divide-y divide-white/10 border-y border-white/10">
      {roles.map((role) => (
        <AppleStaggerItem key={role.label} className="flex items-start gap-4 py-5">
          <div className="w-10 h-10 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
            <role.icon aria-hidden="true" className="w-5 h-5 text-cyan-400" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-white">{role.label}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mt-1">{role.description}</p>
          </div>
        </AppleStaggerItem>
      ))}
    </AppleStaggerContainer>
  );
}
