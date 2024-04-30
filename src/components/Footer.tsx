import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className="text-gray-600 bg-gray-800 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col justify-center items-center">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left justify-center items-center">
                    <p className=" text-indigo-50 text-3xl text-center">Blot AI</p>
                    <br />
                    <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-white">

                        <Image
                            src="/blotLogoLg.png"
                            alt="blotLogoLg"
                            width={210}
                            height={210}
                            className='rounded-md'
                        />

                    </Link>
                    <br />
                    <p className="mt-2 text-sm text-white">Make your mark online with our AI solutions</p>
                    <br />
                </div>
                <div className="flex-grow justify-center flex flex-wrap  text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-indigo-50 tracking-widest text-2xl mb-3">Services</h2>
                        <br />
                        <nav className="list-none mb-10 flex-wrap justify-center items-center">
                            <li>
                                <Link href="/sitepages/coding" className="text-white hover:text-white">
                                    WordPress Development
                                </Link>
                            </li>
                            <br />
                            <li>
                                <Link href="/sitepages/wordpress" className="text-white hover:text-white">
                                    Wix Development
                                </Link>
                            </li>
                            <br />
                            <li>
                                <Link href="/sitepages/wix" className="text-white hover:text-white">
                                    Website Management
                                </Link>
                            </li>
                            <br />
                            <li>
                                <Link href="/sitepages/manage" className="text-white hover:text-white">
                                    Website Redesign
                                </Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-transparent tracking-widest text-2xl mb-3">Services</h2>
                        <br />

                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/sitepages/redesign" className="text-white hover:text-white">
                                    Blog Post Generation
                                </Link>
                            </li>
                            <br />
                            <li>
                                <Link href="/sitepages/blogpost" className="text-white hover:text-white">
                                    SEO
                                </Link>
                            </li>
                            <br />
                            <li>
                                <Link href="/sitepages/seo" className="text-white hover:text-white">
                                    Acessibility
                                </Link>
                            </li>
                            <br />
                            <li>
                                <Link href="/sitepages/accessibility" className="text-white hover:text-white">
                                    Consultation
                                </Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-indigo-50 tracking-widest text-2xl mb-3">Resources</h2>
                        <br />
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="/sitepages/about" className="text-white hover:text-white">
                                    About
                                </Link>
                            </li>
                            <br />
                            <li>
                                <Link href="/sitepages/pricing" className="text-white hover:text-white">
                                    Pricing
                                </Link>
                            </li>
                            <br />
                            <li>
                                <Link href="/blog/bloghome" className="text-white hover:text-white">
                                    Blog
                                </Link>
                            </li>
                            <br />
                            <li>
                                <Link href="/sitepages/contact" className="text-white hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </nav>
                    </div>


                </div>
            </div>

            <div className=" bg-gray-800">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">

                    <p className="text-indigo-50 text-sm text-center sm:text-left"> Blot AI © | Copyright 2024 | All Rights Reserved

                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-indigo-50 ml-3">

                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>

                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>

                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>

                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;  
