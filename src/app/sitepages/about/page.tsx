import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import Testimonial1 from '@/components/Testimonial1';

const About = () => {
    return (
        <Fragment>
            <Head>
                <title>About Us | Vegas AI Solutions</title>
                <meta name="description" content="Learn more about Accessible Web Designs and our mission to make the web accessible to everyone." />
            </Head>
            <Navigation />
            <Block />
            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <Testimonial1 />
            </main>

        </Fragment>
    );
};

export default About;
