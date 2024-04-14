import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';

const Portfolio = () => {
    return (
        <Fragment>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <Navigation />
            <Block />


            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
            </main>
        </Fragment>
    );
};

export default Portfolio;
