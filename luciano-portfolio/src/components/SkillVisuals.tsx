import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

type RadarPoint = { subject: string; value: number; fullMark: number };
type BarPoint = { name: string; value: number };

const radarData: RadarPoint[] = [
  { subject: "Enfermagem / Assistência", value: 90, fullMark: 100 },
  { subject: "Gestão & Processos", value: 88, fullMark: 100 },
  { subject: "Dados & Indicadores", value: 86, fullMark: 100 },
  { subject: "Full‑Stack Web", value: 82, fullMark: 100 },
  { subject: "Automação & Integrações", value: 80, fullMark: 100 },
  { subject: "IA aplicada", value: 78, fullMark: 100 },
];

const bars: BarPoint[] = [
  { name: "React/Vite", value: 85 },
  { name: "Python/Flask", value: 82 },
  { name: "SQL/SQLite", value: 80 },
  { name: "Firebase/Supabase", value: 76 },
  { name: "Nginx/Deploy", value: 74 },
  { name: "UX/Produto", value: 72 },
];

const tooltipStyle: React.CSSProperties = {
  background: "rgba(2, 6, 23, .92)",
  border: "1px solid rgba(51, 65, 85, .8)",
  borderRadius: 14,
  color: "rgba(226, 232, 240, 1)",
};

export function SkillVisuals() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950/70 to-slate-900/30 p-5 shadow-[0_0_0_1px_rgba(148,163,184,.05),0_25px_80px_-50px_rgba(56,189,248,.45)]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-50">Mapa de competências</div>
            <div className="mt-1 text-xs text-slate-400">Visão geral (0–100)</div>
          </div>
          <div className="rounded-full border border-slate-800 bg-slate-950/50 px-3 py-1 text-xs text-slate-300">
            Radar
          </div>
        </div>
        <div className="mt-4 h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" tick={{ fill: "#cbd5e1", fontSize: 11 }} />
              <Radar dataKey="value" strokeWidth={2} fillOpacity={0.28} />
              <Tooltip contentStyle={tooltipStyle} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950/70 to-slate-900/30 p-5 shadow-[0_0_0_1px_rgba(148,163,184,.05),0_25px_80px_-50px_rgba(99,102,241,.35)]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-slate-50">Foco técnico</div>
            <div className="mt-1 text-xs text-slate-400">Experiência prática (0–100)</div>
          </div>
          <div className="rounded-full border border-slate-800 bg-slate-950/50 px-3 py-1 text-xs text-slate-300">
            Barras
          </div>
        </div>
        <div className="mt-4 h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bars} layout="vertical" margin={{ left: 10, right: 10, top: 10, bottom: 10 }}>
              <XAxis type="number" domain={[0, 100]} tick={{ fill: "#cbd5e1", fontSize: 11 }} />
              <YAxis type="category" dataKey="name" width={110} tick={{ fill: "#cbd5e1", fontSize: 11 }} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="value" radius={[12, 12, 12, 12]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
