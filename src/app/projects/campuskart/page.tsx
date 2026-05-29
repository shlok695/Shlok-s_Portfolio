import { CaseStudy } from "@/components/ui/CaseStudy";

export default function CampusKartCaseStudy() {
  return (
    <CaseStudy
      title="CampusKart"
      problem="University students need a secure, verified, and community-driven marketplace to buy, sell, and exchange essential items without the risks associated with public platforms."
      solution="CampusKart is a comprehensive, campus-only peer-to-peer marketplace restricted to verified .edu users. It features advanced geospatial search, real-time messaging, and comprehensive QA validation."
      features={[
        "Secure NextAuth/JWT authentication restricted to .edu emails",
        "Real-time peer-to-peer messaging powered by GetStream",
        "Location-based nearby listings using PostGIS geospatial queries",
        "Automated maintenance tasks using Cron jobs",
        "Comprehensive health and performance monitoring via Prometheus and Grafana",
        "Extensive QA and testing documentation (FDD, DFDs, ER Diagrams, UML)"
      ]}
      techStack={[
        "Next.js", 
        "TypeScript", 
        "PostgreSQL (PostGIS)", 
        "NextAuth", 
        "Docker", 
        "Jenkins", 
        "AWS EC2"
      ]}
      architecture="Built on a Next.js and TypeScript frontend, the platform leverages PostgreSQL with PostGIS for complex geospatial queries. Real-time chat is handled by GetStream. The infrastructure is deployed across Linux/AWS environments using Docker and Jenkins CI/CD pipelines, secured via Tailscale/SSH, and monitored with Prometheus and Grafana."
      liveLink="https://svps.tail00dff0.ts.net/campuskart"
      challenges={[
        "Designing the platform around real student needs instead of building a generic marketplace.",
        "Creating a simple buy, sell, and exchange flow for students.",
        "Testing Nearby Listings with browser location access.",
        "Making sure listing cards clearly showed distance values such as '0.5 mi away.'",
        "Handling edge cases where location permission is denied, unavailable, or inaccurate.",
        "Testing radius-based filtering so results update correctly.",
        "Making the platform feel trustworthy for student-to-student exchanges.",
        "Ensuring the app remains responsive and easy to use on mobile and desktop.",
        "Thinking from an application-support perspective: what could go wrong for users, how listings should behave, and how issues could be troubleshot."
      ]}
      solutions={[
        "Built a student-focused marketplace tailored for Pace University students.",
        "Added a Nearby Listings concept to make item discovery more practical and location-aware.",
        "Applied manual testing to validate location permission, distance display, radius changes, and listing behavior.",
        "Designed the app with a support mindset by thinking through user errors, permission issues, and troubleshooting scenarios.",
        "Focused on usability, accessibility, and simple workflows for real student users.",
        "Treated the project as both a software product and a supportable application."
      ]}
      highlight="CampusKart was built with a practical support mindset: every feature was tested from the perspective of how a real student would use it and where they might face issues."
    />
  );
}
