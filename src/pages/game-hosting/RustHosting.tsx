import React from 'react';
import { Zap, Shield, Users, HardDrive, Cpu, Settings } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const RustHosting = () => {
  const features = [
    {
      title: 'High-Performance Hardware',
      description: 'Powerful servers capable of handling Rust\'s demanding requirements.',
      icon: <Cpu className="h-6 w-6 text-white" />
    },
    {
      title: 'Oxide Plugin Support',
      description: 'Full support for Oxide framework and popular Rust plugins.',
      icon: <Settings className="h-6 w-6 text-white" />
    },
    {
      title: 'Large Player Capacity',
      description: 'Support for high-population servers with stable performance.',
      icon: <Users className="h-6 w-6 text-white" />
    },
    {
      title: 'Auto Wipe System',
      description: 'Automated server wipes and map rotations for fresh gameplay.',
      icon: <HardDrive className="h-6 w-6 text-white" />
    },
    {
      title: 'DDoS Protection',
      description: 'Enterprise-grade protection against attacks and griefing.',
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      title: 'Low Latency',
      description: 'India-based servers for optimal connection quality.',
      icon: <Zap className="h-6 w-6 text-white" />
    }
  ];

  const plans = [
    {
      name: 'Survivor',
      price: '₹999',
      period: '/month',
      features: [
        '8GB RAM',
        '60GB SSD Storage',
        'Up to 50 Players',
        'Oxide Support',
        'Auto Wipes',
        'DDoS Protection',
        '24/7 Support'
      ]
    },
    {
      name: 'Clan Leader',
      price: '₹1,699',
      period: '/month',
      popular: true,
      features: [
        '12GB RAM',
        '120GB SSD Storage',
        'Up to 100 Players',
        'Unlimited Plugins',
        'Custom Wipe Schedule',
        'Priority Support',
        'Auto Backups',
        'Dedicated IP'
      ]
    },
    {
      name: 'Warlord',
      price: '₹2,999',
      period: '/month',
      features: [
        '20GB RAM',
        '200GB SSD Storage',
        'Up to 200 Players',
        'Custom Plugins',
        'Advanced Configurations',
        'Premium Support',
        'Multiple Maps',
        'Load Balancing'
      ]
    }
  ];

  return (
    <PageLayout
      title="Rust Server Hosting"
      subtitle="Survive, build, and dominate in the ultimate survival experience"
      description="Host your own Rust server with high-performance hardware, plugin support, and automated systems. Perfect for clans and competitive gameplay."
      heroImage="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920"
      features={features}
      plans={plans}
      gameType="Rust"
    />
  );
};

export default RustHosting;