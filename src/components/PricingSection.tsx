import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  Gamepad2,
  Cpu,
  HardDrive,
  Wifi,
  CheckCircle,
  Star,
  Award,
  Globe,
  Headphones,
  TrendingUp,
  Lock,
  Rocket,
  Heart
} from 'lucide-react';

const PricingSection = () => {
  const minecraftPlans = [
    {
      name: "Starter",
      price: "₹199",
      period: "/month",
      ram: "2GB",
      storage: "10GB SSD",
      players: "Up to 10",
      features: ["Free Setup", "24/7 Support", "DDoS Protection", "1-Click Modpack Install"],
      popular: false,
      link: "/minecraft-hosting"
    },
    {
      name: "Pro",
      price: "₹399",
      period: "/month",
      ram: "4GB",
      storage: "25GB SSD",
      players: "Up to 25",
      features: ["Free Setup", "24/7 Support", "DDoS Protection", "1-Click Modpack Install", "Free Domain"],
      popular: true,
      link: "/minecraft-hosting"
    },
    {
      name: "Premium",
      price: "₹799",
      period: "/month",
      ram: "8GB",
      storage: "50GB SSD",
      players: "Up to 50",
      features: ["Free Setup", "24/7 Support", "DDoS Protection", "1-Click Modpack Install", "Free Domain", "Priority Support"],
      popular: false,
      link: "/minecraft-hosting"
    },
    {
      name: "Ultimate",
      price: "₹1499",
      period: "/month",
      ram: "16GB",
      storage: "100GB SSD",
      players: "Unlimited",
      features: ["Free Setup", "24/7 Support", "DDoS Protection", "1-Click Modpack Install", "Free Domain", "Priority Support", "White-label Options"],
      popular: false,
      link: "/minecraft-hosting"
    }
  ];

  const vpsPlans = [
    {
      name: "VPS Starter",
      price: "₹599",
      period: "/month",
      cpu: "2 vCPU",
      ram: "4GB",
      storage: "50GB SSD",
      features: ["Full Root Access", "99.9% Uptime", "DDoS Protection", "24/7 Support"],
      popular: false,
      link: "/intel-vps"
    },
    {
      name: "VPS Pro",
      price: "₹1199",
      period: "/month",
      cpu: "4 vCPU",
      ram: "8GB",
      storage: "100GB SSD",
      features: ["Full Root Access", "99.9% Uptime", "DDoS Protection", "24/7 Support", "Free Backups"],
      popular: true,
      link: "/intel-vps"
    },
    {
      name: "VPS Premium",
      price: "₹2399",
      period: "/month",
      cpu: "8 vCPU",
      ram: "16GB",
      storage: "200GB SSD",
      features: ["Full Root Access", "99.9% Uptime", "DDoS Protection", "24/7 Support", "Free Backups", "Priority Support"],
      popular: false,
      link: "/intel-vps"
    },
    {
      name: "VPS Ultimate",
      price: "₹4799",
      period: "/month",
      cpu: "16 vCPU",
      ram: "32GB",
      storage: "500GB SSD",
      features: ["Full Root Access", "99.9% Uptime", "DDoS Protection", "24/7 Support", "Free Backups", "Priority Support", "AMD EPYC", "Enterprise Support"],
      popular: false,
      link: "/amd-vps"
    }
  ];

  const gameHostingPlans = [
    {
      name: "ARK Server",
      price: "₹899",
      period: "/month",
      players: "Up to 70",
      features: ["Auto-Updates", "Mod Support", "Custom Maps", "24/7 Support"],
      icon: <Gamepad2 className="h-6 w-6" />,
      link: "/ark-hosting"
    },
    {
      name: "FiveM Server",
      price: "₹1299",
      period: "/month",
      players: "Up to 128",
      features: ["Custom Scripts", "ESX/QBCore", "Anti-Cheat", "24/7 Support"],
      icon: <Server className="h-6 w-6" />,
      link: "/fivem-hosting"
    },
    {
      name: "Rust Server",
      price: "₹799",
      period: "/month",
      players: "Up to 100",
      features: ["Oxide Support", "Plugin Manager", "Wipe Scheduling", "24/7 Support"],
      icon: <Shield className="h-6 w-6" />,
      link: "/rust-hosting"
    },
    {
      name: "CS:GO Server",
      price: "₹699",
      period: "/month",
      players: "Up to 32",
      features: ["SourceMod", "MetaMod", "Custom Maps", "24/7 Support"],
      icon: <Zap className="h-6 w-6" />,
      link: "/contact-us"
    },
    {
      name: "Garry's Mod",
      price: "₹599",
      period: "/month",
      players: "Up to 50",
      features: ["Workshop Support", "Addons Manager", "Custom Gamemodes", "24/7 Support"],
      icon: <Users className="h-6 w-6" />,
      link: "/contact-us"
    },
    {
      name: "Discord Bot",
      price: "₹299",
      period: "/month",
      uptime: "99.9%",
      features: ["24/7 Online", "Auto-Restart", "Log Monitoring", "24/7 Support"],
      icon: <Globe className="h-6 w-6" />,
      link: "/bot-hosting"
    }
  ];

  const whyChooseFeatures = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "99.9% Uptime Guarantee",
      description: "Rock-solid reliability with enterprise-grade infrastructure and redundant systems.",
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast Performance",
      description: "NVMe SSD storage and high-performance processors for optimal gaming experience.",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Expert Support",
      description: "Round-the-clock technical support from gaming and hosting experts.",
      color: "from-blue-400 to-cyan-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "India-Based Infrastructure",
      description: "Low latency servers located in Mumbai, Delhi, and Bangalore data centers.",
      color: "from-orange-400 to-red-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Industry Leading Security",
      description: "Advanced DDoS protection, SSL certificates, and regular security updates.",
      color: "from-purple-400 to-pink-600"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scalable Solutions",
      description: "Easily upgrade your resources as your community grows without downtime.",
      color: "from-indigo-400 to-purple-600"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Free Migration Service",
      description: "We'll migrate your existing server for free with zero downtime guaranteed.",
      color: "from-cyan-400 to-blue-600"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Instant Setup",
      description: "Get your server up and running in minutes with our automated deployment.",
      color: "from-green-400 to-teal-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer-First Approach",
      description: "Your success is our priority. We go above and beyond for every client.",
      color: "from-pink-400 to-rose-600"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Perfect Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From starter plans to enterprise solutions, we have the perfect hosting package for your needs
          </p>
        </div>

        {/* Minecraft Hosting Plans */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center space-x-3">
            <Gamepad2 className="h-8 w-8 text-green-400" />
            <span>Minecraft Hosting</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {minecraftPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700 hover:border-purple-500/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">RAM</span>
                    <span className="text-white font-semibold">{plan.ram}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Storage</span>
                    <span className="text-white font-semibold">{plan.storage}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Players</span>
                    <span className="text-white font-semibold">{plan.players}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.link}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* VPS Hosting Plans */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center space-x-3">
            <Server className="h-8 w-8 text-blue-400" />
            <span>VPS Hosting</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vpsPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700 hover:border-blue-500/50'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">CPU</span>
                    <span className="text-white font-semibold">{plan.cpu}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">RAM</span>
                    <span className="text-white font-semibold">{plan.ram}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Storage</span>
                    <span className="text-white font-semibold">{plan.storage}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.link}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Game Hosting Plans */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center space-x-3">
            <Gamepad2 className="h-8 w-8 text-purple-400" />
            <span>Game Hosting</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gameHostingPlans.map((plan, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    {plan.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{plan.name}</h4>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-2xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  {plan.players && (
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">Players</span>
                      <span className="text-white font-semibold">{plan.players}</span>
                    </div>
                  )}
                  {plan.uptime && (
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">Uptime</span>
                      <span className="text-white font-semibold">{plan.uptime}</span>
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.link}
                  className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-center block bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Services */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Our Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the difference with our premium hosting solutions designed for gamers, by gamers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust GameHost.in for their hosting needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/minecraft-hosting"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="/contact-us"
                className="bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-200 border border-gray-600 hover:border-gray-500"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;