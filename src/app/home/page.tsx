import { GlowCard } from "@/components/ui/GlowCard";
import { BlurReveal, ScrollParallaxHero, HeroWordReveal, MagneticButton } from "@/components/ui/AppleAnimations";
import Link from "next/link";
import { Download, Mail, Code, Layers, Shield, Server, Database, Cloud, Cog, UserCircle, Share2, Briefcase, GraduationCap, Calendar, CheckCircle2, BadgeCheck, ArrowRight, LayoutGrid, Network } from "lucide-react";

export default function Portfolio() {
  const skillsCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C"]
    },
    {
      title: "Frontend",
      icon: Layers,
      skills: ["React", "Next.js", "HTML", "CSS", "Tailwind"]
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "REST APIs"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "MySQL"]
    },
    {
      title: "Cloud",
      icon: Cloud,
      skills: ["AWS", "Docker", "Terraform", "GitHub Actions", "Jenkins", "Linux"]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: ["Network Security", "IAM", "Secure Development", "Basic Penetration Testing", "Security+"]
    }
  ];

  const certifications = [
    "Splunk Core Certified User",
    "AIG Shields Up Cybersecurity",
    "Datacom Service Desk",
    "HackerRank 3-Star Java",
    "Python Basic Certificate",
    "INSPIRE Certification"
  ];

  return (
    <div className="flex flex-col gap-24 py-10">
      {/* Hero Section */}
      <ScrollParallaxHero className="relative flex flex-col items-center justify-center min-h-[60vh] text-center max-w-4xl mx-auto z-10 pt-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
          <HeroWordReveal text="Hi, I'm Shlok Shah" delay={0.1} />
        </h1>
        <h2 className="text-2xl md:text-3xl animated-gradient-text mb-8 font-medium leading-relaxed max-w-2xl">
          Cybersecurity • Application Support • IT Architecture • Software Testing • DevOps
        </h2>
        <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-3xl">
          I build, support, test, and troubleshoot secure, reliable, and user-friendly systems. My experience spans banking application support, IT/security architecture, smart facility systems, deployment support, infrastructure troubleshooting, and full-stack project knowledge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <MagneticButton>
            <a href="/Shlok_Shah_Resume.pdf" className="flex items-center gap-2 px-6 py-3 rounded-full premium-glass hover:bg-white/10 transition-colors text-white font-medium">
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="#contact" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white font-medium">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </a>
          </MagneticButton>
        </div>
      </ScrollParallaxHero>

      {/* About Section */}
      <section id="about" className="scroll-mt-24">
        <BlurReveal className="mb-8 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-2 text-white">About</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </BlurReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 max-w-5xl mx-auto">
          {[{title:"Security Mindset", i:Shield}, {title:"Application Support", i:Cog}, {title:"Testing Focus", i:CheckCircle2}, {title:"Reliable Deployment", i:Server}].map((c, idx) => (
            <GlowCard key={c.title} delay={idx * 0.1} className="p-4 premium-glass border-white/5 flex flex-col items-center text-center">
              <c.i className="w-6 h-6 text-cyan-400 mb-2" />
              <span className="text-sm font-semibold text-gray-200">{c.title}</span>
            </GlowCard>
          ))}
        </div>

        <GlowCard className="p-8 premium-glass border-white/10 space-y-6 max-w-5xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-300">
            I’m Shlok Shah, a cybersecurity and application support-focused technology professional with experience across banking systems, IT/security architecture, smart facility infrastructure, software testing, deployment support, and troubleshooting.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            I previously worked at Tata Consultancy Services supporting real-time banking applications for BNP Paribas, including NEFT and RTGS systems. My responsibilities included monitoring, testing, deployment, application upgrades, IBM MQ configuration, Oracle database support, server management, and client-facing coordination. I also helped deliver major upgrades, server migration activities, and brought a dormant client project back to live production after more than two years.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            At Nap York, I worked as an IT Architecture Intern supporting secure and scalable smart facility infrastructure. My work included frontend debugging on Shopify, surveillance and access control troubleshooting, UniFi-based intrusion prevention, Reolink surveillance migration, ONVIF protocol research, RFID/mobile/facial-recognition access workflows, and IT setup for a new smart facility location.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            My projects, including RepoPilot, CampusKart, AeroLogistics, and IPL, reflect my interest in secure applications, application support, software testing, AI-assisted workflows, troubleshooting, and real-world deployment.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            I bring a mix of cybersecurity awareness, application support experience, testing mindset, IT infrastructure exposure, development knowledge, and leadership ability to every technical challenge.
          </p>
        </GlowCard>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-24">
        <BlurReveal className="mb-10 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Experience</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-transparent" />
        </BlurReveal>
        <div className="flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-500/20 before:to-transparent">

          <GlowCard delay={0.1} className="relative p-8 border-cyan-500/10 premium-glass md:w-[calc(50%-2rem)] md:ml-auto">
            <div className="absolute left-0 md:-left-10 top-10 w-4 h-4 rounded-full bg-cyan-400 border-4 border-background -translate-x-1/2 z-10" />
            <div className="md:ml-10">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                <Briefcase className="w-4 h-4" />
                <span>Nap York</span>
              </div>
              <h3 className="text-2xl font-bold text-white">IT Architecture Intern</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>October 2025 – February 2026</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span>New York City Metropolitan Area</span>
              </div>
            </div>
            <p className="mt-4 text-gray-300 leading-relaxed font-medium italic">
              “Contributed to secure, scalable IT and security architecture across smart facility locations while supporting operations, engineering, surveillance, access control, and customer-facing systems.”
            </p>
            <ul className="text-gray-300 text-sm leading-relaxed list-disc list-outside ml-4 mt-4 space-y-2">
              <li>Supported IT and security architecture across smart facility locations.</li>
              <li>Debugged and maintained customer-facing Shopify frontend issues during frequent website updates.</li>
              <li>Researched, implemented, and configured intrusion prevention and access control systems for smart sleeping pods showcased at CES 2026.</li>
              <li>Worked with authentication workflows including password-based access, Bluetooth/mobile unlock, RFID, and facial recognition.</li>
              <li>Assisted in UniFi-based Intrusion Prevention System setup integrated with ONVIF-compatible systems.</li>
              <li>Supported surveillance uptime, access control troubleshooting, and smart lock-related issues.</li>
              <li>Helped migrate surveillance infrastructure from a legacy VMS to Reolink systems using ONVIF protocol research.</li>
              <li>Supported IT setup for a new location including enterprise Wi-Fi, surveillance, smart locks, virtual front desk, and sound systems.</li>
            </ul>
          </GlowCard>

          <GlowCard delay={0.2} className="relative p-8 border-indigo-500/10 premium-glass md:w-[calc(50%-2rem)] md:mr-auto">
            <div className="absolute left-0 md:-right-10 top-10 w-4 h-4 rounded-full bg-indigo-400 border-4 border-background -translate-x-1/2 md:translate-x-1/2 z-10" />
            <div className="md:mr-10 md:text-right">
              <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium md:justify-end">
                <Briefcase className="w-4 h-4" />
                <span>Tata Consultancy Services</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Technical Support Engineer / Support Team Lead</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm md:justify-end">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>July 2022 – August 2024</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span>Mumbai, India</span>
              </div>
            </div>
            <p className="mt-4 text-gray-300 leading-relaxed font-medium italic md:text-right">
              “Supported real-time banking applications for an international banking client, focusing on application monitoring, testing, deployment, upgrades, server management, IBM MQ, Oracle databases, and client coordination.”
            </p>
            <ul className="text-gray-300 text-sm leading-relaxed list-disc list-outside ml-4 mt-4 space-y-2 md:text-left">
              <li>Worked on NEFT and RTGS banking application systems.</li>
              <li>Supported monitoring, testing, deployment, and application upgrades based on regulatory and client needs.</li>
              <li>Worked with IBM MQ and Oracle database systems.</li>
              <li>Helped deploy two major upgrades for NEFT and RTGS applications.</li>
              <li>Supported multiple successful server migration activities.</li>
              <li>Brought a dormant client project back to live production after more than two years.</li>
              <li>Worked in a client-facing environment requiring communication, ownership, and incident handling.</li>
              <li>Promoted to Support Team Lead due to strong client feedback and work ethic.</li>
              <li>Managed team coordination, resources, and delivery responsibilities.</li>
            </ul>
          </GlowCard>

          <GlowCard delay={0.3} className="relative p-8 border-emerald-500/10 premium-glass md:w-[calc(50%-2rem)] md:ml-auto">
            <div className="absolute left-0 md:-left-10 top-10 w-4 h-4 rounded-full bg-emerald-400 border-4 border-background -translate-x-1/2 z-10" />
            <div className="md:ml-10">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium">
                <Briefcase className="w-4 h-4" />
                <span>Kraftpixel</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Advanced Product Development Intern</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>December 2020 – March 2021</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span>Mumbai, India</span>
              </div>
            </div>
            <p className="mt-4 text-gray-300 leading-relaxed font-medium italic">
              “Worked on electronics prototyping and EV charger prototype development, combining hardware understanding with product development.”
            </p>
            <ul className="text-gray-300 text-sm leading-relaxed list-disc list-outside ml-4 mt-4 space-y-2">
              <li>Built PCB and circuit prototypes based on project requirements.</li>
              <li>Helped design EV charger prototype circuits.</li>
              <li>Spearheaded circuit design work for a new product development initiative.</li>
            </ul>
          </GlowCard>

        </div>
      </section>

      {/* Professional Strengths Section */}
      <section>
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Professional Strengths</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-cyan-500 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlowCard delay={0.1} className="p-6 premium-glass border-white/5 border-t-cyan-500/20 border-t-2">
            <h3 className="text-xl font-bold text-white mb-3">Application Support Mindset</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Experience supporting real-time banking applications, monitoring systems, coordinating with clients, handling upgrades, and troubleshooting production issues.
            </p>
          </GlowCard>
          <GlowCard delay={0.2} className="p-6 premium-glass border-white/5 border-t-indigo-500/20 border-t-2">
            <h3 className="text-xl font-bold text-white mb-3">Cybersecurity & Security Systems</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Hands-on exposure to intrusion prevention, access control systems, surveillance infrastructure, ONVIF workflows, UniFi, Reolink, RFID, mobile unlock, and facial recognition systems.
            </p>
          </GlowCard>
          <GlowCard delay={0.3} className="p-6 premium-glass border-white/5 border-t-emerald-500/20 border-t-2">
            <h3 className="text-xl font-bold text-white mb-3">Testing & Reliability</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Strong focus on validating application behavior, testing upgrades, checking user flows, troubleshooting edge cases, and ensuring reliable system performance.
            </p>
          </GlowCard>
          <GlowCard delay={0.4} className="p-6 premium-glass border-white/5 border-t-cyan-500/20 border-t-2">
            <h3 className="text-xl font-bold text-white mb-3">Leadership & Client Communication</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Promoted to Support Team Lead after strong client feedback, with experience in team coordination, resource management, and professional client-facing communication.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-24">
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Skills</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-indigo-500 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsCategories.map((category, i) => (
            <GlowCard key={category.title} delay={i * 0.05} className="p-6 premium-glass border-white/5">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <category.icon className="w-5 h-5 text-cyan-400" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 rounded-lg bg-cyan-950/20 border border-cyan-900/30 text-sm text-cyan-100 hover:bg-cyan-900/40 hover:border-cyan-500/30 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <BlurReveal className="mb-10 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Education</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlowCard delay={0.1} className="p-8 premium-glass border-white/5 border-t-cyan-500/20 border-t-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Pace University</h3>
                <p className="text-gray-400 text-sm">New York, NY</p>
              </div>
            </div>
            <h4 className="text-lg font-medium text-gray-200 mb-2">MS in Computer Science (Cybersecurity)</h4>
            <p className="text-cyan-400 font-semibold mb-4">GPA: 3.74 | Expected May 2026</p>
            <p className="text-sm text-gray-400 leading-relaxed">Coursework: Information Security Management, Computer Systems, Python Programming.</p>
          </GlowCard>

          <GlowCard delay={0.2} className="p-8 premium-glass border-white/5 border-t-indigo-500/20 border-t-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Vidyavardhini’s College of Engineering</h3>
                <p className="text-gray-400 text-sm">Mumbai, India</p>
              </div>
            </div>
            <h4 className="text-lg font-medium text-gray-200 mb-2">BTech in Electronics & Telecommunications</h4>
            <p className="text-indigo-400 font-semibold mb-4">Graduated Jul 2022</p>
            <p className="text-sm text-gray-400 leading-relaxed">Concentration: Computer Networks and Communication.</p>
          </GlowCard>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="scroll-mt-24">
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Certifications & Achievements</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-indigo-500 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <GlowCard key={cert} delay={i * 0.08} className="p-6 premium-glass border-white/5 border-t-indigo-500/20 border-t-2">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">
                  <BadgeCheck className="w-6 h-6" />
                </div>
                <span className="font-medium text-gray-200">{cert}</span>
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* Where My Experience Connects Section */}
      <section>
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Where My Experience Connects</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-cyan-500 to-transparent" />
        </BlurReveal>

        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-4xl">
          My professional background connects production support, security systems, testing, infrastructure troubleshooting, and project execution. This helps me approach projects not only from a development perspective, but also from the perspective of reliability, supportability, security, and real-world operations.
        </p>

        <GlowCard className="p-8 premium-glass border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center overflow-x-auto text-sm">
            <div className="px-4 py-3 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 whitespace-nowrap">Banking Application Support</div>
            <span className="text-gray-500 hidden md:inline">→</span>
            <span className="text-gray-500 md:hidden">↓</span>
            <div className="px-4 py-3 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-indigo-400 whitespace-nowrap">Testing & Deployment</div>
            <span className="text-gray-500 hidden md:inline">→</span>
            <span className="text-gray-500 md:hidden">↓</span>
            <div className="px-4 py-3 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 whitespace-nowrap">Cybersecurity Awareness</div>
            <span className="text-gray-500 hidden md:inline">→</span>
            <span className="text-gray-500 md:hidden">↓</span>
            <div className="px-4 py-3 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 whitespace-nowrap">IT Architecture</div>
            <span className="text-gray-500 hidden md:inline">→</span>
            <span className="text-gray-500 md:hidden">↓</span>
            <div className="px-4 py-3 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 whitespace-nowrap">Self-hosted Projects</div>
            <span className="text-gray-500 hidden md:inline">→</span>
            <span className="text-gray-500 md:hidden">↓</span>
            <div className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white font-bold whitespace-nowrap">Reliable Applications</div>
          </div>
        </GlowCard>
      </section>

      {/* Explore the Ecosystem Section */}
      <section>
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Explore the Ecosystem</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-cyan-500 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/#projects" className="group">
            <GlowCard className="p-6 premium-glass border-white/5 h-full">
              <div className="flex items-center justify-between h-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <LayoutGrid className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Live Projects</h3>
                    <p className="text-sm text-gray-400">IPL, RepoPilot, AeroLogistics & CampusKart</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:translate-x-1 group-hover:text-cyan-400 transition-all" />
              </div>
            </GlowCard>
          </Link>
          <Link href="/#infrastructure" className="group">
            <GlowCard className="p-6 premium-glass border-white/5 h-full">
              <div className="flex items-center justify-between h-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Network className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Self-hosted Infrastructure</h3>
                    <p className="text-sm text-gray-400">Docker, Jenkins, HTTPS & Tailscale Funnel routing</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:translate-x-1 group-hover:text-indigo-400 transition-all" />
              </div>
            </GlowCard>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 pb-10">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Get In Touch</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-white to-transparent" />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <MagneticButton>
            <a href="mailto:shlokshah862@gmail.com" className="flex items-center gap-3 px-6 py-4 rounded-xl premium-glass border-white/10 hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5 text-gray-300" />
              <span className="text-sm font-medium">Email Me</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://www.linkedin.com/in/shlokshah56/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-xl premium-glass border-white/10 hover:bg-white/10 transition-colors">
              <UserCircle className="w-5 h-5 text-gray-300" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://github.com/shlok695" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-xl premium-glass border-white/10 hover:bg-white/10 transition-colors">
              <Share2 className="w-5 h-5 text-gray-300" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
