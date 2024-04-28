import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Head from 'next/head';
import PortfolioLogos from '@/components/PortfolioLogos';
import Footer from '@/components/Footer';
import PortfolioBlock from '@/components/Spacings/PortfolioBlock';



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
            <PortfolioBlock />
            <main className=" text-gray-800 py-20">
                <PortfolioLogos logos={logos} />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Portfolio;
