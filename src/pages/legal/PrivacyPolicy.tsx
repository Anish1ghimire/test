import React from 'react';
import { Shield, Eye, Lock, Clock } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <Shield className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Your Privacy Matters</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Privacy{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and protect your data.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Last updated: January 1, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 lg:p-12">
            
            {/* Privacy Commitment */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <Lock className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-300 mb-2">Our Privacy Commitment</h3>
                  <p className="text-blue-200 text-sm">
                    We believe privacy is a fundamental right. We collect only the information necessary 
                    to provide our services and never sell your personal data to third parties.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We collect personal information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Billing address and payment information</li>
                <li>Account credentials and security information</li>
                <li>Support communications and feedback</li>
                <li>Identity verification documents (when required)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Technical Information</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We automatically collect certain technical information, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>IP addresses and device identifiers</li>
                <li>Browser type and operating system</li>
                <li>Usage patterns and service performance data</li>
                <li>Log files and error reports</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Providing and maintaining our hosting services</li>
                <li>Processing payments and managing your account</li>
                <li>Providing customer support and technical assistance</li>
                <li>Improving our services and developing new features</li>
                <li>Communicating important service updates</li>
                <li>Complying with legal obligations and preventing fraud</li>
                <li>Marketing communications (with your consent)</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">3. Information Sharing and Disclosure</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We do not sell, trade, or rent your personal information. We may share your information only in these circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>In connection with a business transfer or merger</li>
                <li>To prevent fraud or security threats</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">4. Data Security</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We implement comprehensive security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and employee training</li>
                <li>Secure data centers with physical security measures</li>
                <li>Regular backups and disaster recovery procedures</li>
                <li>Compliance with industry security standards</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">5. Data Retention</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We retain your personal information only as long as necessary to provide our services 
                and comply with legal obligations. Account information is typically retained for the 
                duration of your account plus a reasonable period thereafter. Log files and technical 
                data are generally retained for shorter periods for operational purposes.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">6. Your Rights and Choices</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your account and associated data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request data portability</li>
                <li>Object to certain processing activities</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">7. Cookies and Tracking</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website usage and performance</li>
                <li>Provide personalized content and features</li>
                <li>Prevent fraud and enhance security</li>
              </ul>
              <p className="text-gray-300 mb-6 leading-relaxed">
                You can control cookie settings through your browser preferences. However, disabling 
                certain cookies may affect the functionality of our services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">8. International Data Transfers</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your data is primarily stored and processed in India. If we transfer data internationally, 
                we ensure appropriate safeguards are in place to protect your information in accordance 
                with applicable data protection laws.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">9. Children's Privacy</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our services are not intended for children under 18. We do not knowingly collect 
                personal information from children. If we become aware that we have collected 
                information from a child, we will take steps to delete it promptly.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">10. Changes to This Policy</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices 
                or applicable laws. We will notify you of significant changes through email or 
                prominent notices on our website.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">11. Contact Us</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-700/50 rounded-lg p-6">
                <div className="space-y-2 text-gray-300">
                  <p><strong>Privacy Officer:</strong> privacy@gamehost.in</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Address:</strong> 123 Business District, Mumbai, Maharashtra 400051, India</p>
                  <p><strong>Response Time:</strong> We respond to privacy inquiries within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;