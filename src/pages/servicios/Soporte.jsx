// src/pages/servicios/Soporte.jsx (Versión final con FAQ)

import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../../components/PageBanner';
import CtaSection from '../../components/CtaSection';
import FaqSection from '../../components/FaqSection'; // 1. IMPORTAMOS EL COMPONENTE

// Iconos para los beneficios
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import TerminalIcon from '@mui/icons-material/Terminal';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

const benefitsData = [
  { icon: <SupportAgentIcon sx={{ fontSize: 40 }} />, title: "Mesa de Ayuda (Help Desk)", description: "Un punto único de contacto para que sus empleados resuelvan cualquier incidencia técnica de forma rápida y eficiente, minimizando el tiempo de inactividad." },
  { icon: <HealthAndSafetyIcon sx={{ fontSize: 40 }} />, title: "Mantenimiento Proactivo", description: "Nos anticipamos a los problemas. Realizamos mantenimiento preventivo en sus sistemas para garantizar un rendimiento óptimo y evitar fallos futuros." },
  { icon: <DesktopWindowsIcon sx={{ fontSize: 40 }} />, title: "Gestión de Endpoints", description: "Administramos y monitoreamos de forma centralizada todos sus equipos (laptops, desktops), asegurando que estén actualizados, seguros y funcionando correctamente." },
  { icon: <TerminalIcon sx={{ fontSize: 40 }} />, title: "Instalación y Configuración Experta", description: "Nuestro equipo se encarga de la instalación y configuración de servidores, racks y roles específicos, garantizando una implementación según las mejores prácticas." },
  { icon: <ReportProblemIcon sx={{ fontSize: 40 }} />, title: "Resolución Rápida de Incidencias", description: "Cuando surgen problemas, nuestro equipo de ingenieros certificados está listo para diagnosticar y solucionar incidencias de manera rápida y efectiva." },
  { icon: <LightbulbIcon sx={{ fontSize: 40 }} />, title: "Asesoría Estratégica de TI", description: "Más allá del soporte, le asesoramos en la planificación y adopción de nuevas tecnologías para alinear su infraestructura con sus objetivos de negocio." },
];

const breadcrumbs = [
  { text: 'Inicio', link: '/' },
  { text: 'Servicios', link: '/servicios' },
  { text: 'Soporte de TI', link: '/servicios/soporte' },
];

// 2. CREAMOS LOS DATOS PARA LA SECCIÓN DE FAQ
const soporteFaqData = [
  {
    question: "¿Qué es la diferencia entre soporte preventivo y correctivo?",
    answer: "El soporte correctivo actúa cuando un problema ya ha ocurrido (ej. un equipo no enciende). El soporte preventivo, que es nuestro enfoque principal, consiste en realizar mantenimientos y monitoreos regulares para evitar que esos problemas sucedan en primer lugar, garantizando la continuidad de su operación."
  },
  {
    question: "¿Cómo funciona la Mesa de Ayuda para mis empleados?",
    answer: "Sus empleados reciben acceso a nuestros canales de soporte (telefónico, email, etc.). Cuando tienen una incidencia, se comunican directamente con nosotros. Creamos un ticket, un ingeniero certificado toma el caso y trabaja en la solución, ya sea de forma remota o presencial si es necesario."
  },
  {
    question: "¿Por qué debería externalizar mi soporte de TI?",
    answer: "Externalizar el soporte de TI con un partner como Vitccel le permite acceder a un equipo de expertos certificados por una fracción del costo de contratar personal interno. Además, se beneficia de nuestra experiencia con múltiples clientes y tecnologías, asegurando soluciones más rápidas y eficientes."
  }
];

export default function Soporte() {
  // 3. GENERAMOS EL SCHEMA JSON-LD PARA LA FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": soporteFaqData.map(item => ({
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
        <title>Soporte TI y Servicios Gestionados para Empresas | Vitccel</title>
        <meta name="description" content="Ofrecemos servicios gestionados de TI y soporte técnico en Colombia. Mesa de ayuda, monitoreo proactivo y administración de endpoints para su empresa." />
        
        {/* Schema para el Servicio (existente) */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Soporte Técnico de TI y Servicios Gestionados",
            "name": "Soporte de TI y Servicios Gestionados",
            "description": "Ofrecemos servicios de soporte TI externalizados para empresas, incluyendo mesa de ayuda, monitoreo proactivo y administración de endpoints.",
            "provider": { "@type": "LocalBusiness", "name": "Vitccel" },
            "areaServed": { "@type": "Country", "name": "Colombia" }
          }
        `}
        </script>

        {/* Schema para la FAQ (nuevo) */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <PageBanner title="Soporte de TI y Servicios Gestionados" breadcrumbs={breadcrumbs} />

      <section className="container mx-auto py-20 px-4 md:px-40 text-center">
        <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Su Departamento de TI, Externalizado y Potenciado</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          Delegue la gestión y el soporte de su infraestructura tecnológica a nuestro equipo de expertos. Nos convertimos en una extensión de su empresa, permitiéndole enfocarse en su negocio mientras nosotros garantizamos la continuidad y eficiencia de su operación.
        </p>
      </section>

      <section className="bg-[#EEF9FF]">
          <div className="container mx-auto py-20 px-4 md:px-40">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-sen text-[#0D486B]">¿Qué Incluyen Nuestros Servicios?</h2>
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
            Soporte Especializado en Tecnologías Líderes
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            <img src="/assets/img/partners/microsoft-partner.png" alt="Logo de Microsoft" className="h-12" />
            <img src="/assets/img/partners/hpe-aruba.png" alt="Logo de HPE Aruba Networking" className="h-12" />
            <img src="/assets/img/partners/acronis-partner.png" alt="Logo de Acronis" className="h-20" />
          </div>
        </div>
      </section>

      {/* 4. AÑADIMOS EL NUEVO COMPONENTE FAQ */}
      <FaqSection title="Preguntas Frecuentes sobre Soporte TI" faqData={soporteFaqData} />

      <CtaSection />
    </>
  );
}