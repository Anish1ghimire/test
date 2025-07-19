import React from 'react';
import { Zap, Shield, Users, HardDrive, Cpu, Heart } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const PalworldHosting = () => {
  const features = [
    {
      title: 'Optimized Performance',
      description: 'Servers optimized for Palworld\'s unique gameplay and Pal management.',
      icon: <Cpu className="h-6 w-6 text-white" />
    },
    {
      title: 'Pal-Friendly Environment',
      description: 'Stable servers that handle large numbers of Pals without performance issues.',
      icon: <Heart className="h-6 w-6 text-white" />
    },
    {
      title: 'Multiplayer Support',
      description: 'Host servers for friends to explore and catch Pals together.',
      icon: <Users className="h-6 w-6 text-white" />
    },
    {
      title: 'World Persistence',
      description: 'Reliable save systems to protect your Pal collection and base progress.',
      icon: <HardDrive className="h-6 w-6 text-white" />
    },
    {
      title: 'Server Security',
      description: 'DDoS protection and security measures for safe gameplay.',
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      title: 'Low Latency',
      description: 'India-based servers for smooth Pal catching and battles.',
      icon: <Zap className="h-6 w-6 text-white" />
    }
  ];

  const plans = [
    {
      name: 'Pal Trainer',
      price: '₹699',
      period: '/month',
      features: [
        '4GB RAM',
        '50GB SSD Storage',
        'Up to 8 Players',
        'Pal Management',
        'World Backups',
        'DDoS Protection',
        '24/7 Support'
      ]
    },
    {
      name: 'Pal Master',
      price: '₹1,199',
      period: '/month',
      popular: true,
      features: [
        '8GB RAM',
        '100GB SSD Storage',
        'Up to 16 Players',
        'Advanced Pal Features',
        'Auto Backups',
        'Priority Support',
        'Custom Settings',
        'Dedicated IP'
      ]
    },
    {
      name: 'Pal Champion',
      price: '₹1,999',
      period: '/month',
      features: [
        '16GB RAM',
        '200GB SSD Storage',
        'Up to 32 Players',
        'Unlimited Pals',
        'Daily Backups',
        'Premium Support',
        'Multiple Worlds',
        'Advanced Configurations'
      ]
    }
  ];

  return (
    <PageLayout
      title="Palworld Server Hosting"
      subtitle="Catch, train, and battle with Pals in your own world"
      description="Host your Palworld server with optimized performance for Pal management, multiplayer adventures, and base building. Perfect for friends and communities."
      heroImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920"
      features={features}
      plans={plans}
      gameType="Palworld"
    />
  );
};

export default PalworldHosting;