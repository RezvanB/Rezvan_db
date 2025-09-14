"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LuBrainCircuit } from "react-icons/lu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isBlogPage = pathname?.startsWith('/blog');
  const isCaseStudyPage = pathname?.startsWith('/case-studies');
  const isProjectPage = pathname?.startsWith('/projects');
  const isNotMainPage = isBlogPage || isCaseStudyPage || isProjectPage;

  const handleAIClick = () => {
    if (isNotMainPage) {
      router.push('/#ai');
    } else {
      console.log('AI button clicked, looking for AI section...');
      
      // Try multiple ways to find the AI section
      let aiSection = document.getElementById('ai');
      if (!aiSection) {
        aiSection = document.querySelector('[id="ai"]');
      }
      if (!aiSection) {
        aiSection = document.querySelector('section[id="ai"]');
      }
      
      console.log('AI section element:', aiSection);
      
      if (aiSection) {
        console.log('AI section found, scrolling...');
        console.log('AI section position:', aiSection.getBoundingClientRect());
        
        aiSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        
        // Focus the AI input after scrolling
        setTimeout(() => {
          const aiInput = document.querySelector('#ai input[type="text"]') as HTMLInputElement;
          console.log('AI input element:', aiInput);
          if (aiInput) {
            console.log('Focusing AI input...');
            aiInput.focus();
          } else {
            console.log('AI input not found');
          }
        }, 1000); // Increased delay
      } else {
        console.log('AI section not found! Trying alternative approach...');
        // Fallback: try to scroll to the section by class or other selectors
        const sections = document.querySelectorAll('section');
        console.log('All sections found:', sections);
        sections.forEach((section, index) => {
          console.log(`Section ${index}:`, section.id, section.className);
        });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: isNotMainPage ? "/#home" : "#home" },
    { name: "About", href: isNotMainPage ? "/#about" : "#about" },
    { name: "Work", href: isNotMainPage ? "/#work" : "#work" },
    { name: "Tools", href: isNotMainPage ? "/#tools" : "#tools" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: isNotMainPage ? "/#contact" : "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href={isNotMainPage ? "/#home" : "#home"}
              className="text-lg sm:text-xl font-bold text-gray-900"
            >
              Rezvan Boostani
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 sm:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {/* AI Navigation Item */}
            <button
              onClick={handleAIClick}
              className="flex items-center gap-1.5 text-sm sm:text-base text-gray-600 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:bg-clip-text focus:text-transparent focus:bg-gradient-to-r focus:from-blue-500 focus:to-purple-600 focus:bg-clip-text active:text-transparent active:bg-gradient-to-r active:from-blue-500 active:to-purple-600 active:bg-clip-text transition-all duration-300 group"
            >
              <LuBrainCircuit className="w-4 h-4 group-hover:scale-110 group-focus:scale-110 group-active:scale-110 transition-transform duration-300 group-hover:text-blue-500 group-focus:text-blue-500 group-active:text-blue-500" />
              AI
            </button>
          </nav>

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 block px-3 py-2 text-sm sm:text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* AI Mobile Navigation Item */}
              <button
                onClick={handleAIClick}
                className="flex items-center gap-2 text-gray-700 w-full px-3 py-2 text-sm sm:text-base font-medium transition-colors duration-200 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:bg-clip-text focus:text-transparent focus:bg-gradient-to-r focus:from-blue-500 focus:to-purple-600 focus:bg-clip-text active:text-transparent active:bg-gradient-to-r active:from-blue-500 active:to-purple-600 active:bg-clip-text group"
              >
                <LuBrainCircuit className="w-4 h-4 group-hover:scale-110 group-focus:scale-110 group-active:scale-110 transition-transform duration-300 group-hover:text-blue-500 group-focus:text-blue-500 group-active:text-blue-500" />
                AI
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 