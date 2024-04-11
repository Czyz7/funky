import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSeo = () => {
    return (
        <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20 mx-auto">
            <div className="container mx-auto px-4"> {/* Container for layout */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2">
                        <h1 className="text-3xl font-bold mb-4">SEO Services</h1>
                        <p className="mb-8">
                            Elevate your website&apos;s search engine rankings and drive organic traffic with our expert SEO services.
                        </p>
                        <Link href="/contact">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                                Get Started
                            </button>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image src="/seo_o.svg" alt="Hero SEO" width={512} height={512} className="hero-seo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSeo;
