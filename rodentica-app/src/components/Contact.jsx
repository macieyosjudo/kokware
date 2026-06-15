import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import SectionReveal from './SectionReveal'

function ContactInfo({ Icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
        <Icon size={20} className="text-white" aria-hidden="true" />
      </div>
      <div>
        <div className="text-white/70 text-sm mb-0.5">{title}</div>
        <div className="text-white font-semibold">{children}</div>
      </div>
    </div>
  )
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Imię jest wymagane'
  if (!form.email.trim()) errors.email = 'Email jest wymagany'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Nieprawidłowy format email'
  if (!form.phone.trim()) errors.phone = 'Telefon jest wymagany'
  if (!form.message.trim()) errors.message = 'Wiadomość jest wymagana'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      id="kontakt"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-brand-500 via-brand-600 to-cyan-600 relative overflow-hidden"
      aria-label="Kontakt"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Umów się do nas
          </h2>
          <p className="text-white/80 text-lg">
            Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami już dziś.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <SectionReveal direction="right">
            <div className="space-y-6">
              <ContactInfo Icon={Phone} title="Telefon">
                <a href="tel:+48338123123" className="hover:text-white/80 transition-colors cursor-pointer">
                  33 8 123 123
                </a>
              </ContactInfo>
              <ContactInfo Icon={Mail} title="Email">
                <a href="mailto:biuro@rodentica.pl" className="hover:text-white/80 transition-colors cursor-pointer">
                  biuro@rodentica.pl
                </a>
              </ContactInfo>
              <ContactInfo Icon={MapPin} title="Adres">
                ul. Cieszyńska 179<br />43-300 Bielsko-Biała
              </ContactInfo>
            </div>

            {/* Map embed placeholder */}
            <div className="mt-8 rounded-2xl overflow-hidden bg-white/10 border border-white/20 aspect-video flex items-center justify-center">
              <a
                href="https://maps.google.com/?q=Cieszyńska+179,+Bielsko-Biała"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Otwórz mapę w Google Maps"
              >
                <MapPin size={32} />
                <span className="text-sm font-medium">Otwórz mapę Google</span>
              </a>
            </div>
          </SectionReveal>

          {/* Contact form */}
          <SectionReveal delay={0.15} direction="left">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl shadow-brand-900/20">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center gap-4 py-8 text-center"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Wiadomość wysłana!</h3>
                  <p className="text-gray-500 dark:text-gray-400">Odezwiemy się w ciągu 24 godzin.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }) }}
                    className="mt-2 text-brand-500 font-semibold hover:underline cursor-pointer"
                  >
                    Wyślij kolejną wiadomość
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Formularz kontaktowy">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Napisz do nas</h3>

                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Imię i nazwisko <span aria-hidden="true" className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        placeholder="Jan Kowalski"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all ${
                          errors.name ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
                        }`}
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} aria-hidden="true" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Email <span aria-hidden="true" className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        placeholder="jan@example.pl"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all ${
                          errors.email ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
                        }`}
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} aria-hidden="true" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Telefon <span aria-hidden="true" className="text-red-400">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        placeholder="+48 600 000 000"
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all ${
                          errors.phone ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
                        }`}
                      />
                      {errors.phone && (
                        <p id="phone-error" role="alert" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} aria-hidden="true" /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Wiadomość <span aria-hidden="true" className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        placeholder="Opisz krótko czego potrzebujesz..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none ${
                          errors.message ? 'border-red-400' : 'border-gray-200 dark:border-gray-700'
                        }`}
                      />
                      {errors.message && (
                        <p id="message-error" role="alert" className="mt-1 text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle size={12} aria-hidden="true" /> {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:bg-brand-300 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-brand-500/30 hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed disabled:transform-none"
                      aria-label="Wyślij wiadomość"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
                          Wysyłanie...
                        </>
                      ) : (
                        <>
                          <Send size={16} aria-hidden="true" />
                          Wyślij wiadomość
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
