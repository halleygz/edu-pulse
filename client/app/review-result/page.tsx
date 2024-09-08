"use client"; // Add this line to mark this file as a Client Component

import React, { useState } from 'react';
import ReviewResult from '../../components/Home/Quiz/ReviewResult';

const ReviewResultPage: React.FC = () => {
    const [showReviewResult, setShowReviewResult] = useState(true);

    const handleClose = () => {
        setShowReviewResult(false);
    };

    return (
        <>
            {showReviewResult && <ReviewResult onClose={handleClose} />}
        </>
    );
};

export default ReviewResultPage;
