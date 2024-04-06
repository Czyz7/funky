import React from "react";
import { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";

const Develop = () => {
    return (
        <Fragment>
            <Head>
                <title>Coding Services</title>
                <meta name="description" content="I offer a range of coding services, including web development, mobile development, and data science." />
            </Head>
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold">Coding Services</h1>
                <p className="text-lg">
                    I offer a range of coding services, including web development, mobile development, and data science. I have experience working with a variety of technologies, including React, Next.js, Node.js, HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Python, and Git.
                </p>
                <ul className="list-disc pl-4">
                    <Link href="/services/web-development">Web development</Link>
                    <Link href="/services/mobile-development">Mobile development</Link>
                    <Link href="/services/data-science">Data science</Link>
                </ul>
            </div>
        </Fragment>
    );
};

export default Develop;
