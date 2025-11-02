import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import CtaSection from '../components/CtaSection';

// Iconos de MUI para cada servicio
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import SecurityIcon from '@mui/icons-material/Security';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LanIcon from '@mui/icons-material/Lan';
import ArticleIcon from '@mui/icons-material/Article';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


// Datos de los servicios para un mantenimiento fácil
const servicesData = [
  {
    icon: <CloudQueueIcon sx={{ fontSize: 40 }} />,
    title: "Soluciones en la Nube",
    description: "Infraestructura como servicio (IaaS) con servidores virtuales de alto rendimiento. Escalabilidad, seguridad y eficiencia para su operación.",
    link: "/servicios/nube"
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: "Ciberseguridad Avanzada",
    description: "Proteja sus activos digitales con soluciones líderes como Acronis Cyber Protect. Defensa proactiva contra ransomware y amenazas de día cero.",
    link: "/servicios/seguridad"
  },
  {
    icon: <CloudUploadIcon sx={{ fontSize: 40 }} />,
    title: "Backup & Recovery",
    description: "Asegure la continuidad de su negocio con copias de seguridad automáticas y recuperación de desastres en la nube. Simple, rápido y confiable.",
    link: "/servicios/backup"
  },
  {
    icon: <LanIcon sx={{ fontSize: 40 }} />,
    title: "Redes y Conectividad",
    description: "Diseño e implementación de redes de fibra óptica y cableado estructurado para garantizar una conectividad rápida y estable en su empresa.",
    link: "/servicios/redes"
  },
  {
    icon: <ArticleIcon sx={{ fontSize: 40 }} />,
    title: "Licenciamiento",
    description: "Optimice sus recursos y asegure la legalidad de su software con licenciamiento Microsoft, VMWare y otras soluciones empresariales.",
    link: "/servicios/licencias"
  },
  {
  icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
  title: "Soporte de TI y Servicios Gestionados",
  description: "Delegue la gestión de su TI. Ofrecemos mesa de ayuda, monitoreo proactivo y soporte experto para mantener su operación funcionando sin interrupciones.",
  link: "/servicios/soporte"
  },
];

const breadcrumbs = [
  { text: 'Inicio', link: '/' },
  { text: 'Nuestros Servicios', link: '/servicios' },
];

export default function Servicios() {
  return (
    <>

      <Helmet>
        <title>Soluciones y Servicios TI para Empresas en Colombia | Vitccel</title>
        <meta
          name="description"
          content="Explore nuestro portafolio completo de servicios TI. Desde ciberseguridad avanzada y backup en la nube hasta redes de fibra óptica y licenciamiento. Potenciamos la transformación digital de su negocio."
        />
      </Helmet>

      <PageBanner
        title="Nuestros Servicios"
        breadcrumbs={breadcrumbs}
      />

      {/* Sección de Introducción */}
      <section className="container mx-auto py-20 px-4 md:px-40 text-center">
        <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Soluciones Tecnológicas a su Medida</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          En Vitccel, entendemos que cada negocio es único. Por eso, ofrecemos un portafolio de servicios TI diseñados para optimizar su infraestructura, proteger sus datos y potenciar su crecimiento en el competitivo mercado colombiano.
        </p>
      </section>

      {/* Grid de Servicios */}
      <section className="bg-gray-50">
        <div className="container mx-auto py-20 px-4 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="text-[#06A3DA] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold font-sen text-[#0D486B] mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
                <Link to={service.link} className="mt-6 font-bold text-[#06A3DA] hover:text-[#0582ab] transition-colors self-start">
                  Leer Más →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}