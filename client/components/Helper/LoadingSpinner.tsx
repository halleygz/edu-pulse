

"use client";

import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-100 via-custom-green-dark to-custom-green">
      {/* Spinner Animation */}
      <div className="relative flex items-center justify-center">
        {/* Spinner Ring */}
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-white border-opacity-50 border-l-custom-green-dark border-r-custom-green"></div>
        {/* Inner Dot */}
        <div className="absolute bg-custom-green-dark rounded-full h-6 w-6 animate-ping"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
