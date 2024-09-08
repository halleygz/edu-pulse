"use client";

import React, { useState } from "react";
import { FaChevronDown, FaLock } from "react-icons/fa";

const DailyStudy: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDay1Unlocked, setIsDay1Unlocked] = useState(false);

  const handleUnlockDay1 = () => {
    setIsDay1Unlocked(true);
  };

  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <div className="w-full max-w-3xl mx-auto">
        {/* Heading */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-custom-green-dark">Plans Based on Your Assessment</h2>
        </div>

        {/* Daily Study Section */}
        <div
          className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer ${isDropdownOpen ? 'mb-6' : ''}`}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-expanded={isDropdownOpen}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-custom-green-dark">Daily Study</h1>
            <FaChevronDown className={`text-gray-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </div>
        </div>

        {/* Dropdown Content */}
        {isDropdownOpen && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Day Sections */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              {/* Day 1 of 3 Div */}
              <div
                className={`flex flex-col items-center justify-between ${isDay1Unlocked ? "bg-custom-green-dark text-white" : "bg-gray-300 text-gray-800"} px-8 py-6 rounded-lg flex-1 ${!isDay1Unlocked ? "cursor-pointer" : ""}`}
                onClick={!isDay1Unlocked ? handleUnlockDay1 : undefined}
                aria-disabled={!isDay1Unlocked}
              >
                {/* Enlarged Image */}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Plant_cell_structure_svg_labels.svg"
                  alt="Day 1"
                  className="w-48 h-48 mb-4 object-contain"
                />
                <div className="flex justify-between items-center w-full">
                  {/* Day 1/3 Text */}
                  <span className="text-lg font-semibold">Day 1/3</span>
                  {/* Unlock Button (Green) */}
                  {!isDay1Unlocked && (
                    <button
                      className="px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                      onClick={handleUnlockDay1}
                    >
                      Unlock
                    </button>
                  )}
                  {isDay1Unlocked && <span className="text-lg font-bold">Access</span>}
                </div>
              </div>

              {/* Day 2 of 3 Div (Blurred and Locked) */}
              <div className="flex flex-col items-center justify-between bg-gray-300 text-gray-800 px-8 py-6 rounded-lg flex-1 opacity-50 cursor-not-allowed">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Plant_cell_structure_svg_labels.svg"
                  alt="Day 2"
                  className="w-48 h-48 mb-4 object-contain"
                />
                <div className="flex justify-between items-center w-full">
                  <span className="text-lg font-semibold">Day 2/3</span>
                  <FaLock className="text-green-500 text-xl" /> {/* Green Lock Icon */}
                </div>
              </div>

              {/* Day 3 of 3 Div (Blurred and Locked) */}
              <div className="flex flex-col items-center justify-between bg-gray-300 text-gray-800 px-8 py-6 rounded-lg flex-1 opacity-50 cursor-not-allowed">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Plant_cell_structure_svg_labels.svg"
                  alt="Day 3"
                  className="w-48 h-48 mb-4 object-contain"
                />
                <div className="flex justify-between items-center w-full">
                  <span className="text-lg font-semibold">Day 3/3</span>
                  <FaLock className="text-green-500 text-xl" /> {/* Green Lock Icon */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DailyStudy;
