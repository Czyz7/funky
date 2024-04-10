'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Navigation = () => {
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/awd.png"
                        width={50}
                        height={75}
                        alt="Accessible Web Designs"
                        className="h-10"
                    />
                </Link>
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link href="/about" className="hover:underline">About</Link>
                    </li>

                    {/* Changes for Services Dropdown */}
                    <li className="relative group">
                        {/* Button-like behavior (if desired) with styling */}
                        <button
                            className="hover:underline"
                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => setIsServicesDropdownOpen(true)}
                        >
                            <Link href="/offer" className="hover:underline">Services</Link>
                        </button>

                        {/* Submenu */}
                        <div
                            className={`absolute top-full left-0 bg-gray-800 shadow-md rounded-md p-2 hidden group-hover:block transition-all ${isServicesDropdownOpen ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Link href="/coding">
                                {/* Styling directly on the link, or use a plain div */}
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Website Design</div>
                            </Link>

                            <Link href="/manage">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Website Management</div>
                            </Link>

                            <Link href="/redesign">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Website Redesign</div>
                            </Link>

                            <Link href="/blogpost">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Blog Posts</div>
                            </Link>

                            <Link href="/seo">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">SEO</div>
                            </Link>
                            <Link href="/accessibility">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Accessibility</div>
                            </Link>
                            <Link href="/consult">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Consulting</div>
                            </Link>

                            {/* ... Add more service links here */}
                        </div>
                    </li>
                    <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
                    <li><Link href="/portfolio" className="hover:underline">Portfolio</Link></li>
                    <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                    {/* ... more links */}
                </ul>

                {/* ... your code for mobile menu */}

                <Link href="/contact" className="block md:hidden">
                    <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-opacity-80">
                        Contact Us
                    </button>
                </Link>

                {/* ... your code for mobile menu */}
            </div>
        </nav>
    );
};

export default Navigation;
