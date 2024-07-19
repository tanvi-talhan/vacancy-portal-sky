// src/components/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="hero-section">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-900 text-center">Hero Section</h2>
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center mb-4">
          <img className="w-48 h-48 rounded-full mb-4" />
          <div className="text-lg font-bold mb-2"></div>
          <div className="text-gray-600"></div>
          <div className="flex justify-between mb-4">
            <div>
              <span className="font-bold">Job Type:</span>
            </div>
            <div>
              <span className="font-bold">Location:</span>
            </div>
            <div>
              <span className="font-bold">Salary:</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;