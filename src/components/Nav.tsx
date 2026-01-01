import React, { useMemo, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { profile } from "../data/profile";

const navItem =
  "text-sm font-semibold text-white/75 hover:text-white transition";

const btn =
  "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition";

export const Nav: React.FC = () => {
  const items = useMemo(
    () => [
      { label: "Topo", href: "#topo" },
      { label: "Sobre", href: "#sobre" },
      { label: "Currículo", href: "#curriculo" },
      { label: "Competências", href: "#competencias" },
      { label: "Projetos", href: "#projetos" },
    ],
    []
  );

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#topo" className="font-bold tracking-tight text-white">
          {profile.name}
          <span className="text-white/50"> • </span>
          <span className="text-amber-300">Portfolio</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {items.map((it) => (
            <a key={it.href} href={it.href} className={navItem}>
              {it.label}
            </a>
          ))}
          <a href="#projetos" className={btn}>
            Ver projetos <ArrowRight className="h-4 w-4" />
          </a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white lg:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="mx-auto max-w-6xl px-4 pb-4">
            <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 backdrop-blur">
              <div className="grid gap-3">
                {items.map((it) => (
                  <a
                    key={it.href}
                    href={it.href}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80"
                    onClick={() => setOpen(false)}
                  >
                    {it.label}
                  </a>
                ))}
                <a
                  href="#projetos"
                  className="rounded-2xl bg-amber-500/90 px-4 py-3 text-sm font-semibold text-slate-950"
                  onClick={() => setOpen(false)}
                >
                  Ver projetos
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
