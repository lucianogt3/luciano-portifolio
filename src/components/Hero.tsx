import React from "react";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { profile } from "../data/profile";

const pill =
  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm md:text-base font-semibold text-white/85 backdrop-blur";

const btn =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm md:text-base font-semibold transition " +
  "border border-white/10 bg-white/5 text-white hover:bg-white/10";

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm md:text-base font-semibold transition " +
  "bg-amber-400 text-slate-950 hover:bg-amber-300";

export const Hero: React.FC = () => {
  return (
    <section id="topo" className="pt-10 lg:pt-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className={pill}>
              <Sparkles className="h-4 w-4 text-amber-200" />
              <span>
                Assistência + Gestão (ênfase) • Tecnologia & IA como acelerador
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {profile.name}
            </h1>

            <p className="mt-3 text-lg md:text-xl text-white/80">
              {profile.title}
            </p>

            <p className="mt-5 text-base md:text-lg text-slate-200/90 leading-relaxed">
              {profile.subtitle}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#sobre" className={btnPrimary}>
                Ver perfil
                <ArrowRight className="h-4 w-4" />
              </a>

              <a href={profile.cvPdf} className={btn}>
                <Download className="h-4 w-4" />
                Baixar CV
              </a>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {profile.quickFacts.map((q) => (
                <div
                  key={q.k}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm md:text-base text-white/85"
                >
                  <span className="text-white/70">{q.k}:</span>{" "}
                  <span className="font-semibold">{q.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(600px_300px_at_30%_20%,rgba(59,130,246,.20),transparent_60%),radial-gradient(600px_300px_at_70%_30%,rgba(168,85,247,.16),transparent_60%)] blur-2xl" />
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="h-full w-full object-cover object-[50%_20%] saturate-110 contrast-105"
                />
              </div>

              <div className="mt-4 text-center">
                <div className="text-base md:text-lg font-semibold text-white">
                  {profile.name}
                </div>
                <div className="text-sm md:text-base text-white/70">
                  {profile.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
