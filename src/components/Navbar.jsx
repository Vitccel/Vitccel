import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const servicesLinks = [
  { name: 'Soluciones en la Nube', path: '/servicios/nube' },
  { name: 'Ciberseguridad Avanzada', path: '/servicios/seguridad' },
  { name: 'Backup & Recovery', path: '/servicios/backup' },
  { name: 'Redes y Conectividad', path: '/servicios/redes' },
  { name: 'Licenciamiento de Software', path: '/servicios/licencias' },
  { name: 'Soporte de TI', path: '/servicios/soporte' },
];

export default function Navbar({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesSubMenuOpen, setIsServicesSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsServicesSubMenuOpen(false);
    }
  };

  // 1. DEFINIMOS LAS RUTAS DE LOS LOGOS PARA MANTENER EL CÓDIGO LIMPIO
  const logoBlanco = "/assets/logos/logo-vitccel.png"; // Logo para fondo blanco
  const logoPrincipal = "/assets/logos/logo-vitccel-white.png"; // Logo para fondo oscuro/transparente

  const navTextColor = isScrolled ? 'text-gray-800' : 'text-white';

  return (
    <>
      {/* Contenedor Principal del Navbar */}
      <div className={`w-full flex justify-between items-center px-4 md:px-40 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-6 border-b border-white/20'}`}>

        <div>
          <Link to="/">
            {/* 2. APLICAMOS LA LÓGICA CONDICIONAL AL 'src' DEL LOGO */}
            <img
              src={isScrolled ? logoPrincipal : logoBlanco}
              alt="Logo de Vitccel"
              className="h-20 transition-all duration-300"
            />
          </Link>
        </div>

        {/* Menú de Escritorio */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <NavLink to="/" className={(props) => getNavLinkClasses(props, isScrolled)}>Inicio</NavLink>

          <div className="relative group">
            <NavLink
              to="/servicios"
              className={(props) => getNavLinkClasses(props, isScrolled) + ' flex items-center gap-1'}
            >
              Servicios
              <ExpandMoreIcon
                className="transition-transform duration-300 group-hover:rotate-180"
                fontSize="small"
              />
            </NavLink>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-10">
              <div className="bg-white rounded-md shadow-lg w-64">
                {servicesLinks.map((service) => (
                  <NavLink key={service.path} to={service.path} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#06A3DA] first:rounded-t-md last:rounded-b-md">
                    {service.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>


          <NavLink to="/blog" className={(props) => getNavLinkClasses(props, isScrolled)}>Blog</NavLink>

          <NavLink to="/contacto" className={(props) => getNavLinkClasses(props, isScrolled)}>Contacto</NavLink>
        </div>

        {/* Botón Hamburguesa */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`p-2 rounded-md ${navTextColor}`}>
            <MenuIcon fontSize="large" />
          </button>
        </div>
      </div>

      {/* Menú Overlay Móvil */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-[#0d486b] z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-white p-2 rounded-md">
            <CloseIcon fontSize="large" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center px-4 -mt-16">

          {/* 3. ACTUALIZAMOS EL LOGO MÓVIL PARA QUE SIEMPRE SEA EL BLANCO */}
          <Link to="/" onClick={toggleMenu} className="mb-12">
            <img
              src={logoBlanco}
              alt="Logo de Vitccel"
              className="h-24"
            />
          </Link>

          {/* Enlaces */}
          <NavLink to="/" onClick={toggleMenu} className={getMobileNavLinkClasses}>Inicio</NavLink>

          <div className="text-center">
            <div className="flex items-center justify-center">
              <NavLink to="/servicios" onClick={toggleMenu} className={getMobileNavLinkClasses}>Servicios</NavLink>
              <button onClick={() => setIsServicesSubMenuOpen(!isServicesSubMenuOpen)} className="p-2 ml-2 text-white">
                <ExpandMoreIcon className={`transition-transform duration-300 ${isServicesSubMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isServicesSubMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
              <div className="pt-2 flex flex-col items-center">
                {servicesLinks.map(service => (
                  <NavLink key={service.path} to={service.path} onClick={toggleMenu} className="py-2 text-lg text-gray-300 hover:text-cyan-400">
                    {service.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/blog" onClick={toggleMenu} className={getMobileNavLinkClasses}>Blog</NavLink>
          <NavLink to="/contacto" onClick={toggleMenu} className={getMobileNavLinkClasses}>Contacto</NavLink>
        </div>

      </div>
    </>
  );
}

// FUNCIONES HELPER (Sin cambios)
const getNavLinkClasses = ({ isActive }, isScrolled) => {
  const navTextColor = isScrolled ? 'text-gray-800' : 'text-white';
  const baseClasses = `relative transition-colors hover:text-cyan-400 ${navTextColor}`;
  const activeTransparent = 'text-cyan-400 after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-25px] after:h-[2px] after:w-8 after:bg-cyan-400';
  const activeScrolled = 'text-cyan-500 border-b-2 border-cyan-500';

  if (isActive) {
    return `${baseClasses} ${isScrolled ? activeScrolled : activeTransparent}`;
  }
  return baseClasses;
};

const getMobileNavLinkClasses = ({ isActive }) => {
  const baseClasses = "py-4 text-3xl font-sen font-medium text-white transition-colors hover:text-cyan-400";
  const activeClasses = "!text-cyan-400";
  return `${baseClasses} ${isActive ? activeClasses : ''}`;
};