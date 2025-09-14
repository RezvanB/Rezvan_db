"use client";

import { useEffect, useState } from 'react';

export default function AnalyticsDashboard() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV === 'development') {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <h3 className="text-sm font-semibold mb-2">Analytics (Dev Mode)</h3>
      <div className="text-xs space-y-1">
        <p>✅ Google Analytics Connected</p>
        <p>📊 Tracking: Page views, clicks, scroll depth</p>
        <p>🎯 Events: Contact clicks, project views</p>
        <p>📈 Check Google Analytics for real data</p>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="text-xs text-gray-500 hover:text-gray-700 mt-2"
      >
        Hide
      </button>
    </div>
  );
} 