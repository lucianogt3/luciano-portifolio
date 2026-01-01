import React from "react";
import { SiReact, SiVite, SiTypescript, SiPython, SiFlask, SiDjango, SiFirebase, SiSupabase, SiSqlite, SiNginx, SiDocker, SiGithub } from "react-icons/si";
const items = [
  { name: "React", Icon: SiReact },
  { name: "Vite", Icon: SiVite },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Python", Icon: SiPython },
  { name: "Flask", Icon: SiFlask },
  { name: "Django", Icon: SiDjango },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Supabase", Icon: SiSupabase },
  { name: "SQLite", Icon: SiSqlite },
  { name: "Nginx", Icon: SiNginx },
  { name: "Docker", Icon: SiDocker },
  { name: "GitHub", Icon: SiGithub },
];
export function TechIcons() {
  return (
    <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map(({ name, Icon }) => (
        <div
          key={name}
          className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/40 p-3 hover:bg-slate-950/60 transition"
        >
          <div className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-800 bg-slate-950/60">
            <Icon className="h-5 w-5 text-slate-200 group-hover:text-white transition" />
          </div>
          <div className="text-sm font-medium text-slate-200">{name}</div>
        </div>
      ))}
    </div>
  );
}

export default TechIcons;
