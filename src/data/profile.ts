export type LinkItem = { label: string; href: string; icon?: string };
export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  city?: string;
  type?: "assistencial" | "gestao" | "qualidade" | "tecnologia";
  bullets: string[];
};

export type CourseItem = { title: string; org?: string; year?: string; area?: "assistencial" | "gestao" | "qualidade" | "tecnologia" };

export type ProjectItem = {
  name: string;
  tagline: string;
  stack: string[];
  highlights: string[];
  links?: LinkItem[];
};

export type Profile = {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  photo: string;
  cvPdf: string;

  quickFacts: { k: string; v: string }[];

  // Pilares (1 e 2 com ênfase – sem perder o 3)
  pillars: {
    assistencial: { title: string; bullets: string[] };
    gestao: { title: string; bullets: string[] };
    tecnologia: { title: string; bullets: string[] };
  };

  // Competências (visuais)
  skillsRadar: { skill: string; score: number }[];
  skillsBars: { area: string; score: number }[];

  experience: ExperienceItem[];
  education: { title: string; org?: string; year?: string }[];
  courses: CourseItem[];

  projects: ProjectItem[];

  // “NurseTec” como ecossistema / sites criados
  ecosystem: { name: string; desc: string; href?: string }[];

  links: LinkItem[];
};

