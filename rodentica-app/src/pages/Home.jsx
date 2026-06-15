import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, CalendarCheck, ChevronDown, Sparkles, Hexagon, AlignJustify, ShieldCheck, Baby, Microscope, Zap, ScanLine, Camera, CheckCircle, ArrowRight } from 'lucide-react'
import DentistSVG from '../components/DentistSVG'
import SectionReveal from '../components/SectionReveal'
import CtaSection from '../components/CtaSection'

const services = [
  { Icon: Sparkles, title: 'Stomatologia Estetyczna', href: '/uslugi/stomatologia-estetyczna', color: 'from-amber-400 to-orange-400', desc: 'Wybielanie, licówki, piękny uśmiech' },
  { Icon: Hexagon, title: 'Implantologia', href: '/uslugi/implantologia', color: 'from-brand-400 to-brand-600', desc: 'Implanty Biomet 3i, trwałe rozwiązanie' },
  { Icon: AlignJustify, title: 'Ortodoncja', href: '/uslugi/ortodoncja', color: 'from-violet-400 to-purple-500', desc: 'Aparaty stałe i niewidoczne alignery' },
  { Icon: ShieldCheck, title: 'Leczenie Kanałowe', href: '/uslugi/leczenie-kanalowe', color: 'from-emerald-400 to-teal-500', desc: 'Pod mikroskopem, precyzyjnie' },
  { Icon: Baby, title: 'Stomatologia Dziecięca', href: '/uslugi/stomatologia-dziecieca', color: 'from-pink-400 to-rose-400', desc: 'Przyjazna atmosfera dla dzieci' },
  { Icon: Microscope, title: 'Profilaktyka i Higiena', href: '/uslugi/profilaktyka', color: 'from-cyan-400 to-blue-400', desc: 'Czyszczenie, skaling, fluoryzacja' },
]

const stats = [
  { value: '15+', label: 'Lat doświadczenia' },
  { value: '8 000+', label: 'Pacjentów' },
  { value: '10', label: 'Specjalizacji' },
  { value: '3', label: 'Specjalistów' },
]

const reasons = [
  'Bezbolesne leczenie (The WAND)',
  'Implanty Biomet 3i – światowy lider',
  'Leczenie kanałowe pod mikroskopem',
  'Przyjazna atmosfera dla dzieci',
  'Pełna rodzinna opieka stomatologiczna',
  'Bezpłatny parking i WiFi',
]

export default function Home() {
  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-cyan-50 pt-16" aria-label="Strona główna">
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-500/6 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-400/6 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 text-brand-600 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" aria-hidden="true" />
                Nowoczesna stomatologia · Bielsko-Biała
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6"
              >
                Uśmiech godny{' '}
                <span className="text-gradient">prezentacji</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
              >
                Jedna z najnowocześniejszych klinik stomatologicznych w Bielsku-Białej.
                Bezbolesne zabiegi, najnowsza technologia i zespół wybitnych specjalistów
                dbający o Twój zdrowy i piękny uśmiech.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                <Link to="/kontakt" className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <CalendarCheck size={18} aria-hidden="true" />
                  Umów wizytę
                </Link>
                <a href="tel:+48338123123" className="flex items-center gap-2 bg-white text-brand-600 border-2 border-brand-200 px-6 py-3.5 rounded-xl font-semibold hover:bg-brand-50 hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-sm" aria-label="Zadzwoń: 33 8 123 123">
                  <Phone size={18} aria-hidden="true" />
                  33 8 123 123
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6"
                role="list" aria-label="Statystyki kliniki"
              >
                {stats.map(({ value, label }) => (
                  <div key={label} role="listitem" className="text-center sm:text-left">
                    <div className="text-2xl font-bold text-gradient">{value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-2 flex items-center justify-center"
            >
              <DentistSVG />
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-gray-400"
            aria-hidden="true"
          >
            <span className="text-xs font-medium">Odkryj więcej</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ChevronDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Nasze usługi">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <span className="inline-block bg-brand-50 text-brand-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Specjalizacje</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nasze Usługi</h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">Pełny zakres usług stomatologicznych dla całej rodziny</p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ Icon, title, href, color, desc }, i) => (
              <SectionReveal key={title} delay={(i % 3) * 0.1}>
                <Link
                  to={href}
                  className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 cursor-pointer h-full"
                  aria-label={`Dowiedz się więcej o usłudze: ${title}`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} color="white" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <span className="text-brand-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Dowiedz się więcej <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="text-center mt-10">
            <Link to="/uslugi" className="inline-flex items-center gap-2 border-2 border-brand-200 text-brand-600 hover:bg-brand-50 px-7 py-3 rounded-xl font-semibold transition-colors cursor-pointer">
              Wszystkie usługi <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Dlaczego warto wybrać Rodentica">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="right">
              <span className="inline-block bg-brand-50 text-brand-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Dlaczego my?</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Synonim skutecznego,<br />
                <span className="text-gradient">bezbolesnego leczenia</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Rodentica to jedna z najnowocześniejszych klinik stomatologicznych w Bielsku-Białej.
                Priorytetem jest spełnienie oczekiwań pacjentów poprzez najwyższą jakość usług,
                komfort oraz rodzinną atmosferę bezpieczeństwa.
              </p>
              <ul className="space-y-3" role="list" aria-label="Powody wyboru Rodentica">
                {reasons.map(r => (
                  <li key={r} className="flex items-center gap-3 text-gray-700" role="listitem">
                    <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={14} className="text-brand-500" aria-hidden="true" />
                    </div>
                    {r}
                  </li>
                ))}
              </ul>
            </SectionReveal>

            <SectionReveal delay={0.15} direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-brand-500 to-cyan-500 rounded-3xl p-8 text-white col-span-2">
                  <div className="text-4xl font-bold mb-1">100%</div>
                  <div className="font-semibold text-lg mb-2">Bezbolesnych zabiegów</div>
                  <p className="text-white/80 text-sm">Dzięki systemowi The WAND każdy zabieg jest całkowicie komfortowy.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="text-3xl font-bold text-gradient mb-1">3</div>
                  <div className="text-sm text-gray-600 font-medium">Klimatyzowane gabinety</div>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="text-3xl font-bold text-gradient mb-1">24h</div>
                  <div className="text-sm text-gray-600 font-medium">Odpowiedź online</div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ===== TECHNOLOGY TEASER ===== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Technologia">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <span className="inline-block bg-brand-50 text-brand-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Sprzęt</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Nowoczesna Technologia</h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">Wyposażenie najwyższej klasy dla Twojego komfortu i bezpieczeństwa</p>
          </SectionReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-10">
            {[
              { Icon: Zap, label: 'The WAND', sub: 'Bezbolesne znieczulenie' },
              { Icon: ScanLine, label: 'Pracownia RTG', sub: 'Cyfrowa diagnostyka' },
              { Icon: Microscope, label: 'Mikroskop', sub: 'Leczenie kanałowe' },
              { Icon: Camera, label: 'Kamera HD', sub: 'Wewnątrzustna' },
            ].map(({ Icon, label, sub }, i) => (
              <SectionReveal key={label} delay={i * 0.08}>
                <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-3">
                    <Icon size={22} className="text-brand-500" aria-hidden="true" />
                  </div>
                  <div className="font-semibold text-gray-900 text-sm">{label}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{sub}</div>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="text-center">
            <Link to="/technologia" className="inline-flex items-center gap-2 border-2 border-brand-200 text-brand-600 hover:bg-brand-50 px-7 py-3 rounded-xl font-semibold transition-colors cursor-pointer">
              Poznaj nasz sprzęt <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
