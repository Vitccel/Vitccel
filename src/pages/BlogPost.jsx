// src/pages/BlogPost.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import sanityClient, { urlFor } from '../apis/sanityClient';
import { PortableText } from '@portabletext/react';
import CtaSection from '../components/CtaSection';

// --- COMPONENTE SKELETON PARA ESTA PÁGINA ---
// Muestra una previsualización visual de la página mientras se cargan los datos.
const BlogPostSkeleton = () => (
    <>
        {/* Skeleton del Encabezado */}
        <header className="relative h-96 md:h-[500px] flex items-end justify-center bg-gray-200 animate-pulse">
            <div className="relative z-10 text-center px-4 md:px-40 pb-12 md:pb-20 w-full">
                {/* Skeleton del Título */}
                <div className="h-12 bg-gray-300 rounded-md w-3/4 mx-auto mb-4 animate-pulse"></div>
                {/* Skeleton de la Fecha */}
                <div className="h-6 bg-gray-300 rounded-md w-1/3 mx-auto mb-4 animate-pulse"></div>
                {/* Skeleton de las Categorías */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <div className="h-6 w-24 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="h-6 w-20 bg-gray-300 rounded-full animate-pulse"></div>
                </div>
            </div>
        </header>

        {/* Skeleton del Contenido del Post */}
        <div className="container mx-auto py-16 md:py-20 px-4 md:px-40">
            <div className="prose prose-lg max-w-3xl mx-auto space-y-6">
                <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-20 bg-gray-200 rounded w-full animate-pulse mt-8"></div>
                <div className="h-6 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            </div>
        </div>
    </>
);


// Función para formatear la fecha
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
};

// Función para generar un extracto para SEO
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
    const { slug } = useParams();

    useEffect(() => {
        // La consulta a Sanity se mantiene exactamente igual.
        const query = `*[_type == "post" && slug.current == $slug][0]{
            _id,
            title,
            slug,
            mainImage,
            publishedAt,
            "categories": categories[]->{title, slug},
            body
        }`;

        sanityClient.fetch(query, { slug })
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
    }, [slug]);

    // Función que genera el schema JSON-LD. Se define aquí para usarla solo cuando 'post' exista.
    const getArticleSchema = (postData) => ({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": postData.title,
        "image": urlFor(postData.mainImage).url(),
        "datePublished": postData.publishedAt,
        "author": {
            "@type": "Organization",
            "name": "Vitccel"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Vitccel",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.vitccel.com/assets/logos/logo-vitccel.png" // URL de tu logo
            }
        },
        "description": generateExcerpt(postData.body),
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.vitccel.com/blog/${postData.slug.current}`
        }
    });

    return (
        <>
            {/* LÓGICA DE RENDERIZADO CONDICIONAL */}

            {/* 1. Muestra el esqueleto mientras carga */}
            {loading && <BlogPostSkeleton />}

            {/* 2. Muestra un mensaje de error amigable si algo falla */}
            {error && (
                <div className="text-center py-40 container mx-auto px-4">
                    <h1 className="text-3xl font-bold font-sen mb-4">Oops! Algo salió mal.</h1>
                    <p className="text-lg text-gray-600">{error}</p>
                    <Link to="/blog" className="mt-8 inline-block bg-[#06A3DA] hover:bg-[#0582ab] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 font-sen">
                        ← Volver al Blog
                    </Link>
                </div>
            )}

            {/* 3. Muestra el contenido real solo si la carga finalizó, no hay errores y el post existe */}
            {!loading && !error && post && (
                <>
                    <Helmet>
                        <title>{`${post.title} | Blog de Vitccel`}</title>
                        <meta name="description" content={generateExcerpt(post.body)} />
                        <script type="application/ld+json">{JSON.stringify(getArticleSchema(post))}</script>
                    </Helmet>

                    <article>
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

                        <div className="container mx-auto py-16 md:py-20 px-4 md:px-40">
                            <div className="prose prose-lg max-w-3xl mx-auto">
                                {post.body && <PortableText value={post.body} />}
                            </div>

                            <div className="text-center mt-16">
                                <Link to="/blog" className="inline-block bg-[#06A3DA] hover:bg-[#0582ab] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 font-sen">
                                    ← Volver al Blog
                                </Link>
                            </div>
                        </div>
                    </article>
                </>
            )}

            {/* El CtaSection siempre se renderiza al final, fuera de las condiciones */}
            <CtaSection />
        </>
    );
}