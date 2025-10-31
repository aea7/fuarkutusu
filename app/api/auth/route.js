import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const provider = searchParams.get('provider');

  if (provider !== 'github') {
    return NextResponse.json(
      { error: 'Unsupported provider' },
      { status: 400 }
    );
  }

  const clientId = process.env.OAUTH_CLIENT_ID;
  const redirectUri = `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`;

  if (!clientId) {
    return NextResponse.json(
      { error: 'OAuth not configured' },
      { status: 500 }
    );
  }

  // Redirect to GitHub OAuth
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=repo,user`;

  return NextResponse.redirect(githubAuthUrl);
}
