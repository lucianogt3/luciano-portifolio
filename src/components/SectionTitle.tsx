import React from "react";
type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};
export const SectionTitle: React.FC<Props> = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
}) => {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-2 ${alignCls}`}>
      {eyebrow ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-wide text-amber-200/90">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-slate-200/80">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};

export default SectionTitle;
