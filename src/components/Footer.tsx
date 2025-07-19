import React from 'react';
import { 
  Gamepad2, 
  Server, 
  Globe, 
  Bot, 
  Cpu, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  MessageSquare,
  CreditCard,
  Smartphone,
  Building,
  Shield
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">GameHost.in</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                India's premier gaming and web hosting provider. Delivering high-performance, 
                low-latency hosting solutions from our state-of-the-art data centers across India.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">Mumbai, Delhi, Bangalore</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-4 w-4 text-green-400" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <span className="text-sm">support@gamehost.in</span>
                </div>
              </div>
            </div>

            {/* Game Hosting */}
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center space-x-2">
                <Gamepad2 className="h-4 w-4 text-blue-400" />
                <span>Game Hosting</span>
              </h3>
              <ul className="space-y-3">
                {[
                  'Minecraft Hosting',
                  'Ark Hosting',
                  'FiveM Hosting',
                  'Terraria Hosting',
                  'Rust Hosting',
                  'Valheim Hosting',
                  'Palworld Hosting'
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Services */}
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center space-x-2">
                <Server className="h-4 w-4 text-purple-400" />
                <span>Other Services</span>
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2">
                    <Cpu className="h-3 w-3 text-blue-400" />
                    <span>Intel VPS</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2">
                    <Cpu className="h-3 w-3 text-red-400" />
                    <span>AMD VPS</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2">
                    <Globe className="h-3 w-3 text-green-400" />
                    <span>Web Hosting</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2">
                    <Bot className="h-3 w-3 text-yellow-400" />
                    <span>Bot Hosting</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-2">
                    <Globe className="h-3 w-3 text-purple-400" />
                    <span>Domain Selling</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Company & Legal */}
            <div>
              <h3 className="text-white font-semibold mb-6 flex items-center space-x-2">
                <Building className="h-4 w-4 text-green-400" />
                <span>Company & Legal</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-300 font-medium mb-2 text-sm">Company</h4>
                  <ul className="space-y-2">
                    {[
                      'About Us',
                      'Our Commitment',
                      'Career',
                      'Contact Us',
                      'Infrastructure',
                      'Partnership'
                    ].map((item, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium mb-2 text-sm">Legal</h4>
                  <ul className="space-y-2">
                    {[
                      'Terms of Service',
                      'Privacy Policy',
                      'Refund Policy',
                      'Usage Policy'
                    ].map((item, index) => (
                      <li key={index}>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
                <p className="text-gray-400 text-sm">
                  Get the latest news, updates, and exclusive offers delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <MessageSquare className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">We accept:</span>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 bg-gray-800 rounded px-2 py-1">
                  <Smartphone className="h-4 w-4 text-green-400" />
                  <span className="text-gray-300 text-xs">UPI</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-800 rounded px-2 py-1">
                  <Building className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300 text-xs">Razorpay</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-800 rounded px-2 py-1">
                  <CreditCard className="h-4 w-4 text-purple-400" />
                  <span className="text-gray-300 text-xs">PayPal</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-800 rounded px-2 py-1">
                  <CreditCard className="h-4 w-4 text-yellow-400" />
                  <span className="text-gray-300 text-xs">Cards</span>
                </div>
              </div>
            </div>

            {/* Data Center Info */}
            <div className="flex items-center space-x-3">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-gray-400 text-sm">Secured by Indian Data Centers</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 GameHost.in. All rights reserved. | Made with ❤️ in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;