'use client'
import Quiz from '@/components/Home/Quiz/Quiz';
import ReviewResult from '@/components/Home/Quiz/ReviewResult';
import React, { useState } from 'react'

const SinglePlan = () => {
    const [showReview, setShowReview] = useState(false);

  const handleReviewClick = () => {
    setShowReview(true);
  };

  const handleCloseReview = () => {
    setShowReview(false);
  };
  return (
    <div>
        <button
          className="bg-custom-green text-white px-6 py-3 rounded-md hover:bg-green-600"
        >
          Take Assessment
        </button>
        <button
          className="bg-custom-green text-white px-6 py-3 rounded-md hover:bg-green-600"
        >
          Read Notes
        </button>
<Quiz onReview={handleReviewClick} />
      {showReview && <ReviewResult onClose={handleCloseReview} />}
    </div>
  )
}

export default SinglePlan