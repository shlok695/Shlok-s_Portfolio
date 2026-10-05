import { GlowCard } from "./GlowCard";
import Link from "next/link";
import { ArrowRight, ExternalLink, FileText, FolderGit2 } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
  caseStudyLink: string;
  reportLink: string;
  delay?: number;
}

export function ProjectCard({
  title,
  description,
  tags,
  liveLink,
  githubLink,
  caseStudyLink,
  reportLink,
  delay
}: ProjectCardProps) {
  // Determine primary status badge
  const status = liveLink && liveLink !== "#" ? "Live" : "Case Study";

  return (
    <GlowCard className="p-6 md:p-7 flex flex-col h-full group/card" delay={delay}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{title}</h3>
        <div className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-gray-400 font-mono flex items-center gap-1.5">
          {status === "Live" && <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
          {status}
        </div>
      </div>
      
      <p className="text-gray-400 text-sm md:text-base flex-1 mb-6 leading-relaxed max-w-[60ch]">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-3 mt-auto relative z-20">
        {liveLink && liveLink !== "#" && (
          <Link href={liveLink.replace('https://svps.tail00dff0.ts.net', '')} className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold group/btn bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/15 hover:border-cyan-400/50 transition-colors">
            <span>View Live App</span>
            <ExternalLink aria-hidden="true" className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </Link>
        )}
        <div className={githubLink ? "grid grid-cols-3 gap-2" : "grid grid-cols-2 gap-3"}>
          <Link href={caseStudyLink} className="flex items-center justify-center gap-1.5 px-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors text-xs sm:text-sm font-medium group/btn whitespace-nowrap">
            <span>Case Study</span>
            <ArrowRight aria-hidden="true" className="w-4 h-4 text-gray-400 group-hover/btn:translate-x-1 transition-transform shrink-0" />
          </Link>
          <a href={reportLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 px-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors text-xs sm:text-sm font-medium group/btn whitespace-nowrap">
            <span>Report</span>
            <FileText aria-hidden="true" className="w-4 h-4 text-gray-400 group-hover/btn:scale-110 transition-transform shrink-0" />
          </a>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1.5 px-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors text-xs sm:text-sm font-medium group/btn whitespace-nowrap">
              <span>Code</span>
              <FolderGit2 aria-hidden="true" className="w-4 h-4 text-gray-400 group-hover/btn:scale-110 transition-transform shrink-0" />
            </a>
          )}
        </div>
      </div>
    </GlowCard>
  );
}
