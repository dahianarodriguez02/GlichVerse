import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { FooterCard } from './components/FooterCard'

import { PaginaComic } from './components/PaginaComic'
import { Comic } from './components/Comic'
import { Tienda } from './components/Tienda'
import { HistoriaComic } from './components/HistoriaComic'
import { Capitulos } from './components/Capitulos'

export const App = () => {
  return (
    <>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaComic />} />
          <Route path="/comic" element={<Comic />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/HistoriaComic" element={<HistoriaComic />} />
          <Route path="/ver-comic" element={<Capitulos />} />
        </Routes>
      </BrowserRouter>

      <FooterCard />
    </>
  )
}