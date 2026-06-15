import { Baby } from 'lucide-react'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function StomatologiaDziecieca() {
  return (
    <ServicePageTemplate
      title="Stomatologia Dziecięca"
      subtitle="Przyjazna atmosfera bezpieczeństwa dla najmłodszych pacjentów. Uczymy dbać o zęby od samego początku."
      Icon={Baby}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Stomatologia Dziecięca' }]}
      intro={[
        'Stomatologia dziecięca (pedodoncja) to nie tylko diagnozowanie i leczenie, ale przede wszystkim zapobieganie problemom stomatologicznym na każdym etapie wieku rozwojowego. Szczególna dbałość o uzębienie mleczne odzwierciedla się w prawidłowym wyżynaniu i stanie uzębienia stałego. Każde dziecko powinno być pod stałą opieką dentystyczną.',
        'Pierwsze wizyty powinny mieć miejsce już po wyrżnięciu się pierwszych zębów mlecznych – pozwala to ocenić prawidłowość rozwoju twarzy i jamy ustnej. Regularne i wczesne wizyty u stomatologa zapobiegają przykrym doświadczeniom i pozwalają dzieciom polubić wizyty u dentysty. Dla najmłodszych pacjentów zawsze czekają miłe niespodzianki i kolorowe wypełnienia!',
      ]}
      benefits={[
        'Przyjazna atmosfera bezpieczeństwa',
        'Kolorowe wypełnienia do wyboru',
        'Nagrody i niespodzianki po wizycie',
        'Bezbolesne leczenie (The WAND)',
        'Prawidłowe nawyki higieniczne od małego',
        'Profilaktyka i lakowanie zębów mlecznych',
      ]}
      procedures={[
        { title: 'Pierwsza wizyta adaptacyjna', desc: 'Oswajanie dziecka z gabinetem, sprzętem i dentystą – bez żadnych zabiegów.' },
        { title: 'Badanie kontrolne uzębienia mlecznego', desc: 'Regularne wizyty kontrolne pozwalające monitorować rozwój uzębienia.' },
        { title: 'Lakowanie bruzd', desc: 'Uszczelnienie powierzchni żujących zębów mlecznych i stałych – skuteczna profilaktyka próchnicy.' },
        { title: 'Fluoryzacja', desc: 'Wzmocnienie szkliwa zębów dziecka preparatami fluoru.' },
        { title: 'Leczenie próchnicy mleczaków', desc: 'Bezbolesne leczenie próchnicy zębów mlecznych z użyciem The WAND.' },
        { title: 'Kolorowe wypełnienia kompozytowe', desc: 'Wypełnienia w różnych kolorach – dzieci mogą wybrać swój ulubiony!' },
        { title: 'Wczesna diagnostyka ortodontyczna', desc: 'Ocena prawidłowości zgryzu i wczesne wykrycie wad wymagających leczenia.' },
      ]}
      price="od 120 zł"
      priceDetails={[
        { label: 'Pierwsza wizyta / konsultacja', value: 'od 50 zł' },
        { label: 'Leczenie zachowawcze dziecka', value: 'od 120 zł' },
        { label: 'Lakowanie zębów', value: 'od 100 zł' },
        { label: 'Fluoryzacja', value: 'od 80 zł' },
      ]}
      note="Przedwczesna utrata zębów mlecznych może zaburzyć wzrost szczęki i spowodować brak miejsca dla zębów stałych. Pierwsze wizyty zalecamy już po wyrżnięciu pierwszego mleczaka!"
      relatedServices={[
        { label: 'Ortodoncja', href: '/uslugi/ortodoncja' },
        { label: 'Profilaktyka i Higiena', href: '/uslugi/profilaktyka' },
        { label: 'Stomatologia Zachowawcza', href: '/uslugi/stomatologia-zachowawcza' },
      ]}
    />
  )
}
