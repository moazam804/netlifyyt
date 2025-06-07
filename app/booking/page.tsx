'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Shield, Eye, Trash2, Download, RefreshCw } from 'lucide-react';
import { QuoteData } from '@/app/quote/page';
import { getQuotes, deleteQuote } from '@/lib/fileHandler';

// Admin credentials (in a real app, this would be more secure)
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'roadway2024'
};

export default function BookingPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [quotes, setQuotes] = useState<QuoteData[]>([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAuthenticated(true);
      setLoginError('');
      loadQuotes();
    } else {
      setLoginError('Invalid credentials');
    }
  };

  const loadQuotes = async () => {
    setLoading(true);
    try {
      const quotesData = await getQuotes();
      setQuotes(quotesData);
    } catch (error) {
      console.error('Error loading quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteQuote = async (quoteId: string) => {
    if (confirm('Are you sure you want to delete this quote?')) {
      try {
        await deleteQuote(quoteId);
        setQuotes(quotes.filter(q => q.quoteId !== quoteId));
      } catch (error) {
        console.error('Error deleting quote:', error);
        alert('Error deleting quote');
      }
    }
  };

  const exportToCSV = () => {
    const headers = ['Quote ID', 'Date', 'Customer Name', 'Phone', 'Email', 'From', 'To', 'Vehicle Type', 'Make', 'Model'];
    const csvContent = [
      headers.join(','),
      ...quotes.map(quote => [
        quote.quoteId,
        new Date(quote.quoteDate).toLocaleDateString(),
        quote.customerName,
        quote.customerPhone,
        quote.customerEmail,
        `"${quote.pickupCity}, ${quote.pickupState} (${quote.pickupZip})"`,
        `"${quote.deliveryCity}, ${quote.deliveryState} (${quote.deliveryZip})"`,
        quote.vehicleType,
        quote.make || '',
        quote.model || ''
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `roadway-logistics-quotes-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full">
                  <Shield className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <CardTitle className="text-2xl">Admin Access Required</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
              </div>
              {loginError && (
                <p className="text-red-500 text-sm">{loginError}</p>
              )}
              <Button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700">
                Login
              </Button>
              
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Booking Management</h1>
            <p className="text-gray-600">Manage and view all transportation quotes</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={loadQuotes} disabled={loading}>
              <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button onClick={exportToCSV} className="bg-green-600 hover:bg-green-700">
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setIsAuthenticated(false)}
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              Logout
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-5 w-5" />
              <span>Transportation Quotes ({quotes.length})</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-2 text-gray-600">Loading quotes...</p>
              </div>
            ) : quotes.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">No quotes found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Quote ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Route</TableHead>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quotes.map((quote) => (
                      <TableRow key={quote.quoteId}>
                        <TableCell className="font-medium">{quote.quoteId}</TableCell>
                        <TableCell>{new Date(quote.quoteDate).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{quote.customerName}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{quote.customerPhone}</p>
                            <p className="text-gray-600">{quote.customerEmail}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p className="font-medium">From: {quote.pickupCity}, {quote.pickupState}</p>
                            <p className="text-gray-600">To: {quote.deliveryCity}, {quote.deliveryState}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p className="font-medium capitalize">{quote.vehicleType.replace('-', ' ')}</p>
                            {quote.make && quote.model && (
                              <p className="text-gray-600">{quote.make} {quote.model}</p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteQuote(quote.quoteId)}
                            className="text-red-600 border-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}