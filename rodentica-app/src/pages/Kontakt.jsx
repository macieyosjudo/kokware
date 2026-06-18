import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageSquare, ImagePlus, X } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'

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

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Imię jest wymagane'
  if (!form.email.trim()) errors.email = 'Email jest wymagany'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Nieprawidłowy format email'
  if (!form.phone.trim()) errors.phone = 'Telefon jest wymagany'
  if (!form.message.trim()) errors.message = 'Wiadomość jest wymagana'
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} <span className="text-red-400" aria-hidden="true">*</span>
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-xs text-red-500 flex items-center gap-1">
          <AlertCircle size={11} aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  )
}

export default function Kontakt() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [consent, setConsent] = useState(false)
  const [consentError, setConsentError] = useState(false)
  const [photo, setPhoto] = useState(null)
  const [photoPreview, setPhotoPreview] = useState(null)
  const fileInputRef = useRef(null)
  const open = isOpenNow()

  const handlePhoto = (e) => {
    const file = e.target.files[0]
    if (!file) return
    setPhoto(file)
    setPhotoPreview(URL.createObjectURL(file))
  }

  const removePhoto = () => {
    setPhoto(null)
    setPhotoPreview(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(form)
    if (!consent) setConsentError(true)
    if (Object.keys(errs).length || !consent) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
    removePhoto()
  }

  const inputClass = (name) => `w-full px-4 py-3 rounded-xl border text-sm bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent focus:bg-white transition-all ${errors[name] ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'}`

  return (
    <div>
      <PageHero
        title="Kontakt"
        subtitle="Jesteśmy do Twojej dyspozycji. Zadzwoń, napisz lub wypełnij formularz – odpowiemy w ciągu 24 godzin."
        Icon={MessageSquare}
        breadcrumb={[{ label: 'Kontakt' }]}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Dane kontaktowe i formularz">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: info */}
            <div>
              <SectionReveal direction="right">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Jak się z nami skontaktować?</h2>

                <div className="space-y-6 mb-10">
                  <a href="tel:+48338123123" className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50 transition-all group cursor-pointer" aria-label="Zadzwoń: 33 8 123 123">
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                      <Phone size={20} className="text-brand-600 group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Telefon</div>
                      <div className="font-semibold text-gray-900 text-lg">33 8 123 123</div>
                    </div>
                  </a>

                  <a href="mailto:biuro@rodentica.pl" className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-200 hover:bg-brand-50 transition-all group cursor-pointer" aria-label="Napisz email: biuro@rodentica.pl">
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                      <Mail size={20} className="text-brand-600 group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Email</div>
                      <div className="font-semibold text-gray-900">biuro@rodentica.pl</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-brand-600" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">Adres</div>
                      <div className="font-semibold text-gray-900">ul. Cieszyńska 179</div>
                      <div className="text-gray-600 text-sm">43-300 Bielsko-Biała</div>
                      <a
                        href="https://maps.google.com/?q=Cieszyńska+179,+Bielsko-Biała"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-brand-600 hover:underline mt-1 inline-block cursor-pointer"
                        aria-label="Otwórz w Google Maps"
                      >
                        Otwórz w Google Maps →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                  <div className="px-5 py-4 border-b border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-brand-500" aria-hidden="true" />
                      <span className="font-semibold text-gray-900 text-sm">Godziny otwarcia</span>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 ${open ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${open ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} aria-hidden="true" />
                      {open ? 'Otwarte' : 'Zamknięte'}
                    </span>
                  </div>
                  {schedule.map(({ day, time, open: isOpen }) => (
                    <div key={day} className={`flex items-center justify-between px-5 py-3 border-b border-gray-50 last:border-0 ${!isOpen ? 'opacity-50' : ''}`}>
                      <span className="text-sm text-gray-700">{day}</span>
                      <span className={`text-sm font-medium ${isOpen ? 'text-brand-600' : 'text-gray-400'}`}>{time}</span>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>

            {/* Right: form */}
            <SectionReveal delay={0.15} direction="left">
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
                      <CheckCircle size={36} className="text-emerald-500" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Wiadomość wysłana!</h3>
                    <p className="text-gray-500 max-w-xs">Odezwiemy się w ciągu 24 godzin. Możesz też zadzwonić: <strong>33 8 123 123</strong></p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); removePhoto() }} className="mt-2 text-brand-500 font-semibold hover:underline cursor-pointer text-sm">
                      Wyślij kolejną wiadomość
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Formularz kontaktowy">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Umów wizytę online</h2>
                    <p className="text-gray-500 text-sm mb-7">Wypełnij formularz, a skontaktujemy się z Tobą najszybciej jak to możliwe.</p>

                    <div className="space-y-5">
                      <Field id="name" label="Imię i nazwisko" error={errors.name}>
                        <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                          autoComplete="name" aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined}
                          placeholder="Jan Kowalski" className={inputClass('name')} />
                      </Field>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <Field id="email" label="Email" error={errors.email}>
                          <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                            autoComplete="email" aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined}
                            placeholder="jan@example.pl" className={inputClass('email')} />
                        </Field>
                        <Field id="phone" label="Telefon" error={errors.phone}>
                          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                            autoComplete="tel" aria-required="true" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined}
                            placeholder="+48 600 000 000" className={inputClass('phone')} />
                        </Field>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">Interesująca usługa</label>
                        <select id="service" name="service" value={form.service} onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent focus:bg-white transition-all hover:border-gray-300 cursor-pointer">
                          <option value="">Wybierz usługę (opcjonalnie)</option>
                          <option>Stomatologia Estetyczna</option>
                          <option>Implantologia</option>
                          <option>Ortodoncja</option>
                          <option>Leczenie Kanałowe</option>
                          <option>Protetyka</option>
                          <option>Stomatologia Dziecięca</option>
                          <option>Chirurgia Stomatologiczna</option>
                          <option>Profilaktyka i Higiena</option>
                          <option>Periodontologia</option>
                          <option>Konsultacja ogólna</option>
                        </select>
                      </div>

                      <Field id="message" label="Wiadomość" error={errors.message}>
                        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange}
                          aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined}
                          placeholder="Opisz krótko czego potrzebujesz lub kiedy chcesz umówić wizytę..."
                          className={`${inputClass('message')} resize-none`} />
                      </Field>

                      {/* GDPR consent */}
                      <div>
                        <label className={`flex gap-3 cursor-pointer group ${consentError ? 'text-red-500' : 'text-gray-600'}`}>
                          <input
                            type="checkbox"
                            checked={consent}
                            onChange={(e) => { setConsent(e.target.checked); if (e.target.checked) setConsentError(false) }}
                            className="mt-0.5 w-4 h-4 flex-shrink-0 accent-brand-500 cursor-pointer"
                            aria-required="true"
                            aria-invalid={consentError}
                          />
                          <span className="text-xs leading-relaxed">
                            Wyrażam zgodę na przetwarzanie moich danych osobowych (imię, adres e-mail) przez Rodentica Stomatologia Estetyczna z siedzibą w Bielsku-Białej w celu obsługi przesłanego zapytania oraz przesyłania informacji handlowych i marketingowych drogą elektroniczną. Administratorem danych jest Rodentica Stomatologia Estetyczna. Wiem, że mogę wycofać tę zgodę w każdym momencie. Pełne informacje o moich prawach oraz przetwarzaniu danych znajdują się w Polityce Prywatności. <span className="text-red-400" aria-hidden="true">*</span>
                          </span>
                        </label>
                        {consentError && (
                          <p role="alert" className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle size={11} aria-hidden="true" /> Wyrażenie zgody jest wymagane do wysłania formularza.
                          </p>
                        )}
                      </div>

                      {/* Photo upload */}
                      <div>
                        <p className="block text-sm font-medium text-gray-700 mb-1.5">Zdjęcie <span className="text-gray-400 font-normal">(opcjonalnie)</span></p>
                        {photoPreview ? (
                          <div className="relative inline-block">
                            <img src={photoPreview} alt="Podgląd zdjęcia" className="w-24 h-24 object-cover rounded-xl border border-gray-200" />
                            <button type="button" onClick={removePhoto}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
                              aria-label="Usuń zdjęcie">
                              <X size={12} />
                            </button>
                            <p className="text-xs text-gray-500 mt-1.5 max-w-[6rem] truncate">{photo?.name}</p>
                          </div>
                        ) : (
                          <button type="button" onClick={() => fileInputRef.current?.click()}
                            className="flex items-center gap-2 px-4 py-3 w-full rounded-xl border-2 border-dashed border-gray-200 text-sm text-gray-400 hover:border-brand-400 hover:text-brand-500 hover:bg-brand-50 transition-all cursor-pointer"
                            aria-label="Dodaj zdjęcie">
                            <ImagePlus size={18} aria-hidden="true" />
                            Kliknij aby dodać zdjęcie (JPG, PNG, WEBP, maks. 10 MB)
                          </button>
                        )}
                        <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={handlePhoto} className="hidden" aria-label="Wybierz zdjęcie" />
                      </div>

                      <button type="submit" disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:bg-brand-300 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-brand-500/30 hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed disabled:transform-none"
                        aria-label="Wyślij wiadomość"
                      >
                        {loading ? (
                          <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />Wysyłanie...</>
                        ) : (
                          <><Send size={16} aria-hidden="true" />Wyślij wiadomość</>
                        )}
                      </button>

                      <p className="text-xs text-gray-400 text-center">Informacja: W celu wysłania formularza wymagane jest wypełnienie wszystkich pól oznaczonych gwiazdką (<span className="text-red-400">*</span>) i wyrażenie zgody na przetwarzanie danych osobowych. Odpowiadamy w ciągu 24 godzin w dni robocze.</p>
                    </div>
                  </form>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
