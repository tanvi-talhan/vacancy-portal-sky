import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { BiShowAlt } from "react-icons/bi";
import { db } from "../../firebase/firebaseConfig"; // Import Firestore
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions
import Footer from "./Footer";
import Bgimage from '../assets/common/bg-img.png';

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);

  // Fetch data from Firestore on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "candidates"));
        const candidateData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setCandidates(candidateData);
      } catch (error) {
        console.error("Error fetching candidates: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container py-12 bg-cover bg-no-repeat bg-center max-w-full min-h-screen flex flex-col items-center" style={{ backgroundImage: `url(${Bgimage})` }}>
        {/* <div className="container h-screen mx-auto p-4 pt-12 bg-gradient-to-r from-[#DAD3BE] via-[#B7B597] to-[#6B8A7A] max-w-full"> */}
        <div className="shadow-2xl rounded-3xl overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#254336]">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-50 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-50 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-50 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-50 uppercase tracking-wider">Job Location</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-50 uppercase tracking-wider">Salary Exp.</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-50 uppercase tracking-wider">Download CV</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-50 uppercase tracking-wider">Modify</th>
              </tr>
            </thead>
            <tbody className="bg-[#6B8A7A] divide-y divide-[#B7B597]">
              {candidates.map((candidate, index) => (
                <tr key={candidate.id} className={index % 2 === 0 ? 'bg-[#6B8A7A]' : 'bg-[#B7B597]'}>
                  <td className="px-6 py-4 whitespace-nowrap text-green-950 font-medium">{candidate.firstName} {candidate.lastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-950 font-medium">{candidate.specialization}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-950 font-medium">{candidate.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-950 font-medium">{candidate.job_location}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-950 font-medium">{candidate.salaryExpectation}</td>
                  <td className="px-6 py-4 whitespace-nowrap underline text-black font-medium">
                    <a target="_blank" href={candidate.cv} download={`${candidate.firstName}-${candidate.lastName}-Resume.pdf`}>View</a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium text-black cursor-pointer flex text-xl">
                    <FaUserEdit className="hover:text-indigo-900" />&nbsp;&nbsp;
                    <MdDeleteForever className="hover:text-indigo-900" />&nbsp;&nbsp;
                    <BiShowAlt className="hover:text-indigo-900" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CandidateList;
