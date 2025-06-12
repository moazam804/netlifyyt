'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, Home, Phone } from 'lucide-react';
import { QuoteData } from '@/app/quote/page';
import Link from 'next/link';

interface QuoteSuccessProps {
  quoteData: QuoteData;
}

export default function QuoteSuccess({ quoteData }: QuoteSuccessProps) {
  const estimatedPrice = calculateEstimatedPrice(quoteData);

  return (
    <Card>
      <CardHeader className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>
        <CardTitle className="text-2xl text-green-600">Quote Submitted Successfully!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-4">Quote Summary</h3>
          <div className="space-y-2 text-green-700">
            <p><strong>Quote ID:</strong> {quoteData.quoteId}</p>
            <p><strong>From:</strong> {quoteData.pickupCity}, {quoteData.pickupState} ({quoteData.pickupZip})</p>
            <p><strong>To:</strong> {quoteData.deliveryCity}, {quoteData.deliveryState} ({quoteData.deliveryZip})</p>
            <p><strong>Vehicle:</strong> {formatVehicleInfo(quoteData)}</p>
            <p><strong>Customer:</strong> {quoteData.customerName}</p>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">What's Next?</h3>
          <ul className="space-y-2 text-blue-700">
            <li>• Our team will review your quote within 2 hours</li>
            <li>• You'll receive a detailed proposal via email</li>
            <li>• A transport specialist will contact you to finalize details</li>
            <li>• We'll schedule pickup at your convenience</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/" className="flex-1">
            <Button variant="outline" className="w-full">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
         
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>Need immediate assistance? Call us at (555) 123-4567</p>
          <p>Email: info@roadwaylogistics.com</p>
        </div>
      </CardContent>
    </Card>
  );
}

function formatVehicleInfo(quoteData: QuoteData): string {
  if (quoteData.vehicleType === 'car' && quoteData.make && quoteData.model) {
    return `${quoteData.make} ${quoteData.model}`;
  }
  return quoteData.vehicleType.charAt(0).toUpperCase() + quoteData.vehicleType.slice(1).replace('-', ' ');
}

function calculateEstimatedPrice(quoteData: QuoteData): string {
  // Simple distance calculation for estimation
  const basePrice = 800;
  const perMileRate = 0.60;
  
  // Mock distance calculation (in real app, would use actual distance API)
  const estimatedMiles = Math.abs(parseInt(quoteData.pickupZip) - parseInt(quoteData.deliveryZip)) * 10;
  
  let multiplier = 1;
  if (quoteData.vehicleType === 'motorcycle') multiplier = 0.8;
  if (quoteData.vehicleType === 'heavy-equipment') multiplier = 2.5;
  
  const total = (basePrice + (estimatedMiles * perMileRate)) * multiplier;
  
  return Math.round(total).toLocaleString();
}