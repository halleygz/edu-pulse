'use client'
import Quiz from '@/components/Home/Quiz/Quiz';
import ReviewResult from '@/components/Home/Quiz/ReviewResult';
import React, { useState } from 'react'

const Assessment = () => {
const [showReview, setShowReview] = useState(false);

  const handleReviewClick = () => {
    setShowReview(true);
  };

  const handleCloseReview = () => {
    setShowReview(false);
  };
  return (
    <div>
        <Quiz onReview={handleReviewClick} />
      {showReview && <ReviewResult onClose={handleCloseReview} />}
    </div>
  )
}

export default Assessment