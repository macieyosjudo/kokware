import { Link } from 'react-router-dom'
import { Phone, CalendarCheck } from 'lucide-react'
import SectionReveal from './SectionReveal'

export default function CtaSection({ title = 'Umów się na wizytę', subtitle = 'Zapraszamy do kontaktu. Nasz zespół jest do Twojej dyspozycji.' }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-500 to-cyan-500" aria-label="Umów wizytę">
      <div className="max-w-4xl mx-auto text-center">
        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white/85 text-lg mb-10">{subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/kontakt"
              className="flex items-center gap-2 bg-white text-brand-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-50 hover:-translate-y-1 transition-all duration-200 shadow-lg cursor-pointer"
            >
              <CalendarCheck size={18} aria-hidden="true" />
              Umów wizytę online
            </Link>
            <a
              href="tel:+48338123123"
              className="flex items-center gap-2 bg-white/20 text-white border border-white/40 px-7 py-3.5 rounded-xl font-semibold hover:bg-white/30 hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              aria-label="Zadzwoń: 33 8 123 123"
            >
              <Phone size={18} aria-hidden="true" />
              33 8 123 123
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
