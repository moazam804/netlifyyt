'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, ArrowRight } from 'lucide-react';
import { QuoteData } from '@/app/quote/page';
import { getLocationFromZip } from '@/lib/zipCodes';

interface LocationStepProps {
  quoteData: QuoteData;
  updateQuoteData: (data: Partial<QuoteData>) => void;
  nextStep: () => void;
}

export default function LocationStep({ quoteData, updateQuoteData, nextStep }: LocationStepProps) {
  const [pickupZip, setPickupZip] = useState(quoteData.pickupZip);
  const [deliveryZip, setDeliveryZip] = useState(quoteData.deliveryZip);
  const [pickupLocation, setPickupLocation] = useState({ city: quoteData.pickupCity, state: quoteData.pickupState });
  const [deliveryLocation, setDeliveryLocation] = useState({ city: quoteData.deliveryCity, state: quoteData.deliveryState });
  const [errors, setErrors] = useState({ pickup: '', delivery: '' });

  const handlePickupZipChange = (zip: string) => {
    setPickupZip(zip);
    if (zip.length === 5) {
      const location = getLocationFromZip(zip);
      if (location) {
        setPickupLocation(location);
        setErrors(prev => ({ ...prev, pickup: '' }));
      } else {
        setPickupLocation({ city: '', state: '' });
        setErrors(prev => ({ ...prev, pickup: 'Invalid ZIP code' }));
      }
    } else {
      setPickupLocation({ city: '', state: '' });
      setErrors(prev => ({ ...prev, pickup: '' }));
    }
  };

  const handleDeliveryZipChange = (zip: string) => {
    setDeliveryZip(zip);
    if (zip.length === 5) {
      const location = getLocationFromZip(zip);
      if (location) {
        setDeliveryLocation(location);
        setErrors(prev => ({ ...prev, delivery: '' }));
      } else {
        setDeliveryLocation({ city: '', state: '' });
        setErrors(prev => ({ ...prev, delivery: 'Invalid ZIP code' }));
      }
    } else {
      setDeliveryLocation({ city: '', state: '' });
      setErrors(prev => ({ ...prev, delivery: '' }));
    }
  };

  const handleNext = () => {
    if (pickupZip.length === 5 && deliveryZip.length === 5 && pickupLocation.city && deliveryLocation.city) {
      updateQuoteData({
        pickupZip,
        pickupCity: pickupLocation.city,
        pickupState: pickupLocation.state,
        deliveryZip,
        deliveryCity: deliveryLocation.city,
        deliveryState: deliveryLocation.state,
      });
      nextStep();
    } else {
      if (!pickupZip || pickupZip.length !== 5) {
        setErrors(prev => ({ ...prev, pickup: 'Please enter a valid 5-digit ZIP code' }));
      }
      if (!deliveryZip || deliveryZip.length !== 5) {
        setErrors(prev => ({ ...prev, delivery: 'Please enter a valid 5-digit ZIP code' }));
      }
    }
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2">
          <MapPin className="h-6 w-6 text-blue-600" />
          <span>Pickup & Delivery Locations</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Pickup Location */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Pickup Location</h3>
          <div className="space-y-2">
            <Label htmlFor="pickupZip">ZIP Code</Label>
            <Input
              id="pickupZip"
              placeholder="Enter pickup ZIP code"
              value={pickupZip}
              onChange={(e) => handlePickupZipChange(e.target.value.replace(/\D/g, '').slice(0, 5))}
              className={errors.pickup ? 'border-red-500' : ''}
            />
            {errors.pickup && <p className="text-red-500 text-sm">{errors.pickup}</p>}
            {pickupLocation.city && (
              <div className="bg-green-50 p-3 rounded-md">
                <p className="text-green-800">
                  <strong>{pickupLocation.city}, {pickupLocation.state}</strong>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Delivery Location */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Delivery Location</h3>
          <div className="space-y-2">
            <Label htmlFor="deliveryZip">ZIP Code</Label>
            <Input
              id="deliveryZip"
              placeholder="Enter delivery ZIP code"
              value={deliveryZip}
              onChange={(e) => handleDeliveryZipChange(e.target.value.replace(/\D/g, '').slice(0, 5))}
              className={errors.delivery ? 'border-red-500' : ''}
            />
            {errors.delivery && <p className="text-red-500 text-sm">{errors.delivery}</p>}
            {deliveryLocation.city && (
              <div className="bg-green-50 p-3 rounded-md">
                <p className="text-green-800">
                  <strong>{deliveryLocation.city}, {deliveryLocation.state}</strong>
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end pt-6">
          <Button 
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700"
            disabled={!pickupLocation.city || !deliveryLocation.city}
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}