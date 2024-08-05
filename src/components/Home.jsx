import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import '../index.css';
import Footer from './Footer';
import bgimg from '../assets/common/bg2.jpg'
import { PiBuildingApartmentFill, PiCurrencyInrDuotone } from "react-icons/pi";
import { RiHandbagLine } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { MdScreenSearchDesktop, MdContactMail, MdContactPhone } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";


const SearchBar = ({ value, onChange }) => (
  <div className="relative mt-4">
    <div className="flex justify-center">
      <div className="max-w-12xl w-full mx-6 sm:mx-6 md:mx-16 lg:mx-80">
        <div className="flex items-center bg-green-100 border rounded-full p-2">
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
  <div className="rounded-lg shadow-2xl p-4 md:p-6 lg:p-8 border bg-green-100 w-full h-full bg-opacity-90 ">
    <div className="flex justify-end items-center">
      <a title='Edit'><CiEdit className='text-3xl text-green-600' /></a>&nbsp;
      <a title='Delete'><TiDelete className='text-3xl text-red-600' /></a>
    </div>
    <div className="flex justify-between items-center">
      <h2 className="flex text-lg md:text-xl lg:text-2xl font-bold">
        MERN-stack Web Developer</h2>
      {/* <span className="text-gray-500 text-sm md:text-base">12h ago</span> */}
    </div>
    <p className="text-gray-600 text-sm md:text-base flex"><PiBuildingApartmentFill className='mt-1 text-gray-600' />&nbsp;
      Skymentor Technology and Services pvt. ltd.</p>
    <p className="text-gray-800 md:text-base flex">&nbsp;
      <span className='text-sm'>Well organized and easy to understand Web building tutorials with lots of examples of how to use HTML, CSS, JavaScript, SQL, Python, PHP, Bootstrap, Java</span></p>
    <div className=" items-center my-2">
      <div className="flex items-center">
        <MdContactPhone />&nbsp;
        <span>HR Contact</span>
      </div>
      <div className="flex items-center">
        <MdContactMail />&nbsp;
        <span>bhiughhjl@gmail.com</span>
      </div>
      {/* <div className="bg-yellow-400 text-white rounded-full px-2 py-1 text-xs font-bold mr-3">3.5+</div> */}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2  ">
      <div className="flex items-center">
        <RiHandbagLine />
        <span className="ml-2">2-5 Yrs</span>
      </div>
      <div className="flex items-center">
        <MdScreenSearchDesktop />&nbsp;
        <span>Job Type</span>
      </div>

      <div className="flex items-center">
        <PiCurrencyInrDuotone />
        <span className="ml-2">{salary} P.A.</span>
      </div>
      <div className="flex items-center">
        <IoLocation />
        <span className="ml-2">{location}</span>
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
      <div className="container py-12 bg-cover bg-no-repeat bg-center max-w-full min-h-screen flex flex-col items-center" style={{ backgroundImage: `url(${bgimg})` }}>
        <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <div className="flex flex-col items-center mt-8">
          <span className="sticky top-0 bg-green-200 px-2 py-1 text-3xl font-medium text-green-500 rounded-full text-gradient-my text-shadow-custom animate-pulse">
            New Vacancies
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full max-w-5xl mt-4 px-4">
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
