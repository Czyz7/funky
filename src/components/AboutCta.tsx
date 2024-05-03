import React from 'react';
import Link from 'next/link';


const AboutCta = () => {
    return (

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto justify-center flex flex-wrap mx-automd:px-10 lg:px-6 rounded-3xl bg-gray-800">
                <div className="text-center mb-20">
                    <h1 className=" text-5xl font-medium title-font bg-gray-800 text-indigo-50 mb-4 py-6 border-b custom-border">About Blot AI</h1>
                    <p className=" leading-relaxed xl:w-2/4 lg:w-3/4 text-indigo-50 mx-auto py-6">We‘re a digital solutions company that specializes in AI integration. Our AI-powered tools and expertise help businesses streamline their website development, optimize their online presence, and create engaging content, maximizing their online potential.. </p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-sky-600 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap py-6 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-50 text-sky-600 mb-5 flex-shrink-0">
                            <svg className="w-12 h-12 text-gray-800 dark:text-sky-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm16 7H4v7h16v-7ZM5 8a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1Zm4-1a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2H9Zm2 1a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
                            </svg>


                        </div>
                        <div className="flex-grow py-2">
                            <h2 className="text-indigo-50 text-lg title-font font-medium mb-3">WordPress Development</h2>
                            <p className="leading-relaxed text-indigo-50">We harness the power of AI to analyze user behavior and industry trends, crafting WordPress websites that are visually stunning, expertly optimized for conversions, and adaptable as your business grows.</p>
                            <Link
                                href="/sitepages/wordpress"
                                className="mt-3 text-sky-600 inline-flex items-center relative justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-sky-600 rounded-full hover:bg-gray-800 group">
                                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                                <span className="relative w-full text-left text-indigo-50 transition-colors duration-200 ease-in-out group-hover:text-indigo-50">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-sky-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-50 text-sky-600 mb-5 flex-shrink-0">
                            <svg className="w-12 h-12 text-gray-800 dark:text-sky-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207" />
                            </svg>

                        </div>
                        <div className="flex-grow py-1">
                            <h2 className="text-indigo-50 text-lg title-font font-medium mb-3">SEO Services</h2>
                            <p className="leading-relaxed text-indigo-50">Our AI-powered analysis uncovers hidden SEO opportunities, pinpoints the most effective keywords, and optimizes your content strategy for maximum visibility.  Get ahead of the competition and dominate search results with our cutting-edge approach.</p>
                            <Link
                                href="/sitepages/seo"
                                className="mt-3 text-sky-600 inline-flex items-center relative justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-sky-600 rounded-full hover:bg-gray-800 group">
                                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                                <span className="relative w-full text-left text-indigo-50 transition-colors duration-200 ease-in-out group-hover:text-indigo-50">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-sky-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-50 text-sky-600 mb-5 flex-shrink-0">
                            <svg className="w-12 h-12 text-indigo-50 dark:text-sky-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11.5c.07 0 .14-.007.207-.021.095.014.193.021.293.021h2a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2v11h-2V5a2 2 0 0 0-2-2H5Zm7 4a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2H13a1 1 0 0 1-1-1Zm-6 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1Zm0 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H7Zm1 3V8h1v1H8Z" clip-rule="evenodd" />
                            </svg>

                        </div>
                        <div className="flex-grow">
                            <h2 className="text-indigo-50 text-lg title-font font-medium mb-3">Blog Post Generation</h2>
                            <p className="leading-relaxed text-indigo-50">Our AI tools generate unique, high-quality blog posts aligned with your brand voice and target audience. We refine and optimize the content with our SEO expertise, ensuring your blog attracts readers and boosts your search engine rankings.</p>
                            <Link
                                href="/sitepages/blogpost"
                                className="mt-3 text-sky-600 inline-flex items-center relative justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-sky-600 rounded-full hover:bg-gray-800 group">
                                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
                                <span className="relative w-full text-left text-indigo-50 transition-colors duration-200 ease-in-out group-hover:text-indigo-50">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-sky-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center flex-wrap pb-4 mb-4 py-24 justify-center border-gray-100 mt-24 w-full">
                    <Link href="/sitepages/offer" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-gradient-to-bl from-sky-500 to-blue-600 border-0 opacity-100 group-hover:-translate-x-8"></span>
                        <span className="relative w-full text-left text-white  transition-colors duration-200 ease-in-out group-hover:text-indigo-50 ">Other Services</span>
                        <span className="absolute inset-0 border-2 border-indigo-50 rounded-full"></span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutCta;