import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionReveal from './SectionReveal'

const faqs = [
  {
    q: 'Czy zabiegi w Rodentica są bolesne?',
    a: 'Absolutnie nie! Stosujemy nowoczesne znieczulenie komputerowe The WAND, które sprawia, że zabiegi są całkowicie bezbolesne. Nawet najmłodsi pacjenci nie boją się dentysty.',
  },
  {
    q: 'Jakie są koszty leczenia?',
    a: 'Ceny zaczynają się od 100 zł za profilaktykę, 180 zł za leczenie zachowawcze. Implanty kosztują od 5000 zł. Na każdy zabieg przygotowujemy indywidualny kosztorys.',
  },
  {
    q: 'Czy możemy liczyć na raty?',
    a: 'Tak, oferujemy finansowanie zabiegu. Możesz rozłożyć koszty na wygodne dla Ciebie raty za pomocą systemu Euro26.',
  },
  {
    q: 'Czy wykonujecie zabiegi dla pacjentów zagranicznych?',
    a: 'Tak! Oferujemy konsultacje online dla pacjentów z zagranicy. Wystarczy, że wyślesz nam zdjęcie panoramiczne zębów, a otrzymasz plan leczenia i kosztorys.',
  },
  {
    q: 'Jak zarezerwować wizytę?',
    a: 'Możesz zadzwonić bezpośrednio na numer 33 8 123 123 lub napisać email na biuro@rodentica.pl. Zespół recepcji pomoże Ci wybrać odpowiedni termin.',
  },
]

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)

  return (
    <SectionReveal delay={index * 0.08}>
      <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
        open
          ? 'border-brand-200 dark:border-brand-700 bg-white dark:bg-gray-900 shadow-md shadow-brand-500/10'
          : 'border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-gray-200 dark:hover:border-gray-700'
      }`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
          aria-expanded={open}
          aria-controls={`faq-answer-${index}`}
          id={`faq-question-${index}`}
        >
          <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{q}</span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              open ? 'bg-brand-500 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
            }`}
            aria-hidden="true"
          >
            <Plus size={16} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="px-6 pb-5 pt-0">
                <div className="h-px bg-gray-100 dark:bg-gray-800 mb-4" />
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">{a}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionReveal>
  )
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950"
      aria-label="Często zadawane pytania"
    >
      <div className="max-w-2xl mx-auto">
        <SectionReveal className="text-center mb-12">
          <span className="inline-block bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Często Zadawane Pytania
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Odpowiadamy na Twoje pytania
          </p>
        </SectionReveal>

        <div className="space-y-3" role="list" aria-label="Lista pytań i odpowiedzi">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} {...faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
