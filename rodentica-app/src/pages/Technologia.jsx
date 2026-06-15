import { Zap, ScanLine, Microscope, Camera, Wind, Lamp, Cpu, FlaskConical } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CtaSection from '../components/CtaSection'

const tech = [
  {
    Icon: Zap,
    title: 'The WAND – Bezbolesne Znieczulenie',
    desc: 'Nowoczesny aparat do znieczulenia komputerowego gwarantujący zredukowanie jakichkolwiek odczuć związanych z zabiegiem. Jeden z pierwszych gabinetów w regionie wyposażonych w ten system.',
    tag: 'Komfort pacjenta',
    tagColor: 'bg-blue-50 text-blue-600',
    price: '35 zł / zabieg',
  },
  {
    Icon: ScanLine,
    title: 'Pracownia RTG – Diagnostyka Cyfrowa',
    desc: 'Cyfrowa diagnostyka radiologiczna. Zdjęcia panoramiczne (pantomograficzne) całej szczęki i żuchwy. Pozwala wykryć próchnicę, zmiany okołowierzchołkowe, zęby zatrzymane i nieprawidłowo leczone kanały.',
    tag: 'Diagnostyka',
    tagColor: 'bg-purple-50 text-purple-600',
  },
  {
    Icon: Microscope,
    title: 'Mikroskop Operacyjny',
    desc: 'Pozwala zajrzeć do kanału korzeniowego i pod kontrolą wzroku przeprowadzić prawidłowe leczenie kanałowe. Niezbędny przy skomplikowanych przypadkach endodontycznych i usuwaniu złamanych narzędzi.',
    tag: 'Precyzja',
    tagColor: 'bg-emerald-50 text-emerald-600',
  },
  {
    Icon: Camera,
    title: 'Kamera Wewnątrzustna',
    desc: 'Intraoralna kamera HD do obserwacji uzębienia. Pacjent widzi dokładnie to, co lekarz – wspólnie obserwujemy problem i na bieżąco śledzimy rezultaty leczenia. Większe zaangażowanie i świadomość pacjenta.',
    tag: 'Transparentność',
    tagColor: 'bg-cyan-50 text-cyan-600',
  },
  {
    Icon: Wind,
    title: 'Sterylizacja i Dezynfekcja',
    desc: 'Najwyższe standardy dezynfekcji zarówno sprzętu medycznego jak i narzędzi stomatologicznych. Autoklawy klasy B, jednorazowe narzędzia i odzież ochronna. Twoje bezpieczeństwo to nasz priorytet.',
    tag: 'Bezpieczeństwo',
    tagColor: 'bg-red-50 text-red-600',
  },
  {
    Icon: Lamp,
    title: 'Lampa ZOOM – Wybielanie',
    desc: 'Profesjonalna lampa ZOOM do wybielania zębów w gabinecie. Pozwala rozjaśnić zęby nawet o kilka odcieni w trakcie jednej wizyty. Bezpieczna i skuteczna technologia wybielania.',
    tag: 'Estetyka',
    tagColor: 'bg-amber-50 text-amber-600',
  },
  {
    Icon: Cpu,
    title: 'X SMART DUAL',
    desc: 'Zaawansowany system do procedur endodontycznych. Umożliwia precyzyjne opracowanie kanałów korzeniowych z kontrolą momentu obrotowego i prędkości. Kluczowy przy złożonych leczeniach kanałowych.',
    tag: 'Endodoncja',
    tagColor: 'bg-indigo-50 text-indigo-600',
  },
  {
    Icon: FlaskConical,
    title: 'CALAMUS DUAL',
    desc: 'Urządzenie do obróbki i wypełniania kanałów korzeniowych. Zapewnia precyzyjne, szczelne wypełnienie – kluczowe dla długotrwałego sukcesu leczenia kanałowego.',
    tag: 'Endodoncja',
    tagColor: 'bg-teal-50 text-teal-600',
  },
]

const infra = [
  { label: '3 klimatyzowane gabinety stomatologiczne', icon: '🏥' },
  { label: 'Bezpłatny parking dla pacjentów', icon: '🅿️' },
  { label: 'Bezpłatne WiFi w poczekalni', icon: '📶' },
  { label: 'Udogodnienia dla osób niepełnosprawnych', icon: '♿' },
  { label: 'Nowoczesna poczekalnia', icon: '🛋️' },
  { label: 'Sterownia RTG zgodna z normami', icon: '🔬' },
]

export default function Technologia() {
  return (
    <div>
      <PageHero
        title="Nowoczesna Technologia"
        subtitle="Inwestujemy w najnowocześniejszy sprzęt, by każdy zabieg był precyzyjny, bezpieczny i jak najbardziej komfortowy dla Ciebie."
        Icon={Microscope}
        breadcrumb={[{ label: 'Technologia' }]}
      />

      {/* Tech grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Wyposażenie kliniki">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <span className="inline-block bg-brand-50 text-brand-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Sprzęt</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Wyposażenie Kliniki</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Aparatura medyczna najnowszej generacji dla Twojego komfortu i bezpieczeństwa</p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tech.map(({ Icon, title, desc, tag, tagColor, price }, i) => (
              <SectionReveal key={title} delay={(i % 2) * 0.08}>
                <div className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/8 transition-all duration-300 h-full">
                  <div className="flex items-start gap-5 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} className="text-brand-500" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{title}</h3>
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${tagColor}`}>{tag}</span>
                      </div>
                      {price && <div className="text-sm font-semibold text-brand-600">{price}</div>}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Infrastruktura">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="right">
              <span className="inline-block bg-brand-50 text-brand-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Infrastruktura</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Komfort na każdym kroku</h2>
              <p className="text-gray-600 leading-relaxed mb-8">Zadbaliśmy o każdy detal, by Twoja wizyta była jak najbardziej komfortowa – od wejścia do kliniki aż po sam zabieg.</p>
              <ul className="space-y-3 list-none p-0 m-0" role="list">
                {infra.map(({ label }) => (
                  <li key={label} className="flex items-center gap-3 text-gray-700 text-sm" role="listitem">
                    <div className="w-2 h-2 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </SectionReveal>
            <SectionReveal delay={0.15} direction="left">
              <ImagePlaceholder label="Zdjęcie gabinetu / wyposażenia" aspect="aspect-[4/3]" />
            </SectionReveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
