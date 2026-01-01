import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { SectionTitle } from "./components/SectionTitle";
import { SkillVisuals } from "./components/SkillVisuals";
import { Card } from "./components/Card";
import { Tag } from "./components/Tag";
import { Footer } from "./components/Footer";
import { profile } from "./data/profile";

function PillarCard({
  title,
  bullets,
  accent,
}: {
  title: string;
  bullets: string[];
  accent: string;
}) {
  return (
    <Card className="p-6 md:p-7">
      <div className="flex items-center gap-3">
        <span className={`h-2.5 w-2.5 rounded-full ${accent}`} />
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
          {title}
        </h3>
      </div>

      <ul className="mt-4 space-y-2 text-base md:text-[1.05rem] text-slate-200/95 leading-relaxed">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-300/70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-amber-400/40 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_15%_10%,rgba(59,130,246,.18),transparent_60%),radial-gradient(900px_500px_at_90%_15%,rgba(168,85,247,.16),transparent_60%),radial-gradient(1000px_700px_at_50%_100%,rgba(245,158,11,.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950" />
      </div>

      <Nav />
      <Hero />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        {/* Pilares */}
        <section id="sobre" className="pt-10 md:pt-14">
          <SectionTitle
            eyebrow="Perfil"
            title="Assistência + Gestão com tecnologia de apoio"
            subtitle="Você pediu 1 e 2 com ênfase associada ao 3: aqui o foco é a atuação assistencial e liderança, mantendo os projetos e o lado dev como acelerador de resultados."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <PillarCard
              title={profile.pillars.assistencial.title}
              bullets={profile.pillars.assistencial.bullets}
              accent="bg-sky-400"
            />
            <PillarCard
              title={profile.pillars.gestao.title}
              bullets={profile.pillars.gestao.bullets}
              accent="bg-amber-400"
            />
            <PillarCard
              title={profile.pillars.tecnologia.title}
              bullets={profile.pillars.tecnologia.bullets}
              accent="bg-violet-400"
            />
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card className="p-6 md:p-7">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                O que eu entrego no dia a dia
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Organização de plantão",
                  "Cuidado crítico",
                  "Gestão de equipe",
                  "Indicadores",
                  "Auditoria/Qualidade",
                  "Treinamento",
                  "Protocolos & checklists",
                ].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <p className="mt-5 text-base md:text-[1.05rem] text-slate-200/95 leading-relaxed">
                Minha base é assistência e gestão. A tecnologia entra para dar
                escala: registro mais rápido, histórico, dashboards e relatórios
                que facilitam decisões e melhoria contínua.
              </p>
            </Card>

            <Card className="p-6 md:p-7">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                Competências (visual)
              </h3>
              <p className="mt-3 text-base md:text-[1.05rem] text-slate-200/90 leading-relaxed">
                Radar e barras destacando os pilares — com ênfase em assistencial
                e gestão (sem perder o tech/IA).
              </p>
              <div className="mt-5">
                <SkillVisuals />
              </div>
            </Card>
          </div>
        </section>

        {/* Experiência */}
        <section id="experiencia" className="pt-14 md:pt-18">
          <SectionTitle
            eyebrow="Trajetória"
            title="Experiência profissional"
            subtitle="Resumo completo (sem cortar). A versão detalhada está no PDF."
          />

          <div className="mt-8 grid gap-5">
            {profile.experience.map((e) => (
              <Card key={e.role} className="p-6 md:p-7">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                      {e.role}
                    </h3>
                    <p className="text-slate-200/85 text-base md:text-[1.05rem]">
                      {e.org}
                    </p>
                  </div>
                  <p className="text-slate-300/80 text-sm md:text-base">
                    {e.period}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-base md:text-[1.05rem] text-slate-200/95 leading-relaxed">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-300/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Cursos */}
        <section id="cursos" className="pt-14 md:pt-18">
          <SectionTitle
            eyebrow="Formação"
            title="Cursos & atualizações"
            subtitle="Organizado por área para valorizar assistência e gestão."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { label: "Assistencial", key: "assistencial" as const, accent: "bg-sky-400/15 border-sky-300/25" },
              { label: "Gestão/Qualidade", key: "gestao" as const, accent: "bg-amber-400/15 border-amber-300/25" },
              { label: "Tecnologia", key: "tecnologia" as const, accent: "bg-violet-400/15 border-violet-300/25" },
            ].map((col) => (
              <Card key={col.key} className={`p-6 md:p-7 border ${col.accent}`}>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {col.label}
                </h3>
                <ul className="mt-4 space-y-2 text-base md:text-[1.05rem] text-slate-200/95 leading-relaxed">
                  {profile.courses
                    .filter((c) =>
                      col.key === "gestao"
                        ? c.area === "gestao" || c.area === "qualidade"
                        : c.area === col.key
                    )
                    .map((c) => (
                      <li key={c.title} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-300/70" />
                        <span>{c.title}</span>
                      </li>
                    ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Projetos */}
        <section id="projetos" className="pt-14 md:pt-18">
          <SectionTitle
            eyebrow="Tecnologia aplicada"
            title="Principais projetos (os ‘tops’)"
            subtitle="Mantive o foco em: Game, NPS, RiskMedic e Dimensionar."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {profile.projects.map((p) => (
              <Card key={p.name} className="p-6 md:p-7">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-2 text-base md:text-[1.05rem] text-slate-200/90 leading-relaxed">
                  {p.tagline}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>

                <ul className="mt-5 space-y-2 text-base md:text-[1.05rem] text-slate-200/95 leading-relaxed">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-300/70" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* NurseTec / Ecossistema */}
        <section id="nursetec" className="pt-14 md:pt-18">
          <SectionTitle
            eyebrow="Marca & entregas"
            title="NurseTec (sites e soluções)"
            subtitle="Aqui a NurseTec aparece como ecossistema de sites/sistemas criados — não como seu currículo."
          />

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {profile.ecosystem.map((it) => (
              <Card key={it.name} className="p-6 md:p-7">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {it.name}
                </h3>
                <p className="mt-2 text-base md:text-[1.05rem] text-slate-200/90 leading-relaxed">
                  {it.desc}
                </p>
              </Card>
            ))}

            <Card className="p-6 md:p-7">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                Currículo completo (PDF)
              </h3>
              <p className="mt-2 text-base md:text-[1.05rem] text-slate-200/90 leading-relaxed">
                Se quiser imprimir, enviar ou anexar em processos seletivos:
              </p>
              <a
                href={profile.cvPdf}
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-base font-semibold hover:bg-white/15 transition border border-white/10"
              >
                Baixar CV em PDF
              </a>

              <div className="mt-5 text-sm md:text-base text-slate-300/85">
                Dica: no celular, abre direto no navegador.
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
