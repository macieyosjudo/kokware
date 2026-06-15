import { Award } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
import CtaSection from '../components/CtaSection'

const doctorCerts = [
  { name: 'Agnieszka Romanowska-Szymala', count: 15 },
  { name: 'Krzysztof Kuś', count: 15 },
  { name: 'Maciej Nowiński', count: 14 },
]

export default function Certyfikaty() {
  let globalIndex = 0

  return (
    <div>
      <PageHero
        title="Certyfikaty"
        subtitle="Nasze doświadczenie i kwalifikacje potwierdzone certyfikatami szkoleń, kursów i specjalizacji z kraju i zagranicy."
        Icon={Award}
        breadcrumb={[{ label: 'Certyfikaty' }]}
      />

      {/* Doctors certs */}
      {doctorCerts.map(({ name, count }) => (
        <section key={name} className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-white" aria-label={`Certyfikaty – ${name}`}>
          <div className="max-w-6xl mx-auto">
            <SectionReveal className="mb-10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center">
                  <Award size={20} className="text-brand-500" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                  <p className="text-sm text-gray-500">Lekarz Stomatolog – Specjalista</p>
                </div>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {Array.from({ length: count }).map((_, i) => {
                globalIndex++
                const idx = globalIndex
                return (
                  <SectionReveal key={i} delay={(i % 5) * 0.06} direction="scale">
                    <div className="group aspect-[3/4] bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-gray-200 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-300 flex flex-col items-center justify-center gap-2 cursor-default p-3">
                      <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center group-hover:border-brand-200 transition-colors">
                        <Award size={18} className="text-gray-300 group-hover:text-brand-400 transition-colors" aria-hidden="true" />
                      </div>
                      <p className="text-xs text-gray-400 text-center leading-tight group-hover:text-brand-400 transition-colors">
                        Certyfikat {idx}
                      </p>
                    </div>
                  </SectionReveal>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Hygienists certs */}
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 0 }).map((_, i) => (
              <SectionReveal key={i} delay={(i % 5) * 0.06} direction="scale">
                <div className="group aspect-[3/4] bg-white rounded-xl border-2 border-dashed border-gray-200 hover:border-brand-300 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 p-3">
                  <Award size={18} className="text-gray-300 group-hover:text-brand-400 transition-colors" aria-hidden="true" />
                  <p className="text-xs text-gray-400 text-center">Certyfikat</p>
                </div>
              </SectionReveal>
            ))}
            {/* Placeholder info */}
            <SectionReveal className="col-span-full">
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-6 text-center">
                <Award size={28} className="text-brand-400 mx-auto mb-3" aria-hidden="true" />
                <p className="text-gray-600 text-sm">Certyfikaty higienistek zostaną dodane wkrótce.</p>
                <a
                  href="https://rodentica.pl/o-nas/nasz-personel/asystentki-stomatologiczne/certyfikaty-asystentek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-600 text-sm font-medium mt-3 hover:underline cursor-pointer"
                >
                  <Award size={14} aria-hidden="true" />
                  Przeglądaj na rodentica.pl →
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <CtaSection title="Zaufaj certyfikowanym specjalistom" subtitle="Nasze kwalifikacje to gwarancja najwyższej jakości leczenia." />
    </div>
  )
}
