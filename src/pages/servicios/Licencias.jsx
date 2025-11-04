
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../../components/PageBanner';
import CtaSection from '../../components/CtaSection';
import FaqSection from '../../components/FaqSection'; // 1. IMPORTAMOS EL COMPONENTE

// Iconos para los beneficios
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import GavelIcon from '@mui/icons-material/Gavel';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const benefitsData = [
  { icon: <PriceCheckIcon sx={{ fontSize: 40 }} />, title: "Optimización de Costos", description: "Le asesoramos para elegir el modelo de licenciamiento (Volumen, OEM, Suscripción) que mejor se adapte a su presupuesto y necesidades, evitando gastos innecesarios." },
  { icon: <GavelIcon sx={{ fontSize: 40 }} />, title: "Cumplimiento Normativo", description: "Garantice la legalidad de todo su software empresarial. Evite riesgos legales y multas con una gestión de licencias adecuada y documentada." },
  { icon: <AllInboxIcon sx={{ fontSize: 40 }} />, title: "Flexibilidad de Modelos", description: "Ofrecemos un abanico completo de opciones de licenciamiento, desde pagos únicos (perpetuo) hasta suscripciones flexibles que se adaptan a su flujo de caja." },
  { icon: <SystemUpdateAltIcon sx={{ fontSize: 40 }} />, title: "Acceso a la Última Tecnología", description: "Mantenga a su equipo productivo y seguro con acceso continuo a las últimas actualizaciones, parches de seguridad y nuevas funcionalidades de su software." },
  { icon: <ManageHistoryIcon sx={{ fontSize: 40 }} />, title: "Gestión Simplificada", description: "Centralice la gestión de todas sus licencias de software. Nos encargamos de las renovaciones y el seguimiento para que usted se enfoque en su negocio." },
  { icon: <SupportAgentIcon sx={{ fontSize: 40 }} />, title: "Asesoría Experta", description: "Como partners de Microsoft y otros líderes, contamos con el conocimiento para guiarlo a través del complejo mundo del licenciamiento de software." },
];

const breadcrumbs = [
  { text: 'Inicio', link: '/' },
  { text: 'Servicios', link: '/servicios' },
  { text: 'Licenciamiento de Software', link: '/servicios/licencias' },
];

// 2. CREAMOS LOS DATOS PARA LA SECCIÓN DE FAQ
const licenciasFaqData = [
  {
    question: "¿Cuál es la diferencia entre una licencia por suscripción y una perpetua?",
    answer: "Una licencia perpetua se compra una sola vez y le otorga el derecho de usar esa versión del software indefinidamente, aunque puede que no incluya actualizaciones futuras. Una suscripción (como Microsoft 365) es un pago recurrente (mensual o anual) que le da acceso continuo a la última versión del software, soporte y servicios en la nube."
  },
  {
    question: "¿Qué es el licenciamiento por volumen?",
    answer: "Es un programa diseñado para organizaciones que necesitan comprar múltiples licencias de software (generalmente 5 o más). Ofrece un precio más bajo por licencia en comparación con la compra individual y simplifica la gestión de todas las licencias bajo un único acuerdo."
  },
  {
    question: "¿Por qué necesito un partner para comprar licencias de Microsoft?",
    answer: "Trabajar con un partner como Vitccel le da acceso a precios preferenciales, asesoría experta para elegir el plan correcto y soporte para la implementación y gestión. Le ayudamos a navegar la complejidad de los acuerdos de Microsoft para asegurar que obtenga el máximo valor de su inversión."
  }
];

export default function Licencias() {
  // 3. GENERAMOS EL SCHEMA JSON-LD PARA LA FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": licenciasFaqData.map(item => ({
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
        <title>Licenciamiento de Software Microsoft para Empresas | Vitccel</title>
        <meta name="description" content="Optimice costos y asegure la legalidad con nuestros servicios de licenciamiento de software. Somos partners de Microsoft en Colombia. Asesoría experta." />
        
        {/* Schema para el Servicio (existente) */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Consultoría y Venta de Licenciamiento de Software",
            "name": "Licenciamiento de Software",
            "description": "Asesoría experta como partners de Microsoft para la optimización de costos y el cumplimiento normativo en licenciamiento de software empresarial.",
            "provider": { "@type": "LocalBusiness", "name": "Vitccel" },
            "areaServed": { "@type": "Country", "name": "Colombia" }
          }
        `}
        </script>

        {/* Schema para la FAQ (nuevo) */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

<PageBanner title="Licenciamiento de Software" breadcrumbs={breadcrumbs} backgroundImage="/assets/img/Licenciamiento-de-Software.png" />


      <section className="container mx-auto py-20 px-4 md:px-40 text-center">
        <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Gestión Inteligente de sus Activos de Software</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          El licenciamiento de software puede ser complejo y costoso si no se gestiona correctamente. Le ayudamos a navegar las opciones para asegurar que su empresa tenga las herramientas que necesita, de forma legal, segura y rentable.
        </p>
      </section>

      <section className="bg-[#EEF9FF]">
          <div className="container mx-auto py-20 px-4 md:px-40">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Beneficios de Nuestro Servicio</h2>
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
            Partners Oficiales de las Marcas Líderes
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            <img src="/assets/img/partners/microsoft-partner.png" alt="Logo de Microsoft Partner" className="h-12" />
            <img src="/assets/img/partners/vmware.svg" alt="Logo de VMWare" className="h-8" />
          </div>
        </div>
      </section>

      {/* 4. AÑADIMOS EL NUEVO COMPONENTE FAQ */}
      <FaqSection title="Preguntas Frecuentes sobre Licenciamiento" faqData={licenciasFaqData} />

      <CtaSection />
    </>
  );
}