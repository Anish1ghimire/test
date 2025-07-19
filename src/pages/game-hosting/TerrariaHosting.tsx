import React from 'react';
import { Zap, Shield, Users, HardDrive, Cpu, Gamepad2 } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const TerrariaHosting = () => {
  const features = [
    {
      title: 'Optimized Performance',
      description: 'Servers optimized specifically for Terraria\'s unique requirements.',
      icon: <Cpu className="h-6 w-6 text-white" />
    },
    {
      title: 'Mod Support',
      description: 'Full support for tModLoader and popular Terraria modifications.',
      icon: <Gamepad2 className="h-6 w-6 text-white" />
    },
    {
      title: 'Easy World Management',
      description: 'Simple tools to upload, backup, and manage your Terraria worlds.',
      icon: <HardDrive className="h-6 w-6 text-white" />
    },
    {
      title: 'Multi-Player Support',
      description: 'Host servers for friends and communities with stable connections.',
      icon: <Users className="h-6 w-6 text-white" />
    },
    {
      title: 'DDoS Protection',
      description: 'Keep your Terraria server protected from malicious attacks.',
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      title: 'Low Latency',
      description: 'India-based servers for smooth gameplay without lag.',
      icon: <Zap className="h-6 w-6 text-white" />
    }
  ];

  const plans = [
    {
      name: 'Explorer',
      price: '₹399',
      period: '/month',
      features: [
        '2GB RAM',
        '25GB SSD Storage',
        'Up to 8 Players',
        'Mod Support',
        'World Backups',
        'DDoS Protection',
        '24/7 Support'
      ]
    },
    {
      name: 'Adventurer',
      price: '₹699',
      period: '/month',
      popular: true,
      features: [
        '4GB RAM',
        '50GB SSD Storage',
        'Up to 16 Players',
        'tModLoader Support',
        'Auto Backups',
        'Priority Support',
        'Custom Configurations',
        'Dedicated IP'
      ]
    },
    {
      name: 'Master Builder',
      price: '₹1,199',
      period: '/month',
      features: [
        '8GB RAM',
        '100GB SSD Storage',
        'Up to 32 Players',
        'Unlimited Mods',
        'Daily Backups',
        'Premium Support',
        'Multiple Worlds',
        'Advanced Settings'
      ]
    }
  ];

  return (
    <PageLayout
      title="Terraria Server Hosting"
      subtitle="Dig, fight, explore, and build in your own Terraria world"
      description="Host your Terraria server with mod support, world management tools, and reliable performance. Perfect for building and adventure with friends."
      heroImage="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1920"
      features={features}
      plans={plans}
      gameType="Terraria"
    />
  );
};

export default TerrariaHosting;