import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

export async function getAllPosts() {
  try {
    const posts = await reader.collections.posts.all();

    return posts
      .map(post => ({
        slug: post.slug,
        title: post.entry.title,
        description: post.entry.description,
        publishedAt: post.entry.publishedAt,
        author: post.entry.author,
        coverImage: post.entry.coverImage,
        status: post.entry.status,
      }))
      .sort((a, b) => {
        const dateA = new Date(a.publishedAt);
        const dateB = new Date(b.publishedAt);
        return dateB - dateA;
      });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug) {
  try {
    const post = await reader.collections.posts.read(slug);

    if (!post) {
      throw new Error(`Post not found: ${slug}`);
    }

    // Convert Keystatic document to HTML
    const content = await post.content();

    return {
      slug,
      title: post.title,
      description: post.description,
      publishedAt: post.publishedAt,
      author: post.author,
      coverImage: post.coverImage,
      status: post.status,
      content: content, // Keystatic document content
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    throw error;
  }
}

export async function getAllPostSlugs() {
  try {
    const posts = await reader.collections.posts.all();
    return posts.map(post => ({ slug: post.slug }));
  } catch (error) {
    console.error('Error reading post slugs:', error);
    return [];
  }
}
