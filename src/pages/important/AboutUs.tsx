import React from 'react';
import { Users, Award, MapPin, Target, Heart, Zap } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { number: '50,000+', label: 'Active Customers' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '5+', label: 'Data Centers in India' }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in hosting and cloud infrastructure.'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      description: 'Technology expert specializing in scalable hosting solutions and DevOps.'
    },
    {
      name: 'Amit Patel',
      role: 'Head of Customer Success',
      description: 'Dedicated to ensuring every customer achieves their hosting goals.'
    },
    {
      name: 'Sneha Reddy',
      role: 'Head of Operations',
      description: 'Ensures smooth operations across all our Indian data centers.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Proudly Indian Company</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                GameHost.in
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're India's premier hosting company, dedicated to providing world-class hosting 
              solutions for gamers, developers, and businesses across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  Founded in 2020, GameHost.in was born from a simple observation: Indian gamers and 
                  developers deserved better hosting solutions. Our founders, frustrated with high 
                  latency and poor support from international providers, decided to build something better.
                </p>
                <p>
                  Starting with a single data center in Mumbai, we've grown to serve over 50,000 
                  customers across India. Our mission remains the same: provide world-class hosting 
                  with Indian heart and soul.
                </p>
                <p>
                  Today, we operate multiple data centers across major Indian cities, offering 
                  everything from game server hosting to enterprise VPS solutions. We're not just 
                  a hosting company - we're part of the Indian tech ecosystem.
                </p>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Our Mission</h3>
                    <p className="text-gray-400 text-sm">Empower Indian gamers and developers with world-class hosting</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Our Values</h3>
                    <p className="text-gray-400 text-sm">Customer-first approach with transparency and reliability</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Our Vision</h3>
                    <p className="text-gray-400 text-sm">Be India's most trusted hosting and cloud infrastructure provider</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-400">
              The passionate individuals driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-900/70 transition-all duration-200">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose GameHost.in?
            </h2>
            <p className="text-xl text-gray-400">
              We're more than just a hosting provider - we're your technology partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Local Expertise</h3>
              <p className="text-gray-400 leading-relaxed">
                Deep understanding of the Indian market, regulations, and customer needs. 
                We speak your language and understand your challenges.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance First</h3>
              <p className="text-gray-400 leading-relaxed">
                Our infrastructure is optimized for Indian users with multiple data centers 
                ensuring the lowest possible latency and highest performance.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-400 leading-relaxed">
                Trusted by thousands of customers with a proven track record of reliability, 
                performance, and exceptional customer service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;