import React from 'react';

const Skills: React.FC = () => {
  const healthcareSkills = [
    'Gestão de UTI e Emergência', 'Acreditação Hospitalar (ONA)', 'Auditoria em Saúde',
    'Gestão de Equipes Multidisciplinares', 'Protocolos Clínicos', 'Indicadores de Qualidade',
    'Segurança do Paciente', 'Processos Hospitalares', 'Treinamento e Capacitação'
  ];

  const techSkills = [
    'React & TypeScript', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS',
    'Git & GitHub', 'Análise de Dados', 'Metodologias Ágeis', 'UX/UI Básico',
    'Lógica de Programação'
  ];

  const transferableSkills = [
    'Gestão de Projetos Complexos', 'Tomada de Decisão sob Pressão', 'Análise Crítica de Dados',
    'Comunicação Multidisciplinar', 'Liderança de Equipes', 'Resolução de Problemas',
    'Pensamento Sistêmico', 'Melhoria Contínua (PDCA)', 'Gestão de Processos'
  ];

  return (
    <section id="skills" className="py-16">
      <h2 className="section-title">Competências</h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Saúde */}
        <div className="project-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🏥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Experiência em Saúde</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {healthcareSkills.map((skill, index) => (
              <span key={index} className="skill-badge bg-red-50 text-red-700">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tecnologia */}
        <div className="project-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Tecnologia (Em Desenvolvimento)</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {techSkills.map((skill, index) => (
              <span key={index} className="skill-badge bg-blue-50 text-blue-700">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Transferíveis */}
        <div className="project-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">Competências Transferíveis</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {transferableSkills.map((skill, index) => (
              <span key={index} className="skill-badge bg-green-50 text-green-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
