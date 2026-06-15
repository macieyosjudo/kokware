import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (e, href) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-950 text-gray-400" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-brand-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-white">Rodentica</span>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              Nowoczesna klinika stomatologiczna w Bielsku-Białej. Bezbolesne zabiegi,
              najnowsza technologia, uśmiech godny prezentacji.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+48338123123" className="flex items-center gap-2 hover:text-brand-400 transition-colors cursor-pointer" aria-label="Zadzwoń: 33 8 123 123">
                <Phone size={14} aria-hidden="true" />
                33 8 123 123
              </a>
              <a href="mailto:biuro@rodentica.pl" className="flex items-center gap-2 hover:text-brand-400 transition-colors cursor-pointer" aria-label="Email: biuro@rodentica.pl">
                <Mail size={14} aria-hidden="true" />
                biuro@rodentica.pl
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} aria-hidden="true" />
                ul. Cieszyńska 179, 43-300 Bielsko-Biała
              </span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Usługi</h3>
            <ul className="space-y-2.5 text-sm" role="list">
              {['Stomatologia Estetyczna', 'Implantologia', 'Ortodoncja', 'Leczenie Kanałowe', 'Stomatologia Dziecięca'].map(s => (
                <li key={s}>
                  <a
                    href="#uslugi"
                    onClick={(e) => scrollTo(e, '#uslugi')}
                    className="hover:text-brand-400 transition-colors cursor-pointer"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Informacje</h3>
            <ul className="space-y-2.5 text-sm" role="list">
              {[
                { label: 'O nas', href: '#' },
                { label: 'Technologia', href: '#technologia' },
                { label: 'Godziny', href: '#godziny' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Kontakt', href: '#kontakt' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => scrollTo(e, href)}
                    className="hover:text-brand-400 transition-colors cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {year} Rodentica – Stomatologia Estetyczna. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-400 transition-colors cursor-pointer">Polityka prywatności</a>
            <a href="#" className="hover:text-brand-400 transition-colors cursor-pointer">RODO</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
