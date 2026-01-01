import React from "react";
import { profile } from "../data/profile";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="topo" className="pt-16">
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/40 px-4 py-2 text-xs text-slate-200">
            <Sparkles className="h-4 w-4 text-slate-300" />
            {profile.headline}
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            {profile.name}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            Construo sistemas e dashboards para hospital com o olhar de quem vive a rotina:
            segurança do paciente, produtividade da equipe e indicador na tela em tempo real.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.metrics.map((m) => (
              <Badge key={m.label}>
                {m.label}: <span className="text-slate-200">{m.value}</span>
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 px-5 py-2.5 text-sm font-semibold text-slate-50 ring-1 ring-inset ring-slate-800 hover:from-cyan-500/30 hover:to-indigo-500/30 transition"
            >
              Ver projetos
              <ArrowDown className="h-4 w-4 text-slate-200" />
            </a>

            <a
              href={profile.cvHref}
              className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/40 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-950/70 transition"
            >
              Baixar CV
              <Download className="h-4 w-4 text-slate-300" />
            </a>
          </div>

          <div className="mt-8 text-xs text-slate-500">
            Dica: personalize os links (GitHub/LinkedIn) em <span className="text-slate-300">src/data/profile.ts</span>.
          </div>
        </div>

        <div className="lg:col-span-5">
          <Card className="p-0 overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              <img
                src={profile.photo}
                alt={profile.name}
                className="h-[360px] w-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
                    UTI • Coordenação • Qualidade
                  </span>
                  <span className="rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
                    IA aplicada
                  </span>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                  {profile.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-slate-800 bg-slate-950/50 px-4 py-3"
                    >
                      <div className="text-xs text-slate-400">{m.label}</div>
                      <div className="mt-1 text-sm font-semibold text-slate-50">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  {profile.links.slice(0, 2).map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/40 px-4 py-2 text-xs text-slate-200 hover:bg-slate-950/70 transition"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                      <ArrowUpRight className="h-4 w-4 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
