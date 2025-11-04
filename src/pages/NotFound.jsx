import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Usaremos un icono para darle un toque visual
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada | Vitccel</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="bg-[#091E3E] text-white"> {/* 1. Fondo oscuro */}
        <div className="container mx-auto px-4 py-[80px] md:py-40 flex flex-col items-center justify-center text-center"> {/* 2. Mayor padding y centrado */}

          <ReportProblemOutlinedIcon 
            sx={{ fontSize: 80 }} 
            className="text-[#06A3DA] mb-6" // 3. Color de acento para el icono
          />

          <h1 className="text-5xl md:text-6xl font-bold font-sen">
            404
          </h1>

          <h2 className="mt-4 text-2xl md:text-3xl font-sen text-gray-200"> {/* 4. Color de texto más suave */}
            Página no encontrada
          </h2>
          
          <p className="mt-6 max-w-lg text-lg text-gray-300"> {/* 4. Color de texto más suave */}
            Lo sentimos, la página que estás buscando no existe. Puede que el enlace esté roto, que la página haya sido eliminada o que la dirección no sea correcta.
          </p>

          <Link
            to="/"
            className="inline-block mt-10 bg-[#06A3DA] hover:bg-[#0582ab] text-white font-bold py-4 px-10 rounded-full transition-colors duration-300 text-lg shadow-lg hover:shadow-cyan-400/50"
          >
            Volver a la Página de Inicio
          </Link>

        </div>
      </section>
    </>
  );
}