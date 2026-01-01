import React from "react";
export function Section({
  id,
  title,
  subtitle,
  icon,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-14 scroll-mt-24">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            {icon ? (
              <span className="grid h-9 w-9 place-items-center rounded-2xl border border-slate-800 bg-slate-950/40 text-slate-200">
                {icon}
              </span>
            ) : null}
            <h2 className="text-xl font-semibold tracking-tight text-slate-50">
              {title}
            </h2>
          </div>
          {subtitle ? (
            <p className="mt-2 max-w-2xl text-sm text-slate-400">{subtitle}</p>
          ) : null}
        </div>
      </div>
      {children}
    </section>
  );
}

export default Section;
