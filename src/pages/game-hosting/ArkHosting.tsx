import React from 'react';
import { Zap, Shield, Users, HardDrive, Cpu, Settings } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const ArkHosting = () => {
  const features = [
    {
      title: 'High-Performance Hardware',
      description: 'Powerful CPUs and RAM to handle ARK\'s demanding requirements smoothly.',
      icon: <Cpu className="h-6 w-6 text-white" />
    },
    {
      title: 'Mod Support',
      description: 'Full support for ARK mods and custom configurations for enhanced gameplay.',
      icon: <Settings className="h-6 w-6 text-white" />
    },
    {
      title: 'Large Player Capacity',
      description: 'Support for large tribes and communities with optimized server performance.',
      icon: <Users className="h-6 w-6 text-white" />
    },
    {
      title: 'Fast SSD Storage',
      description: 'Quick map loading and reduced lag with high-speed SSD storage.',
      icon: <HardDrive className="h-6 w-6 text-white" />
    },
    {
      title: 'DDoS Protection',
      description: 'Enterprise-grade protection to keep your ARK server online.',
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      title: 'Low Latency',
      description: 'India-based servers for the best possible connection for Indian players.',
      icon: <Zap className="h-6 w-6 text-white" />
    }
  ];

  const plans = [
    {
      name: 'Survivor',
      price: '₹799',
      period: '/month',
      features: [
        '6GB RAM',
        '50GB SSD Storage',
        'Up to 20 Players',
        'Mod Support',
        'Auto Backups',
        'DDoS Protection',
        '24/7 Support'
      ]
    },
    {
      name: 'Tribe Leader',
      price: '₹1,299',
      period: '/month',
      popular: true,
      features: [
        '10GB RAM',
        '100GB SSD Storage',
        'Up to 50 Players',
        'Full Mod Support',
        'Daily Backups',
        'Priority Support',
        'Custom Settings',
        'Dedicated IP'
      ]
    },
    {
      name: 'Alpha Tribe',
      price: '₹2,199',
      period: '/month',
      features: [
        '16GB RAM',
        '200GB SSD Storage',
        'Up to 100 Players',
        'Unlimited Mods',
        'Hourly Backups',
        'Premium Support',
        'Custom Configurations',
        'Multiple Maps'
      ]
    }
  ];

  return (
    <PageLayout
      title="ARK: Survival Evolved Hosting"
      subtitle="Survive and thrive in the ultimate dinosaur survival experience"
      description="Host your own ARK server with powerful hardware, mod support, and low latency connections. Perfect for tribes and large communities."
      heroImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920"
      features={features}
      plans={plans}
      gameType="ARK"
    />
  );
};

export default ArkHosting;