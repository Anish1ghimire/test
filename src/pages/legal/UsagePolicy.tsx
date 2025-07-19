import React from 'react';
import { AlertTriangle, Shield, Ban, Clock } from 'lucide-react';

const UsagePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <Shield className="h-4 w-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Acceptable Use Guidelines</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Usage{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              This Acceptable Use Policy outlines the rules and guidelines for using our hosting services. 
              These policies help ensure a safe and reliable environment for all our customers.
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Last updated: January 1, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Policy Content */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 lg:p-12">
            
            {/* Important Notice */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-red-300 mb-2">Important Notice</h3>
                  <p className="text-red-200 text-sm">
                    Violation of this Usage Policy may result in immediate suspension or termination 
                    of your account without refund. Please read and understand these guidelines carefully.
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-white mb-6">1. General Principles</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our hosting services must be used in a lawful and responsible manner. You are responsible 
                for all content and activities that occur under your account. We reserve the right to 
                investigate and take appropriate action against any violations of this policy.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">2. Prohibited Content</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The following types of content are strictly prohibited on our hosting services:
              </p>

              <h3 className="text-xl font-semibold text-white mb-4">Illegal Content</h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Content that violates Indian laws or regulations</li>
                <li>Copyrighted material without proper authorization</li>
                <li>Trademark infringement or intellectual property violations</li>
                <li>Content promoting illegal activities or substances</li>
                <li>Fraudulent or deceptive content</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Harmful Content</h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Malware, viruses, or malicious code</li>
                <li>Content designed to harm or exploit others</li>
                <li>Phishing or social engineering attempts</li>
                <li>Content that promotes violence or hatred</li>
                <li>Harassment, bullying, or threatening content</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Adult and Inappropriate Content</h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Pornographic or sexually explicit material</li>
                <li>Content exploiting minors</li>
                <li>Gambling or betting services (unless licensed)</li>
                <li>Content promoting discrimination or hate speech</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">3. Prohibited Activities</h2>
              
              <h3 className="text-xl font-semibold text-white mb-4">Network Abuse</h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Sending unsolicited bulk email (spam)</li>
                <li>Operating mail servers for spam distribution</li>
                <li>Participating in denial-of-service attacks</li>
                <li>Port scanning or network intrusion attempts</li>
                <li>Hosting or distributing malware</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Resource Abuse</h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Excessive CPU, memory, or bandwidth usage</li>
                <li>Running cryptocurrency mining operations</li>
                <li>File sharing or torrent hosting</li>
                <li>Proxy or VPN services (unless authorized)</li>
                <li>Activities that degrade server performance</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-4">Security Violations</h3>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Attempting to access other customers' accounts</li>
                <li>Circumventing security measures</li>
                <li>Sharing account credentials</li>
                <li>Running insecure or vulnerable software</li>
                <li>Failing to maintain reasonable security practices</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">4. Resource Usage Guidelines</h2>
              
              <div className="bg-gray-700/50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Fair Usage Limits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-medium mb-2">Shared Hosting</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• CPU: 25% for 90 seconds</li>
                      <li>• Memory: Plan allocation</li>
                      <li>• Storage: Plan allocation</li>
                      <li>• Bandwidth: Unlimited fair use</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">VPS Hosting</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• CPU: Allocated cores</li>
                      <li>• Memory: Allocated RAM</li>
                      <li>• Storage: Allocated space</li>
                      <li>• Bandwidth: Plan allocation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">5. Email Usage Policy</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Email services must be used responsibly:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>No sending of unsolicited bulk email (spam)</li>
                <li>Maximum 500 emails per hour for shared hosting</li>
                <li>All email lists must be opt-in with clear unsubscribe options</li>
                <li>No purchasing or using third-party email lists</li>
                <li>Compliance with CAN-SPAM and Indian email regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">6. Game Server Guidelines</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                For game server hosting customers:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Servers must comply with game publisher terms of service</li>
                <li>No hosting of pirated or cracked game content</li>
                <li>Reasonable player limits based on server specifications</li>
                <li>No hosting of cheating or hacking tools</li>
                <li>Compliance with age-appropriate content guidelines</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">7. Monitoring and Enforcement</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We monitor our services to ensure compliance:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Automated monitoring of resource usage and security</li>
                <li>Investigation of customer complaints and reports</li>
                <li>Regular security scans and vulnerability assessments</li>
                <li>Compliance with legal requests and court orders</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">8. Violation Consequences</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Violations may result in the following actions:
              </p>
              
              <div className="bg-gray-700/50 rounded-lg p-6 mb-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-yellow-400 font-semibold mb-2">Warning</h4>
                    <p className="text-gray-300 text-sm">First-time minor violations may receive a warning with instructions to correct the issue.</p>
                  </div>
                  <div>
                    <h4 className="text-orange-400 font-semibold mb-2">Suspension</h4>
                    <p className="text-gray-300 text-sm">Serious or repeated violations may result in temporary account suspension.</p>
                  </div>
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Termination</h4>
                    <p className="text-gray-300 text-sm">Severe violations or failure to correct issues may result in permanent account termination.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">9. Reporting Violations</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                If you become aware of any violations of this policy, please report them to us:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
                <li>Email: abuse@gamehost.in</li>
                <li>Include detailed information about the violation</li>
                <li>Provide evidence such as URLs or screenshots</li>
                <li>We will investigate all reports promptly</li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-6">10. Appeals Process</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you believe your account was suspended or terminated in error, you may appeal 
                the decision by contacting our support team at appeals@gamehost.in within 30 days 
                of the action. Include detailed information about why you believe the action was incorrect.
              </p>

              <h2 className="text-2xl font-bold text-white mb-6">11. Contact Information</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                For questions about this Usage Policy, please contact us:
              </p>
              <div className="bg-gray-700/50 rounded-lg p-6">
                <div className="space-y-2 text-gray-300">
                  <p><strong>Abuse Team:</strong> abuse@gamehost.in</p>
                  <p><strong>Appeals:</strong> appeals@gamehost.in</p>
                  <p><strong>General Support:</strong> support@gamehost.in</p>
                  <p><strong>Phone:</strong> +91 98765 43210</p>
                  <p><strong>Response Time:</strong> Within 24 hours for policy violations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsagePolicy;