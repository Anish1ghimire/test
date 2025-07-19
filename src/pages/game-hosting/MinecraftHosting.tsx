import React from 'react';
import { Zap, Shield, Users, HardDrive, Cpu, Globe } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const MinecraftHosting = () => {
  const features = [
    {
      title: 'Ultra-Low Latency',
      description: 'Experience lag-free gameplay with our India-based servers optimized for Minecraft.',
      icon: <Zap className="h-6 w-6 text-white" />
    },
    {
      title: 'DDoS Protection',
      description: 'Advanced protection against attacks to keep your server online 24/7.',
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      title: 'Easy Player Management',
      description: 'Intuitive control panel to manage players, plugins, and server settings.',
      icon: <Users className="h-6 w-6 text-white" />
    },
    {
      title: 'SSD Storage',
      description: 'Lightning-fast SSD storage for quick world loading and smooth gameplay.',
      icon: <HardDrive className="h-6 w-6 text-white" />
    },
    {
      title: 'High-Performance CPU',
      description: 'Powerful processors to handle large player counts and complex mods.',
      icon: <Cpu className="h-6 w-6 text-white" />
    },
    {
      title: 'Global Reach',
      description: 'Connect players from across India with optimized network routing.',
      icon: <Globe className="h-6 w-6 text-white" />
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: '₹299',
      period: '/month',
      features: [
        '2GB RAM',
        '20GB SSD Storage',
        'Up to 10 Players',
        'Free Subdomain',
        'DDoS Protection',
        'Plugin Support',
        '24/7 Support'
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
        'Unlimited Plugins',
        'Auto Backups',
        'Priority Support'
      ]
    },
    {
      name: 'Enterprise',
      price: '₹1,199',
      period: '/month',
      features: [
        '8GB RAM',
        '80GB SSD Storage',
        'Unlimited Players',
        'Free Domain + SSL',
        'Premium Support',
        'Custom Plugins',
        'Daily Backups',
        'Dedicated IP'
      ]
    }
  ];

  return (
    <PageLayout
      title="Minecraft Hosting"
      subtitle="Build, explore, and survive with friends on our premium Minecraft servers"
      description="Experience the ultimate Minecraft hosting with ultra-low latency, powerful hardware, and 24/7 support. Perfect for survival, creative, and modded servers."
      heroImage="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920"
      features={features}
      plans={plans}
      gameType="Minecraft"
    />
  );
};

export default MinecraftHosting;