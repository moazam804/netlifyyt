'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Truck, Shield, Users, Award, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '10,000+', label: 'Vehicles Transported', icon: Truck },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '50', label: 'States Covered', icon: MapPin },
    { number: '24/7', label: 'Customer Support', icon: Phone }
  ];

  const values = [
    {
      title: 'Safety First',
      description: 'Every vehicle is treated with the utmost care and transported using the highest safety standards.',
      icon: Shield
    },
    {
      title: 'Reliability',
      description: 'On-time delivery and consistent communication throughout the transportation process.',
      icon: CheckCircle
    },
    {
      title: 'Expert Team',
      description: 'Professional drivers and logistics specialists with extensive industry experience.',
      icon: Users
    },
    {
      title: 'Customer Focus',
      description: 'Dedicated to providing exceptional service and building long-term relationships.',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Truck className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Roadway Logistics LLC</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/about" className="text-blue-600 font-medium">About</Link>
              <Link href="/quote" className="text-gray-700 hover:text-blue-600 transition-colors">Get Quote</Link>
              <Link href="/admin" className="text-gray-700 hover:text-blue-600 transition-colors">Admin</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">About Roadway Logistics</h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Your trusted partner in professional vehicle transportation services across the United States.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-700 transition-all duration-300 transform group-hover:scale-110">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2009, Roadway Logistics LLC has grown from a small family-owned business to one of the most trusted names in vehicle transportation across the United States. What started as a vision to provide reliable, professional vehicle shipping services has evolved into a comprehensive logistics solution.
                </p>
                <p>
                  Over the years, we've built our reputation on three core principles: safety, reliability, and exceptional customer service. Every vehicle that enters our care is treated as if it were our own, and every customer relationship is built on trust and transparency.
                </p>
                <p>
                  Today, we're proud to serve customers nationwide, from individual car owners to large commercial fleets, always maintaining the personal touch and attention to detail that has defined us from the beginning.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                  alt="Roadway Logistics Team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Professional Team</h3>
                  <p className="text-blue-100">Dedicated to your transportation needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Roadway Logistics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 text-lg">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl leading-relaxed mb-8">
            To provide safe, reliable, and professional vehicle transportation services that exceed our customers' expectations. We are committed to treating every vehicle with care, maintaining transparent communication, and building lasting relationships based on trust and exceptional service.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">Safety</h3>
              <p className="text-blue-100">Every transport is conducted with the highest safety standards</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-blue-100">On-time delivery you can count on, every time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-3">Service</h3>
              <p className="text-blue-100">Exceptional customer service from quote to delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
     
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Truck className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">Roadway Logistics LLC</span>
              </div>
              <p className="text-gray-400">
                Professional vehicle transportation services across the United States. Licensed, insured, and trusted.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/quote" className="hover:text-white transition-colors">Car Shipping</Link></li>
                <li><Link href="/quote" className="hover:text-white transition-colors">Motorcycle Transport</Link></li>
                <li><Link href="/quote" className="hover:text-white transition-colors">Heavy Equipment</Link></li>
                <li><Link href="/quote" className="hover:text-white transition-colors">Commercial Fleet</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                <li><Link href="/quote" className="hover:text-white transition-colors">Get Quote</Link></li>
                <li><Link href="/admin" className="hover:text-white transition-colors">Admin Portal</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>1-800-ROADWAY</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>roadwaylogisticsllc18@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Nationwide Coverage</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Roadway Logistics LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}