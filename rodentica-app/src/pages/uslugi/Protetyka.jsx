import ServicePageTemplate from '../../components/ServicePageTemplate'
import { AlignJustify } from 'lucide-react'

export default function Protetyka() {
  return (
    <ServicePageTemplate
      title="Protetyka"
      subtitle="Odbudowa piękna i funkcji Twojego uśmiechu"
      Icon={AlignJustify}
      breadcrumb={[{ label: 'Usługi', href: '/uslugi' }, { label: 'Protetyka' }]}
      intro={[
        'Protetyka stomatologiczna zajmuje się odbudową utraconych tkanek zębów oraz uzupełnianiem braków zębowych. Brak zębów to nie tylko problem estetyczny – powoduje trudności w żuciu, zaburzenia wymowy, a przede wszystkim stopniowe przemieszczanie się zębów sąsiednich i zanik kości wyrostka zębodołowego.',
        'W naszym gabinecie oferujemy szeroki wachlarz rozwiązań protetycznych – od koron i mostów ceramicznych, przez licówki, po protezy ruchome różnego rodzaju. Każde uzupełnienie wykonywane jest we współpracy z renomowanymi pracowniami protetycznymi, co gwarantuje najwyższą jakość i precyzję dopasowania.',
      ]}
      benefits={[
        'Pełna odbudowa funkcji żucia',
        'Naturalny estetyczny wygląd',
        'Zapobieganie przemieszczaniu zębów',
        'Poprawa wymowy',
        'Szeroki wybór rozwiązań',
        'Współpraca z renomowanymi pracowniami protetycznymi',
      ]}
      procedures={[
        { title: 'Korony metaloceramiczne', desc: 'Tradycyjne korony na metalowym podkładzie pokryte ceramiką – trwałe i estetyczne rozwiązanie dla zębów bocznych.' },
        { title: 'Korony pełnoceramiczne (cyrkonowe)', desc: 'Korony wykonane w całości z cyrkonu lub ceramiki bez metalowego rdzenia – najwyższa estetyka i biokompatybilność.' },
        { title: 'Mosty ceramiczne', desc: 'Stałe uzupełnienie brakujących zębów oparte na sąsiednich filarach, wykonane z ceramiki.' },
        { title: 'Licówki porcelanowe', desc: 'Cienkie płytki ceramiczne przyklejane do powierzchni zębów przednich, zmieniające kolor, kształt i rozmiar.' },
        { title: 'Licówki kompozytowe', desc: 'Bezpośrednia metoda poprawy estetyki zębów przy użyciu materiału kompozytowego – tańsza alternatywa dla licówek porcelanowych.' },
        { title: 'Protezy akrylowe częściowe i całkowite', desc: 'Ruchome uzupełnienia braków zębowych wykonane z tworzywa akrylowego, dostosowane do warunków pacjenta.' },
        { title: 'Protezy szkieletowe', desc: 'Ruchome protezy częściowe z metalowym szkieletem – stabilniejsze i cieńsze od tradycyjnych akrylowych.' },
        { title: 'Protezy acetalowe (bezklamrowe)', desc: 'Estetyczne protezy bez widocznych metalowych klamer, wykonane z elastycznego tworzywa acetalowego.' },
        { title: 'Protezy teleskopowe', desc: 'Protezy na koronach teleskopowych – bardzo stabilne i komfortowe rozwiązanie dla pacjentów z nielicznymi zębami.' },
        { title: 'Wkłady koronowe Inlay/Onlay/Overlay', desc: 'Laboratoryjne uzupełnienia ubytków zębów wykonane z ceramiki lub kompozytu – trwalsze od wypełnień bezpośrednich.' },
        { title: 'Ekspresowa naprawa protezy', desc: 'Szybka naprawa uszkodzonej protezy – często możliwa jeszcze tego samego dnia.' },
      ]}
      relatedServices={[
        { label: 'Implantologia', href: '/uslugi/implantologia' },
        { label: 'Stomatologia Estetyczna', href: '/uslugi/stomatologia-estetyczna' },
      ]}
    />
  )
}
