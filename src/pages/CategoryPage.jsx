// src/pages/CategoryPage.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/PageBanner';
import CtaSection from '../components/CtaSection';
import sanityClient, { urlFor } from '../apis/sanityClient';

// Reutilizamos la misma función para formatear la fecha
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

export default function CategoryPage() {
  const [posts, setPosts] = useState(null);
  const [categoryTitle, setCategoryTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Usamos useParams para obtener el 'slug' de la categoría desde la URL
  const { slug } = useParams();

  useEffect(() => {
    // Primero, buscamos el título de la categoría para mostrarlo
    const categoryQuery = `*[_type == "category" && slug.current == $slug][0]{ title }`;
    
    sanityClient.fetch(categoryQuery, { slug })
      .then(categoryData => {
        if (!categoryData) {
          throw new Error('Categoría no encontrada');
        }
        setCategoryTitle(categoryData.title);

        // Luego, buscamos todos los posts que referencien a esta categoría
        const postsQuery = `*[_type == "post" && references(*[_type=="category" && slug.current == $slug]._id)] | order(publishedAt desc) {
          _id,
          title,
          slug,
          mainImage,
          publishedAt,
          "categories": categories[]->{title, slug}
        }`;
        return sanityClient.fetch(postsQuery, { slug });
      })
      .then(postsData => {
        setPosts(postsData);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
        console.error(err);
      });

  }, [slug]); // Se ejecuta cada vez que el slug de la categoría en la URL cambia

  const breadcrumbs = [
    { text: 'Inicio', link: '/' },
    { text: 'Blog', link: '/blog' },
    { text: categoryTitle, link: `/blog/categoria/${slug}` },
  ];

  if (loading) return <div className="text-center py-20">Cargando posts...</div>;
  if (error) return <div className="text-center py-20 text-red-600">{error}</div>;

  return (
    <>
      <Helmet>
        <title>{`Artículos sobre ${categoryTitle} | Blog de Vitccel`}</title>
        <meta name="description" content={`Explore todos nuestros artículos y noticias sobre ${categoryTitle}. Manténgase actualizado con los análisis de expertos de Vitccel.`} />
      </Helmet>
      
      {/* Usamos el categoryTitle para el PageBanner dinámico */}
      <PageBanner title={categoryTitle} breadcrumbs={breadcrumbs} />

      <section className="bg-gray-50">
        <div className="container mx-auto py-20 px-4 md:px-40">
          {posts && posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Reutilizamos exactamente el mismo diseño de tarjeta de post que en Blog.jsx */}
              {posts.map((post) => (
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
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold">No hay artículos todavía</h2>
              <p className="mt-4 text-gray-600">Pronto publicaremos nuevo contenido en esta categoría.</p>
              <Link to="/blog" className="inline-block mt-8 bg-[#06A3DA] hover:bg-[#0582ab] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 font-sen">
                ← Volver al Blog
              </Link>
            </div>
          )}
        </div>
      </section>
      
      <CtaSection />
    </>
  );
}