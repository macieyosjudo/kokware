import ServicePageTemplate from '../../components/ServicePageTemplate'
import { ShieldCheck } from 'lucide-react'

export default function LeczeniKanalowe() {
  return (
    <ServicePageTemplate
      title="Leczenie Kanałowe"
      subtitle="Ratujemy Twoje zęby z precyzją i bez bólu"
      Icon={ShieldCheck}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Leczenie Kanałowe' }]}
      intro={[
        'Endodoncja, czyli leczenie kanałowe, to dziedzina stomatologii skupiająca się na ratowaniu zębów zamiast ich usuwania. Dzięki pracy pod kontrolą mikroskopu stomatologicznego lekarz ma pełny wgląd w układ kanałów korzeniowych, co pozwala na precyzyjne mechaniczne i chemiczne opracowanie oraz wypełnienie kanałów materiałami biozgodnymi.',
        'W naszym gabinecie stosujemy najnowocześniejsze narzędzia rotacyjne i ultradźwiękowe, a każdy zabieg wykonujemy w pełnej izolacji od śliny (koferdama). Znieczulenie komputerowe The WAND sprawia, że nawet najbardziej rozległe leczenie kanałowe jest całkowicie bezbolesne i komfortowe dla pacjenta.',
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
        { title: 'Diagnostyka RTG kanałów', desc: 'Ocena liczby, kształtu i długości kanałów korzeniowych na podstawie zdjęcia rentgenowskiego.' },
        { title: 'Znieczulenie komputerowe The WAND', desc: 'Bezbolesne podanie znieczulenia miejscowego przy użyciu komputerowo kontrolowanego systemu The WAND.' },
        { title: 'Opracowanie kanałów rotacyjnymi narzędziami', desc: 'Mechaniczne poszerzanie i kształtowanie kanałów korzeniowych przy użyciu specjalistycznych narzędzi rotacyjnych.' },
        { title: 'Dezynfekcja narzędziami ultradźwiękowymi', desc: 'Dokładne oczyszczenie i dezynfekcja kanałów przy użyciu ultradźwięków i płynów płuczących.' },
        { title: 'Wypełnienie kanałów materiałem biozgodnym', desc: 'Szczelne wypełnienie oczyszczonych kanałów gutaperką i uszczelniaczem kanałowym.' },
        { title: 'Odbudowa korony zęba', desc: 'Po leczeniu kanałowym ząb wymaga odbudowy – wykonujemy ją kompozytem lub proponujemy koronę protetyczną.' },
        { title: 'Usuwanie złamanych narzędzi', desc: 'Specjalistyczne zabiegi usuwania fragmentów narzędzi endodontycznych pozostałych w kanałach po wcześniejszym leczeniu.' },
        { title: 'Ponowne leczenie kanałowe', desc: 'Rewizja kanałów po nieskutecznym wcześniejszym leczeniu – dokładna reinstrumentacja i ponowne wypełnienie.' },
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
