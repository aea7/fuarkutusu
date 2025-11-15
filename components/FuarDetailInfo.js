'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/translations'
import FuarDate from './FuarDate'

export default function FuarDetailInfo({ fuar }) {
  const { language } = useLanguage()

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Dates */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="#ee7d21" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="font-semibold text-gray-900">{t('fuar.dates', language)}</h3>
            </div>
            <p className="text-gray-600">
              <FuarDate startDate={fuar.startDate} endDate={fuar.endDate} />
            </p>
            {fuar.frequency && (
              <p className="text-sm text-gray-500 mt-2">
                {t(`fuar.frequency.${fuar.frequency}`, language)}
              </p>
            )}
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="#ee7d21" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-semibold text-gray-900">{t('fuar.location', language)}</h3>
            </div>
            <p className="text-gray-600 font-medium">{fuar.city}, {fuar.country}</p>
          </div>

          {/* Venue */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-2">
              <svg className="w-6 h-6" fill="none" stroke="#ee7d21" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="font-semibold text-gray-900">{t('fuar.venue', language)}</h3>
            </div>
            <p className="text-gray-600">{fuar.venue}</p>
            {fuar.venueAddress && (
              <p className="text-sm text-gray-500 mt-1">{fuar.venueAddress}</p>
            )}
          </div>

          {/* Website */}
          {fuar.website && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6" fill="none" stroke="#ee7d21" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <h3 className="font-semibold text-gray-900">{t('fuar.website', language)}</h3>
              </div>
              <a
                href={fuar.website}
                target="_blank"
                rel="noopener noreferrer"
                className="underline break-all hover:opacity-80 transition-opacity"
                style={{ color: '#ee7d21' }}
              >
                {t('fuar.visitWebsite', language)}
              </a>
            </div>
          )}

          {/* Instagram */}
          {fuar.instagram && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6" fill="#ee7d21" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <h3 className="font-semibold text-gray-900">{t('fuar.instagram', language)}</h3>
              </div>
              <a
                href={fuar.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline break-all hover:opacity-80 transition-opacity"
                style={{ color: '#ee7d21' }}
              >
                {t('fuar.followOnInstagram', language)}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
