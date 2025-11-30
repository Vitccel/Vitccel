// src/pages/servicios/Redes.jsx (Versión final con FAQ)

import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../../components/PageBanner';
import CtaSection from '../../components/CtaSection';
import FaqSection from '../../components/FaqSection'; // 1. IMPORTAMOS EL COMPONENTE

// Iconos para los beneficios
import SpeedIcon from '@mui/icons-material/Speed';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import HubIcon from '@mui/icons-material/Hub';
import HandymanIcon from '@mui/icons-material/Handyman';

const benefitsData = [
  { icon: <SpeedIcon sx={{ fontSize: 40 }} />, title: "Conectividad de Ultra Alta Velocidad", description: "Implementamos soluciones de fibra óptica y cableado estructurado (Cat 6A/7) para garantizar el máximo rendimiento de su red y eliminar cuellos de botella." },
  { icon: <NetworkCheckIcon sx={{ fontSize: 40 }} />, title: "Máxima Estabilidad y Fiabilidad", description: "Utilizamos componentes certificados de marcas líderes para construir una infraestructura de red robusta que opera sin interrupciones, garantizando la continuidad operativa." },
  { icon: <AccountTreeIcon sx={{ fontSize: 40 }} />, title: "Diseño Escalable y a Futuro", description: "Nuestros diseños de red no solo satisfacen sus necesidades actuales, sino que están preparados para el crecimiento futuro de su empresa y la adopción de nuevas tecnologías." },
  { icon: <HandymanIcon sx={{ fontSize: 40 }} />, title: "Instalación Profesional y Certificada", description: "Nuestro equipo de técnicos certificados se encarga de la instalación, fusión y certificación de cada punto de red, cumpliendo con los más altos estándares de la industria." },
  { icon: <HubIcon sx={{ fontSize: 40 }} />, title: "Integración de Redes LAN y WLAN", description: "Diseñamos e integramos sus redes cableadas e inalámbricas (Wi-Fi) para ofrecer una experiencia de conectividad unificada, segura y de alto rendimiento en toda su organización." },
  { icon: <AssuredWorkloadIcon sx={{ fontSize: 40 }} />, title: "Calidad de Componentes Garantizada", description: "Solo trabajamos con los mejores. La calidad de nuestros componentes asegura una mayor vida útil de la infraestructura y un menor costo total de propiedad." },
];

const breadcrumbs = [
  { text: 'Inicio', link: '/' },
  { text: 'Servicios', link: '/servicios' },
  { text: 'Redes y Conectividad', link: '/servicios/redes' },
];

// 2. CREAMOS LOS DATOS PARA LA SECCIÓN DE FAQ
const redesFaqData = [
  {
    question: "¿Cuándo debería elegir fibra óptica en lugar de cableado de cobre?",
    answer: "La fibra óptica es ideal para distancias largas (entre edificios o pisos), para conexiones de servidores que requieren un ancho de banda muy alto (10 Gbps o más) y en entornos con alta interferencia electromagnética. El cableado de cobre (Cat 6A/7) sigue siendo una excelente y costeable solución para las conexiones a los puestos de trabajo."
  },
  {
    question: "¿Qué significa que un punto de red está 'certificado'?",
    answer: "Significa que, tras la instalación, utilizamos equipos de prueba especializados para verificar que cada punto de red cumple con los estándares internacionales de rendimiento (como velocidad, atenuación y diafonía). Esto le garantiza que la infraestructura funcionará de manera óptima y fiable."
  },
  {
    question: "¿Por qué es importante usar marcas de componentes como Panduit o Siemon?",
    answer: "Usar componentes de alta calidad garantiza la integridad de la señal, la durabilidad de la instalación y el cumplimiento de los estándares de rendimiento a largo plazo. Una red construida con componentes certificados es más fiable, más rápida y tiene un menor costo total de propiedad al reducir la necesidad de futuras reparaciones o reemplazos."
  }
];

export default function Redes() {
  // 3. GENERAMOS EL SCHEMA JSON-LD PARA LA FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": redesFaqData.map(item => ({
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
        <title>Redes, Fibra Óptica y Cableado Estructurado | Vitccel</title>
        <meta name="description" content="Expertos en diseño e implementación de redes empresariales en Colombia. Ofrecemos soluciones de fibra óptica, cableado estructurado y conectividad de alta velocidad." />
        
        {/* Schema para el Servicio (existente) */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Diseño e Implementación de Infraestructura de Red",
            "name": "Redes y Conectividad",
            "description": "Expertos en el diseño e implementación de redes de alta velocidad para empresas, utilizando fibra óptica y cableado estructurado certificado.",
            "provider": { "@type": "LocalBusiness", "name": "Vitccel" },
            "areaServed": { "@type": "Country", "name": "Colombia" }
          }
        `}
        </script>

        {/* Schema para la FAQ (nuevo) */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

<PageBanner title="Redes y Conectividad" breadcrumbs={breadcrumbs} backgroundImage="/assets/img/Redes-Conectividad.png" />

      <section className="container mx-auto py-20 px-4 md:px-40 text-center">
        <h2 className="text-3xl font-bold font-sen text-[#0D486B]">La Columna Vertebral de su Operación Digital</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          Una conectividad rápida y fiable es el cimiento sobre el que se construye toda estrategia de transformación digital. Diseñamos e implementamos la infraestructura de red que su empresa necesita para operar con la máxima eficiencia y velocidad.
        </p>
      </section>

      <section className="bg-[#EEF9FF]">
          <div className="container mx-auto py-20 px-4 md:px-40">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Nuestros Pilares de Servicio</h2>
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
            Trabajamos Exclusivamente con Marcas Líderes
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            <img src="/assets/img/partners/Aruba.png" alt="Logo de HPE Aruba Networking" className="h-12" />
            <img src="/assets/img/partners/kaspersky.png" alt="Logo de Ubiquiti" className="h-14" />
          </div>
        </div>
      </section>
      
      {/* 4. AÑADIMOS EL NUEVO COMPONENTE FAQ */}
      <FaqSection title="Preguntas Frecuentes sobre Redes" faqData={redesFaqData} />

      <CtaSection />
    </>
  );
}