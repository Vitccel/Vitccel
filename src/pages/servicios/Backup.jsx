// src/pages/servicios/Backup.jsx (Versión final con FAQ)

import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../../components/PageBanner';
import CtaSection from '../../components/CtaSection';
import FaqSection from '../../components/FaqSection'; // 1. IMPORTAMOS EL COMPONENTE

// Iconos para los beneficios
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import RestorePageIcon from '@mui/icons-material/RestorePage';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import DevicesIcon from '@mui/icons-material/Devices';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import GppGoodIcon from '@mui/icons-material/GppGood';

const benefitsData = [
  { icon: <CloudDoneIcon sx={{ fontSize: 40 }} />, title: "Respaldo Híbrido y Flexible", description: "Proteja sus datos tanto en la nube como en almacenamiento local, garantizando una estrategia de backup 3-2-1 robusta y a prueba de fallos." },
  { icon: <RestorePageIcon sx={{ fontSize: 40 }} />, title: "Recuperación Rápida y Granular", description: "Restaure cualquier cosa, desde un único archivo hasta un servidor completo, en minutos. Minimice el tiempo de inactividad (RTO) y la pérdida de datos (RPO)." },
  { icon: <GppGoodIcon sx={{ fontSize: 40 }} />, title: "Protección Anti-Ransomware", description: "Nuestras copias de seguridad son inmutables y están protegidas por IA, asegurando que sus respaldos no puedan ser cifrados ni eliminados por ciberatacantes." },
  { icon: <DevicesIcon sx={{ fontSize: 40 }} />, title: "Cobertura Universal", description: "Respaldamos todo su entorno: servidores físicos y virtuales, estaciones de trabajo (Windows, Mac), documentos y aplicaciones en la nube como Microsoft 365." },
  { icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />, title: "Pruebas de Recuperación", description: "Validamos la integridad de sus copias de seguridad con pruebas de recuperación automatizadas, dándole la certeza de que sus datos son recuperables cuando los necesite." },
  { icon: <AllInclusiveIcon sx={{ fontSize: 40 }} />, title: "Automatización Completa", description: "Configure sus políticas de respaldo una vez y deje que nuestro sistema se encargue del resto. Reciba informes y alertas automáticas para una total tranquilidad." },
];

const breadcrumbs = [
  { text: 'Inicio', link: '/' },
  { text: 'Servicios', link: '/servicios' },
  { text: 'Backup & Recovery', link: '/servicios/backup' },
];

// 2. CREAMOS LOS DATOS PARA LA SECCIÓN DE FAQ
const backupFaqData = [
  {
    question: "¿Qué es el tiempo de recuperación (RTO) y el objetivo de punto de recuperación (RPO)?",
    answer: "El RTO (Recovery Time Objective) es el tiempo máximo que su empresa puede estar inactiva tras un desastre. Nuestro objetivo es que sea de minutos. El RPO (Recovery Point Objective) es la cantidad máxima de datos que puede permitirse perder. Con nuestros respaldos continuos, el RPO también se reduce a minutos, no horas."
  },
  {
    question: "¿Pueden respaldar mi información de Microsoft 365 (emails, OneDrive)?",
    answer: "Sí. Es un error común pensar que Microsoft se encarga del respaldo a largo plazo. Ofrecemos una solución específica para respaldar todos sus datos de Microsoft 365, incluyendo buzones de Exchange Online, archivos de SharePoint y OneDrive, protegiéndole contra borrados accidentales o maliciosos."
  },
  {
    question: "¿Qué es una copia de seguridad inmutable?",
    answer: "Una copia de seguridad inmutable es aquella que no puede ser alterada, cifrada o eliminada una vez creada, ni siquiera por un administrador. Esta es su última línea de defensa contra ataques de ransomware, ya que garantiza que siempre tendrá una copia limpia y recuperable de sus datos."
  }
];

export default function Backup() {
  // 3. GENERAMOS EL SCHEMA JSON-LD PARA LA FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": backupFaqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Backup y Recuperación de Desastres en la Nube | Vitccel</title>
        <meta name="description" content="Asegure la continuidad de su negocio con soluciones de backup en la nube. Protegemos servidores, Microsoft 365 y estaciones de trabajo contra pérdida de datos y ransomware." />
        
        {/* Schema para el Servicio (existente) */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Respaldo en la Nube y Recuperación de Desastres",
            "name": "Backup & Recovery",
            "description": "Aseguramos la continuidad del negocio con soluciones de backup en la nube para servidores, Microsoft 365 y estaciones de trabajo.",
            "provider": { "@type": "LocalBusiness", "name": "Vitccel" },
            "areaServed": { "@type": "Country", "name": "Colombia" }
          }
        `}
        </script>

        {/* Schema para la FAQ (nuevo) */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

<PageBanner title="Backup & Recovery" breadcrumbs={breadcrumbs} backgroundImage="/assets/img/Backup-recovery.png" />

      <section className="container mx-auto py-20 px-4 md:px-40 text-center">
        <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Su Póliza de Seguro Digital</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          Un desastre puede ocurrir en cualquier momento: un error humano, una falla de hardware o un ciberataque. Con nuestras soluciones de respaldo y recuperación, garantizamos que su información crítica esté siempre segura y disponible para ser restaurada al instante.
        </p>
      </section>

      <section className="bg-[#EEF9FF]">
          <div className="container mx-auto py-20 px-4 md:px-40">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Características de Nuestro Servicio</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefitsData.map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col text-center items-center">
                  <div className="text-[#06A3DA] mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold font-sen text-[#0D486B] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 flex-grow">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-40 text-center">
          <h2 className="text-2xl font-bold text-[#091E3E] font-sen mb-8">
            Tecnología de Respaldo Confiable y Segura
          </h2>
          <div className="flex justify-center items-center gap-x-12">
            <img src="/assets/img/partners/acronis.png" alt="Logo de Acronis Cyber Protect Cloud" className="h-20" />
            <img src="/assets/img/partners/microsoft-partner.png" alt="Logo de Microsoft Partner" className="h-12" />
          </div>
        </div>
      </section>

      {/* 4. AÑADIMOS EL NUEVO COMPONENTE FAQ */}
      <FaqSection title="Preguntas Frecuentes sobre Backup & Recovery" faqData={backupFaqData} />

      <CtaSection />
    </>
  );
}