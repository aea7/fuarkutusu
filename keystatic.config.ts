import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: process.env.NEXT_PUBLIC_GITHUB_REPO_OWNER!,
      name: process.env.NEXT_PUBLIC_GITHUB_REPO_NAME!,
    },
  },
  cloud: {
    project: 'settravel/settravel-uk',
  },
  collections: {
    posts: collection({
      label: 'Posts',
      path: 'content/posts/*/',
      slugField: 'slug',
      schema: {
        title: fields.text({ label: 'Title' }),
        slug: fields.text({ label: 'Slug' }),
        publishedAt: fields.date({ label: 'Published Date' }),
        description: fields.text({ label: 'Description', multiline: true }),
        author: fields.object({
          name: fields.text({ label: 'Author Name' }),
          picture: fields.text({ label: 'Author Picture URL', defaultValue: '' }),
        }),
        coverImage: fields.text({
          label: 'Cover Image URL',
          defaultValue: '',
        }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Published', value: 'published' },
            { label: 'Draft', value: 'draft' },
          ],
          defaultValue: 'draft',
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
      },
    }),
  },
});
