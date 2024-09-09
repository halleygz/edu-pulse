"use client";

import React, { useState } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Review from './Review/Review';
import Footer from './Footer/Footer';
import KnowledgeTest from './TestYour/TestYour';
import Courses from './Courses/Courses';
import PremiumCourses from './Premium/Premium';
import Topics from './Topics/Topics';
import Quiz from './Quiz/Quiz';
import ReviewResult from './Quiz/ReviewResult';
import DailyStudy from './daily-study/daily-study';
import ProfilePage from './EditProfile/ProfilePage';


const Home = () => {
  const [showReview, setShowReview] = useState(false);

  const handleReviewClick = () => {
    setShowReview(true);
  };

  const handleCloseReview = () => {
    setShowReview(false);
  };

  return (
    <div>
      <Hero />
      <About />
      <Review />
      {/* <KnowledgeTest />
      <Courses />
      <PremiumCourses />
      <Topics />
      <Quiz onReview={handleReviewClick} />
      {showReview && <ReviewResult onClose={handleCloseReview} />}
      <DailyStudy/>
      <ProfilePage/> */}
      <Footer />
    </div>
  );
};

export default Home;
