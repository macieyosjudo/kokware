import { Scissors } from 'lucide-react'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function Chirurgia() {
  return (
    <ServicePageTemplate
      title="Chirurgia Stomatologiczna"
      subtitle="Ekstrakcje, usuwanie ósemek i zabiegi plastyczne – bezboleśnie, w znieczuleniu komputerowym The WAND."
      Icon={Scissors}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Chirurgia Stomatologiczna' }]}
      intro={[
        'Chirurgia stomatologiczna obejmuje szereg zabiegów – od prostych ekstrakcji zębów po skomplikowane operacje usuwania zębów zatrzymanych, resekcje wierzchołków korzeni i zabiegi plastyczne tkanek miękkich. Wszystkie procedury wykonywane są przez doświadczonych specjalistów przy użyciu nowoczesnego sprzętu.',
        'Wszystkie zabiegi chirurgiczne wykonywane są bezbolesnie, w znieczuleniu miejscowym z użyciem komputerowego systemu The WAND. Po każdym zabiegu pacjent otrzymuje szczegółowe instrukcje dotyczące pielęgnacji rany i zalecenia pozabiegowe. Nasze wieloletnie doświadczenie gwarantuje bezpieczny przebieg zabiegu i szybką rekonwalescencję.',
      ]}
      benefits={[
        'Całkowicie bezbolesne zabiegi (The WAND)',
        'Doświadczony zespół chirurgiczny',
        'Szybka rekonwalescencja',
        'Sterowana regeneracja kości (GTR)',
        'Biomateriały kościozastępcze',
        'Szczegółowe instrukcje pozabiegowe',
      ]}
      procedures={[
        { title: 'Ekstrakcja prosta zębów', desc: 'Bezbolesne usuwanie zębów nierokujących poprawy zdrowia.' },
        { title: 'Chirurgiczne usuwanie zębów zatrzymanych', desc: 'Chirurgiczne wydobycie zębów, które nie wyrżnęły się prawidłowo.' },
        { title: 'Usuwanie zębów mądrości (ósemek)', desc: 'Często wymagające nacięcia dziąsła i usunięcia fragmentu kości.' },
        { title: 'Resekcja wierzchołka korzenia', desc: 'Odcięcie wierzchołka korzenia i usunięcie zmian zapalnych – torbiele i granulaki.' },
        { title: 'Hemisekcja zębów trzonowych', desc: 'Przecięcie zęba na pół i usunięcie chorego korzenia przy zachowaniu zdrowej części.' },
        { title: 'Podcinanie wędzidełka', desc: 'Korekta nieprawidłowego przyczepu wędzidełka wargi górnej i dolnej.' },
        { title: 'Augmentacja kości', desc: 'Odbudowa kości przed planowanym wszczepieniem implantów.' },
        { title: 'Zabiegi plastyczne błony śluzowej', desc: 'Usuwanie przerostów i korekty tkanek miękkich przed leczeniem protetycznym.' },
      ]}
      price="od 200 zł"
      priceDetails={[
        { label: 'Ekstrakcja prosta', value: 'od 200 zł' },
        { label: 'Usunięcie ósemki', value: 'od 400 zł' },
        { label: 'Resekcja wierzchołka korzenia', value: 'od 600 zł' },
        { label: 'Podcinanie wędzidełka', value: 'od 350 zł' },
        { label: 'Znieczulenie The WAND', value: '35 zł' },
      ]}
      note="Po zabiegu chirurgicznym mogą wystąpić obrzęk i lekki dyskomfort przez kilka dni. Postępuj zgodnie z instrukcjami lekarza – zimne okłady i przepisane leki przyspieszą gojenie."
      relatedServices={[
        { label: 'Implantologia', href: '/uslugi/implantologia' },
        { label: 'Stomatologia Zachowawcza', href: '/uslugi/stomatologia-zachowawcza' },
        { label: 'Leczenie Kanałowe', href: '/uslugi/leczenie-kanalowe' },
      ]}
    />
  )
}
