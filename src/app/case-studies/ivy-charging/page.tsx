"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackEvent } from "@/utils/analytics";
import Header from "@/components/Header";

export default function IvyChargingCaseStudy() {
  useEffect(() => {
    trackEvent('view', 'case_study', 'ivy_charging');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ivy Charging Practice Story
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto opacity-90">
              Scaling Ontario&apos;s largest public EV charging network through strategic partnerships and user-centric design
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Product Strategy</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Partnership Management</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">User Experience Design</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Infrastructure Planning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Executive Summary */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ivy Charging represents a landmark public-private partnership between Hydro One and Ontario Power Generation, creating Ontario&apos;s largest public EV charging network. This case study explores the strategic planning, user experience design, and operational challenges of building a province-wide charging infrastructure.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">1000+</div>
                <div className="text-sm text-gray-600">Charging Stations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">95%</div>
                <div className="text-sm text-gray-600">Uptime Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4.8/5</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Context */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Context</h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Market Opportunity</h3>
            <ul className="space-y-3 text-blue-700">
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Ontario&apos;s EV adoption rate growing 40% annually</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Existing charging infrastructure insufficient for demand</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Government incentives for public charging infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">•</span>
                <span>Strategic opportunity for utility companies to diversify revenue</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Partnership Strategy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnership Strategy</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Stakeholder Alignment</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Hydro One</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Distribution network expertise</li>
                  <li>• Customer relationship management</li>
                  <li>• Regulatory compliance knowledge</li>
                  <li>• Infrastructure planning capabilities</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Ontario Power Generation</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Generation capacity and grid stability</li>
                  <li>• Renewable energy integration</li>
                  <li>• Large-scale project management</li>
                  <li>• Innovation and R&D capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* User Experience Design */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">User Experience Design</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Design Principles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Accessibility</h4>
                  <p className="text-sm text-green-600">Universal design for all users, including those with disabilities</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Reliability</h4>
                  <p className="text-sm text-blue-600">99%+ uptime with real-time status updates</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Simplicity</h4>
                  <p className="text-sm text-purple-600">One-tap charging with minimal user friction</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Key UX Features</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Mobile App Integration</h4>
                  <p className="text-gray-600">Seamless app-to-charger connection with QR code scanning and NFC support</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Real-time Availability</h4>
                  <p className="text-gray-600">Live status updates showing charger availability, wait times, and pricing</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-gray-800">Payment Flexibility</h4>
                  <p className="text-gray-600">Multiple payment options including app, credit card, and subscription plans</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure Planning */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Infrastructure Planning</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Site Selection Criteria</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• High-traffic locations (shopping centers, highways, urban centers)</li>
                  <li>• Electrical infrastructure capacity and proximity</li>
                  <li>• Parking availability and accessibility</li>
                  <li>• Local EV adoption rates and demographics</li>
                  <li>• Municipal support and permitting requirements</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Charging Equipment</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Level 2 chargers (7-22 kW)</li>
                      <li>• DC fast chargers (50-350 kW)</li>
                      <li>• Smart load management</li>
                      <li>• Weather-resistant enclosures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Grid Integration</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li>• Demand response capabilities</li>
                      <li>• Renewable energy integration</li>
                      <li>• Grid stability support</li>
                      <li>• Peak load management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Operational Challenges & Solutions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Challenge: Grid Capacity</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Problem</h4>
                  <p className="text-gray-600">Existing electrical infrastructure couldn&apos;t support high-power DC fast chargers in many locations</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Solution</h4>
                  <p className="text-green-600">Implemented smart load management and staged infrastructure upgrades based on usage patterns</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Challenge: User Adoption</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Problem</h4>
                  <p className="text-gray-600">Initial user adoption was slow due to unfamiliarity with public charging</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Solution</h4>
                  <p className="text-green-600">Launched educational campaigns and offered free charging sessions to build user confidence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Network Performance</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Operational Metrics</h4>
                <ul className="space-y-1 text-green-600">
                  <li>• 1000+ charging stations deployed</li>
                  <li>• 95% average uptime rate</li>
                  <li>• 4.8/5 average user rating</li>
                  <li>• 50,000+ charging sessions monthly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Environmental Impact</h4>
                <ul className="space-y-1 text-green-600">
                  <li>• 2.5M+ kWh of clean energy delivered</li>
                  <li>• 1,800+ tons of CO2 emissions avoided</li>
                  <li>• 15,000+ EVs supported</li>
                  <li>• 40% increase in local EV adoption</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Future Roadmap */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Roadmap</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Expansion Plans</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800">Phase 2 (2024)</h4>
                    <p className="text-sm text-blue-600">500 additional stations, mobile app enhancements, subscription plans</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800">Phase 3 (2025)</h4>
                    <p className="text-sm text-green-600">V2G capabilities, renewable integration, smart grid features</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800">Phase 4 (2026)</h4>
                    <p className="text-sm text-purple-600">Autonomous charging, AI optimization, cross-province expansion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Interested in Infrastructure Projects?</h2>
            <p className="text-lg mb-6 opacity-90">
              Let&apos;s discuss how we can scale your infrastructure initiatives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={() => trackEvent('click', 'cta', 'contact_from_case_study')}
              >
                Get in Touch
              </Link>
              <Link
                href="/#work"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
                onClick={() => trackEvent('click', 'cta', 'view_other_projects')}
              >
                View Other Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 