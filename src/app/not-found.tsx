"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";
import { projects, findClosestProject, findProjectByReferrer, type ProjectData } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { BlurReveal, MagneticButton } from "@/components/ui/AppleAnimations";

export default function NotFound() {
  const pathname = usePathname();
  const [referrerGuess, setReferrerGuess] = useState<ProjectData | null>(null);

  useEffect(() => {
    const check = () => {
      setReferrerGuess(findProjectByReferrer(document.referrer, window.location.href));
    };
    check();
  }, []);

  const pathGuess = findClosestProject(pathname ?? "");
  const guess = referrerGuess ?? pathGuess;
  const matchSource: "referrer" | "path" | null = referrerGuess ? "referrer" : pathGuess ? "path" : null;
  const otherProjects = projects.filter((p) => p.slug !== guess?.slug);

  const headline =
    matchSource === "referrer"
      ? `Welcome back from ${guess!.title}`
      : matchSource === "path"
        ? "I think you were looking for this"
        : "Nothing here, but plenty to explore";

  return (
    <div className="flex flex-col gap-16 py-16">
      <section className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <BlurReveal>
          <div className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-6">
            <Compass className="w-4 h-4" />
            Looks like you took a wrong turn
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">{headline}</h1>
          <p className="text-gray-400 leading-relaxed max-w-xl mx-auto">
            {pathname && (
              <>
                The page{" "}
                <code className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300 font-mono text-sm">
                  {pathname}
                </code>{" "}
                doesn&apos;t exist
                {matchSource === "referrer" && " — but I can tell you came from here, so here's the direct link:"}
                {matchSource === "path" && " — here's my best guess at what you were after:"}
                {!matchSource && "."}
              </>
            )}
          </p>
        </BlurReveal>
      </section>

      {guess && (
        <section className="max-w-md mx-auto w-full">
          <BlurReveal className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-emerald-400">
              {matchSource === "referrer" ? "You came from here" : "Best guess"}
            </span>
          </BlurReveal>
          <ProjectCard
            title={guess.title}
            description={guess.description}
            tags={guess.tags}
            liveLink={guess.liveLink}
            githubLink={guess.githubLink}
            caseStudyLink={`/projects/${guess.slug}`}
            reportLink={guess.reportLink}
          />
        </section>
      )}

      <section className="flex flex-col items-center text-center gap-8">
        <BlurReveal>
          <p className="text-gray-400">
            {guess ? "Want to see everything else I've built? Scroll down." : "Here's everything I've built — take a look."}
          </p>
        </BlurReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {otherProjects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              caseStudyLink={`/projects/${project.slug}`}
              reportLink={project.reportLink}
              delay={i * 0.1}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center text-center py-10">
        <h2 className="text-2xl font-semibold mb-6 text-white">Want to know more about the developer?</h2>
        <MagneticButton>
          <Link href="/home" className="btn-gradient flex items-center gap-2 px-8 py-4 rounded-xl font-semibold">
            <span>Meet Shlok</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </MagneticButton>
      </section>
    </div>
  );
}
