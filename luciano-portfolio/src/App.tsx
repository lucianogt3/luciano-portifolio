import React from "react";
import { profile } from "./data/profile";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { Card } from "./components/Card";
import { Badge } from "./components/Badge";
import { TechIcons } from "./components/TechIcons";
import { SkillVisuals } from "./components/SkillVisuals";

import {
  ArrowUpRight,
  Briefcase,
  Cpu,
  FileText,
  Layers3,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* ambient glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute top-40 -left-40 h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute -bottom-52 right-0 h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
      </div>

      <Nav />

      <main className="mx-auto w-full max-w-6xl px-4 pb-20">
        <Hero />

        {/* ABOUT */}
        <Section
          id="sobre"
          title="Sobre"
          subtitle="Enfermagem com mentalidade de produto: rápido, bonito e útil para a ponta."
          icon={<Sparkles className="h-5 w-5" />}
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <div className="space-y-4 text-sm leading-relaxed text-slate-200">
                {profile.about.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {profile.strengths.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4"
                  >
                    <div className="text-sm font-semibold text-slate-50">
                      {s.title}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">{s.desc}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-slate-50">
                    Informações rápidas
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    Links e currículo
                  </div>
                </div>
                <a
                  href={profile.cvHref}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/40 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-950/70 transition"
                >
                  <FileText className="h-4 w-4" />
                  Baixar CV
                </a>
              </div>

              <div className="mt-5 space-y-3 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <span>contato: (adicione seu e‑mail)</span>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-semibold text-slate-400">
                    Principais pilares
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {profile.metrics.map((m) => (
                      <Badge key={m.label}>
                        {m.label}: <span className="text-slate-200">{m.value}</span>
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-semibold text-slate-400">
                    Links
                  </div>
                  <div className="mt-2 flex flex-col gap-2">
                    {profile.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className="inline-flex items-center justify-between gap-2 rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-sm hover:bg-slate-950/70 transition"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>{l.label}</span>
                        <ArrowUpRight className="h-4 w-4 text-slate-400" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* TECH */}
        <Section
          id="stack"
          title="Stack e ferramentas"
          subtitle="O que eu uso no dia a dia para construir e publicar rápido."
          icon={<Cpu className="h-5 w-5" />}
        >
          <TechIcons />
        </Section>

        {/* SKILLS */}
        <Section
          id="competencias"
          title="Competências"
          subtitle="Radar + barras (pra ficar visual e objetivo)."
          icon={<Layers3 className="h-5 w-5" />}
        >
          <SkillVisuals />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {profile.skillGroups.map((g) => (
              <Card key={g.title}>
                <div className="text-sm font-semibold text-slate-50">{g.title}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <Badge key={it}>{it}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projetos"
          title="Projetos principais"
          subtitle="Os que mais representam o que eu sei entregar hoje."
          icon={<Briefcase className="h-5 w-5" />}
        >
          <div className="grid gap-4 md:grid-cols-2">
            {profile.projects.map((p) => (
              <Card key={p.title} className="group">
                {p.highlight ? (
                  <div className="mb-3 rounded-2xl border border-slate-800 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 px-4 py-3 text-xs text-slate-200">
                    <span className="font-semibold">Destaque:</span> {p.highlight}
                  </div>
                ) : null}

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-base font-semibold text-slate-50">
                      {p.title}
                    </div>
                    <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/40 px-4 py-2 text-xs text-slate-200 hover:bg-slate-950/70 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                      <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-slate-200 transition" />
                    </a>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/40 p-5">
            <div className="text-sm font-semibold text-slate-50">Quer transformar rotina em sistema?</div>
            <div className="mt-1 text-sm text-slate-300">
              Me chama e a gente desenha o fluxo, define os campos, salva histórico e coloca indicadores na tela.
            </div>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="mt-14 border-t border-slate-900 pt-8 text-center text-xs text-slate-500">
          <div>© {new Date().getFullYear()} {profile.name}. Feito com React + Vite.</div>
          <div className="mt-1">NurseTec • Produtos digitais para enfermagem e gestão.</div>
        </footer>
      </main>
    </div>
  );
}
