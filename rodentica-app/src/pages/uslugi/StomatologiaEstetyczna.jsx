import ServicePageTemplate from '../../components/ServicePageTemplate'
import { Sparkles } from 'lucide-react'

export default function StomatologiaEstetyczna() {
  return (
    <ServicePageTemplate
      title="Stomatologia Estetyczna"
      subtitle="Twój wymarzony uśmiech w zasięgu ręki"
      Icon={Sparkles}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Stomatologia Estetyczna' }]}
      intro={[
        'Stomatologia estetyczna to dziedzina, która łączy medycynę z pięknem – jej celem jest stworzenie uśmiechu godnego Hollywood przy zachowaniu pełnej funkcjonalności zębów. Dzięki nowoczesnym metodom możemy zmieniać kształt, kolor i położenie zębów, wypełniać luki oraz korygować wady, które przez lata obniżały Twoją pewność siebie.',
        'Każdy pacjent otrzymuje indywidualny plan leczenia dopasowany do jego potrzeb, oczekiwań i budżetu. Zanim wykonamy jakikolwiek zabieg, dokładnie analizujemy Twój uśmiech i proponujemy rozwiązania, które dadzą naturalne, piękne i trwałe efekty – bez bólu i stresu.',
      ]}
      benefits={[
        'Pewność siebie i lepsze samopoczucie',
        'Piękny naturalny uśmiech',
        'Nowoczesne metody bez bólu',
        'Indywidualny plan leczenia',
        'Trwałe i bezpieczne rezultaty',
        'Wybielanie ZOOM w gabinecie',
      ]}
      procedures={[
        { title: 'Wybielanie nakładkowe', desc: 'Domowe wybielanie z użyciem indywidualnie wykonanych nakładek i żelu wybielającego – wygodne i skuteczne.' },
        { title: 'Wybielanie na fotelu ZOOM', desc: 'Profesjonalne wybielanie w gabinecie z użyciem lampy aktywującej środek wybielający – efekty widoczne już po jednej wizycie.' },
        { title: 'Piaskowanie i skaling', desc: 'Usuwanie osadów, przebarwień i kamienia nazębnego za pomocą piasku i ultradźwięków – idealny start do dalszego leczenia estetycznego.' },
        { title: 'Fluoryzacja', desc: 'Wzmocnienie szkliwa zębów specjalnym lakierem fluorowym, który chroni przed próchnicą i nadwrażliwością.' },
        { title: 'Korony pełnoceramiczne', desc: 'Estetyczne korony wykonane w całości z ceramiki, doskonale imitujące naturalne zęby pod względem koloru i przezierności.' },
        { title: 'Mosty ceramiczne', desc: 'Stałe uzupełnienie braków zębowych wykonane z ceramiki, trwałe i nieodróżnialne od naturalnych zębów.' },
        { title: 'Licówki porcelanowe', desc: 'Cienkie naklejki ceramiczne naklejane na powierzchnię zębów – zmieniają kształt, kolor i proporcje uśmiechu.' },
        { title: 'Estetyczna odbudowa zębów kompozytem', desc: 'Bezpośrednia odbudowa zniszczonych lub przebarwionych zębów za pomocą materiału kompozytowego dopasowanego kolorystycznie.' },
      ]}
      relatedServices={[
        { label: 'Protetyka', href: '/uslugi/protetyka' },
        { label: 'Profilaktyka', href: '/uslugi/profilaktyka' },
        { label: 'Implantologia', href: '/uslugi/implantologia' },
      ]}
    />
  )
}
