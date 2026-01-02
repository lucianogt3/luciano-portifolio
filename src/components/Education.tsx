import React from 'react';

const Education = () => {
  const items = [
    { type: "Pós-graduação", title: "Urgência e Emergência", school: "CGESP", year: "2025" },
    { type: "Pós-graduação", title: "Terapia Intensiva Geral", school: "CGESP", year: "2024" },
    { type: "Bacharelado", title: "Enfermagem", school: "Universo, Brasil", year: "2017" },
    { type: "Certificação", title: "Simpósio Terapia Intensiva (SOTIEGO)", school: "SOTIEGO", year: "2023" }
  ];

  return (
    <section id="education" className="py-16 border-t border-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Educação & Certificações</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-lg mr-4">
              {item.year.slice(-2)}
            </div>
            <div>
              <p className="text-[10px] font-bold text-blue-500 uppercase">{item.type}</p>
              <h3 className="font-bold text-gray-800 leading-tight">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.school}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;