import React from 'react';
import Link from 'next/link';

const HeroAbout = () => {
    return (
        <section className=" text-black py-20" >
            <div className=" px-5 md:px-10 lg:px-6 py-8 rounded-3xl bg-gray-800 ">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="w-full md:w-3/5 mb-8 md:mb-0">
                            <h1 className="text-4xl text-white font-bold h-48 text-center">Improving the Digital Landscape with AI</h1>

                            <p className="text-lg text-center h-21 text-indigo-50 mb-4">We actively use the power of AI to revolutionize web development and management</p>

                            <p className="text-lg text-center h-21 text-indigo-50 mb-4">Our tools streamline website creation, content generation, site management and SEO.</p>

                            <p className="text-lg text-center h-21 text-indigo-50 mb-4">Experience higher quality results, faster than ever before.</p>

                            <div className="flex space-x-4 mt-20 justify-center">
                                <Link href="/sitepages/offer">
                                    <div className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-bl from-sky-500 to-blue-600 border-0 rounded-full group-hover:w-56 group-hover:h-56"> </span>
                                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                        <span className="relative">Blot AI Solutions
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-2/5">
                            <video autoPlay muted loop className="hero-serve">
                                <source src="/blotAiG0.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroAbout;