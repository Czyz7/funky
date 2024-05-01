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
                <title>About Us | Vegas AI Solutions</title>
                <meta name="description" content="Learn more about Accessible Web Designs and our mission to make the web accessible to everyone." />
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

