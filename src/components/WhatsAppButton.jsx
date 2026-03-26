export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573235806796?text=Hola%2C%20estoy%20interesado%20en%20recibir%20información%20sobre%20sus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full drop-shadow-lg hover:scale-110 transition-transform duration-300"
    >
      <img src="/assets/img/whatsapp.png" alt="WhatsApp" className="w-full h-full" />
    </a>
  );
}
