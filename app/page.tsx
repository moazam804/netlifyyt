'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, MapPin, Clock, Shield, Star, Phone, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Roadway Logistics LLC</h1>
                <p className="text-sm text-gray-600">Professional Transportation Services</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/quote" className="text-gray-700 hover:text-blue-600 font-medium">Get Quote</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Reliable Transportation
            <span className="block text-blue-600">Across America</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From cars to heavy equipment, we provide secure, timely, and professional transportation services 
            nationwide. Get your instant quote today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Get Instant Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Roadway Logistics?</h3>
            <p className="text-lg text-gray-600">We deliver excellence in every mile</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Secure & Insured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Fully licensed and insured with comprehensive coverage for your peace of mind.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">On-Time Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  98% on-time delivery rate with real-time tracking and updates throughout transport.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Expert Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Professional drivers and handlers with years of experience in vehicle transportation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Transportation Services</h3>
            <p className="text-lg text-gray-600">Comprehensive solutions for all your transport needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Auto Transport</h4>
              <p className="text-gray-600 mb-4">
                Safe and reliable car shipping services nationwide with door-to-door delivery options.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Open & Enclosed Carriers</li>
                <li>• Door-to-Door Service</li>
                <li>• Luxury Vehicle Specialists</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Motorcycle Shipping</h4>
              <p className="text-gray-600 mb-4">
                Specialized motorcycle transport with custom crating and secure loading systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Custom Crating Available</li>
                <li>• Soft-Tie Restraint Systems</li>
                <li>• Climate-Controlled Options</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Heavy Equipment</h4>
              <p className="text-gray-600 mb-4">
                Professional heavy machinery transport with specialized trailers and experienced operators.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Oversized Load Permits</li>
                <li>• Specialized Trailers</li>
                <li>• Construction Equipment</li>
              </ul>
            </div>
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
          <Link href="/quote">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Your Quote Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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
                  <Mail className="h-4 w-4 mr-2" />
                  info@roadwaylogistics.com
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Nationwide Service
                </li>
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