'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


const Navigation = () => {
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/blotLogoLg.png"
                        height={150}
                        width={42}
                        alt="Blot AI"
                        className="h-10"
                        layout='fixed'
                        style={{ border: 'shadow', borderRadius: '5px' }}
                    />
                </Link>
                <ul className="hidden md:flex lg:flex xl:flex 2xl:flex space-x-6">
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
                            <Link href="/sitepages/wordpress">
                                {/* Styling directly on the link, or use a plain div */}
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">WordPress Development</div>
                            </Link>

                            <Link href="/sitepages/wix">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Wix Development</div>
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
                    <li><Link href="/blog/bloghome" className="hover:underline">Blog</Link></li>
                    <li><Link href="/sitepages/contact" className="hover:underline">Contact</Link></li>
                    {/* ... more links */}
                </ul>

                {/* ... your code for mobile menu */}
                <button
                    className="text-black px-4 py-2 rounded-md hover:bg-opacity-80"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" />
                    </svg>


                </button>

                {/* ... your code for mobile menu */}
            </div>
            {/* Mobile Menu */}
            <div className={`absolute top-16 left-0 w-full bg-gray-800 text-white p-4 block md:hidden lg:hidden xl:hidden 2xl:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>

                <ul className="space-y-4">
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
                            <Link href="/sitepages/wordpress">
                                {/* Styling directly on the link, or use a plain div */}
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">WordPress Development</div>
                            </Link>

                            <Link href="/sitepages/wix">
                                <div className="block px-4 py-2 hover:bg-gray-800 hover:underline">Wix Development</div>
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
                    <li><Link href="/blog/bloghome" className="hover:underline">Blog</Link></li>
                    <li><Link href="/sitepages/contact" className="hover:underline">Contact</Link></li>
                    {/* ... more links */}
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;

