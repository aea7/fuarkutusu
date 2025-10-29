# SetTravel UK Website

A modern, static travel website built with Next.js, Tailwind CSS, and Decap CMS.

## Features

- 🎨 Modern, responsive design inspired by The7 theme
- 📝 Blog with markdown support
- ✏️ Admin panel for content management (Decap CMS)
- ⚡ Static site generation for optimal performance
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd settravel_uk
```

2. Install dependencies:
```bash
yarn install
```

3. Run the development server:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── about/           # About page
│   ├── blog/            # Blog listing and posts
│   ├── contact/         # Contact page
│   └── page.js          # Homepage
├── components/          # React components
│   ├── Header.js
│   └── Footer.js
├── content/
│   └── blog/           # Markdown blog posts
├── lib/
│   └── blog.js         # Blog utilities
├── public/
│   └── admin/          # Decap CMS admin panel
└── package.json
```

## Setting Up the Admin Panel (Decap CMS)

The admin panel is available at `/admin` and allows you to edit blog posts through a user-friendly interface.

### For Production (Vercel + GitHub)

1. **Deploy to Vercel:**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy

2. **Enable Netlify Identity (works with Vercel too):**
   - Go to [Netlify](https://app.netlify.com) and create a new site (or link existing)
   - Go to Site settings → Identity → Enable Identity
   - Under Registration preferences, set to "Invite only"
   - Enable Git Gateway under Services

3. **Add Identity Widget to your site:**

   Add this script to `app/layout.js` before the closing `</body>` tag:
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   ```

4. **Invite yourself:**
   - Go to Identity tab in Netlify
   - Click "Invite users"
   - Enter your email
   - Check your email and set password

5. **Access the admin panel:**
   - Go to `your-site.com/admin`
   - Login with your credentials
   - Start editing blog posts!

### For Local Development

1. Edit `public/admin/config.yml` and uncomment:
   ```yaml
   local_backend: true
   ```

2. Install and run the Decap CMS proxy server:
   ```bash
   npx decap-server
   ```

3. In another terminal, run your dev server:
   ```bash
   yarn dev
   ```

4. Access the admin at `http://localhost:3000/admin`

## Editing Content

### Blog Posts

Blog posts are stored in `content/blog/` as markdown files with frontmatter:

```markdown
---
title: "Your Post Title"
excerpt: "A brief description"
date: "2024-10-29"
author: "Your Name"
image: "/images/uploads/your-image.jpg"
---

Your markdown content here...
```

You can edit these directly in your code editor or use the admin panel at `/admin`.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Import your repository on [Vercel](https://vercel.com):
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. Your site will be live in minutes!

### Build Locally

To test the production build locally:

```bash
yarn build
npx serve@latest out
```

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content

- **Homepage:** Edit `app/page.js`
- **About Page:** Edit `app/about/page.js`
- **Contact Page:** Edit `app/contact/page.js`
- **Header/Footer:** Edit `components/Header.js` and `components/Footer.js`

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **CMS:** Decap CMS (formerly Netlify CMS)
- **Markdown:** gray-matter + marked
- **Deployment:** Vercel

## License

MIT

## Support

For questions or issues, please open a GitHub issue or contact us at info@settraveluk.com.
