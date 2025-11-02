// src/pages/servicios/Nube.jsx (Plantilla Maestra de Servicio)

import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../../components/PageBanner';
import CtaSection from '../../components/CtaSection';

// Importamos iconos relevantes para los beneficios de la nube
import DnsIcon from '@mui/icons-material/Dns';
import SecurityIcon from '@mui/icons-material/Security';
import ScaleIcon from '@mui/icons-material/Scale';
import SavingsIcon from '@mui/icons-material/Savings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CloudSyncIcon from '@mui/icons-material/CloudSync';

// Array de beneficios para mantener el código limpio y fácil de actualizar
const benefitsData = [
  {
    icon: <DnsIcon sx={{ fontSize: 40 }} />,
    title: "Alta Disponibilidad",
    description: "Nuestra infraestructura redundante garantiza una operación 24/7, minimizando el tiempo de inactividad y asegurando la continuidad de su negocio."
  },
  {
    icon: <ScaleIcon sx={{ fontSize: 40 }} />,
    title: "Escalabilidad Flexible",
    description: "Ajuste dinámicamente los recursos de sus servidores (CPU, RAM, almacenamiento) según la demanda, sin interrupciones ni costos iniciales."
  },
  {
    icon: <SavingsIcon sx={{ fontSize: 40 }} />,
    title: "Optimización de Costos",
    description: "Transforme su inversión de capital (CAPEX) en gastos operativos (OPEX) con nuestro modelo de pago por uso. Reduzca costos en hardware y mantenimiento."
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: "Seguridad Avanzada",
    description: "Protegemos sus datos con cifrado de extremo a extremo, firewalls de última generación, autenticación multifactor (MFA) y cumplimiento de normativas."
  },
  {
    icon: <ManageAccountsIcon sx={{ fontSize: 40 }} />,
    title: "Gestión Centralizada",
    description: "Ofrecemos herramientas centralizadas para el monitoreo, la gestión de backups y las actualizaciones, simplificando la administración de su infraestructura."
  },
  {
    icon: <CloudSyncIcon sx={{ fontSize: 40 }} />,
    title: "Acceso Remoto Seguro",
    description: "Permita que su equipo se conecte de forma segura desde cualquier lugar del mundo, garantizando la productividad y la colaboración."
  },
];

const breadcrumbs = [
  { text: 'Inicio', link: '/' },
  { text: 'Servicios', link: '/servicios' },
  { text: 'Soluciones en la Nube', link: '/servicios/nube' },
];

export default function Nube() {
  return (
    <>
      <Helmet>
        <title>Soluciones Cloud y Servidores Virtuales en Colombia | Vitccel</title>
        <meta
          name="description"
          content="Descubra nuestras soluciones en la nube para empresas. Ofrecemos servidores virtuales (IaaS) de alto rendimiento, escalables y seguros para optimizar su infraestructura TI."
        />
      </Helmet>

      <PageBanner
        title="Soluciones en la Nube"
        breadcrumbs={breadcrumbs}
      />
      {/* --- Sección de Introducción --- */}
      <section className="container mx-auto py-20 px-4 md:px-40 text-center">
        <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Infraestructura Ágil, Segura y Rentable</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
          Libere a su empresa de las limitaciones del hardware físico. Nuestros servidores en la nube (IaaS) le brindan el poder y la flexibilidad necesarios para innovar y crecer, con la tranquilidad de una infraestructura gestionada por expertos.
        </p>
      </section>

      {/* --- Grid de Beneficios --- */}
      <section className="bg-[#EEF9FF]">
        <div className="container mx-auto py-20 px-4 md:px-40">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Ventajas de Nuestra Nube</h2>
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
            Construido sobre Tecnología Líder en la Industria
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            <img src="/assets/img/partners/microsoft-partner.png" alt="Logo de Microsoft" className="h-12 opacity-70" />
            <img src="/assets/img/partners/acronis-cloud.png" alt="Logo de Dade2" className="h-16 opacity-70" />
            {/* Asumo que VMWare podría ser un aliado aquí, es un ejemplo */}
            <img src="/assets/img/partners/vmware.png" alt="Logo de VMWare" className="h-8 opacity-70" />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}