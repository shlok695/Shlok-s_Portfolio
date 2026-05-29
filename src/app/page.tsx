import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArchitectureFlow } from "@/components/ui/ArchitectureFlow";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlurReveal, ScrollParallaxHero, AppleStaggerContainer, AppleStaggerItem } from "@/components/ui/AppleAnimations";

export default function Home() {
  const projects = [
    {
      title: "RepoPilot",
      description: "AI-powered repository scanner that accepts GitHub repositories or ZIP uploads, analyzes code, detects vulnerabilities, generates documentation, and creates developer-friendly reports.",
      tags: ["AI", "GitHub API", "Security", "Documentation", "Full Stack"],
      liveLink: "https://svps.tail00dff0.ts.net/repopilot",
      caseStudyLink: "/projects/repopilot",
      reportLink: "/report",
      delay: 0.1
    },
    {
      title: "CampusKart",
      description: "Student-focused e-commerce platform built for Pace University students to buy, sell, and exchange essential items easily.",
      tags: ["React", "Node.js", "Database", "Student Marketplace", "Full Stack"],
      liveLink: "https://svps.tail00dff0.ts.net/campuskart",
      caseStudyLink: "/projects/campuskart",
      reportLink: "/report",
      delay: 0.2
    },
    {
      title: "Home Server + DevOps Pipeline",
      description: "Self-hosted deployment setup using Docker, Jenkins, Tailscale Funnel, HTTPS, and path-based routing for multiple applications.",
      tags: ["Docker", "Jenkins", "Tailscale", "HTTPS", "DevOps", "Linux"],
      caseStudyLink: "/projects/homeserver",
      reportLink: "/report",
      delay: 0.3
    },
    {
      title: "Aerologistics",
      description: "Comprehensive logistics management system for tracking shipments and managing flight cargo operations efficiently.",
      tags: ["Logistics", "Full Stack", "Dashboard", "Real-time"],
      liveLink: "https://svps.tail00dff0.ts.net/aerologistics",
      caseStudyLink: "/projects/aerologistics",
      reportLink: "/report",
      delay: 0.4
    },
    {
      title: "IPL Dashboard",
      description: "Interactive dashboard for exploring Indian Premier League cricket statistics, match data, and team performance.",
      tags: ["Data Visualization", "Sports", "React", "Analytics"],
      liveLink: "https://svps.tail00dff0.ts.net/ipl",
      caseStudyLink: "/projects/ipl",
      reportLink: "/report",
      delay: 0.5
    }
  ];

  return (
    <div className="flex flex-col gap-24 py-10">
      {/* Hero Section */}
      <ScrollParallaxHero>
        <section className="flex flex-col items-center text-center max-w-4xl mx-auto mt-10">
          <BlurReveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient">Secure. Intelligent.</span>
            <br />
            <span className="text-white">Self-hosted.</span>
            </h1>
          </BlurReveal>
          <BlurReveal delay={0.2}>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl">
              A curated hub of Shlok Shah&apos;s projects, live applications, technical reports, and deployment experiments — powered by AI workflows, cybersecurity principles, and DevOps automation.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors text-center">
                Explore Projects
              </a>
              <Link href="/home" className="px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/10 text-center">
                Meet the Developer
              </Link>
            </div>
          </BlurReveal>
        </section>
      </ScrollParallaxHero>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24">
        <BlurReveal className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Featured Applications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Real Challenges. Practical Solutions. Section */}
      <section className="scroll-mt-24">
        <BlurReveal className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Real Challenges. Practical Solutions.</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </BlurReveal>
        
        <AppleStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* IPL */}
          <AppleStaggerItem className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col h-full hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4">IPL Dashboard</h3>
            <div className="flex flex-col gap-3 flex-1 mb-6">
              <div>
                <span className="text-xs font-semibold uppercase text-red-400 tracking-wider">Biggest Challenge</span>
                <p className="text-gray-300 text-sm mt-1">Organizing IPL-related information in a way that is easy to explore.</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-green-400 tracking-wider">Solution Delivered</span>
                <p className="text-gray-300 text-sm mt-1">Built an interactive cricket-focused project around IPL data and insights.</p>
              </div>
            </div>
            <Link href="/projects/ipl" className="flex items-center justify-between w-full px-4 py-2 mt-auto rounded-lg bg-orange-600/20 text-orange-400 border border-orange-500/30 hover:bg-orange-600/40 transition-colors text-sm font-medium">
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AppleStaggerItem>

          {/* AeroLogistics */}
          <AppleStaggerItem className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col h-full hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4">AeroLogistics</h3>
            <div className="flex flex-col gap-3 flex-1 mb-6">
              <div>
                <span className="text-xs font-semibold uppercase text-red-400 tracking-wider">Biggest Challenge</span>
                <p className="text-gray-300 text-sm mt-1">Understanding logistics-style workflows and converting them into a clear application flow.</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-green-400 tracking-wider">Solution Delivered</span>
                <p className="text-gray-300 text-sm mt-1">Created a workflow-focused application experience for logistics and operational use cases.</p>
              </div>
            </div>
            <Link href="/projects/aerologistics" className="flex items-center justify-between w-full px-4 py-2 mt-auto rounded-lg bg-orange-600/20 text-orange-400 border border-orange-500/30 hover:bg-orange-600/40 transition-colors text-sm font-medium">
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AppleStaggerItem>

          {/* CampusKart */}
          <AppleStaggerItem className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col h-full hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4">CampusKart</h3>
            <div className="flex flex-col gap-3 flex-1 mb-6">
              <div>
                <span className="text-xs font-semibold uppercase text-red-400 tracking-wider">Biggest Challenge</span>
                <p className="text-gray-300 text-sm mt-1">Designing the platform around real student needs instead of building a generic marketplace.</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-green-400 tracking-wider">Solution Delivered</span>
                <p className="text-gray-300 text-sm mt-1">Built a student-focused marketplace tailored for Pace University students.</p>
              </div>
            </div>
            <Link href="/projects/campuskart" className="flex items-center justify-between w-full px-4 py-2 mt-auto rounded-lg bg-orange-600/20 text-orange-400 border border-orange-500/30 hover:bg-orange-600/40 transition-colors text-sm font-medium">
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AppleStaggerItem>

          {/* RepoPilot */}
          <AppleStaggerItem className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col h-full hover:bg-white/10 transition-colors">
            <h3 className="text-xl font-bold text-white mb-4">RepoPilot</h3>
            <div className="flex flex-col gap-3 flex-1 mb-6">
              <div>
                <span className="text-xs font-semibold uppercase text-red-400 tracking-wider">Biggest Challenge</span>
                <p className="text-gray-300 text-sm mt-1">Supporting both GitHub repository input and ZIP upload input.</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-green-400 tracking-wider">Solution Delivered</span>
                <p className="text-gray-300 text-sm mt-1">Built an AI-assisted repository analysis tool that helps users understand projects faster.</p>
              </div>
            </div>
            <Link href="/projects/repopilot" className="flex items-center justify-between w-full px-4 py-2 mt-auto rounded-lg bg-orange-600/20 text-orange-400 border border-orange-500/30 hover:bg-orange-600/40 transition-colors text-sm font-medium">
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AppleStaggerItem>
        </AppleStaggerContainer>
      </section>

      {/* Architecture Section */}
      <section className="flex flex-col items-center">
        <BlurReveal className="mb-10 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Self-hosted Architecture</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </BlurReveal>
        <ArchitectureFlow />
      </section>

      {/* CTA Section */}
      <section className="flex flex-col items-center text-center py-10 mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-white">Want to know more about the developer?</h2>
        <Link href="/home" className="flex items-center gap-2 px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-medium transition-colors shadow-[0_0_20px_rgba(234,88,12,0.4)]">
          <span>Open Portfolio</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}
