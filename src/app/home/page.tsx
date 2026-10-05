"use client";

import { GlowCard } from "@/components/ui/GlowCard";
import { BlurReveal, ScrollParallaxHero, HeroWordReveal, MagneticButton } from "@/components/ui/AppleAnimations";
import Link from "next/link";
import { Download, Mail, Code, Layers, Shield, Cloud, Cog, UserCircle, Share2, Briefcase, GraduationCap, Calendar, BadgeCheck, ArrowRight, LayoutGrid, Network, Container, GitBranch, Cpu, Activity } from "lucide-react";

export default function Portfolio() {
  const skillsCategories = [
    {
      title: "DevOps & SRE Practices",
      icon: Cog,
      skills: ["Site Reliability Engineering", "DevSecOps", "Platform Engineering", "GitOps", "Infrastructure as Code", "CI/CD", "Canary Deployments", "SLOs / Error Budgets", "Incident Response", "Multi-Region DR", "FinOps", "Compliance as Code"]
    },
    {
      title: "AWS Cloud",
      icon: Cloud,
      skills: ["Amazon EKS", "Amazon VPC", "AWS IAM", "Route 53", "Aurora Global Database", "Amazon SageMaker", "Amazon Bedrock", "AWS PrivateLink", "AWS Config", "AWS Security Hub", "Amazon SQS/SNS"]
    },
    {
      title: "Infrastructure as Code",
      icon: Layers,
      skills: ["Terraform", "Open Policy Agent (OPA)", "Helmfile"]
    },
    {
      title: "Containers & Orchestration",
      icon: Container,
      skills: ["Docker", "Kubernetes", "Helm", "Argo CD", "Argo Rollouts", "Istio", "Service Mesh (mTLS)", "Karpenter", "KEDA", "Kyverno", "Traefik"]
    },
    {
      title: "CI/CD",
      icon: GitBranch,
      skills: ["GitHub Actions", "Jenkins", "Argo CD", "DevSpace"]
    },
    {
      title: "MLOps & AI Infrastructure",
      icon: Cpu,
      skills: ["MLflow", "KServe", "vLLM", "NVIDIA DCGM", "GPU Workloads on EKS", "LLM Inference"]
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "Go", "Bash"]
    },
    {
      title: "Monitoring & Observability",
      icon: Activity,
      skills: ["Prometheus", "Grafana", "OpenTelemetry", "Datadog", "SLO Dashboards", "Incident Runbooks"]
    },
    {
      title: "Security & DevSecOps",
      icon: Shield,
      skills: ["Snyk", "Trivy", "HashiCorp Vault", "Sigstore Cosign", "SBOM", "SAST", "Dependency/Container Scanning", "RBAC", "Secrets Management", "Vulnerability Management", "SOX/FINRA/SEC Compliance"]
    },
    {
      title: "Developer Platforms",
      icon: LayoutGrid,
      skills: ["Backstage", "LocalStack", "Kafka", "Linux"]
    }
  ];

  const experiences = [
    {
      company: "Goldman Sachs",
      role: "DevOps Engineer (Platform)",
      dates: "October 2025 – Present",
      location: "NJ",
      intro: "I work on the platform team that engineering, quant and ML teams build on top of. My job is to make the paved road the easiest road: infrastructure that’s secure and compliant by default, deployments nobody has to think twice about, and enough visibility that when something breaks, we know why fast.",
      stories: [
        {
          title: "Making infrastructure consistent and compliant by default.",
          body: "Every team had its own way of standing up AWS environments, which made compliance reviews slow and painful. I built reusable Terraform modules covering 70+ VPC, IAM and EKS resources and put OPA policy checks in front of them, so engineering, quant and ML teams all start from the same secure baseline. Infrastructure compliance improved by 30%, and teams stopped reinventing the same setup."
        },
        {
          title: "Moving 40+ repos off Jenkins, without disrupting anyone.",
          body: "Our Jenkins pipelines were fragile and hard to maintain. I led the migration of 40+ repositories to GitHub Actions and introduced GitOps for 20+ Kubernetes services using Argo CD, Helm, Argo Rollouts and Istio. Builds got 25% faster, and deployments became predictable: what’s in Git is what’s running, and progressive rollouts mean a bad release gets caught before it reaches everyone."
        },
        {
          title: "Building security into the pipeline instead of bolting it on.",
          body: "Security findings used to show up late, after the code was already shipped. I wove Snyk, Trivy, SBOM generation, Sigstore Cosign signing, HashiCorp Vault, Kyverno, AWS Config and Security Hub directly into developer workflows, so scanning, signing and policy checks happen automatically. High-severity findings dropped by 30%, and developers get feedback while they’re still in context."
        },
        {
          title: "Helping on-call engineers sleep better.",
          body: "I improved observability across 15+ services with OpenTelemetry tracing, SLOs and error budgets, and strengthened our failover story with Route 53 and Amazon Aurora Global Database. Mean time to resolve improved by 20%, and recovery time went from 90 to 60 minutes. Just as important, the team now has shared, honest signals about when a service is actually healthy."
        },
        {
          title: "Giving ML teams a real home for LLM workloads.",
          body: "Data scientists needed GPU capacity and model serving without becoming Kubernetes experts. I set up MLOps and LLM inference on EKS with Karpenter and KEDA for autoscaling, NVIDIA DCGM for GPU visibility, and MLflow, vLLM and KServe for the model lifecycle. I also connected private Amazon Bedrock access through AWS PrivateLink and IAM. Inference response times improved by 15%, and sensitive data never has to leave our network."
        },
        {
          title: "Self-service for developers, and savings for the business.",
          body: "I launched an Internal Developer Platform on Backstage with golden-path templates, so a developer can spin up a new app or ML service in a few clicks, done the right way from day one. Alongside it I built Python-based FinOps tooling across 10+ clusters for rightsizing and cost visibility, which identified $120K in annualized savings."
        }
      ],
      tech: ["AWS (EKS, VPC, IAM, Route 53, Aurora Global DB, Bedrock, PrivateLink, Config, Security Hub)", "Terraform", "OPA", "GitHub Actions", "Argo CD", "Argo Rollouts", "Helm", "Istio", "Snyk", "Trivy", "Cosign", "Vault", "Kyverno", "OpenTelemetry", "Karpenter", "KEDA", "MLflow", "vLLM", "KServe", "Backstage", "Python"]
    },
    {
      company: "Razorpay",
      role: "DevOps Engineer",
      dates: "June 2021 – August 2024",
      location: "India",
      intro: "At Razorpay I focused on developer experience: making it fast, cheap and safe for 150+ engineers to build and test in environments that looked like production. A lot of my work started with sitting down with dev teams, watching where they got stuck, and building tooling to remove that friction.",
      stories: [
        {
          title: "Taking environment setup from two days to under 30 minutes.",
          body: "New engineers and new features both started the same way: days of wrestling with local setups. I sat with development teams to understand what they needed, then built Devstack on AWS EKS, a reusable Kubernetes environment provisioned through Terraform. Setup for 150+ engineers went from 2 days to under 30 minutes, so people could start shipping on day one."
        },
        {
          title: "One command to bring up everything a service depends on.",
          body: "Services depended on queues, Kafka topics and databases that were tedious to wire up by hand. I automated the whole dependency graph with Helmfile and Helm, using LocalStack to emulate SQS/SNS locally. Deployments became a single command, and applying FinOps practices to these sandboxes cut their infrastructure spend by about 36%."
        },
        {
          title: "A tighter inner loop for developers.",
          body: "Waiting on rebuilds kills focus. Using DevSpace, Docker, Linux, Go, Python and Bash, I built automated code sync and container refresh workflows, so a code change shows up in a running pod in under 5 seconds. Developers could iterate the way they do locally, but against realistic infrastructure."
        },
        {
          title: "Isolated preview environments that QA could trust.",
          body: "I configured Traefik ingress with OpenTelemetry context propagation to give each feature branch its own isolated preview environment, and secured service-to-service traffic with mTLS through a service mesh. QA could validate features independently without stepping on each other, and without compromising security."
        },
        {
          title: "Security that didn’t slow teams down.",
          body: "I integrated CI/CD and GitOps with Argo CD and embedded SAST, Trivy dependency and container scanning, secrets management and RBAC into the pipeline. Centralized IAM gave us clear visibility into vulnerabilities and configuration drift, without adding manual gates developers had to wait on."
        },
        {
          title: "Faster incident response, and less waste.",
          body: "I set up SRE observability with Prometheus, Grafana and Datadog, built health dashboards, and wrote incident response runbooks so whoever was on call knew exactly where to look. MTTR dropped by 40%. I also automated cleanup of forgotten environments with Kube Janitor, which cut idle dev environments by 61%."
        }
      ],
      tech: ["AWS EKS", "Kubernetes", "Terraform", "Helm", "Helmfile", "LocalStack", "Kafka", "DevSpace", "Docker", "Linux", "Go", "Python", "Bash", "Traefik", "OpenTelemetry", "Service Mesh (mTLS)", "Argo CD", "Trivy", "RBAC", "Prometheus", "Grafana", "Datadog", "Kube Janitor"]
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

  const connectsChain = [
    "Developer Experience",
    "Infrastructure as Code",
    "GitOps & CI/CD",
    "DevSecOps",
    "Observability & SRE",
    "Cloud & Platform Engineering",
  ];

  const atAGlance = [
    { label: "Now", value: "DevOps Engineer (Platform)", detail: "Goldman Sachs, NJ" },
    { label: "Before", value: "DevOps Engineer", detail: "Razorpay, India" },
    { label: "Experience", value: "4+ years", detail: "Financial services and payments" },
    { label: "Looking for", value: "Cloud and Platform Engineering roles", detail: null },
  ];

  const aboutFocus = [
    { title: "Cloud Infrastructure", i: Cloud },
    { title: "Platform Engineering", i: LayoutGrid },
    { title: "Secure by Default", i: Shield },
    { title: "Reliability & SRE", i: Activity },
  ];

  return (
    <div className="flex flex-col gap-28 py-6 md:py-10">
      {/* Hero: who I am on the left, the facts a recruiter scans for on the right */}
      <ScrollParallaxHero className="relative z-10">
        <section className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center pt-6 md:pt-12">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.02] mb-5 text-white">
              <HeroWordReveal text="Hi, I'm Shlok Shah" delay={0.1} />
            </h1>
            <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6 font-medium tracking-tight">
              Cloud &amp; Platform Engineer
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-[36rem]">
              I build the cloud platforms other engineers ship on: AWS infrastructure as code, Kubernetes, GitOps, and built-in security and observability.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <MagneticButton>
                <a href="#contact" className="btn-gradient flex items-center gap-2 px-6 py-3 rounded-xl font-semibold">
                  <Mail aria-hidden="true" className="w-4 h-4" />
                  <span>Contact Me</span>
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="/Shlok_Shah_Resume.pdf" className="btn-quiet flex items-center gap-2 px-6 py-3 rounded-xl font-medium">
                  <Download aria-hidden="true" className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume</span>
                </a>
              </MagneticButton>
            </div>
          </div>

          <BlurReveal delay={0.3} className="w-full">
            <dl className="rounded-2xl border border-border bg-card divide-y divide-white/10">
              {atAGlance.map((item) => (
                <div key={item.label} className="flex flex-col gap-1 px-6 py-5">
                  <dt className="text-xs font-medium text-gray-500">{item.label}</dt>
                  <dd className="text-base text-white font-semibold">{item.value}</dd>
                  {item.detail && <dd className="text-sm text-gray-400">{item.detail}</dd>}
                </div>
              ))}
            </dl>
          </BlurReveal>
        </section>
      </ScrollParallaxHero>

      {/* About */}
      <section id="about" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
        <BlurReveal className="flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">About</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-transparent mb-8" />
          <ul className="flex flex-col gap-4">
            {aboutFocus.map((c) => (
              <li key={c.title} className="flex items-center gap-3">
                <span className="w-9 h-9 shrink-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  <c.i aria-hidden="true" className="w-4 h-4 text-cyan-400" />
                </span>
                <span className="text-sm font-semibold text-gray-200">{c.title}</span>
              </li>
            ))}
          </ul>
        </BlurReveal>

        <BlurReveal delay={0.1} className="space-y-6 max-w-[68ch]">
          <p className="text-lg leading-relaxed text-gray-300">
            I’m Shlok Shah, a DevOps Engineer on the platform side, working toward Cloud and Platform Engineering. I like building the paved road: infrastructure, pipelines and tooling that make the secure, reliable way to ship also the easiest way.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            At Goldman Sachs I work on the platform that engineering, quant and ML teams build on. That means reusable Terraform and OPA guardrails for AWS, GitOps with Argo CD, DevSecOps checks inside the pipeline, SLO-driven observability, LLM inference on EKS, and a Backstage developer platform with FinOps tooling on the side.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Before that, at Razorpay, I focused on developer experience for 150+ engineers: production-like Kubernetes environments on EKS, one-command dependency setup, a fast inner loop, isolated preview environments, and the observability and runbooks that cut MTTR by 40%.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Outside work, I run my own projects, including RepoPilot, CampusKart, AeroLogistics and IPL, on a self-hosted home server with Docker, CI/CD, Tailscale and monitoring. It’s where I practice the same platform habits on a smaller scale.
          </p>
        </BlurReveal>
      </section>

      {/* Experience: one column on a single rail, so each role gets the full width */}
      <section id="experience" className="scroll-mt-24">
        <BlurReveal className="mb-10 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Experience</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-transparent" />
        </BlurReveal>
        <ol className="relative flex flex-col gap-8 pl-6 md:pl-10 before:absolute before:left-[7px] md:before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-cyan-500/50 before:via-white/10 before:to-transparent">
          {experiences.map((exp, i) => (
            <li key={exp.company} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-6 md:-left-10 top-9 w-[15px] h-[15px] md:w-[23px] md:h-[23px] rounded-full border-4 border-background ${i === 0 ? "bg-cyan-400" : "bg-gray-500"}`}
              />
              <GlowCard delay={i * 0.1} className="p-6 md:p-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-sm font-medium text-cyan-400">
                      <Briefcase aria-hidden="true" className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mt-1">{exp.role}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar aria-hidden="true" className="w-4 h-4" />
                    <span>{exp.dates}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <p className="mt-6 text-base md:text-lg text-gray-200 leading-relaxed max-w-[70ch]">
                  {exp.intro}
                </p>
                <ul className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6">
                  {exp.stories.map((story) => (
                    <li key={story.title} className="text-sm text-gray-300 leading-relaxed">
                      <h4 className="text-base font-semibold text-white mb-1.5">{story.title}</h4>
                      <p>{story.body}</p>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/10" aria-label={`Tech used at ${exp.company}`}>
                  {exp.tech.map((tech) => (
                    <li key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </li>
          ))}
        </ol>
      </section>

      {/* Professional Strengths Section */}
      <section>
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Professional Strengths</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-cyan-500 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlowCard delay={0.1} className="p-6" icon={{ Icon: Cloud, tone: "cyan" }}>
            <h3 className="text-xl font-bold text-white mb-3">Cloud Infrastructure as Code</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Reusable Terraform for AWS VPC, IAM and EKS, with OPA policies in front, so every team starts from the same compliant baseline and provisioning takes minutes instead of days.
            </p>
          </GlowCard>
          <GlowCard delay={0.2} className="p-6" icon={{ Icon: LayoutGrid, tone: "violet" }}>
            <h3 className="text-xl font-bold text-white mb-3">Platform Engineering &amp; Developer Experience</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Backstage golden paths, one-command environments and fast inner loops, built by sitting with developers and removing the friction they actually hit.
            </p>
          </GlowCard>
          <GlowCard delay={0.3} className="p-6" icon={{ Icon: Shield, tone: "emerald" }}>
            <h3 className="text-xl font-bold text-white mb-3">DevSecOps in the Pipeline</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Scanning, SBOMs, image signing, secrets management and policy enforcement wired into GitOps workflows, so security feedback reaches developers while they’re still in context.
            </p>
          </GlowCard>
          <GlowCard delay={0.4} className="p-6" icon={{ Icon: Activity, tone: "cyan" }}>
            <h3 className="text-xl font-bold text-white mb-3">SRE &amp; Observability</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              OpenTelemetry, Prometheus, Grafana and Datadog, SLOs and error budgets, multi-region failover, and runbooks that give on-call engineers clear signals when something breaks.
            </p>
          </GlowCard>
        </div>
      </section>

      {/* Skills: grouped rows (label left, tools right) instead of ten identical cards */}
      <section id="skills" className="scroll-mt-24">
        <BlurReveal className="mb-10 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Skills</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-transparent" />
        </BlurReveal>
        <BlurReveal>
          <dl className="rounded-2xl border border-border bg-card divide-y divide-white/10">
            {skillsCategories.map((category) => (
              <div key={category.title} className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-3 md:gap-8 px-6 py-5 md:px-8">
                <dt className="flex items-center gap-2.5 text-sm font-semibold text-white md:pt-1">
                  <category.icon aria-hidden="true" className="w-4 h-4 text-cyan-400 shrink-0" />
                  {category.title}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-md bg-white/5 border border-white/10 text-xs md:text-sm text-gray-200">
                      {skill}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </BlurReveal>
      </section>

      {/* Education Section */}
      <section>
        <BlurReveal className="mb-10 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Education</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlowCard delay={0.1} className="p-8" icon={{ Icon: GraduationCap, tone: "cyan" }}>
            <h3 className="text-xl font-bold text-white">Pace University</h3>
            <p className="text-gray-400 text-sm mb-3">New York, NY</p>
            <h4 className="text-lg font-medium text-gray-200 mb-2">MS in Computer Science (Cybersecurity)</h4>
            <p className="text-cyan-400 font-semibold mb-4">GPA: 3.74 | Expected May 2026</p>
            <p className="text-sm text-gray-400 leading-relaxed">Coursework: Information Security Management, Computer Systems, Python Programming.</p>
          </GlowCard>

          <GlowCard delay={0.2} className="p-8" icon={{ Icon: GraduationCap, tone: "violet" }}>
            <h3 className="text-xl font-bold text-white">Vidyavardhini’s College of Engineering</h3>
            <p className="text-gray-400 text-sm mb-3">Mumbai, India</p>
            <h4 className="text-lg font-medium text-gray-200 mb-2">BTech in Electronics &amp; Telecommunications</h4>
            <p className="text-violet-400 font-semibold mb-4">Graduated Jul 2022</p>
            <p className="text-sm text-gray-400 leading-relaxed">Concentration: Computer Networks and Communication.</p>
          </GlowCard>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="scroll-mt-24">
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Certifications &amp; Achievements</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-cyan-500 to-transparent" />
        </BlurReveal>
        <BlurReveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 border-t border-white/10">
            {certifications.map((cert) => (
              <li key={cert} className="flex items-center gap-3 py-4 border-b border-white/10">
                <BadgeCheck aria-hidden="true" className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="font-medium text-gray-200">{cert}</span>
              </li>
            ))}
          </ul>
        </BlurReveal>
      </section>

      {/* Where My Experience Connects Section */}
      <section>
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Where My Experience Connects</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-cyan-500 to-transparent" />
        </BlurReveal>

        <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-[68ch]">
          My work connects developer experience, infrastructure as code, delivery, security and reliability. Each one builds on the last, and together they’re what a good cloud platform is made of. That’s the kind of Cloud and Platform Engineering work I want to keep doing.
        </p>

        <ol className="flex flex-wrap items-center gap-3 text-sm">
          {connectsChain.map((step, i) => {
            const isLast = i === connectsChain.length - 1;
            return (
              <li key={step} className="flex items-center gap-3">
                <span
                  className={isLast
                    ? "px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-semibold"
                    : "px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-200"}
                >
                  {step}
                </span>
                {!isLast && <ArrowRight aria-hidden="true" className="w-4 h-4 text-gray-500" />}
              </li>
            );
          })}
        </ol>
      </section>

      {/* Explore the Ecosystem Section */}
      <section>
        <BlurReveal className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">Explore the Ecosystem</h2>
          <div className="h-1 w-10 bg-gradient-to-r from-cyan-500 to-transparent" />
        </BlurReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/#projects" className="group">
            <GlowCard interactive className="p-6 h-full">
              <div className="flex items-center justify-between h-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <LayoutGrid className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Live Projects</h3>
                    <p className="text-sm text-gray-400">IPL, RepoPilot, AeroLogistics &amp; CampusKart</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:translate-x-1 group-hover:text-cyan-400 transition-[color,transform]" />
              </div>
            </GlowCard>
          </Link>
          <Link href="/#infrastructure" className="group">
            <GlowCard interactive className="p-6 h-full">
              <div className="flex items-center justify-between h-full">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Network className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Self-hosted Infrastructure</h3>
                    <p className="text-sm text-gray-400">Docker, Jenkins, HTTPS &amp; Tailscale Funnel routing</p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-500 group-hover:translate-x-1 group-hover:text-cyan-400 transition-[color,transform]" />
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
            <a href="mailto:shlokshah862@gmail.com" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5 text-gray-300" />
              <span className="text-sm font-medium">Email Me</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://www.linkedin.com/in/shlokshah56/" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:bg-white/10 transition-colors">
              <UserCircle className="w-5 h-5 text-gray-300" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </MagneticButton>
          <MagneticButton>
            <a href="https://github.com/shlok695" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:bg-white/10 transition-colors">
              <Share2 className="w-5 h-5 text-gray-300" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
}
