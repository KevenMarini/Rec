import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, college, department, yearOfStudy, otherYear, whatsapp, email, description } = await request.json();
    
    const finalYear = yearOfStudy === 'Other' ? otherYear : yearOfStudy;

    // Create table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS applications (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        whatsapp VARCHAR(50) NOT NULL,
        email VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Ensure new columns exist (for existing tables)
    try {
      await sql`ALTER TABLE applications ADD COLUMN IF NOT EXISTS college VARCHAR(255);`;
      await sql`ALTER TABLE applications ADD COLUMN IF NOT EXISTS department VARCHAR(255);`;
      await sql`ALTER TABLE applications ADD COLUMN IF NOT EXISTS year_of_study VARCHAR(255);`;
    } catch (e) {
      console.log('Columns already exist or error adding them', e);
    }

    // Insert new application
    await sql`
      INSERT INTO applications (first_name, last_name, college, department, year_of_study, whatsapp, email, description)
      VALUES (${firstName}, ${lastName}, ${college || ''}, ${department || ''}, ${finalYear || ''}, ${whatsapp}, ${email}, ${description});
    `;

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
