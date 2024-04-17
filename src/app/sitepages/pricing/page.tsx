import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import HeroPrice from '@/components/Hero/HeroPrice';
import { Fragment } from 'react';
import PricingGallery from '@/components/PricingGallery';

const Pricing = () => {
    return (
        <Fragment>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <Navigation />
            <Block />
            <HeroPrice />

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <PricingGallery />
            </main>
        </Fragment>
    );
};

export default Pricing;
