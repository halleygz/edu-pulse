'use client';
import Quiz from '@/components/Home/Quiz/Quiz';
import ReviewResult from '@/components/Home/Quiz/ReviewResult';
import React, { useState } from 'react';

// Define the notes data as an object
const notesData = {
  _id: "66dae49b21973c447b7bfbb7",
  title: "The Cytoskeleton: A Dynamic Framework for Cell Structure and Movement",
  topic: [
    "Cytoskeleton",
    "Microfilaments",
    "Intermediate Filaments",
    "Microtubules",
    "Flagella and Cilia"
  ],
  content:
    "The cytoskeleton is a dynamic network of protein fibers that provides structural support, facilitates cell movement, and plays a crucial role in cell division. It is composed of three main types of fibers: microfilaments, intermediate filaments, and microtubules. Microfilaments, the thinnest fibers, are made of the protein actin and are involved in cell movement, muscle contraction, and maintaining cell shape. Intermediate filaments are strong, fibrous proteins that provide mechanical support and anchor organelles. Microtubules, the thickest fibers, are hollow tubes made of tubulin and function in cell division, providing tracks for vesicle movement, and forming structures like flagella and cilia. Flagella are long, whip-like structures used for cell locomotion, while cilia are shorter, hair-like structures involved in movement or moving substances along the cell surface. The coordinated interplay of these cytoskeletal elements is essential for a wide range of cellular processes."
};

const SinglePlan = () => {
  // Track which instance of the notes to display
  const [currentNote, setCurrentNote] = useState(1); // Default to the first note
  const [view, setView] = useState<'notes' | 'assessment'>('assessment'); // Set 'assessment' as the default view
  const [showReview, setShowReview] = useState(false);

  // Function to handle displaying the assessment
  const handleTakeAssessmentClick = () => {
    setView('assessment');
  };

  // Function to handle showing review results
  const handleReviewClick = () => {
    setShowReview(true);
  };

  // Function to handle closing review results
  const handleCloseReview = () => {
    setShowReview(false);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-20"> {/* Increased margin-top */}
      {/* Buttons to toggle between views */}
      <div className="flex space-x-4 mb-2"> {/* Reduced margin-bottom for buttons */}
        <button
          className={`${
            view === 'assessment'
              ? 'bg-custom-green-dark text-white'
              : 'bg-gray-200 text-custom-green'
          } px-6 py-3 rounded-md hover:bg-green-600`}
          onClick={handleTakeAssessmentClick}
        >
          Take Assessment
        </button>
        <button
          className={`${
            view === 'notes'
              ? 'bg-custom-green-dark text-white'
              : 'bg-gray-200 text-custom-green'
          } px-6 py-3 rounded-md hover:bg-green-600`}
          onClick={() => setView('notes')}
        >
          Read Notes
        </button>
      </div>

      {/* Conditionally render the navigation only in 'notes' view */}
      {view === 'notes' && (
        <div className="flex space-x-4 mb-4">
          <button
            className={`${
              currentNote === 1
                ? 'bg-custom-green-dark text-white'
                : 'bg-gray-200 text-custom-green'
            } px-4 py-2 rounded-md`}
            onClick={() => setCurrentNote(1)}
          >
            Cytoskeleton Overview
          </button>
          <button
            className={`${
              currentNote === 2
                ? 'bg-custom-green-dark text-white'
                : 'bg-gray-200 text-custom-green'
            } px-4 py-2 rounded-md`}
            onClick={() => setCurrentNote(2)}
          >
            Microfilaments
          </button>
          <button
            className={`${
              currentNote === 3
                ? 'bg-custom-green-dark text-white'
                : 'bg-gray-200 text-custom-green'
            } px-4 py-2 rounded-md`}
            onClick={() => setCurrentNote(3)}
          >
            Flagella & Cilia
          </button>
        </div>
      )}

      {/* Conditionally render content based on the view */}
      {view === 'notes' && (
        <div className="p-6 w-full max-w-3xl bg-white rounded-lg shadow-lg shadow-gray-400 mt-4 text-justify"> {/* Enhanced shadow and responsive width */}
          <h2 className="text-2xl font-bold mb-4">{notesData.title}</h2>
          
          {/* Conditionally display content based on the selected note */}
          {currentNote === 1 && (
            <p className="text-gray-700">
              The cytoskeleton is a dynamic network of protein fibers that provides structural support, facilitates cell movement, and plays a crucial role in cell division. It is composed of three main types of fibers: microfilaments, intermediate filaments, and microtubules.
            </p>
          )}
          {currentNote === 2 && (
            <p className="text-gray-700">
              Microfilaments, the thinnest fibers, are made of the protein actin and are involved in cell movement, muscle contraction, and maintaining cell shape. Intermediate filaments are strong, fibrous proteins that provide mechanical support and anchor organelles.
            </p>
          )}
          {currentNote === 3 && (
            <p className="text-gray-700">
              Microtubules, the thickest fibers, are hollow tubes made of tubulin and function in cell division, providing tracks for vesicle movement, and forming structures like flagella and cilia. Flagella are long, whip-like structures used for cell locomotion, while cilia are shorter, hair-like structures involved in movement or moving substances along the cell surface.
            </p>
          )}
        </div>
      )}

      {view === 'assessment' && (
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg shadow-gray-400 mt-2"> {/* Enhanced shadow and responsive width */}
          <div className="p-6"> {/* Padding for quiz */}
            <Quiz onReview={handleReviewClick} questionWidth="w-full max-w-4xl" /> {/* Increased width for question box */}
            {showReview && <ReviewResult onClose={handleCloseReview} />}
          </div>
        </div>
      )}
    </div>
  ); 
};

export default SinglePlan;
