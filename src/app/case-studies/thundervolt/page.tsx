"use client";

import Link from "next/link";
import { useEffect } from "react";
import { trackEvent } from "@/utils/analytics";
import Image from "next/image";
import Header from "@/components/Header";
import PasswordProtection from "@/components/PasswordProtection";

export default function ThunderVoltCaseStudy() {
  useEffect(() => {
    trackEvent('view', 'case_study', 'thundervolt');
  }, []);

  return (
    <PasswordProtection correctPassword="Sprint2025" title="ThunderVolt">
      <div className="min-h-screen bg-gray-50">
        <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              A Brief Summary of defining Strategic Product Vision & Roadmap Development - ThunderVolt
            </h1>
            <p className="text-xl sm:text-2xl max-w-3xl mx-auto opacity-90">
              Pioneering portable EV charging through comprehensive product strategy, market analysis, and phased innovation
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Product Strategy</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Market Analysis</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">Roadmap Development</span>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm">EV Innovation</span>
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
              This brief summary meticulously details my role, approach, and implementation as a Product Manager in developing and articulating the strategic product vision and a multi-year roadmap for ThunderVolt. This responsibility is paramount, as it sets the long-term direction for the product, ensures alignment across all business functions, and ultimately dictates market success.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">

              </div>
              <div className="text-center">

              </div>
              <div className="text-center">

              </div>
            </div>
          </div>
        </section>

        {/* Strategic Framework */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Framework</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Vision-Led, Data-Informed, and Adaptive Ecosystem Framework</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Core Pillars</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Immersive Problem & Opportunity Definition</li>
                    <li>• Customer-Centric Visioning & Persona Validation</li>
                    <li>• Differentiated Strategic Positioning</li>
                    <li>• Phased, Outcome-Oriented Roadmap Development</li>
                    <li>• Continuous Learning, Validation & Adaptation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Strategic Focus</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Democratizing EV charging access</li>
                    <li>• Solving condo infrastructure challenges</li>
                    <li>• Eliminating range anxiety</li>
                    <li>• Maximizing user time and freedom</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Opportunity Definition */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Problem & Opportunity Definition</h2>
          <div className="space-y-6">
            {/* Battery Simulation Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-4 flex flex-col items-center">
                <Image src="/ThunderVolt/ChargingSimulation.png" width={400} height={300} alt="Charging Simulation Result" className="rounded-lg" />
                <span className="mt-2 text-sm text-gray-600">Charging simulation for ThunderVolt battery module - McMaster University Lab</span>
              </div>
              <div className="bg-white rounded-xl p-4 flex flex-col items-center">
                <Image src="/ThunderVolt/DischargingSimulation.png" width={400} height={300} alt="Discharging Simulation Result" className="rounded-lg" />
                <span className="mt-2 text-sm text-gray-600">Discharging simulation result for ThunderVolt battery module</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-4 flex flex-col items-center">
                <Image src="/ThunderVolt/Lithiomiobatterysimulation.png" width={400} height={300} alt="Lithium-ion Battery Simulation" className="rounded-lg" />
                <span className="mt-2 text-sm text-gray-600">Lithium-ion battery simulation: charge/discharge characteristics</span>
              </div>
              <div className="bg-white rounded-xl p-4 flex flex-col items-center">
                <Image src="/ThunderVolt/LithiomionBatterySimulation.png" width={400} height={300} alt="Lithium-ion Battery Simulation 2" className="rounded-lg" />
                <span className="mt-2 text-sm text-gray-600">Additional lithium-ion battery simulation results</span>
              </div>
            </div>
            
            <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">The Condo Conundrum: A Systemic Infrastructure Failure</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Regulatory Labyrinth</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Complex permit requirements</li>
                    <li>• Extensive documentation needed</li>
                    <li>• Electrical service upgrades required</li>
                    <li>• Legal fees around $550-$1,000+</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Exorbitant Costs</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Installation costs: $3,000-$5,000</li>
                    <li>• EVSE unit: ~$1,000</li>
                    <li>• Total investment: $4,000-$6,000+</li>
                    <li>• Prohibitive for many condo residents</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">The Daily Dread: Range Anxiety & Charging Station Woes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Time as the Ultimate Currency</h4>
                  <ul className="space-y-1 text-orange-600">
                    <li>• 1-5 hours waiting time to charge</li>
                    <li>• Direct assault on lifestyle</li>
                    <li>• Impact on valuable family time</li>
                    <li>• Inconsistent charging experience</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700 mb-2">Financial Drain</h4>
                  <ul className="space-y-1 text-orange-600">
                    <li>• $100-$150/monthly at public stations</li>
                    <li>• Up to $350/monthly for some users</li>
                    <li>• Significant recurring cost burden</li>
                    <li>• Reduced EV adoption confidence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer-Centric Visioning */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Customer-Centric Visioning & Persona Validation</h2>
          <div className="space-y-6">
            {/* Ideation Sketches */}
            <div className="bg-white rounded-xl p-4 flex flex-col items-center mb-8">
              <Image src="/ThunderVolt/IdeationSketches.png" width={800} height={350} alt="ThunderVolt Ideation Sketches" className="rounded-lg" />
              <span className="mt-2 text-sm text-gray-600">Early ideation sketches and design concepts for ThunderVolt</span>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">ThunderVolt&apos;s Strategic Product Vision</h3>
              <blockquote className="text-lg text-blue-700 italic mb-6">
                &quot;To liberate every urban electric vehicle owner from the constraints of charging infrastructure by delivering an intelligent, personal, and effortlessly portable power ecosystem, ensuring unparalleled convenience, absolute freedom from range anxiety, and a seamless integration into their modern, time-conscious lifestyle.&quot;
              </blockquote>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Primary Personas</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Peter (Urban Commuter)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 30-year-old Financial Consultant</li>
                    <li>• $90,000 HHI, downtown Toronto</li>
                    <li>• 40 Km daily commute</li>
                    <li>• Values time and convenience</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Amy (Business Owner)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 43-year-old General Electrician</li>
                    <li>• $150,000 business income</li>
                    <li>• GTA condo resident</li>
                    <li>• Needs 100% uptime for livelihood</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Shou (Tech Adopter)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 37-year-old Physician</li>
                    <li>• $90,000 HHI, GTA townhouse</li>
                    <li>• Early tech adopter</li>
                    <li>• Values family time and convenience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Positioning */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Differentiated Strategic Positioning</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            {/* Positioning Diagram */}
            <div className="flex flex-col items-center mb-8">
              <Image src="/ThunderVolt/Positioning.png" width={600} height={350} alt="Competitive Positioning Map" className="rounded-lg" />
              <span className="mt-2 text-sm text-gray-600">Competitive positioning map: ThunderVolt vs. other portable charging solutions</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">ThunderVolt&apos;s Competitive Advantages</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Core Strengths</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Maneuverability:</strong> Motorized loading/unloading device</li>
                  <li>• <strong>Ease of Access:</strong> Twin package system for continuous access</li>
                  <li>• <strong>Modularity:</strong> Flexible, scalable battery cells</li>
                  <li>• <strong>Range:</strong> 100 Km total (2x 50 Km suitcases)</li>
                  <li>• <strong>Safety:</strong> LiFePo4 batteries with comprehensive security</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Business Model Innovation</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>Hardware as a Service:</strong> $259.99/month subscription</li>
                  <li>• <strong>No Upfront Costs:</strong> Eliminates financial barriers</li>
                  <li>• <strong>Battery Management:</strong> Handles degradation concerns</li>
                  <li>• <strong>GPS Geofencing:</strong> Location-based security</li>
                  <li>• <strong>Physical & Digital Locks:</strong> Multi-layer protection</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-green-50 p-6 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-3">Positioning Statement</h4>
              <p className="text-green-700">
                &quot;For urban EV owners, particularly condominium and townhouse residents in the GTA, who face significant barriers to convenient and reliable at-home charging, ThunderVolt is the revolutionary personal EV power ecosystem that delivers unparalleled freedom from charging anxiety and public charger dependency, by offering a uniquely portable, intelligent, and safe charging solution that seamlessly integrates into their daily commute and lifestyle, unlike any fixed infrastructure or limited portable alternatives.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Phased Roadmap Development */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Phased, Outcome-Oriented Roadmap Development</h2>
          {/* Stop-and-Go Diagram */}
          <div className="flex flex-col items-center mb-8">
            <Image src="/ThunderVolt/StopandgoDiagram.png" width={900} height={350} alt="Stop-and-Go Business Model Diagram" className="rounded-lg" />
            <span className="mt-2 text-sm text-gray-600">ThunderVolt stop-and-go business model and risk management plan</span>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Phase 1: Validation & Core Product Launch (Dec 2022 - Sep 2024)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Objectives</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Prove core concept</li>
                    <li>• Achieve regulatory compliance</li>
                    <li>• Secure initial customer base</li>
                    <li>• Establish supply chain</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Deliverables</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• ThunderVolt Business Plan (Dec 2022)</li>
                    <li>• Patent & Regulatory Clearance (Mar 2023)</li>
                    <li>• Pilot Program (Mar 2024)</li>
                    <li>• Go to Market 100 Customers (Sep 2024)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Phase 2: Market Expansion & Optimization (Sep 2024 - Sep 2025)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Objectives</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Achieve substantial market penetration</li>
                    <li>• Optimize operations</li>
                    <li>• Solidify brand recognition</li>
                    <li>• Scale customer base</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Deliverables</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 100 Customers (Sep 2025)</li>
                    <li>• App enhancements</li>
                    <li>• Logistical optimization</li>
                    <li>• Strategic partnerships</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Phase 3: National Expansion & Diversification (Sep 2025 - Dec 2027)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Objectives</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Expand across Canada</li>
                    <li>• Explore B2B opportunities</li>
                    <li>• Deepen technological advantages</li>
                    <li>• Achieve financial sustainability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Deliverables</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 500 Customers (Dec 2026)</li>
                    <li>• 1,000 Customers (Dec 2027)</li>
                    <li>• B2B white labeling</li>
                    <li>• $3.2M Annual Revenue</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Phase 4: Global Leadership & Future Innovation (Beyond 2027)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Objectives</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Cement global leadership</li>
                    <li>• Explore adjacent markets</li>
                    <li>• Advanced technology integration</li>
                    <li>• Autonomous charging fleets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Key Deliverables</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>• V2G capabilities</li>
                    <li>• Swappable battery networks</li>
                    <li>• Non-automotive verticals</li>
                    <li>• Global market presence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Placeholder Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Product Development Journey</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Modular Battery Package */}
            <div className="bg-gray-100 rounded-xl p-8 text-center flex flex-col items-center">
              <Image src="/ThunderVolt/ModularBatteryPackage.png" width={350} height={300} alt="Modular Battery Package" className="rounded-lg mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Modular Battery Package</h3>
              <p className="text-gray-600">ThunderVolt&apos;s modular battery design for scalability and easy maintenance</p>
            </div>
            {/* Portable Battery Product Images */}
            <div className="bg-gray-100 rounded-xl p-8 text-center flex flex-col items-center">
              <Image src="/ThunderVolt/PortableBatteryProduct.png" width={350} height={300} alt="Portable Battery Product" className="rounded-lg mb-4" />
              <Image src="/ThunderVolt/PortableBatteryProduct (2).png" width={350} height={300} alt="Portable Battery Product 2" className="rounded-lg mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Portable Battery Product</h3>
              <p className="text-gray-600">ThunderVolt MVP and prototypes(Dual and single package) : portable, user-friendly battery system</p>
            </div>
          </div>
        </section>

        {/* Metrics & Success Measurement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Metrics, Success Measurement & Iterative Adaptation</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Key Performance Indicators (KPIs)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Customer Metrics</h4>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Customer Acquisition Cost (CAC)</li>
                  <li>• Customer Lifetime Value (CLTV)</li>
                  <li>• Churn Rate (Target: 5%)</li>
                  <li>• Monthly Recurring Revenue (MRR)</li>
                </ul>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Product Metrics</h4>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Daily/Weekly/Monthly Active Users</li>
                  <li>• Charge Session Success Rate</li>
                  <li>• Range Utilization Data</li>
                  <li>• Net Promoter Score (NPS)</li>
                </ul>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Operational Metrics</h4>
                <ul className="text-sm text-purple-600 space-y-1">
                  <li>• Cost per package produced</li>
                  <li>• Delivery times</li>
                  <li>• Battery recycling rates</li>
                  <li>• Regulatory compliance status</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Continuous Learning Framework */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Continuous Learning & Adaptation Framework</h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Feedback & Learning Loops</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Customer Feedback Channels</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• In-app surveys and direct interviews</li>
                  <li>• Dedicated support channels</li>
                  <li>• Social media monitoring</li>
                  <li>• User behavior analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Market Intelligence</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Competitor product launches</li>
                  <li>• Pricing strategy monitoring</li>
                  <li>• Technology trend research</li>
                  <li>• Regulatory change tracking</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">Stop-Go Plan Implementation</h4>
              <p className="text-yellow-700">
                Critical risk mitigation strategy with specific revenue targets and protection plans. If targets are not met, actions include cost reduction, roadside charging model exploration, or B2B white labeling pivot.
              </p>
            </div>
          </div>
        </section>

        {/* Strategic Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Impact & Market Transformation</h2>
          <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Product Strategy Outcomes</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Market Positioning</h4>
                <ul className="space-y-1 text-green-600">
                  <li>• Clear competitive differentiation</li>
                  <li>• Strong value proposition</li>
                  <li>• Targeted market focus (GTA condos)</li>
                  <li>• Scalable business model</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Strategic Foundation</h4>
                <ul className="space-y-1 text-green-600">
                  <li>• Comprehensive product vision</li>
                  <li>• Phased development roadmap</li>
                  <li>• Iterative validation framework</li>
                  <li>• Long-term innovation pipeline</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4"></h2>
            <p className="text-lg mb-6 opacity-90">
              
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
    </PasswordProtection>
  );
} 