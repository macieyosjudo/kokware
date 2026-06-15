import ServicePageTemplate from '../../components/ServicePageTemplate'
import { ShieldCheck } from 'lucide-react'

export default function LeczeniKanalowe() {
  return (
    <ServicePageTemplate
      title="Leczenie Kanałowe"
      subtitle="Ratujemy zęby zamiast je usuwać"
      Icon={ShieldCheck}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Leczenie Kanałowe' }]}
      intro={[
        'Endodoncja, czyli leczenie kanałowe, to specjalistyczna dziedzina stomatologii, której celem jest ratowanie zębów zagrożonych usunięciem z powodu zaawansowanego stanu zapalnego miazgi lub tkanek okołowierzchołkowych. Dzięki leczeniu kanałowemu możemy uratować ząb, który dawniej musiałby być usunięty, zachowując naturalne uzębienie pacjenta na długie lata.',
        'W naszej klinice leczenie kanałowe przeprowadzamy pod kontrolą mikroskopu stomatologicznego, co umożliwia dokładne opracowanie nawet najtrudniejszych kanałów. Stosujemy rotacyjne narzędzia niklowo-tytanowe najwyższej klasy oraz dezynfekcję ultradźwiękową, a wszystko odbywa się w warunkach pełnej izolacji od śliny za pomocą koferdamy.',
      ]}
      benefits={[
        'Ratujemy zęby zamiast je usuwać',
        'Zabieg pod kontrolą mikroskopu',
        'Narzędzia rotacyjne najwyższej klasy',
        'Pełna izolacja od śliny (koferdama)',
        'Narzędzia ultradźwiękowe',
        'Skuteczne i długotrwałe rezultaty',
      ]}
      procedures={[
        { title: 'Diagnostyka RTG kanałów', desc: 'Szczegółowe zdjęcie rentgenowskie pozwalające ocenić długość, przebieg i liczbę kanałów korzeniowych przed rozpoczęciem leczenia.' },
        { title: 'Znieczulenie komputerowe The WAND', desc: 'Precyzyjne i bezbolesne znieczulenie miejscowe podawane przez komputerowy system The WAND – eliminuje nieprzyjemne uczucie pieczenia i bólu.' },
        { title: 'Opracowanie kanałów narzędziami rotacyjnymi', desc: 'Mechaniczne poszerzenie i ukształtowanie kanałów korzeniowych przy użyciu precyzyjnych narzędzi niklowo-tytanowych pod kontrolą mikroskopu.' },
        { title: 'Dezynfekcja narzędziami ultradźwiękowymi', desc: 'Dokładne oczyszczenie kanałów z bakterii i resztek tkanek przy użyciu aktywacji ultradźwiękowej płukania – gwarancja sterylności.' },
        { title: 'Wypełnienie kanałów materiałem biozgodnym', desc: 'Trwałe uszczelnienie oczyszczonych kanałów materiałem guttaperka i uszczelniaczem – zapobiega ponownemu zakażeniu.' },
        { title: 'Odbudowa korony zęba', desc: 'Po zakończeniu leczenia kanałowego ząb wymaga odbudowy – wykonujemy wkłady koronowe i korony ceramiczne chroniące osłabioną strukturę zęba.' },
        { title: 'Usuwanie złamanych narzędzi', desc: 'Specjalistyczne usuwanie fragmentów złamanych narzędzi endodontycznych z kanałów korzeniowych pod kontrolą mikroskopu.' },
        { title: 'Ponowne leczenie kanałowe', desc: 'Rewizja wcześniej nieprawidłowo leczonego zęba – skuteczna alternatywa dla ekstrakcji w przypadku nawrotu stanu zapalnego.' },
      ]}
      price="od 400 zł"
      priceDetails={[
        { label: 'Leczenie kanałowe 1-kanałowe', value: 'od 400 zł' },
        { label: 'Leczenie kanałowe 2-kanałowe', value: 'od 550 zł' },
        { label: 'Leczenie kanałowe 3-kanałowe', value: 'od 700 zł' },
        { label: 'Ponowne leczenie', value: 'od 600 zł' },
      ]}
      note="Nieleczona próchnica prowadzi do stanów zapalnych miazgi i konieczności leczenia kanałowego. Im wcześniej zgłosisz się do nas, tym łatwiejsze i tańsze będzie leczenie."
      relatedServices={[
        { label: 'Stomatologia Zachowawcza', href: '/uslugi/stomatologia-zachowawcza' },
        { label: 'Protetyka', href: '/uslugi/protetyka' },
      ]}
    />
  )
}
