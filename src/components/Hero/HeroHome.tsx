import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className=" text-black py-20" >
            <div className=" px-5 md:px-10 lg:px-6 py-8 rounded-3xl bg-gray-800 ">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="w-full md:w-3/5 mb-8 md:mb-0">
                            <h1 className="text-4xl text-white font-bold h-48 text-center">Transform Your Web Presence. Effortlessly.</h1>

                            <p className="text-lg text-center h-6 text-indigo-50 mb-4">We harness the power of AI to understand your vision and deliver results that exceed expectations</p>

                            <p className="text-lg text-center h-6 text-indigo-50 mb-4">Our AI-powered tools streamline website development, content creation, and optimization.</p>

                            <p className="text-lg text-center h-28 text-indigo-50 mb-4">Free your time for focusing on your business and lay the foundation for continuous growth and success online.</p>

                            <div className="flex space-x-4 mt-20 justify-center">
                                <Link href="/sitepages/offer">
                                    <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-bl from-sky-500 to-blue-600 border-0 rounded-full group-hover:w-56 group-hover:h-56"> </span>
                                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                        <span className="relative">Blot AI Solutions
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-2/5">
                            <video autoPlay muted loop className="hero-serve">
                                <source src="/blotAiG.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
