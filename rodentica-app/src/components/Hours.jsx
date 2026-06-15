import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock } from 'lucide-react'
import SectionReveal from './SectionReveal'

const schedule = [
  { day: 'Poniedziałek', time: '09:00 – 20:00', open: true },
  { day: 'Wtorek', time: '09:00 – 20:00', open: true },
  { day: 'Środa', time: '09:00 – 20:00', open: true },
  { day: 'Czwartek', time: '09:00 – 20:00', open: true },
  { day: 'Piątek', time: '09:00 – 20:00', open: true },
  { day: 'Sobota', time: 'Zamknięte', open: false },
  { day: 'Niedziela', time: 'Zamknięte', open: false },
]

function isOpenNow() {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()
  return day >= 1 && day <= 5 && hour >= 9 && hour < 20
}

export default function Hours() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const open = isOpenNow()

  return (
    <section
      id="godziny"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50"
      aria-label="Godziny otwarcia"
    >
      <div className="max-w-4xl mx-auto">
        <SectionReveal className="text-center mb-12">
          <span className="inline-block bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Harmonogram
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Godziny Otwarcia
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Zapraszamy w wygodnych dla Ciebie godzinach
          </p>

          {/* Live status */}
          <div className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full text-sm font-semibold ${
            open
              ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
              : 'bg-red-50 dark:bg-red-900/30 text-red-500 dark:text-red-400 border border-red-200 dark:border-red-800'
          }`}>
            <span className={`w-2 h-2 rounded-full ${open ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
            {open ? 'Teraz otwarte' : 'Teraz zamknięte'}
          </div>
        </SectionReveal>

        <div ref={ref} className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm">
          {schedule.map(({ day, time, open: isOpen }, i) => (
            <motion.div
              key={day}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`flex items-center justify-between px-6 py-4 ${
                i < schedule.length - 1 ? 'border-b border-gray-50 dark:border-gray-800' : ''
              } ${isOpen ? 'hover:bg-brand-50/50 dark:hover:bg-brand-900/10' : 'opacity-60'} transition-colors`}
              role="row"
              aria-label={`${day}: ${time}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-brand-500' : 'bg-gray-300 dark:bg-gray-600'}`} aria-hidden="true" />
                <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">{day}</span>
              </div>
              <div className="flex items-center gap-2">
                {isOpen && <Clock size={14} className="text-brand-500" aria-hidden="true" />}
                <span className={`font-semibold text-sm sm:text-base ${
                  isOpen ? 'text-brand-600 dark:text-brand-400' : 'text-gray-400 dark:text-gray-500'
                }`}>
                  {time}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
