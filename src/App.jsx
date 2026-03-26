import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Inicio from './pages/Inicio'
import Contacto from './pages/Contacto'
import Servicios from './pages/Servicios'
import Backup from './pages/servicios/Backup'
import Nube from './pages/servicios/Nube'
import Redes from './pages/servicios/Redes'
import Seguridad from './pages/servicios/Seguridad'
import Licencias from './pages/servicios/Licencias'
import Soporte from './pages/servicios/Soporte'
import NotFound from './pages/NotFound'
import ScrollToTop from './components/ScrollToTop'

const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const CategoryPage = lazy(() => import('./pages/CategoryPage'))

export default function App(){
  return (
    <Layout>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-[40vh] flex items-center justify-center text-gray-600">Cargando…</div>}>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/servicios' element={<Servicios/>} />
        <Route path='/servicios/backup' element={<Backup/>} />
        <Route path='/servicios/nube' element={<Nube/>} />
        <Route path='/servicios/redes' element={<Redes/>} />
        <Route path='/servicios/seguridad' element={<Seguridad/>} />
        <Route path='/servicios/licencias' element={<Licencias/>} />
        <Route path='/servicios/soporte' element={<Soporte/>} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<BlogPost />} />
        <Route path='/blog/categoria/:slug' element={<CategoryPage />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </Suspense>
    </Layout>
  )
}
