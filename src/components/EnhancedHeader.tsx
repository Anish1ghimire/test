import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Gamepad2, Server, Shield, FileText, Sparkles } from 'lucide-react';

const EnhancedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gameHostingItems = [
    { name: 'Minecraft Hosting', path: '/minecraft-hosting', icon: '🎮' },
    { name: 'Ark Hosting', path: '/ark-hosting', icon: '🦕' },
    { name: 'FiveM Hosting', path: '/fivem-hosting', icon: '🚗' },
    { name: 'Terraria Hosting', path: '/terraria-hosting', icon: '⛏️' },
    { name: 'Rust Hosting', path: '/rust-hosting', icon: '🔥' },
    { name: 'Valheim Hosting', path: '/valheim-hosting', icon: '⚔️' },
    { name: 'Palworld Hosting', path: '/palworld-hosting', icon: '🐾' }
  ];

  const otherHostingItems = [
    { name: 'AMD VPS', path: '/amd-vps', icon: '💻' },
    { name: 'Intel VPS', path: '/intel-vps', icon: '🖥️' },
    { name: 'Web Hosting', path: '/web-hosting', icon: '🌐' },
    { name: 'Bot Hosting', path: '/bot-hosting', icon: '🤖' },
    { name: 'Domain Selling', path: '/domain-selling', icon: '🔗' }
  ];

  const importantItems = [
    { name: 'Our Commitment', path: '/our-commitment' },
    { name: 'Career', path: '/career' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
    { name: 'Infrastructure', path: '/infrastructure' },
    { name: 'Partnership', path: '/partnership' }
  ];

  const legalItems = [
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Refund Policy', path: '/refund-policy' },
    { name: 'Usage Policy', path: '/usage-policy' }
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 text-center text-sm animate-pulse">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="h-4 w-4" />
          <span>🎉 Summer Sale: 30% OFF all hosting plans! Limited time offer.</span>
          <button className="underline hover:no-underline font-semibold">Shop Now</button>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-2xl' 
          : 'bg-gray-900/80 backdrop-blur-sm border-b border-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo with animation */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Gamepad2 className="h-7 w-7 text-white" />
                </div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 group-hover:animate-ping"></div>
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                GameHost.in
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Game Hosting Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => handleDropdownToggle('game')}
                >
                  <Gamepad2 className="h-4 w-4" />
                  <span>Game Hosting</span>
                  <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-3">
                    {gameHostingItems.map((item, index) => (
                      <Link 
                        key={index} 
                        to={item.path} 
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 group/item"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="group-hover/item:translate-x-1 transition-transform duration-200">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other Hosting Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => handleDropdownToggle('other')}
                >
                  <Server className="h-4 w-4" />
                  <span>Other Hosting</span>
                  <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-3">
                    {otherHostingItems.map((item, index) => (
                      <Link 
                        key={index} 
                        to={item.path} 
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 group/item"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="group-hover/item:translate-x-1 transition-transform duration-200">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Important Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => handleDropdownToggle('important')}
                >
                  <Shield className="h-4 w-4" />
                  <span>Important</span>
                  <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-3">
                    {importantItems.map((item, index) => (
                      <Link key={index} to={item.path} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 hover:translate-x-1">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Legal Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => handleDropdownToggle('legal')}
                >
                  <FileText className="h-4 w-4" />
                  <span>Legal</span>
                  <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-3">
                    {legalItems.map((item, index) => (
                      <Link key={index} to={item.path} className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200 hover:translate-x-1">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Right Side Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">
                Try For Free
              </button>
              <button className="text-gray-300 hover:text-white transition-colors hover:scale-105 transform duration-200">
                Login
              </button>
              <button className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold transform hover:scale-105 hover:shadow-lg overflow-hidden group">
                <span className="relative z-10">Order Now</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-300 hover:text-white transform hover:scale-110 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-800 animate-fade-in">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="text-gray-300 font-semibold">Game Hosting</div>
                  {gameHostingItems.map((item, index) => (
                    <Link key={index} to={item.path} className="flex items-center space-x-2 pl-4 text-gray-400 hover:text-white text-sm py-1 hover:translate-x-1 transition-all duration-200">
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="text-gray-300 font-semibold">Other Hosting</div>
                  {otherHostingItems.map((item, index) => (
                    <Link key={index} to={item.path} className="flex items-center space-x-2 pl-4 text-gray-400 hover:text-white text-sm py-1 hover:translate-x-1 transition-all duration-200">
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="pt-4 space-y-2">
                  <button className="block w-full text-left text-gray-300 hover:text-white py-2 hover:translate-x-1 transition-all duration-200">Try For Free</button>
                  <button className="block w-full text-left text-gray-300 hover:text-white py-2 hover:translate-x-1 transition-all duration-200">Login</button>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold transform hover:scale-105">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default EnhancedHeader;