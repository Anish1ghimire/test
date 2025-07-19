import React from 'react';
import { Handshake, Users, Award, Target, Heart, Zap, MapPin, Building } from 'lucide-react';

const Partnership = () => {
  const partnershipTypes = [
    {
      icon: <Building className="h-8 w-8 text-white" />,
      title: 'Reseller Program',
      description: 'Become an authorized reseller and earn competitive margins on our hosting services.',
      benefits: ['Up to 40% margins', 'White-label solutions', 'Marketing support', 'Dedicated account manager']
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: 'Affiliate Program',
      description: 'Earn commissions by referring customers to our hosting services.',
      benefits: ['15% commission', 'Real-time tracking', 'Monthly payouts', 'Marketing materials']
    },
    {
      icon: <Handshake className="h-8 w-8 text-white" />,
      title: 'Technology Partners',
      description: 'Integrate your solutions with our platform and reach more customers.',
      benefits: ['API access', 'Joint marketing', 'Technical support', 'Co-development opportunities']
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: 'Enterprise Partners',
      description: 'Large-scale partnerships for enterprise clients and custom solutions.',
      benefits: ['Custom pricing', 'Dedicated resources', 'Priority support', 'Strategic planning']
    }
  ];

  const currentPartners = [
    {
      name: 'TechCorp Solutions',
      type: 'Technology Partner',
      description: 'Leading provider of server management tools and monitoring solutions.'
    },
    {
      name: 'GameDev Studios',
      type: 'Reseller Partner',
      description: 'Specialized in providing hosting solutions for indie game developers.'
    },
    {
      name: 'CloudSecure',
      type: 'Technology Partner',
      description: 'Advanced security solutions and DDoS protection services.'
    },
    {
      name: 'WebAgency Pro',
      type: 'Affiliate Partner',
      description: 'Digital marketing agency specializing in web development and hosting.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Growing Together in India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Partner{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our partner ecosystem and grow your business with India's leading hosting provider. 
              We offer multiple partnership opportunities designed for mutual success.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-400">
              Choose the partnership model that best fits your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((partnership, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  {partnership.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{partnership.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{partnership.description}</p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {partnership.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Partner With GameHost.in?
            </h2>
            <p className="text-xl text-gray-400">
              We're committed to our partners' success as much as our own
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Market Leadership</h3>
              <p className="text-gray-400 leading-relaxed">
                Partner with India's fastest-growing hosting company with a proven track record 
                of success and customer satisfaction.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Dedicated Support</h3>
              <p className="text-gray-400 leading-relaxed">
                Get dedicated partner support, training, and resources to help you succeed 
                and grow your business with us.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-400 leading-relaxed">
                Offer your customers the latest technology and infrastructure with our 
                state-of-the-art hosting solutions.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Advantages</h3>
              <p className="text-gray-400 leading-relaxed">
                Benefit from our competitive pricing, superior performance, and unique 
                India-focused solutions that set us apart.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Growing Community</h3>
              <p className="text-gray-400 leading-relaxed">
                Join a thriving community of partners and customers who are passionate 
                about technology and innovation.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Local Expertise</h3>
              <p className="text-gray-400 leading-relaxed">
                Leverage our deep understanding of the Indian market and regulatory 
                environment for better customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-400">
              Companies that have chosen to grow with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentPartners.map((partner, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                      <span className="bg-blue-500/20 border border-blue-500/30 rounded-full px-3 py-1 text-blue-300 text-xs">
                        {partner.type}
                      </span>
                    </div>
                    <p className="text-gray-400">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can work together to achieve mutual success. 
            Contact our partnership team to explore opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg">
              Become a Partner
            </button>
            <button className="text-white border border-gray-600 hover:border-white px-8 py-4 rounded-lg transition-all duration-200 font-semibold text-lg">
              Download Partner Kit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;