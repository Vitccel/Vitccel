// src/pages/servicios/Backup.jsx

import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../../components/PageBanner';
import CtaSection from '../../components/CtaSection';

// Importamos iconos para los beneficios de Backup & Recovery
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import DevicesIcon from '@mui/icons-material/Devices';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GppGoodIcon from '@mui/icons-material/GppGood';

// Array de beneficios específicos para Backup & Recovery
const benefitsData = [
  {
    icon: <CloudDoneIcon sx={{ fontSize: 40 }} />,
    title: "Respaldo Híbrido y Flexible",
    description: "Proteja sus datos tanto en la nube como en almacenamiento local, garantizando una estrategia de backup 3-2-1 robusta y a prueba de fallos."
  },
  {
    icon: <RestorePageIcon sx={{ fontSize: 40 }} />,
    title: "Recuperación Rápida y Granular",
    description: "Restaure cualquier cosa, desde un único archivo hasta un servidor completo, en minutos. Minimice el tiempo de inactividad (RTO) y la pérdida de datos (RPO)."
  },
  {
    icon: <GppGoodIcon sx={{ fontSize: 40 }} />,
    title: "Protección Anti-Ransomware",
    description: "Nuestras copias de seguridad son inmutables y están protegidas por IA, asegurando que sus respaldos no puedan ser cifrados ni eliminados por ciberatacantes."
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 40 }} />,
    title: "Cobertura Universal",
    description: "Respaldamos todo su entorno: servidores físicos y virtuales, estaciones de trabajo (Windows, Mac), documentos y aplicaciones en la nube como Microsoft 365."
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
    title: "Pruebas de Recuperación",
    description: "Validamos la integridad de sus copias de seguridad con pruebas de recuperación automatizadas, dándole la certeza de que sus datos son recuperables cuando los necesite."
  },
  {
    icon: <AllInclusiveIcon sx={{ fontSize: 40 }} />,
    title: "Automatización Completa",
    description: "Configure sus políticas de respaldo una vez y deje que nuestro sistema se encargue del resto. Reciba informes y alertas automáticas para una total tranquilidad."
  },
];

const breadcrumbs = [
  { text: 'Inicio', link: '/' },
  { text: 'Servicios', link: '/servicios' },
  { text: 'Backup & Recovery', link: '/servicios/backup' },
];

export default function Backup() {
  return (
    <>
      <Helmet>
        <title>Backup y Recuperación de Desastres en la Nube | Vitccel</title>
        <meta
          name="description"
          content="Asegure la continuidad de su negocio con soluciones de backup en la nube. Protegemos servidores, Microsoft 365 y estaciones de trabajo contra pérdida de datos y ransomware."
        />
      </Helmet>

      <PageBanner
        title="Backup & Recovery"
        breadcrumbs={breadcrumbs}
      />
      {/* --- Sección de Introducción --- */}
      <section className="container mx-auto py-20 px-4 md:px-40 text-center">
        <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Su Póliza de Seguro Digital</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          Un desastre puede ocurrir en cualquier momento: un error humano, una falla de hardware o un ciberataque. Con nuestras soluciones de respaldo y recuperación, garantizamos que su información crítica esté siempre segura y disponible para ser restaurada al instante.
        </p>
      </section>

      {/* --- Grid de Beneficios --- */}
      <section className="bg-[#EEF9FF]">
        <div className="container mx-auto py-20 px-4 md:px-40">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Características de Nuestro Servicio</h2>
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
            Tecnología de Respaldo Confiable y Segura
          </h2>
          <div className="flex justify-center items-center gap-x-12">
            <img src="/assets/img/partners/acronis-partner.png" alt="Logo de Acronis Cyber Protect Cloud" className="h-20" />
            <img src="/assets/img/partners/microsoft-partner.png" alt="Logo de Microsoft Partner" className="h-12" />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
} 