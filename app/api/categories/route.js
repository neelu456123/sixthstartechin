import { NextResponse } from 'next/server';

import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host:'localhost',
  user: 'root',
  password: '12345#',
  database: 'knowledge_base7',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function GET() {
  try {
    const [categories] = await db.execute(`
      SELECT id, title, slug, description, icon 
      FROM categories
    `);

    return NextResponse.json(categories);
    
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 