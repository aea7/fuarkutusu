import Link from 'next/link'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog'

export async function generateStaticParams() {
  const posts = getAllPostSlugs()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params
  const post = await getPostBySlug(resolvedParams.slug)
  return {
    title: `${post.title} - SetTravel UK Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params
  const post = await getPostBySlug(resolvedParams.slug)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-primary-100 hover:text-white mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-primary-100">
            <span>
              {new Date(post.date).toLocaleDateString('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            {post.author && (
              <>
                <span className="mx-2">•</span>
                <span>By {post.author}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.image && (
            <div className="mb-8 rounded-xl overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-auto" />
            </div>
          )}
          <div
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary-600 prose-strong:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Back to Blog CTA */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/blog"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Read More Articles
          </Link>
        </div>
      </section>
    </div>
  )
}
