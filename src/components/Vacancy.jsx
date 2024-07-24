import React, { useState } from 'react';
import image from '../assets/vacancy-bg.png';
import Footer from './Footer';

const Vacancy = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    jobType: '',
    location: '',
    salary: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', formData);
    // Also handle image upload logic if needed
  };

  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-no-repeat opacity-85"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
      >
        <div className="bg-white p-8 mx-4 sm:mx-8 md:mx-16 rounded-lg shadow-md w-full max-w-2xl">
          <h1 className="text-2xl font-bold mb-4 uppercase text-center">Add a Vacancy</h1>
          <hr className="mb-4" />
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="jobTitle">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="jobType">
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
              <label className="block text-gray-700 font-medium mb-2" htmlFor="jobDescription">
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
                <label className="block text-gray-700 font-medium mb-2" htmlFor="location">
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
                <label className="block text-gray-700 font-medium mb-2" htmlFor="salary">
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

            {/* Image upload section commented out as per your original code
            <label htmlFor="image-upload" className='text-gray-700 font-medium'>Upload Image</label>
            <div className="flex justify-center items-center border-dashed border-2 border-gray-300 rounded p-4 text-center cursor-pointer mb-4 mt-2">
              <label htmlFor="file-upload" className="text-blue-500">
                <input
                  id="file-upload"
                  onChange={handleImageChange}
                  type="file"
                  className="hidden"
                  required
                />
                {imagePreviewURL ? (
                  <img src={imagePreviewURL} alt="Group" className="w-auto h-20" />
                ) : (
                  fileName || "Add file or drop files here"
                )}
              </label>
            </div> */}

            <div className="flex gap-3">
              <button
                type="submit"
                className="w-1/2 bg-green-500 text-white font-bold py-2 px-4 rounded-lg border hover:border-green-800 hover:text-green-600 hover:bg-transparent"
              >
                Submit
              </button>
              <button
                type="reset"
                className="w-1/2 bg-blue-500 text-white py-2 px-4 font-bold rounded-lg border hover:border-blue-800 hover:text-blue-600 hover:bg-transparent"
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
