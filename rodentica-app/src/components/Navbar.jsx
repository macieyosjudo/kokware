import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  {
    label: 'Usługi',
    href: '/uslugi',
    children: [
      { label: 'Stomatologia Estetyczna', href: '/uslugi/stomatologia-estetyczna' },
      { label: 'Implantologia', href: '/uslugi/implantologia' },
      { label: 'Protetyka', href: '/uslugi/protetyka' },
      { label: 'Leczenie Kanałowe', href: '/uslugi/leczenie-kanalowe' },
      { label: 'Ortodoncja', href: '/uslugi/ortodoncja' },
      { label: 'Stomatologia Zachowawcza', href: '/uslugi/stomatologia-zachowawcza' },
      { label: 'Stomatologia Dziecięca', href: '/uslugi/stomatologia-dziecieca' },
      { label: 'Chirurgia', href: '/uslugi/chirurgia' },
      { label: 'Periodontologia', href: '/uslugi/periodontologia' },
      { label: 'Profilaktyka i Higiena', href: '/uslugi/profilaktyka' },
    ],
  },
  { label: 'Cennik', href: '/cennik' },
  { label: 'Technologia', href: '/technologia' },
  {
    label: 'O nas',
    href: '/zespol',
    children: [
      { label: 'Nasz Zespół', href: '/zespol' },
      { label: 'Certyfikaty', href: '/certyfikaty' },
      { label: 'Galeria', href: '/galeria' },
    ],
  },
  { label: 'Kontakt', href: '/kontakt' },
]

function DropdownMenu({ items, visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full left-0 mt-1.5 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50 py-2"
          role="menu"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              role="menuitem"
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location])

  const isActive = (href) => location.pathname === href || location.pathname.startsWith(href + '/')

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/97 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        role="navigation"
        aria-label="Główna nawigacja"
      >
        <Logo size="sm" />

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map(({ label, href, children }) => (
            <li key={href} className="relative" onMouseEnter={() => children && setDropdownOpen(href)} onMouseLeave={() => setDropdownOpen(false)}>
              {children ? (
                <>
                  <Link
                    to={href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive(href)
                        ? 'text-brand-600 bg-brand-50'
                        : 'text-gray-600 hover:text-brand-600 hover:bg-brand-50'
                    }`}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen === href}
                  >
                    {label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen === href ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </Link>
                  <DropdownMenu items={children} visible={dropdownOpen === href} />
                </>
              ) : (
                <Link
                  to={href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive(href)
                      ? 'text-brand-600 bg-brand-50'
                      : 'text-gray-600 hover:text-brand-600 hover:bg-brand-50'
                  }`}
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+48338123123"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-600 transition-colors cursor-pointer font-medium"
            aria-label="Zadzwoń do nas"
          >
            <Phone size={15} aria-hidden="true" />
            33 8 123 123
          </a>
          <Link
            to="/kontakt"
            className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-brand-500/30 hover:-translate-y-0.5 cursor-pointer"
          >
            Umów wizytę
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Zamknij menu' : 'Otwórz menu'}
          aria-expanded={mobileOpen}
          className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {/* Services with submenu */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors cursor-pointer w-full text-left"
                aria-expanded={mobileServicesOpen}
              >
                Usługi
                <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 border-l-2 border-brand-100 pl-4 flex flex-col gap-1 overflow-hidden"
                  >
                    {navLinks[0].children.map(item => (
                      <Link key={item.href} to={item.href} className="block py-2 text-sm text-gray-600 hover:text-brand-600 cursor-pointer">
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {navLinks.slice(1).filter(l => !l.children).map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors cursor-pointer"
                >
                  {label}
                </Link>
              ))}
              {/* O nas submenu mobile */}
              <div className="ml-4 border-l-2 border-brand-100 pl-4 flex flex-col gap-1">
                {[{ label: 'Nasz Zespół', href: '/zespol' }, { label: 'Certyfikaty', href: '/certyfikaty' }, { label: 'Galeria', href: '/galeria' }].map(item => (
                  <Link key={item.href} to={item.href} className="py-2 text-sm text-gray-600 hover:text-brand-600 cursor-pointer">
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a href="tel:+48338123123" className="flex items-center justify-center gap-2 py-3 rounded-xl border border-brand-200 text-brand-600 text-sm font-semibold cursor-pointer">
                  <Phone size={15} aria-hidden="true" />
                  33 8 123 123
                </a>
                <Link to="/kontakt" className="flex items-center justify-center bg-brand-500 text-white py-3 rounded-xl text-sm font-semibold cursor-pointer">
                  Umów wizytę
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
