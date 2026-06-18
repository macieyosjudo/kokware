import ServicePageTemplate from '../../components/ServicePageTemplate'
import { Hexagon } from 'lucide-react'

export default function Implantologia() {
  return (
    <ServicePageTemplate
      title="Implantologia"
      subtitle="Najtrwalsze rozwiązanie dla brakujących zębów"
      Icon={Hexagon}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Implantologia' }]}
      intro={[
        'Implanty zębowe to najbardziej zaawansowane i trwałe rozwiązanie problemu brakujących zębów. Tytanowe śruby wszczepiane w kość szczęki lub żuchwy zastępują korzenie naturalnych zębów, stanowiąc stabilną podstawę dla koron ceramicznych. Współpracujemy z renomowaną firmą Biomet 3i, której implanty spełniają najwyższe standardy jakości i bezpieczeństwa.',
        'Implant zębowy działa dokładnie jak naturalny korzeń – integruje się z kością (osteointegracja), zapobiegając jej zanikowi i zachowując optymalną strukturę twarzy. Prawidłowo wykonany i pielęgnowany implant służy przez całe życie, nie wymagając szlifowania sąsiednich zębów, co odróżnia go od tradycyjnych mostów protetycznych.',
      ]}
      benefits={[
        'Trwałe rozwiązanie na całe życie',
        'Nie ma potrzeby szlifowania sąsiednich zębów',
        'Naturalny wygląd i komfort',
        'Poprawa jakości jedzenia i mowy',
        'Zapobiega zanikowi kości',
        'Dostępne dla pacjentów wcześniej niekwalifikujących się',
      ]}
      procedures={[
        { title: 'Konsultacja i diagnostyka RTG', desc: 'Ocena stanu kości, planowanie leczenia z użyciem zdjęć pantomograficznych lub tomografii komputerowej.' },
        { title: 'Wszczepienie implantu tytanowego', desc: 'Chirurgiczne wprowadzenie tytanowego trzpienia do kości szczęki lub żuchwy w znieczuleniu miejscowym.' },
        { title: 'Okres integracji (osteointegracja)', desc: 'Czas, w którym implant zrasta się z kością – trwa zazwyczaj od 3 do 6 miesięcy w zależności od indywidualnych warunków.' },
        { title: 'Osadzenie korony ceramicznej', desc: 'Po integracji na implancie mocowana jest estetyczna korona ceramiczna, nieodróżnialna od naturalnego zęba.' },
        { title: 'Kontrole i opieka pozabiegowa', desc: 'Regularne wizyty kontrolne zapewniają długotrwałą funkcję implantu i zdrowie otaczających tkanek.' },
      ]}
      note="Utrata nawet jednego zęba wpływa na cały zgryz. Nie czekaj zbyt długo z uzupełnieniem braku – zęby sąsiednie mogą się przemieszczać."
      relatedServices={[
        { label: 'Protetyka', href: '/uslugi/protetyka' },
        { label: 'Stomatologia Estetyczna', href: '/uslugi/stomatologia-estetyczna' },
        { label: 'Chirurgia', href: '/uslugi/chirurgia' },
      ]}
    />
  )
}
