'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/translations'

export default function Home() {
  const { language } = useLanguage()
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden relative min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Decorative gradient orbs - More vibrant on mobile */}
        <div className="absolute top-10 right-5 lg:top-20 lg:right-10 w-64 h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full filter blur-3xl opacity-30 lg:opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-5 lg:bottom-20 lg:left-10 w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full filter blur-3xl opacity-30 lg:opacity-20 animate-pulse-slower"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="animate-fade-in-up text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg font-heading">
                {t('home.hero.title', language)}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-primary-50 drop-shadow-md">
                {t('home.hero.subtitle', language)}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link
                  href="/contact"
                  className="group relative bg-gradient-to-r from-accent-500 to-accent-600 text-white px-8 py-4 rounded-full font-semibold hover:from-accent-600 hover:to-accent-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center shadow-lg cursor-pointer"
                >
                  <span className="relative z-10">{t('home.hero.cta', language)}</span>
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="/fuar"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-800 transition-all duration-300 transform hover:scale-105 text-center backdrop-blur-sm cursor-pointer"
                >
                  {language === 'tr' ? '🌍 Fuarlar' : '🌍 Trade Shows'}
                </Link>
                <Link
                  href="/about"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-800 transition-all duration-300 transform hover:scale-105 text-center backdrop-blur-sm cursor-pointer"
                >
                  {t('home.discoverMore', language)}
                </Link>
              </div>
            </div>

            {/* Right Column - Image Collage (Desktop) */}
            <div className="relative h-[400px] md:h-[500px] hidden lg:block">
              {/* Large center image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-72 bg-white rounded-2xl shadow-2xl overflow-hidden animate-float-delayed z-10">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
                  alt="Trade Show Exhibition"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top right image */}
              <div className="absolute top-0 right-0 w-48 h-40 bg-white rounded-2xl shadow-xl overflow-hidden animate-float z-20">
                <img
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=300&h=250&fit=crop"
                  alt="Business Exhibition"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom left image */}
              <div className="absolute bottom-0 left-0 w-56 h-48 bg-white rounded-2xl shadow-xl overflow-hidden animate-float-slow z-20">
                <img
                  src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=300&h=250&fit=crop"
                  alt="Exhibition Hall"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom right decorative element */}
              <div className="absolute bottom-12 right-12 w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full animate-pulse-slow opacity-80 z-0"></div>
            </div>
          </div>

          {/* Mobile Featured Image - Outside the grid, completely separate */}
          <div className="lg:hidden mt-8 px-4">
            <div className="relative w-full max-w-sm mx-auto h-56 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop"
                alt="Trade Show"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.services.title', language)}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('home.services.subtitle', language)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow bg-gray-50">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">{t('home.services.travelPlanning', language)}</h3>
              <p className="text-gray-600">
                {t('home.services.travelPlanningDesc', language)}
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow bg-gray-50">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">{t('home.services.accommodations', language)}</h3>
              <p className="text-gray-600">
                {t('home.services.accommodationsDesc', language)}
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow bg-gray-50">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-heading">{t('home.services.guided', language)}</h3>
              <p className="text-gray-600">
                {t('home.services.guidedDesc', language)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-accent-400 mb-2 font-heading">10+</div>
              <div className="text-gray-300">{t('home.stats.years', language)}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent-400 mb-2 font-heading">50+</div>
              <div className="text-gray-300">{t('home.stats.countries', language)}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent-400 mb-2 font-heading">500+</div>
              <div className="text-gray-300">{language === 'tr' ? 'Fuar' : 'Trade Shows'}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent-400 mb-2 font-heading">98%</div>
              <div className="text-gray-300">{t('home.stats.satisfaction', language)}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade Shows Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-accent-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent-600 font-heading">
              {t('home.tradeShows.title', language)}
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              {t('home.tradeShows.subtitle', language)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-accent-500 to-accent-600">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{t('home.tradeShows.feature1Title', language)}</h3>
              <p className="text-gray-600">{t('home.tradeShows.feature1Desc', language)}</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-accent-500 to-accent-600">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{t('home.tradeShows.feature2Title', language)}</h3>
              <p className="text-gray-600">{t('home.tradeShows.feature2Desc', language)}</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-br from-accent-500 to-accent-600">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 font-heading">{t('home.tradeShows.feature3Title', language)}</h3>
              <p className="text-gray-600">{t('home.tradeShows.feature3Desc', language)}</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/fuar"
              className="inline-block text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700"
            >
              {t('home.tradeShows.cta', language)}
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            {t('home.cta.title', language)}
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            {t('home.cta.subtitle', language)}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
          >
            {t('home.cta.button', language)}
          </Link>
        </div>
      </section>
    </div>
  )
}
