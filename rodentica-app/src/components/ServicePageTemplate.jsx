import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from './PageHero'
import SectionReveal from './SectionReveal'
import CtaSection from './CtaSection'
import ImagePlaceholder from './ImagePlaceholder'

export default function ServicePageTemplate({
  title,
  subtitle,
  Icon,
  breadcrumb,
  intro,
  benefits = [],
  procedures = [],
  price,
  priceDetails = [],
  note,
  relatedServices = [],
}) {
  return (
    <div>
      <PageHero title={title} subtitle={subtitle} Icon={Icon} breadcrumb={breadcrumb} />

      {/* Intro */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Opis usługi">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <SectionReveal direction="right">
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                {Array.isArray(intro) ? intro.map((p, i) => <p key={i} className="mb-4 last:mb-0">{p}</p>) : <p>{intro}</p>}
              </div>

              {priceDetails.length > 0 && (
                <div className="mt-10 bg-brand-50 rounded-2xl p-6 border border-brand-100">
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">Cennik</h3>
                  <ul className="space-y-2.5 list-none p-0 m-0">
                    {priceDetails.map(({ label, value }) => (
                      <li key={label} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{label}</span>
                        <span className="font-semibold text-brand-600">{value}</span>
                      </li>
                    ))}
                  </ul>
                  {price && (
                    <div className="mt-4 pt-4 border-t border-brand-200 flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Cena od:</span>
                      <span className="text-2xl font-bold text-gradient">{price}</span>
                    </div>
                  )}
                </div>
              )}

              {!priceDetails.length && price && (
                <div className="mt-8 inline-flex items-center gap-3 bg-brand-50 border border-brand-100 rounded-2xl px-6 py-4">
                  <span className="text-gray-600 font-medium">Cena od:</span>
                  <span className="text-2xl font-bold text-gradient">{price}</span>
                </div>
              )}
            </SectionReveal>

            <SectionReveal delay={0.15} direction="left">
              <ImagePlaceholder label={`Zdjęcie – ${title}`} aspect="aspect-[4/3]" className="mb-6" />

              {benefits.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 text-lg">Korzyści</h3>
                  <ul className="space-y-2.5 list-none p-0 m-0">
                    {benefits.map(b => (
                      <li key={b} className="flex items-start gap-3 text-gray-700 text-sm">
                        <CheckCircle size={16} className="text-brand-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Procedures */}
      {procedures.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Zakres usług">
          <div className="max-w-6xl mx-auto">
            <SectionReveal className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Zakres usług</h2>
            </SectionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {procedures.map((proc, i) => (
                <SectionReveal key={i} delay={(i % 2) * 0.08}>
                  <div className="bg-white rounded-xl p-5 border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all duration-200">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-brand-500 font-bold text-sm">{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{proc.title}</h3>
                        {proc.desc && <p className="text-gray-500 text-xs leading-relaxed">{proc.desc}</p>}
                      </div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Note */}
      {note && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-amber-800 text-sm leading-relaxed">
                <span className="font-semibold">Pamiętaj: </span>{note}
              </div>
            </SectionReveal>
          </div>
        </section>
      )}

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" aria-label="Powiązane usługi">
          <div className="max-w-6xl mx-auto">
            <SectionReveal className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Powiązane usługi</h2>
            </SectionReveal>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map(({ label, href }) => (
                <Link key={href} to={href} className="flex items-center gap-2 bg-white border border-gray-200 hover:border-brand-300 hover:text-brand-600 text-gray-700 px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer hover:shadow-sm">
                  {label} <ArrowRight size={14} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </div>
  )
}
