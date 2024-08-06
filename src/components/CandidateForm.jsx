import React, { useState } from 'react';
import Footer from "./Footer";
import Bgimage from '../assets/common/bg3.jpg';

const CandidateForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        gender: '',
        job_location: '',
        specialization: '',
        salaryExpectation: '',
        cv: null
    });

    const [fileName, setFileName] = useState('');
    const [imagePreviewURL, setImagePreviewURL] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prevState => ({
                ...prevState,
                cv: file
            }));

            setFileName(file.name);

            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewURL(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Handle form submission logic
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${Bgimage})` }}>
                <div className="w-full max-w-3xl  rounded-lg shadow-lg p-6 bg-white bg-opacity-60">
                    <h2 className="text-2xl font-bold mb-2 text-center text-black uppercase">Candidate Detail Form</h2>
                    <hr />
                    <form onSubmit={handleSubmit} className="space-y-4 mt-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="block">
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black  "
                                    required
                                />
                            </div>
                            <div className="block">
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black  "
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="block">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black  "
                                    required
                                />
                            </div>
                            <div className="block">
                                <label htmlFor="contact" className="block text-sm font-medium text-gray-600">Contact</label>
                                <input
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black  "
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="block">
                                <label className="block text-sm font-medium text-gray-600">Gender</label>
                                <div className="mt-1 flex space-x-4">
                                    <label className="flex items-center text-gray-600">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="male"
                                            checked={formData.gender === 'male'}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-gray-600 focus:ring-indigo-500 border-black"
                                            required
                                        />
                                        <span className="ml-2 text-sm">Male</span>
                                    </label>
                                    <label className="flex items-center text-gray-600">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="female"
                                            checked={formData.gender === 'female'}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-gray-600 focus:ring-indigo-500 border-black"
                                            required
                                        />
                                        <span className="ml-2 text-sm">Female</span>
                                    </label>
                                    <label className="flex items-center text-gray-600">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value="other"
                                            checked={formData.gender === 'other'}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-gray-600 focus:ring-indigo-500 border-black"
                                            required
                                        />
                                        <span className="ml-2 text-sm">Other</span>
                                    </label>
                                </div>
                            </div>
                            <div className="block">
                                <label htmlFor="job_location" className="block text-sm font-medium text-gray-600">Job Location</label>
                                <input
                                    type="text"
                                    id="job_location"
                                    name="job_location"
                                    value={formData.job_location}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black  "
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                            <div className="block">
                                <label htmlFor="specialization" className="block text-sm font-medium text-gray-600">Specialization</label>
                                <input
                                    type="text"
                                    id="specialization"
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black  "
                                    required
                                />
                            </div>
                            <div className="block mb-3">
                                <label htmlFor="salaryExpectation" className="block text-sm font-medium text-gray-600">Salary Expectation</label>
                                <input
                                    type="number"
                                    id="salaryExpectation"
                                    name="salaryExpectation"
                                    value={formData.salaryExpectation}
                                    onChange={handleChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black  "
                                    required
                                />
                            </div>
                        </div>
                        <label htmlFor="image-upload" className='text-gray-600 font-medium'>Upload your Resume</label>
                        <div className="flex justify-center items-center border-dashed border-2 border-gray-500 rounded p-4 text-center cursor-pointer mb-4 mt-2">
                            <label htmlFor="file-upload" className="text-blue-500">
                                <input
                                    id="file-upload"
                                    onChange={handleImageChange}
                                    type="file"
                                    className="hidden"
                                    required
                                />
                                {imagePreviewURL ? (
                                    <img src={imagePreviewURL} alt="Preview" className="w-auto h-20" />
                                ) : (
                                    fileName || "Add file or drop files here"
                                )}
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full border text-black border-black py-2 px-4 rounded-md shadow-sm text-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#55e6a5] font-extrabold"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CandidateForm;
