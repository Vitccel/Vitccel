import React from 'react';
import { Link } from 'react-router-dom';

// Importar los iconos de MUI que vamos a necesitar
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer() {
  return (
    <footer className="bg-[#0D486B] text-white pt-16">
      <div className="container mx-auto px-4 md:px-40">
        
        {/* Contenedor principal del grid */}
        {/* Se apila en mobile (1 columna), 2 columnas en tablet, y 4 en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Columna 1: Logo y Redes Sociales */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="font-sen text-3xl font-medium">
              Vitccel
            </Link>
            <p className="mt-4 text-gray-300 text-sm max-w-xs">
              Soluciones tecnológicas integrales para impulsar la transformación digital de su empresa en Colombia.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="bg-white/10 hover:bg-[#06A3DA] transition-colors p-2 rounded-full">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Twitter" className="bg-white/10 hover:bg-[#06A3DA] transition-colors p-2 rounded-full">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Instagram" className="bg-white/10 hover:bg-[#06A3DA] transition-colors p-2 rounded-full">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-white/10 hover:bg-[#06A3DA] transition-colors p-2 rounded-full">
                <LinkedInIcon />
              </a>
            </div>
          </div>

          {/* Columna 2: Links de Interés */}
          <div>
            <h4 className="font-bold font-sen text-lg mb-4">Links de Interés</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/" className="hover:text-[#06A3DA] transition-colors">Inicio</Link></li>
              <li><Link to="/nosotros" className="hover:text-[#06A3DA] transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/servicios" className="hover:text-[#06A3DA] transition-colors">Servicios</Link></li>
              <li><Link to="/contacto" className="hover:text-[#06A3DA] transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="font-bold font-sen text-lg mb-4">Nuestros Servicios</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/servicios/nube" className="hover:text-[#06A3DA] transition-colors">Soluciones en la Nube</Link></li>
              <li><Link to="/servicios/seguridad" className="hover:text-[#06A3DA] transition-colors">Ciberseguridad</Link></li>
              <li><Link to="/servicios/backup" className="hover:text-[#06A3DA] transition-colors">Backup & Recovery</Link></li>
              <li><Link to="/servicios/redes" className="hover:text-[#06A3DA] transition-colors">Redes y Conectividad</Link></li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-bold font-sen text-lg mb-4">Canales de Contacto</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <PhoneIcon className="text-[#06A3DA]" />
                <a href="tel:+573235806796" className="hover:text-[#06A3DA] transition-colors">+57 323 5806796</a>
              </li>
              <li className="flex items-center space-x-3">
                <EmailIcon className="text-[#06A3DA]" />
                <a href="mailto:contacto@vitccel.com" className="hover:text-[#06A3DA] transition-colors">contacto@vitccel.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <LocationOnIcon className="text-[#06A3DA] mt-1" />
                <span>Bogotá, Colombia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra de Copyright Inferior */}
        <div className="mt-16 pt-8 pb-8 border-t border-white/10 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Vitccel. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
}