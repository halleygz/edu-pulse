'use client';  // This directive tells Next.js to treat this component as a client component

import React, { useEffect, useState } from 'react';
import { AiOutlineInteraction } from 'react-icons/ai';
import { FaPen } from 'react-icons/fa6';
import { GiProgression } from 'react-icons/gi';
import { TbPremiumRights } from 'react-icons/tb';
import { motion } from 'framer-motion';

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark as client-side rendering
  }, []);

  if (!isClient) {
    return null; // Render nothing during SSR
  }

  const fadeInFromLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1.0, ease: 'easeInOut' } // Slower initial animation
  };

  const fadeInFromRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1.0, ease: 'easeInOut' } // Slower initial animation
  };

  return (
    <div className='pt-16 pb-16' id="about">
      <motion.div
        className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16"
        {...fadeInFromLeft}
        viewport={{ once: true }}
      >
        {/* 1st Part */}
        <motion.div 
          className="flex flex-col gap-4 p-4"
          {...fadeInFromLeft}
        >
          <h2 className='font-semibold text-3xl'>Empower Your Learning</h2>

          {/* Child Div 1 */}
          <motion.div 
            className="flex items-start gap-4 p-4 rounded-md shadow-md bg-white"
            whileHover={{ scale: 1.05 }} // Smaller hover animation
            transition={{ duration: 0.2 }} // Faster hover animation
          >
            <div className="flex-shrink-0">
              <FaPen className='icons_land' />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Personalized Learning Path</h3>
              <p className="text-gray-600">Tailor your educational journey to your unique needs and preferences.</p>
            </div>
          </motion.div>

          {/* Child Div 2 */}
          <motion.div 
            className="flex items-start gap-4 p-4 rounded-md shadow-md bg-white"
            whileHover={{ scale: 1.05 }} // Smaller hover animation
            transition={{ duration: 0.2 }} // Faster hover animation
          >
            <div className="flex-shrink-0">
              <GiProgression className='icons_land' />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Progress Tracking & Badges</h3>
              <p className="text-gray-600">Monitor your progress and earn badges to celebrate your achievements.</p>
            </div>
          </motion.div>

          {/* Child Div 3 */}
          <motion.div 
            className="flex items-start gap-4 p-4 rounded-md shadow-md bg-white"
            whileHover={{ scale: 1.05 }} // Smaller hover animation
            transition={{ duration: 0.2 }} // Faster hover animation
          >
            <div className="flex-shrink-0">
              <AiOutlineInteraction className='icons_land' />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Interactive Quizzes</h3>
              <p className="text-gray-600">Test your knowledge with fun and engaging quizzes.</p>
            </div>
          </motion.div>

          {/* Child Div 4 */}
          <motion.div 
            className="flex items-start gap-4 p-4 rounded-md shadow-md bg-white"
            whileHover={{ scale: 1.05 }} // Smaller hover animation
            transition={{ duration: 0.2 }} // Faster hover animation
          >
            <div className="flex-shrink-0">
              <TbPremiumRights className='icons_land' />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Unlock Premium Content</h3>
              <p className="text-gray-600">Access exclusive materials to enhance your learning.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* 2nd Part */}
        <motion.div 
          className="flex flex-col space-y-6"
          {...fadeInFromRight}
        >
          <h2 className='font-semibold text-3xl'>How it Works</h2>

          {/* Step 1 */}
          <motion.div 
            className="flex items-start p-4 bg-gray-100 rounded-md shadow-md"
            whileHover={{ scale: 1.05 }} // Smaller hover animation
            transition={{ duration: 0.2 }} // Faster hover animation
          >
            <div className="flex-shrink-0 bg-gray-200 text-gray-800 font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Sign Up</h3>
              <p className="text-gray-600">Create an account to get started.</p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            className="flex items-start p-4 bg-gray-100 rounded-md shadow-md"
            whileHover={{ scale: 1.05 }} // Smaller hover animation
            transition={{ duration: 0.2 }} // Faster hover animation
          >
            <div className="flex-shrink-0 bg-gray-200 text-gray-800 font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Choose Your Path</h3>
              <p className="text-gray-600">Select a personalized learning path.</p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            className="flex items-start p-4 bg-gray-100 rounded-md shadow-md"
            whileHover={{ scale: 1.05 }} // Smaller hover animation
            transition={{ duration: 0.2 }} // Faster hover animation
          >
            <div className="flex-shrink-0 bg-gray-200 text-gray-800 font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Engage & Learn</h3>
              <p className="text-gray-600">Participate in group study sessions.</p>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div 
            className="flex items-start p-4 bg-gray-100 rounded-md shadow-md"
            whileHover={{ scale: 1.05 }} // Smaller hover animation
            transition={{ duration: 0.2 }} // Faster hover animation
          >
            <div className="flex-shrink-0 bg-gray-200 text-gray-800 font-bold rounded-full h-8 w-8 flex items-center justify-center mr-4">
              4
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Track Your Progress</h3>
              <p className="text-gray-600">Monitor achievements and earn badges.</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
