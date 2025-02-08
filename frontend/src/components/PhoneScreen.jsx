import React from 'react';

const PhoneScreen = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      {/* Phone container with fixed dimensions */}
      <div className="w-[360px] h-[640px] bg-white rounded-3xl overflow-hidden shadow-2xl relative">
        {/* Status bar */}
        <div className="h-6 bg-gray-800 flex items-center justify-between px-4">
          <div className="flex items-center space-x-2">
          </div>
        </div>
        
        {/* Main content area with scrolling */}
        <div className="h-[calc(640px-24px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PhoneScreen;