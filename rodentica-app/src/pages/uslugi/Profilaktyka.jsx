import { Microscope } from 'lucide-react'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function Profilaktyka() {
  return (
    <ServicePageTemplate
      title="Profilaktyka i Higiena Jamy Ustnej"
      subtitle="Profesjonalne zabiegi higienizacyjne przez dyplomowane higienistki. Klucz do zdrowego uśmiechu przez całe życie."
      Icon={Microscope}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Profilaktyka i Higiena' }]}
      intro={[
        'Profilaktyka pozwala na utrzymanie pięknego i zdrowego uśmiechu przez wiele lat. Współczesna stomatologia dysponuje bardzo szerokim asortymentem preparatów i urządzeń, które pomagają w utrzymaniu prawidłowej higieny jamy ustnej. Nasze dyplomowane higienistki stomatologiczne przeprowadzają kompleksowe zabiegi higienizacyjne i edukują pacjentów w zakresie właściwej pielęgnacji.',
        'Obok tradycyjnych szczoteczek do zębów jest wiele profesjonalnych szczoteczek elektrycznych. Do poprawy higieny dziąseł i przestrzeni międzyzębowych wynaleziono irygator, który znacznie podnosi jakość zabiegów higienicznych. Zabiegi higienizacyjne powinny być wykonywane regularnie – zalecamy wizytę co 6 miesięcy.',
      ]}
      benefits={[
        'Piękny i zdrowy uśmiech przez lata',
        'Zapobieganie próchnicy i chorobom dziąseł',
        'Profesjonalne usuwanie kamienia i przebarwień',
        'Świeży oddech',
        'Indywidualne porady dotyczące higieny domowej',
        'Regularne wizyty zapobiegają kosztownemu leczeniu',
      ]}
      procedures={[
        { title: 'Skaling – usuwanie kamienia', desc: 'Profesjonalne usuwanie twardych złogów (kamienia nazębnego) z powierzchni zębów i z przestrzeni poddziąsłowej.' },
        { title: 'Piaskowanie – usuwanie przebarwień', desc: 'Usuwanie przebarwień od kawy, herbaty, wina i tytoniu metodą strumieniowo-ścierną.' },
        { title: 'Polerowanie powierzchni zębów', desc: 'Wygładzenie powierzchni zębów pastą polerską po zabiegu higienizacji.' },
        { title: 'Fluoryzacja', desc: 'Wzmocnienie szkliwa preparatami fluoru – szczególnie zalecane u dzieci i osób z nadwrażliwością.' },
        { title: 'Instrukcja higieny jamy ustnej', desc: 'Indywidualny instruktaż prawidłowego mycia zębów, używania nici i irigatora.' },
        { title: 'Dobór odpowiednich produktów', desc: 'Rekomendacje pasty, szczoteczki, płynu i nici dopasowane do indywidualnych potrzeb.' },
        { title: 'Wybielanie profesjonalne', desc: 'Wybielanie zębów w gabinecie metodą ZOOM lub nakładkowe domowe.' },
      ]}
      price="od 100 zł"
      priceDetails={[
        { label: 'Skaling', value: 'od 150 zł' },
        { label: 'Piaskowanie', value: 'od 150 zł' },
        { label: 'Fluoryzacja', value: 'od 80 zł' },
        { label: 'Higienizacja kompletna (skaling + piaskowanie + polerowanie)', value: 'od 300 zł' },
        { label: 'Znieczulenie The WAND (jeśli wymagane)', value: '35 zł' },
      ]}
      note="Zalecamy wizytę higienizacyjną co 6 miesięcy. Regularne profesjonalne czyszczenie jest tańsze i prostsze niż leczenie próchnicy lub chorób przyzębia, które mogą wyniknąć z zaniedbań."
      relatedServices={[
        { label: 'Stomatologia Zachowawcza', href: '/uslugi/stomatologia-zachowawcza' },
        { label: 'Periodontologia', href: '/uslugi/periodontologia' },
        { label: 'Stomatologia Dziecięca', href: '/uslugi/stomatologia-dziecieca' },
        { label: 'Stomatologia Estetyczna', href: '/uslugi/stomatologia-estetyczna' },
      ]}
    />
  )
}
