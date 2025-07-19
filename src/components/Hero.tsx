import React from 'react';
import { ArrowRight, Zap, Shield, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
            <MapPin className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">Proudly Hosting from India</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            India's{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Fastest Hosting
            </span>
            <br />
            for Gamers and Developers
          </h1>

          {/* Subtext */}
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience ultra-low latency, 99.9% uptime, and lightning-fast performance with our 
            India-based data centers. Trusted by thousands of Indian gamers and developers.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 text-green-400">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-medium">Ultra-Low Latency</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-400">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium">99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium">India-Based Infrastructure</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg flex items-center space-x-2">
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-white border border-gray-600 hover:border-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg">
              View Pricing
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50,000+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">&lt;10ms</div>
              <div className="text-gray-400">Average Latency</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;