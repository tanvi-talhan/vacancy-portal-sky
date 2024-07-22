import React, { useState } from 'react';

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

    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const file = files[0];
        setFormData(prevState => ({
            ...prevState,
            [name]: file
        }));

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-black rounded-lg shadow-lg mt-28">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#ffffff] uppercase">Candidate Detail Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="block">
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#ffffff]">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black bg-[#55e6a5]"
                            required
                        />
                    </div>
                    <div className="block">
                        <label htmlFor="lastName" className="block text-sm font-medium text-[#ffffff]">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black bg-[#55e6a5]"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="block">
                        <label htmlFor="email" className="block text-sm font-medium text-[#ffffff]">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black bg-[#55e6a5]"
                            required
                        />
                    </div>
                    <div className="block">
                        <label htmlFor="contact" className="block text-sm font-medium text-[#ffffff]">Contact</label>
                        <input
                            type="tel"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black bg-[#55e6a5]"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="block">
                        <label className="block text-sm font-medium text-[#ffffff]">Gender</label>
                        <div className="mt-1 flex space-x-4">
                            <label className="flex items-center text-[#55e6a5]">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-[#55e6a5] focus:ring-indigo-500 border-black"
                                    required
                                />
                                <span className="ml-2 text-sm">Male</span>
                            </label>
                            <label className="flex items-center text-[#55e6a5]">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-[#55e6a5] focus:ring-indigo-500 border-black"
                                    required
                                />
                                <span className="ml-2 text-sm">Female</span>
                            </label>
                            <label className="flex items-center text-[#55e6a5]">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    checked={formData.gender === 'other'}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-[#55e6a5] focus:ring-indigo-500 border-black"
                                    required
                                />
                                <span className="ml-2 text-sm">Other</span>
                            </label>
                        </div>
                    </div>
                    <div className="block">
                        <label htmlFor="job_location" className="block text-sm font-medium text-[#ffffff]">Job Location</label>
                        <input
                            type="text"
                            id="job_location"
                            name="job_location"
                            value={formData.job_location}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black bg-[#55e6a5]"
                            required
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="block">
                        <label htmlFor="specialization" className="block text-sm font-medium text-[#ffffff]">Specialization</label>
                        <input
                            type='text'
                            id="specialization"
                            name="specialization"
                            value={formData.specialization}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black bg-[#55e6a5]"
                            required
                        />
                    </div>
                    <div className="block">
                        <label htmlFor="salaryExpectation" className="block text-sm font-medium text-[#ffffff]">Salary Expectation</label>
                        <input
                            type="number"
                            id="salaryExpectation"
                            name="salaryExpectation"
                            value={formData.salaryExpectation}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black bg-[#55e6a5]"
                            required
                        />
                    </div>
                </div>
                <div className="block">
                    <label htmlFor="cv" className="block text-sm font-medium text-[#ffffff]">Upload CV</label>
                    <input
                        type="file"
                        id="cv"
                        name="cv"
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-sm text-[#55e6a5] file:mr-6 file:py-6file:px-6 file:border file:border-[#55e6a5] file:rounded-md file:text-sm file:font-medium file:bg-black hover:file:bg-gray-700"
                        required
                    />
                </div>
                {imagePreview && (
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-[#ffffff]">Image Preview</label>
                        <img src={imagePreview} alt="CV Preview" className="mt-2 rounded-md max-w-md" />
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full bg-[#55e6a5] text-black py-2 px-4 rounded-md shadow-sm hover:bg-[#55e6a5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#55e6a5] font-extrabold"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CandidateForm;
