"use client";

import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AISection from "@/components/AISection";
import EducationSection from "@/components/EducationSection";
import WorkSection from "@/components/WorkSection";
import BookingSection from "@/components/BookingSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import { trackScrollDepth, trackPortfolioInteraction } from "@/utils/analytics";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Initialize scroll tracking
    const cleanup = trackScrollDepth();
    
    // Track initial page view
    trackPortfolioInteraction.workSectionView();
    
    // Auto-scroll to AI section on first visit
    const hasVisited = sessionStorage.getItem('hasVisitedPortfolio');
    if (!hasVisited) {
      // Mark as visited
      sessionStorage.setItem('hasVisitedPortfolio', 'true');
      
      const attemptScroll = () => {
        console.log('Attempting auto-scroll to AI section...');
        let aiSection = document.getElementById('ai');
        
        if (!aiSection) {
          console.log('AI section not found with getElementById, trying alternatives...');
          aiSection = document.querySelector('[id="ai"]');
        }
        
        if (aiSection) {
          console.log('AI section found for auto-scroll:', aiSection);
          console.log('AI section position:', aiSection.getBoundingClientRect());
          aiSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          return true;
        } else {
          console.log('AI section not found for auto-scroll');
          // Debug: list all sections
          const sections = document.querySelectorAll('section');
          console.log('All sections found:', sections);
          sections.forEach((section, index) => {
            console.log(`Section ${index}:`, section.id, section.className);
          });
          return false;
        }
      };
      
      // Try immediately
      setTimeout(attemptScroll, 1000);
      
      // Try again after a longer delay
      setTimeout(() => {
        if (!attemptScroll()) {
          // Final attempt after page load
          window.addEventListener('load', () => {
            setTimeout(attemptScroll, 500);
          });
        }
      }, 3000);
    }
    
    // Cleanup on unmount
    return cleanup;
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero background image */}
      <div className="relative w-full min-h-[400px] sm:min-h-[500px]">
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/pexels-daniel-andraski-197681005-11554666.jpg"
            alt="Background"
            width={3840}
            height={2160}
            quality={90}
            className="w-full h-full object-cover object-center opacity-60"
          />
          {/* Overlay removed for debugging */}
        </div>
        <div className="relative z-10 ">  
          <HeroSection />
        </div>
      </div>
      <Header />
      <AISection />
      <AboutSection />
  
      <EducationSection />
      
      {/* Hero Section */}
      

      {/* Ivy Charging full-width background */}
      <div className="relative w-full">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <Image
            src="/pexels-hyundaimotorgroup-30658213.jpg"
            alt="Ivy Charging Background"
            width={3840}
            height={2160}
            quality={90}
            className="w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 w-full h-full bg-white/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          {/* Only render the second project (Ivy Charging) from WorkSection here, refactor WorkSection if needed */}
        </div>
      </div>

      {/* Render the rest of WorkSection (other projects) here if needed */}
      <WorkSection />
      <BookingSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
      <AnalyticsDashboard />
    </main>
  );
}

