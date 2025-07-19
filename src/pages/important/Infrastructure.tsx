import React from 'react';
import { Server, Shield, Zap, Globe, HardDrive, Cpu, MapPin, Award } from 'lucide-react';

const Infrastructure = () => {
  const datacenters = [
    {
      city: 'Mumbai',
      location: 'Bandra Kurla Complex',
      capacity: '10,000+ Servers',
      uptime: '99.99%',
      features: ['Tier 3 Certified', 'Redundant Power', '24/7 Security', 'Climate Controlled']
    },
    {
      city: 'Bangalore',
      location: 'Electronic City',
      capacity: '8,000+ Servers',
      uptime: '99.99%',
      features: ['Tier 3 Certified', 'Dual Power Feeds', 'Biometric Access', 'Fire Suppression']
    },
    {
      city: 'Delhi',
      location: 'Noida Tech Park',
      capacity: '6,000+ Servers',
      uptime: '99.99%',
      features: ['Tier 3 Certified', 'UPS Backup', 'CCTV Monitoring', 'Earthquake Resistant']
    },
    {
      city: 'Chennai',
      location: 'IT Corridor',
      capacity: '5,000+ Servers',
      uptime: '99.99%',
      features: ['Tier 3 Certified', 'Generator Backup', 'Access Control', 'Flood Protection']
    }
  ];

  const specifications = [
    {
      icon: <Cpu className="h-8 w-8 text-white" />,
      title: 'Latest Hardware',
      description: 'Intel Xeon and AMD EPYC processors with DDR4 ECC memory'
    },
    {
      icon: <HardDrive className="h-8 w-8 text-white" />,
      title: 'NVMe SSD Storage',
      description: 'Enterprise-grade NVMe SSDs for maximum performance and reliability'
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: 'Premium Network',
      description: 'Multiple Tier-1 ISP connections with 10Gbps+ bandwidth'
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: 'Advanced Security',
      description: 'DDoS protection, firewalls, and 24/7 security monitoring'
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: 'Redundant Power',
      description: 'N+1 UPS systems with diesel generators for 100% uptime'
    },
    {
      icon: <Server className="h-8 w-8 text-white" />,
      title: 'Scalable Infrastructure',
      description: 'Auto-scaling capabilities to handle traffic spikes seamlessly'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">World-Class Infrastructure in India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Infrastructure
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              State-of-the-art data centers across India, powered by the latest technology 
              and designed for maximum performance, security, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Overview */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Built for Performance & Reliability
            </h2>
            <p className="text-xl text-gray-400">
              Our infrastructure is designed to deliver exceptional performance for all your hosting needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specifications.map((spec, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  {spec.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{spec.title}</h3>
                <p className="text-gray-400 leading-relaxed">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Centers */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Data Centers Across India
            </h2>
            <p className="text-xl text-gray-400">
              Strategically located data centers for optimal performance and redundancy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {datacenters.map((dc, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-200">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{dc.city}</h3>
                    <p className="text-gray-400 mb-4">{dc.location}</p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-2xl font-bold text-blue-400">{dc.capacity}</div>
                        <div className="text-gray-500 text-sm">Server Capacity</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-400">{dc.uptime}</div>
                        <div className="text-gray-500 text-sm">Uptime SLA</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {dc.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network & Security */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Premium Network Infrastructure
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Multi-Tier ISP Connections</h3>
                    <p className="text-gray-400">Direct connections to multiple Tier-1 ISPs including Airtel, Jio, and BSNL for redundancy and optimal routing.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">High-Speed Connectivity</h3>
                    <p className="text-gray-400">10Gbps+ bandwidth capacity with automatic load balancing and traffic optimization for peak performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Server className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Edge Locations</h3>
                    <p className="text-gray-400">Strategic edge locations across India to minimize latency and improve content delivery speeds.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Advanced Security Measures
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">DDoS Protection</h3>
                    <p className="text-gray-400">Enterprise-grade DDoS protection capable of mitigating attacks up to 100Gbps with real-time monitoring.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Compliance & Certifications</h3>
                    <p className="text-gray-400">ISO 27001 certified facilities with compliance to Indian data protection regulations and international standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Physical Security</h3>
                    <p className="text-gray-400">24/7 security personnel, biometric access controls, and comprehensive surveillance systems at all facilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Performance That Speaks for Itself
            </h2>
            <p className="text-xl text-gray-400">
              Real metrics from our infrastructure performance
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">99.99%</div>
              <div className="text-gray-400">Network Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">&lt;5ms</div>
              <div className="text-gray-400">Average Latency</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100Gbps</div>
              <div className="text-gray-400">DDoS Protection</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Monitoring</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;