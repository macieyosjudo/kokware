import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'

export default function PageHero({ title, subtitle, breadcrumb = [], Icon }) {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-cyan-500">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          aria-label="Ścieżka nawigacji"
          className="flex items-center gap-1.5 text-white/70 text-sm mb-8 flex-wrap"
        >
          <Link to="/" className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">
            <Home size={14} aria-hidden="true" />
            <span>Strona główna</span>
          </Link>
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight size={13} aria-hidden="true" />
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-white transition-colors cursor-pointer">{crumb.label}</Link>
              ) : (
                <span className="text-white font-medium">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        <div className="flex items-start gap-6">
          {Icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden sm:flex w-16 h-16 bg-white/20 rounded-2xl items-center justify-center flex-shrink-0 mt-1"
              aria-hidden="true"
            >
              <Icon size={30} className="text-white" strokeWidth={1.7} />
            </motion.div>
          )}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-white/85 max-w-2xl leading-relaxed"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
