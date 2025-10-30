import React from 'react';
// ¡YA NO NECESITAMOS useRef, useState, o useEffect!

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const slidesData = [
    {
        backgroundImage: '/assets/img/nube001.jpg',
        title: <>Impulsamos la Transformación <br /> Digital de su Empresa</>,
        description: 'Con más de 10 años de experiencia, ofrecemos soluciones tecnológicas integrales que garantizan la continuidad y el crecimiento de su negocio en Colombia.',
        buttonText: 'Descubrir Soluciones',
        buttonLink: '/servicios',
    },
    {
        backgroundImage: '/assets/img/fibra001.jpg',
        title: <>Infraestructura Robusta <br /> en la Nube y Redes</>,
        description: 'Desde servidores virtuales con Dade2 hasta licenciamiento Microsoft y redes de fibra óptica. Optimizamos su infraestructura para el máximo rendimiento.',
        buttonText: 'Explorar Infraestructura',
        buttonLink: '/servicios/soluciones-en-la-nube',
    },
    {
        backgroundImage: '/assets/img/service-4.jpg',
        title: <>Protección Avanzada <br /> con Acronis Cyber Protect</>,
        description: 'Blindamos sus datos contra ransomware y ciberataques con soluciones líderes en ciberseguridad y backup en la nube.',
        buttonText: 'Conocer Ciberseguridad',
        buttonLink: '/servicios/ciberseguridad',
    },
];

export default function HeroSlider() {
    // ¡Hemos eliminado toda la lógica de refs, estado y efectos!

    return (
        <div className="relative h-screen text-white">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                loop={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                
                // ***** LA SOLUCIÓN DEFINITIVA *****
                // Pasamos los selectores de CSS como strings.
                // Swiper se encargará de encontrarlos en el DOM.
                navigation={{
                    prevEl: '.hero-swiper-button-prev',
                    nextEl: '.hero-swiper-button-next',
                }}
                
                className="h-full"
            >
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        {({ isActive }) => (
                            <div className="relative h-full flex items-center justify-center bg-cover bg-center overflow-hidden">
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-center animate-pan-up"
                                    style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                                ></div>
                                <div className="absolute inset-0 bg-[#091E3E] opacity-70"></div>
                                {isActive && (
                                    <div className="relative z-10 text-center px-4 md:px-40 animate-fade-in-up">
                                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wider font-sen">
                                            {slide.title}
                                        </h2>
                                        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl font-sen">
                                            {slide.description}
                                        </p>
                                        <a href={slide.buttonLink} className="inline-block mt-8 bg-[#06A3DA] hover:bg-[#0582ab] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 font-sen">
                                            {slide.buttonText}
                                        </a>
                                    </div>
                                )}
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 md:left-10 md:-translate-x-0 z-20 flex space-x-4">
                {/* ***** CAMBIO CRÍTICO ***** */}
                {/* Eliminamos las 'ref' y añadimos las clases que Swiper buscará */}
                <button
                    className="hero-swiper-button-prev bg-[#06A3DA]/60 hover:bg-[#06A3DA] transition-colors rounded-full p-3 shadow-lg"
                    aria-label="Slide anterior"
                >
                    <ArrowBackIcon />
                </button>
                <button
                    className="hero-swiper-button-next bg-[#06A3DA]/60 hover:bg-[#06A3DA] transition-colors rounded-full p-3 shadow-lg"
                    aria-label="Siguiente slide"
                >
                    <ArrowForwardIcon />
                </button>
            </div>
        </div>
    );
}