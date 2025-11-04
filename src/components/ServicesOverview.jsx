import React from 'react';

import SecurityIcon from '@mui/icons-material/Security';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ApprovalIcon from '@mui/icons-material/Approval';
import LanIcon from '@mui/icons-material/Lan';

const servicesData = [
  {
    icon: <SecurityIcon style={{ fontSize: 48 }} className="text-[#06A3DA]" />,
    title: 'Ciberseguridad Avanzada',
    description: 'Protección integral de datos, anti-ransomware y recuperación ante desastres con Acronis.',
    link: '/servicios/ciberseguridad',
  },
  {
    icon: <CloudQueueIcon style={{ fontSize: 48 }} className="text-[#06A3DA]" />,
    title: 'Soluciones en la Nube',
    description: 'Servidores virtuales, backup cloud y soluciones gestionadas con nuestra alianza Dade2.',
    link: '/servicios/nube',
  },
  {
    icon: <ApprovalIcon style={{ fontSize: 48 }} className="text-[#06A3DA]" />,
    title: 'Licenciamiento de Software',
    description: 'Somos partners de Microsoft. Ofrecemos Microsoft 365, Azure y licencias por volumen.',
    link: '/servicios/licenciamiento',
  },
  {
    icon: <LanIcon style={{ fontSize: 48 }} className="text-[#06A3DA]" />,
    title: 'Infraestructura de Redes',
    description: 'Diseño e implementación de cableado estructurado y fibra óptica para máxima conectividad.',
    link: '/servicios/redes',
  },
];

export default function ServicesOverview() {
  return (
    <section id="servicios" className="py-20 bg-[#EEF9FF]">
      <div className="container mx-auto px-4 md:px-40 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#091E3E] font-sen">Soluciones Tecnológicas para el Desarrollo de su Empresa</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
          Desde la ciberseguridad hasta la infraestructura en la nube, optimizamos cada aspecto de su entorno tecnológico.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 text-left">
          {servicesData.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-sen text-[#0D486B] mb-2">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              <a href={service.link} className="text-[#06A3DA] hover:text-[#0582ab] font-bold mt-6 inline-block transition-colors">
                Conocer más →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}