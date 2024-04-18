import Head from 'next/head';
import Navigation from '@/components/Navigation';
import HeroHome from '@/components/Hero/HeroHome';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Testimonial1 from '@/components/Testimonial1';
import Block from '@/components/block';
import PortfolioLogos from '@/components/PortfolioLogos';

// ... other component imports
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

  const Home = () => {
    return (
      <Fragment>
        <Head>
          <title>Accessible Web Designs</title>
          {/* ... other meta tags */}
        </Head>
        <Link rel="icon" href="/favicon.ico" />
        <Navigation />
        <Block />
        <HeroHome />
        <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-9">
          {/* ... main content */}
          <Testimonial1 />
          <Block />
          <PortfolioLogos logos={logos} />
        </main>
        {/* ... footer */}
        {/* ... other sections (Services, Portfolio, etc.) */}
      </Fragment>
    );
  };

  return <Home />;
};

export default Portfolio;