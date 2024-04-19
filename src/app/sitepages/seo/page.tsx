import React from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import HeroSeo from '@/components/Hero/HeroSeo';
import SeoServ from '@/components/ServiceForms/SeoServ';

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

                <Block />

                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-900">Pricing for Keyword Research Services</h1>
                <Block />
                <SeoServ />
            </main>
        </>
    );
};

export default SEO;
