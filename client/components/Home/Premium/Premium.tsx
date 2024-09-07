"use client";

import React, { useState } from 'react';
import { FaStar, FaArrowRight } from 'react-icons/fa';

type Course = {
  title: string;
  image: string;
  price: string;
};

const premiumCoursesData: Course[] = [
  {
    title: 'Advanced Biology',
    image: '/images/biology.jpg', // Accessing from public folder
    price: '500 Birr',
  },
  {
    title: 'Organic Chemistry',
    image: '/images/chemistry.jpg', // Accessing from public folder
    price: '450 Birr',
  },
  {
    title: 'Quantum Physics',
    image: '/images/phy.jpg', // Accessing from public folder
    price: '600 Birr',
  },
  {
    title: 'Calculus II',
    image: '/images/math.jpg', // Accessing from public folder
    price: '550 Birr',
  },
];

const PremiumCourses: React.FC = () => {
  const [ratings, setRatings] = useState<number[]>(Array(premiumCoursesData.length).fill(0));

  const handleRatingClick = (courseIndex: number, rating: number) => {
    const newRatings = [...ratings];
    newRatings[courseIndex] = rating;
    setRatings(newRatings);
  };

  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold text-custom-green mb-4 text-right">Premium Exam Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {premiumCoursesData.map((course, index) => (
          <div
            key={index}
            className="bg-light-grey p-4 rounded-md shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-auto rounded-md mb-4"
            />
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-black">{course.title}</h3>
              <button className="bg-custom-green text-white px-3 py-2 rounded-md hover:bg-green-600">
                Unlock
              </button>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer ${ratings[index] >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                    onClick={() => handleRatingClick(index, star)}
                  />
                ))}
                <span className="ml-2 text-black">{ratings[index]}/5</span>
              </div>
              <span className="text-black font-bold">{course.price}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="flex items-center bg-custom-green text-white px-4 py-2 rounded-md hover:bg-green-600">
          See More <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PremiumCourses;
