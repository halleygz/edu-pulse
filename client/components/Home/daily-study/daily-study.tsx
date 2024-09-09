"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaLock } from "react-icons/fa";

const DailyStudy: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [unlockedDays, setUnlockedDays] = useState<number[]>([]); // Track unlocked days
  const [plans, setPlans] = useState<object[]>([])
  useEffect(()=>{
    const loadUserPlanFromLocalStorage =()=>{
      const storedData = localStorage.getItem('user-plans')
      if(storedData){
        try{

          const samplePlan = JSON.parse(storedData);
          console.log(samplePlan)
          if(samplePlan.length > 0){
            setPlans(samplePlan)
          }else{
            console.error("No Plan found in the 'user-plans'.");
          }
        } catch (error) {
          console.error("Error parsing 'user-plans' from localStorage:", error);
        }
      } else {
        console.error("user-plans not found in LS")
      }
    }
    loadUserPlanFromLocalStorage()
  },[])

  const handleUnlockDay = (dayIndex: number) => {
    setUnlockedDays([...unlockedDays, dayIndex]);
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
              {plans.map((plan:any, index:any) => (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-between ${unlockedDays.includes(index) ? "bg-custom-green-dark text-white" : "bg-gray-300 text-gray-800"} px-8 py-6 rounded-lg flex-1 ${!unlockedDays.includes(index) ? "cursor-pointer" : ""}`}
                  onClick={() => !unlockedDays.includes(index) && handleUnlockDay(index)}
                >
                  {/* Enlarged Image */}
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Plant_cell_structure_svg_labels.svg"
                    alt={`Day ${index + 1}`}
                    className="w-48 h-48 mb-4 object-contain"
                  />
                  <div className="flex justify-between items-center w-full">
                    {/* Day X/3 Text */}
                    <span className="text-lg font-semibold">Day {index + 1}/{plans.length}</span>
                    {/* Unlock or Access Button */}
                    {!unlockedDays.includes(index) ? (
                      <button
                        className="px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                        onClick={() => handleUnlockDay(index)}
                      >
                        Unlock
                      </button>
                    ) : (
                      <span className="text-lg font-bold">
                        <Link href={{
                          pathname: `/Plans/${plan._id}`,
                          query: {index},
                      }}>

                        Access
                        </Link>
                        </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default DailyStudy;
