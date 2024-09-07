"use client";

import React from 'react';
import Link from 'next/link';
import { navLinks } from '@/constant/constant';
import { CgClose } from 'react-icons/cg';
import SearchBar from '@/components/Helper/SearchBar'; // Import SearchBar
import Profile from '@/components/Helper/Profile'; // Import Profile

type Props = {
    showNav: boolean;
    closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';
    return (
        <div>
            {/* Overlay */}
            <div className={`fixed ${navOpen} top-0 left-0 right-0 bottom-0 bg-black opacity-70 transition-transform duration-500 z-[10000]`} />
            {/* Mobile Nav */}
            <div className={`fixed ${navOpen} top-0 transform transition-transform duration-500 delay-300 w-[75%] sm:w-[60%] bg-custom-green-dark text-white space-y-6 z-[10001] h-full`}>
                <div className='flex flex-col h-full'>
                    {/* Close Button */}
                    <CgClose onClick={closeNav} className='absolute top-4 right-4 w-8 h-8 cursor-pointer' />
                    {/* Logo */}
                    <h2 className='text-2xl font-extrabold text-center mt-12 mb-8'>EduPlus</h2>
                    {/* SearchBar and Profile */}
                    {/* <div className='flex flex-col items-center space-y-4'>
                        <SearchBar />
                        <Profile />
                    </div> */}
                    {/* Navlinks */}
                    <div className='flex flex-col items-center mt-6'>
                        {navLinks.map((link) => (
                            <Link key={link.id} href={link.url}>
                                <p className='nav__link text-lg ml-8 border-b-[1.5px] pb-2 border-white'>{link.label}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
