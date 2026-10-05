"use client";

import { useEffect, useState } from "react";

interface ServerStatus {
  https: boolean;
  env: string;
  uptimeSeconds: number;
  serverTime: string;
}

function formatUptime(seconds: number): string {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (d > 0) return `${d}d ${h}h ${m}m`;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

function useServerStatus() {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchStatus = () => {
      fetch("/api/status")
        .then((res) => {
          if (!res.ok) throw new Error("status endpoint unavailable");
          return res.json();
        })
        .then((data: ServerStatus) => {
          if (!cancelled) {
            setStatus(data);
            setErrored(false);
          }
        })
        .catch(() => {
          if (!cancelled) setErrored(true);
        });
    };

    fetchStatus();
    const id = setInterval(fetchStatus, 20000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return { status, errored };
}

function useTypewriter(lines: string[]) {
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "erasing">("typing");

  useEffect(() => {
    const safeIndex = lineIndex % lines.length;
    const current = lines[safeIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 32);
      } else {
        timeout = setTimeout(() => setPhase("holding"), 1400);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("erasing"), 200);
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 16);
      } else {
        timeout = setTimeout(() => {
          setPhase("typing");
          setLineIndex((i) => (i + 1) % lines.length);
        }, 0);
      }
    }

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, phase, lineIndex]);

  return text;
}

function useClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString([], { hour12: false }));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

function useHost() {
  const [host, setHost] = useState<string | null>(null);

  useEffect(() => {
    const detect = () => setHost(window.location.hostname);
    detect();
  }, []);

  return host;
}

export function TerminalStatus() {
  const time = useClock();
  const host = useHost();
  const { status, errored } = useServerStatus();

  const lines = status
    ? [
        `https: ${status.https ? "enforced" : "not detected"}`,
        `uptime: ${formatUptime(status.uptimeSeconds)}`,
        `environment: ${status.env}`,
        "status: operational",
      ]
    : errored
      ? ["status: reconnecting…"]
      : ["status: checking…"];

  const logText = useTypewriter(lines);

  return (
    <div className="premium-glass p-4 rounded-xl flex flex-col gap-2 font-mono text-xs text-gray-400">
      <div className="flex items-center gap-3">
        <span className="text-emerald-400">~/</span>
        <span className="text-white">{host ?? "localhost"}</span>
        <span className="text-gray-500 ml-auto tabular-nums">{time ?? "--:--:--"}</span>
      </div>
      <div className="h-px bg-white/10 w-full my-1"></div>
      <div className="flex items-center gap-3 hover:text-white transition-colors"><span className="text-cyan-400">/</span> Project Hub</div>
      <div className="flex items-center gap-3 hover:text-white transition-colors"><span className="text-cyan-400">/home</span> Portfolio</div>
      <div className="flex items-center gap-3 hover:text-white transition-colors"><span className="text-cyan-400">/repopilot</span> Live Scan Engine</div>
      <div className="flex items-center gap-3 hover:text-white transition-colors"><span className="text-cyan-400">/campuskart</span> Live Marketplace</div>
      <div className="h-px bg-white/10 w-full my-1"></div>
      <div className="flex items-center gap-2 text-emerald-400/80">
        <span className="text-gray-600">{">"}</span>
        <span>{logText}</span>
        <span className="w-1.5 h-3 bg-emerald-400/70 animate-pulse" />
      </div>
    </div>
  );
}
