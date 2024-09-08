"use client";

import React, { useState } from 'react';

const subjectData = {
  subject: "Biology",
  chapters: [
    {
      chapter: "Cell Structure",
      topics: [
        { name: "Introduction to Cells" },
        {
          name: "Prokaryotic Cells",
          subtopics: ["Components of Prokaryotic Cells", "Cell Size"]
        },
        {
          name: "Eukaryotic Cells",
          subtopics: [
            "The Plasma Membrane",
            "The Cytoplasm",
            "The Nucleus",
            "The Nuclear Envelope",
            "Chromatin and Chromosomes",
            "The Nucleolus",
            "Ribosomes",
            "Mitochondria",
            "Peroxisomes",
            "Vesicles and Vacuoles",
            "Animal Cells versus Plant Cells",
            "The Centrosome",
            "Lysosomes",
            "The Cell Wall",
            "Chloroplasts",
            "The Central Vacuole"
          ]
        },
        {
          name: "The Endomembrane System and Proteins",
          subtopics: [
            "The Endoplasmic Reticulum",
            "Rough ER",
            "Smooth ER",
            "The Golgi Apparatus",
            "Lysosomes"
          ]
        },
        { name: "Cytoskeleton" },
        { name: "Microfilaments" },
        { name: "Intermediate Filaments" },
        { name: "Microtubules" },
        { name: "Flagella and Cilia" },
        {
          name: "Connections Between Cells and Cellular Activities",
          subtopics: [
            "Extracellular Matrix of Animal Cells",
            "Intercellular Junctions",
            "Plasmodesmata",
            "Tight Junctions",
            "Desmosomes",
            "Gap Junctions"
          ]
        }
      ]
    },
    {
      chapter: "Genetics",
      topics: []
    },
    {
      chapter: "Evolution",
      topics: []
    },
    {
      chapter: "Ecology",
      topics: []
    },
    {
      chapter: "Physiology",
      topics: []
    },
    {
      chapter: "Biochemistry",
      topics: []
    }
  ]
};

const Topics: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSelectChapter = (index: number) => {
    setSelectedChapter(index);
    setSelectedTopic(null);
    setError(null);
  };

  const handleUnselectChapter = () => {
    setSelectedChapter(null);
    setSelectedTopic(null);
    setError(null);
  };

  const handleSelectTopic = (topic: string) => {
    if (selectedTopic === topic) {
      setSelectedTopic(null);
    } else {
      setSelectedTopic(topic);
      setError(null);
    }
  };

  const handleCloseModal = () => setError(null);

  return (
    <div className="p-4 sm:p-8">
      {/* Background Image and Text Overlay */}
      <div
        className="relative w-full bg-cover bg-center h-[320px] sm:h-[640px]"
        style={{
          backgroundImage: 'url("https://media.licdn.com/dms/image/v2/C4D1BAQHg6yM2QSvcyg/company-background_10000/company-background_10000/0/1601919496557/reaction_biology_corporation_cover?e=2147483647&v=beta&t=TkwvlCdoxoqiXLEMUCtY7cvlVmNPQU507xHgbY9dWHg")'
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

      {/* Chapter Navigation */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Chapter Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {subjectData.chapters.map((chapter, index) => (
            <div
              key={index}
              className={`flex items-center p-4 border border-gray-300 rounded-md shadow-lg bg-white transition-transform duration-200 ${
                selectedChapter === index ? 'transform scale-105' : ''
              }`}
            >
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold">{`Chapter ${index + 1}: ${chapter.chapter}`}</h3>
                <button
                  onClick={() => handleSelectChapter(index)}
                  className={`mt-2 px-4 py-2 rounded-md hover:bg-green-600 ${
                    selectedChapter === index ? 'bg-gray-400 cursor-not-allowed' : 'bg-custom-green text-white'
                  }`}
                >
                  {selectedChapter === index ? 'Selected' : 'Select'}
                </button>
                {selectedChapter === index && (
                  <button
                    onClick={handleUnselectChapter}
                    className="mt-2 ml-4 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                  >
                    Unselect
                  </button>
                )}
              </div>
              <div className="ml-4">
                <img
                  src={
                    index === 0
                      ? "https://upload.wikimedia.org/wikipedia/commons/3/3f/Plant_cell_structure_svg_labels.svg"
                      : "https://img.freepik.com/premium-vector/coming-soon-sign-opening-announce-banner-new-arrival-promo-vector-green-signage-coming-soon-sign-construction-website-maintenance-promo-advertising_186921-178.jpg"
                  }
                  alt="Chapter Image"
                  className="h-24 w-24 object-cover rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Take Assessment Button */}
      <div className="mt-8 text-center">
        <button
          className="bg-custom-green text-white px-6 py-3 rounded-md hover:bg-green-600"
        >
          Take Assessment
        </button>
      </div>

      {/* Selected Chapter Details */}
      {selectedChapter !== null && (
        <div className="flex flex-col sm:flex-row mt-8 bg-white p-4 rounded-md shadow-lg">
          {/* Left Div */}
          <div className="w-full sm:w-1/3 bg-custom-green-dark p-4 text-white rounded-md">
            <h3 className="text-2xl font-semibold mb-4">
              {subjectData.chapters[selectedChapter].chapter}
            </h3>
            <ul className="list-none">
              {subjectData.chapters[selectedChapter].topics.map((topic, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 rounded-md mb-2 ${
                    selectedTopic === topic.name ? 'bg-green-500' : 'hover:bg-green-400'
                  }`}
                  onClick={() => handleSelectTopic(topic.name)}
                >
                  {topic.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Div */}
          <div className="w-full sm:w-2/3 bg-gray-100 p-4 rounded-md ml-0 sm:ml-4">
            <h3 className="text-xl font-semibold mb-4">Selected Topic</h3>
            {selectedTopic ? (
              <ul className="list-disc pl-4">
                <li className="mt-2">{selectedTopic}</li>
              </ul>
            ) : (
              <p className="text-gray-600">No topic selected.</p>
            )}
          </div>
        </div>
      )}

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
