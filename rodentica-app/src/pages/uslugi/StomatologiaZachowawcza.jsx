import { Heart } from 'lucide-react'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function StomatologiaZachowawcza() {
  return (
    <ServicePageTemplate
      title="Stomatologia Zachowawcza"
      subtitle="Leczenie i zapobieganie próchnicy. Wszystkie zabiegi wykonywane bezbolesnie dzięki znieczuleniu komputerowemu The WAND."
      Icon={Heart}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Stomatologia Zachowawcza' }]}
      intro={[
        'Najczęstszym problemem pacjentów jest próchnica – choroba twardych tkanek zęba takich jak szkliwo i zębina. Leczenie zachowawcze opiera się przede wszystkim na zapobieganiu i leczeniu tej choroby. Szczególnie ważne są regularne wizyty kontrolne, dzięki którym dentyści mogą zdiagnozować próchnicę w jej najwcześniejszym stadium i zatrzymać jej rozwój.',
        'Dzięki nowoczesnemu aparatowi do znieczulenia The WAND wszystkie zabiegi są całkowicie bezbolesne. Nieleczona próchnica stanowi poważny problem i prowadzi do stanów zapalnych miazgi, które wymagają leczenia kanałowego. Nasi specjaliści doradzą jak prawidłowo dbać o higienę, jakich preparatów używać i jak myć zęby, aby zapobiec powstawaniu próchnicy.',
      ]}
      benefits={[
        'Całkowicie bezbolesne zabiegi (The WAND)',
        'Wczesne wykrycie i leczenie próchnicy',
        'Estetyczne wypełnienia kompozytowe',
        'Leczenie nadwrażliwości zębów',
        'Profilaktyka dla dzieci i dorosłych',
        'Indywidualne porady dotyczące higieny',
      ]}
      procedures={[
        { title: 'Profilaktyka próchnicy – lakowanie bruzd', desc: 'Uszczelnienie powierzchni żujących zębów specjalnym lakierem, który zapobiega powstawaniu próchnicy.' },
        { title: 'Lakierowanie fluoryzacyjne', desc: 'Wzmocnienie szkliwa preparatami fluoru – szczególnie ważne dla dzieci i osób z nadwrażliwością.' },
        { title: 'Leczenie próchnicy', desc: 'Oczyszczenie zęba z próchnicy i wypełnienie nowoczesnym materiałem kompozytowym.' },
        { title: 'Wypełnienia kompozytowe', desc: 'Estetyczne, trwałe wypełnienia dopasowane kolorystycznie do naturalnego uzębienia.' },
        { title: 'Leczenie nadwrażliwości zębów', desc: 'Zamknięcie kanalików zębinowych preparatami odczulającymi lub lakierem fluorowym.' },
        { title: 'Rekonstrukcja zniszczonych zębów', desc: 'Odbudowa korony zęba silnie zniszczonego przez próchnicę lub uraz.' },
      ]}
      price="od 180 zł"
      priceDetails={[
        { label: 'Konsultacja', value: 'od 50 zł' },
        { label: 'Leczenie zachowawcze (wypełnienie)', value: 'od 180 zł' },
        { label: 'Lakowanie bruzd', value: 'od 100 zł' },
        { label: 'Znieczulenie The WAND', value: '35 zł' },
      ]}
      note="Nieleczona próchnica prowadzi do stanów zapalnych miazgi i konieczności leczenia kanałowego. Regularne wizyty kontrolne co 6 miesięcy pozwalają wykryć problem we wczesnym stadium."
      relatedServices={[
        { label: 'Profilaktyka i Higiena', href: '/uslugi/profilaktyka' },
        { label: 'Leczenie Kanałowe', href: '/uslugi/leczenie-kanalowe' },
        { label: 'Stomatologia Dziecięca', href: '/uslugi/stomatologia-dziecieca' },
      ]}
    />
  )
}
