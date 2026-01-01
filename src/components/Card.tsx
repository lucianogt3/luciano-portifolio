import React from "react";

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        "rounded-3xl border border-slate-700/40 bg-slate-900/30 backdrop-blur-md shadow-[0_0_0_1px_rgba(148,163,184,.06)] " +
        className
      }
    >
      {children}
    </div>
  );
}
