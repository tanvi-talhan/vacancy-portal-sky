import React from 'react'
import { useState } from 'react'; // Add this import at the top
import { GrFormView, GrFormViewHide } from "react-icons/gr";
import logo from "../assets/common/logo.png"

const Register = () => {
    const [showPassword, setShowPassword] = useState(false); // Add this state
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src={logo}
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-green-950">
                        Register to new account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Enter username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    required
                                    autoComplete="username"
                                    className="block w-full rounded-md p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    New Password
                                </label>
                            </div>
                            <div className="mt-2 relative"> {/* Add relative positioning */}
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"} // Toggle password visibility
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md p-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 border border-gray-300  sm:text-sm sm:leading-6"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)} // Toggle function
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    {showPassword ? (
                                        <GrFormView />
                                    ) : (
                                        <GrFormViewHide />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2 relative"> {/* Add relative positioning */}
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"} // Toggle password visibility
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md p-2 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-00 border border-gray-300 sm:text-sm sm:leading-6"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)} // Toggle function
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    {showPassword ? (
                                        <GrFormView />
                                    ) : (
                                        <GrFormViewHide />
                                    )}
                                </button>
                            </div>
                        </div>



                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-50 hover:text-green-600 hover:border hover:border-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already Registered?&nbsp;
                        <a href="#" className="font-semibold leading-6 text-green-600 hover:text-green-500">
                            Login!
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register
