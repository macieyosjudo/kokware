import { motion } from 'framer-motion'
import { Phone, CalendarCheck, ChevronDown } from 'lucide-react'
import DentistSVG from './DentistSVG'

const stats = [
  { value: '15+', label: 'Lat doświadczenia' },
  { value: '8000+', label: 'Zadowolonych pacjentów' },
  { value: '6', label: 'Specjalizacji' },
]

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector('#uslugi')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-16"
      aria-label="Sekcja główna"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand-500/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-400/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/30 dark:bg-brand-900/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-50 dark:bg-brand-900/30 border border-brand-100 dark:border-brand-800 text-brand-600 dark:text-brand-400 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-brand-500 rounded-full animate-pulse" />
              Nowoczesna stomatologia w Bielsku-Białej
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white mb-6"
            >
              Uśmiech godny{' '}
              <span className="text-gradient">prezentacji</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl"
            >
              Bezbolesne zabiegi, najnowsza technologia i zespół specjalistów czuwający
              nad Twoim zdrowiem i pięknem uśmiechu. Twój komfort jest naszym priorytetem.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <button
                onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-6 py-3.5 rounded-xl font-semibold text-base shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
                aria-label="Umów wizytę"
              >
                <CalendarCheck size={18} />
                Umów wizytę
              </button>
              <a
                href="tel:+48338123123"
                className="flex items-center gap-2 bg-white dark:bg-gray-800 text-brand-600 dark:text-brand-400 border-2 border-brand-200 dark:border-brand-800 px-6 py-3.5 rounded-xl font-semibold text-base hover:bg-brand-50 dark:hover:bg-gray-700 hover:-translate-y-1 transition-all duration-200 cursor-pointer shadow-sm"
                aria-label="Zadzwoń: 33 8 123 123"
              >
                <Phone size={18} />
                33 8 123 123
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8"
              role="list"
              aria-label="Statystyki kliniki"
            >
              {stats.map(({ value, label }) => (
                <div key={label} role="listitem" className="text-left">
                  <div className="text-2xl font-bold text-gradient">{value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dentist visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center justify-center"
          >
            <DentistSVG />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={scrollToServices}
          aria-label="Przewiń do usług"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 hover:text-brand-500 transition-colors cursor-pointer"
        >
          <span className="text-xs font-medium">Odkryj więcej</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
