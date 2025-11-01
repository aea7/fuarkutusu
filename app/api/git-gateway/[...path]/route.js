import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  return handleRequest(request, params, 'GET');
}

export async function POST(request, { params }) {
  return handleRequest(request, params, 'POST');
}

export async function PUT(request, { params }) {
  return handleRequest(request, params, 'PUT');
}

export async function PATCH(request, { params }) {
  return handleRequest(request, params, 'PATCH');
}

export async function DELETE(request, { params }) {
  return handleRequest(request, params, 'DELETE');
}

async function handleRequest(request, params, method) {
  const githubToken = process.env.GITHUB_PAT;

  if (!githubToken) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    );
  }

  try {
    const path = params.path.join('/');

    // Handle GitHub proxy requests
    if (path.startsWith('github/')) {
      const githubPath = path.replace('github/', '');
      const githubApiUrl = `https://api.github.com/${githubPath}`;

      let body = null;
      if (method !== 'GET' && method !== 'HEAD') {
        const text = await request.text();
        if (text) body = text;
      }

      const githubResponse = await fetch(githubApiUrl, {
        method: method,
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
          'User-Agent': 'Decap-CMS'
        },
        body: body || undefined,
      });

      const responseText = await githubResponse.text();

      return new NextResponse(responseText, {
        status: githubResponse.status,
        headers: {
          'Content-Type': githubResponse.headers.get('content-type') || 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    return NextResponse.json({ error: 'Invalid path' }, { status: 404 });
  } catch (error) {
    console.error('Git Gateway error:', error);
    return NextResponse.json(
      { error: 'Gateway error: ' + error.message },
      { status: 500 }
    );
  }
}
