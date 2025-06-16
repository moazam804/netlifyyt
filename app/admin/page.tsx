'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Truck, Shield, Eye, EyeOff, RefreshCw, Download, Search } from 'lucide-react';
import Link from 'next/link';

interface Quote {
  id: string;
  pickupZip: string;
  pickupCity: string;
  pickupState: string;
  deliveryZip: string;
  deliveryCity: string;
  deliveryState: string;
  vehicleType: string;
  make?: string;
  model?: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  submittedAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [loginError, setLoginError] = useState('');

  // Hardcoded admin credentials (in production, use proper authentication)
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'roadway2024';

  const handleLogin = () => {
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setLoginError('');
      fetchQuotes();
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/submit-quote');
      if (response.ok) {
        const data = await response.json();
        setQuotes(data.reverse()); // Show newest first
      }
    } catch (error) {
      console.error('Error fetching quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setQuotes([]);
  };

  const filteredQuotes = quotes.filter(quote =>
    quote.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.customerEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.pickupCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.deliveryCity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    quote.vehicleType.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (quote.make && quote.make.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (quote.model && quote.model.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const exportToCSV = () => {
    const headers = ['ID', 'Customer Name', 'Email', 'Phone', 'Pickup Location', 'Delivery Location', 'Vehicle Type', 'Make', 'Model', 'Submitted At'];
    const csvContent = [
      headers.join(','),
      ...filteredQuotes.map(quote => [
        quote.id,
        `"${quote.customerName}"`,
        quote.customerEmail,
        quote.customerPhone,
        `"${quote.pickupCity}, ${quote.pickupState} ${quote.pickupZip}"`,
        `"${quote.deliveryCity}, ${quote.deliveryState} ${quote.deliveryZip}"`,
        quote.vehicleType,
        quote.make || '',
        quote.model || '',
        new Date(quote.submittedAt).toLocaleString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `roadway-quotes-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <Card className="w-full max-w-md shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>Access the Roadway Logistics booking management system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
                className="mt-2 h-12"
                onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="h-12 pr-10"
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-12 px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
            </div>
            {loginError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-700 text-sm">{loginError}</p>
              </div>
            )}
            <Button onClick={handleLogin} className="w-full h-12 text-lg font-semibold" size="lg">
              Login
            </Button>
            <div className="text-center pt-4">
              <Link href="/">
                <Button variant="outline">Back to Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Truck className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Roadway Logistics LLC</span>
            </Link>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, Admin</span>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Management</h1>
          <p className="text-gray-600">Manage and view all transportation quote requests</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{quotes.length}</p>
                  <p className="text-gray-600">Total Quotes</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-green-600">
                    {quotes.filter(q => new Date(q.submittedAt) > new Date(Date.now() - 24*60*60*1000)).length}
                  </p>
                  <p className="text-gray-600">Last 24 Hours</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-orange-600">
                    {quotes.filter(q => q.vehicleType === 'car').length}
                  </p>
                  <p className="text-gray-600">Car Shipments</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search quotes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={fetchQuotes} disabled={loading} variant="outline">
                  <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
                <Button onClick={exportToCSV} disabled={filteredQuotes.length === 0}>
                  <Download className="w-4 h-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quotes Table */}
        <Card>
          <CardHeader>
            <CardTitle>Transportation Quotes ({filteredQuotes.length})</CardTitle>
            <CardDescription>
              All quote requests submitted through the website
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8">
                <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
                <p>Loading quotes...</p>
              </div>
            ) : filteredQuotes.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">No quotes found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Quote ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Route</TableHead>
                      <TableHead>Vehicle</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredQuotes.map((quote) => (
                      <TableRow key={quote.id}>
                        <TableCell className="font-mono text-sm">
                          RL-{quote.id.slice(-8)}
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{quote.customerName}</p>
                            <p className="text-sm text-gray-500">{quote.customerEmail}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <p className="text-sm">{quote.customerPhone}</p>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p><strong>From:</strong> {quote.pickupCity}, {quote.pickupState} {quote.pickupZip}</p>
                            <p><strong>To:</strong> {quote.deliveryCity}, {quote.deliveryState} {quote.deliveryZip}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <Badge variant="outline" className="mb-1 capitalize">
                              {quote.vehicleType}
                            </Badge>
                            {quote.make && quote.model && (
                              <p className="text-sm text-gray-600">{quote.make} {quote.model}</p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <p className="text-sm">
                            {new Date(quote.submittedAt).toLocaleDateString()}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(quote.submittedAt).toLocaleTimeString()}
                          </p>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant="secondary" 
                            className="bg-yellow-100 text-yellow-800 border-yellow-200"
                          >
                            Pending
                          </Badge>
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