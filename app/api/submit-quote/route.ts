import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const quoteData = await request.json();
    
    // Add a unique ID and timestamp
    const quote = {
      id: Date.now().toString(),
      ...quoteData,
      submittedAt: new Date().toISOString()
    };

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }

    // File path for storing quotes
    const filePath = path.join(dataDir, 'quotes.txt');
    
    // Read existing data or create empty array
    let existingQuotes = [];
    try {
      if (existsSync(filePath)) {
        const fileContent = await readFile(filePath, 'utf-8');
        existingQuotes = fileContent.trim() ? fileContent.split('\n').map(line => JSON.parse(line)) : [];
      }
    } catch (error) {
      console.error('Error reading existing quotes:', error);
      existingQuotes = [];
    }

    // Add new quote
    existingQuotes.push(quote);

    // Write back to file (each quote on a new line as JSON)
    const fileContent = existingQuotes.map(q => JSON.stringify(q)).join('\n');
    await writeFile(filePath, fileContent, 'utf-8');

    return NextResponse.json({ success: true, quoteId: quote.id });
  } catch (error) {
    console.error('Error saving quote:', error);
    return NextResponse.json({ error: 'Failed to save quote' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'quotes.txt');
    
    if (!existsSync(filePath)) {
      return NextResponse.json([]);
    }

    const fileContent = await readFile(filePath, 'utf-8');
    const quotes = fileContent.trim() ? fileContent.split('\n').map(line => JSON.parse(line)) : [];
    
    return NextResponse.json(quotes);
  } catch (error) {
    console.error('Error reading quotes:', error);
    return NextResponse.json({ error: 'Failed to read quotes' }, { status: 500 });
  }
}