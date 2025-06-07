'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Truck, ArrowRight, ArrowLeft, Car, Bike, Wrench } from 'lucide-react';
import { QuoteData } from '@/app/quote/page';

interface VehicleStepProps {
  quoteData: QuoteData;
  updateQuoteData: (data: Partial<QuoteData>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const vehicleTypes = [
  { value: 'car', label: 'Car', icon: Car, description: 'Sedans, SUVs, trucks, and other passenger vehicles' },
  { value: 'motorcycle', label: 'Motorcycle', icon: Bike, description: 'Motorcycles, scooters, and ATVs' },
  { value: 'heavy-equipment', label: 'Heavy Equipment', icon: Wrench, description: 'Construction equipment, tractors, and heavy machinery' },
];

export default function VehicleStep({ quoteData, updateQuoteData, nextStep, prevStep }: VehicleStepProps) {
  const [selectedVehicle, setSelectedVehicle] = useState(quoteData.vehicleType);

  const handleNext = () => {
    if (selectedVehicle) {
      updateQuoteData({ vehicleType: selectedVehicle });
      
      // Skip vehicle details for motorcycle and heavy equipment
      if (selectedVehicle === 'motorcycle' || selectedVehicle === 'heavy-equipment') {
        updateQuoteData({ make: '', model: '' });
        // Skip to customer step (step 4)
        nextStep(); // Go to step 3
        setTimeout(nextStep, 0); // Then immediately go to step 4
      } else {
        nextStep();
      }
    }
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center space-x-2">
          <Truck className="h-6 w-6 text-blue-600" />
          <span>Select Vehicle Type</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          {vehicleTypes.map((vehicle) => {
            const Icon = vehicle.icon;
            return (
              <div
                key={vehicle.value}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:border-blue-300 ${
                  selectedVehicle === vehicle.value
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
                onClick={() => setSelectedVehicle(vehicle.value)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    selectedVehicle === vehicle.value ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{vehicle.label}</h3>
                    <p className="text-gray-600">{vehicle.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between pt-6">
          <Button variant="outline" onClick={prevStep}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button 
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700"
            disabled={!selectedVehicle}
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}