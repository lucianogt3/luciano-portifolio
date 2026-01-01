import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bacharel em Enfermagem',
      institution: 'Universidade Salgado de Oliveira',
      year: '2016',
      type: 'Graduação'
    },
    {
      degree: 'Pós-graduação em Terapia Intensiva Geral',
      institution: 'Centro Goiano de Estudo e Pesquisa (CGESP)',
      year: '2017',
      type: 'Pós-graduação'
    },
    {
      degree: 'Pós-graduação em Cardiologia e Hemodinâmica',
      institution: 'Centro Goiano de Estudo e Pesquisa (CGESP)',
      year: '2025',
      type: 'Pós-graduação'
    },
    {
      degree: 'Gestão Hospitalar',
      institution: 'Faculdade Lions',
      year: '2011',
      type: 'Especialização'
    }
  ];

  const courses = [
    'Acreditação Hospitalar ONA',
    'Segurança do Paciente e Qualidade',
    'Liderança Ágil em Saúde',
    'Desenvolvimento de Times de Alta Performance',
    'React & TypeScript (em andamento)',
    'JavaScript Moderno (ES6+)'
  ];

  return (
    <section id="education" className="py-16">
      <h2 className="section-title">Formação e Certificações</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Formação Acadêmica */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="p-2 bg-blue-100 rounded-lg">🎓</span>
            Formação Acadêmica
          </h3>
          
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index} className="project-card p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-gray-900">{item.degree}</h4>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {item.year}
                  </span>
                </div>
                <p className="text-gray-700 mb-3">{item.institution}</p>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Cursos e Certificações */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="p-2 bg-teal-100 rounded-lg">📜</span>
            Cursos e Certificações
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                    <span className="text-teal-600">✓</span>
                  </div>
                  <span className="font-medium text-gray-900">{course}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Destaque para Transição */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl border border-blue-200">
            <h4 className="text-lg font-bold text-gray-900 mb-3">🎯 Foco Atual na Transição</h4>
            <p className="text-gray-700 mb-4">
              Concentrando esforços no desenvolvimento de habilidades técnicas para complementar minha expertise em saúde:
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-white text-blue-700 rounded-full font-medium border border-blue-200">
                React & TypeScript
              </span>
              <span className="px-4 py-2 bg-white text-blue-700 rounded-full font-medium border border-blue-200">
                Análise de Dados
              </span>
              <span className="px-4 py-2 bg-white text-blue-700 rounded-full font-medium border border-blue-200">
                Product Management
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
