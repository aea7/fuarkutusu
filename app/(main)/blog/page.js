import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog - Fuar Kutusu',
  description: 'Travel tips, guides, and stories from across the UK',
}

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Travel Blog</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Discover travel tips, destination guides, and inspiring stories from across the UK
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    {post.coverImage ? (
                      <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-gray-400">Image placeholder</span>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary-600 mb-2">
                      {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3">{post.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
