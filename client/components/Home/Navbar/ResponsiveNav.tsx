"use client";

import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';
import SignIn from '../SignIn/SignIn'; 
import SignUp from '../SignUp/SignUp'; 

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const hideNavHandler = () => setShowNav(false);

  const openSignInHandler = () => setShowSignIn(true);
  const closeSignInHandler = () => setShowSignIn(false);

  /* const openSignUpHandler = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  }; */
  const closeSignUpHandler = () => setShowSignUp(false);

  const switchToSignUpHandler = () => {
    setShowSignIn(false);
    setShowSignUp(true);
  };
  
  const switchToSignInHandler = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  return (
    <>
      <Nav openNav={showNavHandler} openSignIn={openSignInHandler} />
      <MobileNav showNav={showNav} closeNav={hideNavHandler} />
      {showSignIn && <SignIn onSwitch={switchToSignUpHandler} onClose={closeSignInHandler} />}
      {showSignUp && <SignUp onSwitch={switchToSignInHandler} onClose={closeSignUpHandler} />}
    </>
  );
};

export default ResponsiveNav;
