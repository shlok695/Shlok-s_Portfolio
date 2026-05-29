import { CaseStudy } from "@/components/ui/CaseStudy";

export default function AerologisticsCaseStudy() {
  return (
    <CaseStudy
      title="Aerologistics"
      problem="Freight forwarders and logistics companies need a reliable, centralized system to manage flight inventory, track cargo distribution, and optimize route planning."
      solution="A full-stack flight management and logistics system equipped with a public-facing UI and a robust backend to seamlessly search, manage, and display airlines, airports, and cargo routes."
      features={[
        "Comprehensive logistics management dashboard",
        "Real-time search and display for global airlines and airports",
        "Optimized cargo routing and distribution tracking",
        "RESTful API endpoints for external inventory integrations",
        "Robust relational data modeling for flights and cargo"
      ]}
      techStack={["Express.js", "Node.js", "PostgreSQL", "JavaScript", "HTML/CSS", "FastAPI"]}
      architecture="The backend is powered by Node.js and Express.js (with some auxiliary Python/FastAPI integrations) to manage complex business logic and API routing. PostgreSQL serves as the primary relational database to ensure ACID compliance for critical inventory and flight data. The frontend utilizes responsive HTML/CSS and JavaScript to deliver a clear, accessible public-facing UI."
      liveLink="https://svps.tail00dff0.ts.net/aerologistics"
      challenges={[
        "Understanding logistics-style workflows and converting them into a clear application flow.",
        "Organizing operational information such as shipments, tracking, statuses, or workflow stages.",
        "Making dashboard information easy to understand quickly.",
        "Handling different workflow states such as pending, in progress, completed, delayed, or issue-based statuses.",
        "Thinking through how an application support team would investigate workflow or data issues.",
        "Creating a user interface that supports quick decision-making instead of overwhelming the user.",
        "Planning test cases around status changes, dashboard visibility, data accuracy, and navigation."
      ]}
      solutions={[
        "Created a workflow-focused application experience for logistics and operational use cases.",
        "Designed dashboard-style views to support monitoring and quick decision-making.",
        "Organized status-based information in a structured and user-friendly way.",
        "Applied an application support mindset by considering troubleshooting, visibility, and operational clarity.",
        "Demonstrated understanding of business applications where reliability, usability, and supportability matter.",
        "Treated the application as a system that needs to be supportable, testable, and easy to troubleshoot."
      ]}
      highlight="AeroLogistics was designed like a real operational support system, where clarity, tracking, and troubleshooting matter as much as the interface."
    />
  );
}
