// src/pages/servicios/Seguridad.jsx

import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../../components/PageBanner';
import CtaSection from '../../components/CtaSection';

// Importamos iconos relevantes para los beneficios de ciberseguridad
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import ShieldIcon from '@mui/icons-material/Shield';
import PolicyIcon from '@mui/icons-material/Policy';
import HubIcon from '@mui/icons-material/Hub';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import BackupIcon from '@mui/icons-material/Backup';

// Array de beneficios específicos para Ciberseguridad
const benefitsData = [
  {
    icon: <ShieldIcon sx={{ fontSize: 40 }} />,
    title: "Defensa contra Ransomware",
    description: "Utilizamos IA para detectar y detener ataques de ransomware en tiempo real, protegiendo sus archivos y sistemas críticos antes de que sean comprometidos."
  },
  {
    icon: <SecurityUpdateGoodIcon sx={{ fontSize: 40 }} />,
    title: "Protección de Día Cero",
    description: "Nuestras soluciones proactivas bloquean amenazas desconocidas y malware emergente, defendiendo su infraestructura incluso contra ataques nunca antes vistos."
  },
  {
    icon: <HubIcon sx={{ fontSize: 40 }} />,
    title: "Respuesta Avanzada (EDR, XDR)",
    description: "Implementamos controles de Detección y Respuesta en Endpoints (EDR) y Detección y Respuesta Extendida (XDR) para una visibilidad y respuesta automatizada ante incidentes."
  },
  {
    icon: <BackupIcon sx={{ fontSize: 40 }} />,
    title: "Backup y Ciberseguridad Integrados",
    description: "Unificamos las copias de seguridad y la protección antimalware en una única consola, garantizando que sus respaldos estén siempre limpios y seguros."
  },
  {
    icon: <FindInPageIcon sx={{ fontSize: 40 }} />,
    title: "Gestión de Vulnerabilidades",
    description: "Realizamos análisis proactivos para identificar y corregir debilidades en su sistema, fortaleciendo su postura de seguridad y reduciendo la superficie de ataque."
  },
  {
    icon: <PolicyIcon sx={{ fontSize: 40 }} />,
    title: "Simplificación de la Gestión",
    description: "Administre toda su estrategia de ciberseguridad y respaldo de datos desde una consola centralizada, simplificando la operación y mejorando la eficiencia."
  },
];

export default function Seguridad() {
  return (
    <>
      <Helmet>
        <title>Ciberseguridad Avanzada para Empresas en Colombia | Vitccel</title>
        <meta 
          name="description" 
          content="Proteja su negocio contra ransomware y amenazas de día cero con Acronis Cyber Protect. Ofrecemos soluciones EDR, XDR y backup integrado para una defensa total."
        />
      </Helmet>

      <PageBanner title="Ciberseguridad Avanzada" />

      {/* --- Sección de Introducción --- */}
      <section className="container mx-auto py-20 px-4 md:px-40 text-center">
        <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Defensa Proactiva para un Mundo Digital Hostil</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          En el panorama de amenazas actual, un antivirus tradicional ya no es suficiente. Ofrecemos una solución integral de ciberprotección que unifica la seguridad, el respaldo de datos y la gestión para blindar cada aspecto de su infraestructura.
        </p>
      </section>

      {/* --- Grid de Beneficios --- */}
      <section className="bg-[#EEF9FF]">
          <div className="container mx-auto py-20 px-4 md:px-40">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Capacidades de Nuestra Solución</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefitsData.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col text-center items-center">
                  <div className="text-[#06A3DA] mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold font-sen text-[#0D486B] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 flex-grow">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* --- Sección de Aliados Tecnológicos --- */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-40 text-center">
          <h2 className="text-2xl font-bold text-[#091E3E] font-sen mb-8">
            Impulsado por el Líder Mundial en Ciberprotección
          </h2>
          <div className="flex justify-center items-center">
            {/* Damos protagonismo a Acronis */}
            <img src="/assets/img/partners/acronis-partner.png" alt="Logo de Acronis Cyber Protect Cloud" className="h-20" />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}