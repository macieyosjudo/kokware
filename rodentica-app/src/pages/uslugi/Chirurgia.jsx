import ServicePageTemplate from '../../components/ServicePageTemplate'
import { Scissors } from 'lucide-react'

export default function Chirurgia() {
  return (
    <ServicePageTemplate
      title="Chirurgia Stomatologiczna"
      subtitle="Bezpieczne zabiegi chirurgiczne bez bólu"
      Icon={Scissors}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Chirurgia' }]}
      intro={[
        'Chirurgia stomatologiczna obejmuje szerokie spektrum zabiegów – od ekstrakcji prostych i chirurgicznego usuwania zębów zatrzymanych, przez resekcję wierzchołka korzenia i hemisekcję zębów trzonowych, po zabiegi plastyczne tkanek miękkich jamy ustnej. Dysponujemy nowoczesnym sprzętem i materiałami biozgodnymi do augmentacji kości, co otwiera drogę do leczenia implantologicznego nawet u pacjentów z niewystarczającą ilością kości.',
        'Wszystkie zabiegi chirurgiczne wykonujemy przy użyciu komputerowego systemu znieczulenia The WAND, który eliminuje ból zarówno podczas podawania znieczulenia, jak i w trakcie samego zabiegu. Nasz doświadczony zespół chirurgiczny zapewnia szybką rekonwalescencję i minimalne ryzyko powikłań pozabiegowych.',
      ]}
      benefits={[
        'Całkowicie bezbolesne zabiegi',
        'Znieczulenie komputerowe The WAND',
        'Szybka rekonwalescencja',
        'Sterowana regeneracja kości',
        'Biomateriały kościozastępcze',
        'Doświadczony zespół chirurgiczny',
      ]}
      procedures={[
        { title: 'Ekstrakcja zębów (usuwanie)', desc: 'Usunięcie zęba w znieczuleniu miejscowym – proste ekstrakcje wykonujemy szybko i komfortowo dla pacjenta.' },
        { title: 'Chirurgiczne usuwanie zębów zatrzymanych', desc: 'Operacyjne usunięcie zębów, które nie wyrżnęły się prawidłowo i tkwią w kości lub dziąśle.' },
        { title: 'Usuwanie zębów mądrości (ósemek)', desc: 'Ekstrakcja ósemek – zarówno wyrżniętych, jak i zatrzymanych – w znieczuleniu miejscowym lub sedacji.' },
        { title: 'Resekcja wierzchołka korzenia', desc: 'Zabieg polegający na chirurgicznym usunięciu zmienionej zapalnie tkanki przy wierzchołku korzenia zęba.' },
        { title: 'Hemisekcja zębów trzonowych', desc: 'Podział zęba trzonowego na dwie części w celu usunięcia jednego korzenia przy zachowaniu reszty zęba.' },
        { title: 'Podcinanie wędzidełka wargi górnej i dolnej', desc: 'Plastyka wędzidełka wargi lub języka – zabieg wskazany przy trudnościach z mówieniem lub higieną.' },
        { title: 'Zabiegi plastyczne błony śluzowej', desc: 'Chirurgiczne modelowanie dziąseł i błony śluzowej jamy ustnej w celach estetycznych lub funkcjonalnych.' },
        { title: 'Augmentacja kości (przed implantami)', desc: 'Uzupełnienie niedoborów kości za pomocą biomateriałów kościozastępczych w celu przygotowania miejsca pod implant.' },
        { title: 'Sterowana regeneracja kości (GTR)', desc: 'Zaawansowana technika odbudowy kości z użyciem membran prowadzących regenerację – stosowana w implantologii i periodontologii.' },
      ]}
      price="od 200 zł"
      priceDetails={[
        { label: 'Ekstrakcja prosta', value: 'od 200 zł' },
        { label: 'Usunięcie ósemki', value: 'od 400 zł' },
        { label: 'Resekcja wierzchołka', value: 'od 600 zł' },
        { label: 'Podcinanie wędzidełka', value: 'od 350 zł' },
      ]}
      note="Wszystkie zabiegi chirurgiczne wykonywane są w znieczuleniu miejscowym z użyciem The WAND. Po zabiegu otrzymasz szczegółowe instrukcje pielęgnacji rany."
      relatedServices={[
        { label: 'Implantologia', href: '/uslugi/implantologia' },
        { label: 'Stomatologia Zachowawcza', href: '/uslugi/stomatologia-zachowawcza' },
      ]}
    />
  )
}
