import Link from 'next/link'
import { getFuarBySlugWithBothLanguages, getAllFuarSlugs } from '@/lib/fuar'
import FuarDetailButtons from '@/components/FuarDetailButtons'
import FuarDate from '@/components/FuarDate'
import FuarContent from '@/components/FuarContent'

export async function generateStaticParams() {
  const fuars = await getAllFuarSlugs()
  return fuars.map((fuar) => ({
    slug: fuar.slug,
  }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const fuar = await getFuarBySlugWithBothLanguages(resolvedParams.slug)
  return {
    title: `${fuar.title} - ${fuar.city}, ${fuar.country} | Fuar Kutusu`,
    description: fuar.subtitle || `${fuar.title} trade show in ${fuar.city}, ${fuar.country}`,
  }
}

export default async function FuarDetail({ params }) {
  const resolvedParams = await params
  const fuar = await getFuarBySlugWithBothLanguages(resolvedParams.slug)


  return (
    <div>
      {/* Hero Section with Event Info */}
      <section className="text-white py-16" style={{ background: 'linear-gradient(to right, #ee7d21, #df5c17)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/fuar" className="hover:text-white mb-4 inline-block" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            ← Back to Trade Shows
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-white rounded-full text-sm font-semibold" style={{ backgroundColor: '#f47d45' }}>
                  {fuar.sector}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{fuar.title}</h1>
              {fuar.subtitle && (
                <p className="text-xl mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{fuar.subtitle}</p>
              )}
            </div>

            {/* Logo */}
            {fuar.logo && (
              <div className="bg-white rounded-xl p-6 flex items-center justify-center">
                <img src={fuar.logo} alt={`${fuar.title} logo`} className="max-h-32 max-w-full object-contain" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Information Cards */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Dates */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6" fill="none" stroke="#ee7d21" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="font-semibold text-gray-900">Dates</h3>
              </div>
              <p className="text-gray-600">
                <FuarDate startDate={fuar.startDate} endDate={fuar.endDate} />
              </p>
              {fuar.frequency && (
                <p className="text-sm text-gray-500 mt-2">
                  {fuar.frequency === 'yearly' ? 'Annual Event' :
                   fuar.frequency === 'biennial' ? 'Biennial Event' :
                   fuar.frequency === 'one-time' ? 'One-time Event' :
                   fuar.frequency}
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
                <h3 className="font-semibold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-600 font-medium">{fuar.city}, {fuar.country}</p>
            </div>

            {/* Venue */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-6 h-6" fill="none" stroke="#ee7d21" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="font-semibold text-gray-900">Venue</h3>
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
                  <h3 className="font-semibold text-gray-900">Website</h3>
                </div>
                <a
                  href={fuar.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline break-all hover:opacity-80 transition-opacity"
                  style={{ color: '#ee7d21' }}
                >
                  Visit Website →
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
                  <h3 className="font-semibold text-gray-900">Instagram</h3>
                </div>
                <a
                  href={fuar.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline break-all hover:opacity-80 transition-opacity"
                  style={{ color: '#ee7d21' }}
                >
                  Follow on Instagram →
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content */}
            <div className="lg:col-span-2">
              {fuar.coverImage && (
                <div className="mb-8 rounded-xl overflow-hidden">
                  <img src={fuar.coverImage} alt={fuar.title} className="w-full h-auto" />
                </div>
              )}
              <FuarContent contentEn={fuar.contentEn} contentTr={fuar.contentTr} />

              {/* Tags */}
              {fuar.tags && fuar.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {fuar.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Organizer Info */}
              {fuar.organizerName && (
                <div className="bg-gray-50 rounded-lg p-6 mb-6 sticky top-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="#ee7d21" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Organizer
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
                        Visit Organizer Website →
                      </a>
                    )}
                  </div>
                </div>
              )}

              {/* Map */}
              {fuar.locationLatitude && fuar.locationLongitude && (
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Location Map</h3>
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
          </div>
        </div>
      </article>
    </div>
  )
}
