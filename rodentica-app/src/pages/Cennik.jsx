import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'
import CtaSection from '../components/CtaSection'
import { BadgeEuro, ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Konsultacje i Diagnostyka',
    color: 'bg-gray-50 border-gray-200',
    headerColor: 'bg-gray-100',
    items: [
      { label: 'Konsultacja stomatologiczna', price: 'od 50 zł' },
      { label: 'Znieczulenie komputerowe The WAND', price: '35 zł' },
      { label: 'Zdjęcie RTG (pantomograficzne)', price: 'od 80 zł' },
    ],
  },
  {
    title: 'Profilaktyka i Higiena',
    color: 'bg-cyan-50 border-cyan-100',
    headerColor: 'bg-cyan-100',
    href: '/uslugi/profilaktyka',
    items: [
      { label: 'Skaling (usuwanie kamienia)', price: 'od 150 zł' },
      { label: 'Piaskowanie (usuwanie przebarwień)', price: 'od 150 zł' },
      { label: 'Fluoryzacja', price: 'od 80 zł' },
      { label: 'Higienizacja kompletna', price: 'od 300 zł' },
    ],
  },
  {
    title: 'Stomatologia Zachowawcza',
    color: 'bg-red-50 border-red-100',
    headerColor: 'bg-red-100',
    href: '/uslugi/stomatologia-zachowawcza',
    items: [
      { label: 'Leczenie próchnicy (wypełnienie)', price: 'od 180 zł' },
      { label: 'Lakowanie bruzd', price: 'od 100 zł' },
      { label: 'Leczenie nadwrażliwości', price: 'od 100 zł' },
    ],
  },
  {
    title: 'Stomatologia Estetyczna',
    color: 'bg-amber-50 border-amber-100',
    headerColor: 'bg-amber-100',
    href: '/uslugi/stomatologia-estetyczna',
    items: [
      { label: 'Wybielanie nakładkowe', price: 'od 700 zł' },
      { label: 'Wybielanie na fotelu ZOOM', price: 'od 1 300 zł' },
      { label: 'Licówka porcelanowa', price: 'od 1 400 zł' },
      { label: 'Estetyczna odbudowa', price: 'od 700 zł' },
    ],
  },
  {
    title: 'Ortodoncja',
    color: 'bg-violet-50 border-violet-100',
    headerColor: 'bg-violet-100',
    href: '/uslugi/ortodoncja',
    items: [
      { label: 'Clear Liner (niewidoczny aligner)', price: 'od 900 zł' },
      { label: 'Aparat stały standardowy', price: 'od 2 500 zł' },
      { label: 'Aparat stały estetyczny', price: 'od 3 500 zł' },
    ],
  },
  {
    title: 'Implantologia',
    color: 'bg-brand-50 border-brand-100',
    headerColor: 'bg-brand-100',
    href: '/uslugi/implantologia',
    items: [
      { label: 'Implant Biomet 3i', price: 'od 5 000 zł' },
      { label: 'Korona na implancie', price: 'od 1 400 zł' },
    ],
  },
  {
    title: 'Protetyka',
    color: 'bg-indigo-50 border-indigo-100',
    headerColor: 'bg-indigo-100',
    href: '/uslugi/protetyka',
    items: [
      { label: 'Korona metaloceramiczna', price: 'od 750 zł' },
      { label: 'Korona porcelanowa (cyrkon)', price: 'od 1 400 zł' },
      { label: 'Proteza akrylowa', price: 'od 1 200 zł' },
      { label: 'Naprawa protezy (ekspresowa)', price: 'od 120 zł' },
      { label: 'Licówka kompozytowa', price: 'od 400 zł' },
    ],
  },
  {
    title: 'Leczenie Kanałowe',
    color: 'bg-emerald-50 border-emerald-100',
    headerColor: 'bg-emerald-100',
    href: '/uslugi/leczenie-kanalowe',
    items: [
      { label: 'Leczenie kanałowe 1-kanałowe', price: 'od 400 zł' },
      { label: 'Leczenie kanałowe 2-kanałowe', price: 'od 550 zł' },
      { label: 'Leczenie kanałowe 3-kanałowe', price: 'od 700 zł' },
    ],
  },
  {
    title: 'Chirurgia Stomatologiczna',
    color: 'bg-slate-50 border-slate-200',
    headerColor: 'bg-slate-100',
    href: '/uslugi/chirurgia',
    items: [
      { label: 'Ekstrakcja prosta', price: 'od 200 zł' },
      { label: 'Usunięcie ósemki', price: 'od 400 zł' },
      { label: 'Resekcja wierzchołka korzenia', price: 'od 600 zł' },
      { label: 'Podcinanie wędzidełka', price: 'od 350 zł' },
    ],
  },
  {
    title: 'Stomatologia Dziecięca',
    color: 'bg-pink-50 border-pink-100',
    headerColor: 'bg-pink-100',
    href: '/uslugi/stomatologia-dziecieca',
    items: [
      { label: 'Wizyta kontrolna dziecka', price: 'od 50 zł' },
      { label: 'Leczenie zachowawcze dziecka', price: 'od 120 zł' },
      { label: 'Lakowanie zębów', price: 'od 100 zł' },
    ],
  },
]

export default function Cennik() {
  return (
    <div>
      <PageHero
        title="Cennik"
        subtitle="Przejrzyste ceny bez ukrytych kosztów. Na każdy zabieg przygotowujemy indywidualny kosztorys."
        Icon={BadgeEuro}
        breadcrumb={[{ label: 'Cennik' }]}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Cennik usług">
        <div className="max-w-6xl mx-auto">

          {/* Info banner */}
          <SectionReveal className="mb-12">
            <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <BadgeEuro size={22} className="text-brand-600" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-semibold text-gray-900 mb-1">Indywidualny kosztorys</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Podane ceny są cenami orientacyjnymi. Na każdy zabieg przygotowujemy indywidualny kosztorys.
                  Oferujemy również <strong>finansowanie w ratach</strong> przez system Euro26.
                  Pacjenci z zagranicy mogą uzyskać <Link to="/kontakt" className="text-brand-600 hover:underline cursor-pointer">bezpłatną konsultację online</Link>.
                </p>
              </div>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map(({ title, color, headerColor, href, items }, i) => (
              <SectionReveal key={title} delay={(i % 2) * 0.08}>
                <div className={`rounded-2xl border ${color} overflow-hidden h-full`}>
                  <div className={`${headerColor} px-5 py-4 flex items-center justify-between`}>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    {href && (
                      <Link to={href} className="text-xs text-brand-600 hover:underline flex items-center gap-1 cursor-pointer font-medium">
                        Dowiedz się więcej <ArrowRight size={12} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                  <div className="p-5">
                    <ul className="space-y-3 list-none p-0 m-0">
                      {items.map(({ label, price }) => (
                        <li key={label} className="flex items-center justify-between gap-4">
                          <span className="text-gray-600 text-sm">{label}</span>
                          <span className="font-semibold text-gray-900 text-sm whitespace-nowrap">{price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Chcesz poznać dokładną cenę?" subtitle="Zadzwoń lub napisz do nas – przygotujemy bezpłatny kosztorys Twojego leczenia." />
    </div>
  )
}
