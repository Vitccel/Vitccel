// src/components/FaqSection.jsx

import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqSection({ title, faqData }) {
  // Usamos el estado para saber qué pregunta está abierta (guardamos su índice)
  const [openIndex, setOpenIndex] = useState(null);

  // Función para abrir/cerrar una pregunta
  const handleClick = (index) => {
    // Si la pregunta que se clickeó ya está abierta, la cerramos. Si no, la abrimos.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-40">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-sen text-[#0D486B]">{title}</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-200">
              {/* Pregunta (el botón que abre/cierra) */}
              <button
                onClick={() => handleClick(index)}
                className="w-full flex justify-between items-center text-left py-4 px-2"
              >
                <h3 className="text-lg font-sen font-medium text-gray-800">{item.question}</h3>
                <ExpandMoreIcon 
                  className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {/* Respuesta (se muestra u oculta con animación) */}
              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out
                  ${openIndex === index ? 'max-h-screen opacity-100 py-4 px-2' : 'max-h-0 opacity-0'}
                `}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}