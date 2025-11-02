import React from 'react';
import { Link } from 'react-router-dom';

const defaultBannerImage = '/assets/img/pagebanner.jpg';

// ACEPTAMOS 'BREADCRUMBS' COMO PROP
export default function PageBanner({ title, breadcrumbs, backgroundImage = defaultBannerImage }) {

  // Si no se proporciona un array de breadcrumbs, creamos uno por defecto
  const breadcrumbItems = breadcrumbs || [
    { text: 'Inicio', link: '/' },
    { text: title, link: '' }, // La página actual no tiene link
  ];

  return (
    <section
      className="relative h-80 md:h-[400px] flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-center px-4 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold font-sen">
          {title}
        </h1>

        {/* --- LÓGICA MEJORADA PARA LA MIGA DE PAN --- */}
        <div className="mt-4 text-sm md:text-base">
          {breadcrumbItems.map((item, index) => (
            <span key={index}>
              {/* Si no es el último item, es un enlace */}
              {index < breadcrumbItems.length - 1 ? (
                <Link to={item.link} className="hover:text-[#06A3DA] transition-colors">
                  {item.text}
                </Link>
              ) : (
                // Si es el último item, es solo texto con el color de acento
                <span className="text-[#06A3DA]">{item.text}</span>
              )}

              {/* Añadimos el separador si no es el último item */}
              {index < breadcrumbItems.length - 1 && <span className="mx-2">/</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}