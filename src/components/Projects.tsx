import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Dashboard de Indicadores de UTI',
      description: 'Aplicação web para visualização de KPIs críticos de terapia intensiva, simulando tomada de decisão baseada em dados em tempo real.',
      tech: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
      features: [
        'Visualização de taxas de infecção e ocupação',
        'Monitoramento de tempo de permanência',
        'Alertas para indicadores fora da meta',
        'Exportação de relatórios'
      ],
      github: '#',
      demo: '#',
      image: '/assets/projects/dashboard-preview.jpg',
      accentColor: 'bg-blue-100'
    },
    {
      title: 'Sistema de Triagem - Protocolo de Manchester',
      description: 'Aplicação interativa que implementa a lógica do protocolo de Manchester para classificação de prioridade em pronto-socorro.',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Algoritmos'],
      features: [
        'Questionário adaptativo',
        'Classificação automática por cores',
        'Registro de tempo de espera',
        'Interface otimizada para uso rápido'
      ],
      github: '#',
      demo: '#',
      image: '/assets/projects/triagem-preview.jpg',
      accentColor: 'bg-teal-100'
    },
    {
      title: 'Portfólio Profissional',
      description: 'Site pessoal desenvolvido para apresentar minha transição de carreira e conectar com oportunidades em HealthTech.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      features: [
        'Design responsivo e acessível',
        'Otimização de performance',
        'SEO para recrutamento',
        'Integração com PDF do currículo'
      ],
      github: 'https://github.com/lucianogt3/luciano-portifolio',
      demo: '#',
      image: '',
      accentColor: 'bg-purple-100'
    }
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="section-title">Projetos em HealthTech</h2>
      <p className="text-gray-600 mb-12 max-w-3xl">
        Projetos desenvolvidos para aplicar a lógica clínica e de gestão em soluções tecnológicas:
      </p>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className={`h-48 ${project.accentColor} flex items-center justify-center`}>
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-5xl opacity-30">
                  {index === 0 ? '📊' : index === 1 ? '🏥' : '👨‍💼'}
                </div>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Funcionalidades Principais:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  className="flex-1 py-2 text-center border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Código
                </a>
                <a 
                  href={project.demo} 
                  className="flex-1 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
