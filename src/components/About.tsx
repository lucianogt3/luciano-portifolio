import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 animate-slide-up">
      <h2 className="section-title">Minha Jornada</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl font-medium mb-6">
              Por mais de uma década, geri equipes e processos em <strong>Unidades de Terapia Intensiva</strong>, 
              onde decisões baseadas em dados e processos rigorosos são fundamentais.
            </p>
            
            <p className="mb-4">
              Liderava a auditoria de indicadores críticos e projetos de <strong>acreditação hospitalar (ONA)</strong>, 
              garantindo os mais altos padrões de qualidade e segurança do paciente.
            </p>
            
            <p className="mb-4">
              Agora, direciono essa mesma paixão por <strong>melhoria contínua, análise de dados e gestão 
              de processos complexos</strong> para o universo da tecnologia.
            </p>
            
            <p className="font-semibold text-blue-700">
              Busco atuar como ponte entre a expertise clínica e o desenvolvimento tecnológico, 
              criando soluções digitais que realmente impactem a qualidade da assistência à saúde.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Objetivo Profissional</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Product Manager em HealthTech</h4>
                <p className="text-gray-600">Traduzir necessidades clínicas em requisitos de produto</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Analista de Dados em Saúde</h4>
                <p className="text-gray-600">Transformar dados clínicos em insights acionáveis</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Desenvolvedor HealthTech</h4>
                <p className="text-gray-600">Construir aplicações que melhoram o fluxo assistencial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
