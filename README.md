# Sitio Web Oficial de Vitccel

![Vitccel Logo](/public/assets/logos/logo-vitccel.png)

Este repositorio contiene el código fuente del sitio web oficial de Vitccel, una empresa líder en soluciones tecnológicas, ciberseguridad y soporte de TI para el mercado colombiano. El sitio ha sido desarrollado con un enfoque "AI-first", utilizando las últimas tecnologías de frontend y optimización para motores de búsqueda tradicionales y de Inteligencia Artificial.

## 🚀 Sobre Vitccel

**Vitccel** es un aliado tecnológico estratégico para empresas en Colombia con más de 10 años de experiencia. Su misión es impulsar la **transformación digital** de sus clientes, garantizando la continuidad del negocio, la seguridad de los datos y la eficiencia operativa a través de un portafolio de servicios integral.

Sus áreas de especialización incluyen:
*   **Ciberseguridad Avanzada** (Partners de Acronis)
*   **Soluciones en la Nube** (IaaS, Servidores Virtuales)
*   **Backup & Recovery** y Recuperación de Desastres
*   **Infraestructura de Redes** (Fibra Óptica, Cableado Estructurado)
*   **Licenciamiento de Software** (Partners de Microsoft)
*   **Soporte de TI y Servicios Gestionados**

## 💻 Tecnologías y Arquitectura

Este proyecto fue construido como una **Single-Page Application (SPA)** utilizando un stack tecnológico moderno, rápido y altamente optimizado.

### Frameworks y Librerías Principales
*   **Vite:** Herramienta de desarrollo de frontend de próxima generación que proporciona un arranque de servidor casi instantáneo y Hot Module Replacement (HMR) ultrarrápido.
*   **React:** Librería principal para construir la interfaz de usuario a través de una arquitectura basada en componentes.
*   **React Router:** Para gestionar la navegación y las rutas del lado del cliente, permitiendo una experiencia de usuario fluida sin recargas de página.

### Diseño y UI/UX
*   **Material-UI (MUI):** Utilizado por sus componentes robustos y bien diseñados, como los iconos, y por sus hooks avanzados como `useScrollTrigger` para crear un header dinámico.
*   **Tailwind CSS:** Framework CSS "utility-first" para un estilizado rápido, responsivo y altamente personalizable directamente en el marcado JSX. Se utilizó el plugin oficial `@tailwindcss/typography` para dar estilo automático al contenido del blog.
*   **Swiper.js:** Para la creación de sliders táctiles, modernos y responsivos, utilizados en el hero de la página de inicio y en la sección de testimonios.

### Integraciones y Servicios Externos
*   **Headless CMS (Sanity.io):** Todo el contenido del blog (posts y categorías) es gestionado por el cliente en un panel de control externo y amigable proporcionado por Sanity. El sitio web consume estos datos en tiempo real a través de la API de Sanity.
*   **Backend-as-a-Service (Formspree):** El formulario de contacto funciona gracias a Formspree, que gestiona el envío de los datos al correo del cliente sin necesidad de un backend propio, asegurando alta disponibilidad y filtrado de spam.

### Optimización (SEO y AIO)
*   **`react-helmet-async`:** Para gestionar dinámicamente las meta etiquetas (`title`, `description`) de cada página, una práctica esencial para el SEO en una SPA.
*   **Datos Estructurados (Schema.org):** Implementación extensiva de schemas `LocalBusiness`, `Service`, `Article`, y `FAQPage` en formato JSON-LD para la Optimización para Inteligencia Artificial (AIO), mejorando la forma en que el contenido es entendido por Google y otros LLMs.

## 🤖 El Papel de la Inteligencia Artificial en el Desarrollo

La Inteligencia Artificial fue un socio colaborativo fundamental a lo largo de todo el ciclo de vida de este proyecto:

*   **Consultoría Estratégica:** La IA actuó como un consultor senior en desarrollo web, UI/UX, SEO y AIO, proporcionando análisis, recomendaciones y planes de acción estratégicos.
*   **Generación de Código:** Gran parte del código de los componentes de React, la lógica de los hooks y las consultas al CMS fueron generados y refinados con la asistencia de IA.
*   **Optimización SEO/AIO:** Todas las estrategias de AIO, incluyendo la generación de schemas y la estructura del contenido del blog, fueron co-diseñadas con la IA para asegurar las mejores prácticas de 2025.
*   **Creación de Contenido e Imágenes:** La IA fue utilizada para generar el contenido inicial de los posts del blog, así como los prompts para la creación de las imágenes de portada de cada servicio, asegurando un contenido relevante y visualmente impactante desde el lanzamiento.

## 👨‍💻 Desarrollador

Este proyecto fue desarrollado y construido por **Eduardo**, con la asistencia estratégica de IA.

*   **GitHub:** [https://github.com/E0DUAR](https://github.com/E0DUAR)

---