'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { DocumentRenderer } from '@keystatic/core/renderer'

export default function FuarContent({ contentEn, contentTr }) {
  const { language } = useLanguage()

  // Choose content based on current language
  const content = language === 'tr' && contentTr ? contentTr : contentEn

  return (
    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900" style={{ '--tw-prose-links': '#ee7d21' }}>
      <DocumentRenderer document={content} />
    </div>
  )
}
