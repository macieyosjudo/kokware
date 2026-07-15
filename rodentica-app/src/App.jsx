import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import UslugiList from './pages/UslugiList'
import Cennik from './pages/Cennik'
import Technologia from './pages/Technologia'
import Zespol from './pages/Zespol'
import Kontakt from './pages/Kontakt'
import Certyfikaty from './pages/Certyfikaty'
import Galeria from './pages/Galeria'
import PolitykaPrywatnosci from './pages/PolitykaPrywatnosci'
import Regulamin from './pages/Regulamin'

// Service pages
import StomatologiaEstetyczna from './pages/uslugi/StomatologiaEstetyczna'
import Implantologia from './pages/uslugi/Implantologia'
import Protetyka from './pages/uslugi/Protetyka'
import LeczeniKanalowe from './pages/uslugi/LeczeniKanalowe'
import Ortodoncja from './pages/uslugi/Ortodoncja'
import StomatologiaZachowawcza from './pages/uslugi/StomatologiaZachowawcza'
import StomatologiaDziecieca from './pages/uslugi/StomatologiaDziecieca'
import Chirurgia from './pages/uslugi/Chirurgia'
import Periodontologia from './pages/uslugi/Periodontologia'
import Profilaktyka from './pages/uslugi/Profilaktyka'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}

function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-500 text-white px-4 py-2 rounded-lg z-[9999] text-sm font-medium">
        Przejdź do treści
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uslugi" element={<UslugiList />} />
          <Route path="/uslugi/stomatologia-estetyczna" element={<StomatologiaEstetyczna />} />
          <Route path="/uslugi/implantologia" element={<Implantologia />} />
          <Route path="/uslugi/protetyka" element={<Protetyka />} />
          <Route path="/uslugi/leczenie-kanalowe" element={<LeczeniKanalowe />} />
          <Route path="/uslugi/ortodoncja" element={<Ortodoncja />} />
          <Route path="/uslugi/stomatologia-zachowawcza" element={<StomatologiaZachowawcza />} />
          <Route path="/uslugi/stomatologia-dziecieca" element={<StomatologiaDziecieca />} />
          <Route path="/uslugi/chirurgia" element={<Chirurgia />} />
          <Route path="/uslugi/periodontologia" element={<Periodontologia />} />
          <Route path="/uslugi/profilaktyka" element={<Profilaktyka />} />
          <Route path="/cennik" element={<Cennik />} />
          <Route path="/technologia" element={<Technologia />} />
          <Route path="/zespol" element={<Zespol />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/certyfikaty" element={<Certyfikaty />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
          <Route path="/regulamin" element={<Regulamin />} />
          {/* 404 */}
          <Route path="*" element={
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-24">
              <div className="text-6xl font-bold text-gradient mb-4">404</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Strona nie znaleziona</h1>
              <p className="text-gray-500 mb-8">Ta strona nie istnieje lub została przeniesiona.</p>
              <a href="/" className="bg-brand-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-600 transition-colors cursor-pointer">
                Wróć na stronę główną
              </a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
