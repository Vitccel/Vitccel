import React from 'react';

// 1. Importa todos los componentes que acabamos de crear
import HeroSlider from '../components/HeroSlider';
import Partners from '../components/Partners';
import ServicesOverview from '../components/ServicesOverview';
import WhyVitccel from '../components/WhyVitccel';
import Testimonials from '../components/Testimonials';
import CtaSection from '../components/CtaSection';
import { Helmet } from 'react-helmet-async';

export default function Inicio() {
  return (
    <>
      <Helmet>
        <title>Vitccel: Soluciones Tecnológicas, Ciberseguridad y Soporte TI en Colombia</title>
        <meta
          name="description"
          content="Partner tecnológico integral para empresas en Colombia. Ofrecemos soluciones a medida en ciberseguridad, nube, redes y licenciamiento para potenciar su crecimiento y seguridad."
        />
      </Helmet>

      <header>
        {/* El H1 crucial para SEO, oculto visualmente pero disponible para los buscadores. */}
        <h1 className="sr-only">
          Vitccel: Soluciones Tecnológicas, Ciberseguridad y Soporte de TI en Colombia
        </h1>
        <HeroSlider />
      </header>

      <main>
        {/* Flujo Narrativo: Confianza -> Qué hacemos -> Por qué nosotros -> Prueba Social -> Acción */}
        <Partners />

        <ServicesOverview />

        <WhyVitccel />

        <Testimonials />

        <CtaSection />

      </main>
    </>
  );
}