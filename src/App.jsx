import React from 'react'
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
import Acronis from './pages/servicios/Acronis'
import NotFound from './pages/NotFound'
export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/servicios' element={<Servicios/>} />
        <Route path='/servicios/backup' element={<Backup/>} />
        <Route path='/servicios/nube' element={<Nube/>} />
        <Route path='/servicios/redes' element={<Redes/>} />
        <Route path='/servicios/seguridad' element={<Seguridad/>} />
        <Route path='/servicios/licencias' element={<Licencias/>} />
        <Route path='/servicios/acronis' element={<Acronis/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Layout>
  )
}
