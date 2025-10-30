import React from 'react';

export default function CtaSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-40">
        <div className="rounded-lg shadow-xl bg-[#091E3E] text-white p-12 text-center flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold font-sen">¿Listo para Potenciar su Infraestructura Tecnológica?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                Hablemos de sus necesidades. Ofrecemos una asesoría inicial sin costo para evaluar cómo la tecnología puede impulsar su negocio hacia el futuro.
            </p>
            <a 
                href="/contacto" 
                className="inline-block mt-8 bg-[#06A3DA] hover:bg-[#0582ab] text-white font-bold py-4 px-10 rounded-full transition-colors duration-300 text-lg shadow-lg hover:shadow-cyan-400/50"
            >
                Solicitar Asesoría Gratuita
            </a>
        </div>
      </div>
    </section>
  );
}