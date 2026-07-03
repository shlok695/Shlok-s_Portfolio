import { GlowCard } from "@/components/ui/GlowCard";
import Link from "next/link";
import { FileText, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";

export default function Reports() {
  const reports = [
    ...projects.map((p) => ({
      title: `${p.title} Technical Report`,
      description: p.description,
      status: "Available",
      link: p.reportLink,
    })),
    {
      title: "Home Server Deployment Notes",
      description: "Technical documentation covering Docker configurations, Jenkins CI/CD pipelines, and Tailscale Funnel routing.",
      status: "Drafting",
      link: "#"
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
        <p className="text-lg text-gray-400 mb-10 max-w-2xl">
          Browse technical reports, demos, and documentation for Shlok&apos;s work.
        </p>
      </section>

      <section className="max-w-4xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reports.map((report, i) => (
            <GlowCard key={report.title} delay={i * 0.1} className="p-6 flex flex-col h-full premium-glass border-white/5 border-t-cyan-500/20 border-t-2">
              <div className="flex items-start justify-between mb-4">
                <FileText className="w-8 h-8 text-cyan-400" />
                <span className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${report.status === 'Available' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'}`}>
                  {report.status === 'Available' && <CheckCircle2 className="w-3 h-3" />}
                  {report.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{report.title}</h3>
              <p className="text-gray-400 text-sm flex-1 mb-6">
                {report.description}
              </p>
              <a 
                href={report.link} 
                className={`flex items-center justify-between px-4 py-2 rounded-lg text-sm font-medium transition-colors ${report.status === 'Available' ? 'premium-glass hover:bg-white/10 text-white' : 'bg-white/5 text-gray-500 cursor-not-allowed'}`}
              >
                <span>View Document</span>
                <ExternalLink className={`w-4 h-4 ${report.status === 'Available' ? 'text-cyan-400' : ''}`} />
              </a>
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-center text-center py-10 mt-10 border-t border-white/10 max-w-4xl mx-auto w-full">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link href="/" className="px-6 py-3 rounded-full premium-glass hover:bg-white/10 text-white font-medium transition-colors border-white/10">
            Back to Project Hub
          </Link>
          <div className="hidden sm:block w-px h-10 bg-white/20"></div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-gray-300">Want to know more about the developer?</span>
            <Link href="/home" className="btn-gradient px-6 py-3 rounded-full font-semibold">
              Open Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
