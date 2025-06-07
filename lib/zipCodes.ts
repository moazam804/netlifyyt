// ZIP Code database with cities and states
export const zipCodeDatabase: Record<string, { city: string; state: string }> = {
  // New York
  '10001': { city: 'New York', state: 'NY' },
  '10002': { city: 'New York', state: 'NY' },
  '10003': { city: 'New York', state: 'NY' },
  '10004': { city: 'New York', state: 'NY' },
  '10005': { city: 'New York', state: 'NY' },
  '11201': { city: 'Brooklyn', state: 'NY' },
  '11202': { city: 'Brooklyn', state: 'NY' },
  '11203': { city: 'Brooklyn', state: 'NY' },
  '10451': { city: 'Bronx', state: 'NY' },
  '10452': { city: 'Bronx', state: 'NY' },
  
  // California
  '90210': { city: 'Beverly Hills', state: 'CA' },
  '90211': { city: 'Beverly Hills', state: 'CA' },
  '90001': { city: 'Los Angeles', state: 'CA' },
  '90002': { city: 'Los Angeles', state: 'CA' },
  '90003': { city: 'Los Angeles', state: 'CA' },
  '94102': { city: 'San Francisco', state: 'CA' },
  '94103': { city: 'San Francisco', state: 'CA' },
  '94104': { city: 'San Francisco', state: 'CA' },
  '95101': { city: 'San Jose', state: 'CA' },
  '95102': { city: 'San Jose', state: 'CA' },
  
  // Texas
  '75201': { city: 'Dallas', state: 'TX' },
  '75202': { city: 'Dallas', state: 'TX' },
  '75203': { city: 'Dallas', state: 'TX' },
  '77001': { city: 'Houston', state: 'TX' },
  '77002': { city: 'Houston', state: 'TX' },
  '77003': { city: 'Houston', state: 'TX' },
  '78701': { city: 'Austin', state: 'TX' },
  '78702': { city: 'Austin', state: 'TX' },
  '78703': { city: 'Austin', state: 'TX' },
  
  // Florida
  '33101': { city: 'Miami', state: 'FL' },
  '33102': { city: 'Miami', state: 'FL' },
  '33103': { city: 'Miami', state: 'FL' },
  '33104': { city: 'Miami', state: 'FL' },
  '32801': { city: 'Orlando', state: 'FL' },
  '32802': { city: 'Orlando', state: 'FL' },
  '32803': { city: 'Orlando', state: 'FL' },
  '33601': { city: 'Tampa', state: 'FL' },
  '33602': { city: 'Tampa', state: 'FL' },
  
  // Illinois
  '60601': { city: 'Chicago', state: 'IL' },
  '60602': { city: 'Chicago', state: 'IL' },
  '60603': { city: 'Chicago', state: 'IL' },
  '60604': { city: 'Chicago', state: 'IL' },
  '60605': { city: 'Chicago', state: 'IL' },
  '60606': { city: 'Chicago', state: 'IL' },
  
  // Pennsylvania
  '19101': { city: 'Philadelphia', state: 'PA' },
  '19102': { city: 'Philadelphia', state: 'PA' },
  '19103': { city: 'Philadelphia', state: 'PA' },
  '19104': { city: 'Philadelphia', state: 'PA' },
  '15201': { city: 'Pittsburgh', state: 'PA' },
  '15202': { city: 'Pittsburgh', state: 'PA' },
  
  // Arizona
  '85001': { city: 'Phoenix', state: 'AZ' },
  '85002': { city: 'Phoenix', state: 'AZ' },
  '85003': { city: 'Phoenix', state: 'AZ' },
  '85701': { city: 'Tucson', state: 'AZ' },
  '85702': { city: 'Tucson', state: 'AZ' },
  
  // Ohio
  '44101': { city: 'Cleveland', state: 'OH' },
  '44102': { city: 'Cleveland', state: 'OH' },
  '44103': { city: 'Cleveland', state: 'OH' },
  '43201': { city: 'Columbus', state: 'OH' },
  '43202': { city: 'Columbus', state: 'OH' },
  '45201': { city: 'Cincinnati', state: 'OH' },
  '45202': { city: 'Cincinnati', state: 'OH' },
  
  // Michigan
  '48201': { city: 'Detroit', state: 'MI' },
  '48202': { city: 'Detroit', state: 'MI' },
  '48203': { city: 'Detroit', state: 'MI' },
  '49501': { city: 'Grand Rapids', state: 'MI' },
  '49502': { city: 'Grand Rapids', state: 'MI' },
  
  // Washington
  '98101': { city: 'Seattle', state: 'WA' },
  '98102': { city: 'Seattle', state: 'WA' },
  '98103': { city: 'Seattle', state: 'WA' },
  '98104': { city: 'Seattle', state: 'WA' },
  '99201': { city: 'Spokane', state: 'WA' },
  '99202': { city: 'Spokane', state: 'WA' },
  
  // Georgia
  '30301': { city: 'Atlanta', state: 'GA' },
  '30302': { city: 'Atlanta', state: 'GA' },
  '30303': { city: 'Atlanta', state: 'GA' },
  '30304': { city: 'Atlanta', state: 'GA' },
  '31401': { city: 'Savannah', state: 'GA' },
  '31402': { city: 'Savannah', state: 'GA' },
  
  // Nevada
  '89101': { city: 'Las Vegas', state: 'NV' },
  '89102': { city: 'Las Vegas', state: 'NV' },
  '89103': { city: 'Las Vegas', state: 'NV' },
  '89501': { city: 'Reno', state: 'NV' },
  '89502': { city: 'Reno', state: 'NV' },
  
  // North Carolina
  '28201': { city: 'Charlotte', state: 'NC' },
  '28202': { city: 'Charlotte', state: 'NC' },
  '28203': { city: 'Charlotte', state: 'NC' },
  '27601': { city: 'Raleigh', state: 'NC' },
  '27602': { city: 'Raleigh', state: 'NC' },
  
  // Colorado
  '80201': { city: 'Denver', state: 'CO' },
  '80202': { city: 'Denver', state: 'CO' },
  '80203': { city: 'Denver', state: 'CO' },
  '80301': { city: 'Boulder', state: 'CO' },
  '80302': { city: 'Boulder', state: 'CO' },
  
  // Oregon
  '97201': { city: 'Portland', state: 'OR' },
  '97202': { city: 'Portland', state: 'OR' },
  '97203': { city: 'Portland', state: 'OR' },
  '97401': { city: 'Eugene', state: 'OR' },
  '97402': { city: 'Eugene', state: 'OR' },
  
  // Massachusetts
  '02101': { city: 'Boston', state: 'MA' },
  '02102': { city: 'Boston', state: 'MA' },
  '02103': { city: 'Boston', state: 'MA' },
  '02104': { city: 'Boston', state: 'MA' },
  '01101': { city: 'Springfield', state: 'MA' },
  '01102': { city: 'Springfield', state: 'MA' },
  
  // Tennessee
  '37201': { city: 'Nashville', state: 'TN' },
  '37202': { city: 'Nashville', state: 'TN' },
  '37203': { city: 'Nashville', state: 'TN' },
  '38101': { city: 'Memphis', state: 'TN' },
  '38102': { city: 'Memphis', state: 'TN' },
  
  // Virginia
  '23451': { city: 'Virginia Beach', state: 'VA' },
  '23452': { city: 'Virginia Beach', state: 'VA' },
  '23453': { city: 'Virginia Beach', state: 'VA' },
  '23219': { city: 'Richmond', state: 'VA' },
  '23220': { city: 'Richmond', state: 'VA' },
  
  // Maryland
  '21201': { city: 'Baltimore', state: 'MD' },
  '21202': { city: 'Baltimore', state: 'MD' },
  '21203': { city: 'Baltimore', state: 'MD' },
  '20601': { city: 'Annapolis', state: 'MD' },
  '20602': { city: 'Annapolis', state: 'MD' },
  
  // Wisconsin
  '53201': { city: 'Milwaukee', state: 'WI' },
  '53202': { city: 'Milwaukee', state: 'WI' },
  '53203': { city: 'Milwaukee', state: 'WI' },
  '53701': { city: 'Madison', state: 'WI' },
  '53702': { city: 'Madison', state: 'WI' },
  
  // Minnesota
  '55401': { city: 'Minneapolis', state: 'MN' },
  '55402': { city: 'Minneapolis', state: 'MN' },
  '55403': { city: 'Minneapolis', state: 'MN' },
  '55101': { city: 'Saint Paul', state: 'MN' },
  '55102': { city: 'Saint Paul', state: 'MN' },
  
  // Alabama
  '35201': { city: 'Birmingham', state: 'AL' },
  '35202': { city: 'Birmingham', state: 'AL' },
  '35203': { city: 'Birmingham', state: 'AL' },
  '36101': { city: 'Montgomery', state: 'AL' },
  '36102': { city: 'Montgomery', state: 'AL' },
  
  // Louisiana
  '70112': { city: 'New Orleans', state: 'LA' },
  '70113': { city: 'New Orleans', state: 'LA' },
  '70114': { city: 'New Orleans', state: 'LA' },
  '70801': { city: 'Baton Rouge', state: 'LA' },
  '70802': { city: 'Baton Rouge', state: 'LA' },
  
  // Kentucky
  '40201': { city: 'Louisville', state: 'KY' },
  '40202': { city: 'Louisville', state: 'KY' },
  '40203': { city: 'Louisville', state: 'KY' },
  '40501': { city: 'Lexington', state: 'KY' },
  '40502': { city: 'Lexington', state: 'KY' },
  
  // South Carolina
  '29401': { city: 'Charleston', state: 'SC' },
  '29402': { city: 'Charleston', state: 'SC' },
  '29403': { city: 'Charleston', state: 'SC' },
  '29201': { city: 'Columbia', state: 'SC' },
  '29202': { city: 'Columbia', state: 'SC' },
  
  // Oklahoma
  '73101': { city: 'Oklahoma City', state: 'OK' },
  '73102': { city: 'Oklahoma City', state: 'OK' },
  '73103': { city: 'Oklahoma City', state: 'OK' },
  '74101': { city: 'Tulsa', state: 'OK' },
  '74102': { city: 'Tulsa', state: 'OK' },
  
  // Connecticut
  '06101': { city: 'Hartford', state: 'CT' },
  '06102': { city: 'Hartford', state: 'CT' },
  '06103': { city: 'Hartford', state: 'CT' },
  '06901': { city: 'Stamford', state: 'CT' },
  '06902': { city: 'Stamford', state: 'CT' },
  
  // Iowa
  '50301': { city: 'Des Moines', state: 'IA' },
  '50302': { city: 'Des Moines', state: 'IA' },
  '50303': { city: 'Des Moines', state: 'IA' },
  '52401': { city: 'Cedar Rapids', state: 'IA' },
  '52402': { city: 'Cedar Rapids', state: 'IA' },
  
  // Arkansas
  '72201': { city: 'Little Rock', state: 'AR' },
  '72202': { city: 'Little Rock', state: 'AR' },
  '72203': { city: 'Little Rock', state: 'AR' },
  '72701': { city: 'Fayetteville', state: 'AR' },
  '72702': { city: 'Fayetteville', state: 'AR' },
  
  // Kansas
  '67201': { city: 'Wichita', state: 'KS' },
  '67202': { city: 'Wichita', state: 'KS' },
  '67203': { city: 'Wichita', state: 'KS' },
  '66101': { city: 'Kansas City', state: 'KS' },
  '66102': { city: 'Kansas City', state: 'KS' },
  
  // Utah
  '84101': { city: 'Salt Lake City', state: 'UT' },
  '84102': { city: 'Salt Lake City', state: 'UT' },
  '84103': { city: 'Salt Lake City', state: 'UT' },
  '84601': { city: 'Provo', state: 'UT' },
  '84602': { city: 'Provo', state: 'UT' },
  
  // New Mexico
  '87101': { city: 'Albuquerque', state: 'NM' },
  '87102': { city: 'Albuquerque', state: 'NM' },
  '87103': { city: 'Albuquerque', state: 'NM' },
  '87501': { city: 'Santa Fe', state: 'NM' },
  '87502': { city: 'Santa Fe', state: 'NM' },
  
  // West Virginia
  '25301': { city: 'Charleston', state: 'WV' },
  '25302': { city: 'Charleston', state: 'WV' },
  '25303': { city: 'Charleston', state: 'WV' },
  '26501': { city: 'Morgantown', state: 'WV' },
  '26502': { city: 'Morgantown', state: 'WV' },
  
  // Nebraska
  '68101': { city: 'Omaha', state: 'NE' },
  '68102': { city: 'Omaha', state: 'NE' },
  '68103': { city: 'Omaha', state: 'NE' },
  '68501': { city: 'Lincoln', state: 'NE' },
  '68502': { city: 'Lincoln', state: 'NE' },
  
  // Idaho
  '83701': { city: 'Boise', state: 'ID' },
  '83702': { city: 'Boise', state: 'ID' },
  '83703': { city: 'Boise', state: 'ID' },
  '83201': { city: 'Pocatello', state: 'ID' },
  '83202': { city: 'Pocatello', state: 'ID' },
  
  // Maine
  '04101': { city: 'Portland', state: 'ME' },
  '04102': { city: 'Portland', state: 'ME' },
  '04103': { city: 'Portland', state: 'ME' },
  '04330': { city: 'Augusta', state: 'ME' },
  '04331': { city: 'Augusta', state: 'ME' },
  
  // New Hampshire
  '03101': { city: 'Manchester', state: 'NH' },
  '03102': { city: 'Manchester', state: 'NH' },
  '03103': { city: 'Manchester', state: 'NH' },
  '03301': { city: 'Concord', state: 'NH' },
  '03302': { city: 'Concord', state: 'NH' },
  
  // Hawaii
  '96801': { city: 'Honolulu', state: 'HI' },
  '96802': { city: 'Honolulu', state: 'HI' },
  '96803': { city: 'Honolulu', state: 'HI' },
  '96720': { city: 'Hilo', state: 'HI' },
  '96721': { city: 'Hilo', state: 'HI' },
  
  // Alaska
  '99501': { city: 'Anchorage', state: 'AK' },
  '99502': { city: 'Anchorage', state: 'AK' },
  '99503': { city: 'Anchorage', state: 'AK' },
  '99701': { city: 'Fairbanks', state: 'AK' },
  '99702': { city: 'Fairbanks', state: 'AK' },
  
  // Vermont
  '05401': { city: 'Burlington', state: 'VT' },
  '05402': { city: 'Burlington', state: 'VT' },
  '05403': { city: 'Burlington', state: 'VT' },
  '05601': { city: 'Montpelier', state: 'VT' },
  '05602': { city: 'Montpelier', state: 'VT' },
  
  // Delaware
  '19901': { city: 'Dover', state: 'DE' },
  '19902': { city: 'Dover', state: 'DE' },
  '19903': { city: 'Dover', state: 'DE' },
  '19801': { city: 'Wilmington', state: 'DE' },
  '19802': { city: 'Wilmington', state: 'DE' },
  
  // Rhode Island
  '02901': { city: 'Providence', state: 'RI' },
  '02902': { city: 'Providence', state: 'RI' },
  '02903': { city: 'Providence', state: 'RI' },
  '02840': { city: 'Newport', state: 'RI' },
  '02841': { city: 'Newport', state: 'RI' },
  
  // Montana
  '59101': { city: 'Billings', state: 'MT' },
  '59102': { city: 'Billings', state: 'MT' },
  '59103': { city: 'Billings', state: 'MT' },
  '59601': { city: 'Helena', state: 'MT' },
  '59602': { city: 'Helena', state: 'MT' },
  
  // North Dakota
  '58101': { city: 'Fargo', state: 'ND' },
  '58102': { city: 'Fargo', state: 'ND' },
  '58103': { city: 'Fargo', state: 'ND' },
  '58501': { city: 'Bismarck', state: 'ND' },
  '58502': { city: 'Bismarck', state: 'ND' },
  
  // South Dakota
  '57101': { city: 'Sioux Falls', state: 'SD' },
  '57102': { city: 'Sioux Falls', state: 'SD' },
  '57103': { city: 'Sioux Falls', state: 'SD' },
  '57501': { city: 'Pierre', state: 'SD' },
  '57502': { city: 'Pierre', state: 'SD' },
  
  // Wyoming
  '82001': { city: 'Cheyenne', state: 'WY' },
  '82002': { city: 'Cheyenne', state: 'WY' },
  '82003': { city: 'Cheyenne', state: 'WY' },
  '82601': { city: 'Casper', state: 'WY' },
  '82602': { city: 'Casper', state: 'WY' }
};

export function getLocationFromZip(zipCode: string): { city: string; state: string } | null {
  return zipCodeDatabase[zipCode] || null;
}

export function getAllZipCodes(): string[] {
  return Object.keys(zipCodeDatabase);
}