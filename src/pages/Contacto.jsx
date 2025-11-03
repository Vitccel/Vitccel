// src/pages/Contacto.jsx (Versión final con Formspree integrado)

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/PageBanner';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const breadcrumbs = [
  { text: 'Inicio', link: '/' },
  { text: 'Contacto', link: '/contacto' },
];

export default function Contacto() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xkgplbqp', { // TU ENDPOINT ESTÁ AQUÍ
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Solicite Asesoría y Soporte Técnico | Vitccel</title>
        <meta
          name="description"
          content="¿Listo para potenciar su infraestructura? Contáctenos hoy. Encuentre nuestro teléfono, correo y ubicación en Cali, Colombia. Ofrecemos una asesoría inicial sin costo para su empresa."
        />
        {/* Schema.org para LocalBusiness */}
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Vitccel",
            "image": "https://www.vitccel.com/assets/logos/logo-vitccel.png",
            "url": "https://www.vitccel.com/contacto",
            "telephone": "+573235806796",
            "email": "contacto@vitccel.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Carrera 46a # 51 - 34",
              "addressLocality": "Cali",
              "addressCountry": "CO"
            }
          }
        `}
        </script>
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
                  <p className="text-gray-600">Cali, Colombia</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254884.2818012219!2d-76.6415039239851!3d3.42158089456938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a6f0f0803779%3A0x37631be3b138403!2sCali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Vitccel en Cali"
              ></iframe>
            </div>
          </div>

          {/* Columna Derecha: Formulario Funcional */}
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold font-sen text-[#0D486B]">Envíanos un Mensaje</h2>
            <p className="mt-2 mb-8 text-gray-600">
              ¿Tienes un proyecto en mente o una consulta? Completa el formulario y nuestro equipo se pondrá en contacto contigo a la brevedad.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#06A3DA] focus:border-[#06A3DA]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#06A3DA] focus:border-[#06A3DA]" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#06A3DA] focus:border-[#06A3DA]" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                <textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#06A3DA] focus:border-[#06A3DA]"></textarea>
              </div>
              
              <div>
                {submissionStatus === 'success' && <p className="text-center text-[#34AD54] mb-4">¡Mensaje enviado con éxito! Gracias por contactarnos.</p>}
                {submissionStatus === 'error' && <p className="text-center text-red-600 mb-4">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o usa nuestros otros canales.</p>}

                <button 
                  type="submit" 
                  className="w-full bg-[#06A3DA] hover:bg-[#0582ab] text-white font-bold py-4 px-10 rounded-full transition-colors duration-300 text-lg shadow-lg hover:shadow-cyan-400/50 disabled:bg-gray-400"
                  disabled={submissionStatus === 'sending'}
                >
                  {submissionStatus === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>
    </>
  );
}