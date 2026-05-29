import { CaseStudy } from "@/components/ui/CaseStudy";

export default function HomeServerCaseStudy() {
  return (
    <CaseStudy
      title="Home Server + DevOps Pipeline"
      problem="Hosting multiple projects securely and affordably can be challenging, especially when trying to avoid exposing unnecessary services publicly."
      solution="Shlok uses a self-hosted home server setup with Docker, Jenkins, Tailscale Funnel, HTTPS, and path-based routing to deploy multiple applications under one public Funnel URL."
      features={[
        "Containerized applications using Docker",
        "Automated CI/CD pipelines via Jenkins",
        "Tailscale Funnel for secure public access",
        "HTTPS support with automatic certificates",
        "Path-based reverse proxy routing",
        "Multiple apps on different ports mapped cleanly"
      ]}
      techStack={["Docker", "Jenkins", "Tailscale Funnel", "Nginx", "Linux"]}
      architecture="A Linux-based home server runs Docker to containerize all applications (e.g. RepoPilot on port 3000, CampusKart on 3001, Portfolio on 3003). A reverse proxy sits in front, taking traffic from Tailscale Funnel and routing it based on URL paths."
      security="Tailscale Funnel ensures the server isn't directly exposed to the public internet via traditional port forwarding. Instead, traffic routes through Tailscale's secure network. Internal services remain isolated in Docker networks."
      deployment="Deployments are triggered via GitHub webhooks to Jenkins, which builds the new Docker images and restarts the respective containers seamlessly."
    />
  );
}
