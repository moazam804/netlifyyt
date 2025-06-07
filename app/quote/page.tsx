'use client';

import { useState } from 'react';
import LocationStep from '@/components/quote/LocationStep';
import VehicleStep from '@/components/quote/VehicleStep';
import VehicleDetailsStep from '@/components/quote/VehicleDetailsStep';
import CustomerStep from '@/components/quote/CustomerStep';
import QuoteSuccess from '@/components/quote/QuoteSuccess';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, MapPin, Car, User, CheckCircle } from 'lucide-react';

export interface QuoteData {
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
  quoteDate: string;
  quoteId: string;
}

const steps = [
  { id: 1, name: 'Location', icon: MapPin },
  { id: 2, name: 'Vehicle Type', icon: Truck },
  { id: 3, name: 'Vehicle Details', icon: Car },
  { id: 4, name: 'Customer Info', icon: User },
  { id: 5, name: 'Complete', icon: CheckCircle },
];

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quoteData, setQuoteData] = useState<QuoteData>({
    pickupZip: '',
    pickupCity: '',
    pickupState: '',
    deliveryZip: '',
    deliveryCity: '',
    deliveryState: '',
    vehicleType: '',
    make: '',
    model: '',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    quoteDate: '',
    quoteId: '',
  });

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const updateQuoteData = (data: Partial<QuoteData>) => {
    setQuoteData(prev => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <LocationStep quoteData={quoteData} updateQuoteData={updateQuoteData} nextStep={nextStep} />;
      case 2:
        return <VehicleStep quoteData={quoteData} updateQuoteData={updateQuoteData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <VehicleDetailsStep quoteData={quoteData} updateQuoteData={updateQuoteData} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <CustomerStep quoteData={quoteData} updateQuoteData={updateQuoteData} nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <QuoteSuccess quoteData={quoteData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Get Your Transportation Quote</h1>
          <p className="text-gray-600">Complete the form below for an instant quote</p>
        </div>

        {/* Progress Steps */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = step.id === currentStep;
                const isCompleted = step.id < currentStep;
                
                return (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      isCompleted ? 'bg-green-500 border-green-500 text-white' :
                      isActive ? 'bg-blue-600 border-blue-600 text-white' :
                      'bg-white border-gray-300 text-gray-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="ml-2 hidden sm:block">
                      <p className={`text-sm font-medium ${
                        isActive ? 'text-blue-600' : isCompleted ? 'text-green-500' : 'text-gray-400'
                      }`}>
                        {step.name}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-16 h-0.5 mx-4 ${
                        step.id < currentStep ? 'bg-green-500' : 'bg-gray-300'
                      }`} />
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Step Content */}
        {renderStep()}
      </div>
    </div>
  );
}