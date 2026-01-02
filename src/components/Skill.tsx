import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
type RadarPoint = { area: string; score: number };
type BarPoint = { name: string; value: number };
const card =
  "rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)]";
const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
    {children}
  </div>
);
export const SkillVisuals: React.FC<{
  radar: RadarPoint[];
  bars: BarPoint[];
}> = ({ radar, bars }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className={card + " p-6"}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Mapa de competências</h3>
            <p className="mt-1 text-sm text-white/70">Visão geral (0–100)</p>
          </div>
          <Label>Radar</Label>
        </div>
        <div className="mt-5 h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radar}>
              <PolarGrid stroke="rgba(255,255,255,0.12)" />
              <PolarAngleAxis
                dataKey="area"
                tick={{ fill: "rgba(255,255,255,0.75)", fontSize: 12 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 11 }}
                stroke="rgba(255,255,255,0.12)"
              />
              <Radar
                name="Competência"
                dataKey="score"
                stroke="rgba(245, 158, 11, 0.9)"
                fill="rgba(245, 158, 11, 0.25)"
                strokeWidth={2}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className={card + " p-6"}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Foco técnico</h3>
            <p className="mt-1 text-sm text-white/70">Experiência prática (0–100)</p>
          </div>
          <Label>Barras</Label>
        </div>
        <div className="mt-5 h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bars} layout="vertical" margin={{ left: 20, right: 10 }}>
              <CartesianGrid stroke="rgba(255,255,255,0.08)" horizontal={false} />
              <XAxis
                type="number"
                domain={[0, 100]}
                tick={{ fill: "rgba(255,255,255,0.55)", fontSize: 11 }}
                stroke="rgba(255,255,255,0.18)"
              />
              <YAxis
                type="category"
                dataKey="name"
                width={110}
                tick={{ fill: "rgba(255,255,255,0.78)", fontSize: 12 }}
                stroke="rgba(255,255,255,0.0)"
              />
              <Tooltip
                cursor={{ fill: "rgba(255,255,255,0.06)" }}
                contentStyle={{
                  background: "rgba(2,6,23,0.92)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 12,
                  color: "white",
                }}
              />
              <Bar dataKey="value" fill="rgba(245, 158, 11, 0.85)" radius={[10, 10, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SkillVisuals;
