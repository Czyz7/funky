import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogBlock = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto flex flex-wrap grid-cols-2 gap-8" >
                <div className="p-12 flex flex-col bg-gray-800 rounded-3xl items-start mx-auto ">
                    <span className="inline-block py-1 px-2 rounded bg-gradient-to-bl from-sky-500 to-blue-600 border-0 text-indigo-50 text-xs font-medium tracking-widest">Wix</span>
                    <h2 className="sm:text-3xl text-2xl title-font font-medium text-indigo-50 mt-4 mb-4">Wix: AI Pioneer in Website Building (Almost)</h2>
                    <p className="leading-relaxed text-indigo-50 mb-8">
                        Okay, I‘m a fan of Wix. They‘ve made serious moves to bring AI into the website creation game, and for a lot of folks, that‘s amazing. But let‘s be real – even with those fancy AI tools, sometimes you want a website with a more... &#x22;you&#x22; feel. Wix gets that, and it&lsquo;s why they‘re killing it, especially in a place like Las Vegas, where standing out in Google is no joke.
                    </p>
                    <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                        <Link href="/blog/may0124" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-gradient-to-bl from-sky-500 to-blue-600 border-0 opacity-100 group-hover:-translate-x-8"></span>
                            <span className="relative w-full text-left text-white  transition-colors duration-200 ease-in-out group-hover:text-indigo-50 ">
                                <svg className="w-6 h-6 text-gray-800 dark:text-indigo-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                                </svg>
                            </span>
                            <span className="absolute inset-0 border-2 border-indigo-50 rounded-full"></span>
                        </Link>
                        {/*  
                        <span className="text-indigo-50 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span className="text-indigo-50 inline-flex items-center leading-none text-sm">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span> */}
                    </div>
                    <Link href="https://www.linkedin.com/in/czyz3/" className="inline-flex items-center">
                        <Image alt="blog" src="/laptop.png" width={100} height={100} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center hover:scale-110" />
                        <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-indigo-50">Czyz Hernandez</span>
                            <span className="text-indigo-50 text-xs tracking-widest mt-0.5">AI ENGINEER | FULL STACK DEVELOPER</span>
                        </span>
                    </Link>
                </div>
                <div className="p-12 flex flex-col bg-gray-800 rounded-3xl items-start mx-auto ">
                    <span className="inline-block py-1 px-2 rounded bg-gradient-to-bl from-sky-500 to-blue-600 border-0 text-indigo-50 text-xs font-medium tracking-widest">AI Tips</span>
                    <h2 className="sm:text-3xl text-2xl title-font font-medium text-indigo-50 mt-4 mb-4">Stop the Busywork, Boost Your Business: How AI Can Be Your Secret Weapon</h2>
                    <p className="leading-relaxed text-indigo-50 mb-8">
                        Overwhelmed again by the daily grind? Does your never-ending to-do list mysteriously keep getting longer? Well, fret no more! Artificial intelligence (AI) isn&lsquo;t some futuristic fantasy anymore; it&lsquo;s here to become your silent business partner, helping you work smarter, not harder.</p>
                    <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                        <Link href="/blog/may1024" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-gradient-to-bl from-sky-500 to-blue-600 border-0 opacity-100 group-hover:-translate-x-8"></span>
                            <span className="relative w-full text-left text-white  transition-colors duration-200 ease-in-out group-hover:text-indigo-50 ">
                                <svg className="w-6 h-6 text-gray-800 dark:text-indigo-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                                </svg>
                            </span>
                            <span className="absolute inset-0 border-2 border-indigo-50 rounded-full"></span>
                        </Link>
                        {/*  
                        <span className="text-indigo-50 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>1.2K
                        </span>
                        <span className="text-indigo-50 inline-flex items-center leading-none text-sm">
                            <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>6
                        </span> */}
                    </div>
                    <Link href="https://www.linkedin.com/in/czyz3/" className="inline-flex items-center">
                        <Image alt="blog" src="/laptop.png" width={100} height={100} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center hover:scale-110" />
                        <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-indigo-50">Czyz Hernandez</span>
                            <span className="text-indigo-50 text-xs tracking-widest mt-0.5">AI ENGINEER | FULL STACK DEVELOPER</span>
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogBlock;

