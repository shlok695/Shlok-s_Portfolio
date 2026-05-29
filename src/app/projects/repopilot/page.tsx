import { CaseStudy } from "@/components/ui/CaseStudy";

export default function RepoPilotCaseStudy() {
  return (
    <CaseStudy
      title="RepoPilot"
      problem="Developers often struggle to quickly understand unfamiliar repositories, identify security risks, and generate useful onboarding documentation for new team members."
      solution="RepoPilot is an advanced AI-assisted repo scanner that intelligently analyzes GitHub repositories or ZIP uploads to produce comprehensive structured insights, vulnerability reports, bug findings, and developer onboarding summaries."
      features={[
        "Automated README and onboarding documentation generation",
        "Deep codebase architecture analysis and summarization",
        "Automated vulnerability detection and bug finding",
        "GitHub repository REST API integration",
        "ZIP upload support for local, proprietary codebases",
        "Exportable PDF/Markdown developer reports"
      ]}
      techStack={["Next.js", "TypeScript", "Tailwind CSS", "GitHub REST API", "AI Language Models"]}
      architecture="RepoPilot uses a Next.js and TypeScript front-end with API routes to handle authentication and file uploads. The backend processes the codebase by communicating with GitHub's REST API or extracting uploaded ZIP archives. An integrated AI engine then parses the structure, identifying vulnerabilities, bugs, and summarizing components into structured onboarding docs."
      security="Uses temporary, short-lived tokens for GitHub access. ZIP uploads are scanned and immediately discarded after processing to ensure proprietary code is never retained on the server."
      liveLink="https://svps.tail00dff0.ts.net/repopilot"
      challenges={[
        "Supporting both GitHub repository input and ZIP upload input.",
        "Handling private repository restrictions properly without exposing confusing backend errors.",
        "Making sure users receive a clear message when a repository is private or inaccessible.",
        "Improving drag-and-drop upload behavior.",
        "Preventing sensitive files such as .env files from being exposed.",
        "Thinking through security risks because one weak component can become the weak link in an application.",
        "Making AI-generated documentation useful, structured, and readable.",
        "Detecting possible vulnerabilities while keeping the results actionable.",
        "Handling backend errors gracefully with user-friendly messages.",
        "Testing flows such as public repo scan, private repo handling, ZIP upload, drag-and-drop, report generation, and documentation output.",
        "Deploying the application securely on a self-hosted server with Tailscale Funnel and HTTPS.",
        "Balancing AI functionality with security, reliability, and user trust."
      ]}
      solutions={[
        "Built an AI-assisted repository analysis tool that helps users understand projects faster.",
        "Added support for both GitHub repository links and ZIP uploads.",
        "Improved error handling for private or inaccessible repositories.",
        "Added security-focused handling to avoid exposing sensitive files like .env files.",
        "Generated structured documentation and developer-friendly reports.",
        "Combined AI, cybersecurity awareness, testing, and secure deployment into one practical project.",
        "Hosted the application through a self-hosted setup using HTTPS and Tailscale Funnel.",
        "Treated security as a core feature, not an afterthought."
      ]}
      highlight="RepoPilot combines AI, cybersecurity, documentation automation, testing, and secure deployment into one practical tool."
    />
  );
}
