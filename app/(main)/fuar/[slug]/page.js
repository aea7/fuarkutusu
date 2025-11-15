import { getFuarBySlugWithBothLanguages, getAllFuarSlugs } from '@/lib/fuar'
import FuarDetailHeader from '@/components/FuarDetailHeader'
import FuarDetailInfo from '@/components/FuarDetailInfo'
import FuarDetailSidebar from '@/components/FuarDetailSidebar'
import FuarDetailTags from '@/components/FuarDetailTags'
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
      <FuarDetailHeader fuar={fuar} />

      {/* Key Information Cards */}
      <FuarDetailInfo fuar={fuar} />

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
              <FuarDetailTags tags={fuar.tags} />
            </div>

            {/* Sidebar */}
            <FuarDetailSidebar fuar={fuar} />
          </div>
        </div>
      </article>
    </div>
  )
}
