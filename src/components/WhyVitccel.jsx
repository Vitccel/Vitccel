import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Un ícono más vistoso

export default function WhyVitccel() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-40 grid lg:grid-cols-2 gap-12 items-center">
        {/* Columna de imagen */}
        <div className="order-last lg:order-first">
          <img 
            src="/assets/img/ingeniero-en-centro-de-datos.png" // Usa una imagen que represente profesionalismo y tecnología
            alt="Equipo de Vitccel asesorando a un cliente en infraestructura de TI"
            className="rounded-lg shadow-2xl object-cover w-full h-full"
          />
        </div>

        {/* Columna de texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#091E3E] font-sen">Su Aliado Tecnológico de Confianza</h2>
          <p className="mt-4 text-lg text-gray-700">
            Más que un proveedor, somos un socio estratégico comprometido con el éxito y la transformación digital de su empresa. Nuestra experiencia y enfoque personalizado nos diferencian.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-start">
              <CheckCircleIcon className="text-[#34AD54] mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold font-sen text-[#0D486B]">Experiencia Comprobada</h4>
                <p className="text-gray-600">Más de 10 años impulsando empresas en Cali y toda Colombia.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="text-[#34AD54] mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold font-sen text-[#0D486B]">Soporte 24/7 Real</h4>
                <p className="text-gray-600">Nuestro equipo está disponible para garantizar la continuidad de su negocio, sin excusas.</p>
              </div>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="text-[#34AD54] mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-bold font-sen text-[#0D486B]">Soluciones a la Medida</h4>
                <p className="text-gray-600">Analizamos sus necesidades para ofrecerle tecnología que realmente aporta valor.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}