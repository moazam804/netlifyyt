'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, MapPin, Car, User, CheckCircle, Truck } from 'lucide-react';
import Link from 'next/link';
import { zipCodes } from '@/lib/zipCodes';
import { vehicleMakes } from '@/lib/vehicleMakes';

interface QuoteData {
  pickupZip: string;
  pickupCity: string;
  pickupState: string;
  deliveryZip: string;
  deliveryCity: string;
  deliveryState: string;
  vehicleType: string;
  make: string;
  model: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
}

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
    customerEmail: ''
  });

  const [availableModels, setAvailableModels] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const steps = [
    { number: 1, title: 'Locations', icon: MapPin },
    { number: 2, title: 'Vehicle Type', icon: Truck },
    { number: 3, title: 'Vehicle Details', icon: Car },
    { number: 4, title: 'Contact Info', icon: User },
    { number: 5, title: 'Summary', icon: CheckCircle }
  ];

  const handleZipChange = (zipCode: string, type: 'pickup' | 'delivery') => {
    const location = zipCodes.find(z => z.zip === zipCode);
    if (location) {
      if (type === 'pickup') {
        setQuoteData(prev => ({
          ...prev,
          pickupZip: zipCode,
          pickupCity: location.city,
          pickupState: location.state
        }));
      } else {
        setQuoteData(prev => ({
          ...prev,
          deliveryZip: zipCode,
          deliveryCity: location.city,
          deliveryState: location.state
        }));
      }
    }
  };

  const handleMakeChange = (make: string) => {
    const makeData = vehicleMakes.find(m => m.make === make);
    setAvailableModels(makeData ? makeData.models : []);
    setQuoteData(prev => ({ ...prev, make, model: '' }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...quoteData,
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setCurrentStep(steps.length + 1);
      } else {
        alert('Error submitting quote. Please try again.');
      }
    } catch (error) {
      alert('Error submitting quote. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return quoteData.pickupZip && quoteData.deliveryZip && quoteData.pickupCity && quoteData.deliveryCity;
      case 2:
        return quoteData.vehicleType;
      case 3:
        return quoteData.vehicleType !== 'car' || (quoteData.make && quoteData.model);
      case 4:
        return quoteData.customerName && quoteData.customerPhone && quoteData.customerEmail;
      default:
        return true;
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-3xl text-green-600">Quote Submitted Successfully!</CardTitle>
            <CardDescription className="text-lg">
              Thank you for choosing Roadway Logistics LLC. We'll contact you within 24 hours with your personalized quote.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-700 font-medium">
                Quote Reference: RL-{Date.now().toString().slice(-8)}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" size="lg">Return Home</Button>
              </Link>
              <Button size="lg" onClick={() => window.location.reload()}>
                Get Another Quote
              </Button>
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
            <Link href="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                  currentStep >= step.number 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <span className={`text-xs mt-2 font-medium ${
                  currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          <Progress value={(currentStep / steps.length) * 100} className="h-2" />
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Get Your Free Quote</CardTitle>
            <CardDescription className="text-center">
              Step {currentStep} of {steps.length}: {steps[currentStep - 1]?.title}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            {/* Step 1: Locations */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Where are you shipping from and to?</h3>
                  <p className="text-gray-600">Enter ZIP codes for pickup and delivery locations</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Label htmlFor="pickupZip" className="text-lg font-medium">Pickup Location</Label>
                    <div>
                      <Input
                        id="pickupZip"
                        type="text"
                        placeholder="Enter ZIP code"
                        value={quoteData.pickupZip}
                        onChange={(e) => handleZipChange(e.target.value, 'pickup')}
                        className="h-12 text-lg"
                      />
                      {quoteData.pickupCity && (
                        <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-blue-700 font-medium">
                            {quoteData.pickupCity}, {quoteData.pickupState}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label htmlFor="deliveryZip" className="text-lg font-medium">Delivery Location</Label>
                    <div>
                      <Input
                        id="deliveryZip"
                        type="text"
                        placeholder="Enter ZIP code"
                        value={quoteData.deliveryZip}
                        onChange={(e) => handleZipChange(e.target.value, 'delivery')}
                        className="h-12 text-lg"
                      />
                      {quoteData.deliveryCity && (
                        <div className="mt-2 p-3 bg-green-50 rounded-lg border border-green-200">
                          <p className="text-green-700 font-medium">
                            {quoteData.deliveryCity}, {quoteData.deliveryState}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Vehicle Type */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">What type of vehicle are you shipping?</h3>
                  <p className="text-gray-600">Select the category that best describes your vehicle</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { value: 'car', label: 'Car', description: 'Sedans, SUVs, Trucks' },
                    { value: 'motorcycle', label: 'Motorcycle', description: 'All motorcycle types' },
                    { value: 'heavy', label: 'Heavy Equipment', description: 'Construction, Farm equipment' }
                  ].map((option) => (
                    <div
                      key={option.value}
                      className={`border-2 rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg ${
                        quoteData.vehicleType === option.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setQuoteData(prev => ({ ...prev, vehicleType: option.value }))}
                    >
                      <h4 className="font-semibold text-lg mb-2">{option.label}</h4>
                      <p className="text-gray-600 text-sm">{option.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Vehicle Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Vehicle Details</h3>
                  <p className="text-gray-600">
                    {quoteData.vehicleType === 'car' 
                      ? 'Tell us about your vehicle make and model'
                      : 'Vehicle type selected - no additional details needed'
                    }
                  </p>
                </div>

                {quoteData.vehicleType === 'car' ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="make" className="text-lg font-medium">Make</Label>
                      <Select value={quoteData.make} onValueChange={handleMakeChange}>
                        <SelectTrigger className="h-12 text-lg">
                          <SelectValue placeholder="Select vehicle make" />
                        </SelectTrigger>
                        <SelectContent>
                          {vehicleMakes.map((make) => (
                            <SelectItem key={make.make} value={make.make}>
                              {make.make}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="model" className="text-lg font-medium">Model</Label>
                      <Select 
                        value={quoteData.model} 
                        onValueChange={(value) => setQuoteData(prev => ({ ...prev, model: value }))}
                        disabled={!quoteData.make}
                      >
                        <SelectTrigger className="h-12 text-lg">
                          <SelectValue placeholder="Select vehicle model" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableModels.map((model) => (
                            <SelectItem key={model} value={model}>
                              {model}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-8 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-green-700 font-medium text-lg">
                      {quoteData.vehicleType === 'motorcycle' ? 'Motorcycle' : 'Heavy Equipment'} selected
                    </p>
                    <p className="text-green-600 mt-2">Ready to proceed to contact information</p>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                  <p className="text-gray-600">We'll use this information to send you your quote</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="customerName" className="text-lg font-medium">Full Name</Label>
                    <Input
                      id="customerName"
                      type="text"
                      placeholder="Enter your full name"
                      value={quoteData.customerName}
                      onChange={(e) => setQuoteData(prev => ({ ...prev, customerName: e.target.value }))}
                      className="h-12 text-lg mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="customerPhone" className="text-lg font-medium">Phone Number</Label>
                    <Input
                      id="customerPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={quoteData.customerPhone}
                      onChange={(e) => setQuoteData(prev => ({ ...prev, customerPhone: e.target.value }))}
                      className="h-12 text-lg mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="customerEmail" className="text-lg font-medium">Email Address</Label>
                    <Input
                      id="customerEmail"
                      type="email"
                      placeholder="Enter your email address"
                      value={quoteData.customerEmail}
                      onChange={(e) => setQuoteData(prev => ({ ...prev, customerEmail: e.target.value }))}
                      className="h-12 text-lg mt-2"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Summary */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">Review Your Quote Request</h3>
                  <p className="text-gray-600">Please review the information below before submitting</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-700 mb-2">Pickup Location</h4>
                      <p className="text-blue-600">
                        {quoteData.pickupCity}, {quoteData.pickupState} {quoteData.pickupZip}
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-700 mb-2">Delivery Location</h4>
                      <p className="text-green-600">
                        {quoteData.deliveryCity}, {quoteData.deliveryState} {quoteData.deliveryZip}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-700 mb-2">Vehicle Information</h4>
                      <p className="text-orange-600 capitalize">
                        {quoteData.vehicleType}
                        {quoteData.make && quoteData.model && ` - ${quoteData.make} ${quoteData.model}`}
                      </p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-700 mb-2">Contact Information</h4>
                      <div className="text-purple-600 space-y-1">
                        <p>{quoteData.customerName}</p>
                        <p>{quoteData.customerPhone}</p>
                        <p>{quoteData.customerEmail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>

              {currentStep < steps.length ? (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !canProceed()}
                  className="flex items-center space-x-2 bg-green-600 hover:bg-green-700"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote'}
                  <CheckCircle className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}