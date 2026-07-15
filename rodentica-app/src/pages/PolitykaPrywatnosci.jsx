import { ShieldCheck } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionReveal from '../components/SectionReveal'

const sections = [
  {
    title: '1. Administrator danych',
    body: 'Administratorem danych osobowych zbieranych za pośrednictwem serwisu rodentica.pl jest Rodentica Stomatologia Estetyczna, ul. Cieszyńska 179, 43-300 Bielsko-Biała, NIP: [uzupełnić], REGON: [uzupełnić] ("Administrator"). Kontakt w sprawach dotyczących przetwarzania danych osobowych: e-mail biuro@rodentica.pl, telefon 33 8 123 123.',
  },
  {
    title: '2. Jakie dane zbieramy',
    body: 'Za pośrednictwem formularza kontaktowego zbieramy: imię i nazwisko, adres e-mail, numer telefonu, treść wiadomości oraz opcjonalnie przesłane zdjęcie. Dane te podawane są dobrowolnie przez użytkownika w celu obsługi zapytania lub umówienia wizyty.',
  },
  {
    title: '3. Cel i podstawa prawna przetwarzania',
    body: 'Dane osobowe przetwarzane są w celu odpowiedzi na przesłane zapytanie oraz kontaktu w sprawie umówienia wizyty, na podstawie zgody użytkownika wyrażonej przy wysyłce formularza (art. 6 ust. 1 lit. a RODO). W przypadku przesłania w formularzu zdjęcia lub opisu dolegliwości zdrowotnych, podstawą przetwarzania tych szczególnych kategorii danych osobowych jest wyraźna zgoda użytkownika (art. 9 ust. 2 lit. a RODO).',
  },
  {
    title: '4. Odbiorcy danych',
    body: 'Dane mogą być przekazywane podmiotom wspierającym Administratora w prowadzeniu serwisu i obsłudze formularza kontaktowego (np. dostawca hostingu, dostawca usługi formularzy kontaktowych), wyłącznie w zakresie niezbędnym do realizacji tych usług i na podstawie zawartych z nimi umów powierzenia przetwarzania danych.',
  },
  {
    title: '5. Okres przechowywania danych',
    body: 'Dane osobowe przesłane w formularzu kontaktowym przechowywane są przez okres niezbędny do obsługi zapytania i kontaktu z użytkownikiem, a następnie do czasu przedawnienia ewentualnych roszczeń lub do momentu wycofania zgody.',
  },
  {
    title: '6. Prawa użytkownika',
    body: 'Użytkownikowi przysługuje prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, a także prawo do wycofania zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem) oraz prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.',
  },
  {
    title: '7. Bezpieczeństwo danych',
    body: 'Administrator stosuje odpowiednie środki techniczne i organizacyjne mające na celu ochronę przetwarzanych danych osobowych przed nieuprawnionym dostępem, utratą lub zniszczeniem.',
  },
  {
    title: '8. Pliki cookies',
    body: 'Serwis rodentica.pl wykorzystuje wyłącznie niezbędne, techniczne pliki cookies, konieczne do prawidłowego działania strony. Serwis nie wykorzystuje plików cookies do celów analitycznych ani marketingowych. W przypadku wprowadzenia takich narzędzi w przyszłości, użytkownicy zostaną o tym poinformowani, a niniejsza polityka zostanie odpowiednio zaktualizowana.',
  },
  {
    title: '9. Zmiany polityki prywatności',
    body: 'Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. Aktualna wersja dokumentu publikowana jest zawsze na tej stronie.',
  },
]

export default function PolitykaPrywatnosci() {
  return (
    <div>
      <PageHero
        title="Polityka Prywatności"
        subtitle="Informacje o zasadach przetwarzania danych osobowych użytkowników serwisu rodentica.pl."
        Icon={ShieldCheck}
        breadcrumb={[{ label: 'Polityka Prywatności' }]}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" aria-label="Polityka prywatności">
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
