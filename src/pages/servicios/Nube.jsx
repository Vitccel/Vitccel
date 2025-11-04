
import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../../components/PageBanner';
import CtaSection from '../../components/CtaSection';
import FaqSection from '../../components/FaqSection'; // 1. IMPORTAMOS EL NUEVO COMPONENTE

// Iconos para los beneficios
import DnsIcon from '@mui/icons-material/Dns';
import SecurityIcon from '@mui/icons-material/Security';
import ScaleIcon from '@mui/icons-material/Scale';
import SavingsIcon from '@mui/icons-material/Savings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

const benefitsData = [
  { icon: <DnsIcon sx={{ fontSize: 40 }} />, title: "Alta Disponibilidad", description: "Nuestra infraestructura redundante garantiza una operación 24/7, minimizando el tiempo de inactividad y asegurando la continuidad de su negocio." },
  { icon: <ScaleIcon sx={{ fontSize: 40 }} />, title: "Escalabilidad Flexible", description: "Ajuste dinámicamente los recursos de sus servidores (CPU, RAM, almacenamiento) según la demanda, sin interrupciones ni costos iniciales." },
  { icon: <SavingsIcon sx={{ fontSize: 40 }} />, title: "Optimización de Costos", description: "Transforme su inversión de capital (CAPEX) en gastos operativos (OPEX) con nuestro modelo de pago por uso. Reduzca costos en hardware y mantenimiento." },
  { icon: <SecurityIcon sx={{ fontSize: 40 }} />, title: "Seguridad Avanzada", description: "Protegemos sus datos con cifrado de extremo a extremo, firewalls de última generación, autenticación multifactor (MFA) y cumplimiento de normativas." },
  { icon: <ManageAccountsIcon sx={{ fontSize: 40 }} />, title: "Gestión Centralizada", description: "Ofrecemos herramientas centralizadas para el monitoreo, la gestión de backups y las actualizaciones, simplificando la administración de su infraestructura." },
  { icon: <CloudSyncIcon sx={{ fontSize: 40 }} />, title: "Acceso Remoto Seguro", description: "Permita que su equipo se conecte de forma segura desde cualquier lugar del mundo, garantizando la productividad y la colaboración." },
];

const breadcrumbs = [
  { text: 'Inicio', link: '/' },
  { text: 'Servicios', link: '/servicios' },
  { text: 'Soluciones en la Nube', link: '/servicios/nube' },
];

// 2. CREAMOS LOS DATOS PARA LA SECCIÓN DE FAQ
const nubeFaqData = [
  {
    question: "¿Qué es la Infraestructura como Servicio (IaaS)?",
    answer: "Es un modelo de computación en la nube que proporciona recursos de computación virtualizados a través de internet. En lugar de comprar hardware físico, usted nos alquila servidores virtuales, pagando solo por lo que usa. Nosotros nos encargamos del mantenimiento de la infraestructura subyacente."
  },
  {
    question: "¿Puedo cambiar los recursos de mi servidor si mi negocio crece?",
    answer: "¡Por supuesto! Esa es una de las mayores ventajas de la nube. La escalabilidad es flexible y se puede realizar en minutos. Podemos aumentar o disminuir la CPU, RAM y el almacenamiento de sus servidores según sus necesidades, sin interrupciones en el servicio."
  },
  {
    question: "¿Cómo garantizan la seguridad de mis datos en la nube?",
    answer: "La seguridad es nuestra máxima prioridad. Protegemos sus datos con múltiples capas de seguridad, incluyendo firewalls de última generación, cifrado de datos en tránsito y en reposo, aislamiento de red y autenticación multifactor (MFA)."
  }
];

export default function Nube() {
  // 3. GENERAMOS EL SCHEMA JSON-LD PARA LA FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": nubeFaqData.map(item => ({
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
        <title>Soluciones Cloud y Servidores Virtuales en Colombia | Vitccel</title>
        <meta name="description" content="Descubra nuestras soluciones en la nube para empresas. Ofrecemos servidores virtuales (IaaS) de alto rendimiento, escalables y seguros para optimizar su infraestructura TI." />
        
        {/* Schema para el Servicio (existente) */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Servidores Virtuales e Infraestructura como Servicio (IaaS)",
            "name": "Soluciones en la Nube",
            "description": "Ofrecemos servidores virtuales (IaaS) de alto rendimiento, escalables y seguros para optimizar la infraestructura TI de empresas en Colombia.",
            "provider": { "@type": "LocalBusiness", "name": "Vitccel" },
            "areaServed": { "@type": "Country", "name": "Colombia" }
          }
        `}
        </script>

        {/* Schema para la FAQ (nuevo) */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <PageBanner title="Soluciones en la Nube" breadcrumbs={breadcrumbs} />

      <section className="container mx-auto py-20 px-4 md:px-40 text-center">
        <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Infraestructura Ágil, Segura y Rentable</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          Libere a su empresa de las limitaciones del hardware físico. Nuestros servidores en la nube (IaaS) le brindan el poder y la flexibilidad necesarios para innovar y crecer, con la tranquilidad de una infraestructura gestionada por expertos.
        </p>
      </section>

      <section className="bg-[#EEF9FF]">
          <div className="container mx-auto py-20 px-4 md:px-40">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Ventajas de Nuestra Nube</h2>
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
            Construido sobre Tecnología Líder en la Industria
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            <img src="/assets/img/partners/microsoft-partner.png" alt="Logo de Microsoft" className="h-12 opacity-70" />
            <img src="/assets/img/partners/acronis-cloud.png" alt="Logo de Dade2" className="h-16 opacity-70" />
            <img src="/assets/img/partners/vmware.png" alt="Logo de VMWare" className="h-8 opacity-70" />
          </div>
        </div>
      </section>

      {/* 4. AÑADIMOS EL NUEVO COMPONENTE FAQ */}
      <FaqSection title="Preguntas Frecuentes sobre la Nube" faqData={nubeFaqData} />
      
      <CtaSection />
    </>
  );
}