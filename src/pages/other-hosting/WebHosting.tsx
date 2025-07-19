import React from 'react';
import { Zap, Shield, Globe, Database, Mail, Code } from 'lucide-react';
import PageLayout from '../../components/PageLayout';

const WebHosting = () => {
  const features = [
    {
      title: 'Fast Loading Speeds',
      description: 'Optimized servers and CDN integration for lightning-fast website loading.',
      icon: <Zap className="h-6 w-6 text-white" />
    },
    {
      title: 'SSL Certificates',
      description: 'Free SSL certificates included to secure your website and boost SEO.',
      icon: <Shield className="h-6 w-6 text-white" />
    },
    {
      title: 'Domain Management',
      description: 'Easy domain registration and management tools for your online presence.',
      icon: <Globe className="h-6 w-6 text-white" />
    },
    {
      title: 'Database Support',
      description: 'MySQL and PostgreSQL databases with phpMyAdmin for easy management.',
      icon: <Database className="h-6 w-6 text-white" />
    },
    {
      title: 'Email Hosting',
      description: 'Professional email accounts with your domain name included.',
      icon: <Mail className="h-6 w-6 text-white" />
    },
    {
      title: 'Developer Friendly',
      description: 'Support for PHP, Python, Node.js, and other popular web technologies.',
      icon: <Code className="h-6 w-6 text-white" />
    }
  ];

  const plans = [
    {
      name: 'Starter Web',
      price: '₹199',
      period: '/month',
      features: [
        '1GB Storage',
        '10GB Bandwidth',
        '1 Website',
        'Free SSL Certificate',
        '5 Email Accounts',
        'cPanel Access',
        '24/7 Support'
      ]
    },
    {
      name: 'Business Web',
      price: '₹399',
      period: '/month',
      popular: true,
      features: [
        '5GB Storage',
        'Unlimited Bandwidth',
        '5 Websites',
        'Free SSL Certificate',
        '25 Email Accounts',
        'Advanced cPanel',
        'Priority Support',
        'Free Domain'
      ]
    },
    {
      name: 'Enterprise Web',
      price: '₹799',
      period: '/month',
      features: [
        '20GB Storage',
        'Unlimited Bandwidth',
        'Unlimited Websites',
        'Wildcard SSL',
        'Unlimited Emails',
        'Advanced Features',
        'Premium Support',
        'Free Migration'
      ]
    }
  ];

  return (
    <PageLayout
      title="Web Hosting Services"
      subtitle="Fast, reliable, and secure web hosting for your online presence"
      description="Host your websites with our high-performance web hosting solutions. Perfect for businesses, blogs, and e-commerce sites with Indian audience focus."
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920"
      features={features}
      plans={plans}
      gameType="Web Hosting"
    />
  );
};

export default WebHosting;