import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, Shield, MapPin, Star, Sparkles } from 'lucide-react';

const AnimatedHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { icon: <Zap className="h-5 w-5" />, text: "Ultra-Low Latency", color: "text-green-400" },
    { icon: <Shield className="h-5 w-5" />, text: "99.9% Uptime", color: "text-blue-400" },
    { icon: <MapPin className="h-5 w-5" />, text: "India-Based Infrastructure", color: "text-purple-400" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 overflow-hidden min-h-screen flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Animated badge */}
          <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <MapPin className="h-4 w-4 text-blue-400 animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Proudly Hosting from India</span>
            <Sparkles className="h-4 w-4 text-purple-400 animate-spin" />
          </div>

          {/* Main heading with staggered animation */}
          <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            India's{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              Fastest Hosting
            </span>
            <br />
            <span className="relative">
              for Gamers
              <div className="absolute -top-2 -right-2">
                <Star className="h-8 w-8 text-yellow-400 animate-pulse" />
              </div>
            </span>
          </h1>

          {/* Subtext with typewriter effect */}
          <p className={`text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Experience ultra-low latency, 99.9% uptime, and lightning-fast performance with our 
            India-based data centers. Trusted by thousands of Indian gamers and developers.
          </p>

          {/* Rotating features */}
          <div className={`flex flex-wrap justify-center gap-6 mb-10 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-500 ${
                  currentFeature === index 
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 border-blue-500/50 scale-110' 
                    : 'bg-gray-800/50 border-gray-600/50'
                }`}
              >
                <div className={feature.color}>
                  {feature.icon}
                </div>
                <span className="text-sm font-medium text-white">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons with hover effects */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 transform hover:scale-105 hover:shadow-2xl">
              <span>Get Started Free</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-xl transition-opacity"></div>
            </button>
            <button className="group text-white border-2 border-gray-600 hover:border-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg transform hover:scale-105 hover:bg-white/10">
              View Pricing
            </button>
          </div>

          {/* Animated stats */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                50,000+
              </div>
              <div className="text-gray-400 group-hover:text-white transition-colors">Active Users</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-gray-400 group-hover:text-white transition-colors">Uptime Guarantee</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                &lt;10ms
              </div>
              <div className="text-gray-400 group-hover:text-white transition-colors">Average Latency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedHero;