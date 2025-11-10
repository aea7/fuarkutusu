'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function FuarDate({ startDate, endDate }) {
  const { language } = useLanguage()

  const locale = language === 'tr' ? 'tr-TR' : 'en-GB'

  const start = new Date(startDate)
  const end = new Date(endDate)

  const formatDate = (date) => {
    return date.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <>
      {formatDate(start)}
      {startDate !== endDate && (
        <> - <br />{formatDate(end)}</>
      )}
    </>
  )
}
