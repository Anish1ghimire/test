import React from 'react';
import { Zap, Shield, HardDrive, Cpu, Globe, Terminal } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const AMDVps = () => {
  const features = [
    {
      title: 'AMD Ryzen Performance',
      description: 'Latest AMD Ryzen processors delivering exceptional performance per core.',
      icon: <Cpu className="h-6 w-6 text-white" />
    },
    {
      title: 'NVMe SSD Storage',
      description: 'Ultra-fast NVMe SSD storage for lightning-quick data access and boot times.',
      icon: <HardDrive className="h-6 w-6 text-white" />
    },
    {
      title: 'Full Root Access',
      description: 'Complete control over your server with root access and custom configurations.',
      icon: <Terminal className="h-6 w-6 text-white" />
    },
    {
      title: 'Global Connectivity',
      description: 'Excellent network connectivity with low latency across India and beyond.',
      icon: <Globe className="h-6 w-6 text-white" />
    },
    {
      title: 'DDoS Protection',
      description: 'Enterprise-grade DDoS protection included with all VPS plans.',
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      title: 'Instant Deployment',
      description: 'Get your VPS up and running within minutes of ordering.',
      icon: <Zap className="h-6 w-6 text-white" />
    }
  ];

  const plans = [
    {
      name: 'AMD Starter',
      price: '₹899',
      period: '/month',
      features: [
        '2 vCPU AMD Ryzen',
        '4GB RAM',
        '50GB NVMe SSD',
        '1TB Bandwidth',
        'Full Root Access',
        'DDoS Protection',
        '24/7 Support'
      ]
    },
    {
      name: 'AMD Professional',
      price: '₹1,499',
      period: '/month',
      popular: true,
      features: [
        '4 vCPU AMD Ryzen',
        '8GB RAM',
        '100GB NVMe SSD',
        'Unlimited Bandwidth',
        'Full Root Access',
        'Priority Support',
        'Free Backups',
        'Dedicated IP'
      ]
    },
    {
      name: 'AMD Enterprise',
      price: '₹2,999',
      period: '/month',
      features: [
        '8 vCPU AMD Ryzen',
        '16GB RAM',
        '200GB NVMe SSD',
        'Unlimited Bandwidth',
        'Multiple IPs',
        'Premium Support',
        'Daily Backups',
        'Load Balancing'
      ]
    }
  ];

  return (
    <PageLayout
      title="AMD Ryzen VPS Hosting"
      subtitle="Powerful AMD Ryzen processors for demanding applications"
      description="Experience exceptional performance with our AMD Ryzen VPS servers. Perfect for high-performance applications, gaming servers, and development environments."
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920"
      features={features}
      plans={plans}
      gameType="AMD VPS"
    />
  );
};

export default AMDVps;