import { useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function DentistSVG() {
  const svgRef = useRef(null)
  const leftPupilRef = useRef(null)
  const rightPupilRef = useRef(null)
  const rafRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  const updateEyes = useCallback(() => {
    if (!svgRef.current || !leftPupilRef.current || !rightPupilRef.current) return
    const rect = svgRef.current.getBoundingClientRect()
    const svgCx = rect.left + rect.width / 2
    const svgCy = rect.top + rect.height * 0.28

    const dx = mouseRef.current.x - svgCx
    const dy = mouseRef.current.y - svgCy
    const angle = Math.atan2(dy, dx)
    const d = 3.5

    const lx = 132 + Math.cos(angle) * d
    const ly = 108 + Math.sin(angle) * d
    const rx = 168 + Math.cos(angle) * d
    const ry = 108 + Math.sin(angle) * d

    leftPupilRef.current.setAttribute('cx', lx)
    leftPupilRef.current.setAttribute('cy', ly)
    rightPupilRef.current.setAttribute('cx', rx)
    rightPupilRef.current.setAttribute('cy', ry)
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateEyes)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [updateEyes])

  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Glow ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-brand-500/10 blur-3xl" />
      </div>

      <svg
        ref={svgRef}
        viewBox="0 0 300 520"
        width="300"
        height="520"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Animowana postać dentysty"
        role="img"
        style={{ filter: 'drop-shadow(0 24px 48px rgba(14,165,233,0.18))' }}
      >
        <defs>
          <linearGradient id="coatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1F5F9" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDDCBC" />
            <stop offset="100%" stopColor="#F9C197" />
          </linearGradient>
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <filter id="softShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#00000020" />
          </filter>
          <radialGradient id="eyeGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#1E293B" />
          </radialGradient>
        </defs>

        {/* Lab coat body */}
        <rect x="72" y="210" width="156" height="220" rx="22" fill="url(#coatGrad)" stroke="#E2E8F0" strokeWidth="1.5" filter="url(#softShadow)" />

        {/* Coat lapels */}
        <path d="M 72 215 L 100 260 L 150 245 L 200 260 L 228 215" fill="url(#coatGrad)" stroke="#CBD5E1" strokeWidth="1.5" />

        {/* Scrubs/shirt underneath */}
        <path d="M 115 235 L 150 260 L 185 235 L 185 280 L 115 280 Z" fill="url(#blueGrad)" opacity="0.85" />

        {/* Left arm */}
        <path d="M 72 230 C 45 240 38 290 42 330 C 44 350 55 360 68 355 L 80 310 C 65 305 60 275 72 255 Z" fill="url(#skinGrad)" stroke="#E2BFA0" strokeWidth="1.5" />
        {/* Left sleeve */}
        <path d="M 72 230 C 52 238 48 270 55 300 L 80 295 C 72 270 75 245 88 232 Z" fill="url(#coatGrad)" stroke="#E2E8F0" strokeWidth="1.5" />

        {/* Right arm */}
        <path d="M 228 230 C 255 240 262 290 258 330 C 256 350 245 360 232 355 L 220 310 C 235 305 240 275 228 255 Z" fill="url(#skinGrad)" stroke="#E2BFA0" strokeWidth="1.5" />
        {/* Right sleeve */}
        <path d="M 228 230 C 248 238 252 270 245 300 L 220 295 C 228 270 225 245 212 232 Z" fill="url(#coatGrad)" stroke="#E2E8F0" strokeWidth="1.5" />

        {/* Left hand */}
        <ellipse cx="58" cy="348" rx="16" ry="14" fill="url(#skinGrad)" stroke="#E2BFA0" strokeWidth="1.5" />
        {/* Right hand holding tool */}
        <ellipse cx="242" cy="348" rx="16" ry="14" fill="url(#skinGrad)" stroke="#E2BFA0" strokeWidth="1.5" />
        {/* Dental tool in right hand */}
        <line x1="248" y1="340" x2="268" y2="308" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        <circle cx="270" cy="305" r="5" fill="url(#blueGrad)" />
        <line x1="270" y1="300" x2="278" y2="292" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />

        {/* Neck */}
        <rect x="128" y="178" width="44" height="36" rx="10" fill="url(#skinGrad)" stroke="#E2BFA0" strokeWidth="1.5" />

        {/* Head */}
        <ellipse cx="150" cy="120" rx="58" ry="64" fill="url(#skinGrad)" stroke="#E2BFA0" strokeWidth="1.5" filter="url(#softShadow)" />

        {/* Hair */}
        <path d="M 92 95 Q 88 48 150 44 Q 212 48 208 95 Q 200 62 150 60 Q 100 62 92 95 Z" fill="url(#hairGrad)" />
        {/* Hair side details */}
        <path d="M 92 95 Q 90 110 94 118" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" fill="none" />
        <path d="M 208 95 Q 210 110 206 118" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" fill="none" />

        {/* Ear left */}
        <ellipse cx="93" cy="122" rx="10" ry="14" fill="url(#skinGrad)" stroke="#E2BFA0" strokeWidth="1.5" />
        <path d="M 97 114 Q 100 122 97 130" stroke="#E2BFA0" strokeWidth="1.5" fill="none" />
        {/* Ear right */}
        <ellipse cx="207" cy="122" rx="10" ry="14" fill="url(#skinGrad)" stroke="#E2BFA0" strokeWidth="1.5" />
        <path d="M 203 114 Q 200 122 203 130" stroke="#E2BFA0" strokeWidth="1.5" fill="none" />

        {/* Eyebrows */}
        <path d="M 118 90 Q 130 84 140 88" stroke="#334155" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 160 88 Q 170 84 182 90" stroke="#334155" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Eye whites left */}
        <ellipse cx="132" cy="108" rx="12" ry="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />
        {/* Eye whites right */}
        <ellipse cx="168" cy="108" rx="12" ry="10" fill="white" stroke="#E2E8F0" strokeWidth="1" />

        {/* Iris left */}
        <circle cx="132" cy="108" r="7" fill="url(#eyeGrad)" />
        {/* Iris right */}
        <circle cx="168" cy="108" r="7" fill="url(#eyeGrad)" />

        {/* Pupils (tracked by JS) */}
        <circle ref={leftPupilRef} cx="132" cy="108" r="4" fill="#0EA5E9" />
        <circle ref={rightPupilRef} cx="168" cy="108" r="4" fill="#0EA5E9" />

        {/* Eye shine */}
        <circle cx="135" cy="105" r="2" fill="white" opacity="0.8" />
        <circle cx="171" cy="105" r="2" fill="white" opacity="0.8" />

        {/* Nose */}
        <path d="M 150 115 Q 144 128 148 132 Q 150 134 152 132 Q 156 128 150 115" fill="#E2A882" opacity="0.5" />
        <path d="M 146 132 Q 150 136 154 132" stroke="#D4956C" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Smile */}
        <path d="M 133 148 Q 150 162 167 148" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Teeth */}
        <path d="M 137 149 Q 150 158 163 149 L 162 155 Q 150 162 138 155 Z" fill="white" stroke="#E2E8F0" strokeWidth="0.5" />
        <line x1="150" y1="149" x2="150" y2="156" stroke="#E2E8F0" strokeWidth="0.8" />

        {/* Cheek blush */}
        <ellipse cx="115" cy="135" rx="12" ry="7" fill="#FECACA" opacity="0.35" />
        <ellipse cx="185" cy="135" rx="12" ry="7" fill="#FECACA" opacity="0.35" />

        {/* Stethoscope */}
        <path d="M 115 245 Q 105 265 110 280 Q 115 295 130 290 Q 145 285 140 270 Q 138 260 148 255" stroke="#64748B" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="148" cy="253" r="8" fill="#94A3B8" stroke="#64748B" strokeWidth="2" />
        <circle cx="148" cy="253" r="4" fill="url(#blueGrad)" />

        {/* Coat buttons */}
        <circle cx="150" cy="295" r="4" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="150" cy="320" r="4" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="150" cy="345" r="4" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />

        {/* Coat pocket */}
        <rect x="172" y="270" width="36" height="28" rx="4" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
        <line x1="180" y1="270" x2="180" y2="264" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" />
        <line x1="188" y1="270" x2="188" y2="262" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />

        {/* Name badge */}
        <rect x="80" y="265" width="60" height="36" rx="4" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
        <rect x="84" y="269" width="52" height="28" rx="2" fill="url(#blueGrad)" opacity="0.1" />
        <text x="110" y="280" textAnchor="middle" fontSize="6" fill="#0EA5E9" fontWeight="600" fontFamily="Outfit, sans-serif">Dr. Kowalski</text>
        <text x="110" y="290" textAnchor="middle" fontSize="5" fill="#64748B" fontFamily="Outfit, sans-serif">Stomatolog</text>

        {/* Legs/trousers */}
        <rect x="105" y="415" width="38" height="90" rx="10" fill="#334155" />
        <rect x="157" y="415" width="38" height="90" rx="10" fill="#334155" />

        {/* Shoes */}
        <ellipse cx="124" cy="500" rx="22" ry="12" fill="#1E293B" />
        <ellipse cx="176" cy="500" rx="22" ry="12" fill="#1E293B" />

        {/* Floating tooth accent */}
        <motion.g>
          <circle cx="260" cy="80" r="18" fill="white" stroke="#E2E8F0" strokeWidth="2" opacity="0.9" />
          <path d="M 250 76 Q 260 68 270 76 Q 278 84 274 94 Q 268 100 260 98 Q 252 100 246 94 Q 242 84 250 76 Z" fill="white" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M 254 90 L 256 98 M 266 90 L 264 98" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>

        {/* Small sparkles */}
        <circle cx="48" cy="160" r="3" fill="#0EA5E9" opacity="0.6" />
        <circle cx="260" cy="180" r="2" fill="#06B6D4" opacity="0.5" />
        <circle cx="40" cy="280" r="2" fill="#38BDF8" opacity="0.4" />
      </svg>
    </motion.div>
  )
}
