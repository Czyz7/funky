import Head from 'next/head';
import Navigation from '@/components/Navigation';
import HeroHome from '@/components/Hero/HeroHome';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Testimonial1 from '@/components/Testimonial1';
import Block from '@/components/block';

// ... other component imports

export default function Home() {
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

      </main>
      {/* ... footer */}
      {/* ... other sections (Services, Portfolio, etc.) */}
    </Fragment>
  );
}
