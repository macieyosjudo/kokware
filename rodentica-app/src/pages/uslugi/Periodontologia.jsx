import { Droplets } from 'lucide-react'
import ServicePageTemplate from '../../components/ServicePageTemplate'

export default function Periodontologia() {
  return (
    <ServicePageTemplate
      title="Periodontologia"
      subtitle="Leczenie chorób dziąseł i przyzębia. Im wcześniej zgłosisz się do nas, tym lepsze rokowanie."
      Icon={Droplets}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Periodontologia' }]}
      intro={[
        'Periodontologia zajmuje się leczeniem chorób tkanek utrzymujących ząb w zębodole. Schorzenia mogą dotyczyć dziąseł, kości i ozębnej. Bardzo istotnym czynnikiem jest wczesne rozpoznanie problemu – choroby przyzębia mają szybki przebieg i nieleczone prowadzą do rozchwiania zębów i do ich utraty.',
        'Pierwsze objawy to najczęściej krwawienie podczas mycia zębów. Czasem wystarczy poprawa higieny, usunięcie kamienia i korekta wypełnień. Niejednokrotnie jednak przyczyny są bardziej złożone. Częstymi objawami są też rozchwianie zębów, nieprzyjemny zapach z ust i nadwrażliwość odsłoniętych szyjek zębowych. Nie zwlekaj z wizytą!',
      ]}
      benefits={[
        'Wczesna diagnoza i skuteczne leczenie',
        'Zatrzymanie postępu choroby',
        'Ratujemy zęby przed utratą',
        'Eliminacja nieprzyjemnego oddechu',
        'Profesjonalne oczyszczanie kieszonek',
        'Indywidualne instrukcje higieny',
      ]}
      procedures={[
        { title: 'Badanie kieszonek dziąsłowych', desc: 'Sondowanie periodontologiczne – ocena głębokości kieszonek wokół każdego zęba.' },
        { title: 'Skaling naddziąsłowy', desc: 'Profesjonalne usuwanie kamienia nazębnego i osadów z powierzchni zębów powyżej linii dziąseł.' },
        { title: 'Scaling i root planing', desc: 'Usuwanie kamienia poddziąsłowego i wygładzanie powierzchni korzeni.' },
        { title: 'Kiretaż zamknięty', desc: 'Mechaniczne oczyszczenie kieszonek dziąsłowych bez nacięcia – leczenie średnio zaawansowanych przypadków.' },
        { title: 'Kiretaż otwarty (płatowy)', desc: 'Chirurgiczne oczyszczenie kieszonek w zaawansowanych przypadkach choroby przyzębia.' },
        { title: 'Płukanie kieszonek antyseptyczne', desc: 'Irygacja kieszonek środkami antybakteryjnymi wspomagająca gojenie.' },
        { title: 'Wizyty kontrolne i utrzymanie', desc: 'Regularne kontrole i profesjonalna higienizacja po zakończeniu leczenia.' },
      ]}
      price="od 100 zł"
      priceDetails={[
        { label: 'Badanie periodontologiczne', value: 'od 50 zł' },
        { label: 'Skaling', value: 'od 200 zł' },
        { label: 'Kiretaż (za ząb)', value: 'od 100 zł' },
        { label: 'Higienizacja podtrzymująca', value: 'od 200 zł' },
      ]}
      note="Zapobieganie jest lepsze niż leczenie! Pierwsze objawy chorób przyzębia to krwawienie dziąseł podczas szczotkowania. Jeśli to zauważysz – umów się na wizytę jak najszybciej."
      relatedServices={[
        { label: 'Profilaktyka i Higiena', href: '/uslugi/profilaktyka' },
        { label: 'Stomatologia Zachowawcza', href: '/uslugi/stomatologia-zachowawcza' },
        { label: 'Chirurgia Stomatologiczna', href: '/uslugi/chirurgia' },
      ]}
    />
  )
}
