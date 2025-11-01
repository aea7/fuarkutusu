import { NextResponse } from 'next/server';

export async function GET(request) {
  const githubToken = process.env.GITHUB_PAT;

  if (!githubToken) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    );
  }

  return NextResponse.json({ token: githubToken });
}
