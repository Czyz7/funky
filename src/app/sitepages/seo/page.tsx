import React from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import SeoKey from '@/components/ServiceForms/SeoKey';
import SeoOnin from '@/components/ServiceForms/SeoOnin';
import HeroSeo from '@/components/Hero/HeroSeo';
import SeoTechn from '@/components/ServiceForms/SeoTechn';

const SEO = () => {

    return (
        <>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>

            <Navigation />
            <Block />
            <HeroSeo />

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-900">Pricing for Technical SEO Services</h1>
                <Block />
                <SeoKey />
                <Block />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-900">Pricing for Keyword Research Services</h1>
                <Block />
                <SeoTechn />
            </main>
        </>
    );
};

export default SEO;
