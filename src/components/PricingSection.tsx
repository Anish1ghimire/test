import React from 'react';
import { Check, Cpu, HardDrive, Wifi, MapPin, Star, Shield, Zap, Users, Award, Globe, Headphones, Clock, Heart } from 'lucide-react';

const PricingSection = () => {
  const minecraftPlans = [
    {
      name: 'Starter',
      price: '₹299',
      period: '/month',
      popular: false,
      features: [
        '2GB RAM',
        '20GB SSD Storage',
        'Up to 10 Players',
        'Free Subdomain',
        'DDoS Protection',
        'India-Based Servers',
        'Basic Support'
      ]
    },
    {
      name: 'Gaming Pro',
      price: '₹599',
      period: '/month',
      popular: true,
      features: [
        '4GB RAM',
        '40GB SSD Storage',
        'Up to 25 Players',
        'Free Domain',
        'Advanced DDoS Protection',
        'Plugin Support',
        'India-Based Servers',
        'Priority Support'
      ]
    },
    {
      name: 'Enterprise',
      price: '₹1,199',
      period: '/month',
      popular: false,
      features: [
        '8GB RAM',
        '80GB SSD Storage',
        'Unlimited Players',
        'Free Domain + SSL',
        'Premium Support',
        'Custom Plugins',
        'India-Based Servers',
        'Dedicated Manager'
      ]
    },
    {
      name: 'Ultimate',
      price: '₹1,999',
      period: '/month',
      popular: false,
      features: [
        '16GB RAM',
        '160GB SSD Storage',
        'Unlimited Players',
        'Multiple Domains',
        '24/7 Premium Support',
        'Custom Development',
        'India-Based Servers',
        'White-label Options'
      ]
    }
  ];

  const vpsPlans = [
    {
      name: 'VPS Basic',
      type: 'Intel',
      price: '₹899',
      period: '/month',
      popular: false,
      features: [
        '2 vCPU Intel',
        '4GB RAM',
        '50GB SSD',
        '1TB Bandwidth',
        'Full Root Access',
        'India Location',
        'Basic Monitoring'
      ]
    },
    {
      name: 'VPS Pro',
      type: 'AMD',
      price: '₹1,499',
      period: '/month',
      popular: true,
      features: [
        '4 vCPU AMD Ryzen',
        '8GB RAM',
        '100GB NVMe SSD',
        'Unlimited Bandwidth',
        'Full Root Access',
        'Priority Support',
        'India Location',
        'Advanced Monitoring'
      ]
    },
    {
      name: 'VPS Elite',
      type: 'Intel',
      price: '₹2,999',
      period: '/month',
      popular: false,
      features: [
        '8 vCPU Intel Xeon',
        '16GB RAM',
        '200GB NVMe SSD',
        'Unlimited Bandwidth',
        'Dedicated IP',
        '24/7 Premium Support',
        'India Location',
        'Custom Configurations'
      ]
    },
    {
      name: 'VPS Ultimate',
      type: 'AMD',
      price: '₹4,999',
      period: '/month',
      popular: false,
      features: [
        '16 vCPU AMD EPYC',
        '32GB RAM',
        '500GB NVMe SSD',
        'Unlimited Bandwidth',
        'Multiple IPs',
        'Managed Services',
        'India Location',
        'Enterprise Support'
      ]
    }
  ];

  const gameHostingPlans = [
    {
      name: 'Ark Survival',
      price: '₹799',
      period: '/month',
      game: 'ARK',
      features: [
        '6GB RAM',
        '50GB SSD',
        'Up to 20 Players',
        'Mod Support',
        'Auto Backups',
        'India Servers',
        'Basic Support'
      ]
    },
    {
      name: 'FiveM Server',
      price: '₹1,299',
      period: '/month',
      game: 'FiveM',
      features: [
        '8GB RAM',
        '80GB SSD',
        'Up to 64 Players',
        'Script Support',
        'MySQL Database',
        'India Servers',
        'Priority Support'
      ]
    },
    {
      name: 'Rust Server',
      price: '₹999',
      period: '/month',
      game: 'Rust',
      features: [
        '8GB RAM',
        '60GB SSD',
        'Up to 100 Players',
        'Oxide Support',
        'Auto Wipes',
        'India Servers',
        'Community Support'
      ]
    },
    {
      name: 'CS:GO Server',
      price: '₹699',
      period: '/month',
      game: 'CS:GO',
      features: [
        '4GB RAM',
        '40GB SSD',
        'Up to 32 Players',
        'SourceMod Support',
        'Fast Tick Rate',
        'India Servers',
        'Anti-Cheat'
      ]
    },
    {
      name: 'Garry\'s Mod',
      price: '₹899',
      period: '/month',
      game: 'GMod',
      features: [
        '6GB RAM',
        '60GB SSD',
        'Up to 40 Players',
        'Workshop Support',
        'Custom Addons',
        'India Servers',
        'FastDL Support'
      ]
    },
    {
      name: 'Discord Bot',
      price: '₹299',
      period: '/month',
      game: 'Bot',
      features: [
        '1GB RAM',
        '20GB SSD',
        '24/7 Uptime',
        'Multiple Bots',
        'Auto Restart',
        'India Servers',
        'Dashboard Access'
      ]
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: '99.9% Uptime Guarantee',
      description: 'Rock-solid infrastructure with redundant systems ensuring your services stay online.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: 'Lightning Fast Performance',
      description: 'NVMe SSDs, latest CPUs, and optimized networks for unmatched speed.',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: '24/7 Expert Support',
      description: 'Round-the-clock technical support from experienced professionals.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: <MapPin className="h-8 w-8 text-white" />,
      title: 'India-Based Infrastructure',
      description: 'Low latency servers located across major Indian cities for optimal performance.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: 'Industry Leading Security',
      description: 'Advanced DDoS protection, firewalls, and security monitoring.',
      color: 'from-red-500 to-rose-600'
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: 'Scalable Solutions',
      description: 'Easily upgrade your resources as your needs grow without downtime.',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: <Headphones className="h-8 w-8 text-white" />,
      title: 'Free Migration Service',
      description: 'We handle the complete migration of your existing services at no cost.',
      color: 'from-teal-500 to-green-600'
    },
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      title: 'Instant Setup',
      description: 'Get your servers deployed and running within minutes of ordering.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: <Heart className="h-8 w-8 text-white" />,
      title: 'Customer-First Approach',
      description: 'Your success is our priority. We go above and beyond for every customer.',
      color: 'from-pink-500 to-purple-600'
    }
  ];
  const PricingCard = ({ plan, type = 'default' }: { plan: any, type?: string }) => (
    <div className={`relative bg-gray-800/50 backdrop-blur-sm border ${plan.popular ? 'border-blue-500' : 'border-gray-700'} rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-200 group`}>
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
            <Star className="h-3 w-3" />
            <span>Most Popular</span>
          </div>
        </div>
      )}
      
      {/* India Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
          <MapPin className="h-3 w-3 text-green-400" />
          <span className="text-green-300 text-xs font-medium">Hosted in India</span>
        </div>
        {plan.type && (
          <div className="flex items-center space-x-1">
            <Cpu className="h-4 w-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium">{plan.type}</span>
          </div>
        )}
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
        {plan.game && (
          <p className="text-purple-400 text-sm font-medium mb-2">{plan.game} Hosting</p>
        )}
        <div className="flex items-end space-x-1">
          <span className="text-3xl font-bold text-white">{plan.price}</span>
          <span className="text-gray-400 text-sm">{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-6">
        {plan.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
        plan.popular 
          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
          : 'bg-gray-700 text-white hover:bg-gray-600'
      }`}>
        Get Started
      </button>
    </div>
  );

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Choose Your Perfect{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Hosting Plan
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Premium hosting solutions powered by Indian data centers for the best gaming experience
          </p>
        </div>

        {/* Minecraft Hosting */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">Minecraft Hosting</h3>
            <p className="text-gray-400">Optimized for the best Minecraft experience in India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {minecraftPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} type="minecraft" />
            ))}
          </div>
        </div>

        {/* VPS Hosting */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">VPS Hosting</h3>
            <p className="text-gray-400">Powerful virtual private servers with Intel and AMD processors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vpsPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} type="vps" />
            ))}
          </div>
        </div>

        {/* Game Hosting */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-2">Other Game Hosting</h3>
            <p className="text-gray-400">Specialized hosting for popular multiplayer games</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {gameHostingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} type="game" />
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Our Services Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Our Services?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're not just another hosting provider. Here's what makes us the preferred choice for thousands of customers across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Join thousands of satisfied customers who trust us with their hosting needs. 
                Get started today with our 30-day money-back guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2 transform hover:scale-105">
                  <span>Start Your Free Trial</span>
                  <Star className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                </button>
                <button className="text-white border-2 border-gray-600 hover:border-white px-8 py-4 rounded-xl transition-all duration-200 font-semibold text-lg hover:bg-white/10">
                  Contact Sales Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PricingSection;