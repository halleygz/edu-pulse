"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ShowResult = ({ score, onClose, onReview }: { score: number; onClose: () => void; onReview: () => void; }) => {
  // Combine onReview with onClose to close the modal when reviewing answers
  const handleReviewClick = () => {
    onReview();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center bg-custom-green-dark text-white font-bold text-2xl rounded-full">
            {score}
          </div>
          <span className="ml-4 text-2xl font-bold text-custom-green-dark">/10</span>
        </div>
        <p className="text-lg mb-6 text-gray-700">
          {score <= 4 ? 'Keep practicing!' : score <= 7 ? 'Good job!' : 'Excellent work!'}
        </p>
        <div className="flex justify-between">
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-custom-green-dark text-white rounded-md shadow-md hover:bg-custom-green transition-colors duration-300"
          >
            Start Over
          </button>
          <button 
            onClick={handleReviewClick} // Call the new handler function
            className="px-4 py-2 bg-custom-green-dark text-white rounded-md shadow-md hover:bg-custom-green transition-colors duration-300"
          >
            Review Answers
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ShowResult;
