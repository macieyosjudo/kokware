import { Link } from 'react-router-dom'

export default function Logo({ size = 'md' }) {
  const scales = {
    sm: { tooth: 32, textLg: 'text-lg', textSm: 'text-xs', sub: 'text-[9px]' },
    md: { tooth: 44, textLg: 'text-2xl', textSm: 'text-[11px]', sub: 'text-[10px]' },
    lg: { tooth: 56, textLg: 'text-3xl', textSm: 'text-sm', sub: 'text-xs' },
  }
  const s = scales[size] || scales.md

  return (
    <Link to="/" className="flex items-center gap-2.5 cursor-pointer select-none" aria-label="Rodentica - strona główna">
      {/* Tooth SVG matching original logo */}
      <svg width={s.tooth} height={s.tooth} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M22 4C16 4 10 8 10 14C10 18 11 21 13 24C15 27 15 31 14 36C13.5 38 15 40 16.5 38C18 36 19 32 20 30C20.8 28.4 21.5 28 22 28C22.5 28 23.2 28.4 24 30C25 32 26 36 27.5 38C29 40 30.5 38 30 36C29 31 29 27 31 24C33 21 34 18 34 14C34 8 28 4 22 4Z"
          fill="none"
          stroke="#2563EB"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 13C17.5 11 20 10 22 10C24 10 26 11 27 12"
          stroke="#2563EB"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <div className={`font-bold tracking-tight ${s.textLg}`}>
          <span style={{ color: '#8B1A1A' }}>Ro</span>
          <span style={{ color: '#1E40AF' }}>DENT</span>
          <span style={{ color: '#8B1A1A' }}>ica</span>
        </div>
        <div className={`${s.textSm} font-medium tracking-wide mt-0.5`} style={{ color: '#8B1A1A' }}>
          Stomatologia Estetyczna
        </div>
        <div className={`${s.sub} text-gray-500 mt-0.5 tracking-wide`}>
          Agnieszka Romanowska-Szymala
        </div>
      </div>
    </Link>
  )
}
