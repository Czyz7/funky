'use client';


import React, { useState } from 'react';
import { useForm } from '@formspree/react';

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



    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            service: '', // Set a default service option
            message: '',
        });
    };


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    if (state.succeeded) {
        return <p className="text-5xl font-bold text-sky-600 text-center m-12">Thanks for submitting your message!</p>;

    }

    return (
        <div>
            <form className="bg-gray-100 p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
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
                            <option value="wordpress">Wordpress Website Development</option>
                            <option value="wordpress">Wix Website Development</option>
                            <option value="site-management">Website Management</option>
                            <option value="site-redesign">Website Redesign</option>
                            <option value="blog-posts">Blog Post Generation</option>
                            <option value="site-management">SEO</option>
                            <option value="site-redesign">Digital Accessibility</option>
                            <option value="blog-posts">Blog Post Generation</option>
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
                    <button type="reset" onClick={handleReset} className="bg-red-500 text-black hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-110 rounded-md px-4 hover:bg-red-700 ml-4 ...">
                        Cancel
                    </button>

                </div>

            </form>
        </div>

    );
};

export default ContactForm;
