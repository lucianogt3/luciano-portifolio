import React from 'react';

const Experience = () => {
  const jobs = [
    {
      role: "Gestor Hospitalar / Enfermeiro de UTI",
      company: "Gestão de Unidades Críticas",
      period: "Atual",
      description: "Liderança de equipas multidisciplinares e gestão de protocolos assistenciais. Responsável pela gestão de recursos (materiais e medicamentos), acompanhamento de indicadores de desempenho e qualidade para certificação ONA. Foco em assistência integrada e humanizada.",
      tags: ["Liderança", "Indicadores KPI", "ONA", "UTI Geral"]
    },
    {
      role: "Socorrista Militar",
      company: "Exército Brasileiro",
      period: "Jan 2008 - Jan 2012",
      description: "Atuação no suporte básico e avançado de vida em contexto militar, desenvolvendo competências críticas de decisão sob pressão, disciplina e resiliência operacional.",
      tags: ["Exército", "Socorrismo", "Resiliência"]
    }
  ];

  return (
    <section id="experience" className="py-16 border-t border-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Experiência Profissional</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {jobs.map((job, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-blue-600 py-2">
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-4 border-4 border-white shadow-sm"></div>
            <div className="mb-1 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
              <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{job.period}</span>
            </div>
            <p className="text-md font-medium text-gray-700 mb-2">{job.company}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, i) => (
                <span key={i} className="text-[10px] font-bold uppercase text-gray-500 bg-gray-100 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;