"use client";

import React, { useState } from 'react';

const UserFlowDiagram: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Thumbnail Image */}
      <div 
        onClick={openModal}
        className="cursor-pointer group"
      >
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-6 w-64 h-48 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-200 hover:scale-105">
          <div className="text-4xl mb-3">📊</div>
          <h4 className="font-semibold text-gray-800 text-center mb-2">User Journey Flow Diagram</h4>
          <p className="text-xs text-gray-600 text-center">Click to view detailed flowchart</p>
          <div className="mt-3 text-xs text-blue-600 group-hover:text-blue-800">
            View Flowchart →
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">WattShare.ca User Flow Diagram</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p className="text-gray-600 mb-6 text-center">
                This diagram visualizes the primary user journeys on the WattShare platform for both Space Renters and Space Hosts.
              </p>

              {/* Flowchart Container */}
              <div className="bg-gray-50 rounded-lg p-8 mb-6">
                <div className="flowchart-container">
                  {/* Space Renter Flow */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">
                      Space Renter Flow (Finding & Booking)
                    </h3>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      {/* Start */}
                      <div className="flow-step start">
                        <div className="step-id">A</div>
                        <div className="step-label">Start: Arrive on Website</div>
                      </div>
                      <div className="flow-arrow">→</div>
                      
                      {/* Search */}
                      <div className="flow-step decision">
                        <div className="step-id">B</div>
                        <div className="step-label">Initial Search</div>
                      </div>
                      <div className="flow-arrow">→</div>
                      
                      {/* Browse */}
                      <div className="flow-step process">
                        <div className="step-id">C</div>
                        <div className="step-label">Browse Search Results</div>
                      </div>
                      <div className="flow-arrow">→</div>
                      
                      {/* Review */}
                      <div className="flow-step process">
                        <div className="step-id">D</div>
                        <div className="step-label">Review Listing & Select Dates</div>
                      </div>
                      <div className="flow-arrow">→</div>
                      
                      {/* Booking Decision */}
                      <div className="flow-step decision">
                        <div className="step-id">E</div>
                        <div className="step-label">Proceed to Booking</div>
                      </div>
                      
                      {/* Login Branch */}
                      <div className="w-full mt-4 flex justify-center">
                        <div className="flow-step action">
                          <div className="step-id">F</div>
                          <div className="step-label">Login/Sign Up</div>
                        </div>
                      </div>
                      
                      <div className="w-full flex justify-center gap-4 mt-4">
                        <div className="flow-arrow">→</div>
                        <div className="flow-step process">
                          <div className="step-id">G</div>
                          <div className="step-label">Payment Information</div>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step process">
                          <div className="step-id">H</div>
                          <div className="step-label">Confirm Booking</div>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step process">
                          <div className="step-id">I</div>
                          <div className="step-label">Access Space</div>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step end">
                          <div className="step-id">J</div>
                          <div className="step-label">End: Post-Booking</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Space Host Flow */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 text-green-800 border-b-2 border-green-200 pb-2">
                      Space Host Flow (Listing & Managing)
                    </h3>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                      {/* Start */}
                      <div className="flow-step start">
                        <div className="step-id">K</div>
                        <div className="step-label">Start: Arrive on Website</div>
                      </div>
                      <div className="flow-arrow">→</div>
                      
                      {/* List Space */}
                      <div className="flow-step decision">
                        <div className="step-id">L</div>
                        <div className="step-label">Navigate to &quot;List Your Space&quot;</div>
                      </div>
                      
                      {/* Login Branch */}
                      <div className="w-full mt-4 flex justify-center">
                        <div className="flow-step action">
                          <div className="step-id">M</div>
                          <div className="step-label">Login/Sign Up</div>
                        </div>
                      </div>
                      
                      {/* Listing Steps */}
                      <div className="w-full flex justify-center gap-4 mt-4">
                        <div className="flow-arrow">→</div>
                        <div className="flow-step process">
                          <div className="step-id">N</div>
                          <div className="step-label">Step 1: Basic Info</div>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step process">
                          <div className="step-id">O</div>
                          <div className="step-label">Step 2: Details</div>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step process">
                          <div className="step-id">P</div>
                          <div className="step-label">Step 3: Photos</div>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step process">
                          <div className="step-id">Q</div>
                          <div className="step-label">Step 4: Pricing</div>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step process">
                          <div className="step-id">R</div>
                          <div className="step-label">Publish Listing</div>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step process">
                          <div className="step-id">S</div>
                          <div className="step-label">Manage Listings</div>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step process">
                          <div className="step-id">T</div>
                          <div className="step-label">Manage Bookings</div>
                        </div>
                        <div className="flow-arrow">→</div>
                        <div className="flow-step end">
                          <div className="step-id">U</div>
                          <div className="step-label">End: Payouts</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="mt-8 p-4 bg-white rounded-lg border">
                    <h4 className="font-semibold mb-3 text-gray-800">Legend</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                        <span>Start/End</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-gray-400"></div>
                        <span>Process</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-gray-300 border-2 border-gray-500"></div>
                        <span>Decision</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-yellow-400"></div>
                        <span>Authentication</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Insights */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Renter Journey</h4>
                  <p className="text-sm text-blue-700">
                    Website → Search → Browse → Review → Book → Pay → Access → Rate
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Host Journey</h4>
                  <p className="text-sm text-green-700">
                    Website → List Space → Create Listing → Publish → Manage → Payout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .flow-step {
          padding: 12px;
          border-radius: 8px;
          text-align: center;
          min-width: 120px;
          font-size: 12px;
          font-weight: 500;
          border: 2px solid;
          transition: all 0.2s;
        }
        
        .flow-step:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .flow-step.start {
          background-color: #D0E6F0;
          border-color: #3498db;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .flow-step.end {
          background-color: #C8E6C9;
          border-color: #27ae60;
          border-radius: 50%;
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        .flow-step.process {
          background-color: #ECF0F1;
          border-color: #bdc3c7;
        }
        
        .flow-step.decision {
          background-color: #ECF0F1;
          border-color: #95a5a6;
          border-width: 3px;
        }
        
        .flow-step.action {
          background-color: #FDF3D6;
          border-color: #f39c12;
        }
        
        .step-id {
          font-weight: bold;
          font-size: 14px;
          margin-bottom: 4px;
        }
        
        .step-label {
          line-height: 1.2;
        }
        
        .flow-arrow {
          font-size: 20px;
          font-weight: bold;
          color: #666;
        }
        
        .flowchart-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>
    </>
  );
};

export default UserFlowDiagram; 