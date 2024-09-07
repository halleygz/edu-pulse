"use client";

import React, { useState } from 'react';

const chapters = [
  { title: 'Chapter 1', img: 'https://w0.peakpx.com/wallpaper/525/221/HD-wallpaper-biology-3-d-science.jpg' },
  { title: 'Chapter 2', img: 'https://w0.peakpx.com/wallpaper/525/221/HD-wallpaper-biology-3-d-science.jpg' },
  { title: 'Chapter 3', img: 'https://w0.peakpx.com/wallpaper/525/221/HD-wallpaper-biology-3-d-science.jpg' },
  { title: 'Chapter 4', img: 'https://w0.peakpx.com/wallpaper/525/221/HD-wallpaper-biology-3-d-science.jpg' },
  { title: 'Chapter 5', img: 'https://w0.peakpx.com/wallpaper/525/221/HD-wallpaper-biology-3-d-science.jpg' },
  { title: 'Chapter 6', img: 'https://w0.peakpx.com/wallpaper/525/221/HD-wallpaper-biology-3-d-science.jpg' }
];

const Topics: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSelect = (index: number) => {
    if (selectedChapter === index) {
      // Unselect if already selected
      setSelectedChapter(null);
    } else if (selectedChapter !== null && selectedChapter !== index) {
      // Prevent multiple selections
      setError('You can only select one chapter at a time.');
    } else {
      // Select the chapter
      setSelectedChapter(index);
      setError(null); // Clear error
    }
  };

  const handleCloseModal = () => setError(null);

  return (
    <div>
      {/* Background Image and Text Overlay */}
      <div
        className="relative w-full bg-cover bg-center h-[320px] sm:h-[640px]"
        style={{
          backgroundImage: `url('https://media.licdn.com/dms/image/v2/C4D1BAQHg6yM2QSvcyg/company-background_10000/company-background_10000/0/1601919496557/reaction_biology_corporation_cover?e=2147483647&v=beta&t=TkwvlCdoxoqiXLEMUCtY7cvlVmNPQU507xHgbY9dWHg')`
        }}
        aria-label="Biology Background"
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-5xl font-bold mb-2">Biology</h1>
            <p className="text-sm sm:text-lg">
              Discover the intricacies of life through our detailed chapters and assessments.
            </p>
          </div>
        </div>
      </div>

      {/* Chapters Section */}
      <div className="p-4 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {chapters.map((chapter, index) => (
            <div
              key={index}
              className={`flex items-center p-4 border border-gray-300 rounded-md shadow-lg bg-white transition-transform duration-200 ${
                selectedChapter === index ? 'transform scale-105' : ''
              }`}
            >
              <img
                src={chapter.img}
                alt={chapter.title}
                className="w-12 h-12 sm:w-24 sm:h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold">{chapter.title}</h3>
                <button
                  onClick={() => handleSelect(index)}
                  className={`mt-2 px-4 py-2 rounded-md hover:bg-green-600 ${
                    selectedChapter === index ? 'bg-gray-400 cursor-not-allowed' : 'bg-custom-green text-white'
                  }`}
                >
                  {selectedChapter === index ? 'Unselect' : 'Select'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Take Assessment Button */}
        <div className="mt-8 text-center">
          <button
            className="bg-custom-green text-white px-6 py-3 rounded-md hover:bg-green-600"
            disabled={selectedChapter === null}
          >
            Take Assessment
          </button>
        </div>
      </div>

      {/* Error Modal */}
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-75 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <p className="text-center text-lg text-red-600">{error}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 bg-custom-green text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topics;
