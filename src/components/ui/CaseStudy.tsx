"use client";

import { GlowCard } from "./GlowCard";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle, FolderGit2, AlertTriangle } from "lucide-react";
import { ProjectChallengesSection } from "./ProjectChallengesSection";

export interface CaseStudyProps {
  title: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
  architecture?: string;
  security?: string;
  deployment?: string;
  future?: string;
  liveLink?: string;
  githubLink?: string;
  challenges?: string[];
  solutions?: string[];
  highlight?: string;
}

export function CaseStudy({
  title,
  problem,
  solution,
  features,
  techStack,
  architecture,
  security,
  deployment,
  future,
  liveLink,
  githubLink,
  challenges,
  solutions,
  highlight
}: CaseStudyProps) {
  return (
    <div className="flex flex-col gap-12 py-10 max-w-4xl mx-auto w-full">
      {/* Back Link */}
      <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors self-start">
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Project Hub</span>
      </Link>

      {/* Hero Section */}
      <section className="flex flex-col items-start mt-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
          {title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-8">
          {techStack.map(tag => (
            <span key={tag} className="px-3 py-1.5 rounded-lg bg-cyan-950/30 border border-cyan-900/40 text-sm text-cyan-100 cursor-default">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-card hover:bg-white/10 text-white font-medium transition-colors border border-cyan-500/30">
              <span>View Live Project</span>
              <ExternalLink className="w-4 h-4 text-cyan-400" />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-card hover:bg-white/10 text-white font-medium transition-colors border border-border">
              <span>View on GitHub</span>
              <FolderGit2 className="w-4 h-4 text-gray-300" />
            </a>
          )}
        </div>
      </section>

      {/* Problem & Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlowCard className="p-8" icon={{ Icon: AlertTriangle, tone: "violet" }}>
          <h2 className="text-2xl font-bold mb-4 text-white">The Problem</h2>
          <p className="text-gray-300 leading-relaxed">{problem}</p>
        </GlowCard>
        <GlowCard className="p-8" icon={{ Icon: CheckCircle, tone: "emerald" }}>
          <h2 className="text-2xl font-bold mb-4 text-white">The Solution</h2>
          <p className="text-gray-300 leading-relaxed">{solution}</p>
        </GlowCard>
      </div>

      {/* Features */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-white">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <GlowCard key={i} delay={i * 0.1} className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">{feature}</span>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Details Sections */}
      <div className="flex flex-col gap-8">
        {architecture && (
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Architecture</h2>
            <p className="text-gray-300 leading-relaxed bg-card p-6 rounded-xl border border-border">{architecture}</p>
          </section>
        )}
        {security && (
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Security Considerations</h2>
            <p className="text-gray-300 leading-relaxed bg-card p-6 rounded-xl border border-border">{security}</p>
          </section>
        )}
        {deployment && (
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Deployment Details</h2>
            <p className="text-gray-300 leading-relaxed bg-card p-6 rounded-xl border border-border">{deployment}</p>
          </section>
        )}
        {future && (
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Future Improvements</h2>
            <p className="text-gray-300 leading-relaxed bg-card p-6 rounded-xl border border-border">{future}</p>
          </section>
        )}
      </div>

      {/* Challenges & Solutions */}
      {challenges && solutions && highlight && (
        <ProjectChallengesSection
          challenges={challenges}
          solutions={solutions}
          highlight={highlight}
        />
      )}

      {/* Bottom CTA */}
      <section className="flex flex-col items-center text-center py-10 border-t border-white/10">
        <span className="text-gray-300 mb-6">Want to know more about the developer?</span>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/" className="px-6 py-3 rounded-full bg-card hover:bg-white/10 text-white font-medium transition-colors border border-border">
            Back to Project Hub
          </Link>
          <Link href="/home" className="btn-gradient px-6 py-3 rounded-full font-semibold">
            Open Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
