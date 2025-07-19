import React from 'react';
import { RefreshCw, CreditCard, Clock, CheckCircle } from 'lucide-react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <RefreshCw className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Fair Refund Terms</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Refund{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We stand behind our services with a fair and transparent refund policy. 
              Your satisfaction is our priority, and we're committed to resolving any issues.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Last updated: January 1, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Content */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 lg:p-12">
            
            {/* Money Back Guarantee */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-green-300 mb-2">30-Day Money Back Guarantee</h3>
                  <p className="text-green-200 text-sm">
                    We offer a 30-day money back guarantee on most of our hosting services. 
                    If you're not satisfied, we'll refund your payment within the first 30 days.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">1. Refund Eligibility</h2>
              
              <h3 className="text-xl font-semibold text-white mb-4">Services Covered</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our refund policy applies to the following services:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Web hosting plans (shared, VPS, dedicated)</li>
                <li>Game server hosting (Minecraft, ARK, FiveM, etc.)</li>
                <li>Bot hosting services</li>
                <li>Initial setup fees (if service is cancelled within 30 days)</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Services Not Covered</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The following services are not eligible for refunds:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Domain name registrations and renewals</li>
                <li>SSL certificates</li>
                <li>Third-party software licenses</li>
                <li>Custom development work</li>
                <li>Services used for more than 30 days</li>
                <li>Accounts terminated for policy violations</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">2. Refund Timeframes</h2>
              
              <div className="bg-gray-700/50 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">30-Day Guarantee</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Full refund available</li>
                      <li>• No questions asked</li>
                      <li>• Applies to new customers</li>
                      <li>• One-time per customer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">After 30 Days</h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Pro-rated refunds considered</li>
                      <li>• Case-by-case evaluation</li>
                      <li>• Service issues required</li>
                      <li>• Management approval needed</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">3. How to Request a Refund</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal list-inside text-gray-300 mb-6 space-y-3">
                <li>Contact our support team via email at <strong>billing@gamehost.in</strong></li>
                <li>Include your account details and reason for the refund request</li>
                <li>Provide any relevant documentation or screenshots</li>
                <li>Allow up to 5 business days for review and processing</li>
                <li>Receive confirmation and refund timeline</li>
              </ol>

              <h2 className="text-2xl font-bold text-white mb-6">4. Refund Processing</h2>
              
              <h3 className="text-xl font-semibold text-white mb-4">Processing Time</h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Refund approval: 2-5 business days</li>
                <li>Credit card refunds: 5-10 business days</li>
                <li>UPI/Bank transfer refunds: 3-7 business days</li>
                <li>PayPal refunds: 1-3 business days</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Refund Method</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Refunds will be processed using the same payment method used for the original purchase. 
                If the original payment method is no longer available, we will work with you to find 
                an alternative refund method.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">5. Partial Refunds</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                In certain circumstances, we may offer partial refunds:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Pro-rated refunds for unused service periods</li>
                <li>Downgrade refunds when switching to lower-tier plans</li>
                <li>Service credit for extended outages or performance issues</li>
                <li>Compensation for billing errors or overcharges</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">6. Service Credits</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Instead of cash refunds, we may offer service credits in the following situations:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Service outages exceeding our SLA commitments</li>
                <li>Performance issues affecting service quality</li>
                <li>Customer goodwill gestures</li>
                <li>Billing adjustments and corrections</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">7. Chargebacks and Disputes</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We encourage customers to contact us directly before initiating chargebacks or payment 
                disputes. Chargebacks may result in immediate account suspension. We will work with you 
                to resolve any billing issues through our standard refund process.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">8. Account Termination</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Upon refund approval:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Your hosting account will be terminated</li>
                <li>All data will be permanently deleted</li>
                <li>Domain names will be released (if applicable)</li>
                <li>Access to services will be immediately revoked</li>
                <li>No data recovery will be possible after termination</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">9. Exceptions and Special Cases</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Refunds may be denied in the following cases:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Violation of our Terms of Service or Acceptable Use Policy</li>
                <li>Fraudulent or abusive behavior</li>
                <li>Excessive resource usage affecting other customers</li>
                <li>Legal or regulatory compliance issues</li>
                <li>Previous refund requests for the same customer</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">10. Contact Information</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                For refund requests or questions about this policy, please contact us:
              </p>
              <div className="bg-gray-700/50 rounded-lg p-6">
                <div className="space-y-2 text-gray-300">
                  <p><strong>Billing Department:</strong> billing@gamehost.in</p>
                  <p><strong>Support Phone:</strong> +91 98765 43210</p>
                  <p><strong>Business Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM IST</p>
                  <p><strong>Response Time:</strong> Within 24 hours for refund requests</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;