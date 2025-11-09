// src/pages/CategoryPage.jsx

import{ useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/PageBanner';
import CtaSection from '../components/CtaSection';
import sanityClient, { urlFor } from '../apis/sanityClient';

// --- COMPONENTE SKELETON REUTILIZADO ---
// Es exactamente el mismo que usamos en la página principal del blog.
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

// Función para formatear la fecha
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
};

export default function CategoryPage() {
    const [posts, setPosts] = useState(null);
    const [categoryTitle, setCategoryTitle] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { slug } = useParams();

    // --- LÓGICA DE FETCH (SIN CAMBIOS) ---
    // Tu lógica para obtener primero la categoría y luego los posts es correcta y no se modifica.
    useEffect(() => {
        const categoryQuery = `*[_type == "category" && slug.current == $slug][0]{ title }`;
        
        sanityClient.fetch(categoryQuery, { slug })
            .then(categoryData => {
                if (!categoryData) {
                    throw new Error('Categoría no encontrada');
                }
                setCategoryTitle(categoryData.title);

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
                setError(err.message || 'Error al cargar la categoría.');
                setLoading(false);
                console.error(err);
            });
    }, [slug]);

    // Título dinámico para el banner. Muestra un estado de carga.
    const pageTitle = loading ? 'Cargando...' : categoryTitle;

    const breadcrumbs = [
        { text: 'Inicio', link: '/' },
        { text: 'Blog', link: '/blog' },
        { text: pageTitle, link: `/blog/categoria/${slug}` },
    ];

    return (
        <>
            {/* El Helmet se renderiza solo cuando tenemos el título para asegurar un SEO correcto */}
            {!loading && !error && (
                <Helmet>
                    <title>{`Artículos sobre ${categoryTitle} | Blog de Vitccel`}</title>
                    <meta name="description" content={`Explore todos nuestros artículos y noticias sobre ${categoryTitle}. Manténgase actualizado con los análisis de expertos de Vitccel.`} />
                </Helmet>
            )}

            {/* El PageBanner siempre está visible, mostrando un título de carga si es necesario */}
            <PageBanner title={pageTitle} breadcrumbs={breadcrumbs} />

            <section className="bg-gray-50">
                <div className="container mx-auto py-20 px-4 md:px-40">
                    
                    {/* --- LÓGICA DE RENDERIZADO CONDICIONAL --- */}
                    {loading && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...Array(6)].map((_, index) => <PostCardSkeleton key={index} />)}
                        </div>
                    )}

                    {error && (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-red-600">Oops! Algo salió mal.</h2>
                            <p className="mt-4 text-gray-600">{error}</p>
                            <Link to="/blog" className="inline-block mt-8 bg-[#06A3DA] hover:bg-[#0582ab] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 font-sen">
                                ← Volver al Blog
                            </Link>
                        </div>
                    )}

                    {!loading && !error && posts && posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        // Manejo del caso donde la categoría existe pero no tiene posts
                        !loading && !error && (
                            <div className="text-center">
                                <h2 className="text-2xl font-bold">No hay artículos todavía</h2>
                                <p className="mt-4 text-gray-600">Pronto publicaremos nuevo contenido en esta categoría.</p>
                                <Link to="/blog" className="inline-block mt-8 bg-[#06A3DA] hover:bg-[#0582ab] text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 font-sen">
                                    ← Volver al Blog
                                </Link>
                            </div>
                        )
                    )}
                </div>
            </section>
            
            {/* El CtaSection siempre está visible */}
            <CtaSection />
        </>
    );
}