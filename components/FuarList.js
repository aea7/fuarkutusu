'use client'

import { useState } from 'react'
import Link from 'next/link'
import FuarFilters from './FuarFilters'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/translations'

export default function FuarList({ initialFuars }) {
  const [filteredFuars, setFilteredFuars] = useState(initialFuars)
  const { language } = useLanguage()

  const featuredFuars = filteredFuars.filter(fuar => fuar.featured)

  return (
    <>
      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <FuarFilters fuars={initialFuars} onFilterChange={setFilteredFuars} />
      </div>

      {/* Featured Trade Shows */}
      {featuredFuars.length > 0 && (
        <section className="py-12 bg-gradient-to-b from-fuar-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('fuar.featuredEvents', language)}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredFuars.map((fuar) => (
                <Link
                  key={fuar.slug}
                  href={`/fuar/${fuar.slug}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border-2 hover:border-[#ee7d21]"
                  style={{ borderColor: '#fde8d7' }}
                >
                  <div className="h-56 bg-gradient-to-br from-fuar-100 to-fuar-200 flex items-center justify-center p-6">
                    {fuar.logo ? (
                      <img src={fuar.logo} alt={fuar.title} className="max-h-full max-w-full object-contain" />
                    ) : fuar.coverImage ? (
                      <img src={fuar.coverImage} alt={fuar.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-fuar-400 text-6xl font-bold">{fuar.title.charAt(0)}</span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: '#fde8d7', color: '#b94515' }}>
                        {fuar.sector}
                      </span>
                      <span className="text-sm text-gray-500">
                        {fuar.city}, {fuar.country}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 transition-colors" style={{ color: fuar.title ? 'inherit' : '#ee7d21' }}>
                      {fuar.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{fuar.subtitle}</p>
                    <div className="flex items-center justify-between text-sm">
                      {(() => {
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        const endDate = new Date(fuar.endDate)
                        endDate.setHours(0, 0, 0, 0)
                        const isPast = endDate < today

                        return (
                          <div className="font-semibold">
                            {isPast && (
                              <span className="text-gray-500 mr-2">
                                {t('fuar.past', language)}
                              </span>
                            )}
                            <span style={{ color: isPast ? '#9ca3af' : '#ee7d21' }}>
                              {new Date(fuar.startDate).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                              })}
                              {fuar.endDate && fuar.startDate !== fuar.endDate && (
                                <> - {new Date(fuar.endDate).toLocaleDateString('en-GB', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric'
                                })}</>
                              )}
                            </span>
                          </div>
                        )
                      })()}
                      <span className="font-medium" style={{ color: '#ee7d21' }}>
                        {t('fuar.learnMore', language)}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Trade Shows Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {t('fuar.allEvents', language)}
          </h2>
          {filteredFuars.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                {t('fuar.noEvents', language)}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFuars.map((fuar) => (
                <Link
                  key={fuar.slug}
                  href={`/fuar/${fuar.slug}`}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all border border-gray-200 hover:border-[#ee7d21]"
                >
                  <div className="h-40 bg-gradient-to-br from-gray-50 to-fuar-50 flex items-center justify-center p-4">
                    {fuar.logo ? (
                      <img src={fuar.logo} alt={fuar.title} className="max-h-full max-w-full object-contain" />
                    ) : fuar.coverImage ? (
                      <img src={fuar.coverImage} alt={fuar.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-300 text-4xl font-bold">{fuar.title.charAt(0)}</span>
                    )}
                  </div>
                  <div className="p-5">
                    {(() => {
                      const today = new Date()
                      today.setHours(0, 0, 0, 0)
                      const endDate = new Date(fuar.endDate)
                      endDate.setHours(0, 0, 0, 0)
                      const isPast = endDate < today

                      return (
                        <div className="text-sm font-semibold mb-2">
                          {isPast && (
                            <span className="text-gray-500 mr-2">
                              {t('fuar.past', language)}
                            </span>
                          )}
                          <span style={{ color: isPast ? '#9ca3af' : '#ee7d21' }}>
                            {new Date(fuar.startDate).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                            {fuar.endDate && fuar.startDate !== fuar.endDate && (
                              <> - {new Date(fuar.endDate).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short'
                              })}</>
                            )}
                          </span>
                        </div>
                      )
                    })()}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 transition-colors line-clamp-2 group-hover:text-[#ee7d21]">
                      {fuar.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{fuar.subtitle}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {fuar.sector}
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {fuar.city}, {fuar.country}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
