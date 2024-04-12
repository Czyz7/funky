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
                        <Link href="/sitepages/about" className="hover:underline">About</Link>
                    </li>

                    {/* Changes for Services Dropdown */}
                    <li className="relative group">
                        {/* Button-like behavior (if desired) with styling */}
                        <button
                            className="hover:underline"
                            onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            onMouseLeave={() => setIsServicesDropdownOpen(true)}
                        >
                            <Link href="/sitepages/offer" className="hover:underline">Services</Link>
                        </button>

                        {/* Submenu */}
                        <div
                            className={`absolute top-full left-0 bg-gray-800 shadow-md rounded-md p-2 hidden group-hover:block transition-all ${isServicesDropdownOpen ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <Link href="/sitepages/coding">
                                {/* Styling directly on the link, or use a plain div */}
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Website Design</div>
                            </Link>

                            <Link href="/sitepages/manage">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Website Management</div>
                            </Link>

                            <Link href="/sitepages/redesign">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Website Redesign</div>
                            </Link>

                            <Link href="/sitepages/blogpost">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Blog Posts</div>
                            </Link>

                            <Link href="/sitepages/seo">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">SEO</div>
                            </Link>
                            <Link href="/sitepages/accessibility">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Accessibility</div>
                            </Link>
                            <Link href="/sitepages/consult">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Consulting</div>
                            </Link>

                            {/* ... Add more service links here */}
                        </div>
                    </li>
                    <li><Link href="/sitepages/pricing" className="hover:underline">Pricing</Link></li>
                    <li><Link href="/sitepages/portfolio" className="hover:underline">Portfolio</Link></li>
                    <li><Link href="/sitepages/contact" className="hover:underline">Contact</Link></li>
                    {/* ... more links */}
                </ul>

                {/* ... your code for mobile menu */}

                <Link href="/sitepages/contact" className="block md:hidden">
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
