import React from 'react';
import { Zap, Shield, Users, HardDrive, Cpu, Gamepad2 } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const ValheimHosting = () => {
  const features = [
    {
      title: 'Optimized for Valheim',
      description: 'Servers specifically configured for Valheim\'s unique networking needs.',
      icon: <Cpu className="h-6 w-6 text-white" />
    },
    {
      title: 'Mod Support',
      description: 'Full support for BepInEx and popular Valheim modifications.',
      icon: <Gamepad2 className="h-6 w-6 text-white" />
    },
    {
      title: 'World Persistence',
      description: 'Reliable world saving and backup systems for your Viking adventures.',
      icon: <HardDrive className="h-6 w-6 text-white" />
    },
    {
      title: 'Co-op Friendly',
      description: 'Perfect for small groups and large Viking communities alike.',
      icon: <Users className="h-6 w-6 text-white" />
    },
    {
      title: 'Server Protection',
      description: 'DDoS protection and security measures for uninterrupted gameplay.',
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      title: 'Low Latency',
      description: 'India-based servers for smooth exploration and combat.',
      icon: <Zap className="h-6 w-6 text-white" />
    }
  ];

  const plans = [
    {
      name: 'Viking',
      price: '₹599',
      period: '/month',
      features: [
        '4GB RAM',
        '40GB SSD Storage',
        'Up to 10 Players',
        'Mod Support',
        'World Backups',
        'DDoS Protection',
        '24/7 Support'
      ]
    },
    {
      name: 'Jarl',
      price: '₹999',
      period: '/month',
      popular: true,
      features: [
        '6GB RAM',
        '80GB SSD Storage',
        'Up to 20 Players',
        'BepInEx Support',
        'Auto Backups',
        'Priority Support',
        'Custom Settings',
        'Dedicated IP'
      ]
    },
    {
      name: 'Odin\'s Chosen',
      price: '₹1,699',
      period: '/month',
      features: [
        '12GB RAM',
        '160GB SSD Storage',
        'Up to 50 Players',
        'Unlimited Mods',
        'Daily Backups',
        'Premium Support',
        'Multiple Worlds',
        'Advanced Configurations'
      ]
    }
  ];

  return (
    <PageLayout
      title="Valheim Server Hosting"
      subtitle="Embark on epic Viking adventures with your clan"
      description="Host your Valheim server with optimized performance, mod support, and reliable world persistence. Perfect for Viking expeditions and base building."
      heroImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920"
      features={features}
      plans={plans}
      gameType="Valheim"
    />
  );
};

export default ValheimHosting;