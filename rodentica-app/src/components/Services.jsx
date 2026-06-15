import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Sparkles, Hexagon, AlignJustify, ShieldCheck, Baby, Microscope } from 'lucide-react'
import SectionReveal from './SectionReveal'

const services = [
  {
    Icon: Sparkles,
    title: 'Stomatologia Estetyczna',
    desc: 'Wybielanie, licówki i rekonstrukcje – dla pięknego uśmiechu zgodnego z Twoimi oczekiwaniami.',
    color: 'from-amber-400 to-orange-400',
    bg: 'group-hover:bg-amber-50 dark:group-hover:bg-amber-900/20',
  },
  {
    Icon: Hexagon,
    title: 'Implantologia',
    desc: 'Najnowocześniejsze implanty Biomet 3i. Trwałe rozwiązanie do uzupełnienia brakujących zębów.',
    color: 'from-brand-400 to-brand-600',
    bg: 'group-hover:bg-brand-50 dark:group-hover:bg-brand-900/20',
  },
  {
    Icon: AlignJustify,
    title: 'Ortodoncja',
    desc: 'Aparaty stałe i zestawki przezroczyste. Prowadzimy leczenie od dziecka do dorosłych.',
    color: 'from-violet-400 to-purple-500',
    bg: 'group-hover:bg-violet-50 dark:group-hover:bg-violet-900/20',
  },
  {
    Icon: ShieldCheck,
    title: 'Leczenie Kanałowe',
    desc: 'Pod mikroskopem, precyzyjnie. Ratujemy zęby zamiast je usuwać.',
    color: 'from-emerald-400 to-teal-500',
    bg: 'group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20',
  },
  {
    Icon: Baby,
    title: 'Stomatologia Dziecięca',
    desc: 'Bezpieczna, przyjazna atmosfera dla najmłodszych pacjentów. Uczymy dbać o zęby od początku.',
    color: 'from-pink-400 to-rose-400',
    bg: 'group-hover:bg-pink-50 dark:group-hover:bg-pink-900/20',
  },
  {
    Icon: Microscope,
    title: 'Profilaktyka i Higiena',
    desc: 'Profesjonalne czyszczenie i poradnictwo. Zapobieganie jest lepsze niż leczenie.',
    color: 'from-cyan-400 to-blue-400',
    bg: 'group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/20',
  },
]

function ServiceCard({ Icon, title, desc, color, bg, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-7 cursor-pointer
        hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-500/10 hover:border-brand-200 dark:hover:border-brand-700
        transition-all duration-300 ${bg}`}
      role="article"
      aria-label={`Usługa: ${title}`}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={26} color="white" strokeWidth={1.8} aria-hidden="true" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2.5">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{desc}</p>

      {/* Hover accent line */}
      <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${color} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} aria-hidden="true" />
    </motion.article>
  )
}

export default function Services() {
  return (
    <section
      id="uslugi"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50"
      aria-label="Nasze specjalizacje"
    >
      <div className="max-w-6xl mx-auto">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Specjalizacje
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nasze Usługi
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-lg mx-auto">
            Pełny zakres usług stomatologicznych dla całej rodziny
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
