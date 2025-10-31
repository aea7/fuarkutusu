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

### For Production (Vercel + GitHub OAuth)

1. **Create a GitHub OAuth App:**
   - Go to https://github.com/settings/developers
   - Click "New OAuth App"
   - Fill in:
     - **Application name:** `SetTravel UK CMS` (or any name)
     - **Homepage URL:** `https://your-domain.vercel.app`
     - **Authorization callback URL:** `https://your-domain.vercel.app/api/auth/callback`
   - Click "Register application"
   - Copy the **Client ID**
   - Click "Generate a new client secret" and copy it

2. **Deploy to Vercel:**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect Next.js and deploy

3. **Add Environment Variables in Vercel:**
   - Go to your project settings in Vercel
   - Navigate to "Environment Variables"
   - Add the following:
     - `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., `https://your-domain.vercel.app`)
     - `OAUTH_CLIENT_ID`: Your GitHub OAuth Client ID
     - `OAUTH_CLIENT_SECRET`: Your GitHub OAuth Client Secret

4. **Update CMS Config:**
   - Edit `public/admin/config.yml`
   - Update `base_url` to your production URL:
     ```yaml
     base_url: https://your-domain.vercel.app
     ```

5. **Redeploy:**
   - Push your changes to GitHub
   - Vercel will auto-deploy

6. **Access the admin panel:**
   - Go to `your-site.com/admin`
   - Click "Login with GitHub"
   - Authorize the app
   - Start editing blog posts!

### For Local Development

1. **Copy environment variables:**
   ```bash
   cp .env.example .env.local
   ```

2. **Edit `.env.local`** with your OAuth credentials:
   ```
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   OAUTH_CLIENT_ID=your_github_oauth_client_id
   OAUTH_CLIENT_SECRET=your_github_oauth_client_secret
   ```

3. **Option A: Use OAuth locally** (same as production)
   - Update your GitHub OAuth App callback URL to also include:
     `http://localhost:3000/api/auth/callback`
   - Run `yarn dev`
   - Visit `http://localhost:3000/admin`

4. **Option B: Use local backend** (no auth needed):
   - Edit `public/admin/config.yml`:
     ```yaml
     # Comment out these lines:
     # base_url: https://your-domain.vercel.app
     # auth_endpoint: /api/auth

     # Uncomment this:
     local_backend: true
     ```
   - Run the CMS proxy: `yarn cms-proxy`
   - In another terminal: `yarn dev`
   - Visit `http://localhost:3000/admin`

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
