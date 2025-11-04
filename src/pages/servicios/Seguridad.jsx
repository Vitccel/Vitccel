
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../../components/PageBanner';
import CtaSection from '../../components/CtaSection';
import FaqSection from '../../components/FaqSection'; // 1. IMPORTAMOS EL COMPONENTE

// Iconos para los beneficios
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import ShieldIcon from '@mui/icons-material/Shield';
import PolicyIcon from '@mui/icons-material/Policy';
import HubIcon from '@mui/icons-material/Hub';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import BackupIcon from '@mui/icons-material/Backup';

const benefitsData = [
  { icon: <ShieldIcon sx={{ fontSize: 40 }} />, title: "Defensa contra Ransomware", description: "Utilizamos IA para detectar y detener ataques de ransomware en tiempo real, protegiendo sus archivos y sistemas críticos antes de que sean comprometidos." },
  { icon: <SecurityUpdateGoodIcon sx={{ fontSize: 40 }} />, title: "Protección de Día Cero", description: "Nuestras soluciones proactivas bloquean amenazas desconocidas y malware emergente, defendiendo su infraestructura incluso contra ataques nunca antes vistos." },
  { icon: <HubIcon sx={{ fontSize: 40 }} />, title: "Respuesta Avanzada (EDR, XDR)", description: "Implementamos controles de Detección y Respuesta en Endpoints (EDR) y Detección y Respuesta Extendida (XDR) para una visibilidad y respuesta automatizada ante incidentes." },
  { icon: <BackupIcon sx={{ fontSize: 40 }} />, title: "Backup y Ciberseguridad Integrados", description: "Unificamos las copias de seguridad y la protección antimalware en una única consola, garantizando que sus respaldos estén siempre limpios y seguros." },
  { icon: <FindInPageIcon sx={{ fontSize: 40 }} />, title: "Gestión de Vulnerabilidades", description: "Realizamos análisis proactivos para identificar y corregir debilidades en su sistema, fortaleciendo su postura de seguridad y reduciendo la superficie de ataque." },
  { icon: <PolicyIcon sx={{ fontSize: 40 }} />, title: "Simplificación de la Gestión", description: "Administre toda su estrategia de ciberseguridad y respaldo de datos desde una consola centralizada, simplificando la operación y mejorando la eficiencia." },
];

const breadcrumbs = [
  { text: 'Inicio', link: '/' },
  { text: 'Servicios', link: '/servicios' },
  { text: 'Ciberseguridad Avanzada', link: '/servicios/seguridad' },
];

// 2. CREAMOS LOS DATOS PARA LA SECCIÓN DE FAQ
const seguridadFaqData = [
  {
    question: "¿Cuál es la diferencia entre un antivirus tradicional y su solución?",
    answer: "Un antivirus tradicional se basa en firmas para detectar virus ya conocidos. Nuestra solución de ciberprotección es proactiva: utiliza Inteligencia Artificial para analizar comportamientos y detener amenazas nuevas y desconocidas (de día cero), como el ransomware, antes de que causen daño."
  },
  {
    question: "¿Cómo protege esta solución contra el ransomware?",
    answer: "Nuestra tecnología monitorea activamente los procesos en sus equipos. Si detecta un comportamiento de cifrado no autorizado, típico del ransomware, lo detiene instantáneamente y revierte cualquier cambio. Además, asegura que sus copias de seguridad estén protegidas y limpias para una recuperación garantizada."
  },
  {
    question: "¿Es complicado de gestionar?",
    answer: "No. Una de las mayores ventajas es la simplicidad. Integramos la ciberseguridad, el backup y la gestión de dispositivos en una única consola centralizada, lo que reduce la complejidad y le permite tener una visibilidad completa de su protección con mucho menos esfuerzo."
  }
];

export default function Seguridad() {
  // 3. GENERAMOS EL SCHEMA JSON-LD PARA LA FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": seguridadFaqData.map(item => ({
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
        <title>Ciberseguridad Avanzada para Empresas en Colombia | Vitccel</title>
        <meta name="description" content="Proteja su negocio contra ransomware y amenazas de día cero con Acronis Cyber Protect. Ofrecemos soluciones EDR, XDR y backup integrado para una defensa total." />
        
        {/* Schema para el Servicio (existente) */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Ciberseguridad Gestionada y Protección de Endpoints",
            "name": "Ciberseguridad Avanzada",
            "description": "Protección proactiva para empresas contra ransomware y amenazas de día cero con Acronis Cyber Protect, incluyendo soluciones EDR y XDR.",
            "provider": { "@type": "LocalBusiness", "name": "Vitccel" },
            "areaServed": { "@type": "Country", "name": "Colombia" }
          }
        `}
        </script>

        {/* Schema para la FAQ (nuevo) */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

<PageBanner title="Ciberseguridad Avanzada" breadcrumbs={breadcrumbs} backgroundImage="/assets/img/Ciberseguridad-Avanzada.png" />

      <section className="container mx-auto py-20 px-4 md:px-40 text-center">
        <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Defensa Proactiva para un Mundo Digital Hostil</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          En el panorama de amenazas actual, un antivirus tradicional ya no es suficiente. Ofrecemos una solución integral de ciberprotección que unifica la seguridad, el respaldo de datos y la gestión para blindar cada aspecto de su infraestructura.
        </p>
      </section>

      <section className="bg-[#EEF9FF]">
          <div className="container mx-auto py-20 px-4 md:px-40">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Capacidades de Nuestra Solución</h2>
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
            Impulsado por el Líder Mundial en Ciberprotección
          </h2>
          <div className="flex justify-center items-center">
            <img src="/assets/img/partners/acronis.png" alt="Logo de Acronis Cyber Protect Cloud" className="h-20" />
          </div>
        </div>
      </section>

      {/* 4. AÑADIMOS EL NUEVO COMPONENTE FAQ */}
      <FaqSection title="Preguntas Frecuentes sobre Ciberseguridad" faqData={seguridadFaqData} />

      <CtaSection />
    </>
  );
}