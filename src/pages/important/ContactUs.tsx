import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones } from 'lucide-react';

const ContactUs = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      title: 'Phone Support',
      description: '24/7 phone support for urgent issues',
      contact: '+91 98765 43210',
      availability: 'Available 24/7'
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: 'Email Support',
      description: 'Get detailed help via email',
      contact: 'support@gamehost.in',
      availability: 'Response within 2 hours'
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: 'Live Chat',
      description: 'Instant chat support on our website',
      contact: 'Available on website',
      availability: '24/7 Live Chat'
    },
    {
      icon: <Headphones className="h-6 w-6 text-white" />,
      title: 'Technical Support',
      description: 'Specialized technical assistance',
      contact: 'tech@gamehost.in',
      availability: 'Priority response'
    }
  ];

  const offices = [
    {
      city: 'Mumbai',
      address: '123 Business District, Bandra Kurla Complex, Mumbai 400051',
      phone: '+91 98765 43210',
      type: 'Headquarters'
    },
    {
      city: 'Bangalore',
      address: '456 Tech Park, Electronic City, Bangalore 560100',
      phone: '+91 98765 43211',
      type: 'Development Center'
    },
    {
      city: 'Delhi',
      address: '789 Corporate Hub, Connaught Place, New Delhi 110001',
      phone: '+91 98765 43212',
      type: 'Regional Office'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">We're Here to Help</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get in touch with our expert support team. We're available 24/7 to help you 
              with all your hosting needs and technical questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-400">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-200 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{method.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{method.description}</p>
                <div className="space-y-2">
                  <p className="text-blue-400 font-medium">{method.contact}</p>
                  <div className="flex items-center justify-center space-x-2 text-green-400">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{method.availability}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Locations */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Subject</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Billing Question</option>
                    <option>Sales Question</option>
                    <option>Partnership Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold text-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{office.city}</h3>
                          <span className="bg-blue-500/20 border border-blue-500/30 rounded-full px-3 py-1 text-blue-300 text-xs">
                            {office.type}
                          </span>
                        </div>
                        <p className="text-gray-400 mb-3">{office.address}</p>
                        <div className="flex items-center space-x-2 text-green-400">
                          <Phone className="h-4 w-4" />
                          <span className="text-sm">{office.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-400" />
                  <span>Business Hours</span>
                </h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="text-white">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="text-white">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="text-white">Emergency Support Only</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex justify-between">
                      <span>Technical Support:</span>
                      <span className="text-green-400 font-medium">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;