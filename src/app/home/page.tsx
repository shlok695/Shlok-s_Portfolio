import { GlowCard } from "@/components/ui/GlowCard";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { BlurReveal, ScrollParallaxHero } from "@/components/ui/AppleAnimations";
import { ArchitectureFlow } from "@/components/ui/ArchitectureFlow";
import Link from "next/link";
import { Download, Mail, Brain, Code, Shield, Cpu, Database, Server, Cog, UserCircle, Share2, Briefcase, GraduationCap, Calendar } from "lucide-react";

export default function Portfolio() {
  const skills = [
    { name: "Full-Stack Development", icon: Code },
    { name: "Cybersecurity", icon: Shield },
    { name: "DevOps", icon: Cog },
    { name: "Docker", icon: Server },
    { name: "Jenkins", icon: Cog },
    { name: "Tailscale Funnel", icon: Server },
    { name: "AI Tools", icon: Brain },
    { name: "GitHub Automation", icon: Share2 },
    { name: "Database Management", icon: Database },
    { name: "Cloud & Home Server Deployment", icon: Cpu }
  ];

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
      caseStudyLink: "#",
      reportLink: "/report",
      delay: 0.4
    },
    {
      title: "IPL Dashboard",
      description: "Interactive dashboard for exploring Indian Premier League cricket statistics, match data, and team performance.",
      tags: ["Data Visualization", "Sports", "React", "Analytics"],
      liveLink: "https://svps.tail00dff0.ts.net/ipl",
      caseStudyLink: "#",
      reportLink: "/report",
      delay: 0.5
    }
  ];

  return (
    <div className="flex flex-col gap-24 py-10">
      {/* Hero Section */}
      <ScrollParallaxHero className="relative flex flex-col items-center justify-center min-h-[60vh] text-center max-w-3xl mx-auto z-10 pt-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
          Hi, I&apos;m Shlok Shah
        </h1>
        <h2 className="text-2xl md:text-3xl text-gradient mb-8 font-medium">
          Developer • Cybersecurity • DevOps • AI Projects
        </h2>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-3xl">
          I build secure, intelligent, and self-hosted applications using modern full-stack technologies, AI workflows, and DevOps pipelines.
        </p>
        <a href="/Shlok_Shah_Resume.pdf" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition-colors">
          <Download className="w-4 h-4" />
          <span>Download Resume</span>
        </a>
      </ScrollParallaxHero>

      {/* About Section */}
      <section>
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">About</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-orange-500 to-transparent" />
        </BlurReveal>
        <GlowCard className="p-8 border-white/10 bg-white/5">
          <p className="text-lg leading-relaxed text-gray-300">
            I&apos;m Shlok Shah, a cybersecurity and application support-focused technology professional with strong knowledge of development, DevOps, and software testing.
          </p>
        </GlowCard>
      </section>

      {/* Experience Section */}
      <section>
        <BlurReveal className="mb-10 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Experience</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-transparent" />
        </BlurReveal>
        <div className="flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
          
          <GlowCard delay={0.1} className="relative p-8 border-white/10 bg-white/5 md:w-[calc(50%-2rem)] md:ml-auto">
            <div className="absolute left-0 md:-left-10 top-10 w-4 h-4 rounded-full bg-orange-500 border-4 border-black -translate-x-1/2 z-10" />
            <div className="md:ml-10">
              <div className="flex items-center gap-2 text-orange-400 text-sm font-medium">
                <Briefcase className="w-4 h-4" />
                <span>NapYork</span>
              </div>
              <h3 className="text-2xl font-bold text-white">IT Architecture Intern</h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                <span>Oct 2025 – Feb 2026</span>
              </div>
            </div>
            <ul className="text-gray-300 text-sm leading-relaxed list-disc list-outside ml-4 space-y-2">
              <li>Designed and supported secure IT and network architecture for smart facilities, including UniFi-based Intrusion Prevention Systems (IPS) and ONVIF surveillance.</li>
              <li>Implemented multi-factor physical access control systems (password, Bluetooth, RFID, facial recognition) showcased at CES 2026.</li>
              <li>Migrated legacy Video Management Systems to Reolink using ONVIF, enabling autonomous multi-site operations.</li>
            </ul>
          </GlowCard>

          <GlowCard delay={0.2} className="relative p-8 border-white/10 bg-white/5 md:w-[calc(50%-2rem)] md:mr-auto">
            <div className="absolute left-0 md:-right-10 top-10 w-4 h-4 rounded-full bg-rose-500 border-4 border-black -translate-x-1/2 md:translate-x-1/2 z-10" />
            <div className="md:mr-10 md:text-right">
              <div className="flex items-center gap-2 text-rose-400 text-sm font-medium md:justify-end">
                <Briefcase className="w-4 h-4" />
                <span>Tata Consultancy Services (TCS)</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Support Team Lead</h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm md:justify-end">
                <Calendar className="w-4 h-4" />
                <span>Jul 2022 – Jul 2024</span>
              </div>
            </div>
            <ul className="text-gray-300 text-sm leading-relaxed list-disc list-outside ml-4 space-y-2">
              <li>Provided L1/L2 production and application support for high-availability NEFT and RTGS banking platforms for BNP Paribas, resolving 100+ incidents monthly.</li>
              <li>Managed IAM and security operations using MyIAM, CyberArk, SIEM, and MFA; maintained a zero-security-incident record.</li>
              <li>Promoted to Support Team Lead (Jan 2024), managing team resources and coordinating 15+ secure deployment cycles with zero failed rollouts.</li>
            </ul>
          </GlowCard>

          <GlowCard delay={0.3} className="relative p-8 border-white/10 bg-white/5 md:w-[calc(50%-2rem)] md:ml-auto">
            <div className="absolute left-0 md:-left-10 top-10 w-4 h-4 rounded-full bg-green-500 border-4 border-black -translate-x-1/2 z-10" />
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                <Briefcase className="w-4 h-4" />
                <span>Kraftpixel Ltd</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Product Development Intern</h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                <span>Dec 2020 – Mar 2021</span>
              </div>
            </div>
            <ul className="text-gray-300 text-sm leading-relaxed list-disc list-outside ml-4 space-y-2">
              <li>Spearheaded the design and prototyping of PCB circuits and electronic components for EV charger development.</li>
            </ul>
          </GlowCard>

        </div>
      </section>

      {/* Education Section */}
      <section>
        <BlurReveal className="mb-10 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Education</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-rose-500 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlowCard delay={0.1} className="p-8 border-white/10 bg-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Pace University</h3>
                <p className="text-gray-400 text-sm">New York, NY</p>
              </div>
            </div>
            <h4 className="text-lg font-medium text-gray-200 mb-2">MS in Computer Science (Cybersecurity)</h4>
            <p className="text-orange-400 font-semibold mb-4">GPA: 3.74 | Expected May 2026</p>
            <p className="text-sm text-gray-400 leading-relaxed">Coursework: Information Security Management, Computer Systems, Python Programming.</p>
          </GlowCard>

          <GlowCard delay={0.2} className="p-8 border-white/10 bg-white/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Vidyavardhini’s College of Engineering</h3>
                <p className="text-gray-400 text-sm">Mumbai, India</p>
              </div>
            </div>
            <h4 className="text-lg font-medium text-gray-200 mb-2">BTech in Electronics & Telecommunications</h4>
            <p className="text-rose-400 font-semibold mb-4">Graduated Jul 2022</p>
            <p className="text-sm text-gray-400 leading-relaxed">Concentration: Computer Networks and Communication.</p>
          </GlowCard>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-white">Certifications & Achievements</h3>
          <div className="flex flex-wrap gap-3">
            {['Splunk Core Certified User', 'AIG Shields Up Cybersecurity', 'Datacom Service Desk', 'HackerRank 3-Star Java', 'Python Basic Certificate', 'INSPIRE Certification'].map(cert => (
              <span key={cert} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors cursor-default">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Skills</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-rose-500 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <GlowCard key={skill.name} delay={i * 0.05} className="p-4 flex flex-col items-center justify-center text-center gap-3 border-white/10 bg-white/5 h-32">
              <skill.icon className="w-8 h-8 text-white/70" />
              <span className="text-sm font-medium text-gray-200">{skill.name}</span>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* AI Enhanced Engineering Section */}
      <section>
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">AI-Enhanced Engineering</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-orange-500 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I use AI not just as a feature, but as a development accelerator — for documentation, security analysis, code understanding, automation, and smarter user experiences.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Code Understanding', 'Security Analysis', 'Documentation Automation', 'Developer Productivity'].map((item, i) => (
                <GlowCard key={item} delay={i * 0.1} className="p-4 border-white/10 bg-white/5">
                  <span className="text-sm font-medium text-white">{item}</span>
                </GlowCard>
              ))}
            </div>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px] flex items-center justify-center">
            {/* AI Brain Graphic Placeholder */}
            <div className="absolute w-48 h-48 rounded-full bg-orange-500/20 blur-3xl animate-pulse-glow" />
            <Brain className="w-32 h-32 text-white/80 z-10 animate-scanline" />
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full z-0 opacity-20" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 50 Q 150 150 250 50" stroke="white" strokeWidth="2" fill="none" />
              <path d="M 50 250 Q 150 150 250 250" stroke="white" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section>
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Featured Work</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-green-500 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Home Server Architecture Section */}
      <section>
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Home Server Architecture</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-orange-500 to-transparent" />
        </BlurReveal>
        <GlowCard className="p-8 border-white/10 bg-white/5 mb-8">
          <p className="text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            This portfolio and related applications are deployed through a self-hosted server environment using Docker, Jenkins, HTTPS, and Tailscale Funnel path-based routing.
          </p>
        </GlowCard>
        <ArchitectureFlow />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 pb-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Get In Touch</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-white to-transparent" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="mailto:shlokshah862@gmail.com" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Mail className="w-5 h-5 text-gray-300" />
            <span className="text-sm font-medium">Email Me</span>
          </a>
          <a href="https://www.linkedin.com/in/shlokshah56/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <UserCircle className="w-5 h-5 text-gray-300" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a href="https://github.com/shlok695" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <Share2 className="w-5 h-5 text-gray-300" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>
      </section>
    </div>
  );
}
