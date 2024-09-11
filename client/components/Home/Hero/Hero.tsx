'use client';  // This directive tells Next.js to treat this component as a client component

import React from 'react';
import { motion } from 'framer-motion';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    // Removed top padding to eliminate the gap above the hero section
    <div className='w-full h-screen bg-custom-green' id='home'>
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}  // Start from the left
            animate={{ opacity: 1, x: 0 }}  // Move to the center
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <HeroContent />
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}  // Start from the right
            animate={{ opacity: 1, x: 0 }}  // Move to the center
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <HeroImage />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
