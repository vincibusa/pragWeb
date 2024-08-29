import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import MenuAntipasti from './pages/menu-antipasti/MenuAntipasti';
import MenuPizzeria from './pages/menu-pizzeria/MenuPizzeria';
import MenuRistorante from './pages/menu-ristorante/MenuRistorante';
import Gestionale from './pages/gest-reserv/Gestionale';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/menu-antipasti" element={<MenuAntipasti />} />
        <Route path="/menu-pizzeria" element={<MenuPizzeria />} />
        <Route path="/menu-ristorante" element={<MenuRistorante />} />
        <Route path="/gestionale" element={<Gestionale />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
