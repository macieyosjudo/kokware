import { useState, useEffect } from 'react'
import { Users, Award, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'
import ImagePlaceholder from '../components/ImagePlaceholder'
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

const higienistkiCerts = [
  '/Anita-1-001-150x150.jpg', '/Anita-2-001-150x150.jpg',
  '/Ewelina-1-001-150x150.jpg', '/Ewelina-2-001-150x150.jpg',
  '/gosia-1-001-150x150.jpg', '/gosia-2-001-150x150.jpg', '/gosia-3-001-150x150.jpg', '/gosia-4-001-150x150.jpg', '/gosia-5-001-150x150.jpg',
  '/zuzia-2-001-150x150.jpg', '/zuzia-5-001-150x150.jpg', '/zuzia-6-001-150x150.jpg', '/zuzia-7-150x150.jpg', '/zuzia-8-001-150x150.jpg', '/zuzia-9-001-150x150.jpg',
]

const doctors = [
  {
    name: 'Agnieszka Romanowska-Szymala',
    role: 'Lekarz Stomatolog – Założycielka',
    specializations: ['Stomatologia Estetyczna', 'Protetyka', 'Implantologia'],
    desc: 'Założycielka i kierownik kliniki Rodentica. Specjalizuje się w stomatologii estetycznej i protetyce. Pasjonatka pięknych uśmiechów i nowoczesnych metod leczenia.',
    certs: agnieszka,
  },
  {
    name: 'Krzysztof Kuś',
    role: 'Lekarz Stomatolog – Specjalista',
    specializations: ['Implantologia', 'Chirurgia Stomatologiczna', 'Endodoncja'],
    desc: 'Specjalista w dziedzinie implantologii i chirurgii stomatologicznej. Wykonuje zabiegi wszczepienia implantów Biomet 3i oraz zabiegi chirurgiczne pod mikroskopem operacyjnym.',
    certs: krzysztof,
  },
  {
    name: 'Maciej Nowiński',
    role: 'Lekarz Stomatolog – Specjalista',
    specializations: ['Ortodoncja', 'Stomatologia Dziecięca', 'Leczenie Zachowawcze'],
    desc: 'Specjalista ortodoncji i stomatologii dziecięcej. Prowadzi leczenie aparatami stałymi, ruchomymi oraz niewidoczymi alignerami Clear Liner. Uwielbia pracę z dziećmi.',
    certs: maciej,
  },
]

function CertModal({ person, onClose }) {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') lightbox !== null ? setLightbox(null) : onClose()
      if (e.key === 'ArrowRight' && lightbox !== null) setLightbox(i => (i + 1) % person.certs.length)
      if (e.key === 'ArrowLeft' && lightbox !== null) setLightbox(i => (i - 1 + person.certs.length) % person.certs.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, person.certs.length, onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
        role="dialog"
        aria-modal="true"
        aria-label={`Certyfikaty – ${person.name}`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center">
                <Award size={18} className="text-brand-500" aria-hidden="true" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-base leading-tight">{person.name}</h2>
                <p className="text-xs text-gray-400">{person.certs.length} certyfikat{person.certs.length === 1 ? '' : person.certs.length < 5 ? 'y' : 'ów'}</p>
              </div>
            </div>
            <button onClick={onClose} className="w-9 h-9 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors cursor-pointer" aria-label="Zamknij">
              <X size={18} />
            </button>
          </div>

          {/* Grid */}
          <div className="overflow-y-auto p-6">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {person.certs.map((src, i) => (
                <button key={i} onClick={() => setLightbox(i)} className="aspect-square rounded-xl overflow-hidden border border-gray-200 hover:border-brand-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer" aria-label={`Certyfikat ${i + 1}`}>
                  <img src={src} alt={`Certyfikat ${person.name} nr ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 flex items-center justify-center bg-black/90"
              onClick={() => setLightbox(null)}
            >
              <button onClick={(e) => { e.stopPropagation(); setLightbox(i => (i - 1 + person.certs.length) % person.certs.length) }} className="absolute left-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer" aria-label="Poprzednie">
                <ChevronLeft size={22} />
              </button>
              <motion.img
                key={lightbox}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                src={person.certs[lightbox]}
                alt={`Certyfikat ${person.name} nr ${lightbox + 1}`}
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button onClick={(e) => { e.stopPropagation(); setLightbox(i => (i + 1) % person.certs.length) }} className="absolute right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer" aria-label="Następne">
                <ChevronRight size={22} />
              </button>
              <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer" aria-label="Zamknij podgląd">
                <X size={16} />
              </button>
              <p className="absolute bottom-4 text-white/50 text-sm">{lightbox + 1} / {person.certs.length}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Zespol() {
  const [activePerson, setActivePerson] = useState(null)

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
            {doctors.map(({ name, role, specializations, desc, certs }, i) => (
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
                    <button
                      onClick={() => setActivePerson({ name, certs })}
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-brand-600 transition-colors cursor-pointer"
                      aria-label={`Certyfikaty – ${name}`}
                    >
                      <Award size={13} aria-hidden="true" />
                      Zobacz certyfikaty
                    </button>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Assistants */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Higienistki stomatologiczne">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="right">
              <span className="inline-block bg-brand-50 text-brand-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Personel</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Higienistki Stomatologiczne</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nasz wykwalifikowany personel higienistyczny dba o to, by każda wizyta przebiegała sprawnie i komfortowo. Higienistki są zawsze gotowe pomóc zarówno lekarzowi jak i pacjentowi.
              </p>
              <button
                onClick={() => setActivePerson({ name: 'Higienistki Stomatologiczne', certs: higienistkiCerts })}
                className="inline-flex items-center gap-2 text-sm text-brand-600 hover:underline font-medium cursor-pointer"
                aria-label="Certyfikaty higienistek"
              >
                <Award size={15} aria-hidden="true" />
                Zobacz certyfikaty higienistek
              </button>
            </SectionReveal>
            <SectionReveal delay={0.15} direction="left">
              <ImagePlaceholder label="Zdjęcie zespołu / asystentek" aspect="aspect-video" />
            </SectionReveal>
          </div>
        </div>
      </section>

      <CtaSection />

      {activePerson && <CertModal person={activePerson} onClose={() => setActivePerson(null)} />}
    </div>
  )
}
