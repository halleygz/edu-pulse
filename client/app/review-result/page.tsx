"use client"; // This line marks the file as a Client Component

import React, { Suspense, useState } from 'react';
import ReviewResult from '../../components/Home/Quiz/ReviewResult';

const FallBack: React.FC = () => {
  return (
    <>working/not</>
  )
}

const ReviewResultPage: React.FC = () => {
    const [showReviewResult, setShowReviewResult] = useState(true);

    const handleClose = () => {
        setShowReviewResult(false);
    };

    return (
        <Suspense fallback={<FallBack />}>
            {showReviewResult && <ReviewResult onClose={handleClose} />}
        </Suspense>
    );
};

export default ReviewResultPage;