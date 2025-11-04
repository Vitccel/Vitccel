// src/components/ServicesOverview.jsx (Versión actualizada)

import React from 'react';
import { Link } from 'react-router-dom'; // 1. IMPORTAMOS Link PARA LA NAVEGACIÓN

// Importamos todos los iconos necesarios para los 6 servicios
import SecurityIcon from '@mui/icons-material/Security';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ArticleIcon from '@mui/icons-material/Article'; // Icono mejorado para Licenciamiento
import LanIcon from '@mui/icons-material/Lan';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'; // Icono para Backup
import SupportAgentIcon from '@mui/icons-material/SupportAgent'; // Icono para Soporte

// 2. ACTUALIZAMOS EL ARRAY CON LOS 6 SERVICIOS
const servicesData = [
  {
    icon: <SecurityIcon sx={{ fontSize: 48 }} className="text-[#06A3DA]" />,
    title: 'Ciberseguridad Avanzada',
    description: 'Protección integral anti-ransomware y recuperación ante desastres con Acronis.',
    link: '/servicios/seguridad',
  },
  {
    icon: <CloudQueueIcon sx={{ fontSize: 48 }} className="text-[#06A3DA]" />,
    title: 'Soluciones en la Nube',
    description: 'Servidores virtuales IaaS de alto rendimiento, escalables y seguros para su operación.',
    link: '/servicios/nube',
  },
  {
    icon: <CloudUploadIcon sx={{ fontSize: 48 }} className="text-[#06A3DA]" />,
    title: 'Backup & Recovery',
    description: 'Asegure la continuidad de su negocio con copias de seguridad automáticas y confiables.',
    link: '/servicios/backup',
  },
  {
    icon: <LanIcon sx={{ fontSize: 48 }} className="text-[#06A3DA]" />,
    title: 'Infraestructura de Redes',
    description: 'Diseño e implementación de cableado estructurado y fibra óptica para máxima conectividad.',
    link: '/servicios/redes',
  },
  {
    icon: <ArticleIcon sx={{ fontSize: 48 }} className="text-[#06A3DA]" />,
    title: 'Licenciamiento de Software',
    description: 'Somos partners de Microsoft. Optimizamos sus recursos y aseguramos la legalidad de su software.',
    link: '/servicios/licencias',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 48 }} className="text-[#06A3DA]" />,
    title: 'Soporte de TI',
    description: 'Mesa de ayuda y servicios gestionados para mantener su operación funcionando sin interrupciones.',
    link: '/servicios/soporte',
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

        {/* Usamos un grid que se adapta mejor a 6 elementos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
          {servicesData.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-sen text-[#0D486B] mb-2">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>

              {/* Usamos Link en lugar de <a> para navegación interna */}
              <Link to={service.link} className="text-[#06A3DA] hover:text-[#0582ab] font-bold mt-6 inline-block transition-colors">
                Conocer más →
              </Link>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}