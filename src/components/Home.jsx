import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import '../index.css';
import Footer from './Footer';
import Bgimage from '../assets/common/bg-img.png';

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

const Card = ({ companyName, designation, jobDescription, jobType, location, salary, hrEmail, hrContact }) => (
  <div className="rounded-lg shadow-2xl p-4 md:p-6 lg:p-8 border bg-white w-full h-full">
    <div className="flex justify-between items-center">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold">MERN-stack Web Developer</h2>
      {/* <span className="text-gray-500 text-sm md:text-base">12h ago</span> */}
    </div>
    <p className="text-gray-600 text-sm md:text-base">Skymentor Technology and Services pvt. ltd.</p>
    <div className="flex items-center mt-2">
      {/* <div className="bg-yellow-400 text-white rounded-full px-2 py-1 text-xs font-bold mr-3">3.5+</div> */}
    </div>
    <div className="flex flex-col md:flex-row items-start md:items-center mt-4">
      <div className="flex items-center mr-6 mb-2 md:mb-0">
        <svg className="w-5 h-5 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 2a4 4 0 00-4 4v2.586a2 2 0 01-.586 1.414l-.707-.707A1 1 0 000 12v2a1 1 0 001 1h3v4a1 1 0 001 1h6a1 1 0 001-1v-4h3a1 1 0 001-1v-2a1 1 0 00-.293-.707l-.707-.707A2 2 0 0116 8.586V6a4 4 0 00-4-4H6z" />
        </svg>
        <span>2-5 Yrs</span>
      </div>
      <div className="flex items-center mr-6 mb-2 md:mb-0">
        <svg className="w-5 h-5 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 2a4 4 0 00-4 4v2.586a2 2 0 01-.586 1.414l-.707-.707A1 1 0 000 12v2a1 1 0 001 1h3v4a1 1 0 001 1h6a1 1 0 001-1v-4h3a1 1 0 001-1v-2a1 1 0 00-.293-.707l-.707-.707A2 2 0 0116 8.586V6a4 4 0 00-4-4H6z" />
        </svg>
        <span>4-9 Lacs P.A.</span>
      </div>
      <div className="flex items-center">
        <svg className="w-5 h-5 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 2a4 4 0 00-4 4v2.586a2 2 0 01-.586 1.414l-.707-.707A1 1 0 000 12v2a1 1 0 001 1h3v4a1 1 0 001 1h6a1 1 0 001-1v-4h3a1 1 0 001-1v-2a1 1 0 00-.293-.707l-.707-.707A2 2 0 0116 8.586V6a4 4 0 00-4-4H6z" />
        </svg>
        <span>{location}</span>
      </div>
    </div>
    {/* <button className="bg-blue-100 text-blue-600 font-bold py-2 px-4 rounded-full mt-4 transition duration-200">Share interest</button> */}
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
    vacancy.jobDescription.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="container py-12 bg-cover bg-no-repeat bg-center max-w-full min-h-screen flex flex-col items-center" style={{ backgroundImage: `url(${Bgimage})` }}>
        <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <div className="flex flex-col items-center mt-8">
          <span className="sticky top-0 bg-blue-200 px-2 py-1 text-lg font-medium text-blue-700 rounded-full text-gradient-my text-shadow-custom animate-pulse">
            new vacancies
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-4xl mt-4">
            {filteredVacancies.map((vacancy, index) => (
              <Card
                key={index}
                companyName={vacancy.companyName}
                designation={vacancy.designation}
                jobDescription={vacancy.jobDescription}
                jobType={vacancy.jobType}
                location={vacancy.location}
                salary={vacancy.salary}
                hrEmail={vacancy.hrEmail}
                hrContact={vacancy.hrContact}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
