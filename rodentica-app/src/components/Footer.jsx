import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Logo from './Logo'

const services = [
  { label: 'Stomatologia Estetyczna', href: '/uslugi/stomatologia-estetyczna' },
  { label: 'Implantologia', href: '/uslugi/implantologia' },
  { label: 'Protetyka', href: '/uslugi/protetyka' },
  { label: 'Leczenie Kanałowe', href: '/uslugi/leczenie-kanalowe' },
  { label: 'Ortodoncja', href: '/uslugi/ortodoncja' },
  { label: 'Stomatologia Dziecięca', href: '/uslugi/stomatologia-dziecieca' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="flex items-center gap-2.5">
                <svg width="36" height="36" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                  <path d="M22 4C16 4 10 8 10 14C10 18 11 21 13 24C15 27 15 31 14 36C13.5 38 15 40 16.5 38C18 36 19 32 20 30C20.8 28.4 21.5 28 22 28C22.5 28 23.2 28.4 24 30C25 32 26 36 27.5 38C29 40 30.5 38 30 36C29 31 29 27 31 24C33 21 34 18 34 14C34 8 28 4 22 4Z" fill="none" stroke="#60A5FA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <div className="text-lg font-bold">
                    <span className="text-red-300">Ro</span>
                    <span className="text-blue-400">DENT</span>
                    <span className="text-red-300">ica</span>
                  </div>
                  <div className="text-xs text-gray-400">Stomatologia Estetyczna</div>
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 text-gray-400">
              Nowoczesna klinika stomatologiczna w Bielsku-Białej. Bezbolesne zabiegi, najnowsza technologia, uśmiech godny prezentacji.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Usługi</h3>
            <ul className="space-y-2.5 text-sm list-none p-0 m-0">
              {services.map(s => (
                <li key={s.href}>
                  <Link to={s.href} className="hover:text-brand-400 transition-colors cursor-pointer">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Informacje</h3>
            <ul className="space-y-2.5 text-sm list-none p-0 m-0">
              {[
                { label: 'Cennik', href: '/cennik' },
                { label: 'Technologia', href: '/technologia' },
                { label: 'Nasz Zespół', href: '/zespol' },
                { label: 'Certyfikaty', href: '/certyfikaty' },
                { label: 'Galeria', href: '/galeria' },
                { label: 'Kontakt', href: '/kontakt' },
              ].map(i => (
                <li key={i.href}>
                  <Link to={i.href} className="hover:text-brand-400 transition-colors cursor-pointer">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-sm mb-1">
                <Clock size={13} className="text-brand-400" aria-hidden="true" />
                <span className="text-white font-medium text-xs">Pon–Pt: 09:00 – 20:00</span>
              </div>
              <div className="text-xs text-gray-500 ml-5">Sob–Ndz: Zamknięte</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Kontakt</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+48338123123" className="flex items-start gap-2.5 hover:text-brand-400 transition-colors cursor-pointer group" aria-label="Zadzwoń: 33 8 123 123">
                <Phone size={14} className="text-brand-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>33 8 123 123</span>
              </a>
              <a href="mailto:biuro@rodentica.pl" className="flex items-start gap-2.5 hover:text-brand-400 transition-colors cursor-pointer" aria-label="Email: biuro@rodentica.pl">
                <Mail size={14} className="text-brand-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>biuro@rodentica.pl</span>
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-brand-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>ul. Cieszyńska 179<br />43-300 Bielsko-Biała</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Rodentica – Stomatologia Estetyczna. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-4">
            <Link to="/polityka-prywatnosci" className="hover:text-brand-400 transition-colors cursor-pointer">Polityka prywatności</Link>
            <Link to="/regulamin" className="hover:text-brand-400 transition-colors cursor-pointer">Regulamin</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
