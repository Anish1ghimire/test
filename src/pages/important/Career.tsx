import React from 'react';
import { Briefcase, Users, Zap, Heart, Award, MapPin } from 'lucide-react';

const Career = () => {
  const openPositions = [
    {
      title: 'Senior DevOps Engineer',
      department: 'Engineering',
      location: 'Mumbai, India',
      type: 'Full-time',
      description: 'Join our infrastructure team to build and maintain world-class hosting solutions.'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Bangalore, India',
      type: 'Full-time',
      description: 'Help our customers succeed with their hosting needs and build lasting relationships.'
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Delhi, India',
      type: 'Full-time',
      description: 'Create beautiful and intuitive user interfaces for our hosting platform.'
    },
    {
      title: 'Technical Support Specialist',
      department: 'Support',
      location: 'Remote, India',
      type: 'Full-time',
      description: 'Provide technical assistance to our customers and help solve complex hosting issues.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <MapPin className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Join Our India Team</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Build Your{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Career
              </span>
              <br />
              With Us
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join India's leading hosting company and help shape the future of gaming and web hosting. 
              We're looking for passionate individuals who want to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-400">
              We offer more than just a job - we offer a career and a community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-400 leading-relaxed">
                Work with the latest technologies and tools in cloud computing, DevOps, and web development. 
                Stay ahead of the curve in your career.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Amazing Team Culture</h3>
              <p className="text-gray-400 leading-relaxed">
                Join a diverse, inclusive team that values collaboration, creativity, and mutual respect. 
                We believe great work comes from great teams.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Work-Life Balance</h3>
              <p className="text-gray-400 leading-relaxed">
                We understand the importance of balance. Flexible working hours, remote options, 
                and comprehensive benefits ensure you can thrive both at work and at home.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth Opportunities</h3>
              <p className="text-gray-400 leading-relaxed">
                We invest in our people. Professional development, training programs, and clear 
                career progression paths help you reach your full potential.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Competitive Benefits</h3>
              <p className="text-gray-400 leading-relaxed">
                Competitive salaries, health insurance, performance bonuses, and equity options. 
                We reward great work and loyalty.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-800/70 transition-all duration-200">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">India-First Company</h3>
              <p className="text-gray-400 leading-relaxed">
                Be part of a company that's proudly Indian, serving the Indian market with 
                solutions built specifically for our unique needs and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-400">
              Find your next opportunity with us
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:bg-gray-900/70 transition-all duration-200">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                      <span className="bg-blue-500/20 border border-blue-500/30 rounded-full px-3 py-1 text-blue-300 text-sm">
                        {position.department}
                      </span>
                      <span className="bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1 text-green-300 text-sm">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">{position.description}</p>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{position.location}</span>
                    </div>
                  </div>
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-semibold">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              Don't see a position that fits? We're always looking for talented individuals.
            </p>
            <button className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-all duration-200 font-semibold">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;