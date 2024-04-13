import HeroBlog from '@/components/Hero/HeroBlog';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';



const BlogHome = () => {
    return (
        <>
            <Head>
                <title>About Us | Vegas AI Solutions</title>
                <meta name="description" content="Learn more about Accessible Web Designs and our mission to make the web accessible to everyone." />
            </Head>
            <Navigation />
            <Block />
            <HeroBlog />
            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-12 mx-auto ">
                            <div className="p-12 md:w-1/2 flex flex-col bg-gray-800 rounded-3xl items-start mx-auto">
                                <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
                                <h2 className="sm:text-3xl text-2xl title-font font-medium text-indigo-50 mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
                                <p className="leading-relaxed text-indigo-50 mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90/s, slow-carb etsy tumeric.</p>
                                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                    <Link href="/blog/april1224" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Button Text</span>
                                        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                                    </Link>
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
                                    </span>
                                </div>
                                <a className="inline-flex items-center">
                                    <Image alt="blog" src="/laptop.png" width={100} height={100} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-indigo-50">Holden Caulfield</span>
                                        <span className="text-indigo-50 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                                    </span>
                                </a>
                            </div>
                            <div className="p-12 md:w-1/2 flex flex-col bg-gray-800 rounded-3xl items-start mx-auto">
                                <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">CATEGORY</span>
                                <h2 className="sm:text-3xl text-2xl title-font font-medium text-indigo-50 mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
                                <p className="leading-relaxed text-indigo-50 mb-8">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. VHS man braid palo santo hoodie brunch trust fund. Bitters hashtag waistcoat fashion axe chia unicorn. Plaid fixie chambray 90/s, slow-carb etsy tumeric.</p>
                                <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                                    <Link href="/blog/april1224" className="relative items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                                        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Button Text</span>
                                        <span className="absolute inset-0 border-2 border-white rounded-full"></span>
                                    </Link>
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
                                    </span>
                                </div>
                                <a className="inline-flex items-center">
                                    <Image alt="blog" src="/laptop.png" width={100} height={100} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-indigo-50">Holden Caulfield</span>
                                        <span className="text-indigo-50 text-xs tracking-widest mt-0.5">UI DEVELOPER</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
};

export default BlogHome;

