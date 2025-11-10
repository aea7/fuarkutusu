'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/translations'

export default function FuarPageHero() {
  const { language } = useLanguage()

  return (
    <section className="bg-gradient-to-r from-accent-500 to-accent-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">{t('fuar.title', language)}</h1>
        <p className="text-xl max-w-3xl text-white/90">
          {t('fuar.subtitle', language)}
        </p>
      </div>
    </section>
  )
}
