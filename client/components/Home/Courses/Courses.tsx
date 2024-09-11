"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { FaPlus } from 'react-icons/fa';

const coursesData = [
  {
    title: 'Biology',
    image: 'https://media.licdn.com/dms/image/v2/C4D1BAQHg6yM2QSvcyg/company-background_10000/company-background_10000/0/1601919496557/reaction_biology_corporation_cover?e=2147483647&v=beta&t=TkwvlCdoxoqiXLEMUCtY7cvlVmNPQU507xHgbY9dWHg',
    quote: 'Understanding the natural world.',
    link: "/Biology"
  },
  {
    title: 'Chemistry',
    image: 'https://t4.ftcdn.net/jpg/05/88/88/43/360_F_588884314_22aHBXqSl3VcPtX2ylvPvrU0UwQxpKEC.jpg',
    quote: 'The central science of everything.',
  },
  {
    title: 'Physics',
    image: 'https://as1.ftcdn.net/v2/jpg/05/19/82/06/1000_F_519820626_1iXOjpWVLfHeqGGntdnSMsAgkJGojKl9.jpg',
    quote: 'Exploring the laws of nature.',
  },
  {
    title: 'Mathematics',
    image: 'https://media.istockphoto.com/id/1438461375/vector/math-science-formulas-on-a-green-blackboard-background-vector.jpg?s=612x612&w=0&k=20&c=4f7pT5AyHIBDkU2L5zGepmxDeRN-bQQOoUEy14reRjI=',
    quote: 'The language of the universe.',
  },
];

const Courses: React.FC = () => {
  return (
    <div className="bg-white p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold text-custom-green">Courses</h2>
        {/* <button className="flex items-center bg-custom-green text-white px-4 py-2 rounded-md hover:bg-green-600">
          See More
        </button> */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {coursesData.map((course, index) => (
          <div
            key={index}
            className="bg-light-grey p-6 rounded-md shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 relative"
          >
            {/* Display course image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black mb-2">{course.title}</h3>
            <p className="font-bold text-gray-700 mb-4">{course.quote}</p>

            {/* Show "Coming Soon" text for all courses except Biology */}
            {course.title !== 'Biology' && (
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center rounded-md">
                <p className="text-white text-lg font-semibold">Coming Soon</p>
              </div>
            )}

            {/* Only link for the "Biology" course */}
            {course.title === 'Biology' && (
              <Link href={`/Courses${course.link}`} className="bg-custom-green text-white px-3 py-2 rounded-md hover:bg-green-600">
                See Topics
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
