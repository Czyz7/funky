import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import HeroWordPress from '@/components/Hero/HeroWordPress';
import WordPressServ from '@/components/ServiceForms/WordPressServ';
import Footer from '@/components/Footer';

const Wordpress = () => {
    return (
        <Fragment>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <Navigation />
            <Block />
            <HeroWordPress />

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-900">Pricing for WordPress Website Development</h1>
                <Block />
                <WordPressServ />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Wordpress;
