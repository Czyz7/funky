import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroServe = () => {
    return (
        <section className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20" >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="w-full md:w-3/5 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4">Vegas AI Solutions</h1>

                        <p className="text-l mb-4">Unlock the power of a captivating website and eye-catching graphics that will leave a lasting impression on your customers.</p>

                        <p className="text-l mb-4">Our team of skilled designers will work closely with you to create a digital experience that aligns with your brand identity, drives results, and empowers your business to reach new heights.</p>

                        <p className="text-l mb-4">From sleek and modern websites to vibrant and engaging graphics, we offer a comprehensive suite of services to elevate your business to new heights.</p>

                        <p className="text-l mb-4">Let us help you stand out from the competition and establish a strong online presence that will drive growth and success.</p>

                        <div className="flex space-x-4 mt-4">
                            <Link href="/offer">
                                <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative">Button Text</span>
                                </button>
                            </Link>
                            <Link href="/faq">
                                <button className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
                                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                                    <span className="relative">FAQ</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-2/5">
                        <Image src="/laptop.png" alt="Hero serve" width={512} height={512} className="hero-serve" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroServe;
