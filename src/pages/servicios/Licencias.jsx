
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../../components/PageBanner';
import CtaSection from '../../components/CtaSection';

// Importamos iconos para los beneficios de Licenciamiento
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import GavelIcon from '@mui/icons-material/Gavel';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

// Array de beneficios específicos para Licenciamiento
const benefitsData = [
  {
    icon: <PriceCheckIcon sx={{ fontSize: 40 }} />,
    title: "Optimización de Costos",
    description: "Le asesoramos para elegir el modelo de licenciamiento (Volumen, OEM, Suscripción) que mejor se adapte a su presupuesto y necesidades, evitando gastos innecesarios."
  },
  {
    icon: <GavelIcon sx={{ fontSize: 40 }} />,
    title: "Cumplimiento Normativo",
    description: "Garantice la legalidad de todo su software empresarial. Evite riesgos legales y multas con una gestión de licencias adecuada y documentada."
  },
  {
    icon: <AllInboxIcon sx={{ fontSize: 40 }} />,
    title: "Flexibilidad de Modelos",
    description: "Ofrecemos un abanico completo de opciones de licenciamiento, desde pagos únicos (perpetuo) hasta suscripciones flexibles que se adaptan a su flujo de caja."
  },
  {
    icon: <SystemUpdateAltIcon sx={{ fontSize: 40 }} />,
    title: "Acceso a la Última Tecnología",
    description: "Mantenga a su equipo productivo y seguro con acceso continuo a las últimas actualizaciones, parches de seguridad y nuevas funcionalidades de su software."
  },
  {
    icon: <ManageHistoryIcon sx={{ fontSize: 40 }} />,
    title: "Gestión Simplificada",
    description: "Centralice la gestión de todas sus licencias de software. Nos encargamos de las renovaciones y el seguimiento para que usted se enfoque en su negocio."
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
    title: "Asesoría Experta",
    description: "Como partners de Microsoft y otros líderes, contamos con el conocimiento para guiarlo a través del complejo mundo del licenciamiento de software."
  },
];

const breadcrumbs = [
  { text: 'Inicio', link: '/' },
  { text: 'Servicios', link: '/servicios' },
  { text: 'Licenciamiento de Software', link: '/servicios/licencias' },
];

export default function Licencias() {
  return (
    <>
      <Helmet>
        <title>Licenciamiento de Software Microsoft para Empresas | Vitccel</title>
        <meta
          name="description"
          content="Optimice costos y asegure la legalidad con nuestros servicios de licenciamiento de software. Somos partners de Microsoft en Colombia. Asesoría experta."
        />
        <script type="application/ld+json">
          {`
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Consultoría y Venta de Licenciamiento de Software",
    "name": "Licenciamiento de Software",
    "description": "Asesoría experta como partners de Microsoft para la optimización de costos y el cumplimiento normativo en licenciamiento de software empresarial.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Vitccel"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Colombia"
    }
  }
`}
        </script>
      </Helmet>

      <PageBanner
        title="Licenciamiento de Software"
        breadcrumbs={breadcrumbs}
      />
      {/* --- Sección de Introducción --- */}
      <section className="container mx-auto py-20 px-4 md:px-40 text-center">
        <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Gestión Inteligente de sus Activos de Software</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          El licenciamiento de software puede ser complejo y costoso si no se gestiona correctamente. Le ayudamos a navegar las opciones para asegurar que su empresa tenga las herramientas que necesita, de forma legal, segura y rentable.
        </p>
      </section>

      {/* --- Grid de Beneficios --- */}
      <section className="bg-[#EEF9FF]">
        <div className="container mx-auto py-20 px-4 md:px-40">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Beneficios de Nuestro Servicio</h2>
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
            Partners Oficiales de las Marcas Líderes
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            <img src="/assets/img/partners/microsoft-partner.png" alt="Logo de Microsoft Partner" className="h-12" />
            <img src="/assets/img/partners/vmware.png" alt="Logo de VMWare" className="h-8" />
            {/* Agrega aquí otros logos de software si es relevante */}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}