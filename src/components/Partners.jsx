import React from 'react';

const partnersData = [
  { name: 'Microsoft Partner', logoUrl: '/assets/img/partners/microsoft-partner.png' },
  { name: 'Acronis', logoUrl: '/assets/img/partners/acronis.png' },
  { name: 'Aruba', logoUrl: '/assets/img/partners/Aruba.png' },
  { name: 'Kaspersky', logoUrl: '/assets/img/partners/kaspersky.png' },
  { name: 'Huawei', logoUrl: '/assets/img/partners/HUAWEI-logo.png' },
  { name: 'k365', logoUrl: '/assets/img/partners/Kaseya.png' },
];

const extendedPartners = [...partnersData, ...partnersData]; // Duplicamos para un bucle fluido

export default function Partners() {
  return (
    <section id="partners" className="py-12 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-bold text-[#091E3E] font-sen uppercase tracking-wider mb-12">
          Con la confianza de líderes de la industria
        </h3>
        
        {/* Contenedor principal del carrusel con máscara de degradado */}
        <div className="relative w-full overflow-hidden">
          {/* Degradado izquierdo para efecto fade-in */}
          <div className="absolute top-0 left-0 z-10 w-24 h-full bg-gradient-to-r from-white to-transparent" />

          {/* El div animado que contiene los logos */}
          <div className="flex animate-infinite-scroll group-hover:pause-animation">
            {extendedPartners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <img 
                  src={partner.logoUrl} 
                  alt={`Logo de ${partner.name}`}
                  className="h-10 md:h-12 max-w-none opacity-60 hover:opacity-100 transition-opacity duration-300" 
                />
              </div>
            ))}
          </div>

          {/* Degradado derecho para efecto fade-out */}
          <div className="absolute top-0 right-0 z-10 w-24 h-full bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}