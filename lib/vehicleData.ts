// Vehicle Makes and Models Database for USA Market
export const vehicleData: Record<string, string[]> = {
  'Acura': ['ILX', 'TLX', 'RLX', 'MDX', 'RDX', 'NSX'],
  'Alfa Romeo': ['Giulia', 'Stelvio', '4C'],
  'Audi': ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'TT', 'R8', 'e-tron GT'],
  'BMW': ['2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series', '8 Series', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4', 'i3', 'i4', 'iX'],
  'Buick': ['Encore', 'Encore GX', 'Envision', 'Enclave', 'Regal'],
  'Cadillac': ['ATS', 'CTS', 'CT4', 'CT5', 'CT6', 'XT4', 'XT5', 'XT6', 'Escalade', 'Lyriq'],
  'Chevrolet': ['Spark', 'Sonic', 'Cruze', 'Malibu', 'Impala', 'Camaro', 'Corvette', 'Trax', 'Equinox', 'Blazer', 'Traverse', 'Tahoe', 'Suburban', 'Colorado', 'Silverado 1500', 'Silverado 2500HD', 'Silverado 3500HD'],
  'Chrysler': ['300', 'Pacifica', 'Voyager'],
  'Dodge': ['Charger', 'Challenger', 'Durango', 'Journey', 'Grand Caravan', 'Ram 1500', 'Ram 2500', 'Ram 3500'],
  'Ford': ['Fiesta', 'Focus', 'Fusion', 'Mustang', 'EcoSport', 'Escape', 'Edge', 'Explorer', 'Expedition', 'Ranger', 'F-150', 'F-250', 'F-350', 'Bronco', 'Bronco Sport', 'Maverick', 'Lightning'],
  'Genesis': ['G70', 'G80', 'G90', 'GV60', 'GV70', 'GV80'],
  'GMC': ['Terrain', 'Acadia', 'Yukon', 'Yukon XL', 'Canyon', 'Sierra 1500', 'Sierra 2500HD', 'Sierra 3500HD', 'Hummer EV'],
  'Honda': ['Fit', 'Civic', 'Insight', 'Accord', 'HR-V', 'CR-V', 'Passport', 'Pilot', 'Ridgeline', 'Odyssey'],
  'Hyundai': ['Accent', 'Elantra', 'Sonata', 'Azera', 'Veloster', 'Venue', 'Kona', 'Tucson', 'Santa Fe', 'Palisade', 'Santa Cruz', 'Ioniq 5', 'Ioniq 6'],
  'Infiniti': ['Q50', 'Q60', 'Q70', 'QX50', 'QX60', 'QX80'],
  'Jaguar': ['XE', 'XF', 'XJ', 'F-Type', 'E-Pace', 'F-Pace', 'I-Pace'],
  'Jeep': ['Compass', 'Cherokee', 'Grand Cherokee', 'Wrangler', 'Gladiator', 'Renegade'],
  'Kia': ['Rio', 'Forte', 'Optima', 'Stinger', 'Soul', 'Seltos', 'Sportage', 'Sorento', 'Telluride', 'Carnival', 'EV6'],
  'Land Rover': ['Discovery Sport', 'Discovery', 'Range Rover Evoque', 'Range Rover Velar', 'Range Rover Sport', 'Range Rover', 'Defender'],
  'Lexus': ['IS', 'ES', 'GS', 'LS', 'LC', 'RC', 'UX', 'NX', 'RX', 'GX', 'LX'],
  'Lincoln': ['MKZ', 'Continental', 'Corsair', 'Nautilus', 'Aviator', 'Navigator'],
  'Maserati': ['Ghibli', 'Quattroporte', 'Levante', 'MC20'],
  'Mazda': ['Mazda3', 'Mazda6', 'MX-5 Miata', 'CX-3', 'CX-30', 'CX-5', 'CX-9'],
  'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'S-Class', 'CLA-Class', 'CLS-Class', 'GLA-Class', 'GLB-Class', 'GLC-Class', 'GLE-Class', 'GLS-Class', 'G-Class', 'SL-Class', 'AMG GT', 'EQS', 'EQE'],
  'Mini': ['Cooper', 'Cooper Clubman', 'Cooper Countryman'],
  'Mitsubishi': ['Mirage', 'Lancer', 'Eclipse Cross', 'Outlander', 'Outlander Sport'],
  'Nissan': ['Versa', 'Sentra', 'Altima', 'Maxima', '370Z', 'GT-R', 'Kicks', 'Rogue', 'Murano', 'Pathfinder', 'Armada', 'Frontier', 'Titan', 'Leaf', 'Ariya'],
  'Porsche': ['718 Boxster', '718 Cayman', '911', 'Panamera', 'Cayenne', 'Macan', 'Taycan'],
  'Ram': ['1500', '2500', '3500', 'ProMaster', 'ProMaster City'],
  'Subaru': ['Impreza', 'Legacy', 'Outback', 'WRX', 'BRZ', 'Crosstrek', 'Forester', 'Ascent'],
  'Tesla': ['Model 3', 'Model S', 'Model X', 'Model Y'],
  'Toyota': ['Yaris', 'Corolla', 'Camry', 'Avalon', 'Prius', 'C-HR', 'RAV4', 'Venza', 'Highlander', 'Sequoia', 'Tacoma', 'Tundra', '4Runner', 'Land Cruiser', 'Sienna', 'Supra', '86'],
  'Volkswagen': ['Jetta', 'Passat', 'Arteon', 'Golf', 'Tiguan', 'Atlas', 'Atlas Cross Sport', 'ID.4'],
  'Volvo': ['S60', 'S90', 'XC40', 'XC60', 'XC90', 'C40']
};

export const vehicleMakes = Object.keys(vehicleData).sort();

export function getModelsForMake(make: string): string[] {
  return vehicleData[make] || [];
}

export function getAllVehicles(): { make: string; models: string[] }[] {
  return vehicleMakes.map(make => ({
    make,
    models: getModelsForMake(make)
  }));
}