import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    providers: {
      github: {
        client_id: 'dummy',
        redirect_uri: 'dummy'
      }
    }
  });
}
