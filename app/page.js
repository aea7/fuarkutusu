import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover the UK Like Never Before
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Your trusted partner for unforgettable travel experiences across the United Kingdom
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Journey
              </Link>
              <Link
                href="/about"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for the perfect UK adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow bg-gray-50">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Planning</h3>
              <p className="text-gray-600">
                Personalized itineraries crafted to match your interests and travel style
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow bg-gray-50">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guided Tours</h3>
              <p className="text-gray-600">
                Expert-led tours to iconic UK destinations with insider knowledge
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center p-8 rounded-xl hover:shadow-xl transition-shadow bg-gray-50">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Guides</h3>
              <p className="text-gray-600">
                Comprehensive guides and tips for exploring the best of Britain
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary-400 mb-2">10+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-400 mb-2">5000+</div>
              <div className="text-gray-300">Happy Travelers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-400 mb-2">200+</div>
              <div className="text-gray-300">Destinations</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-400 mb-2">98%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from real adventurers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center text-primary-600 font-bold">
                  JS
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">John Smith</div>
                  <div className="text-sm text-gray-500">London Explorer</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "SetTravel UK made our family trip absolutely unforgettable. The attention to detail and local insights were exceptional!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center text-primary-600 font-bold">
                  EM
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Emma Mitchell</div>
                  <div className="text-sm text-gray-500">Scotland Adventurer</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The Scottish Highlands tour was breathtaking. Our guide was knowledgeable and the whole experience was seamless."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center text-primary-600 font-bold">
                  DW
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">David Wilson</div>
                  <div className="text-sm text-gray-500">History Enthusiast</div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Perfect blend of history and culture. The custom itinerary exceeded all our expectations. Highly recommended!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let us help you create memories that will last a lifetime
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
