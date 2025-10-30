/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        "Sen": ["sen", "sans-serif"] 
      },
      // ... tus otros colores y extensiones

      // KEYFRAMES PARA LAS ANIMACIONES
      keyframes: {
        // Animación para el fondo de imagen (Efecto Ken Burns)
        'pan-up': {
          '0%': { transform: 'scale(1.1) translateY(0.5rem)', transformOrigin: 'center center' },
          '100%': { transform: 'scale(1.2) translateY(-0.5rem)', transformOrigin: 'center center' },
        },
        // Animación para la entrada del texto
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(2rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      // ASIGNACIÓN DE LAS ANIMACIONES
      animation: {
        // Duración de 20s, infinita y alterna para un movimiento suave
        'pan-up': 'pan-up 20s infinite alternate ease-in-out',
        // Duración de 1s para una entrada elegante del texto
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}