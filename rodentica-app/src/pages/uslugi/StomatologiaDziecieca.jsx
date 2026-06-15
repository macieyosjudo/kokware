import ServicePageTemplate from '../../components/ServicePageTemplate'
import { Baby } from 'lucide-react'

export default function StomatologiaDziecieca() {
  return (
    <ServicePageTemplate
      title="Stomatologia Dziecięca"
      subtitle="Przyjazny gabinet dla najmłodszych pacjentów"
      Icon={Baby}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Stomatologia Dziecięca' }]}
      intro={[
        'Stomatologia dziecięca w naszym gabinecie obejmuje opiekę stomatologiczną na wszystkich etapach rozwoju dziecka – od pierwszych zębów mlecznych aż po uzębienie stałe. Pierwsze wizyty organizujemy jako spotkania adaptacyjne, podczas których maluch oswaja się z gabinetem, sprzętem i lekarzem w bezstresowej, kolorowej atmosferze.',
        'Dbamy o to, żeby każda wizyta była dla dziecka pozytywnym doświadczeniem – kolorowe wypełnienia, niespodzianki po zabiegu i cierpliwy personel sprawiają, że maluchy nie boją się dentysty. Jednocześnie od samego początku uczymy prawidłowych nawyków higienicznych, które zaprocentują zdrowym uśmiechem przez całe życie.',
      ]}
      benefits={[
        'Przyjazna atmosfera bezpieczeństwa',
        'Kolorowe wypełnienia',
        'Nagrody i niespodzianki po wizycie',
        'Bezboleśne leczenie (The WAND)',
        'Prawidłowe nawyki higieniczne od małego',
        'Profilaktyka i lakowanie zębów mlecznych',
      ]}
      procedures={[
        { title: 'Pierwsza wizyta adaptacyjna (oswajanie z gabinetem)', desc: 'Bezstresowe zapoznanie dziecka z gabinetem stomatologicznym, sprzętem i personelem – bez żadnych zabiegów.' },
        { title: 'Badanie kontrolne uzębienia mlecznego', desc: 'Ocena stanu zębów mlecznych, zgryzu i higieny jamy ustnej dziecka wraz z poradami dla rodziców.' },
        { title: 'Lakowanie bruzd (zapobieganie próchnicy)', desc: 'Uszczelnienie bruzd na zębach mlecznych i stałych trzonowych specjalnym lakierem zapobiegającym próchnicy.' },
        { title: 'Fluoryzacja', desc: 'Aplikacja fluorowego lakieru lub żelu wzmacniającego szkliwo zębów dziecka i chroniącego przed próchnicą.' },
        { title: 'Leczenie próchnicy mleczaków', desc: 'Bezbolesne usuwanie próchnicy z zębów mlecznych i wypełnianie ubytków materiałami bezpiecznymi dla dzieci.' },
        { title: 'Kolorowe wypełnienia kompozytowe', desc: 'Wypełnienia w ulubionym kolorze dziecka – zabieg staje się przygodą, a nie źródłem stresu.' },
        { title: 'Wczesna diagnostyka ortodontyczna', desc: 'Ocena rozwoju zgryzu i wykrycie ewentualnych nieprawidłowości wymagających wczesnej interwencji ortodontycznej.' },
        { title: 'Porady dla rodziców o higienie dziecka', desc: 'Instruktaż dotyczący mycia zębów u niemowląt, dzieci i nastolatków oraz doboru odpowiedniej szczoteczki i pasty.' },
      ]}
      price="od 120 zł"
      priceDetails={[
        { label: 'Wizyta kontrolna dziecka', value: 'od 50 zł' },
        { label: 'Leczenie zachowawcze dziecka', value: 'od 120 zł' },
        { label: 'Lakowanie zębów', value: 'od 100 zł' },
        { label: 'Fluoryzacja', value: 'od 80 zł' },
      ]}
      note="Pierwsze wizyty powinny mieć miejsce już po wyrżnięciu się pierwszych zębów mlecznych. Przedwczesna utrata mleczaków może zaburzyć wzrost szczęki i spowodować brak miejsca dla zębów stałych."
      relatedServices={[
        { label: 'Ortodoncja', href: '/uslugi/ortodoncja' },
        { label: 'Profilaktyka', href: '/uslugi/profilaktyka' },
        { label: 'Stomatologia Zachowawcza', href: '/uslugi/stomatologia-zachowawcza' },
      ]}
    />
  )
}
