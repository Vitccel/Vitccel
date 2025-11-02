import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  // Obtenemos la información de la ruta actual, específicamente el 'pathname' (ej: "/servicios/nube")
  const { pathname } = useLocation();

  // Usamos useEffect para ejecutar una acción cada vez que el 'pathname' cambia
  useEffect(() => {
    // Hacemos que la ventana del navegador se desplace a las coordenadas (0, 0) de forma instantánea
    window.scrollTo(0, 0);
  }, [pathname]); // El array de dependencias asegura que este efecto SOLO se ejecute cuando la URL cambie

  // Este componente no renderiza nada en la pantalla, solo contiene lógica.
  return null;
}