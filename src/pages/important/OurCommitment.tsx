import React from 'react';
import { Shield, Heart, Zap, Users, Award, MapPin } from 'lucide-react';

const OurCommitment = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Made in India, For India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Commitment
              </span>
              <br />
              to Excellence
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are dedicated to providing world-class hosting services while supporting 
              the Indian gaming and developer community with unmatched reliability and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">99.9% Uptime Guarantee</h3>
              <p className="text-gray-400 leading-relaxed">
                We guarantee 99.9% uptime for all our services. If we fail to meet this commitment, 
                we provide service credits as compensation. Your success is our priority.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Customer-First Approach</h3>
              <p className="text-gray-400 leading-relaxed">
                Every decision we make puts our customers first. From our pricing to our support, 
                we ensure that your experience with us exceeds expectations at every touchpoint.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-400 leading-relaxed">
                We continuously invest in the latest hardware and software technologies to ensure 
                our customers always have access to the best performance and features available.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Community Support</h3>
              <p className="text-gray-400 leading-relaxed">
                We actively support the Indian gaming and developer community through sponsorships, 
                events, and educational initiatives to help grow the ecosystem.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality Assurance</h3>
              <p className="text-gray-400 leading-relaxed">
                Every service we offer goes through rigorous testing and quality checks. We maintain 
                the highest standards to ensure reliability and performance for all our customers.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Local Infrastructure</h3>
              <p className="text-gray-400 leading-relaxed">
                All our servers are hosted in premium data centers across India, ensuring low latency 
                and compliance with local data protection regulations for Indian users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These values guide everything we do and shape our commitment to our customers and community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Transparency</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We believe in complete transparency in our pricing, policies, and operations. 
                No hidden fees, no surprise charges, and clear communication at all times.
              </p>
              
              <h3 className="text-2xl font-bold text-white mb-6">Innovation</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We continuously innovate to provide better services, improved performance, 
                and new features that help our customers succeed in their endeavors.
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">Reliability</h3>
              <p className="text-gray-400 leading-relaxed">
                Our infrastructure and services are built for maximum reliability. We understand 
                that your projects depend on our uptime, and we take that responsibility seriously.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Accessibility</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                We make high-quality hosting accessible to everyone, from individual developers 
                to large enterprises, with pricing that fits every budget.
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">Support</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Our support team is available 24/7 to help you succeed. We provide not just 
                technical support, but guidance to help you make the best decisions for your projects.
              </p>

              <h3 className="text-2xl font-bold text-white mb-6">Growth</h3>
              <p className="text-gray-400 leading-relaxed">
                We grow with our customers. As your needs evolve, our scalable solutions 
                ensure that we can support your journey from startup to enterprise.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCommitment;