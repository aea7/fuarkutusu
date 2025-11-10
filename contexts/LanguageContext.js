'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

  // Load language from localStorage on mount, or detect browser language
  useEffect(() => {
    const savedLang = localStorage.getItem('language')

    if (savedLang && (savedLang === 'en' || savedLang === 'tr')) {
      // Use saved language preference
      setLanguage(savedLang)
    } else {
      // Detect browser language
      const browserLang = navigator.language || navigator.userLanguage
      const langCode = browserLang.toLowerCase().split('-')[0]

      // Set TR for Turkish and Azerbaijani (and similar Turkic languages)
      const turkicLanguages = ['tr', 'az', 'tk', 'uz', 'ky', 'kk', 'tt']

      if (turkicLanguages.includes(langCode)) {
        setLanguage('tr')
        localStorage.setItem('language', 'tr')
      } else {
        setLanguage('en')
        localStorage.setItem('language', 'en')
      }
    }
  }, [])

  // Save language to localStorage when it changes
  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
