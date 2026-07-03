import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArchitectureFlow } from "@/components/ui/ArchitectureFlow";
import Link from "next/link";
import { ArrowRight, Server, Container, Shield, Lock, GitBranch, Home as HomeIcon, Terminal } from "lucide-react";
import { BlurReveal, ScrollParallaxHero, AppleStaggerContainer, AppleStaggerItem, HeroWordReveal, MagneticButton } from "@/components/ui/AppleAnimations";
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

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-10">
      {/* Hero Section */}
      <ScrollParallaxHero>
        <section id="home" className="flex flex-col items-center text-center max-w-4xl mx-auto mt-10 scroll-mt-24">
          <BlurReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-900/50 text-cyan-400 text-[10px] font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Self-hosted Project Hub · Cybersecurity · Application Support
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <HeroWordReveal text="Secure. Reliable." className="text-white" delay={0.15} />{" "}
              <HeroWordReveal text="Supportable." className="animated-gradient-text" delay={0.45} />
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
              A curated hub of Shlok Shah&apos;s projects, live applications, technical reports, and deployment experiments — shaped by cybersecurity awareness, banking application support experience, IT/security architecture exposure, software testing, troubleshooting, and DevOps automation.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.25} className="flex flex-wrap justify-center gap-2 mb-10 max-w-3xl">
            {['Banking App Support', 'Cybersecurity', 'IT Architecture', 'Software Testing', 'Tailscale Funnel', 'Docker', 'Jenkins', 'IBM MQ', 'Oracle DB'].map(tag => (
              <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-gray-300 shadow-sm flex items-center gap-1.5 cursor-default">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                {tag}
              </span>
            ))}
          </BlurReveal>

          <BlurReveal delay={0.3} className="w-full max-w-md mx-auto mb-10 text-left">
            <TerminalStatus />
          </BlurReveal>

          <BlurReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton>
                <a href="#projects" className="btn-gradient block px-6 py-3 rounded-xl font-semibold text-center">
                  Explore Projects
                </a>
              </MagneticButton>
              <MagneticButton>
                <Link href="/home" className="block px-6 py-3 rounded-xl bg-white/5 text-white font-medium hover:bg-white/10 transition-colors border border-white/10 text-center">
                  Meet the Developer
                </Link>
              </MagneticButton>
            </div>
          </BlurReveal>
        </section>
      </ScrollParallaxHero>

      {/* What I Do Section */}
      <section>
        <BlurReveal className="mb-8 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-2 text-white">What I Do</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-cyan-500 via-violet-500 to-transparent" />
        </BlurReveal>
        <RoleShowcase />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24">
        <BlurReveal className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Featured Applications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              delay={i * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Real Challenges. Practical Solutions. Section */}
      <section className="scroll-mt-24 relative z-10">
        <BlurReveal className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Real Challenges. Practical Solutions.</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </BlurReveal>

        <AppleStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => {
            const accent = i % 2 === 0 ? "cyan" : "indigo";
            return (
              <AppleStaggerItem
                key={project.slug}
                className={`premium-glass p-6 rounded-2xl flex flex-col h-full hover:bg-white/5 transition-all group border-t-2 ${accent === "cyan" ? "border-t-cyan-500/20" : "border-t-indigo-500/20"}`}
              >
                <h3 className={`text-xl font-bold text-white mb-4 transition-colors ${accent === "cyan" ? "group-hover:text-cyan-400" : "group-hover:text-indigo-400"}`}>
                  {project.title}
                </h3>
                <div className="flex flex-col gap-3 flex-1 mb-6">
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-violet-400 tracking-wider">Biggest Challenge</span>
                    <p className="text-gray-300 text-sm mt-1">{project.caseStudy.challengeSummary}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase text-emerald-400 tracking-wider">Solution Delivered</span>
                    <p className="text-gray-300 text-sm mt-1">{project.caseStudy.solutionSummary}</p>
                  </div>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className={`flex items-center justify-between w-full px-4 py-2 mt-auto rounded-xl border transition-colors text-sm font-medium ${accent === "cyan" ? "bg-cyan-950/20 text-cyan-400 border-cyan-900/30 hover:bg-cyan-900/40" : "bg-indigo-950/20 text-indigo-400 border-indigo-900/30 hover:bg-indigo-900/40"}`}
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </AppleStaggerItem>
            );
          })}
        </AppleStaggerContainer>
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="flex flex-col items-center relative z-10 scroll-mt-24">
        <BlurReveal className="mb-6 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Infrastructure</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <p className="text-gray-400 max-w-2xl mt-4 leading-relaxed">
            This portfolio and every application above run on my own home server — self-hosted, containerized, and routed through a reverse proxy with automated HTTPS.
          </p>
        </BlurReveal>

        <BlurReveal delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {infraTraits.map((trait) => (
            <span key={trait.label} className="flex items-center gap-2 px-4 py-2 rounded-full premium-glass border-white/10 text-sm text-gray-300">
              <trait.icon className="w-4 h-4 text-cyan-400" />
              {trait.label}
            </span>
          ))}
        </BlurReveal>

        <ArchitectureFlow />
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center text-center py-10 mt-10 relative z-10">
        <h2 className="text-2xl font-semibold mb-6 text-white">Want to know more about the developer?</h2>
        <MagneticButton>
          <Link href="/home" className="btn-gradient flex items-center gap-2 px-8 py-4 rounded-xl font-semibold">
            <span>Open Portfolio</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </MagneticButton>
      </section>
    </div>
  );
}
