import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-12 md:py-20 text-center animate-fade-in">
      <div className="inline-flex items-center justify-center w-32 h-32 md:w-40 md:h-40 mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
        <img 
          src="/assets/luciano.jpg" 
          alt="Luciano Lino - Enfermeiro Gestor"
          className="w-full h-full object-cover"
        />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Luciano Lino Pereira
      </h1>
      
      <div className="inline-flex flex-wrap gap-2 mb-6">
        <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
          Enfermeiro Gestor de UTI
        </span>
        <span className="px-4 py-1 bg-teal-100 text-teal-700 rounded-full font-medium">
          Especialista em Acreditação ONA
        </span>
        <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
          Em transição para HealthTech
        </span>
      </div>
      
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
        Transformando <span className="font-semibold text-blue-600">+10 anos de experiência</span> em gestão de UTIs 
        e processos hospitalares em <span className="font-semibold text-teal-600">soluções digitais inovadoras</span> 
        para o setor de saúde.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="#contact" 
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
        >
          Conectar para Colaborar
        </a>
        <a 
          href="/assets/cv-luciano.pdf"
          download
          className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
        >
          Baixar Currículo
        </a>
      </div>
    </section>
  );
};

export default Hero;
