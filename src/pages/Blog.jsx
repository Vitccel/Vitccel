import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/PageBanner';
import CtaSection from '../components/CtaSection';
import sanityClient, { urlFor } from '../apis/sanityClient';

// --- COMPONENTE SKELETON SUGERIDO ---
// Se usa para mostrar una previsualización mientras cargan los datos.
const PostCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="bg-gray-200 h-5 w-20 rounded-full animate-pulse mb-3"></div>
      <div className="bg-gray-200 h-6 w-3/4 rounded animate-pulse mb-3"></div>
      <div className="bg-gray-200 h-6 w-1/2 rounded animate-pulse"></div>
      <div className="flex-grow"></div>
      <div className="bg-gray-200 h-4 w-28 rounded animate-pulse mt-4"></div>
    </div>
  </div>
);


const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

export default function Blog() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- TU LÓGICA DE FETCH (SIN CAMBIOS) ---
  // Esta parte se mantiene exactamente como la tenías, lo cual es correcto.
  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        "categories": categories[]->{title, slug}
      }
    `).then((data) => {
      setPosts(data);
      setLoading(false);
    }).catch((err) => {
      setError('Error al cargar los posts.');
      setLoading(false);
      console.error(err);
    });
  }, []);

  const breadcrumbs = [
    { text: 'Inicio', link: '/' },
    { text: 'Blog', link: '/blog' },
  ];

  // --- ÚNICO CAMBIO: LA LÓGICA DE RENDERIZACIÓN ---
  // Eliminamos los "if (loading) return..." de aquí
  // para que el layout principal siempre se muestre.

  return (
    <>
      <Helmet>
        <title>Blog | Actualidad en Tecnología y Ciberseguridad | Vitccel</title>
        <meta name="description" content="Explore nuestro blog para obtener las últimas noticias, consejos y análisis sobre ciberseguridad, soluciones en la nube, y transformación digital para empresas en Colombia." />
      </Helmet>
      
      <PageBanner title="Nuestro Blog" breadcrumbs={breadcrumbs} />

      <section className="bg-gray-50">
        <div className="container mx-auto py-20 px-4 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Si está cargando, muestra los skeletons */}
            {loading && (
              [...Array(6)].map((_, index) => <PostCardSkeleton key={index} />)
            )}

            {/* Si hay un error, muestra el mensaje de error */}
            {error && (
              <p className="md:col-span-2 lg:col-span-3 text-center text-red-600">{error}</p>
            )}

            {/* Si terminó de cargar y no hay error, muestra los posts */}
            {!loading && !error && posts && posts.map((post) => (
              <Link to={`/blog/${post.slug.current}`} key={post._id} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden group">
                {post.mainImage && (
                  <img 
                    src={urlFor(post.mainImage).width(500).height(300).url()}
                    alt={`Portada del post ${post.title}`}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6 flex flex-col flex-grow">
                  {post.categories && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map(cat => (
                        <span key={cat.slug.current} className="bg-[#EEF9FF] text-xs font-bold text-[#0D486B] px-2 py-1 rounded-full">{cat.title}</span>
                      ))}
                    </div>
                  )}
                  <h3 className="text-xl font-bold font-sen text-[#0D486B] mb-3 group-hover:text-[#06A3DA] transition-colors">{post.title}</h3>
                  <div className="flex-grow"></div>
                  <p className="text-sm text-gray-500 mt-4">{formatDate(post.publishedAt)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <CtaSection />
    </>
  );
}