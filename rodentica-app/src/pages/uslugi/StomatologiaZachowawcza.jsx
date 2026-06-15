import ServicePageTemplate from '../../components/ServicePageTemplate'
import { Heart } from 'lucide-react'

export default function StomatologiaZachowawcza() {
  return (
    <ServicePageTemplate
      title="Stomatologia Zachowawcza"
      subtitle="Zdrowe zęby bez bólu i stresu"
      Icon={Heart}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Stomatologia Zachowawcza' }]}
      intro={[
        'Stomatologia zachowawcza koncentruje się na zapobieganiu i leczeniu próchnicy – najczęstszego problemu stomatologicznego, który dotyka zarówno dzieci, jak i dorosłych. Regularne wizyty kontrolne co 6 miesięcy pozwalają wykryć zmiany próchnicowe na wczesnym etapie, gdy leczenie jest proste, szybkie i tanie.',
        'W naszym gabinecie każdy zabieg – nawet pozornie błahe wypełnienie – wykonujemy z najwyższą starannością i w pełnym znieczuleniu komputerowym The WAND. Dzięki temu wyeliminowaliśmy ból i stres z gabinetu stomatologicznego, a pacjenci wychodzą od nas z pięknym, estetycznym uśmiechem i spokojem ducha.',
      ]}
      benefits={[
        'Całkowicie bezbolesne zabiegi (The WAND)',
        'Wczesne wykrycie próchnicy',
        'Piękne estetyczne wypełnienia',
        'Leczenie nadwrażliwości',
        'Profilaktyka dla dzieci i dorosłych',
        'Indywidualne porady higieniczne',
      ]}
      procedures={[
        { title: 'Profilaktyka próchnicy – lakowanie bruzd', desc: 'Uszczelnienie szczelin i bruzd na powierzchniach żujących zębów bocznych specjalnym lakierem, zapobiegające gromadzeniu się płytki bakteryjnej.' },
        { title: 'Lakierowanie fluoryzacyjne', desc: 'Aplikacja fluorowego lakieru na powierzchnie zębów wzmacniająca szkliwo i zmniejszająca ryzyko próchnicy.' },
        { title: 'Leczenie próchnicy (usuwanie zmian)', desc: 'Usunięcie zmienionej próchnicowo tkanki zęba z użyciem wiertła lub lasera i przygotowanie ubytku do wypełnienia.' },
        { title: 'Wypełnienia kompozytowe (estetyczne)', desc: 'Wypełnienia z materiału kompozytowego dopasowanego kolorystycznie do naturalnego zęba – trwałe i niewidoczne.' },
        { title: 'Leczenie nadwrażliwości zębów', desc: 'Aplikacja preparatów zmniejszających nadwrażliwość szyjek zębowych i dyskomfort przy spożywaniu zimnych lub gorących pokarmów.' },
        { title: 'Rekonstrukcja zniszczonych zębów', desc: 'Odbudowa zębów z rozległymi ubytkami przy użyciu materiałów kompozytowych lub wkładów koronowych.' },
        { title: 'Porady higieniczne – prawidłowe mycie zębów', desc: 'Instruktaż prawidłowej techniki szczotkowania, nitkowania i użycia płynów do płukania ust.' },
      ]}
      price="od 180 zł"
      priceDetails={[
        { label: 'Leczenie zachowawcze', value: 'od 180 zł' },
        { label: 'Profilaktyka (lakowanie)', value: 'od 100 zł' },
        { label: 'Konsultacja', value: 'od 50 zł' },
      ]}
      relatedServices={[
        { label: 'Profilaktyka', href: '/uslugi/profilaktyka' },
        { label: 'Leczenie Kanałowe', href: '/uslugi/leczenie-kanalowe' },
        { label: 'Stomatologia Dziecięca', href: '/uslugi/stomatologia-dziecieca' },
      ]}
    />
  )
}
