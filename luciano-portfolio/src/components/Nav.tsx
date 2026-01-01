import React, { useEffect, useState } from "react";

const items = [
  { label: "Topo", href: "#topo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Stack", href: "#stack" },
  { label: "Competências", href: "#competencias" },
  { label: "Projetos", href: "#projetos" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <div
        className={[
          "mx-auto max-w-6xl px-4",
          scrolled ? "pt-3" : "pt-5",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center justify-between gap-3 rounded-3xl border border-slate-800 px-4 py-3 backdrop-blur",
            scrolled ? "bg-slate-950/70" : "bg-slate-950/40",
          ].join(" ")}
        >
          <a href="#topo" className="text-sm font-semibold text-slate-50">
            Luciano • NurseTec
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-900/60 transition"
              >
                {it.label}
              </a>
            ))}
          </nav>

          <a
            href="#projetos"
            className="rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 px-4 py-2 text-xs font-semibold text-slate-50 ring-1 ring-inset ring-slate-800 hover:from-cyan-500/30 hover:to-indigo-500/30 transition"
          >
            Ver projetos
          </a>
        </div>
      </div>
    </div>
  );
}
