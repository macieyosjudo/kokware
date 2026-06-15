import ServicePageTemplate from '../../components/ServicePageTemplate'
import { AlignJustify } from 'lucide-react'

export default function Ortodoncja() {
  return (
    <ServicePageTemplate
      title="Ortodoncja"
      subtitle="Proste zęby i piękny uśmiech w każdym wieku"
      Icon={AlignJustify}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Ortodoncja' }]}
      intro={[
        'Ortodoncja zajmuje się korekcją nieprawidłowego ustawienia zębów i szczęk – krzywi i nieprawidłowo ustawione zęby są trudniejsze do czyszczenia, co sprzyja próchnicy i chorobom dziąseł, a wady zgryzu mogą powodować bóle głowy, szyi i stawów skroniowo-żuchwowych. Leczenie ortodontyczne jest skuteczne zarówno u dzieci, jak i u dorosłych, a jego efekty służą przez całe życie.',
        'Oferujemy pełen zakres leczenia ortodontycznego – od aparatów stałych metalowych i estetycznych, przez aparaty ruchome dla dzieci, aż po nowoczesne niewidoczne alignery Clear Liner. Indywidualnie dobieramy metodę leczenia do potrzeb, wieku i trybu życia każdego pacjenta, zapewniając komfort i dyskrecję przez cały czas terapii.',
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
        { title: 'Diagnostyka – modele gipsowe, RTG, zdjęcia', desc: 'Kompleksowa diagnostyka ortodontyczna obejmująca odlewy gipsowe łuków zębowych, zdjęcia cefalometryczne i pantomograficzne oraz dokumentację fotograficzną.' },
        { title: 'Ustalenie planu leczenia ortodontycznego', desc: 'Na podstawie zebranych danych ortodonta opracowuje indywidualny plan leczenia, uwzględniający cel terapeutyczny i przewidywany czas leczenia.' },
        { title: 'Aparaty stałe standardowe (metalowe)', desc: 'Klasyczne aparaty stałe z metalowymi zamkami – sprawdzone, skuteczne i trwałe rozwiązanie dla pacjentów w każdym wieku.' },
        { title: 'Aparaty stałe estetyczne (ceramiczne/szafirowe)', desc: 'Aparaty stałe z przezroczystymi lub szafirowo-białymi zamkami ceramicznymi – skuteczność metalowych przy dyskretnym wyglądzie.' },
        { title: 'Aparaty ruchome dla dzieci', desc: 'Zdejmowane aparaty ortodontyczne stosowane u dzieci w fazie uzębienia mieszanego – korygują wady zgryzu i kierują wzrostem szczęk.' },
        { title: 'Clear Liner – niewidoczne alignery', desc: 'Seria przezroczystych, zdejmowanych szyn stopniowo prostujących zęby – niewidoczne, wygodne i łatwe w utrzymaniu higieny.' },
        { title: 'Comiesięczne wizyty kontrolne', desc: 'Regularne wizyty u ortodonty pozwalają monitorować postęp leczenia i wprowadzać niezbędne korekty – zazwyczaj co 4–6 tygodni.' },
        { title: 'Zdjęcie aparatu i retencja', desc: 'Po zakończeniu aktywnej fazy leczenia aparat zostaje zdjęty, a pacjent otrzymuje retainer utrzymujący wyprostowane zęby w nowej pozycji.' },
      ]}
      price="od 900 zł"
      priceDetails={[
        { label: 'Clear Liner (niewidoczny aligner)', value: 'od 900 zł' },
        { label: 'Aparat stały standardowy', value: 'od 2500 zł' },
        { label: 'Aparat stały estetyczny', value: 'od 3500 zł' },
        { label: 'Konsultacja ortodontyczna', value: 'od 50 zł' },
      ]}
      note="Leczenie ortodontyczne trwa przeważnie 1,5–2,5 roku. Podczas leczenia bardzo ważna jest higiena jamy ustnej – myj zęby po każdym posiłku i używaj nici dentystycznej."
      relatedServices={[
        { label: 'Stomatologia Dziecięca', href: '/uslugi/stomatologia-dziecieca' },
        { label: 'Stomatologia Estetyczna', href: '/uslugi/stomatologia-estetyczna' },
      ]}
    />
  )
}
