import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: 'Enfermeiro Gestor',
      company: 'Hospital Santa Helena - UTI',
      period: 'Fev 2018 - Dez 2024',
      location: 'Goiânia, GO',
      highlights: [
        'Gestão de equipe multidisciplinar em UTI adulto',
        'Liderança em processo de acreditação hospitalar (ONA)',
        'Auditoria e análise de indicadores de qualidade',
        'Implementação de protocolos de segurança do paciente'
      ],
      transitionNote: 'Desenvolvi a mentalidade analítica e de gestão de projetos que hoje aplico no desenvolvimento de software.'
    },
    {
      role: 'Enfermeiro Supervisor UTI/PS',
      company: 'Hospital do Coração de Goiás',
      period: 'Jul 2021 - Atual',
      location: 'Goiânia, GO',
      highlights: [
        'Supervisão de equipe de enfermagem em UTI e Pronto-Socorro',
        'Coordenação da distribuição de pacientes e gestão de leitos',
        'Desenvolvimento de planos de cuidados individualizados',
        'Participação em comitês de qualidade e segurança'
      ],
      transitionNote: 'A experiência em gestão de crises e tomada de decisão rápida é diretamente aplicável ao desenvolvimento ágil.'
    },
    {
      role: 'Enfermeiro Supervisor - UTI',
      company: 'Hospital de Urgências de Goiânia',
      period: 'Jan 2019 - Dez 2020',
      location: 'Goiânia, GO',
      highlights: [
        'Liderança de equipe em ambiente de alta complexidade',
        'Implementação de protocolo de Manchester na triagem',
        'Gestão de emergências médicas e coordenação de resposta',
        'Capacitação e treinamento da equipe'
      ],
      transitionNote: 'A habilidade de traduzir protocolos clínicos em fluxos de trabalho é essencial para criar UX eficientes em healthtech.'
    }
  ];

  return (
    <section id="experience" className="py-16">
      <h2 className="section-title">Experiência Profissional</h2>
      
      <div className="relative">
        {/* Linha do tempo */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 to-teal-200"></div>
        
        {experiences.map((exp, index) => (
          <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
            {/* Ponto na linha do tempo */}
            <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
            
            <div className="ml-10 md:ml-0">
              <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-200 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full font-medium">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 flex items-center gap-2">
                  <span>📍</span> {exp.location}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-blue-800 text-sm italic">
                    <strong>Ponte para Tech:</strong> {exp.transitionNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
