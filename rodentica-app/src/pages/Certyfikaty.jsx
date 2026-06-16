import { Award } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'
import CtaSection from '../components/CtaSection'

const agnieszka = [
  '/Agnieszka_Romanowska-Szymala01-150x150.jpg',
  '/Agnieszka_Romanowska-Szymala02-150x150.jpg',
  '/Agnieszka_Romanowska-Szymala03-150x150.jpg',
  '/Agnieszka_Romanowska-Szymala04-150x150.jpg',
  '/Agnieszka_Romanowska-Szymala05-150x150.jpg',
  '/Agnieszka_Romanowska-Szymala06-150x150.jpg',
  '/Agnieszka_Romanowska-Szymala07-150x150.jpg',
  '/Agnieszka_Romanowska-Szymala08-150x150.jpg',
  '/Agnieszka_Romanowska-Szymala09-150x150.jpg',
  '/Agnieszka_Romanowska-Szymala10-150x150.jpg',
  '/Agnieszka_Romanowska-Szymala11-150x150.jpg',
  '/Agnieszka_Romanowska-Szymala12-150x150.jpg',
  '/Agnieszka_Romanowska-Szymala13-150x150.jpg',
  '/Agnieszka_Romanowska-Szymala14-150x150.jpg',
]

const krzysztof = [
  '/Krzysztof_Kus01-150x150.jpg',
  '/Krzysztof_Kus02-150x150.jpg',
  '/Krzysztof_Kus03-150x150.jpg',
  '/Krzysztof_Kus04-150x150.jpg',
  '/Krzysztof_Kus05-150x150.jpg',
  '/Krzysztof_Kus06-150x150.jpg',
  '/Krzysztof_Kus07-150x150.jpg',
  '/Krzysztof_Kus08-150x150.jpg',
  '/Krzysztof_Kus09-150x150.jpg',
  '/Krzysztof_Kus10-150x150.jpg',
]

const maciej = [
  '/maciej-150x150.jpg',
  '/maciej2-150x150.jpg',
  '/maciej3-150x150.jpg',
  '/maciej4-150x150.jpg',
  '/maciej5-150x150.jpg',
]

const higienistki = [
  { name: 'Anita', imgs: ['/Anita-1-001-150x150.jpg', '/Anita-2-001-150x150.jpg'] },
  { name: 'Ewelina', imgs: ['/Ewelina-1-001-150x150.jpg', '/Ewelina-2-001-150x150.jpg'] },
  { name: 'Małgorzata', imgs: ['/gosia-1-001-150x150.jpg', '/gosia-2-001-150x150.jpg', '/gosia-3-001-150x150.jpg', '/gosia-4-001-150x150.jpg', '/gosia-5-001-150x150.jpg'] },
  { name: 'Zuzanna', imgs: ['/zuzia-2-001-150x150.jpg', '/zuzia-5-001-150x150.jpg', '/zuzia-6-001-150x150.jpg', '/zuzia-7-150x150.jpg', '/zuzia-8-001-150x150.jpg', '/zuzia-9-001-150x150.jpg'] },
]

function CertGrid({ images, name }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {images.map((src, i) => (
        <SectionReveal key={i} delay={(i % 5) * 0.06} direction="scale">
          <div className="aspect-square rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <img
              src={src}
              alt={`Certyfikat ${name} nr ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </SectionReveal>
      ))}
    </div>
  )
}

function DoctorSection({ name, title, images, bg = 'bg-white' }) {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100 ${bg}`} aria-label={`Certyfikaty – ${name}`}>
      <div className="max-w-6xl mx-auto">
        <SectionReveal className="mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
              <Award size={20} className="text-brand-500" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">{name}</h2>
              <p className="text-sm text-gray-500">{title}</p>
            </div>
          </div>
        </SectionReveal>
        <CertGrid images={images} name={name} />
      </div>
    </section>
  )
}

export default function Certyfikaty() {
  return (
    <div>
      <PageHero
        title="Certyfikaty"
        subtitle="Nasze doświadczenie i kwalifikacje potwierdzone certyfikatami szkoleń, kursów i specjalizacji z kraju i zagranicy."
        Icon={Award}
        breadcrumb={[{ label: 'Certyfikaty' }]}
      />

      <DoctorSection name="Agnieszka Romanowska-Szymala" title="Lekarz Stomatolog – Specjalista" images={agnieszka} />
      <DoctorSection name="Krzysztof Kuś" title="Lekarz Stomatolog – Specjalista" images={krzysztof} bg="bg-gray-50" />
      <DoctorSection name="Maciej Nowiński" title="Lekarz Stomatolog – Specjalista" images={maciej} />

      {/* Higienistki */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Certyfikaty – Higienistki Stomatologiczne">
        <div className="max-w-6xl mx-auto">
          <SectionReveal className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                <Award size={20} className="text-brand-500" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Higienistki Stomatologiczne</h2>
                <p className="text-sm text-gray-500">Personel higienistyczny</p>
              </div>
            </div>
          </SectionReveal>

          <div className="flex flex-col gap-10">
            {higienistki.map(({ name, imgs }) => (
              <div key={name}>
                <SectionReveal>
                  <h3 className="text-base font-semibold text-gray-700 mb-4">{name}</h3>
                </SectionReveal>
                <CertGrid images={imgs} name={name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Zaufaj certyfikowanym specjalistom" subtitle="Nasze kwalifikacje to gwarancja najwyższej jakości leczenia." />
    </div>
  )
}
