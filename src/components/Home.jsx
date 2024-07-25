// src/components/Home.jsx
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import '../index.css'; 
import Footer from './Footer';

const SearchBar = ({ value, onChange }) => (
  <div className="relative mt-4">
    <div className="flex justify-center">
      <div className="max-w-9xl w-full mx-6 sm:mx-6 md:mx-16 lg:mx-80">
        <div className="flex items-center bg-green-50 border rounded-full p-2">
          <input
            type="text"
            placeholder="search for vacancies..."
            value={value}
            onChange={onChange}
            className="p-1 outline-none text-sm w-full bg-transparent text-green-950"
          />
          <span className="relative right-2 top-3 transform -translate-y-1/2 text-green-500 text-xl">&#x1F50D;</span>
        </div>
      </div>
    </div>
  </div>
);

const Card = ({ jobTitle, jobDescription, jobType, location, salary }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-4">
    <div className="flex flex-col items-center">
      <h2 className="mt-4 text-xl text-center font-bold text-gray-800">{jobTitle}</h2>
      <p className="mt-2 text-gray-600 text-sm">{jobDescription}</p>
      <p className="mt-2 text-gray-600 text-sm"><strong>Type:</strong> {jobType}</p>
      <p className="mt-2 text-gray-600 text-sm"><strong>Location:</strong> {location}</p>
      <p className="mt-2 text-gray-600 text-sm"><strong>Salary:</strong> {salary}</p>
    </div>
  </div>
);

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    const fetchVacancies = async () => {
      const querySnapshot = await getDocs(collection(db, 'vacancies'));
      const fetchedVacancies = querySnapshot.docs.map(doc => doc.data());
      setVacancies(fetchedVacancies);
    };

    fetchVacancies();
  }, []);

  const filteredVacancies = vacancies.filter(vacancy =>
    vacancy.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vacancy.jobDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container mx-auto py-12">
        <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <div className="grid grid-cols-1 mt-8">
          <span className="sticky top-0 ml-4 sm:ml-8 md:ml-24 lg:ml-60 xl:ml-96 bg-blue-200 px-2 py-1 text-lg font-medium text-blue-700 rounded-full text-gradient-my text-shadow-custom animate-pulse">
            new vacancies
          </span>
          {filteredVacancies.map((vacancy, index) => (
            <Card 
              key={index} 
              jobTitle={vacancy.jobTitle} 
              jobDescription={vacancy.jobDescription} 
              jobType={vacancy.jobType}
              location={vacancy.location}
              salary={vacancy.salary} 
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
