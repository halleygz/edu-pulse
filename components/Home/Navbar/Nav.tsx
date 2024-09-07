import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';
import SearchBar from '@/components/Helper/SearchBar'; // Import SearchBar
import Profile from '@/components/Helper/Profile'; // Import Profile
import { navLinks } from '@/constant/constant';

type Props = {
  openNav: () => void;
  openSignIn: () => void;
};

const Nav = ({ openNav, openSignIn }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className={`fixed ${navBg ? 'bg-custom-green-dark' : 'fixed'} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
        {/* Logo */}
        <h2 className='font-extrabold text-white text-[2rem]'>EduPlus</h2>
        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center space-x-10'>
          <SearchBar />
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url}>
              <p className='nav__link'>{link.label}</p>
            </Link>
          ))}
          <Profile />
          <button
            onClick={openSignIn}
            className='px-4 py-1 text-white font-semibold text-sm bg-green-500 hover:bg-green-600 transition-all rounded-lg md:px-8 md:py-2 md:text-base md:font-semibold'
          >
            Get Started
          </button>
        </div>
        {/* Hamburger Menu */}
        <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
      </div>
    </div>
  );
};

export default Nav;
