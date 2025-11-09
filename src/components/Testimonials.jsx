import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Es buena práctica mantener los datos fuera del componente.
// Podrías mover esto a un archivo separado, ej: src/data/testimonialsData.js
const testimonialsData = [
  {
    quote: "La modernización integral que realizamos con Vitccel ha sido transformadora. Redujimos en un 70% los tiempos de respuesta de nuestros sistemas y eliminamos las caídas de red. Gracias a su solución robusta, hoy contamos con una infraestructura estable y segura que impulsó un aumento del 40% en la productividad.",
    author: "Juan Camilo Vargas",
    company: "Coordinador de TI, Fábrica de Calzado Rómulo",
    logoSrc: "/assets/img/logo-romulo2.png",
  },
  {
    quote: "El equipo de Vitccel es una extensión de nuestro departamento de TI. Su soporte técnico proactivo nos ha permitido operar sin interrupciones, minimizando el tiempo de inactividad. La rapidez y eficacia de su respuesta son excepcionales y nos permiten enfocarnos al 100% en nuestro negocio.",
    author: "Fernando Cordoba",
    company: "Gerente general, Mec S.A.S",
    logoSrc: "/assets/img/Mec.png",
  },
  {
    quote: "La implementación de fibra óptica por parte de Vitccel fue impecable. Sus soluciones de copias de seguridad en la nube nos dan la tranquilidad de que la información de nuestros estudiantes y personal está siempre protegida. Son un verdadero aliado estratégico para nuestra institución.",
    author: "Wilber Pachon",
    company: "Coordinador de TI & Audiovisuales, Colegio Americano Cali.",
    logoSrc: "/assets/img/americano.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-[#0D486B] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-20"> {/* Reducimos un poco el padding horizontal en escritorio */}
        
        {/* Título animado */}
        <h2 className="text-3xl md:text-4xl font-bold font-sen text-center mb-12 animate-fade-in-up">
          Lo que dicen nuestros <span className="text-[#06A3DA]">aliados</span>
        </h2>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
          <Swiper
            modules={[Pagination, Autoplay]} // Añadimos Autoplay para un toque dinámico
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 8000, // Un delay más largo para que dé tiempo a leer
              disableOnInteraction: true,
            }}
            className="pb-16" // Espacio para la paginación
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                {/* 1. La "Tarjeta" del testimonio */}
                <div className="bg-[#091E3E] rounded-lg shadow-xl p-8 md:p-12 mx-auto max-w-4xl relative border-t-4 border-[#06A3DA]">
                  
                  {/* 2. Icono de comillas posicionado de forma absoluta */}
                  <FormatQuoteIcon 
                    style={{ fontSize: 90 }} 
                    className="text-[#06A3DA] opacity-10 absolute top-4 left-4" 
                  />
                  
                  <div className="relative z-10">
                    {/* 3. Tipografía mejorada y más legible */}
                    <p className="text-lg md:text-xl italic text-gray-200 leading-relaxed text-center">
                      "{testimonial.quote}"
                    </p>
                    
                    {/* Contenedor del autor y el logo */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
                      <img 
                        src={testimonial.logoSrc} 
                        alt={`Logo de ${testimonial.company}`} 
                        className="h-14 w-auto object-contain"
                      />
                      <div className="text-center sm:text-left">
                        <h4 className="font-bold text-lg font-sen text-white">{testimonial.author}</h4>
                        <p className="text-gray-400">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}