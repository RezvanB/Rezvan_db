"use client";

import { useState, useEffect } from "react";

export default function BookingSection() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    // Add a timeout to detect if iframe fails to load
    const timeout = setTimeout(() => {
      if (!iframeLoaded) {
        setIframeError(true);
      }
    }, 15000); // 15 second timeout

    return () => clearTimeout(timeout);
  }, [iframeLoaded]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Book a Mentoring Session
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to accelerate your product career? Let&apos;s discuss your goals, challenges, and strategies for success.
          </p>
        </div>
        
        <div className="flex justify-center">
          <div 
            style={{
              height: "496px",
              boxShadow: "rgba(142, 151, 158, 0.15) 0px 4px 19px 0px",
              borderRadius: "16px",
              overflow: "hidden",
              width: "100%",
              maxWidth: "650px",
              position: "relative"
            }}
          >
            {!iframeError ? (
              <iframe 
                src="https://adplist.org/mentors/reza-boostani" 
                title="Book a mentoring session with Reza Boostani"
                width="100%" 
                height="100%" 
                loading="lazy" 
                style={{ border: "0px" }}
                onLoad={() => {
                  console.log("ADPList iframe loaded successfully");
                  setIframeLoaded(true);
                }}
                onError={(e) => {
                  console.error("ADPList iframe failed to load:", e);
                  setIframeError(true);
                }}
                allow="fullscreen"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-white rounded-lg">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📅</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Booking Widget Temporarily Unavailable
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The booking widget is currently loading. Please try refreshing the page or contact me directly.
                  </p>
                  <a 
                    href="https://adplist.org/mentors/reza-boostani" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Book on ADPList
                  </a>
                </div>
              </div>
            )}
            
            {!iframeLoaded && !iframeError && (
              <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading booking widget...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 