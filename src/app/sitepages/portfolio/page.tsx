import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import PortfolioLogos from '@/components/PortfolioLogos';



const Portfolio = () => {
    const logos = [
        {
            alt: 'Logo 1',
            src: '/mkLogo.webp',
            href: 'https://www.mk.com/',
        },
        {
            alt: 'Logo 2',
            src: '/pygLogo.webp',
            href: 'https://www.pygapparel.com',
        },
        {
            alt: 'Logo 3',
            src: '/fhtrLogo.png',
            href: 'https://www.mk.com/',
        },
        {
            alt: 'Logo 1',
            src: '/dmmLogo.png',
            href: 'https://www.mk.com/',
        },
        {
            alt: 'Logo 2',
            src: '/dogwareLogo.png',
        },
        {
            alt: 'Logo 3',
            src: '/laptop.png',
        },
        {
            alt: 'Logo 1',
            src: '/laptop.png',
        },
        {
            alt: 'Logo 2',
            src: '/laptop.png',
        },
        {
            alt: 'Logo 3',
            src: '/laptop.png',
        },
    ];

    return (
        <Fragment>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <Navigation />
            <Block />


            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <PortfolioLogos logos={logos} />
            </main>
        </Fragment>
    );
};

export default Portfolio;
