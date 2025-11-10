'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitch() {
  const { language, changeLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => changeLanguage('tr')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
          language === 'tr'
            ? 'text-white shadow-sm'
            : 'text-gray-700 hover:text-gray-900'
        }`}
        style={{
          backgroundColor: language === 'tr' ? '#ee7d21' : 'transparent',
        }}
      >
        <span className="text-lg">🇹🇷</span> TR
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
          language === 'en'
            ? 'text-white shadow-sm'
            : 'text-gray-700 hover:text-gray-900'
        }`}
        style={{
          backgroundColor: language === 'en' ? '#ee7d21' : 'transparent',
        }}
      >
        <span className="text-lg">🇬🇧</span> EN
      </button>
    </div>
  )
}
