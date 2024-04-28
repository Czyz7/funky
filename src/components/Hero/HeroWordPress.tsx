import React from 'react';
import Image from 'next/image';

const HeroWordPress = () => {
    return (
        <section className=" text-black py-20" >
            <div className=" px-5 md:px-10 lg:px-6 py-8 rounded-3xl bg-gray-800 ">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="w-full md:w-3/5 mb-8 md:mb-0">
                            <h1 className="text-3xl text-white font-bold h-48 text-center">Your Ideal WordPress Solution. Realized Faster</h1>

                            <p className="text-l text-center h-6 text-indigo-50 mb-4">AI streamlines the development process.</p>

                            <p className="text-l text-center h-6 text-indigo-50 mb-4">Allowing us to focus on expertly crafting custom WordPress websites.</p>

                            <p className="text-l text-center h-28 text-indigo-50 mb-4">Exceeding expectations in both quality and speed.</p>

                            <div className="flex space-x-4 mt-20 justify-center">
                                <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-bl from-sky-500 to-blue-600 border-0 rounded-full group-hover:w-56 group-hover:h-56"> </span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative">AI Solutions
                                    </span>
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.119 8h9.762a1 1 0 0 1 .772 1.636l-4.881 5.927a1 1 0 0 1-1.544 0l-4.88-5.927A1 1 0 0 1 7.118 8Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-2/5">
                            <Image src="/Hero Images/services0.png" alt="Hero serve" width={512} height={512} className="hero-serve" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroWordPress;

