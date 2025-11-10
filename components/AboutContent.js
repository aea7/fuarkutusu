'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { t } from '@/translations'

export default function AboutContent() {
  const { language } = useLanguage()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.title', language)}</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            {t('about.subtitle', language)}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('about.ourStory', language)}</h2>
              <p className="text-gray-600 mb-4">
                {t('about.storyPara1', language)}
              </p>
              <p className="text-gray-600 mb-4">
                {t('about.storyPara2', language)}
              </p>
              <p className="text-gray-600">
                {t('about.storyPara3', language)}
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <span className="text-gray-400">Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('about.ourValues', language)}</h2>
            <p className="text-xl text-gray-600">{t('about.valuesSubtitle', language)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#fde8d7' }}>
                <svg className="w-6 h-6" style={{ color: '#ee7d21' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.excellence', language)}</h3>
              <p className="text-gray-600">
                {t('about.excellenceDesc', language)}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#fde8d7' }}>
                <svg className="w-6 h-6" style={{ color: '#ee7d21' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.sustainability', language)}</h3>
              <p className="text-gray-600">
                {t('about.sustainabilityDesc', language)}
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#fde8d7' }}>
                <svg className="w-6 h-6" style={{ color: '#ee7d21' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('about.community', language)}</h3>
              <p className="text-gray-600">
                {t('about.communityDesc', language)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('about.meetTeam', language)}</h2>
            <p className="text-xl text-gray-600">{t('about.teamSubtitle', language)}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-400">SA</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Sarah Anderson</h3>
              <p className="mb-2" style={{ color: '#ee7d21' }}>Founder & CEO</p>
              <p className="text-sm text-gray-600">15 years of travel industry experience</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-400">MT</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Michael Thompson</h3>
              <p className="mb-2" style={{ color: '#ee7d21' }}>Head of Operations</p>
              <p className="text-sm text-gray-600">Expert in tour planning and logistics</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-400">LC</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Laura Chen</h3>
              <p className="mb-2" style={{ color: '#ee7d21' }}>Senior Travel Consultant</p>
              <p className="text-sm text-gray-600">Specialist in Scottish Highlands tours</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-gray-400">JD</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">James Davies</h3>
              <p className="mb-2" style={{ color: '#ee7d21' }}>Customer Experience Manager</p>
              <p className="text-sm text-gray-600">Ensuring every journey is perfect</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-white" style={{ background: 'linear-gradient(to right, #ee7d21, #df5c17)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('about.ctaTitle', language)}
          </h2>
          <p className="text-xl mb-8" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            {t('about.ctaSubtitle', language)}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white px-8 py-4 rounded-lg font-semibold transition-colors hover:bg-gray-100"
            style={{ color: '#ee7d21' }}
          >
            {t('about.contactUs', language)}
          </Link>
        </div>
      </section>
    </div>
  )
}
