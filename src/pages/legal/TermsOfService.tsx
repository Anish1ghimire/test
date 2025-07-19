import React from 'react';
import { FileText, Shield, AlertTriangle, Clock } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <FileText className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Legal Document</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Terms of{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Service
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our hosting services. 
              By using our services, you agree to be bound by these terms.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Last updated: January 1, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 lg:p-12">
            
            {/* Important Notice */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-yellow-300 mb-2">Important Notice</h3>
                  <p className="text-yellow-200 text-sm">
                    These terms constitute a legally binding agreement between you and GameHost.in. 
                    Please read them carefully and contact us if you have any questions.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                By accessing or using GameHost.in services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, 
                you are prohibited from using or accessing our services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">2. Service Description</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                GameHost.in provides web hosting, game server hosting, VPS hosting, and related services. 
                Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Game server hosting (Minecraft, ARK, FiveM, etc.)</li>
                <li>Virtual Private Server (VPS) hosting</li>
                <li>Web hosting services</li>
                <li>Bot hosting services</li>
                <li>Domain registration and management</li>
                <li>Technical support and customer service</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">3. Account Registration</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                To use our services, you must:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Be at least 18 years old or have parental consent</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">4. Acceptable Use Policy</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                You agree not to use our services for:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Illegal activities or content that violates Indian laws</li>
                <li>Distributing malware, viruses, or harmful code</li>
                <li>Spamming or sending unsolicited communications</li>
                <li>Hosting adult content or gambling services</li>
                <li>Activities that may harm our infrastructure or other users</li>
                <li>Copyright infringement or intellectual property violations</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">5. Payment Terms</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Payment terms include:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>All fees are in Indian Rupees (INR) unless otherwise specified</li>
                <li>Payment is due in advance for the selected service period</li>
                <li>We accept UPI, credit cards, debit cards, and other approved methods</li>
                <li>Failure to pay may result in service suspension or termination</li>
                <li>Refunds are subject to our refund policy</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">6. Service Level Agreement</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We strive to provide:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>99.9% uptime for all hosting services</li>
                <li>24/7 technical support</li>
                <li>Regular backups (where applicable)</li>
                <li>DDoS protection for all services</li>
                <li>Prompt resolution of technical issues</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">7. Data Protection and Privacy</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We are committed to protecting your data in accordance with Indian data protection laws. 
                Your personal information is handled as described in our Privacy Policy. We implement 
                appropriate security measures to protect your data from unauthorized access, alteration, 
                disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">8. Limitation of Liability</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                GameHost.in shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including but not limited to loss of profits, data, or business 
                interruption. Our total liability shall not exceed the amount paid by you for the 
                services in the 12 months preceding the claim.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">9. Service Modifications</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of our services 
                at any time. We will provide reasonable notice of significant changes that may affect 
                your use of our services.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">10. Termination</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Either party may terminate the service agreement with appropriate notice. We may 
                terminate your account immediately for violations of these terms. Upon termination, 
                you remain responsible for all charges incurred up to the termination date.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">11. Governing Law</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                These terms are governed by the laws of India. Any disputes shall be resolved in 
                the courts of Mumbai, Maharashtra, India. We will attempt to resolve disputes 
                through good faith negotiations before resorting to legal action.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">12. Contact Information</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-700/50 rounded-lg p-6">
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> legal@gamehost.in</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Address:</strong> 123 Business District, Mumbai, Maharashtra 400051, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;