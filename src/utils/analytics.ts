// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (command: 'config' | 'event', targetId: string, config?: Record<string, unknown>) => void;
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-4EJCV66F7N', {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific portfolio interactions
export const trackPortfolioInteraction = {
  // Track when someone views your work
  workSectionView: () => trackEvent('view', 'portfolio', 'work_section'),
  
  // Track when someone clicks on a project
  projectClick: (projectName: string) => trackEvent('click', 'portfolio', `project_${projectName}`),
  
  // Track when someone visits external links
  externalLinkClick: (linkType: string) => trackEvent('click', 'external_link', linkType),
  
  // Track when someone contacts you
  contactClick: (method: string) => trackEvent('click', 'contact', method),
  
  // Track when someone downloads your resume
  resumeDownload: () => trackEvent('download', 'portfolio', 'resume'),
  
  // Track when someone views your education section
  educationView: () => trackEvent('view', 'portfolio', 'education_section'),
  
  // Track when someone views your tools section
  toolsView: () => trackEvent('view', 'portfolio', 'tools_section'),
};

// Track scroll depth
export const trackScrollDepth = () => {
  if (typeof window === 'undefined') return;
  
  let maxScroll = 0;
  const trackScroll = () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      
      // Track at 25%, 50%, 75%, and 100%
      if (maxScroll >= 25 && maxScroll < 50) {
        trackEvent('scroll', 'engagement', '25_percent');
      } else if (maxScroll >= 50 && maxScroll < 75) {
        trackEvent('scroll', 'engagement', '50_percent');
      } else if (maxScroll >= 75 && maxScroll < 100) {
        trackEvent('scroll', 'engagement', '75_percent');
      } else if (maxScroll >= 100) {
        trackEvent('scroll', 'engagement', '100_percent');
      }
    }
  };
  
  window.addEventListener('scroll', trackScroll);
  
  // Cleanup function
  return () => window.removeEventListener('scroll', trackScroll);
}; 