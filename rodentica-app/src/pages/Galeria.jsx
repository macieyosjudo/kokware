import { Images } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'
import CtaSection from '../components/CtaSection'

const categories = [
  { label: 'Gabinety i recepcja', count: 5 },
  { label: 'Zespół', count: 4 },
  { label: 'Sprzęt i technologia', count: 5 },
]

const placeholders = [
  { label: 'Gabinet 1 – widok ogólny', cat: 'Gabinety i recepcja', aspect: 'aspect-video' },
  { label: 'Gabinet 2 – fotel stomatologiczny', cat: 'Gabinety i recepcja', aspect: 'aspect-video' },
  { label: 'Gabinet 3 – wyposażenie', cat: 'Gabinety i recepcja', aspect: 'aspect-video' },
  { label: 'Recepcja – wejście', cat: 'Gabinety i recepcja', aspect: 'aspect-[4/3]' },
  { label: 'Poczekalnia', cat: 'Gabinety i recepcja', aspect: 'aspect-[4/3]' },
  { label: 'Zespół lekarski', cat: 'Zespół', aspect: 'aspect-[4/3]' },
  { label: 'Agnieszka Romanowska-Szymala', cat: 'Zespół', aspect: 'aspect-[3/4]' },
  { label: 'Krzysztof Kuś', cat: 'Zespół', aspect: 'aspect-[3/4]' },
  { label: 'Maciej Nowiński', cat: 'Zespół', aspect: 'aspect-[3/4]' },
  { label: 'Higienistki stomatologiczne', cat: 'Zespół', aspect: 'aspect-[4/3]' },
  { label: 'The WAND – znieczulenie komputerowe', cat: 'Sprzęt i technologia', aspect: 'aspect-[4/3]' },
  { label: 'Mikroskop operacyjny', cat: 'Sprzęt i technologia', aspect: 'aspect-[4/3]' },
  { label: 'Pracownia RTG', cat: 'Sprzęt i technologia', aspect: 'aspect-[4/3]' },
  { label: 'Sterylizacja i dezynfekcja', cat: 'Sprzęt i technologia', aspect: 'aspect-[4/3]' },
]

export default function Galeria() {
  return (
    <div>
      <PageHero
        title="Galeria"
        subtitle="Poznaj naszą klinikę – nowoczesne gabinety, przyjazną atmosferę i zaawansowany sprzęt medyczny."
        Icon={Images}
        breadcrumb={[{ label: 'Galeria' }]}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Galeria kliniki">
        <div className="max-w-6xl mx-auto">

          {/* Info banner */}
          <SectionReveal className="mb-12">
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-4">
              <Images size={22} className="text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-amber-800 text-sm leading-relaxed">
                Zdjęcia kliniki zostaną wkrótce dodane. Poniżej widoczne są zarezerwowane miejsca na fotografie – każde z nich zostanie uzupełnione profesjonalnymi zdjęciami kliniki.
              </p>
            </div>
          </SectionReveal>

          {/* Grid masonry-like */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {placeholders.map(({ label, aspect }, i) => (
              <SectionReveal key={i} delay={(i % 3) * 0.08} direction="scale">
                <div className={`${aspect} group relative bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl border-2 border-dashed border-brand-200 hover:border-brand-400 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center gap-3 cursor-default`}>
                  {/* Number badge */}
                  <div className="absolute top-3 left-3 w-7 h-7 bg-white rounded-full border border-brand-200 flex items-center justify-center">
                    <span className="text-xs font-bold text-brand-400">{i + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white border border-brand-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Images size={24} className="text-brand-300 group-hover:text-brand-500 transition-colors" aria-hidden="true" />
                  </div>

                  {/* Label */}
                  <p className="text-xs font-medium text-brand-400 text-center px-4 leading-snug group-hover:text-brand-600 transition-colors">
                    {label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              Łącznie <strong className="text-gray-600">{placeholders.length} zdjęć</strong> zostanie dodanych do galerii.
            </p>
          </SectionReveal>
        </div>
      </section>

      <CtaSection title="Chcesz odwiedzić naszą klinikę?" subtitle="Zapraszamy do Bielska-Białej. Umów wizytę i przekonaj się sam o naszej atmosferze." />
    </div>
  )
}
