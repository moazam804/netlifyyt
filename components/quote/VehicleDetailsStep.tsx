'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Car, ArrowRight, ArrowLeft } from 'lucide-react';
import { QuoteData } from '@/app/quote/page';
import { vehicleMakes, getModelsForMake } from '@/lib/vehicleData';

interface VehicleDetailsStepProps {
  quoteData: QuoteData;
  updateQuoteData: (data: Partial<QuoteData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function VehicleDetailsStep({ quoteData, updateQuoteData, nextStep, prevStep }: VehicleDetailsStepProps) {
  const [selectedMake, setSelectedMake] = useState(quoteData.make || '');
  const [selectedModel, setSelectedModel] = useState(quoteData.model || '');

  // Skip this step if not a car
  if (quoteData.vehicleType !== 'car') {
    return null;
  }

  const handleMakeChange = (make: string) => {
    setSelectedMake(make);
    setSelectedModel(''); // Reset model when make changes
  };

  const handleNext = () => {
    if (selectedMake && selectedModel) {
      updateQuoteData({ make: selectedMake, model: selectedModel });
      nextStep();
    }
  };

  const availableModels = selectedMake ? getModelsForMake(selectedMake) : [];

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2">
          <Car className="h-6 w-6 text-blue-600" />
          <span>Vehicle Details</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Make
            </label>
            <Select value={selectedMake} onValueChange={handleMakeChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select vehicle make" />
              </SelectTrigger>
              <SelectContent>
                {vehicleMakes.map((make) => (
                  <SelectItem key={make} value={make}>
                    {make}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Model
            </label>
            <Select 
              value={selectedModel} 
              onValueChange={setSelectedModel}
              disabled={!selectedMake}
            >
              <SelectTrigger>
                <SelectValue placeholder={selectedMake ? "Select vehicle model" : "Select make first"} />
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

        <div className="flex justify-between pt-6">
          <Button variant="outline" onClick={prevStep}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button 
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700"
            disabled={!selectedMake || !selectedModel}
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}