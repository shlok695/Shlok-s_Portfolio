import { GlowCard } from "./GlowCard";
import Link from "next/link";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  caseStudyLink: string;
  reportLink: string;
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  liveLink,
  caseStudyLink,
  reportLink,
  delay
}: ProjectCardProps) {
  return (
    <GlowCard className="p-6 flex flex-col h-full group/card" delay={delay}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity pointer-events-none" />
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-muted-foreground text-sm flex-1 mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-3 mt-auto relative z-20">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors text-sm font-medium">
            <span>Live Demo</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        <div className="grid grid-cols-2 gap-3">
          <Link href={caseStudyLink} className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-transparent border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">
            <span>Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href={reportLink} className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-transparent border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium">
            <span>Report</span>
            <FileText className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </GlowCard>
  );
}
