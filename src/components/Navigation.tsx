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
                            onMouseLeave={() => setIsServicesDropdownOpen(false)}
                        >
                            Services
                        </button>

                        {/* Submenu */}
                        <div
                            className={`absolute top-full left-0 bg-slate-700 bg-opacity-75 shadow-md rounded-md p-2 hidden group-hover:block transition-all ${isServicesDropdownOpen ? 'opacity-100' : 'opacity-100'
                                }`}
                        >
                            <Link href="/services/develop">
                                {/* Styling directly on the link, or use a plain div */}
                                <div className="block px-4 py-2 hover:bg-gray-700">Web Design</div>
                            </Link>

                            <Link href="/services/seo">
                                <div className="block px-4 py-2 hover:bg-gray-700">SEO</div>
                            </Link>

                            <Link href="/services/redesign">
                                <div className="block px-4 py-2 hover:bg-gray-700">Site Redesign</div>
                            </Link>

                            <Link href="/services/manage">
                                <div className="block px-4 py-2 hover:bg-gray-700">Site Management</div>
                            </Link>

                            <Link href="/services/blogpost">
                                <div className="block px-4 py-2 hover:bg-gray-700">Blog Posts</div>
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
