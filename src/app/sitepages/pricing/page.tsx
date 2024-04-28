import Navigation from '@/components/Navigation';
import Head from 'next/head';
import HeroPrice from '@/components/Hero/HeroPrice';
import React, { Fragment } from 'react';
import PricingGallery from '@/components/PricingGallery';
import Footer from '@/components/Footer';
import PricingBlock from '@/components/Spacings/PricingBlock';

const Pricing = () => {
    return (
        <Fragment>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <Navigation />
            <PricingBlock />
            <HeroPrice />

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <PricingGallery />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Pricing;
