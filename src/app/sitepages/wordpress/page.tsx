import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import HeroWordPress from '@/components/Hero/HeroWordPress';
import WordPressServ from '@/components/ServiceForms/WordPressServ';
import Footer from '@/components/Footer';
import WordPressBlock from '@/components/Spacings/wpBlock';

const Wordpress = () => {
    return (
        <Fragment>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <Navigation />
            <WordPressBlock />
            <HeroWordPress />

            <main className=" text-gray-800 py-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-800">Pricing for WordPress Website Development</h1>
                <Block />
                <WordPressServ />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Wordpress;
