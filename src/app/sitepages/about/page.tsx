import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import Testimonial1 from '@/components/Testimonial1';
import Footer from '@/components/Footer';
import AboutBlock from '@/components/Spacings/AboutBlock';
import HeroAbout from '@/components/Hero/HeroAbout';
import AboutCta from '@/components/AboutCta';

const About = () => {

    return (
        <Fragment>
            <Head>
                <title>About Us | Blot AI</title>
                <meta name="description" content="Las Vegas web development experts at Blot AI. We harness advanced AI solutions to transform your website into a powerful growth engine. Wix, WordPress, SEO, and more - let's upgrade your web presence!" />
                <meta name="keywords" content="Las Vegas web development, AI web development, Wix development, WordPress development, SEO, digital marketing, website design, website development" />
                <meta name="location" content="Las Vegas, NV, Summerlin, Henderson, Southern Nevada, 89128" />
            </Head>

            <Navigation />
            <AboutBlock />
            <HeroAbout />
            <Block />
            <Block />
            <AboutCta />
            <main className=" text-gray-800 py-20">
                <Block />
                <Testimonial1 />
                <Block />
            </main>
            <Footer />
        </Fragment>
    );
};

export default About;

