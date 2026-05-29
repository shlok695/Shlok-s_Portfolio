import { GlowCard } from "@/components/ui/GlowCard";
import Link from "next/link";
import { FileText, ExternalLink, CheckCircle2 } from "lucide-react";

export default function Reports() {
  const reports = [
    {
      title: "RepoPilot Technical Report",
      description: "Detailed breakdown of the AI-assisted code analysis engine, vulnerability detection logic, and the GitHub app integration.",
      status: "Available",
      link: "/Shlok_Shah_RepoPilot_Report.pdf"
    },
    {
      title: "CampusKart Project Report",
      description: "Comprehensive overview of the marketplace architecture, database schema, and student-focused UI/UX decisions.",
      status: "Available",
      link: "/Shlok_Shah_CampusKart_Report.pdf"
    },
    {
      title: "Home Server Deployment Notes",
      description: "Technical documentation covering Docker configurations, Jenkins CI/CD pipelines, and Tailscale Funnel routing.",
      status: "Available",
      link: "/Shlok_Shah_HomeServer_Report.pdf"
    },
    {
      title: "Security & DevOps Setup",
      description: "An in-depth look at the security considerations and automated processes used across all self-hosted applications.",
      status: "Drafting",
      link: "#"
    }
  ];

  return (
    <div className="flex flex-col gap-12 py-10">
      <section className="flex flex-col items-center text-center mt-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
          Project Reports
        </h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
          Browse technical reports, demos, and documentation for Shlok&apos;s work.
        </p>
      </section>

      <section className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report, i) => (
            <GlowCard key={report.title} delay={i * 0.1} className="p-6 flex flex-col h-full bg-white/5 border-white/10">
              <div className="flex items-start justify-between mb-4">
                <FileText className="w-8 h-8 text-orange-400" />
                <span className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${report.status === 'Available' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'}`}>
                  {report.status === 'Available' && <CheckCircle2 className="w-3 h-3" />}
                  {report.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{report.title}</h3>
              <p className="text-muted-foreground text-sm flex-1 mb-6">
                {report.description}
              </p>
              <a 
                href={report.link} 
                className={`flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-colors ${report.status === 'Available' ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-white/5 text-gray-500 cursor-not-allowed'}`}
              >
                <span>View Document</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center text-center py-10 mt-10 border-t border-white/10 max-w-4xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link href="/" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors border border-white/10">
            Back to Project Hub
          </Link>
          <div className="hidden sm:block w-px h-10 bg-white/20"></div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-gray-300">Want to know more about the developer?</span>
            <Link href="/home" className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 font-medium transition-colors">
              Open Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
