// src/components/Home.jsx
import React from 'react';

const Home = ({ vacancies }) => {
  return (
    <div className="hero-section">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-900 text-center">Hero Section</h2>
      <div className="container mx-auto p-4">
        {vacancies.map((vacancy, index) => (
          <div key={index} className="flex flex-col items-center mb-4">
            <img src={vacancy.image} alt={vacancy.jobTitle} className="w-48 h-48 rounded-full mb-4" />
            <div className="text-lg font-bold mb-2">{vacancy.jobTitle}</div>
            <div className="text-gray-600">{vacancy.jobDescription}</div>
            <div className="flex justify-between mb-4">
              <div>
                <span className="font-bold">Job Type:</span> {vacancy.jobType}
              </div>
              <div>
                <span className="font-bold">Location:</span> {vacancy.location}
              </div>
              <div>
                <span className="font-bold">Salary:</span> {vacancy.salary}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;