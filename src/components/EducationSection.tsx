import Image from "next/image";
import { FaUniversity, FaAward, FaMicrosoft, FaGoogle, FaPiedPiper } from "react-icons/fa";

export default function EducationSection() {
  return (
    <section id="education" className="py-8 sm:py-16 px-2 sm:px-4 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Education & Certifications
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto">
            A journey of continuous learning, product excellence, and upskilling.
          </p>
        </div>
        <div className="space-y-8 sm:space-y-12">
          {/* Formal Education */}
          <div className="relative">
            {/* Vertical image strip for Formal Education */}
            <div className="absolute top-0 right-0 h-full w-8 sm:w-12 md:w-16 z-10 rounded-r-xl overflow-hidden shadow-md">
              <Image
                src="/20180706-152629-McMaster-University-Campus-0004-1.jpg"
                alt="Formal Education Accent"
                width={256}
                height={1600}
                quality={95}
                className="w-full h-full object-cover object-center opacity-90"
              />
            </div>
            <div className="flex items-center gap-2 sm:gap-4 mb-4">
              <FaUniversity className="text-2xl sm:text-3xl text-blue-600" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Formal Education</h3>
            </div>
            <div className="ml-6 sm:ml-10 space-y-4 sm:space-y-6 border-l-4 border-blue-200 pl-4 sm:pl-6 pr-12 sm:pr-16 md:pr-20 lg:pr-24">
              <div>
                <h4 className="text-lg sm:text-xl font-bold">W Booth School of Engineering Practice and Technology, McMaster University</h4>
                <p className="text-xs sm:text-sm italic mb-1">Master of Technology Entrepreneurship and Innovation - MTEI, Engineering
</p>
                <p className="text-xs sm:text-sm">The degree that laid the foundation for Reza&apos;s product thinking and business acumen. This program sparked his journey into the startup world and equipped him with tools to turn innovative ideas into market-ready solutions.</p>
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold">Azad University (IAU) – BSc.</h4>
                <p className="text-xs sm:text-sm italic mb-1">Where it all began—Reza&apos;s technical roots.</p>
                <p className="text-xs sm:text-sm">Here, he learned to build software before he learned to build strategy.</p>
              </div>
            </div>
          </div>

          {/* Skill Boosters / Product Toolkit */}
          <div className="relative">
            {/* Vertical image strip for Skill Boosters */}
            <div className="absolute top-0 right-0 h-full w-8 sm:w-12 md:w-16 z-10 rounded-r-xl overflow-hidden shadow-md">
              <Image
                src="/computer-8779040_1280.jpg"
                alt="Skill Boosters Accent"
                width={256}
                height={1600}
                quality={95}
                className="w-full h-full object-cover object-center opacity-90"
              />
            </div>
            <div className="flex items-center gap-2 sm:gap-4 mb-4">
              <FaAward className="text-xl sm:text-2xl text-pink-500" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">Skill Boosters / Product Toolkit</h3>
            </div>
            <div className="ml-6 sm:ml-10 space-y-6 sm:space-y-8 border-l-4 border-pink-200 pl-4 sm:pl-6 pr-12 sm:pr-16 md:pr-20 lg:pr-24">
              {/* Pendo.io – Product Analytics Certification */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPiedPiper className="text-pink-600 text-xs sm:text-sm" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <a 
                      href="https://www.credly.com/badges/fcb186a3-a7f8-4442-9d66-23eb488f566c" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold hover:text-blue-600 transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      Product Analytics Certification
                    </a>
                    <span className="text-xs sm:text-sm">Pendo.io · Issued May 2023</span>
                  </div>
                  <p className="text-xs sm:text-sm">Understanding user behavior at scale to make data-driven product decisions.</p>
                  <p className="text-xs">Skills: Customer Success · Data Analysis · Product Management · Product-led Growth</p>
                </div>
              </div>
              {/* Pendo.io – Product-led Certification */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPiedPiper className="text-pink-600 text-xs sm:text-sm" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <a 
                      href="https://www.credly.com/badges/891caf46-2819-4241-bced-ccc243998223" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold hover:text-blue-600 transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      Product-led Certification
                    </a>
                    <span className="text-xs sm:text-sm">Pendo.io · Issued Jan 2023</span>
                  </div>
                  <p className="text-xs sm:text-sm">Driving product-led growth and customer success.</p>
                  <p className="text-xs">Skills: Data Analysis · Product Management · Product-led Growth · Customer Success</p>
                </div>
              </div>
              {/* Pendo.io – AI for Product Management */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaPiedPiper className="text-pink-600 text-xs sm:text-sm" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <a 
                      href="https://www.credly.com/badges/79b51957-6446-4649-b9f7-88c4d054db19" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold hover:text-blue-600 transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      AI for Product Management
                    </a>
                    <span className="text-xs sm:text-sm">Pendo.io · Issued Dec 2023</span>
                  </div>
                  <p className="text-xs sm:text-sm">Applying AI and analytics to product management.</p>
                  <p className="text-xs">Skills: Artificial Intelligence (AI) · Analytics</p>
                </div>
              </div>
              {/* Scrum.org – PSPO I */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  {/* Placeholder for the removed <SiScrumalliance /> */}
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <a 
                      href="https://www.credly.com/badges/3571da53-9a84-4da2-91ff-23a02dfa7d4b/linked_in_profile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold hover:text-blue-600 transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      Professional Scrum Product Owner™ I (PSPO I)
                    </a>
                    <span className="text-xs sm:text-sm">Scrum.org · Issued Feb 2023</span>
                  </div>
                  <p className="text-xs sm:text-sm">Mastering agile frameworks and stakeholder alignment.</p>
                  <p className="text-xs">Skills: Scrum · Product owner · Agile · PSPO</p>
                </div>
              </div>
              {/* The Forge McMaster – Startup Survival Program */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaAward className="text-pink-600 text-xs sm:text-sm" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="font-bold text-sm sm:text-base">The Forge Startup Survival Program</span>
                    <span className="text-xs sm:text-sm">The Forge McMaster · Issued Sep 2022</span>
                  </div>
                  <p className="text-xs sm:text-sm">Skills: Pitch presentation · Idea development</p>
                </div>
              </div>
            </div>
          </div>

          {/* AI, Cloud & Marketing Tech */}
          <div className="relative">
            {/* Vertical image strip for AI, Cloud & Marketing Tech */}
            <div className="absolute top-0 right-0 h-full w-8 sm:w-12 md:w-16 z-10 rounded-r-xl overflow-hidden shadow-md">
              <Image
                src="/apps-426559_1280.jpg"
                alt="AI, Cloud & Marketing Tech Accent"
                width={256}
                height={1600}
                quality={95}
                className="w-full h-full object-cover object-center opacity-90"
              />
            </div>
            <div className="flex items-center gap-2 sm:gap-4 mb-4">
              <FaAward className="text-xl sm:text-2xl text-blue-700" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">AI, Cloud & Marketing Tech</h3>
            </div>
            <div className="ml-6 sm:ml-10 space-y-6 sm:space-y-8 border-l-4 border-blue-200 pl-4 sm:pl-6 pr-12 sm:pr-16 md:pr-20 lg:pr-24">
              {/* Microsoft Azure – AI Product Builder */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMicrosoft className="text-blue-600 text-xs sm:text-sm" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <a 
                      href="https://www.coursera.org/account/accomplishments/verify/K39KCBN3TG5R?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold hover:text-blue-600 transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      Artificial Intelligence on Microsoft Azure
                    </a>
                    <span className="text-xs sm:text-sm">Microsoft · Issued Jan 2024</span>
                  </div>
                  <p className="text-xs sm:text-sm">Bridging cloud infrastructure knowledge with AI-powered product design.</p>
                </div>
              </div>
              {/* Microsoft Certified: Azure Fundamentals AZ-900 */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaMicrosoft className="text-blue-600 text-xs sm:text-sm" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <a 
                      href="https://www.credly.com/badges/1b17f5d4-81b3-4e7f-bf8d-b3232a6b14cd" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold hover:text-blue-600 transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      Microsoft Certified: Azure Fundamentals AZ-900
                    </a>
                    <span className="text-xs sm:text-sm">Microsoft · Issued May 2023</span>
                  </div>
                  <p className="text-xs sm:text-sm">Skills: Cloud data · Cloud networking · Cloud Security</p>
                </div>
              </div>
              {/* University of Michigan – The Future of Payment Technologies */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaUniversity className="text-blue-600 text-xs sm:text-sm" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <a 
                      href="https://www.coursera.org/account/accomplishments/certificate/N75TKL62MEZX" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold hover:text-blue-600 transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      The Future of Payment Technologies
                    </a>
                    <span className="text-xs sm:text-sm">University of Michigan · Issued Jan 2024</span>
                  </div>
                  <p className="text-xs sm:text-sm">Skills: Payment Systems · FinTech</p>
                </div>
              </div>
              {/* Google – AI-Powered Performance Ads Certification */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaGoogle className="text-blue-600 text-xs sm:text-sm" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <a 
                      href="https://skillshop.credential.net/f6c43e54-8661-43d1-835f-7bf0c21860e4#gs.y5k70b" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold hover:text-blue-600 transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      AI-Powered Performance Ads Certification
                    </a>
                    <span className="text-xs sm:text-sm">Google · Issued Jun 2023</span>
                  </div>
                  <p className="text-xs sm:text-sm">Skills: AI ads · AI automation · AI strategy</p>
                </div>
              </div>
              {/* Google – Google Analytics Certification (GA4) */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaGoogle className="text-blue-600 text-xs sm:text-sm" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <a 
                      href="https://api.accredible.com/v1/auth/invite?code=20ff793805c254896061&credential_id=39e1c29c-90c5-4ac7-a298-6e4339aa9106&url=https%3A%2F%2Fskillshop.credential.net%2F39e1c29c-90c5-4ac7-a298-6e4339aa9106&ident=77b0e2f330b02371330579e87c1f33d9fcffc89b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold hover:text-blue-600 transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      Google Analytics Certification (GA4)
                    </a>
                  </div>
                </div>
              </div>
              {/* Google – Google Ads Creative Certification */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FaGoogle className="text-blue-600 text-xs sm:text-sm" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <a 
                      href="https://api.accredible.com/v1/auth/invite?code=59b9e9fb199757be2e79&credential_id=acece199-197f-4e7a-8541-a31c2bccdc9b&url=https%3A%2F%2Fskillshop.credential.net%2Facece199-197f-4e7a-8541-a31c2bccdc9b&ident=77b0e2f330b02371330579e87c1f33d9fcffc89b/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-bold hover:text-blue-600 transition-colors cursor-pointer text-sm sm:text-base"
                    >
                      Google Ads Creative Certification
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 