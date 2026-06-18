import ServicePageTemplate from '../../components/ServicePageTemplate'
import { Droplets } from 'lucide-react'

export default function Periodontologia() {
  return (
    <ServicePageTemplate
      title="Periodontologia"
      subtitle="Zdrowe dziąsła – fundament pięknego uśmiechu"
      Icon={Droplets}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Periodontologia' }]}
      intro={[
        'Periodontologia to dziedzina stomatologii zajmująca się leczeniem chorób dziąseł i tkanek podporowych zębów – przyzębia. Wczesne wykrycie i leczenie chorób przyzębia ma kluczowe znaczenie, ponieważ nieleczone zapalenie dziąseł przechodzi w zapalenie przyzębia, które prowadzi do stopniowej utraty kości i ostatecznie – do wypadania zębów.',
        'Pierwsze objawy choroby przyzębia to krwawienie dziąseł podczas mycia zębów, obrzęk, zaczerwienienie lub cofanie się dziąseł. Jeśli zauważasz któryś z tych objawów, nie zwlekaj z wizytą – im wcześniej rozpoczniemy leczenie, tym większe szanse na zachowanie wszystkich zębów i zatrzymanie postępu choroby.',
      ]}
      benefits={[
        'Wczesna diagnoza i skuteczne leczenie',
        'Zatrzymanie postępu choroby',
        'Ratujemy zęby przed utratą',
        'Eliminacja nieprzyjemnego oddechu',
        'Profesjonalne oczyszczanie dziąseł',
        'Instrukcje higieny dostosowane indywidualnie',
      ]}
      procedures={[
        { title: 'Badanie kieszonek dziąsłowych (sondowanie)', desc: 'Pomiar głębokości kieszonek dziąsłowych za pomocą specjalnej sondy – podstawowy element diagnozy periodontologicznej.' },
        { title: 'Profesjonalne usuwanie kamienia naddziąsłowego', desc: 'Usunięcie złogów kamienia nazębnego z powierzchni zębów powyżej linii dziąseł przy użyciu skalera ultradźwiękowego.' },
        { title: 'Scaling i root planing (kamień poddziąsłowy)', desc: 'Głębokie oczyszczanie powierzchni korzeni zębów z kamienia i złogów bakteryjnych poniżej linii dziąseł.' },
        { title: 'Kiretaż zamknięty i otwarty', desc: 'Zabieg oczyszczania kieszonek dziąsłowych – zamknięty (bez nacinania) lub otwarty (chirurgiczny) w przypadkach zaawansowanych.' },
        { title: 'Płukanie kieszonek antyseptyczne', desc: 'Aplikacja środków antyseptycznych do kieszonek dziąsłowych celem eliminacji bakterii patogennych.' },
        { title: 'Chirurgia płatowa (zaawansowane przypadki)', desc: 'Chirurgiczne odsłonięcie kości i powierzchni korzeni w zaawansowanej chorobie przyzębia umożliwiające dokładne oczyszczenie.' },
        { title: 'Kontrole i utrzymanie higieny', desc: 'Regularne wizyty podtrzymujące efekty leczenia periodontologicznego co 3–4 miesiące.' },
      ]}
      note="Zapobieganie jest lepsze niż leczenie – nie zwlekaj z wizytą kontrolną, bo czas odgrywa decydującą rolę w przebiegu chorób przyzębia. Pierwsze objawy to krwawienie podczas mycia zębów."
      relatedServices={[
        { label: 'Profilaktyka', href: '/uslugi/profilaktyka' },
        { label: 'Stomatologia Zachowawcza', href: '/uslugi/stomatologia-zachowawcza' },
        { label: 'Chirurgia', href: '/uslugi/chirurgia' },
      ]}
    />
  )
}
