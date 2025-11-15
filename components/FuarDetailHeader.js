'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/translations'

export default function FuarDetailHeader({ fuar }) {
  const { language } = useLanguage()

  return (
    <section className="text-white py-16" style={{ background: 'linear-gradient(to right, #ee7d21, #df5c17)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/fuar" className="hover:text-white mb-4 inline-block" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          {t('fuar.backToList', language)}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-white rounded-full text-sm font-semibold" style={{ backgroundColor: '#f47d45' }}>
                {fuar.sector}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{fuar.title}</h1>
            {fuar.subtitle && (
              <p className="text-xl mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{fuar.subtitle}</p>
            )}
          </div>

          {/* Logo */}
          {fuar.logo && (
            <div className="bg-white rounded-xl p-6 flex items-center justify-center">
              <img src={fuar.logo} alt={`${fuar.title} logo`} className="max-h-32 max-w-full object-contain" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
