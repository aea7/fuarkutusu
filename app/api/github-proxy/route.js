import { NextResponse } from 'next/server';

export async function GET(request) {
  return handleGitHubRequest(request);
}

export async function POST(request) {
  return handleGitHubRequest(request);
}

export async function PUT(request) {
  return handleGitHubRequest(request);
}

export async function DELETE(request) {
  return handleGitHubRequest(request);
}

export async function PATCH(request) {
  return handleGitHubRequest(request);
}

async function handleGitHubRequest(request) {
  const githubToken = process.env.GITHUB_PAT;

  if (!githubToken) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    );
  }

  try {
    const url = new URL(request.url);
    const path = url.searchParams.get('path') || '';
    const githubApiUrl = `https://api.github.com${path}`;

    // Get the request body if it exists
    let body = null;
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      body = await request.text();
    }

    // Forward the request to GitHub API with authentication
    const githubResponse = await fetch(githubApiUrl, {
      method: request.method,
      headers: {
        'Authorization': `token ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: body || undefined,
    });

    const data = await githubResponse.text();

    return new NextResponse(data, {
      status: githubResponse.status,
      headers: {
        'Content-Type': githubResponse.headers.get('content-type') || 'application/json',
      },
    });
  } catch (error) {
    console.error('GitHub proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to proxy GitHub request' },
      { status: 500 }
    );
  }
}
