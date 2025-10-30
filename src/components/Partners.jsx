import React from 'react';

// Datos de los socios. Tenerlos en un array facilita su mantenimiento.
const partnersData = [
  { name: 'Microsoft Partner', logoUrl: '/assets/img/partners/microsoft-partner.png', link: '#' },
  { name: 'Acronis Partner', logoUrl: '/assets/img/partners/kaspersky.png', link: '#' },
  { name: 'Dade2 Partner', logoUrl: '/assets/img/partners/acronis-cloud.png', link: '#' },
  { name: 'VMware Partner', logoUrl: '/assets/img/partners/HUAWEI-logo.png', link: '#' },
];

export default function Partners() {
  return (
    <section id="partners" className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-40 text-center">
        {/* Usamos un H3 porque es un título de sección, pero no tan importante como los de servicios o por qué elegirnos */}
        <h3 className="text-xl font-bold text-[#091E3E] font-sen uppercase tracking-wider mb-8">
          Con la confianza de líderes de la industria
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {partnersData.map((partner) => (
            <a key={partner.name} href={partner.link} target="_blank" rel="noopener noreferrer" aria-label={partner.name}>
              <img 
                src={partner.logoUrl} 
                alt={`Logo de ${partner.name}`}
                className="h-10 md:h-16 opacity-60 hover:opacity-100 transition-opacity duration-300" 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}