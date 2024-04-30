import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Head from 'next/head';
import PortfolioLogos from '@/components/PortfolioLogos';
import Footer from '@/components/Footer';
import PortfolioBlock from '@/components/Spacings/PortfolioBlock';
import PortfolioScroll from '@/components/PortfolioScroll';
import HeroPortfolio from '@/components/Hero/HeroPortfolio';
import Block from '@/components/Spacings/Block';




const Portfolio = () => {
    const logos = [
        {
            alt: 'Maries Kaliedoscope Lupus Non Profit Foundation',
            src: '/mkLogo.webp',
            href: 'https://www.mk.com/',
        },
        {
            alt: 'Protect Your Glory E-Commerce Store',
            src: '/pygLogo.webp',
            href: 'https://www.pygapparel.com',
        },
        {
            alt: 'Financial Harmony Tax Resolution',
            src: '/fhtrLogo.png',
            href: 'https://www.mk.com/',
        },
        {
            alt: 'Digital Mindmeld',
            src: '/dmmLogo.png',
            href: 'https://www.mk.com/',
        },
        {
            alt: 'Dogware LLC Dog Leash Company',
            src: '/dogwareLogo.png',
        },
        {
            alt: 'What&#39;s Cookin?',
            src: '/whatCookin1.png',
        },
        {
            alt: 'Accessible Web Designs',
            src: '/awd.png',
        },
        {
            alt: 'Culture Gym',
            src: '/cultureGym.png',
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
            <HeroPortfolio />
            <Block />
            <PortfolioScroll />
            <main className=" text-gray-800 py-20">
                <Block />
                <PortfolioLogos logos={logos} />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Portfolio;
