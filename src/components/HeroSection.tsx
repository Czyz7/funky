import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20" >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="w-full md:w-3/5 mb-8 md:mb-0">
                        <h1 className="text-4xl font-bold mb-4">PROFESSIONAL WEB DESIGN & GRAPHICS FOR YOUR BUSINESS</h1>
                        <p className="text-l mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="flex space-x-4 mt-4">
                            <Link href="/services">
                                <button className="transition ease-in-out delay-150 text-black px-4 py-2 rounded-md bg-opacity-0 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-110 hover:bg-gradient-to-r from-amber-500 to-pink-500 duration-150">
                                    VIEW OUR SERVICES
                                </button>
                            </Link>
                            <Link href="/faq">
                                <button className="transition ease-in-out delay-150 text-black px-4 py-2 rounded-md bg-opacity-0 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-110 hover:bg-gradient-to-r from-amber-500 to-pink-500 duration-150">
                                    FAQ
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

export default HeroSection;

