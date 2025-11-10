'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

const COUNTRIES = [
  { en: 'All Countries', tr: 'Tüm Ülkeler', value: 'all' },
  { en: 'Germany', tr: 'Almanya', value: 'Germany' },
  { en: 'Netherlands', tr: 'Hollanda', value: 'Netherlands' },
  { en: 'Austria', tr: 'Avusturya', value: 'Austria' },
  { en: 'Switzerland', tr: 'İsviçre', value: 'Switzerland' },
  { en: 'China', tr: 'Çin', value: 'China' },
  { en: 'UAE', tr: 'BAE', value: 'UAE' },
  { en: 'Belgium', tr: 'Belçika', value: 'Belgium' },
]

const DATE_FILTERS = [
  { en: 'All Dates', tr: 'Tüm Tarihler', value: 'all' },
  { en: 'Upcoming', tr: 'Yaklaşan', value: 'upcoming' },
  { en: 'Past Events', tr: 'Geçmiş Etkinlikler', value: 'past' },
  { en: 'This Month', tr: 'Bu Ay', value: 'this-month' },
  { en: 'This Year', tr: 'Bu Yıl', value: 'this-year' },
]

export default function FuarFilters({ fuars, onFilterChange }) {
  const [selectedCountry, setSelectedCountry] = useState('all')
  const [selectedDate, setSelectedDate] = useState('all')
  const { language } = useLanguage()

  console.log('FuarFilters received fuars:', fuars?.length || 0, fuars)

  const filterFuars = (country, dateFilter) => {
    let filtered = [...fuars]
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Country filter
    if (country !== 'all') {
      console.log('Filtering by country:', country)
      console.log('Available fuars:', fuars.map(f => ({ title: f.title, country: f.country })))
      filtered = filtered.filter(fuar => fuar.country === country)
      console.log('Filtered fuars:', filtered.map(f => ({ title: f.title, country: f.country })))
    }

    // Date filter
    if (dateFilter !== 'all') {
      filtered = filtered.filter(fuar => {
        const startDate = new Date(fuar.startDate)
        const endDate = new Date(fuar.endDate)
        startDate.setHours(0, 0, 0, 0)
        endDate.setHours(0, 0, 0, 0)

        switch (dateFilter) {
          case 'upcoming':
            return startDate >= today
          case 'past':
            return endDate < today
          case 'this-month':
            const monthStart = new Date(today.getFullYear(), today.getMonth(), 1)
            const monthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0)
            return (startDate >= monthStart && startDate <= monthEnd) ||
                   (endDate >= monthStart && endDate <= monthEnd)
          case 'this-year':
            const yearStart = new Date(today.getFullYear(), 0, 1)
            const yearEnd = new Date(today.getFullYear(), 11, 31)
            return (startDate >= yearStart && startDate <= yearEnd) ||
                   (endDate >= yearStart && endDate <= yearEnd)
          default:
            return true
        }
      })
    }

    return filtered
  }

  const handleCountryChange = (country) => {
    setSelectedCountry(country)
    const filtered = filterFuars(country, selectedDate)
    onFilterChange(filtered)
  }

  const handleDateChange = (dateFilter) => {
    setSelectedDate(dateFilter)
    const filtered = filterFuars(selectedCountry, dateFilter)
    onFilterChange(filtered)
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Country Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            {language === 'tr' ? '🌍 Ülke' : '🌍 Country'}
          </label>
          <div className="grid grid-cols-2 gap-2">
            {COUNTRIES.map((country) => (
              <button
                key={country.value}
                onClick={() => handleCountryChange(country.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  selectedCountry === country.value
                    ? 'text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor: selectedCountry === country.value ? '#ee7d21' : undefined,
                }}
              >
                {language === 'tr' ? country.tr : country.en}
              </button>
            ))}
          </div>
        </div>

        {/* Date Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            {language === 'tr' ? '📅 Tarih' : '📅 Date'}
          </label>
          <div className="grid grid-cols-2 gap-2">
            {DATE_FILTERS.map((filter) => (
              <button
                key={filter.value}
                onClick={() => handleDateChange(filter.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  selectedDate === filter.value
                    ? 'text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor: selectedDate === filter.value ? '#ee7d21' : undefined,
                }}
              >
                {language === 'tr' ? filter.tr : filter.en}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {(selectedCountry !== 'all' || selectedDate !== 'all') && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-gray-600">
              {language === 'tr' ? 'Aktif Filtreler:' : 'Active Filters:'}
            </span>
            {selectedCountry !== 'all' && (
              <span className="px-3 py-1 text-white rounded-full text-sm" style={{ backgroundColor: '#ee7d21' }}>
                {COUNTRIES.find(c => c.value === selectedCountry)?.[language]}
              </span>
            )}
            {selectedDate !== 'all' && (
              <span className="px-3 py-1 text-white rounded-full text-sm" style={{ backgroundColor: '#ee7d21' }}>
                {DATE_FILTERS.find(d => d.value === selectedDate)?.[language]}
              </span>
            )}
            <button
              onClick={() => {
                setSelectedCountry('all')
                setSelectedDate('all')
                onFilterChange(fuars)
              }}
              className="ml-2 text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer"
            >
              {language === 'tr' ? 'Filtreleri Temizle' : 'Clear Filters'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
