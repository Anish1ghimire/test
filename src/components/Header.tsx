import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Gamepad2, Server, Shield, FileText } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const gameHostingItems = [
    { name: 'Minecraft Hosting', path: '/minecraft-hosting' },
    { name: 'Ark Hosting', path: '/ark-hosting' },
    { name: 'FiveM Hosting', path: '/fivem-hosting' },
    { name: 'Terraria Hosting', path: '/terraria-hosting' },
    { name: 'Rust Hosting', path: '/rust-hosting' },
    { name: 'Valheim Hosting', path: '/valheim-hosting' },
    { name: 'Palworld Hosting', path: '/palworld-hosting' }
  ];

  const otherHostingItems = [
    { name: 'AMD VPS', path: '/amd-vps' },
    { name: 'Intel VPS', path: '/intel-vps' },
    { name: 'Web Hosting', path: '/web-hosting' },
    { name: 'Bot Hosting', path: '/bot-hosting' },
    { name: 'Domain Selling', path: '/domain-selling' }
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
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">GameHost.in</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Game Hosting Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                onClick={() => handleDropdownToggle('game')}
              >
                <Gamepad2 className="h-4 w-4" />
                <span>Game Hosting</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {gameHostingItems.map((item, index) => (
                    <Link key={index} to={item.path} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Hosting Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                onClick={() => handleDropdownToggle('other')}
              >
                <Server className="h-4 w-4" />
                <span>Other Hosting</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {otherHostingItems.map((item, index) => (
                    <Link key={index} to={item.path} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Important Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                onClick={() => handleDropdownToggle('important')}
              >
                <Shield className="h-4 w-4" />
                <span>Important</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {importantItems.map((item, index) => (
                    <Link key={index} to={item.path} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Legal Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                onClick={() => handleDropdownToggle('legal')}
              >
                <FileText className="h-4 w-4" />
                <span>Legal</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  {legalItems.map((item, index) => (
                    <Link key={index} to={item.path} className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              Try For Free
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              Login
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold">Game Hosting</div>
                {gameHostingItems.map((item, index) => (
                  <Link key={index} to={item.path} className="block pl-4 text-gray-400 hover:text-white text-sm">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold">Other Hosting</div>
                {otherHostingItems.map((item, index) => (
                  <Link key={index} to={item.path} className="block pl-4 text-gray-400 hover:text-white text-sm">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold">Important</div>
                {importantItems.map((item, index) => (
                  <Link key={index} to={item.path} className="block pl-4 text-gray-400 hover:text-white text-sm">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold">Legal</div>
                {legalItems.map((item, index) => (
                  <Link key={index} to={item.path} className="block pl-4 text-gray-400 hover:text-white text-sm">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 space-y-2">
                <button className="block w-full text-left text-gray-300 hover:text-white">Try For Free</button>
                <button className="block w-full text-left text-gray-300 hover:text-white">Login</button>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;