export const profile: Profile = {
  name: "Luciano Pereira",
  title: "Enfermagem, Gestão & Tecnologia",
  subtitle:
    "Coordenador de Enfermagem (UTI) • Experiência assistencial em UTI/PS/Oncologia • Qualidade & Auditoria • Full‑stack (Python/React) com IA aplicada à saúde",
  location: "Brasil",
  photo: "/assets/luciano.jpg",
  cvPdf: "/assets/cv-luciano.pdf",

  quickFacts: [
    { k: "Atuação", v: "UTI Adulto • Pronto Socorro • Oncologia" },
    { k: "Gestão", v: "Coordenação • Supervisão • Processos • Indicadores" },
    { k: "Qualidade", v: "Auditoria • Segurança do Paciente • Melhoria contínua" },
    { k: "Tecnologia", v: "Python • React/Vite • SQLite • APIs • Dashboards" },
    { k: "IA", v: "Copilotos, automações e geração de insights clínicos/gestão" },
  ],

  pillars: {
    assistencial: {
      title: "Assistencial (Pilar 1)",
      bullets: [
        "Vivência sólida em UTI Adulto e Pronto Socorro, com foco em cuidado crítico, estabilização e segurança do paciente.",
        "Rotina com pacientes de alta complexidade, incluindo onco‑hematologia e condições clínicas/cirúrgicas.",
        "Organização do plantão: priorização, comunicação efetiva, passagem de plantão estruturada e continuidade do cuidado.",
      ],
    },
    gestao: {
      title: "Gestão (Pilar 2)",
      bullets: [
        "Coordenação/Supervisão de equipes multidisciplinares: dimensionamento, escalas, cobertura de faltas e padronização de fluxos.",
        "Gestão por indicadores e metas: produtividade, qualidade assistencial, eventos adversos e conformidade de processos.",
        "Treinamento, educação permanente e cultura de melhoria contínua (PDCA/5W2H, protocolos e checklists).",
      ],
    },
    tecnologia: {
      title: "Tecnologia (Pilar 3)",
      bullets: [
        "Desenvolvimento de soluções para a rotina hospitalar: formulários, dashboards, histórico de plantão e exportações (PDF/XLSX).",
        "Projetos com IA para organizar reuniões/aulas, gerar planos de ação e apoiar decisões com base em dados.",
        "Stack prática: React/Vite, Python/Flask, SQLite/Postgres, integração e automações.",
      ],
    },
  },

  skillsRadar: [
    { skill: "Assistência UTI/PS", score: 92 },
    { skill: "Gestão/Liderança", score: 88 },
    { skill: "Qualidade/Auditoria", score: 86 },
    { skill: "Dados & Indicadores", score: 82 },
    { skill: "Desenvolvimento", score: 80 },
    { skill: "IA aplicada", score: 78 },
  ],
  skillsBars: [
    { area: "Assistencial", score: 92 },
    { area: "Gestão", score: 88 },
    { area: "Qualidade", score: 86 },
    { area: "Tecnologia", score: 80 },
    { area: "IA", score: 78 },
  ],

  experience: [
    {
      role: "Coordenador de Enfermagem – UTI",
      org: "Hospital Santa Mônica",
      period: "Atual",
      type: "gestao",
      bullets: [
        "Coordenação de equipe, rotinas assistenciais e organização do plantão.",
        "Apoio à tomada de decisão com indicadores, auditorias internas e melhoria contínua.",
        "Padronização de fluxos, treinamento e alinhamento multiprofissional.",
      ],
    },
    {
      role: "Supervisor de Enfermagem – UTI Adulto e Pronto Socorro",
      org: "Experiência consolidada em hospital de grande porte",
      period: "Anos anteriores",
      type: "assistencial",
      bullets: [
        "Supervisão de assistência em unidades críticas, garantindo segurança e qualidade.",
        "Suporte à equipe em demandas complexas, eventos críticos e priorização clínica.",
        "Integração entre setores e comunicação com corpo clínico/apoio diagnóstico.",
      ],
    },
    {
      role: "Auditoria Intra‑hospitalar baseada em processos",
      org: "Atuação em qualidade",
      period: "Experiência prática",
      type: "qualidade",
      bullets: [
        "Análise de conformidade, glosas/processos e oportunidades de melhoria.",
        "Estruturação de formulários, banco de dados e relatórios para auditoria.",
        "Apoio a indicadores e planos de ação para reduzir falhas e retrabalho.",
      ],
    },
    {
      role: "Desenvolvedor (projetos próprios em saúde)",
      org: "NurseTec – ecossistema de soluções",
      period: "Em paralelo",
      type: "tecnologia",
      bullets: [
        "Sistemas web para plantão, NPS e gestão por indicadores.",
        "Dashboards e exportações (PDF/XLSX) com base em dados reais.",
        "Automação com IA para relatórios, insights e apoio a treinamentos.",
      ],
    },
  ],

  education: [
    { title: "Bacharelado em Enfermagem", org: "Formação em Enfermagem", year: "" },
  ],

  courses: [
    { title: "Urgência e Emergência (atuação/atualização)", area: "assistencial" },
    { title: "Terapia Intensiva / Cuidado crítico (prática e capacitações)", area: "assistencial" },
    { title: "Segurança do Paciente & Qualidade Assistencial", area: "qualidade" },
    { title: "Auditoria em Saúde / Auditoria hospitalar (processos)", area: "qualidade" },
    { title: "Gestão de Pessoas, Liderança e Rotinas de Enfermagem", area: "gestao" },
    { title: "Indicadores, melhoria contínua (PDCA/5W2H)", area: "gestao" },
    { title: "Python para automações e back‑end (Flask)", area: "tecnologia" },
    { title: "React/Vite para front‑end e dashboards", area: "tecnologia" },
    { title: "Banco de dados (SQLite/Postgres) e integrações", area: "tecnologia" },
  ],

  projects: [
    {
      name: "Quiz Arcade (Treinamentos em Enfermagem)",
      tagline: "Jogo estilo fliperama para treinamento de protocolos (sepse, AVC, dor torácica, etc.) com ranking e pontuação.",
      stack: ["Godot", "React", "JSON/CSV", "Áudio/SFX"],
      highlights: [
        "Perguntas por tema e perfil (enfermeiro, médico, técnico, multi)",
        "Leaderboard com nome, data e pontuação",
        "Suporte a joystick/teclado virtual (kiosk/treinamento)",
      ],
      links: [],
    },
    {
      name: "NPS / Feedback (Qualidade percebida)",
      tagline: "Coleta e dashboard de experiência (colaboradores/pacientes) com filtros e indicadores.",
      stack: ["React", "Firebase", "Dashboards"],
      highlights: ["Fluxo rápido de coleta", "Visualização por período/setor", "Base pronta para ações de melhoria"],
      links: [],
    },
    {
      name: "RiskMedic",
      tagline: "Gestão de riscos e qualidade: estrutura para análises (SIPOC/FMEA) e planos de ação organizados.",
      stack: ["Web App", "Indicadores", "Exportação"],
      highlights: ["Mapeamento de processos", "Planos de ação", "Histórico e auditoria de mudanças"],
      links: [],
    },
    {
      name: "Dimensionar",
      tagline: "Dimensionamento de enfermagem baseado em normativa (COFEN) para apoiar gestão e tomada de decisão.",
      stack: ["Python", "Web", "Cálculos", "Relatórios"],
      highlights: ["Entrada simplificada", "Resultados claros", "Relatórios para direção/coordenação"],
      links: [],
    },
  ],

  ecosystem: [
    { name: "NurseTec", desc: "Ecossistema de soluções digitais para enfermagem e gestão hospitalar." },
    { name: "Sites e sistemas criados", desc: "Portais, dashboards, formulários e automações (NPS, plantão, auditoria, escalas, dimensionamento)." },
  ],

  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Currículo (PDF)", href: "/assets/cv-luciano.pdf", icon: "download" },
  ],
};
