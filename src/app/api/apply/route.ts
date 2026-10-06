import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real application, you would save this to a database (like Vercel Postgres, Supabase, MongoDB)
    // or send an email. For now, we will just log it.
    console.log('New Application Received:', body);

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { message: 'Error submitting application' },
      { status: 500 }
    );
  }
}
