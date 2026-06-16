import { useState } from 'react'
import { Images, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'
import CtaSection from '../components/CtaSection'

const photos = [
  { src: '/galeria/galeria-1-150x150.jpg', label: 'Klinika – widok ogólny' },
  { src: '/galeria/galeria-2-150x150.jpg', label: 'Klinika – wnętrze' },
  { src: '/galeria/galeria-4-150x150.jpg', label: 'Klinika – wnętrze 2' },
  { src: '/galeria/galeria-5-150x150.jpg', label: 'Klinika – wnętrze 3' },
  { src: '/galeria/galeria-6-150x150.jpg', label: 'Klinika – wnętrze 4' },
  { src: '/galeria/gabinet04-150x150.jpg', label: 'Gabinet 1' },
  { src: '/galeria/gabinet06-150x150.jpg', label: 'Gabinet 2' },
  { src: '/galeria/recepcja01-150x150.jpg', label: 'Recepcja' },
  { src: '/galeria/klinika1-150x150.png', label: 'Klinika Rodentica' },
  { src: '/galeria/asystentki_1-150x150.jpg', label: 'Asystentki' },
  { src: '/galeria/specjaliści-150x150.jpg', label: 'Specjaliści' },
  { src: '/galeria/IMG_7477-150x150.jpg', label: 'Klinika' },
  { src: '/galeria/tn_IMG_1359-150x150.jpg', label: 'Klinika – zdjęcie' },
  { src: '/galeria/tn_IMG_1369-150x150.jpg', label: 'Klinika – zdjęcie 2' },
]

export default function Galeria() {
  const [lightbox, setLightbox] = useState(null)

  const prev = () => setLightbox(i => (i - 1 + photos.length) % photos.length)
  const next = () => setLightbox(i => (i + 1) % photos.length)

  const onKey = (e) => {
    if (e.key === 'Escape') setLightbox(null)
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

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
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map(({ src, label }, i) => (
              <SectionReveal key={i} delay={(i % 4) * 0.06} direction="scale">
                <button
                  onClick={() => setLightbox(i)}
                  className="group w-full aspect-square rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  aria-label={label}
                >
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </button>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Chcesz odwiedzić naszą klinikę?" subtitle="Zapraszamy do Bielska-Białej. Umów wizytę i przekonaj się sam o naszej atmosferze." />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setLightbox(null)}
            onKeyDown={onKey}
            tabIndex={-1}
          >
            <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer" aria-label="Poprzednie">
              <ChevronLeft size={22} />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={photos[lightbox].src}
              alt={photos[lightbox].label}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer" aria-label="Następne">
              <ChevronRight size={22} />
            </button>

            <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer" aria-label="Zamknij">
              <X size={16} />
            </button>

            <p className="absolute bottom-4 text-white/50 text-sm">{lightbox + 1} / {photos.length}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
