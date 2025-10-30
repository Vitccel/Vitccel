import React from 'react';
import { AppBar, Toolbar, useScrollTrigger, Slide, Box } from '@mui/material';
import SocialBar from './SocialBar';
import Navbar from './Navbar';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  const changeNavBackground = useScrollTrigger({
    disableHysteresis: true,
    threshold: 10,
  });

  return (
    <AppBar 
      position="fixed"
      elevation={changeNavBackground ? 4 : 0} 
      sx={{ 
        backgroundColor: changeNavBackground ? 'white' : 'transparent',
        boxShadow: changeNavBackground ? undefined : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <HideOnScroll>
        {/* 
          AQUÍ ESTÁ LA CORRECCIÓN CLAVE:
          Añadimos clases de Tailwind al <Box> que envuelve la SocialBar.
          - Cuando 'changeNavBackground' es true (scroll activado), aplicamos 'max-h-0'.
          - Cuando es false, le damos una altura máxima grande ('max-h-40').
          - Añadimos 'overflow-hidden' y una transición para que el colapso sea suave.
        */}
        <Box 
          className={`
            transition-[max-height] duration-300 ease-in-out overflow-hidden
            ${changeNavBackground ? 'max-h-0' : 'max-h-40'}
          `}
        > 
          <SocialBar />
        </Box>
      </HideOnScroll>
      
      <Toolbar>
        <Navbar isScrolled={changeNavBackground} />
      </Toolbar>
    </AppBar>
  );
}