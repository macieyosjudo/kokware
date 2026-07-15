import { FileText } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'

const sections = [
  {
    title: '1. Postanowienia ogólne',
    body: 'Niniejszy Regulamin określa zasady korzystania z serwisu internetowego rodentica.pl ("Serwis"), prowadzonego przez Rodentica Stomatologia Estetyczna, ul. Cieszyńska 179, 43-300 Bielsko-Biała, NIP: [uzupełnić], REGON: [uzupełnić].',
  },
  {
    title: '2. Zakres usług Serwisu',
    body: 'Serwis ma charakter informacyjny i umożliwia zapoznanie się z ofertą kliniki, cennikiem, zespołem specjalistów oraz przesłanie zapytania lub prośby o umówienie wizyty za pośrednictwem formularza kontaktowego. Serwis nie umożliwia rezerwacji wizyt online w czasie rzeczywistym – każde zgłoszenie jest potwierdzane indywidualnie przez personel kliniki.',
  },
  {
    title: '3. Zasady korzystania z formularza kontaktowego',
    body: 'Wysyłając formularz kontaktowy, użytkownik zobowiązany jest do podania prawdziwych danych oraz wyrażenia zgody na przetwarzanie danych osobowych w celu obsługi zgłoszenia. Szczegóły dotyczące przetwarzania danych osobowych określa Polityka Prywatności.',
  },
  {
    title: '4. Własność intelektualna',
    body: 'Wszelkie treści, zdjęcia, grafiki i materiały zamieszczone w Serwisie stanowią własność Rodentica Stomatologia Estetyczna lub są wykorzystywane za zgodą uprawnionych podmiotów i podlegają ochronie prawnoautorskiej. Kopiowanie i rozpowszechnianie tych treści bez zgody Administratora jest zabronione.',
  },
  {
    title: '5. Odpowiedzialność',
    body: 'Informacje zawarte w Serwisie, w tym ceny usług, mają charakter orientacyjny i nie stanowią oferty w rozumieniu Kodeksu cywilnego. Ostateczny koszt leczenia ustalany jest indywidualnie po konsultacji z lekarzem. Serwis nie zastępuje konsultacji medycznej.',
  },
  {
    title: '6. Reklamacje',
    body: 'Uwagi dotyczące funkcjonowania Serwisu można zgłaszać na adres e-mail biuro@rodentica.pl lub telefonicznie pod numerem 33 8 123 123. Reklamacje dotyczące działania Serwisu rozpatrywane są w terminie do 14 dni od dnia ich zgłoszenia.',
  },
  {
    title: '7. Postanowienia końcowe',
    body: 'W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego. Administrator zastrzega sobie prawo do wprowadzania zmian w Regulaminie. Aktualna wersja dokumentu publikowana jest zawsze na tej stronie.',
  },
]

export default function Regulamin() {
  return (
    <div>
      <PageHero
        title="Regulamin Serwisu"
        subtitle="Zasady korzystania z serwisu internetowego rodentica.pl."
        Icon={FileText}
        breadcrumb={[{ label: 'Regulamin' }]}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Regulamin serwisu">
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map(({ title, body }) => (
            <SectionReveal key={title}>
              <h2 className="text-lg font-bold text-gray-900 mb-2">{title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
            </SectionReveal>
          ))}
          <SectionReveal>
            <p className="text-gray-400 text-xs">Ostatnia aktualizacja: lipiec 2026 r.</p>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
