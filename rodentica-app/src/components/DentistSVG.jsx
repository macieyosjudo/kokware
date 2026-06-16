import { useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

const lerp = (a, b, t) => a + (b - a) * t
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

export default function DentistSVG() {
  const svgRef       = useRef(null)
  const rafRef       = useRef(null)
  const mouseRef     = useRef({ x: 0, y: 0 })
  const pupilLRef    = useRef(null)
  const pupilRRef    = useRef(null)
  const irisLRef     = useRef(null)
  const irisRRef     = useRef(null)
  const rotRef       = useRef({ lx: 0, ly: 0, rx: 0, ry: 0 })

  const updateEyes = useCallback(() => {
    if (!svgRef.current) return

    const rect = svgRef.current.getBoundingClientRect()
    const scaleX = rect.width  / 300
    const scaleY = rect.height / 560

    // Eye centers in screen coords
    const lEyeX = rect.left + 132 * scaleX
    const lEyeY = rect.top  + 108 * scaleY
    const rEyeX = rect.left + 168 * scaleX
    const rEyeY = rect.top  + 108 * scaleY

    const mx = mouseRef.current.x
    const my = mouseRef.current.y

    // Max iris travel from center
    const maxMove = 3.5

    const calcOffset = (eyeX, eyeY) => {
      const dx = mx - eyeX
      const dy = my - eyeY
      const dist = Math.sqrt(dx * dx + dy * dy) || 1
      const norm = Math.min(dist / 200, 1)
      return { x: (dx / dist) * norm * maxMove, y: (dy / dist) * norm * maxMove }
    }

    const lo = calcOffset(lEyeX, lEyeY)
    const ro = calcOffset(rEyeX, rEyeY)

    rotRef.current.lx = lerp(rotRef.current.lx, lo.x, 0.1)
    rotRef.current.ly = lerp(rotRef.current.ly, lo.y, 0.1)
    rotRef.current.rx = lerp(rotRef.current.rx, ro.x, 0.1)
    rotRef.current.ry = lerp(rotRef.current.ry, ro.y, 0.1)

    const { lx, ly, rx: rrx, ry: rry } = rotRef.current

    if (irisLRef.current) {
      irisLRef.current.setAttribute('cx', 132 + lx)
      irisLRef.current.setAttribute('cy', 109 + ly)
    }
    if (pupilLRef.current) {
      pupilLRef.current.setAttribute('cx', 132 + lx)
      pupilLRef.current.setAttribute('cy', 109 + ly)
    }
    if (irisRRef.current) {
      irisRRef.current.setAttribute('cx', 168 + rrx)
      irisRRef.current.setAttribute('cy', 109 + rry)
    }
    if (pupilRRef.current) {
      pupilRRef.current.setAttribute('cx', 168 + rrx)
      pupilRRef.current.setAttribute('cy', 109 + rry)
    }

    rafRef.current = requestAnimationFrame(updateEyes)
  }, [])

  useEffect(() => {
    const onMove = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(updateEyes)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [updateEyes])

  return (
    <motion.div
      className="relative flex items-center justify-center select-none"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-72 h-72 rounded-full bg-brand-400/10 blur-3xl" />
      </div>

      <svg
        ref={svgRef}
        viewBox="0 0 300 560"
        width="100%"
        height="auto"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Animowana higienistka stomatologiczna"
        role="img"
        style={{ filter: 'drop-shadow(0 20px 48px rgba(14,165,233,0.14))', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="dCoat" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EEF2FF" />
          </linearGradient>
          <linearGradient id="dSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDDCBC" />
            <stop offset="100%" stopColor="#F5B98A" />
          </linearGradient>
          <linearGradient id="dBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
          <linearGradient id="dHair" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#92400E" />
            <stop offset="60%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
          <radialGradient id="dIris" cx="35%" cy="30%" r="65%" fx="35%" fy="30%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E3A8A" />
          </radialGradient>
          <filter id="dShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#00000018" />
          </filter>
          <filter id="dFaceShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="4" stdDeviation="6" floodColor="#0000001A" />
          </filter>
        </defs>

        {/* Body */}
        <rect x="68" y="225" width="164" height="230" rx="24" fill="url(#dCoat)" stroke="#E2E8F0" strokeWidth="1.5" filter="url(#dShadow)" />
        <path d="M 68 230 L 98 278 L 150 260 L 202 278 L 232 230" fill="url(#dCoat)" stroke="#CBD5E1" strokeWidth="1.5" />
        <path d="M 112 248 L 150 268 L 188 248 L 188 292 L 112 292 Z" fill="url(#dBlue)" opacity="0.9" />
        <path d="M 68 248 C 40 258 33 308 37 348 C 39 368 50 378 65 373 L 76 325 C 62 320 56 292 68 272 Z" fill="url(#dSkin)" stroke="#E2BFA0" strokeWidth="1.5" />
        <path d="M 68 248 C 48 256 44 288 51 316 L 76 311 C 68 288 70 262 85 250 Z" fill="url(#dCoat)" stroke="#E2E8F0" strokeWidth="1.5" />
        <path d="M 232 248 C 260 258 267 308 263 348 C 261 368 250 378 235 373 L 224 325 C 238 320 244 292 232 272 Z" fill="url(#dSkin)" stroke="#E2BFA0" strokeWidth="1.5" />
        <path d="M 232 248 C 252 256 256 288 249 316 L 224 311 C 232 288 230 262 215 250 Z" fill="url(#dCoat)" stroke="#E2E8F0" strokeWidth="1.5" />
        <ellipse cx="53" cy="368" rx="17" ry="15" fill="url(#dSkin)" stroke="#E2BFA0" strokeWidth="1.5" />
        <ellipse cx="247" cy="368" rx="17" ry="15" fill="url(#dSkin)" stroke="#E2BFA0" strokeWidth="1.5" />
        <line x1="253" y1="358" x2="276" y2="323" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        <circle cx="277" cy="321" r="7" fill="white" stroke="#94A3B8" strokeWidth="1.5" />
        <ellipse cx="277" cy="321" rx="5" ry="5" fill="#BAE6FD" opacity="0.7" />
        <path d="M 112 260 Q 100 282 105 298 Q 110 314 126 310 Q 142 306 138 290 Q 136 280 146 274" stroke="#64748B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="146" cy="272" r="9" fill="#94A3B8" stroke="#64748B" strokeWidth="1.5" />
        <circle cx="146" cy="272" r="5" fill="url(#dBlue)" />
        <circle cx="150" cy="312" r="4" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="150" cy="338" r="4" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        <circle cx="150" cy="364" r="4" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
        <rect x="172" y="284" width="38" height="30" rx="4" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />
        <line x1="180" y1="284" x2="180" y2="276" stroke="#0EA5E9" strokeWidth="3" strokeLinecap="round" />
        <line x1="189" y1="284" x2="189" y2="273" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
        <line x1="198" y1="284" x2="198" y2="277" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
        <rect x="78" y="278" width="66" height="40" rx="5" fill="white" stroke="#E2E8F0" strokeWidth="1.5" />
        <text x="111" y="297" textAnchor="middle" fontSize="6.5" fill="#0EA5E9" fontWeight="700" fontFamily="Outfit, sans-serif">Rodentica</text>
        <text x="111" y="308" textAnchor="middle" fontSize="5.5" fill="#64748B" fontFamily="Outfit, sans-serif">Higienistka</text>
        <rect x="102" y="440" width="40" height="95" rx="12" fill="#1E3A5F" />
        <rect x="158" y="440" width="40" height="95" rx="12" fill="#1E3A5F" />
        <ellipse cx="122" cy="530" rx="24" ry="12" fill="#0F172A" />
        <ellipse cx="178" cy="530" rx="24" ry="12" fill="#0F172A" />

        {/* Neck */}
        <rect x="127" y="192" width="46" height="38" rx="12" fill="url(#dSkin)" stroke="#E2BFA0" strokeWidth="1.5" />

        {/* Head */}
        <ellipse cx="150" cy="118" rx="60" ry="68" fill="url(#dSkin)" stroke="#E2BFA0" strokeWidth="1.5" filter="url(#dFaceShadow)" />

        {/* Hair */}
        <path d="M 90 95 Q 85 44 150 40 Q 215 44 210 95 Q 202 58 150 56 Q 98 58 90 95 Z" fill="url(#dHair)" />
        <path d="M 90 95 Q 86 115 90 140 Q 91 152 98 158" stroke="url(#dHair)" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M 210 95 Q 214 115 210 140 Q 209 152 202 158" stroke="url(#dHair)" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M 130 46 Q 150 42 170 47" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />
        <ellipse cx="150" cy="40" rx="22" ry="14" fill="url(#dHair)" />

        {/* Ears */}
        <ellipse cx="91" cy="120" rx="10" ry="14" fill="url(#dSkin)" stroke="#E2BFA0" strokeWidth="1.5" />
        <circle cx="91" cy="130" r="3" fill="#0EA5E9" stroke="white" strokeWidth="1" />
        <ellipse cx="209" cy="120" rx="10" ry="14" fill="url(#dSkin)" stroke="#E2BFA0" strokeWidth="1.5" />
        <circle cx="209" cy="130" r="3" fill="#0EA5E9" stroke="white" strokeWidth="1" />

        {/* Eyebrows */}
        <path d="M 118 87 Q 130 80 142 85" stroke="#78350F" strokeWidth="2.8" fill="none" strokeLinecap="round" />
        <path d="M 158 85 Q 170 80 182 87" stroke="#78350F" strokeWidth="2.8" fill="none" strokeLinecap="round" />

        {/* Left eye */}
        <ellipse cx="132" cy="108" rx="13" ry="11" fill="white" stroke="#E2E8F0" strokeWidth="1" />
        <path d="M 119 105 Q 132 98 145 105" stroke="#5C3317" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <circle ref={irisLRef} cx="132" cy="109" r="8" fill="url(#dIris)" />
        <circle ref={pupilLRef} cx="132" cy="109" r="4.5" fill="#0F172A" />
        <circle cx="135" cy="106" r="2.2" fill="white" opacity="0.9" />
        <path d="M 120 113 Q 132 116 144 113" stroke="#78350F" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />

        {/* Right eye */}
        <ellipse cx="168" cy="108" rx="13" ry="11" fill="white" stroke="#E2E8F0" strokeWidth="1" />
        <path d="M 155 105 Q 168 98 181 105" stroke="#5C3317" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <circle ref={irisRRef} cx="168" cy="109" r="8" fill="url(#dIris)" />
        <circle ref={pupilRRef} cx="168" cy="109" r="4.5" fill="#0F172A" />
        <circle cx="171" cy="106" r="2.2" fill="white" opacity="0.9" />
        <path d="M 156 113 Q 168 116 180 113" stroke="#78350F" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6" />

        {/* Nose */}
        <path d="M 150 118 Q 145 130 147 135" stroke="#DDA882" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 150 118 Q 155 130 153 135" stroke="#DDA882" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 144 136 Q 150 140 156 136" stroke="#CC9466" strokeWidth="1.8" fill="none" strokeLinecap="round" />

        {/* Lips */}
        <path d="M 136 148 Q 143 143 150 145 Q 157 143 164 148" stroke="#C0705A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 136 148 Q 150 162 164 148" stroke="#C0705A" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 139 149 Q 150 157 161 149 L 160 155 Q 150 161 140 155 Z" fill="white" stroke="#F0E6E0" strokeWidth="0.5" />
        <path d="M 136 148 Q 143 143 150 145 Q 157 143 164 148 Q 150 150 136 148 Z" fill="#E8947A" opacity="0.5" />
        <path d="M 136 148 Q 150 155 164 148 Q 150 158 136 148 Z" fill="#E8947A" opacity="0.3" />

        {/* Cheeks */}
        <ellipse cx="113" cy="130" rx="14" ry="9" fill="#FECACA" opacity="0.4" />
        <ellipse cx="187" cy="130" rx="14" ry="9" fill="#FECACA" opacity="0.4" />

        {/* Floating tooth */}
        <g opacity="0.8">
          <circle cx="262" cy="76" r="22" fill="white" stroke="#BAE6FD" strokeWidth="1.5" filter="url(#dShadow)" />
          <path d="M 251 72 Q 262 63 273 72 Q 281 81 277 92 Q 271 99 262 97 Q 253 99 247 92 Q 243 81 251 72 Z" fill="white" stroke="#7DD3FC" strokeWidth="1.5" />
          <path d="M 255 89 L 257 97 M 267 89 L 265 97" stroke="#BAE6FD" strokeWidth="1.5" strokeLinecap="round" />
        </g>
        <circle cx="46" cy="165" r="3" fill="#0EA5E9" opacity="0.45" />
        <circle cx="36" cy="290" r="2.5" fill="#38BDF8" opacity="0.4" />
        <circle cx="264" cy="188" r="2.5" fill="#06B6D4" opacity="0.4" />
      </svg>
    </motion.div>
  )
}
