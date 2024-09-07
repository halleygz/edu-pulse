"use client";

import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex justify-center mt-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-md px-4 py-1 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-green focus:border-transparent"
      />
      <button className="ml-2 px-3 py-1 bg-custom-green text-white rounded-md hover:bg-green-600">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
