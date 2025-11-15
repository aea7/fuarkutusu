'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/translations'

export default function FuarDetailTags({ tags }) {
  const { language } = useLanguage()

  if (!tags || tags.length === 0) return null

  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('fuar.tags', language)}</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}
