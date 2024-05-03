import Navigation from '@/components/Navigation';
import Head from 'next/head';
import HeroPrice from '@/components/Hero/HeroPrice';
import React, { Fragment } from 'react';
import PricingGallery from '@/components/PricingGallery';
import Footer from '@/components/Footer';
import PricingBlock from '@/components/Spacings/PricingBlock';
import Block from '@/components/Spacings/Block';

const Pricing = () => {
    return (
        <Fragment>
            <Head>
                <title>Pricing | Blot AI</title>
                <meta name="description" content="View our pricing plans for web development, SEO, and digital marketing services in Las Vegas. We offer a range of plans to meet the needs of businesses of all sizes." />
                <meta name="keywords" content="pricing, web development, SEO, digital marketing, Las Vegas" />
                <meta name="location" content="Las Vegas, NV, Summerlin, Henderson, Southern Nevada, 89128" />
            </Head>

            <Navigation />
            <PricingBlock />
            <HeroPrice />
            <main className=" text-gray-800 py-20">
                <Block />
                <Block />
                <PricingGallery />
                <Block />
                <Block />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Pricing;
