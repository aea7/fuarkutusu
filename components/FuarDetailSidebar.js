'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/translations'
import FuarDetailButtons from './FuarDetailButtons'

export default function FuarDetailSidebar({ fuar }) {
  const { language } = useLanguage()

  return (
    <div className="lg:col-span-1">
      {/* Organizer Info */}
      {fuar.organizerName && (
        <div className="bg-gray-50 rounded-lg p-6 mb-6 sticky top-4">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="#ee7d21" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t('fuar.organizer', language)}
          </h3>
          <div className="space-y-2">
            <p className="font-semibold text-gray-900">{fuar.organizerName}</p>
            {fuar.organizerAddress && (
              <p className="text-sm text-gray-600">{fuar.organizerAddress}</p>
            )}
            {(fuar.organizerCity || fuar.organizerCountry) && (
              <p className="text-sm text-gray-600">
                {fuar.organizerCity}{fuar.organizerCity && fuar.organizerCountry && ', '}{fuar.organizerCountry}
              </p>
            )}
            {fuar.organizerWebsite && (
              <a
                href={fuar.organizerWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm underline mt-2 hover:opacity-80 transition-opacity"
                style={{ color: '#ee7d21' }}
              >
                {t('fuar.visitOrganizerWebsite', language)}
              </a>
            )}
          </div>
        </div>
      )}

      {/* Map */}
      {fuar.locationLatitude && fuar.locationLongitude && (
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">{t('fuar.locationMap', language)}</h3>
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d${fuar.locationLongitude}!3d${fuar.locationLatitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${fuar.title} location`}
            />
          </div>
        </div>
      )}

      {/* CTA Buttons */}
      <FuarDetailButtons />
    </div>
  )
}
