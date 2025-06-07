'use client';

import { QuoteData } from '@/app/quote/page';

// Since we're using Next.js with static export, we'll use localStorage for persistence
// In a real application, this would connect to a backend API with actual file operations

const QUOTES_STORAGE_KEY = 'roadway_logistics_quotes';

export async function saveQuote(quoteData: QuoteData): Promise<void> {
  try {
    // Get existing quotes
    const existingQuotes = await getQuotes();
    
    // Add new quote
    const updatedQuotes = [...existingQuotes, quoteData];
    
    // Save to localStorage
    localStorage.setItem(QUOTES_STORAGE_KEY, JSON.stringify(updatedQuotes));
    
    // Simulate file writing delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    console.log('Quote saved successfully:', quoteData.quoteId);
  } catch (error) {
    console.error('Error saving quote:', error);
    throw new Error('Failed to save quote');
  }
}

export async function getQuotes(): Promise<QuoteData[]> {
  try {
    // Simulate file reading delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const quotesData = localStorage.getItem(QUOTES_STORAGE_KEY);
    
    if (!quotesData) {
      return [];
    }
    
    const quotes = JSON.parse(quotesData);
    
    // Sort by date (newest first)
    return quotes.sort((a: QuoteData, b: QuoteData) => 
      new Date(b.quoteDate).getTime() - new Date(a.quoteDate).getTime()
    );
  } catch (error) {
    console.error('Error reading quotes:', error);
    return [];
  }
}

export async function deleteQuote(quoteId: string): Promise<void> {
  try {
    const existingQuotes = await getQuotes();
    const updatedQuotes = existingQuotes.filter(quote => quote.quoteId !== quoteId);
    
    localStorage.setItem(QUOTES_STORAGE_KEY, JSON.stringify(updatedQuotes));
    
    // Simulate file writing delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    console.log('Quote deleted successfully:', quoteId);
  } catch (error) {
    console.error('Error deleting quote:', error);
    throw new Error('Failed to delete quote');
  }
}

export async function exportQuotesToFile(): Promise<string> {
  try {
    const quotes = await getQuotes();
    
    // Create CSV content
    const headers = ['Quote ID', 'Date', 'Customer Name', 'Phone', 'Email', 'Pickup Location', 'Delivery Location', 'Vehicle Type', 'Make', 'Model'];
    const csvContent = [
      headers.join(','),
      ...quotes.map(quote => [
        quote.quoteId,
        new Date(quote.quoteDate).toLocaleDateString(),
        `"${quote.customerName}"`,
        quote.customerPhone,
        quote.customerEmail,
        `"${quote.pickupCity}, ${quote.pickupState} (${quote.pickupZip})"`,
        `"${quote.deliveryCity}, ${quote.deliveryState} (${quote.deliveryZip})"`,
        quote.vehicleType,
        quote.make || '',
        quote.model || ''
      ].join(','))
    ].join('\n');
    
    return csvContent;
  } catch (error) {
    console.error('Error exporting quotes:', error);
    throw new Error('Failed to export quotes');
  }
}

// File handling simulation for demonstration
export function simulateFileOperations() {
  console.log('=== File Handling Operations Demo ===');
  console.log('1. Reading quotes from storage...');
  console.log('2. Processing quote data...');
  console.log('3. Writing updated quotes to storage...');
  console.log('4. File operations completed successfully');
  console.log('=====================================');
}

// Initialize demo data if localStorage is empty
export function initializeDemoData(): void {
  const existingQuotes = localStorage.getItem(QUOTES_STORAGE_KEY);
  
  if (!existingQuotes) {
    const demoQuotes: QuoteData[] = [
      {
        quoteId: 'RL1703123456',
        quoteDate: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        pickupZip: '10001',
        pickupCity: 'New York',
        pickupState: 'NY',
        deliveryZip: '90210',
        deliveryCity: 'Beverly Hills',
        deliveryState: 'CA',
        vehicleType: 'car',
        make: 'BMW',
        model: '3 Series',
        customerName: 'John Smith',
        customerPhone: '5551234567',
        customerEmail: 'john.smith@email.com'
      },
      {
        quoteId: 'RL1703123457',
        quoteDate: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        pickupZip: '75201',
        pickupCity: 'Dallas',
        pickupState: 'TX',
        deliveryZip: '33101',
        deliveryCity: 'Miami',
        deliveryState: 'FL',
        vehicleType: 'motorcycle',
        customerName: 'Sarah Johnson',
        customerPhone: '5559876543',
        customerEmail: 'sarah.j@email.com'
      }
    ];
    
    localStorage.setItem(QUOTES_STORAGE_KEY, JSON.stringify(demoQuotes));
    console.log('Demo data initialized');
  }
}