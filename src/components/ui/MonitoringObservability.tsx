"use client";
import { Fragment } from "react";
import { ArrowRight, BellRing, ChartLine, Container, Cpu, Database, Globe, HardDrive, HeartPulse, Radar, ScrollText, Smartphone, type LucideIcon } from "lucide-react";
import { BlurReveal } from "./AppleAnimations";
import { GlowCard } from "./GlowCard";

// Facts below come from a read-only audit of the server (svps), 2026-09-28:
// /home/shlok/monitoring/docker-compose.yml, prometheus/prometheus.yml, provisioned Grafana dashboards, crontab, ss -tlnp.
const heartbeat = {
  interval: "every 5 minutes",
  // TODO(shlok): grace period is configured on the healthchecks.io side, not on the server.
  // Check the check's settings at healthchecks.io and fill it in (e.g. "10 minutes"); the line stays hidden while null.
  grace: null as string | null,
};

// TODO(shlok): these thresholds come from the Markdown note in the "Infrastructure Overview" dashboard,
// not from a live rule file (Prometheus has no rule_files and there's no Alertmanager). Open Grafana ->
// Alerting -> Alert rules and confirm each rule exists and routes to the ntfy contact point.
const alertThresholds = ["CPU > 85%", "Memory > 90%", "Disk > 90%", "Load > 4"];

const dashboards = [
  { name: "Infrastructure Overview", answers: "Is the host healthy right now, and which container is using what?" },
  { name: "Server Health (Simple)", answers: "The one-glance check: CPU, memory, disk, load, uptime, network." },
  { name: "Node Exporter Full", answers: "The deep dive when something looks off at the host level." },
  { name: "Logs (Loki)", answers: "Which service is getting noisy, by source and log level?" },
  { name: "Log Insights", answers: "RepoPilot’s HTTP status codes and p95 latency, plus what UFW is blocking." },
  { name: "Log Search", answers: "Ad-hoc searching across every log when I’m chasing something specific." },
];

type Node = { icon: LucideIcon; label: string };

const lanes: { name: string; tone: "cyan" | "neutral"; nodes: Node[] }[] = [
  {
    name: "Metrics",
    tone: "cyan",
    nodes: [
      { icon: Cpu, label: "node-exporter · cAdvisor" },
      { icon: Database, label: "Prometheus (every 7s)" },
      { icon: ChartLine, label: "Grafana" },
    ],
  },
  {
    name: "Logs",
    tone: "cyan",
    nodes: [
      { icon: ScrollText, label: "Containers · PM2 · systemd" },
      { icon: Database, label: "Alloy → Loki" },
      { icon: ChartLine, label: "Grafana" },
    ],
  },
  {
    name: "Alerts",
    tone: "neutral",
    nodes: [
      { icon: Radar, label: "Alert thresholds" },
      { icon: BellRing, label: "ntfy" },
      { icon: Smartphone, label: "My phone" },
    ],
  },
  {
    name: "Heartbeat",
    tone: "neutral",
    nodes: [
      { icon: HeartPulse, label: "cron ping, every 5 min" },
      { icon: Globe, label: "healthchecks.io" },
      // TODO(shlok): confirm the healthchecks.io integration notifies through ntfy.
      { icon: BellRing, label: "Alert on a missed beat" },
    ],
  },
];

const monitored = [
  {
    icon: Cpu,
    title: "CPU, memory and load",
    body: "The first sign that a container is misbehaving or the box is overcommitted.",
  },
  {
    icon: HardDrive,
    title: "Disk and inode usage",
    body: "Docker once ran this server out of inodes, which a disk-space graph alone doesn’t show. I cleaned it up with docker system prune and journal vacuuming, and node-exporter now reports inodes alongside free space.",
  },
  {
    icon: HardDrive,
    title: "NVMe and HDD health",
    body: "I’ve seen PCIe AER and NVMe physical-layer errors in dmesg, so I keep an eye on drive health with smartctl to catch a failing disk early.",
  },
  {
    icon: Container,
    title: "Containers and network",
    body: "cAdvisor breaks resource use down per container, so one misbehaving app stands out instead of hiding in the host totals.",
  },
];

