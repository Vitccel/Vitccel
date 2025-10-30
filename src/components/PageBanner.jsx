import React from 'react';
import { Link } from 'react-router-dom';

const defaultBannerImage = '/assets/img/pagebanner.jpg';

export default function PageBanner({ title, backgroundImage = defaultBannerImage }) {
  return (
    <section
      className="relative h-80 md:h-[400px] flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-center px-4 pt-20">
        <h1 className="text-4xl md:text-5xl font-bold">
          {title}
        </h1>

        <div className="mt-4 text-sm md:text-base">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Inicio</Link>
          <span className="mx-2">/</span>
          <span className="text-cyan-400">{title}</span>
        </div>
      </div>
    </section>
  );
}