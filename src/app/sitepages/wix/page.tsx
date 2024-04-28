import React, { Fragment } from 'react'
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import HeroWix from '@/components/Hero/HeroWix';
import WixServ from '@/components/ServiceForms/WixServ';
import Footer from '@/components/Footer';
import WixBlock from '@/components/Spacings/wixBlock';

const Wix = () => {
    return (
        <Fragment>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <Navigation />
            <WixBlock />
            <HeroWix />

            <main className=" text-gray-800 py-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-800">Pricing for Wix Website Development</h1>
                <Block />
                <WixServ />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Wix;
