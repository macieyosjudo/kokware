import ServicePageTemplate from '../../components/ServicePageTemplate'
import { Microscope } from 'lucide-react'

export default function Profilaktyka() {
  return (
    <ServicePageTemplate
      title="Profilaktyka"
      subtitle="Zdrowy uśmiech przez długie lata"
      Icon={Microscope}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Profilaktyka' }]}
      intro={[
        'Profilaktyka stomatologiczna to fundament zdrowego i pięknego uśmiechu przez wiele lat. Profesjonalne zabiegi higienizacyjne wykonywane przez wykwalifikowanych higienistek stomatologicznych usuwają kamień nazębny, przebarwienia i osady, których nie da się usunąć zwykłą szczoteczką – stanowią one doskonałe uzupełnienie codziennej pielęgnacji domowej.',
        'Podczas każdej wizyty higienizacyjnej udzielamy szczegółowych porad dotyczących prawidłowego mycia zębów, doboru szczoteczki elektrycznej, irigatora i nici dentystycznej. Nowoczesne podejście do profilaktyki łączy profesjonalne czyszczenie z edukacją pacjenta – bo regularne wizyty co 6 miesięcy to najlepszy i najtańszy sposób na unikanie kosztownego leczenia stomatologicznego.',
      ]}
      benefits={[
        'Piękny i zdrowy uśmiech przez lata',
        'Zapobieganie próchnicy i chorobom dziąseł',
        'Profesjonalne usuwanie kamienia i przebarwień',
        'Wybielanie zębów',
        'Porady dotyczące higieny domowej',
        'Regularne wizyty zapobiegają kosztownemu leczeniu',
      ]}
      procedures={[
        { title: 'Usuwanie kamienia nazębnego (skaling)', desc: 'Usuwanie twardych złogów kamienia nazębnego za pomocą skalera ultradźwiękowego – bezbolesne i skuteczne.' },
        { title: 'Usuwanie przebarwień i osadów (piaskowanie)', desc: 'Usuwanie przebarwień od kawy, herbaty i papierosów strumieniem piasku pod ciśnieniem – zęby odzyskują naturalną biel.' },
        { title: 'Polerowanie zębów', desc: 'Końcowy etap higienizacji – polerowanie powierzchni zębów pastą, która usuwa resztki osadów i wygładza szkliwo.' },
        { title: 'Fluoryzacja (wzmocnienie szkliwa)', desc: 'Aplikacja wysokoskoncentrowanego preparatu fluorowego na oczyszczone zęby – wzmacnia szkliwo i zmniejsza nadwrażliwość.' },
        { title: 'Wybielanie profesjonalne', desc: 'Wybielanie zębów w gabinecie lub nakładkowe – przywraca naturalny, jasny odcień zębów.' },
        { title: 'Instrukcja higieny jamy ustnej', desc: 'Praktyczna nauka prawidłowej techniki szczotkowania i nitkowania zębów dostosowana do indywidualnych potrzeb pacjenta.' },
        { title: 'Dobór szczoteczki i pasty', desc: 'Rekomendacja odpowiedniej szczoteczki (elektrycznej lub manualnej) i pasty do zębów w zależności od stanu jamy ustnej.' },
        { title: 'Porady dotyczące irigatora', desc: 'Instruktaż użycia irigatora – urządzenia do płukania przestrzeni międzyzębowych strumieniem wody.' },
      ]}
      price="od 100 zł"
      priceDetails={[
        { label: 'Skaling', value: 'od 150 zł' },
        { label: 'Piaskowanie', value: 'od 150 zł' },
        { label: 'Fluoryzacja', value: 'od 80 zł' },
        { label: 'Higienizacja kompletna', value: 'od 300 zł' },
        { label: 'Znieczulenie The WAND', value: '35 zł' },
      ]}
      note="Zabiegi higienizacyjne powinny być wykonywane regularnie – zalecamy wizytę co 6 miesięcy. Regularne czyszczenie zapobiega próchnicy, chorobom dziąseł i nieprzyjemnemu oddechowi."
      relatedServices={[
        { label: 'Stomatologia Zachowawcza', href: '/uslugi/stomatologia-zachowawcza' },
        { label: 'Periodontologia', href: '/uslugi/periodontologia' },
        { label: 'Stomatologia Dziecięca', href: '/uslugi/stomatologia-dziecieca' },
      ]}
    />
  )
}
