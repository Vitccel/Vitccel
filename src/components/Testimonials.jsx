import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination'; 

// 4. Quitamos los iconos de las flechas
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// 5. ACTUALIZAMOS LOS DATOS para incluir la ruta del logo
const testimonialsData = [
  {
    quote: "La modernización integral que realizamos con Vitccel S.A.S. ha sido transformadora para Fábrica de Calzado Rómulo; logramos reducir en un 70% los tiempos de respuesta de nuestros sistemas y eliminamos las caídas de red que tanto nos afectaban. Gracias a su solución robusta y la implementación de Wi-Fi 6 y servidores virtualizados, hoy contamos con una infraestructura estable y segura que impulsó un aumento del 40% en la productividad administrativa.",
    author: "Juan camilo Vargas",
    company: "Coordinador de TI, Fábrica de Calzado Rómulo",
    logoSrc: "/assets/img/logo-romulo2.png",
  },
  {
    quote: "El equipo de Vitccel es una extensión de nuestro departamento de TI. Su soporte técnico proactivo en equipos, redes y antivirus nos ha permitido operar sin interrupciones, minimizando el tiempo de inactividad. La rapidez y eficacia de su respuesta son excepcionales y nos permiten enfocarnos al 100% en nuestro negocio.",
    author: "Fernando Cordoba",
    company: "Gerente general, Mec S.A.S",
    logoSrc: "/assets/img/Mec.png", // Reemplaza con tus logos
  },
  {
    quote: "La implementación de fibra óptica en nuestro campus por parte de Vitccel fue impecable, mejorando radicalmente nuestra conectividad para el aprendizaje digital. Sus soluciones de copias de seguridad en la nube nos dan la tranquilidad de que la información de nuestros estudiantes y personal está siempre protegida. Son un verdadero aliado estratégico para nuestra institución.",
    author: "Wilber pachon",
    company: "Coordinador de TI & Audiovisuales, Colegio Americano Cali.",
    logoSrc: "/assets/img/americano.png", // Reemplaza con tus logos
  },
];

export default function Testimonials() {
  // 6. ELIMINAMOS las refs ya que no hay botones de navegación
  // const navigationPrevRef = useRef(null);
  // const navigationNextRef = useRef(null);

  return (
    <section id="testimonios" className="py-20 bg-[#0D486B] text-white">
      <div className="container mx-auto px-4 md:px-40 relative">
        <h2 className="text-3xl md:text-4xl font-bold font-sen text-center mb-12">Lo que dicen nuestros clientes</h2>
        
        <Swiper
          // 7. ACTUALIZAMOS los módulos
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          // 8. ELIMINAMOS las props 'navigation' y 'onBeforeInit'
          className="pb-16" // Aumentamos un poco el padding para dar espacio al logo y la paginación
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="text-center px-4 md:px-16">
                <FormatQuoteIcon style={{ fontSize: 60 }} className="text-[#06A3DA] opacity-50 mx-auto" />
                <p className="text-xl md:text-2xl italic mt-4 max-w-3xl mx-auto">"{testimonial.quote}"</p>
                <div className="mt-8"> {/* Aumentamos el margen superior */}
                  <h4 className="font-bold text-lg font-sen">{testimonial.author}</h4>
                  <p className="text-gray-300">{testimonial.company}</p>
                </div>

                {/* 9. AÑADIMOS LA IMAGEN DEL LOGO */}
                <img 
                  src={testimonial.logoSrc} 
                  alt={`Logo de ${testimonial.company}`} 
                  className="mt-6 mx-auto h-12 w-auto object-contain" // Estilos para el logo
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 10. ELIMINAMOS los botones de navegación de aquí */}
      </div>
    </section>
  );
}