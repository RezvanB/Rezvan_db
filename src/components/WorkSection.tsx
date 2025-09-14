import Image from "next/image";
import { trackPortfolioInteraction } from "@/utils/analytics";

export default function WorkSection() {
  const handleProjectClick = (projectName: string) => {
    trackPortfolioInteraction.projectClick(projectName);
  };

  const handleExternalLinkClick = (linkType: string) => {
    trackPortfolioInteraction.externalLinkClick(linkType);
  };

  const projects = [
    {
      role: "Lead Product Manager",
      roleColor: "bg-green-100 text-green-800",
      timeline: "2024–Present",
      problem: "EV owners had unused home chargers, while tenants and neighbors in MURBs lacked access to convenient charging options. The market needed a peer-to-peer solution to unlock and monetize this underutilized infrastructure.",
      whatIDid: "Built a charger-sharing platform from scratch. Conducted user interviews, validated product-market fit, wrote full-stack code, defined product roadmap, and secured early-stage funding.",
      challenges: [
        "Complex payment and scheduling system",
        "Scalabale OCPP, OCPI implementations",
        "Trust and safety between users",
        "Regulatory compliance for energy sharing"
      ],
      solutions: [
        "Implemented WebSocket-based real-time booking",
        "Built verification and insurance integration",
        "Partnered with local utilities for compliance"
      ],
      impact: [
        "Launched MVP & Beta",
        "Reduced development costs by 40%",
        "Secured fund in early-stage",
        "Onboarded 50+ beta users"
      ],
      // techStack: ["Next.js", "PostgreSQL", "Supabase", "WebSockets", "Stripe"],
      logo: "/NEWLOGO.png",
      url: "https://wattshare.ca"
    },
    {
      title: "Ontario Charging Network",
      role: "Product Management",
      roleColor: "bg-blue-100 text-blue-800",
      timeline: "2023",
      url: "https://ivycharge.com",
      problem: "",
      whatIDid: "Streamlining the process through a subscription model offered a path to better engagement and increased recurring revenue. Led customer research initiative, restructured user workflows, and launched a new subscription-based e-commerce flow.",
      challenges: [
        "Complex legacy billing system",
        "User resistance to subscription model",
        "Integration across multiple platforms"
      ],
      solutions: [
        "Redesigned customer journey with user feedback",
        "Implemented tiered pricing strategy",
        "Built seamless cross-platform experience"
      ],
      impact: [
        "+20% user satisfaction score",
        "+50% revenue through new channel",
      ,
        "Increased sales by 50%"
      ],
      focusAreas: ["UX Design", "Customer Journey", "E-commerce", "Mobile App"]
    },
    {
      title: "ThunderVolt",
      role: "Product Manager",
      roleColor: "bg-purple-100 text-purple-800",
      timeline: "2021–2023",
      problem: "Many EV owners living in condos faced limited access to home charging due to inadequate infrastructure in shared parking spaces. The market lacked a unified hardware-software solution tailored to these multi-unit environments.",
      whatIDid: "Led end-to-end product development for EV hardware and its software companion. Conducted 300+ user interviews, defined product features, ran A/B testing, and secured incubation by McMaster's The Forge.",
      challenges: [
        "Hardware-software integration complexity",
        "Regulatory certification requirements",
        "Supply chain and manufacturing delays"
      ],
      solutions: [
        "Built modular architecture for easy updates",
        "Established partnerships with certification bodies",
        "Implemented agile processes"
      ],
      impact: [
        "Secured $50K+ in funding",
        "Established standard UX process",
        "Strong stakeholder buy-in across teams",
        "Successfully incubated at The Forge"
      ],
      achievements: ["$50K+ Funding", "300+ User Interviews", "Incubator Acceptance", "Hardware + Software Launch", "Achieved successful exit"],
      images: [
        "https://wattshare-images.s3.us-east-1.amazonaws.com/Screenshot+2025-06-26+205653.png"
      ]
    }
  ];

  return (
    <section id="work" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Products & Experience
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Real problems solved, products shipped, and impact measured
          </p>
        </div>
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="relative w-full">
              {/* Vertical image strip for Watt Share, Ivy Charging, and ThunderVolt */}
              {(index === 0 || index === 1 || index === 2) && (
                <div className="absolute top-0 right-0 h-full w-8 sm:w-12 md:w-16 z-10 rounded-r-xl overflow-hidden shadow-md">
                  <Image
                    src={
                      index === 0
                        ? "/pexels-raimundo-campbell-2149207419-30479291.jpg"
                        : index === 1
                        ? "/pexels-hyundaimotorgroup-30658213.jpg"
                        : "/pexels-thisisengineering-3861442.jpg"
                    }
                    alt={
                      index === 0
                        ? "Watt Share Accent"
                        : index === 1
                        ? "Ivy Charging Accent"
                        : "ThunderVolt Accent"
                    }
                    width={256}
                    height={1600}
                    quality={95}
                    className="w-full h-full object-cover object-center opacity-90"
                  />
                </div>
              )}
              <div className="relative z-0 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className={`rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg bg-white/90 backdrop-blur-md ${index === 0 || index === 1 || index === 2 ? 'pr-12 sm:pr-16 md:pr-20 lg:pr-24' : ''}`}>
                  <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                      {/* Watt Share Logo and URL */}
                      {project.logo && project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 mb-4 sm:mb-8" onClick={() => handleProjectClick(project.title || 'Watt Share')}>
                          <Image
                            src={project.logo}
                            alt={project.title + ' Logo'}
                            width={120}
                            height={120}
                            className="w-20 h-20 sm:w-32 sm:h-32 object-contain"
                          />
                          <span className="text-sm sm:text-lg font-semibold text-green-600 hover:underline" onClick={(e) => { e.stopPropagation(); handleExternalLinkClick(project.url.replace('https://', '')); }}>{project.url.replace('https://', '')}</span>
                        </a>
                      )}
                      
                      {/* URL only (for projects without logos) */}
                      {!project.logo && project.url && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block mb-4 sm:mb-8" onClick={(e) => { e.stopPropagation(); handleExternalLinkClick(project.url.replace('https://', '')); }}>
                          <span className="text-sm sm:text-lg font-semibold text-blue-600 hover:underline">{project.url.replace('https://', '')}</span>
                        </a>
                      )}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{project.title}</h3>
                        <span className={`px-2 sm:px-3 py-1 ${project.roleColor} text-xs sm:text-sm rounded-full font-medium`}>
                          {project.role}
                        </span>
                        <span className="text-xs sm:text-sm">{project.timeline}</span>
                      </div>
                      
                      <div>
                        <p className="text-sm sm:text-base">{project.problem}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-base sm:text-lg">What I Did</h4>
                        <p className="text-sm sm:text-base">{project.whatIDid}</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Key Challenges</h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {project.challenges.map((challenge, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                                <span className="text-xs sm:text-sm">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">How I Solved Them</h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {project.solutions.map((solution, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                                <span className="text-xs sm:text-sm">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Impact & Results</h4>
                        <div className="space-y-1 sm:space-y-2">
                          {project.impact.map((result, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full"></span>
                              <span className="text-xs sm:text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* {project.techStack && (
                        <div>
                          <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Tech Stack</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {project.techStack.map((tech) => (
                              <span key={tech} className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )} */}
                      
                      {project.focusAreas && (
                        <div>
                          <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Focus Areas</h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {project.focusAreas.map((area) => (
                              <span key={area} className="px-2 sm:px-3 py-1 bg-green-100 text-green-800 text-xs sm:text-sm rounded-full">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {project.achievements && (
                        <div>
                          <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Key Achievements</h4>
                          <div className="space-y-1 sm:space-y-2">
                            {project.achievements.map((achievement) => (
                              <div key={achievement} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full"></span>
                                <span className="text-xs sm:text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* ThunderVolt Image - placed in right sidebar */}
                      {project.title === "ThunderVolt" && project.images && (
                        <div className="mt-4 sm:mt-6">
                          <Image
                            src={project.images[0]}
                            alt="ThunderVolt project screenshot by Reza Boostani"
                            width={250}
                            height={150}
                            className="rounded-lg object-cover shadow-md w-full"
                          />
                        </div>
                      )}
                      
                      {/* Practice Story Button */}
                      {(project.title === "WattShare" || project.title === "ThunderVolt" || !project.title) && (
                        <div className="mt-4 sm:mt-6">
                          <a
                            href={`/case-studies/${project.title?.toLowerCase().replace(/\s+/g, '-') || 'watt-share'}`}
                            onClick={() => handleProjectClick(`${project.title || 'Watt Share'} Case Study`)}
                            className="inline-flex items-center justify-center w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm sm:text-base font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                          >
                            <span className="mr-2 text-yellow-300 "></span>
                            {project.title || 'Sprint Planing'} Practise
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 