import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import HeroSeo from '@/components/Hero/HeroSeo';
import SeoServ from '@/components/ServiceForms/SeoServ';
import Footer from '@/components/Footer';
import SeoBlock from '@/components/Spacings/seoBlocks';

const SEO = () => {

    return (
        <Fragment>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>

            <Navigation />
            <SeoBlock />
            <HeroSeo />

            <main className=" text-gray-800 py-20">

                <Block />

                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-900">Pricing for Keyword Research Services</h1>
                <Block />
                <SeoServ />
            </main>
            <Footer />
        </Fragment>
    );
};

export default SEO;
