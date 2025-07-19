import React from 'react';
import { Globe, Shield, Zap, Search, Lock, Headphones } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const DomainSelling = () => {
  const features = [
    {
      title: 'Wide Selection',
      description: 'Choose from hundreds of domain extensions including .com, .in, .org, and more.',
      icon: <Globe className="h-6 w-6 text-white" />
    },
    {
      title: 'Domain Privacy',
      description: 'Protect your personal information with WHOIS privacy protection included.',
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      title: 'Instant Activation',
      description: 'Get your domain activated immediately after purchase with instant setup.',
      icon: <Zap className="h-6 w-6 text-white" />
    },
    {
      title: 'Domain Search',
      description: 'Advanced domain search tools to find the perfect domain for your business.',
      icon: <Search className="h-6 w-6 text-white" />
    },
    {
      title: 'DNS Management',
      description: 'Full DNS control with easy-to-use management tools and advanced options.',
      icon: <Lock className="h-6 w-6 text-white" />
    },
    {
      title: 'Expert Support',
      description: '24/7 support from domain experts to help with transfers and configurations.',
      icon: <Headphones className="h-6 w-6 text-white" />
    }
  ];

  const plans = [
    {
      name: '.com Domain',
      price: '₹899',
      period: '/year',
      features: [
        'Most Popular Extension',
        'Global Recognition',
        'Free WHOIS Privacy',
        'DNS Management',
        'Email Forwarding',
        'Domain Forwarding',
        '24/7 Support'
      ]
    },
    {
      name: '.in Domain',
      price: '₹599',
      period: '/year',
      popular: true,
      features: [
        'Perfect for India',
        'Local SEO Benefits',
        'Free WHOIS Privacy',
        'Advanced DNS Tools',
        'Email Forwarding',
        'Subdomain Support',
        'Priority Support',
        'Free SSL Ready'
      ]
    },
    {
      name: 'Premium Domains',
      price: '₹2,999',
      period: '/year',
      features: [
        'Premium Extensions',
        'Short & Memorable',
        'Enhanced Privacy',
        'Advanced Features',
        'Priority DNS',
        'Premium Support',
        'Domain Monitoring',
        'Transfer Protection'
      ]
    }
  ];

  return (
    <PageLayout
      title="Domain Registration & Sales"
      subtitle="Secure your perfect domain name with competitive pricing"
      description="Register your domain name with our reliable domain registration service. Choose from hundreds of extensions with instant activation and full management tools."
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920"
      features={features}
      plans={plans}
      gameType="Domain Services"
    />
  );
};

export default DomainSelling;