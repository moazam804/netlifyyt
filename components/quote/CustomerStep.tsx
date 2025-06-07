'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { QuoteData } from '@/app/quote/page';
import { saveQuote } from '@/lib/fileHandler';

interface CustomerStepProps {
  quoteData: QuoteData;
  updateQuoteData: (data: Partial<QuoteData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function CustomerStep({ quoteData, updateQuoteData, nextStep, prevStep }: CustomerStepProps) {
  const [customerName, setCustomerName] = useState(quoteData.customerName);
  const [customerPhone, setCustomerPhone] = useState(quoteData.customerPhone);
  const [customerEmail, setCustomerEmail] = useState(quoteData.customerEmail);
  const [errors, setErrors] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = { name: '', phone: '', email: '' };
    let isValid = true;

    if (!customerName.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!customerPhone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(customerPhone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    if (!customerEmail.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const quoteId = 'RL' + Date.now();
      const quoteDate = new Date().toISOString();
      
      const finalQuoteData = {
        ...quoteData,
        customerName: customerName.trim(),
        customerPhone: customerPhone.replace(/\D/g, ''),
        customerEmail: customerEmail.trim(),
        quoteDate,
        quoteId,
      };

      await saveQuote(finalQuoteData);
      updateQuoteData(finalQuoteData);
      nextStep();
    } catch (error) {
      console.error('Error saving quote:', error);
      alert('Error submitting quote. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    setCustomerPhone(formatted);
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2">
          <User className="h-6 w-6 text-blue-600" />
          <span>Customer Information</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="customerName">Full Name</Label>
            <Input
              id="customerName"
              placeholder="Enter your full name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="customerPhone">Phone Number</Label>
            <Input
              id="customerPhone"
              placeholder="(555) 123-4567"
              value={customerPhone}
              onChange={(e) => handlePhoneChange(e.target.value)}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <Label htmlFor="customerEmail">Email Address</Label>
            <Input
              id="customerEmail"
              type="email"
              placeholder="your.email@example.com"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <Button variant="outline" onClick={prevStep}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button 
            onClick={handleSubmit}
            className="bg-green-600 hover:bg-green-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Quote'}
            <CheckCircle className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}