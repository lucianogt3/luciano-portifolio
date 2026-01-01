import React from 'react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: '📧',
      label: 'E-mail',
      value: 'enf.lucianolino@gmail.com',
      link: 'mailto:enf.lucianolino@gmail.com'
    },
    {
      icon: '📱',
      label: 'Telefone/WhatsApp',
      value: '(62) 9 8631-1129',
      link: 'https://wa.me/5562986311129'
    },
    {
      icon: '📍',
      label: 'Localização',
      value: 'Goiânia, Goiás',
      link: null
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/lucianolino',
      link: 'https://linkedin.com/in/lucianolino'
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/lucianogt3',
      link: 'https://github.com/lucianogt3'
    }
  ];

  return (
    <section id="contact" className="py-16">
      <h2 className="section-title">Vamos Conectar</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Interessado em colaborar em projetos de HealthTech?
          </h3>
          
          <p className="text-gray-700 mb-8 leading-relaxed">
            Estou aberto a oportunidades onde possa contribuir com minha experiência em gestão de saúde 
            para o desenvolvimento de soluções tecnológicas inovadoras. Se você trabalha em:
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
              <span className="text-gray-700">Startups ou empresas de HealthTech</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
              <span className="text-gray-700">Hospitais em transformação digital</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
              <span className="text-gray-700">Projetos de análise de dados em saúde</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600">✓</span>
              <span className="text-gray-700">Desenvolvimento de produtos para saúde</span>
            </li>
          </ul>
          
          <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-blue-800 font-medium">
              Vamos conversar sobre como posso agregar valor ao seu projeto ou equipe!
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-8">Informações de Contato</h4>
          
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{info.label}</p>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-medium">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <a 
              href="/assets/cv-luciano.pdf"
              download
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              📄 Baixar Currículo Completo (PDF)
            </a>
            <p className="text-sm text-gray-500 text-center mt-3">
              Inclui experiência detalhada, certificações e referências
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
