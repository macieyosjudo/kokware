import { Link } from 'react-router-dom'
import { Sparkles, Hexagon, AlignJustify, ShieldCheck, Baby, Microscope, Scissors, Heart, ArrowRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'
import CtaSection from '../components/CtaSection'

const services = [
  {
    Icon: Sparkles,
    title: 'Stomatologia Estetyczna',
    href: '/uslugi/stomatologia-estetyczna',
    color: 'from-amber-400 to-orange-400',
    price: 'od 700 zł',
    desc: 'Wybielanie nakładkowe, ZOOM, licówki porcelanowe – dla pięknego uśmiechu. Nowoczesne metody pozwalają zmienić kształt, kolor i położenie zębów.',
  },
  {
    Icon: Hexagon,
    title: 'Implantologia',
    href: '/uslugi/implantologia',
    color: 'from-brand-400 to-brand-600',
    price: 'od 5 000 zł',
    desc: 'Implanty Biomet 3i – najnowocześniejsze i najskuteczniejsze rozwiązanie na odbudowę braków zębowych. Służą przez całe życie.',
  },
  {
    Icon: AlignJustify,
    title: 'Ortodoncja',
    href: '/uslugi/ortodoncja',
    color: 'from-violet-400 to-purple-500',
    price: 'od 900 zł',
    desc: 'Niewidoczny aparat Clear Liner oraz aparaty stałe. Leczenie dla dzieci i dorosłych.',
  },
  {
    Icon: ShieldCheck,
    title: 'Endodoncja',
    href: '/uslugi/leczenie-kanalowe',
    color: 'from-emerald-400 to-teal-500',
    price: 'od 400 zł',
    desc: 'Endodoncja mikroskopowa. Ratujemy zęby zamiast je usuwać – leczenie precyzyjne i skuteczne.',
  },
  {
    Icon: Baby,
    title: 'Stomatologia Dziecięca – Pedodoncja',
    href: '/uslugi/stomatologia-dziecieca',
    color: 'from-pink-400 to-rose-400',
    price: 'od 120 zł',
    desc: 'Pedodoncja w przyjaznej atmosferze. Kolorowe wypełnienia i niespodzianki dla najmłodszych. Pierwsze wizyty już po wyrżnięciu mleczaków.',
  },
  {
    Icon: Microscope,
    title: 'Profilaktyka i Higiena',
    href: '/uslugi/profilaktyka',
    color: 'from-cyan-400 to-blue-400',
    price: 'od 100 zł',
    desc: 'Scaling, piaskowanie, fluoryzacja. Profesjonalne zabiegi przez dyplomowane higienistki stomatologiczne.',
  },
  {
    Icon: AlignJustify,
    title: 'Protetyka Stomatologiczna',
    href: '/uslugi/protetyka',
    color: 'from-indigo-400 to-blue-500',
    price: 'od 750 zł',
    desc: 'Korony metalowo-ceramiczne i porcelanowe, protezy akrylowe, ekspresowa naprawa protez. Współpraca z renomowanymi pracowniami.',
  },
  {
    Icon: Heart,
    title: 'Stomatologia Zachowawcza',
    href: '/uslugi/stomatologia-zachowawcza',
    color: 'from-red-400 to-rose-500',
    price: 'od 180 zł',
    desc: 'Leczenie próchnicy, wypełnienia kompozytowe. Wszystkie zabiegi wykonywane bezboleśnie dzięki znieczuleniu komputerowemu The WAND.',
  },
  {
    Icon: Scissors,
    title: 'Chirurgia Stomatologiczna',
    href: '/uslugi/chirurgia',
    color: 'from-slate-400 to-gray-500',
    price: 'od 200 zł',
    desc: 'Ekstrakcje, usuwanie ósemek. Bezboleśnie, w znieczuleniu komputerowym.',
  },
]

export default function UslugiList() {
  return (
    <div>
      <PageHero
        title="Nasze Usługi"
        subtitle="Pełny zakres usług stomatologicznych dla całej rodziny. Każde leczenie prowadzone indywidualnie przez wybitnych specjalistów."
        breadcrumb={[{ label: 'Usługi' }]}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Lista usług">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ Icon, title, href, color, price, desc }, i) => (
              <SectionReveal key={title} delay={(i % 3) * 0.08}>
                <Link
                  to={href}
                  className="group block bg-white border border-gray-100 rounded-2xl p-7 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200 transition-all duration-300 cursor-pointer h-full"
                  aria-label={`${title} – ${price}`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={26} color="white" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-lg font-semibold text-gray-900 leading-tight">{title}</h2>
                    <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full ml-2 flex-shrink-0">{price}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
                  <span className="text-brand-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Czytaj więcej <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
