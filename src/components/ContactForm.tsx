'use client';


import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Bounce, ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'; // Include the CSS



interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    service: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [state, handleSubmit] = useForm("mvoevrvq");

    const [formData, setFormData] = useState<ContactFormData>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        service: '', // Set a default service option
        message: '',
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    // ... your existing code

    if (state.succeeded) {
        toast.success(' 😎 Your message has been sent!', {
            position: "top-center",
            autoClose: 4500, // adjust close time as needed
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    // ... rest of your code


    return (
        <div>
            <ToastContainer /> {/* Place the ToastContainer here */}

            <form className="bg-gray-100 p-6 rounded-lg shadow-md" >
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="firstName" className="block text-gray-700 mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="border border-gray-400 text-black p-2 w-full rounded-md focus:outline-none "
                            required
                            placeholder="First Name"
                        />

                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-gray-700 mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="border border-gray-400 text-black p-2 w-full rounded-md focus:outline-none "
                            required
                            placeholder="Last Name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-400 text-black p-2 w-full rounded-md focus:outline-none "
                            required
                            placeholder="Email Address"
                        />
                    </div>

                    <div>
                        <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="border border-gray-400 text-black p-2 w-full rounded-md focus:outline-none "
                            required
                            placeholder="Phone Number"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="service" className="block text-gray-700 mb-2">
                            Service
                        </label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="border border-gray-400 text-black p-2 w-full rounded-md focus:outline-none "
                            required
                        >
                            <option value="">Select a service</option>
                            <option value="web-design">Web Design</option>
                            <option value="build-a-website">Build a Website</option>
                            <option value="wix">Wix</option>
                            <option value="wordpress">Wordpress</option>
                            <option value="site-management">Site Management</option>
                            <option value="site-redesign">Site Redesign</option>
                            <option value="blog-posts">Blog Posts</option>
                            {/* ... Add more options */}
                        </select>
                    </div>


                    <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="border border-gray-400 text-black p-8 w-full rounded-md focus:outline-none "
                            required
                        />

                    </div>
                </div>

                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 text-black rounded-md px-4 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-110 hover:bg-blue-600 ml-4 ...">
                        Submit
                    </button>
                    <button type="reset" className="bg-red-500 text-black hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-110 rounded-md px-4 hover:bg-red-700 ml-4 ...">
                        Cancel
                    </button>

                </div>

            </form>
        </div>

    );
};

export default ContactForm;
