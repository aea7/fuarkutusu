# Keystatic GitHub Mode Setup Guide

This guide will help you set up Keystatic to work with GitHub, making it safe to deploy to Vercel.

## What Changed?

- ✅ Keystatic now uses **GitHub mode everywhere** (both local and production)
- ✅ **GitHub OAuth** for authentication (secure, no custom passwords)
- ✅ Content changes are committed to your GitHub repo automatically
- ✅ **Consistent experience** - same workflow in development and production
- ✅ Only authorized GitHub users (with write access) can access `/keystatic`

## Setup Steps

### 1. Commit & Push Your Code

First, commit all your current changes:

```bash
git add .
git commit -m "Setup Keystatic GitHub mode"
git push origin main
```

### 2. First-Time Keystatic Setup (Local)

1. Start your dev server: `yarn dev`
2. Visit `http://localhost:3000/keystatic`
3. Click **"Sign in with GitHub"**
4. Follow the setup wizard:
   - **App Name**: Choose a name (e.g., "SetTravel UK CMS")
   - **Production URL**: Leave blank for now (you'll add it after deploying to Vercel)
   - Click **"Create GitHub App"**

### 3. GitHub App Created!

After setup, Keystatic will automatically update your `.env.local` file with:

```env
KEYSTATIC_GITHUB_CLIENT_ID=Iv1...
KEYSTATIC_GITHUB_CLIENT_SECRET=...
KEYSTATIC_SECRET=...
NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=settravel-uk-cms
```

⚠️ **IMPORTANT**: These values are **secrets** - never commit them to Git!

### 4. Deploy to Vercel

1. Push your code to GitHub
2. Import your repo to Vercel
3. Add the following **Environment Variables** in Vercel:
   - `KEYSTATIC_GITHUB_CLIENT_ID`
   - `KEYSTATIC_GITHUB_CLIENT_SECRET`
   - `KEYSTATIC_SECRET`
   - `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`
   - `NEXT_PUBLIC_GITHUB_REPO_OWNER` = `abdullaheminak`
   - `NEXT_PUBLIC_GITHUB_REPO_NAME` = `settravel_uk`

   (Copy the values from your local `.env.local` file)

4. Deploy!

### 5. Update GitHub App with Production URL

After your first Vercel deployment:

1. Go to your GitHub App settings:
   - Visit: `https://github.com/settings/apps/[YOUR_APP_SLUG]`
2. Update **Callback URLs**:
   - Add: `https://your-vercel-domain.vercel.app/api/keystatic/github/oauth/callback`
3. Update **Homepage URL**:
   - Add: `https://your-vercel-domain.vercel.app`
4. Save changes

### 6. Access Keystatic in Production

1. Visit `https://your-vercel-domain.vercel.app/keystatic`
2. Click "Sign in with GitHub"
3. You'll be authenticated via GitHub
4. Only users with **write access** to your GitHub repo can access the CMS

## Security Features

✅ **GitHub OAuth** - Industry-standard authentication
✅ **Repository permissions** - Only GitHub collaborators with write access can edit
✅ **No exposed credentials** - All secrets stored in environment variables
✅ **SEO protection** - `/keystatic` has `noindex, nofollow`
✅ **Version control** - All content changes are Git commits

## How It Works

### Both Development & Production
- Uses **GitHub mode** - content stored in GitHub repo
- Edits made through Keystatic UI create Git commits
- Changes are pushed to your repo automatically
- Vercel auto-deploys on new commits (in production)
- Consistent experience everywhere

## Troubleshooting

### "redirect_uri mismatch" Error

If you get this error after deploying:

1. Go to GitHub App settings: `https://github.com/settings/apps/[YOUR_APP_SLUG]`
2. Add your Vercel URL to **Callback URLs**:
   - `https://your-vercel-domain.vercel.app/api/keystatic/github/oauth/callback`

### Can't Access Keystatic in Production

Make sure:
- You're logged into GitHub
- You have **write access** to the `abdullaheminak/settravel_uk` repository
- All environment variables are set in Vercel

### Content Not Updating

- Check Vercel deployment logs
- Verify all environment variables are set correctly
- Make sure your GitHub App has access to the repo

## Need Help?

- [Keystatic GitHub Mode Docs](https://keystatic.com/docs/github-mode)
- [Keystatic Discord](https://keystatic.com/chat)
