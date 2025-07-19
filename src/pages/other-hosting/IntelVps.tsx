import React from 'react';
import { Zap, Shield, HardDrive, Cpu, Globe, Terminal } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const IntelVps = () => {
  const features = [
    {
      title: 'Intel Xeon Performance',
      description: 'Enterprise-grade Intel Xeon processors for reliable, consistent performance.',
      icon: <Cpu className="h-6 w-6 text-white" />
    },
    {
      title: 'SSD Storage',
      description: 'High-speed SSD storage for fast data access and improved performance.',
      icon: <HardDrive className="h-6 w-6 text-white" />
    },
    {
      title: 'Full Root Access',
      description: 'Complete administrative control with root access and custom configurations.',
      icon: <Terminal className="h-6 w-6 text-white" />
    },
    {
      title: 'Network Performance',
      description: 'Optimized network infrastructure for excellent connectivity and speed.',
      icon: <Globe className="h-6 w-6 text-white" />
    },
    {
      title: 'Security Features',
      description: 'Advanced security measures including DDoS protection and firewalls.',
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      title: 'Quick Setup',
      description: 'Rapid deployment with your VPS ready in minutes.',
      icon: <Zap className="h-6 w-6 text-white" />
    }
  ];

  const plans = [
    {
      name: 'Intel Basic',
      price: '₹799',
      period: '/month',
      features: [
        '2 vCPU Intel Xeon',
        '4GB RAM',
        '40GB SSD Storage',
        '1TB Bandwidth',
        'Full Root Access',
        'DDoS Protection',
        '24/7 Support'
      ]
    },
    {
      name: 'Intel Pro',
      price: '₹1,299',
      period: '/month',
      popular: true,
      features: [
        '4 vCPU Intel Xeon',
        '8GB RAM',
        '80GB SSD Storage',
        'Unlimited Bandwidth',
        'Full Root Access',
        'Priority Support',
        'Free Backups',
        'Dedicated IP'
      ]
    },
    {
      name: 'Intel Enterprise',
      price: '₹2,499',
      period: '/month',
      features: [
        '8 vCPU Intel Xeon',
        '16GB RAM',
        '160GB SSD Storage',
        'Unlimited Bandwidth',
        'Multiple IPs',
        'Premium Support',
        'Daily Backups',
        'Advanced Security'
      ]
    }
  ];

  return (
    <PageLayout
      title="Intel Xeon VPS Hosting"
      subtitle="Enterprise-grade Intel Xeon processors for mission-critical applications"
      description="Reliable and consistent performance with Intel Xeon VPS servers. Ideal for business applications, databases, and enterprise workloads."
      heroImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920"
      features={features}
      plans={plans}
      gameType="Intel VPS"
    />
  );
};

export default IntelVps;