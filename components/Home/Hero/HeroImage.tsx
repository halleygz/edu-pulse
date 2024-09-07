"use client";
import Image from 'next/image';
import React from 'react';
import { Tilt } from 'react-tilt';

const HeroImage = () => {
  return (
    <Tilt>
      <div className="hidden lg:block">
        {/* Add your image or other content here */}
        <Image src="/images/hero.png" width={800} height={600} alt="hero" />

      </div>  
    </Tilt>
  );
};

export default HeroImage;
