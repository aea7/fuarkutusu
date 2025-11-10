'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/translations'
import LanguageSwitch from './LanguageSwitch'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language } = useLanguage()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 font-heading">
            <span className="text-2xl font-bold text-primary-700">GTS</span>
            <span className="text-2xl font-bold text-accent-500">TURİZM</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-700 transition-colors">
              {t('nav.home', language)}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-700 transition-colors">
              {t('nav.about', language)}
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-700 transition-colors">
              {t('nav.blog', language)}
            </Link>
            <Link href="/fuar" className="transition-colors font-semibold text-accent-500 hover:text-accent-600">
              {t('nav.tradeShows', language)}
            </Link>
            <LanguageSwitch />
            <Link
              href="/contact"
              className="bg-accent-500 text-white px-6 py-2 rounded-lg hover:bg-accent-600 transition-colors"
            >
              {t('nav.contact', language)}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.home', language)}
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-primary-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.about', language)}
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-primary-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.blog', language)}
              </Link>
              <Link
                href="/fuar"
                className="transition-colors py-2 font-semibold text-accent-500 hover:text-accent-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.tradeShows', language)}
              </Link>
              <div className="py-2">
                <LanguageSwitch />
              </div>
              <Link
                href="/contact"
                className="bg-accent-500 text-white px-6 py-3 rounded-lg hover:bg-accent-600 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav.contact', language)}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
