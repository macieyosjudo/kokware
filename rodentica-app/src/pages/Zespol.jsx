import { Users, Award } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CtaSection from '../components/CtaSection'

const doctors = [
  {
    name: 'Agnieszka Romanowska-Szymala',
    role: 'Lekarz Stomatolog – Założycielka',
    specializations: ['Stomatologia Estetyczna', 'Protetyka', 'Implantologia'],
    desc: 'Założycielka i kierownik kliniki Rodentica. Specjalizuje się w stomatologii estetycznej i protetyce. Pasjonatka pięknych uśmiechów i nowoczesnych metod leczenia.',
    certLink: 'https://rodentica.pl/o-nas/nasz-personel/lekarze-specjalisci/certyfikaty-lekarzy/',
  },
  {
    name: 'Krzysztof Kuś',
    role: 'Lekarz Stomatolog – Specjalista',
    specializations: ['Implantologia', 'Chirurgia Stomatologiczna', 'Endodoncja'],
    desc: 'Specjalista w dziedzinie implantologii i chirurgii stomatologicznej. Wykonuje zabiegi wszczepienia implantów Biomet 3i oraz zabiegi chirurgiczne pod mikroskopem operacyjnym.',
    certLink: 'https://rodentica.pl/o-nas/nasz-personel/lekarze-specjalisci/certyfikaty-lekarzy/',
  },
  {
    name: 'Maciej Nowiński',
    role: 'Lekarz Stomatolog – Specjalista',
    specializations: ['Ortodoncja', 'Stomatologia Dziecięca', 'Leczenie Zachowawcze'],
    desc: 'Specjalista ortodoncji i stomatologii dziecięcej. Prowadzi leczenie aparatami stałymi, ruchomymi oraz niewidoczymi alignerami Clear Liner. Uwielbia pracę z dziećmi.',
    certLink: 'https://rodentica.pl/o-nas/nasz-personel/lekarze-specjalisci/certyfikaty-lekarzy/',
  },
]

export default function Zespol() {
  return (
    <div>
      <PageHero
        title="Nasz Zespół"
        subtitle="Wybitni specjaliści z różnych dziedzin stomatologii dbający o zdrowy i piękny uśmiech każdego pacjenta."
        Icon={Users}
        breadcrumb={[{ label: 'Nasz Zespół' }]}
      />

      {/* Doctors */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Lekarze specjaliści">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="text-center mb-14">
            <span className="inline-block bg-brand-50 text-brand-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Specjaliści</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Lekarze Specjaliści</h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">
              Każdy z naszych lekarzy to ekspert w swojej dziedzinie z bogatym doświadczeniem i stałym doskonaleniem kwalifikacji.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map(({ name, role, specializations, desc, certLink }, i) => (
              <SectionReveal key={name} delay={i * 0.1}>
                <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-brand-500/8 hover:-translate-y-1 transition-all duration-300 h-full">
                  <ImagePlaceholder label={`Zdjęcie – ${name}`} aspect="aspect-[3/4]" className="rounded-none" />
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{name}</h3>
                    <p className="text-brand-600 text-sm font-medium mb-3">{role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {specializations.map(s => (
                        <span key={s} className="text-xs bg-brand-50 text-brand-600 px-2.5 py-1 rounded-full font-medium">{s}</span>
                      ))}
                    </div>
                    <a
                      href={certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-brand-600 transition-colors cursor-pointer"
                      aria-label={`Certyfikaty – ${name}`}
                    >
                      <Award size={13} aria-hidden="true" />
                      Zobacz certyfikaty
                    </a>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Assistants */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Asystentki stomatologiczne">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="right">
              <span className="inline-block bg-brand-50 text-brand-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Personel</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Asystentki Stomatologiczne</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nasz wykwalifikowany personel pomocniczy dba o to, by każda wizyta przebiegała sprawnie i komfortowo. Asystentki są zawsze gotowe pomóc zarówno lekarzowi jak i pacjentowi.
              </p>
              <a
                href="https://rodentica.pl/o-nas/nasz-personel/asystentki-stomatologiczne/certyfikaty-asystentek/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline font-medium cursor-pointer"
                aria-label="Certyfikaty asystentek"
              >
                <Award size={15} aria-hidden="true" />
                Zobacz certyfikaty asystentek
              </a>
            </SectionReveal>
            <SectionReveal delay={0.15} direction="left">
              <ImagePlaceholder label="Zdjęcie zespołu / asystentek" aspect="aspect-video" />
            </SectionReveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
