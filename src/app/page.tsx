import Head from 'next/head';
import Navigation from '@/components/Navigation';
import HeroHome from '@/components/Hero/HeroHome';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Testimonial1 from '@/components/Testimonial1';
import Block from '@/components//Spacings/Block';
import PortfolioLogos from '@/components/PortfolioLogos';
import Footer from '@/components/Footer';
import '@/app/globals.css'
import BlogBlock from '@/components/Blog/BlogBlock';
import BlogBlocks from '@/components/Spacings/BlogBlocks';
import PortfolioBlock from '@/components/Spacings/PortfolioBlock';
import PortfolioScroll from '@/components/PortfolioScroll';


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

  const Home = () => {
    return (
      <Fragment>
        <Head>
          <title>Blot AI</title>
          {/* ... other meta tags */}
        </Head>
        <Link rel="icon" href="/favicon.ico" />
        <Navigation />
        <Block />
        <HeroHome />
        <main className="text-black py-9">
          {/* ... main content */}
          <BlogBlocks />
          <BlogBlock />
          <Block />
          <Testimonial1 />
          <Block />
          <PortfolioBlock />
          <Block />
          <PortfolioScroll />
          <Block />
          <Block />
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