'use client';  // This directive tells Next.js to treat this component as a client component

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "John Doe",
    profession: "High School Student",
    review: "This app has revolutionized my learning experience. The personalized paths and interactive quizzes keep me engaged and motivated.",
    imageSrc: "/images/u1.jpg",
  },
  {
    name: "Sarah Wilson",
    profession: "Graduate Student",
    review: "The premium content has been invaluable in helping me excel in my studies.",
    imageSrc: "/images/r1.jpg",
  },
  {
    name: "Mike Johnson",
    profession: "Middle School Teacher",
    review: "The progress tracking and badges are fantastic. My students are more motivated than ever to achieve their goals.",
    imageSrc: "/images/u2.jpg",
  },
  {
    name: "Chris Lee",
    profession: "Parent",
    review: "This app provides a safe and supportive environment for my child to learn and grow.",
    imageSrc: "/images/u3.jpg",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.8, ease: 'easeInOut' }
};

const Review = () => {
  return (
    <div className="w-full py-16 bg-gray-100 flex flex-col items-center" id='testimonials'>
      {/* Header and Paragraph */}
      <motion.div 
        className="text-center mb-12"
        {...fadeInUp}
      >
        <h2 className="text-3xl font-semibold mb-4">Success Stories</h2>
        <p className="text-lg text-gray-600">Hear from our users how our app has transformed their learning experience.</p>
      </motion.div>

      {/* Review Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-4/5">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="flex items-start p-6 bg-white rounded-lg shadow-lg transform transition-all hover:scale-110"
            {...fadeInUp}
            style={{ animation: `fadeInUp 0.8s ease-in-out ${index * 0.2}s` }}
          >
            <div className="flex-shrink-0 mr-4">
              <Image
                src={review.imageSrc}
                alt={review.name}
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{review.profession}</p>
              <p className="text-gray-700">{review.review}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Review;
