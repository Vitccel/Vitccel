import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/PageBanner';
// Iconos de MUI para la información de contacto
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const breadcrumbs = [
  { text: 'Inicio', link: '/' },
  { text: 'Contacto', link: '/contacto' },
];


export default function Contacto() {
  return (
    <>

      <Helmet>
        <title>Contacto | Solicite Asesoría y Soporte Técnico | Vitccel</title>
        <meta
          name="description"
          content="¿Listo para potenciar su infraestructura? Contáctenos hoy. Encuentre nuestro teléfono, correo y ubicación en Bogotá, Colombia. Ofrecemos una asesoría inicial sin costo para su empresa."
        />
      </Helmet>

      <PageBanner
        title="Contacto"
        breadcrumbs={breadcrumbs}
      />
      <section className="container mx-auto py-20 px-4 md:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Columna Izquierda: Información de Contacto y Mapa */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Ponte en Contacto</h2>
              <p className="mt-2 text-gray-600">
                Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros canales o visítanos.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <LocationOnIcon className="text-[#06A3DA] text-3xl mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Nuestra Oficina</h3>
                  <p className="text-gray-600">Bogotá, Colombia</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <EmailIcon className="text-[#06A3DA] text-3xl mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Correo Electrónico</h3>
                  <a href="mailto:contacto@vitccel.com" className="text-gray-600 hover:text-[#06A3DA] transition-colors">contacto@vitccel.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <PhoneIcon className="text-[#06A3DA] text-3xl mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">Teléfono</h3>
                  <a href="tel:+573235806796" className="text-gray-600 hover:text-[#06A3DA] transition-colors">+57 323 5806796</a>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254508.3928062808!2d-74.24789396349003!3d4.6482837172121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1!5e0!3m2!1ses-419!2sco!4v16788864"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Vitccel en Bogotá"
              ></iframe>
            </div>
          </div>

          {/* Columna Derecha: Formulario Placeholder */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Envíanos un Mensaje</h2>
            <p className="mt-2 mb-8 text-gray-600">
              Para consultas, por favor utiliza nuestros canales de correo o teléfono mientras habilitamos nuestro formulario de contacto.
            </p>

            {/* 2. AQUÍ ESTÁ EL FORMULARIO VISUAL DE REEMPLAZO */}
            <div className="space-y-6 animate-pulse">
              <div className="w-full h-12 bg-gray-200 rounded-md"></div>
              <div className="w-full h-12 bg-gray-200 rounded-md"></div>
              <div className="w-full h-12 bg-gray-200 rounded-md"></div>
              <div className="w-full h-32 bg-gray-200 rounded-md"></div>
              <div className="w-full h-12 bg-gray-300 rounded-full"></div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}