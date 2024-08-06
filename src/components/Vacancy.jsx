import React, { useState } from 'react';
import image from '../assets/common/bg3.jpg';
import Footer from './Footer';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Vacancy = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    designation: '',
    jobDescription: '',
    jobType: '',
    location: '',
    salary: '',
    hrEmail: '',
    hrContact: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'vacancies'), {
        ...formData,
        timestamp: new Date()
      });
      console.log('Vacancy added:', formData);
      navigate('/nav/home');

      setFormData({
        companyName: '',
        designation: '',
        jobDescription: '',
        jobType: '',
        location: '',
        salary: '',
        hrEmail: '',
        hrContact: ''
      });
    } catch (error) {
      console.error('Error adding vacancy:', error);
    }
  };

  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat bg-opacity-50 py-5"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
      >
        <div className="bg-white p-8 mx-4 sm:mx-8 md:mx-16 rounded-lg shadow-2xl w-full max-w-2xl bg-opacity-60">
          <h1 className="text-2xl font-bold mb-4 uppercase text-center">Add a Vacancy</h1>
          <hr className="mb-4" />
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-black font-medium mb-2" htmlFor="companyName">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black font-medium mb-2" htmlFor="designation">
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-black font-medium mb-2" htmlFor="jobType">
                Job Type
              </label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              >
                <option value="">Select job type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-black font-medium mb-2" htmlFor="jobDescription">
                Job Description
              </label>
              <textarea
                id="jobDescription"
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4 md:flex md:space-x-4">
              <div className="w-full mb-4 md:mb-0">
                <label className="block text-black font-medium mb-2" htmlFor="location">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block text-black font-medium mb-2" htmlFor="salary">
                  Expected Salary
                </label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>
            <div className="mb-4 md:flex md:space-x-4">
              <div className="w-full mb-4 md:mb-0">
                <label className="block text-black font-medium mb-2" htmlFor="hrEmail">
                  HR Email
                </label>
                <input
                  type="email"
                  id="hrEmail"
                  name="hrEmail"
                  value={formData.hrEmail}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="w-full">
                <label className="block black font-medium mb-2" htmlFor="hrContact">
                  HR Contact
                </label>
                <input
                  type="text"
                  id="hrContact"
                  name="hrContact"
                  value={formData.hrContact}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="w-1/2  hover:text-white font-bold py-2 px-4 text-lg rounded-lg border-black text-green-800 bg-transparent hover:bg-green-600"
              >
                Submit
              </button>
              <button
                type="reset"
                className="w-1/2 hover:bg-orange-500 hover:text-white py-2 px-4 font-bold text-lg rounded-lg border border-black text-orange-600 bg-transparent"
                onClick={() => setFormData({
                  designation: '',
                  jobDescription: '',
                  jobType: '',
                  location: '',
                  salary: '',
                })}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Vacancy;
