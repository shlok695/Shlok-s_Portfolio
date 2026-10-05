import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArchitectureFlow } from "@/components/ui/ArchitectureFlow";
import { MonitoringObservability } from "@/components/ui/MonitoringObservability";
import Link from "next/link";
import { ArrowRight, Server, Container, Shield, Lock, GitBranch, Home as HomeIcon, Terminal } from "lucide-react";
import { BlurReveal, ScrollParallaxHero, HeroWordReveal, MagneticButton } from "@/components/ui/AppleAnimations";
import { RoleShowcase } from "@/components/ui/RoleShowcase";
import { TerminalStatus } from "@/components/ui/TerminalStatus";
import { projects } from "@/data/projects";

const infraTraits = [
  { label: "Self-hosted", icon: HomeIcon },
  { label: "Dockerized", icon: Container },
  { label: "Reverse Proxy", icon: Shield },
  { label: "HTTPS", icon: Lock },
  { label: "CI/CD", icon: GitBranch },
  { label: "Home Lab", icon: Server },
  { label: "Linux Server", icon: Terminal },
];

const focusTags = ["AWS", "Kubernetes", "Terraform", "GitOps", "DevSecOps", "SRE", "Docker", "Tailscale Funnel"];

export default function Home() {
  return (
    <div className="flex flex-col gap-28 py-6 md:py-10">
      {/* Hero: pitch on the left, the live server status as proof on the right */}
      <ScrollParallaxHero>
        <section id="home" className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center pt-6 md:pt-16 lg:pt-20 scroll-mt-24">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.02] mb-6">
              <HeroWordReveal text="Secure. Reliable." className="text-white" delay={0.15} />{" "}
              <HeroWordReveal text="Scalable." className="text-cyan-400" delay={0.45} />
            </h1>

            <BlurReveal delay={0.2}>
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-[34rem]">
                Live apps, technical reports and self-hosted infrastructure from a DevOps engineer growing into Cloud and Platform Engineering.
              </p>
            </BlurReveal>

            <BlurReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <MagneticButton>
                  <a href="#projects" className="btn-gradient flex items-center gap-2 px-6 py-3 rounded-xl font-semibold">
                    Explore Projects
                    <ArrowRight aria-hidden="true" className="w-4 h-4" />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/home" className="btn-quiet block px-6 py-3 rounded-xl font-medium">
                    View Portfolio
                  </Link>
                </MagneticButton>
              </div>
            </BlurReveal>
          </div>

          <BlurReveal delay={0.35} className="w-full max-w-md lg:max-w-none lg:justify-self-end">
            <TerminalStatus />
            <p className="mt-3 text-xs text-gray-500">Live status from the server this page is running on.</p>
          </BlurReveal>
        </section>
      </ScrollParallaxHero>

      {/* What I Do */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
        <BlurReveal className="flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">What I Do</h2>
          <p className="text-gray-400 leading-relaxed max-w-[42ch] mb-6">
            I build the platform layer: infrastructure, pipelines and guardrails that let other engineers ship safely without thinking about it.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Core tools">
            {focusTags.map((tag) => (
              <li key={tag} className="px-3 py-1.5 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-gray-300">
                {tag}
              </li>
            ))}
          </ul>
        </BlurReveal>
        <RoleShowcase />
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-24">
        <BlurReveal className="mb-10 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">Featured Applications</h2>
          <p className="text-gray-400 max-w-[60ch] leading-relaxed">Running on my own server right now. Open the app, read the case study, or go straight to the code.</p>
        </BlurReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
              caseStudyLink={`/projects/${project.slug}`}
              reportLink={project.reportLink}
              delay={i * 0.08}
            />
          ))}
        </div>
      </section>

      {/* Real Challenges. Practical Solutions. */}
      <section className="scroll-mt-24 relative z-10">
        <BlurReveal className="mb-8 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Real Challenges. Practical Solutions.</h2>
        </BlurReveal>

        <BlurReveal>
          <ul className="rounded-2xl border border-border bg-card divide-y divide-white/10">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-[10rem_1fr_1fr_auto] gap-3 md:gap-8 p-6 md:p-7 transition-colors hover:bg-white/[0.03]"
                >
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">Biggest challenge</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{project.caseStudy.challengeSummary}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 mb-1">Solution delivered</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{project.caseStudy.solutionSummary}</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm font-medium text-cyan-400 md:self-center whitespace-nowrap">
                    Case Study
                    <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </BlurReveal>
      </section>

      {/* Infrastructure */}
      <section id="infrastructure" className="flex flex-col items-center relative z-10 scroll-mt-24">
        <BlurReveal className="mb-6 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">Infrastructure</h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed">
            This portfolio and every application above run on my own home server: self-hosted, containerized, and routed through a reverse proxy with automated HTTPS.
          </p>
        </BlurReveal>

        <BlurReveal delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {infraTraits.map((trait) => (
            <span key={trait.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-gray-300">
              <trait.icon aria-hidden="true" className="w-4 h-4 text-cyan-400" />
              {trait.label}
            </span>
          ))}
        </BlurReveal>

        <ArchitectureFlow />

        <MonitoringObservability />
      </section>

      {/* CTA */}
      <section className="flex flex-col items-center text-center py-10 relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 text-white">Want to know more about the developer?</h2>
        <MagneticButton>
          <Link href="/home" className="btn-gradient flex items-center gap-2 px-8 py-4 rounded-xl font-semibold">
            <span>View Portfolio</span>
            <ArrowRight aria-hidden="true" className="w-5 h-5" />
          </Link>
        </MagneticButton>
      </section>
    </div>
  );
}
