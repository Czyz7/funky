import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroWix = () => {
    return (
        <section className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20" >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="w-full md:w-3/5 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4">PROFESSIONAL WEB DEVELOPMENT WITH CODING</h1>
                        <p className="text-l mb-4">Unlock the power of a custom-coded website that meets your unique business needs. Our team of skilled developers will work closely with you to create a website that is both visually appealing and highly functional.</p>

                        <p className="text-l mb-4">From simple brochure websites to complex e-commerce platforms, we have the expertise to bring your vision to life. We use the latest web development technologies and best practices to ensure that your website is fast, secure, and easy to use.</p>

                        <p className="text-l mb-4">In addition to custom web development, we also offer a range of other services, including website redesigns, WordPress development, and Wix development. No matter what your web development needs are, we have the skills and experience to help you achieve your goals.</p>

                        <div className="flex space-x-4 mt-4">
                            <Link href="/redesign">
                                <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative">Redesign</span>
                                </button>
                            </Link>
                            <Link href="/wordpress">
                                <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative">WordPress</span>
                                </button>
                            </Link>
                            <Link href="/coding">
                                <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative">Coding</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5">
                        <Image src="/laptop.png" alt="Hero image" width={512} height={512} className="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroWix;

