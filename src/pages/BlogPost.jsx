// src/pages/BlogPost.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import sanityClient, { urlFor } from '../apis/sanityClient';
import { PortableText } from '@portabletext/react'; // 1. IMPORTAMOS EL RENDERIZADOR
import CtaSection from '../components/CtaSection';

// Función para formatear la fecha (la misma que en Blog.jsx)
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
};

// Esto crea una descripción corta a partir del cuerpo del post para el SEO y el schema.
const generateExcerpt = (blocks = []) => {
    return blocks
        .filter(block => block._type === 'block' && block.children)
        .map(block => block.children.map(child => child.text).join(''))
        .join(' ')
        .substring(0, 155) + '...';
};

export default function BlogPost() {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. OBTENEMOS EL SLUG DE LA URL
    // useParams() es un hook de React Router que nos da acceso a los parámetros de la URL
    const { slug } = useParams();

    useEffect(() => {
        // 3. HACEMOS UNA CONSULTA A SANITY PARA UN SOLO POST
        // Usamos el slug que obtuvimos de la URL para encontrar el post correcto
        const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      "categories": categories[]->{title, slug},
      body
    }`;

        sanityClient.fetch(query, { slug }) // Pasamos el slug como parámetro a la consulta
            .then((data) => {
                if (data) {
                    setPost(data);
                } else {
                    setError('Post no encontrado.');
                }
                setLoading(false);
            })
            .catch((err) => {
                setError('Error al cargar el post.');
                setLoading(false);
                console.error(err);
            });
    }, [slug]); // El efecto se ejecuta cada vez que el slug de la URL cambia

    if (loading) return <div className="text-center py-40">Cargando post...</div>;
    if (error) return <div className="text-center py-40 text-red-600">{error}</div>;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": urlFor(post.mainImage).url(),
        "datePublished": post.publishedAt,
        "author": {
            "@type": "Organization",
            "name": "Vitccel"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Vitccel",
            "logo": {
                "@type": "ImageObject",
                // ¡Importante! Reemplaza esto con la URL completa de tu logo en producción
                "url": "https://www.vitccel.com/assets/logos/logo-vitccel.png"
            }
        },
        "description": generateExcerpt(post.body),
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.vitccel.com/blog/${post.slug.current}` // URL completa del post
        }
    };

    return (
        <>
            {/* 4. SEO DINÁMICO PARA CADA POST */}
            <Helmet>
                <title>{`${post.title} | Blog de Vitccel`}</title>
                <meta name="description" content={generateExcerpt(post.body)} />

                {/* --- 3. INYECTAMOS EL SCHEMA EN EL HEAD --- */}
                <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            </Helmet>

            <article>
                {/* Encabezado del Post con imagen de portada */}
                {post.mainImage && (
                    <header
                        className="relative h-96 md:h-[500px] flex items-end justify-center text-white bg-cover bg-center"
                        style={{ backgroundImage: `url(${urlFor(post.mainImage).url()})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-60"></div>
                        <div className="relative z-10 text-center px-4 md:px-40 pb-12 md:pb-20">
                            <h1 className="text-4xl md:text-5xl font-bold font-sen mb-4">{post.title}</h1>
                            <p className="text-lg text-gray-300">{formatDate(post.publishedAt)}</p>
                            {post.categories && (
                                <div className="flex flex-wrap justify-center gap-2 mt-4">
                                    {post.categories.map(cat => (
                                        <Link key={cat.slug.current} to={`/blog/categoria/${cat.slug.current}`} className="bg-white/20 hover:bg-white/30 text-xs font-bold text-white px-3 py-1 rounded-full transition-colors">{cat.title}</Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </header>
                )}

                {/* Contenido del Post */}
                <div className="container mx-auto py-16 md:py-20 px-4 md:px-40">
                    <div className="prose prose-lg max-w-3xl mx-auto">
                        {/* 5. RENDERIZAMOS EL CONTENIDO ENRIQUECIDO */}
                        {post.body && <PortableText value={post.body} />}
                    </div>

                    {/* Enlace para volver al blog */}
                    <div className="text-center mt-16">
                        <Link to="/blog" className="inline-block bg-[#06A3DA] hover:bg-[#0582ab] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 font-sen">
                            ← Volver al Blog
                        </Link>
                    </div>
                </div>
            </article>

            <CtaSection />
        </>
    );
}