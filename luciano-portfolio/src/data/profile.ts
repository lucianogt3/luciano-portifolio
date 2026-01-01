export type LinkItem = { label: string; href: string };
export type Metric = { label: string; value: string; hint?: string };
export type Project = {
  title: string;
  description: string;
  tags: string[];
  links: LinkItem[];
  highlight?: string;
};

export const profile = {
  name: "Luciano Pereira",
  headline: "Enfermagem + Tecnologia | Produtos, IA aplicada e soluções para gestão hospitalar",
  location: "Brasil",
  photo: "/assets/luciano.jpg",
  cvHref: "/assets/cv-luciano.pdf",

  // ajuste livre: deixe seus links oficiais
  links: [
    { label: "GitHub", href: "https://github.com/lucianogt3" },
    { label: "LinkedIn", href: "#" },
    { label: "Portfólio", href: "#" },
  ] as LinkItem[],

  metrics: [
    { label: "Foco", value: "UTI • Gestão • Qualidade", hint: "Operação + indicadores" },
    { label: "Stack", value: "React • Python • SQL", hint: "Front + Back + Dados" },
    { label: "Entrega", value: "Produtos prontos", hint: "Dashboards, formulários, automações" },
  ] as Metric[],

  about: [
    "Sou enfermeiro com atuação forte em UTI e gestão, e nos últimos meses venho transformando rotinas complexas em sistemas simples e rápidos — com foco em rastreabilidade, indicadores e produtividade.",
    "Tenho familiaridade prática com desenvolvimento web (React/Vite), back‑end com Python (Flask/Django), banco de dados (SQLite/Postgres), integrações e deploy (Nginx/Vercel/Render).",
    "Uso IA como acelerador: geração assistida de conteúdo, validações, automações e organização de processos — sem perder o olhar clínico e a segurança do paciente.",
  ],

  strengths: [
    { title: "Olhos de ouro", desc: "Atenção a detalhes, consistência e acabamento. Interface bonita + fluxo rápido." },
    { title: "Pensamento de processo", desc: "Transformo checklists e rotinas em sistemas com histórico, filtros e exportação." },
    { title: "Dados na prática", desc: "Indicadores e dashboards para direcionar decisões (qualidade, auditoria, produtividade)." },
  ],

  skillGroups: [
    {
      title: "Programação & Produto",
      items: ["React", "Vite", "TypeScript", "Python", "Flask", "Django", "API REST", "UX/UI", "Autenticação & permissões"],
    },
    {
      title: "Dados & Infra",
      items: ["SQLite", "PostgreSQL", "Firebase", "Supabase", "ETL básico", "Exportações (PDF/XLSX)", "Nginx", "Deploy (Vercel/Render)"],
    },
    {
      title: "IA aplicada",
      items: ["Prompts e fluxos", "Geração assistida", "Classificação/triagem", "Criação de conteúdos", "Automação de tarefas", "Validação de regras"],
    },
    {
      title: "Saúde & Gestão",
      items: ["UTI adulto", "Gestão de equipe", "Segurança do paciente", "Qualidade assistencial", "Auditoria", "Protocolos & checklist"],
    },
  ],

  projects: [
    {
      title: "Quiz Arcade (Treinamento gamificado)",
      highlight: "Jogo estilo fliperama para protocolos (ex.: sepse) com ranking e áudio.",
      description:
        "Projeto de educação em saúde com interface arcade, perguntas por tema, pontuação, streak, leaderboard e suporte a controles (teclado/joystick).",
      tags: ["React", "Vite", "TypeScript", "Gamificação", "IA"],
      links: [{ label: "Ver demo", href: "#" }, { label: "Repositório", href: "#" }],
    },
    {
      title: "NPS Web (Experiência do paciente)",
      highlight: "Coleta e análise de satisfação em tempo real.",
      description:
        "Formulário + painel com indicadores, filtros e exportação. Ideal para monitorar percepção do paciente/cliente por setor, período e tema.",
      tags: ["React", "Firebase", "Dashboard", "Indicadores"],
      links: [{ label: "Ver", href: "#" }, { label: "Docs", href: "#" }],
    },
    {
      title: "RiskMedic (Riscos e processos)",
      highlight: "Ferramentas para análise e mitigação (SIPOC/FMEA e planos de ação).",
      description:
        "Sistema voltado para gestão de riscos, padronização de processos e registro de ações — com trilhas, histórico e organização por área.",
      tags: ["Python", "Flask", "Processos", "Qualidade"],
      links: [{ label: "Ver", href: "#" }],
    },
    {
      title: "Dimensionar (COFEN 1/2024)",
      highlight: "Dimensionamento de enfermagem prático, com módulos e cobrança.",
      description:
        "Projeto para cálculo e apoio ao dimensionamento conforme normativa do COFEN, com fluxo guiado, relatórios e visão para coordenação/direção.",
      tags: ["Python", "Web", "Indicadores", "Saúde"],
      links: [{ label: "Ver", href: "#" }],
    },
  ] as Project[],
};
