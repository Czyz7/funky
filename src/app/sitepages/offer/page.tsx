import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Block from "@/components/block";
import HeroServe from "@/components/Hero/HeroServ";

const Offer = () => {
    return (
        <Fragment>
            <Head>
                <title>All Services</title>
                <meta name="description" content="I offer a range of coding services, including web development, mobile development, and data science." />
            </Head>
            <Navigation />
            <Block />
            <HeroServe />
            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">All Services</h1>
                    <p className="text-lg">
                        I offer a range of coding services, including web development, mobile development, and data science. I have experience working with a variety of technologies, including React, Next.js, Node.js, HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Python, and Git.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <Link href="/coding">
                            <button className="transition ease-in-out delay-150 text-black px-4 py-2 rounded-md bg-opacity-0 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-110 hover:bg-gradient-to-r from-amber-500 to-pink-500 duration-150">
                                CODING
                            </button>
                        </Link>
                        <Link href="/manage">
                            <button className="transition ease-in-out delay-150 text-black px-4 py-2 rounded-md bg-opacity-0 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-110 hover:bg-gradient-to-r from-amber-500 to-pink-500 duration-150">
                                Site Management
                            </button>
                        </Link>
                        <Link href="/redesign">
                            <button className="transition ease-in-out delay-150 text-black px-4 py-2 rounded-md bg-opacity-0 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-110 hover:bg-gradient-to-r from-amber-500 to-pink-500 duration-150">
                                Site Redesign
                            </button>
                        </Link>
                        <Link href="/blogpost">
                            <button className="transition ease-in-out delay-150 text-black px-4 py-2 rounded-md bg-opacity-0 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-110 hover:bg-gradient-to-r from-amber-500 to-pink-500 duration-150">
                                Blog Posts
                            </button>
                        </Link>
                        <Link href="/seo">
                            <button className="transition ease-in-out delay-150 text-black px-4 py-2 rounded-md bg-opacity-0 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-110 hover:bg-gradient-to-r from-amber-500 to-pink-500 duration-150">
                                SEO
                            </button>
                        </Link>
                        <Link href="/accessibility">
                            <button className="transition ease-in-out delay-150 text-black px-4 py-2 rounded-md bg-opacity-0 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-110 hover:bg-gradient-to-r from-amber-500 to-pink-500 duration-150">
                                Accessibility
                            </button>
                        </Link>
                        <Link href="/consult">
                            <button className="transition ease-in-out delay-150 text-black px-4 py-2 rounded-md bg-opacity-0 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-110 hover:bg-gradient-to-r from-amber-500 to-pink-500 duration-150">
                                CONSULTATION
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Offer;
