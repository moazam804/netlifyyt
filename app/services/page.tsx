'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Truck, Car, Bike, Wrench, Shield, Clock, Star, MapPin, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Auto Transport',
    icon: Car,
    description: 'Professional car shipping services nationwide with multiple carrier options.',
    features: ['Open & Enclosed Carriers', 'Door-to-Door Service', 'Luxury Vehicle Specialists', 'Real-time Tracking'],
    priceRange: '$600 - $1,500'
  },
  {
    title: 'Motorcycle Shipping',
    icon: Bike,
    description: 'Specialized motorcycle transport with custom crating and secure loading.',
    features: ['Custom Crating Available', 'Soft-Tie Restraint Systems', 'Climate-Controlled Options', 'Experienced Handlers'],
    priceRange: '$400 - $800'
  },
  {
    title: 'Heavy Equipment',
    icon: Wrench,
    description: 'Professional heavy machinery transport with specialized trailers.',
    features: ['Oversized Load Permits', 'Specialized Trailers', 'Construction Equipment', 'Expert Operators'],
    priceRange: '$2,000 - $8,000'
  }
];

const features = [
  {
    title: 'Licensed & Insured',
    icon: Shield,
    description: 'Fully licensed DOT carrier with comprehensive insurance coverage for your peace of mind.'
  },
  {
    title: 'On-Time Delivery',
    icon: Clock,
    description: '98% on-time delivery rate with real-time tracking and regular status updates.'
  },
  {
    title: 'Expert Service',
    icon: Star,
    description: 'Professional drivers and handlers with years of experience in vehicle transportation.'
  },
  {
    title: 'Nationwide Coverage',
    icon: MapPin,
    description: 'Service to all 50 states with local pickup and delivery options available.'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Roadway Logistics LLC</h1>
                <p className="text-sm text-gray-600">Professional Transportation Services</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/quote" className="text-gray-700 hover:text-blue-600 font-medium">Get Quote</Link>
              <Link href="/services" className="text-blue-600 font-medium">Services</Link>
              <Link href="/booking" className="text-gray-700 hover:text-blue-600 font-medium">Booking</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700 font-medium">(555) 123-4567</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Transportation Services</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional, reliable, and secure transportation solutions for all your vehicle shipping needs across the United States.
          </p>
          <Link href="/quote">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Get Your Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="border-t pt-4">
                        <p className="text-sm text-gray-600">Typical Price Range:</p>
                        <p className="text-lg font-bold text-blue-600">{service.priceRange}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Roadway Logistics?</h3>
            <p className="text-lg text-gray-600">We deliver excellence in every mile</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Simple Process</h3>
            <p className="text-lg text-gray-600">From quote to delivery, we make it easy</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Get Quote', description: 'Fill out our simple form for an instant quote' },
              { step: '2', title: 'Schedule Pickup', description: 'Choose your preferred pickup date and time' },
              { step: '3', title: 'Track Shipment', description: 'Monitor your vehicle with real-time updates' },
              { step: '4', title: 'Delivery', description: 'Receive your vehicle safely at the destination' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Ship Your Vehicle?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Get your free, no-obligation quote in under 2 minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Truck className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold">Roadway Logistics LLC</h4>
              </div>
              <p className="text-gray-400">
                Professional transportation services you can trust, nationwide coverage with local expertise.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Auto Transport</li>
                <li>Motorcycle Shipping</li>
                <li>Heavy Equipment</li>
                <li>Expedited Delivery</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <span className="h-4 w-4 mr-2">✉</span>
                  info@roadwaylogistics.com
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Nationwide Service
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Business Hours</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 7AM - 8PM</li>
                <li>Saturday: 8AM - 6PM</li>
                <li>Sunday: 9AM - 5PM</li>
                <li>Emergency: 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Roadway Logistics LLC. All rights reserved. | Licensed & Insured Transportation Services</p>
          </div>
        </div>
      </footer>
    </div>
  );
}