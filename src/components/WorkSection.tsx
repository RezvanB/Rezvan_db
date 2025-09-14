import Image from "next/image";
import Link from "next/link";
import { trackPortfolioInteraction } from "@/utils/analytics";

export default function WorkSection() {
  const handleProjectClick = (projectName: string) => {
    trackPortfolioInteraction.projectClick(projectName);
  };

  const projects = [
    {
      id: "learning-content-creation",
      title: "Learning Content Creation with Gen AI",
      subtitle: "Empowering learning content creators to develop quality and consistent content",
      image: "/WorkSection-Imager/Frame 1321318963.png"
    },
    {
      id: "technology-help-experience",
      title: "Technology Help Experience",
      subtitle: "Supporting employees to access technology tools and services",
      image: "/WorkSection-Imager/Frame 1321318964.png"
    },
    {
      id: "virtual-platform-indigenous-art",
      title: "Virtual Platform for Indigenous Art",
      subtitle: "Supporting communities to access artwork directories and wiki platforms with a focus on Indigenous artworks worldwide",
      image: "/WorkSection-Imager/Frame 1321318965.png"
    },
    {
      id: "access-visual-art",
      title: "Access Visual Art",
      subtitle: "Supporting users to access creative space through an online information resource about physical accessibility information of Ontario's art venues",
      image: "/WorkSection-Imager/Frame 1321318966.png"
    },
    {
      id: "streamlining-transition",
      title: "Streamlining Transition",
      subtitle: "Supporting stroke patients through service design intervention to improve the transition experience from hospital to home",
      image: "/WorkSection-Imager/Frame 1321318968.png"
    }
  ];

  return (
    <section id="work" className="mt-20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mt-20 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Work
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            UX Design and Strategy projects that deliver impactful solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              onClick={() => handleProjectClick(project.title)}
              className="group block"
            >
              <div className="h-full rounded-xl bg-gray-100 border border-gray-200 transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-gray-200 overflow-hidden">
                {/* Image above the card content */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                
                {/* Card content */}
                <div className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Subtitle */}
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="mt-4 flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center group-hover:bg-white transition-colors">
                      <svg 
                        className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 