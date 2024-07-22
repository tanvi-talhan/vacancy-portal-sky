// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex items-center bg-green-950 border rounded-md p-1 w-60">
        <span className="text-green-500 mr-2 text-xl">&#x1F50D;</span> {/* Adjusted size */}
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
          className="p-1 outline-none text-sm w-full bg-transparent text-white" // Adjusted padding and font size
        />
      </div>
    </div>
  );
};

export default SearchBar;
