'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/translations'

export default function FuarDetailButtons() {
  const { language } = useLanguage()

  return (
    <div className="space-y-3">
      <Link
        href="/contact"
        className="block w-full text-white px-6 py-3 rounded-lg font-semibold text-center transition-all hover:brightness-90"
        style={{ backgroundColor: '#ee7d21' }}
      >
        {t('fuar.getTravelAssistance', language)}
      </Link>
      <Link
        href="/fuar"
        className="block w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-200 transition-colors"
      >
        {t('fuar.browseMore', language)}
      </Link>
    </div>
  )
}
