import { useState, useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Technology from './components/Technology'
import Hours from './components/Hours'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return false
    const stored = localStorage.getItem('rodentica-dark')
    if (stored !== null) return stored === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('rodentica-dark', String(darkMode))
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(d => !d)} />
      <main id="main-content">
        <Hero />
        <Services />
        <Technology />
        <Hours />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
