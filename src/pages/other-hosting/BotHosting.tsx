import React from 'react';
import { Zap, Shield, Bot, Code, Globe, Cpu } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const BotHosting = () => {
  const features = [
    {
      title: '24/7 Uptime',
      description: 'Keep your bots running continuously with our reliable hosting infrastructure.',
      icon: <Zap className="h-6 w-6 text-white" />
    },
    {
      title: 'Multi-Platform Support',
      description: 'Host Discord, Telegram, WhatsApp, and other platform bots seamlessly.',
      icon: <Bot className="h-6 w-6 text-white" />
    },
    {
      title: 'Easy Deployment',
      description: 'Simple deployment process with support for popular bot frameworks.',
      icon: <Code className="h-6 w-6 text-white" />
    },
    {
      title: 'Global Reach',
      description: 'Low latency connections to major bot platforms and APIs worldwide.',
      icon: <Globe className="h-6 w-6 text-white" />
    },
    {
      title: 'Resource Scaling',
      description: 'Automatically scale resources based on your bot\'s usage and demands.',
      icon: <Cpu className="h-6 w-6 text-white" />
    },
    {
      title: 'Security & Protection',
      description: 'Secure hosting environment with DDoS protection and data encryption.',
      icon: <Shield className="h-6 w-6 text-white" />
    }
  ];

  const plans = [
    {
      name: 'Bot Starter',
      price: '₹299',
      period: '/month',
      features: [
        '1GB RAM',
        '10GB Storage',
        '1 Bot Instance',
        'Discord/Telegram Support',
        'Basic Monitoring',
        'Email Support',
        '99.9% Uptime'
      ]
    },
    {
      name: 'Bot Professional',
      price: '₹599',
      period: '/month',
      popular: true,
      features: [
        '2GB RAM',
        '25GB Storage',
        '3 Bot Instances',
        'Multi-Platform Support',
        'Advanced Monitoring',
        'Priority Support',
        'Auto Restart',
        'Custom Domains'
      ]
    },
    {
      name: 'Bot Enterprise',
      price: '₹1,199',
      period: '/month',
      features: [
        '4GB RAM',
        '50GB Storage',
        'Unlimited Bots',
        'All Platforms',
        'Real-time Analytics',
        'Premium Support',
        'Load Balancing',
        'API Access'
      ]
    }
  ];

  return (
    <PageLayout
      title="Bot Hosting Services"
      subtitle="Keep your bots online 24/7 with reliable hosting infrastructure"
      description="Host Discord bots, Telegram bots, and other automated services with our specialized bot hosting platform. Perfect for communities and businesses."
      heroImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920"
      features={features}
      plans={plans}
      gameType="Bot Hosting"
    />
  );
};

export default BotHosting;