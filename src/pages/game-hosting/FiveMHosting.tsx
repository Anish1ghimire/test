import React from 'react';
import { Zap, Shield, Users, Database, Cpu, Code } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const FiveMHosting = () => {
  const features = [
    {
      title: 'High Player Capacity',
      description: 'Support for large FiveM servers with up to 128+ players simultaneously.',
      icon: <Users className="h-6 w-6 text-white" />
    },
    {
      title: 'Script Support',
      description: 'Full support for custom scripts, resources, and modifications.',
      icon: <Code className="h-6 w-6 text-white" />
    },
    {
      title: 'MySQL Database',
      description: 'Included MySQL database for storing player data and server information.',
      icon: <Database className="h-6 w-6 text-white" />
    },
    {
      title: 'Powerful Hardware',
      description: 'High-performance CPUs optimized for FiveM server requirements.',
      icon: <Cpu className="h-6 w-6 text-white" />
    },
    {
      title: 'DDoS Protection',
      description: 'Advanced protection against attacks to maintain server stability.',
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      title: 'Low Latency',
      description: 'India-based servers ensuring smooth gameplay for local players.',
      icon: <Zap className="h-6 w-6 text-white" />
    }
  ];

  const plans = [
    {
      name: 'Rookie',
      price: '₹1,299',
      period: '/month',
      features: [
        '8GB RAM',
        '80GB SSD Storage',
        'Up to 32 Players',
        'MySQL Database',
        'Script Support',
        'DDoS Protection',
        '24/7 Support'
      ]
    },
    {
      name: 'Professional',
      price: '₹1,999',
      period: '/month',
      popular: true,
      features: [
        '12GB RAM',
        '120GB SSD Storage',
        'Up to 64 Players',
        'MySQL Database',
        'Unlimited Scripts',
        'Priority Support',
        'Auto Backups',
        'Dedicated IP'
      ]
    },
    {
      name: 'Enterprise',
      price: '₹3,499',
      period: '/month',
      features: [
        '20GB RAM',
        '200GB SSD Storage',
        'Up to 128 Players',
        'Multiple Databases',
        'Custom Resources',
        'Premium Support',
        'Daily Backups',
        'Load Balancing'
      ]
    }
  ];

  return (
    <PageLayout
      title="FiveM Server Hosting"
      subtitle="Create your own GTA V roleplay server with unlimited possibilities"
      description="Host professional FiveM servers with powerful hardware, script support, and databases. Perfect for roleplay communities and custom game modes."
      heroImage="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920"
      features={features}
      plans={plans}
      gameType="FiveM"
    />
  );
};

export default FiveMHosting;