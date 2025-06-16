'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Truck, Shield, Clock, Star, CheckCircle, MapPin, Phone, Mail } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Car Shipping',
      description: 'Professional car shipping services with door-to-door delivery',
      features: [
        'Open and enclosed transport options',
        'Door-to-door pickup and delivery',
        'Real-time tracking and updates',
        'Fully insured transportation',
        'Nationwide coverage',
        'Competitive pricing'
      ],
      image: 'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'blue'
    },
    {
      title: 'Motorcycle Transport',
      description: 'Specialized motorcycle transportation with expert handling',
      features: [
        'Specialized motorcycle carriers',
        'Soft tie-down systems',
        'Climate-controlled options',
        'Crated shipping available',
        'Experienced motorcycle handlers',
        'Comprehensive insurance coverage'
      ],
      image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'orange'
    },
    {
      title: 'Heavy Equipment Transport',
      description: 'Professional heavy equipment transportation with specialized trailers',
      features: [
        'Specialized heavy-duty trailers',
        'Permit acquisition and routing',
        'Professional rigging and securing',
        'Oversize load management',
        'Construction equipment expertise',
        'Commercial fleet services'
      ],
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      color: 'green'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Get Quote',
      description: 'Request your free quote online with our easy-to-use form',
      icon: MapPin
    },
    {
      step: '02',
      title: 'Schedule Pickup',
      description: 'Schedule convenient pickup time and location',
      icon: Clock
    },
    {
      step: '03',
      title: 'Safe Transport',
      description: 'Your vehicle is transported safely with real-time tracking',
      icon: Shield
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Receive your vehicle at the destination in perfect condition',
      icon: CheckCircle
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
              <Link href="/services" className="text-blue-600 font-medium">Services</Link>
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
            backgroundImage: 'url(https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Professional vehicle transportation services across the United States with unmatched reliability and care.
          </p>
          <Link href="/quote">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transportation Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive vehicle transportation solutions for all your needs
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className={`p-8 bg-${service.color}-50 rounded-2xl border border-${service.color}-100`}>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className={`w-5 h-5 text-${service.color}-600`} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href="/quote">
                      <Button className={`bg-${service.color}-600 hover:bg-${service.color}-700 text-white`}>
                        Get Quote for {service.title}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple, straightforward process from quote to delivery</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-700 transition-all duration-300 transform group-hover:scale-110">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Roadway Logistics?</h2>
            <p className="text-xl text-gray-600">Experience the difference of professional vehicle transportation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Fully Licensed & Insured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Complete insurance coverage and proper licensing for your peace of mind during transportation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle>On-Time Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Guaranteed delivery times with real-time tracking and regular updates throughout the journey.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Professional drivers and logistics experts with years of experience in vehicle transportation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-700 transition-colors">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Nationwide Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Complete coverage across all 50 states with door-to-door service available nationwide.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-700 transition-colors">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Round-the-clock customer support available for any questions or concerns during transport.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-700 transition-colors">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Modern Fleet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  State-of-the-art transport equipment and modern fleet maintained to the highest standards.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Ship Your Vehicle?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get your free quote in minutes and experience professional vehicle transportation.
          </p>
          <Link href="/quote">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Your Free Quote Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

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
                <li><Link href="/" className="hover:text-white transition-colors">About Us</Link></li>
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
                  <span>(346) 462-4428</span>
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