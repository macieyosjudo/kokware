import ServicePageTemplate from '../../components/ServicePageTemplate'
import { AlignJustify } from 'lucide-react'

export default function Ortodoncja() {
  return (
    <ServicePageTemplate
      title="Ortodoncja"
      subtitle="Proste zęby i zdrowy zgryz dla dzieci i dorosłych"
      Icon={AlignJustify}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Ortodoncja' }]}
      intro={[
        'Ortodoncja zajmuje się korygowaniem nieprawidłowego ustawienia zębów i szczęk, które nie tylko wpływa na estetykę uśmiechu, ale przede wszystkim na zdrowie jamy ustnej. Krzywe lub stłoczone zęby są trudniejsze do czyszczenia, co prowadzi do chorób przyzębia, a wady zgryzu mogą powodować bóle głowy, szyi i problemy ze stawem skroniowo-żuchwowym.',
        'Leczenie ortodontyczne prowadzimy zarówno u dzieci (od ok. 6–7 roku życia), jak i u dorosłych w każdym wieku. Oprócz tradycyjnych aparatów stałych oferujemy nowoczesny system Clear Liner – niewidoczne alignery, które pozwalają na dyskretne i komfortowe prostowanie zębów bez rezygnacji z codziennych aktywności.',
      ]}
      benefits={[
        'Proste, zdrowe i łatwe w czyszczeniu zęby',
        'Zapobieganie chorobom przyzębia',
        'Poprawa funkcji żucia',
        'Lepsza estetyka i rysy twarzy',
        'Niewidoczne alignery Clear Liner',
        'Pewność siebie i komfort',
      ]}
      procedures={[
        { title: 'Diagnostyka – modele gipsowe, RTG, zdjęcia', desc: 'Kompleksowa ocena zgryzu na podstawie modeli zębów, zdjęć rentgenowskich cefalometrycznych i fotografii.' },
        { title: 'Ustalenie planu leczenia ortodontycznego', desc: 'Opracowanie indywidualnego planu leczenia z określeniem czasu trwania i przewidywanych efektów.' },
        { title: 'Aparaty stałe standardowe (metalowe)', desc: 'Klasyczne aparaty z metalowymi zamkami i drutami – skuteczne i sprawdzone rozwiązanie dla dzieci i młodzieży.' },
        { title: 'Aparaty stałe estetyczne (ceramiczne/szafirowe)', desc: 'Aparaty stałe z przezroczystymi lub porcelanowymi zamkami – mniej widoczne niż metalowe.' },
        { title: 'Aparaty ruchome dla dzieci', desc: 'Zdejmowane aparaty ortodontyczne stosowane we wczesnej fazie leczenia u dzieci w wieku 6–12 lat.' },
        { title: 'Clear Liner – niewidoczne alignery', desc: 'Seria przezroczystych nakładek prostujących zęby – zdejmowane, wygodne i całkowicie niewidoczne.' },
        { title: 'Comiesięczne wizyty kontrolne', desc: 'Regularne wizyty kontrolne umożliwiają monitorowanie postępu leczenia i korektę aparatu.' },
        { title: 'Zdjęcie aparatu i retencja', desc: 'Po zakończeniu aktywnego leczenia zakładamy retainer utrwalający efekty – stały lub zdejmowany.' },
      ]}
      note="Leczenie ortodontyczne trwa przeważnie 1,5–2,5 roku. Podczas leczenia bardzo ważna jest higiena jamy ustnej – myj zęby po każdym posiłku i używaj nici dentystycznej."
      relatedServices={[
        { label: 'Stomatologia Dziecięca', href: '/uslugi/stomatologia-dziecieca' },
        { label: 'Stomatologia Estetyczna', href: '/uslugi/stomatologia-estetyczna' },
      ]}
    />
  )
}
