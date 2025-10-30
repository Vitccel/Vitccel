import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// 1. IMPORTAR ICONOS PARA EL MENÚ MÓVIL
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar({ isScrolled }) {
  // 2. GESTIÓN DEL ESTADO PARA ABRIR/CERRAR EL MENÚ
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navTextColor = isScrolled ? 'text-gray-800' : 'text-white';

  return (
    <>
      {/* Contenedor Principal del Navbar */}
      <div
        className={`
          w-full flex justify-between items-center px-4 md:px-40 transition-all duration-300
          ${isScrolled ? 'py-2' : 'py-6 border-b border-white/20'}
        `}
      >
        {/* Logo */}
        <div
          className={`
            font-sen text-4xl leading-[48px] font-medium 
            ${isScrolled ? 'text-[#0d486b]' : 'text-white'}
          `}
        >
          <a href="/">Vitccel</a>
        </div>

        {/* 3. MENÚ DE ESCRITORIO (Oculto en mobile) */}
        <div className={`hidden md:flex items-center space-x-8 font-medium`}>
          <NavLink to="/" className={/* ... (código sin cambios) ... */ (props) => getNavLinkClasses(props, isScrolled)}>Inicio</NavLink>
          <NavLink to="/servicios" className={(props) => getNavLinkClasses(props, isScrolled)}>Servicios</NavLink>
          <NavLink to="/contacto" className={(props) => getNavLinkClasses(props, isScrolled)}>Contacto</NavLink>
        </div>

        {/* 4. BOTÓN HAMBURGUESA (Solo en mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className={`p-2 rounded-md ${navTextColor}`}>
            <MenuIcon fontSize="large" />
          </button>
        </div>
      </div>

      {/* 5. MENÚ OVERLAY (Solo para mobile) */}
      <div
        className={`
          fixed top-0 left-0 w-full h-screen bg-[#0d486b] z-50 transform
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Botón para cerrar el menú */}
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-white p-2 rounded-md">
            <CloseIcon fontSize="large" />
          </button>
        </div>

        {/* Enlaces del menú móvil */}
        <div className="flex flex-col items-center justify-center h-full -mt-20">
          <NavLink to="/" onClick={toggleMenu} className={getMobileNavLinkClasses}>Inicio</NavLink>
          <NavLink to="/servicios" onClick={toggleMenu} className={getMobileNavLinkClasses}>Servicios</NavLink>
          <NavLink to="/contacto" onClick={toggleMenu} className={getMobileNavLinkClasses}>Contacto</NavLink>
        </div>
      </div>
    </>
  );
}

// FUNCIONES HELPER PARA MANTENER EL JSX LIMPIO

// Estilos para los enlaces de escritorio
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

// Estilos para los enlaces del menú móvil
const getMobileNavLinkClasses = ({ isActive }) => {
  const baseClasses = "py-4 text-3xl font-sen font-medium text-white transition-colors hover:text-cyan-400";
  const activeClasses = "!text-cyan-400"; // Usamos '!' para asegurar que sobreescriba otros colores

  return `${baseClasses} ${isActive ? activeClasses : ''}`;
};