export function MonitoringObservability() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16 flex flex-col gap-10">
      <BlurReveal className="flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Monitoring &amp; Observability</h3>
        <p className="text-gray-400 max-w-2xl leading-relaxed">
          All of this runs on one machine, a Dell Vostro 3401 running Ubuntu 24.04 LTS, which I reach over Tailscale and SSH. Nobody else is watching it, so the monitoring has to: it tells me when something is drifting toward trouble, and when the box has gone quiet entirely.
        </p>
      </BlurReveal>

      {/* Architecture: metrics, logs, alert path, heartbeat (dead-man's switch) path */}
      <GlowCard className="p-6 md:p-8">
        <div className="flex flex-col gap-6">
          {lanes.map((lane) => (
            <div key={lane.name} className="flex flex-col md:flex-row md:items-center gap-3">
              <span className={`text-sm font-semibold md:w-24 shrink-0 ${lane.tone === "cyan" ? "text-cyan-400" : "text-gray-300"}`}>
                {lane.name}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
                {lane.nodes.map((node, i) => (
                  <Fragment key={node.label}>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-200 sm:flex-1">
                      <node.icon className={`w-4 h-4 shrink-0 ${lane.tone === "cyan" ? "text-cyan-400" : "text-gray-300"}`} />
                      <span>{node.label}</span>
                    </div>
                    {i < lane.nodes.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-gray-500 shrink-0 self-center rotate-90 sm:rotate-0" />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-6 leading-relaxed">
          Prometheus, Grafana, Loki, Alloy, node-exporter and cAdvisor all run as Docker containers on the server, defined in one compose file.
        </p>
      </GlowCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 text-left">
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">What’s monitored, and why</h4>
            <ul className="flex flex-col gap-4">
              {monitored.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <item.icon className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">{item.title}.</span> {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Dashboards</h4>
            <ul className="text-sm text-gray-300 leading-relaxed list-disc list-outside ml-4 space-y-2">
              {dashboards.map((d) => (
                <li key={d.name}>
                  <span className="font-semibold text-white">{d.name}:</span> {d.answers}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Alerting</h4>
            <ul className="text-sm text-gray-300 leading-relaxed list-disc list-outside ml-4 space-y-2">
              <li>Alerts reach my phone as push notifications through ntfy.</li>
              <li>Thresholds: {alertThresholds.join(", ")}.</li>
              <li>
                A heartbeat works as a dead-man’s switch. A cron job pings healthchecks.io {heartbeat.interval}, and if the pings stop
                {heartbeat.grace ? ` for more than ${heartbeat.grace}` : ""}, I get an alert. That catches what a normal alert can’t report: the box going down, losing power or losing network.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Retention &amp; security</h4>
            <ul className="text-sm text-gray-300 leading-relaxed list-disc list-outside ml-4 space-y-2">
              <li>Prometheus keeps 30 days of metrics.</li>
              <li>Prometheus and Grafana listen on localhost only.</li>
              {/* TODO(shlok): from server notes dated 2026-08-08, not re-verified. Confirm with `tailscale serve status` and `tailscale funnel status`. */}
              <li>Grafana is reachable only inside my tailnet through Tailscale Serve, and is deliberately left out of the public Funnel.</li>
              <li>Grafana uses password login with sign-ups disabled, and the admin password comes from a Docker secret instead of an environment file.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-left">
        <h4 className="text-lg font-semibold text-white mb-4">What I learned, and what’s next</h4>
        <ul className="text-sm text-gray-300 leading-relaxed list-disc list-outside ml-4 space-y-2">
          <li>The failures that bit me were the quiet ones. Inode exhaustion and drive errors don’t look like an outage until they become one, so I now watch them directly.</li>
          <li>Pulling logs into Loki means I search them in Grafana instead of SSHing in to read journals in the middle of an incident.</li>
          <li>Next: SLO-style uptime targets for the public routes, so I’m measuring against a goal instead of eyeballing graphs.</li>
          <li>Next: OpenTelemetry in my own apps, to bring the tracing I rely on at work to the home lab.</li>
        </ul>
      </div>
    </div>
  );
}
