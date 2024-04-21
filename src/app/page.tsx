import Head from 'next/head';
import Navigation from '@/components/Navigation';
import HeroHome from '@/components/Hero/HeroHome';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Testimonial1 from '@/components/Testimonial1';
import Block from '@/components/block';
import PortfolioLogos from '@/components/PortfolioLogos';
import Footer from '@/components/Footer';

// ... other component imports
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
      alt: 'Something',
      src: '/laptop.png',
    },
    {
      alt: 'Blah Blah',
      src: '/laptop.png',
    },
    {
      alt: 'Yada Yada',
      src: '/laptop.png',
    },
    {
      alt: 'Yeah Sure',
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
        <Footer />
        {/* ... other sections (Services, Portfolio, etc.) */}
      </Fragment>
    );
  };

  return <Home />;
};

export default Portfolio;