import { Image } from 'lucide-react'

export default function ImagePlaceholder({ label = 'Zdjęcie', aspect = 'aspect-video', className = '' }) {
  return (
    <div className={`${aspect} ${className} bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl border-2 border-dashed border-brand-200 flex flex-col items-center justify-center gap-3`}>
      <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
        <Image size={22} className="text-brand-400" aria-hidden="true" />
      </div>
      <p className="text-sm text-brand-400 font-medium text-center px-4">{label}</p>
    </div>
  )
}
