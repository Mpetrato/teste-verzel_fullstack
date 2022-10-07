import { Routes, Route  } from "react-router-dom";
import { AnunciosPage } from "../pages/AnunciosPage";
import { CarrosPage } from "../pages/CarrosPage";
import { EditarAnuncioPage } from "../pages/EditarAnuncioPage";
import { LoginPage } from "../pages/LoginPage";
import { CriarAnuncioPage } from '../pages/CriarAnuncioPage'

import { UsePageAuth } from "../hooks/usePageAuth";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/:login" element={<LoginPage />} />
      <Route path="/" element={<CarrosPage />} />
      <Route path="/meus-anuncios" element={<UsePageAuth> <AnunciosPage /> </UsePageAuth>} />
      <Route path="/anunciar" element={<UsePageAuth> <AnunciosPage /> </UsePageAuth>} />
      <Route path="/editar-anuncio/:id" element={<UsePageAuth> <EditarAnuncioPage /> </UsePageAuth> } />
      <Route path="/criar-anuncio" element={<UsePageAuth> <CriarAnuncioPage /> </UsePageAuth> } />
      
      <Route path="*" element={<CarrosPage />} />
    </Routes>
  )
}