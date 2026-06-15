import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Microscope, ScanLine, Camera, Wind, Snowflake, Zap } from 'lucide-react'
import SectionReveal from './SectionReveal'

const techs = [
  {
    Icon: Zap,
    title: 'The WAND',
    desc: 'Bezbolesne znieczulenie komputerowe. Już nie boisz się dentysty.',
  },
  {
    Icon: ScanLine,
    title: 'Pracownia RTG',
    desc: 'Cyfrowa diagnostyka wysokiej rozdzielczości dla precyzyjnego leczenia.',
  },
  {
    Icon: Microscope,
    title: 'Mikroskop Operacyjny',
    desc: 'Zabiegi pod powiększeniem – leczenie kanałowe na najwyższym poziomie.',
  },
  {
    Icon: Camera,
    title: 'Kamera Wewnątrzustna',
    desc: 'Widok HD Twoich zębów. Razem obserwujemy problem i rezultaty leczenia.',
  },
  {
    Icon: Wind,
    title: 'Sterylizacja',
    desc: 'Najwyższe standardy dezynfekcji. Twoje bezpieczeństwo to priorytet.',
  },
  {
    Icon: Snowflake,
    title: 'Klimatyzacja',
    desc: 'Komfortowa temperatura. Relaksująca atmosfera podczas zabiegu.',
  },
]

function TechCard({ Icon, title, desc, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 text-center
        hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-lg hover:shadow-brand-500/10
        hover:-translate-y-1.5 transition-all duration-300 cursor-default"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-cyan-50 dark:from-brand-900/40 dark:to-cyan-900/40 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} className="text-brand-500" strokeWidth={1.8} aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
    </motion.div>
  )
}

export default function Technology() {
  return (
    <section
      id="technologia"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
      aria-label="Nowoczesna technologia"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with visual split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <SectionReveal>
            <span className="inline-block bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Technologia
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nowoczesne wyposażenie
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
              Inwestujemy w najnowocześniejszy sprzęt, by każdy zabieg był precyzyjny,
              bezpieczny i jak najbardziej komfortowy dla Ciebie.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15} direction="left">
            <div className="bg-gradient-to-br from-brand-500 to-cyan-500 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white rounded-full" />
                <div className="absolute bottom-4 left-4 w-20 h-20 border-2 border-white rounded-full" />
              </div>
              <div className="relative">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-xl font-medium opacity-90 mb-4">Bezbolesnych zabiegów</div>
                <p className="opacity-80 text-sm leading-relaxed">
                  Dzięki systemowi The WAND i nowoczesnym metodom znieczulenia,
                  każdy zabieg jest w pełni komfortowy.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techs.map((t, i) => (
            <TechCard key={t.title} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
